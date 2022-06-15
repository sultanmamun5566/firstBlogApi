const express = require('express');
const mongoose = require('mongoose');
app = express();
const dotenv = require('dotenv/config')
const router=require('./routes/index')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// input index.js 
app.use(router) 

// const url = process.env.DB_USER
mongoose.connect(process.env.DB_USER, () => {
    console.log('yes database connect')
})
// mongoose.connect(process.env.DB_USER, (req, res) => {
//     console.log('yes')
// })

app.listen(5000, () => {
    console.log('port in')
})