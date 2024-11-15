const express = require('express');
const router = express.Router();
const Products = require('../models/ProductsModel');
const mongoose = require('mongoose');

// Middleware for validating Object IDs
const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid Product ID' });
    }
    next();
};

// Middleware for finding a product by ID
const findProductById = async (req, res, next) => {
    try {
        const product = await Products.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        req.product = product; // Attach product to the request
        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Route: GET /products/count
// Description: Get total count of products
router.get('/count', async (req, res) => {
    try {
        const count = await Products.countDocuments();
        return res.status(200).json({ count });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: error.message });
    }
});

// Route: GET /products/all
// Description: Get all products (with optional pagination)
router.get('/all', async (req, res) => {
    const { page = 1, limit = 10 } = req.query; // Defaults: page=1, limit=10
    try {
        const products = await Products.find()
            .skip((page - 1) * limit)
            .limit(Number(limit));
        return res.status(200).json(products);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: error.message });
    }
});

// Route: POST /products/add
// Description: Add a new product
router.post('/add', async (req, res) => {
    try {
        const newProduct = new Products(req.body);
        await newProduct.save();
        return res.status(201).json(newProduct);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


// Route: PUT /products/edit/:id
// Description: Update a product
router.put('/edit/:id', findProductById, async (req, res) => {
    try {
        Object.assign(req.product, req.body); // Update fields
        const updatedProduct = await req.product.save();

        return res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: error.message });
    }
});

// Route: DELETE /products/delete/:id
// Description: Delete a product
router.delete('/delete/:id', findProductById, async (req, res) => {
    try {
        await req.product.deleteOne();
        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: error.message });
    }
});

module.exports = router;
