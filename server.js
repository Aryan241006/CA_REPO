const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config()
app.use(express.json());

PORT = 8080

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})