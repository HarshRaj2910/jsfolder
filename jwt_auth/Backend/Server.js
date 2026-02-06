const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/mern-auth")
     .then(() => {
        console.log('MongoDB Connected...');
     })
     .catch((err) => {
        console.error('Cannot connect to DB:', err);
     });

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.listen(PORT,()=>console.log("Server connected"));