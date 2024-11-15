const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true }, // Enforce uniqueness
    img: { type: String, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Product', productSchema);
