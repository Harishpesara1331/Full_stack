const express = require('express');
const port = 3000;

const app = express();

app.get('/',(req, res) => {
    res.status(200).json('name : P.Harish Reddy,22-547');
})
app.listen(port,()=>{
    console.log(`Server is running in Port : ${port}`)
})