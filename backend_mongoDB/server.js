const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// const URI_USER = process.env.USERS_URI;
const URI_PROD = process.env.PRODS_URI;

// mongoose.connect(URI_USER, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
// mongoose.connection.once('open', () => { console.log('MongoDB connection established successfully for user data'); });

mongoose.connect(URI_PROD, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => { console.log('MongoDB connection established successfully for products data'); });

const router = require('./route.js');
app.use('/createuser', router);

app.use('/createprods', router);

app.listen(port, () => { console.log(`Server is running on port: ${port}`); });
