const express = require('express');
const app = express();
const routes = require('./routes/testroutes');
const routes_products = require('./routes/routes-products');
const userRoutes = require('./routes/user-routes');
const cors = require('cors');

const connectDb = require('./config/config');
const { json } = require('body-parser');
require('dotenv').config();

app.use(json());

connectDb();
app.use(cors()); // Allow all origins

app.use('/', routes);
app.use('/api/products', routes_products);
app.use('/api/user',userRoutes);


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
