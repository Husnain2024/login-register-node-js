
const Product = require('../models/product')

const getAllProducts = async (req,res) => {

    const{company,name} = req.query;
    const queryObject = {};

if (company) {
    queryObject.company = {$regex: company};
}
if (name) {
    queryObject.name = {$regex: name};
}

    const items = await Product.find(queryObject);
    res.status(200).json({items})
}


module.exports = {getAllProducts}