const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://harishpesara:harishreddy3113@in-aws.xbuxm.mongodb.net/")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')