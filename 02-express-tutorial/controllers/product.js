const {products} = require('../data');


const getProduct = (req,res) => {
res.json(products);
};

  // API route - Get product by ID
  const getProductByID = (req, res) => {
    const { productID } = req.params;
    const idToFind = parseInt(productID);
    const product = product.find((p) => p.id === idToFind);
    
    if (!product) {
      res.status(404).json({ message: 'That product was not found.' });
    } else {
      res.json(product);
    }
  };
  
  // API route - Search and limit products
  const getProductbySearch = (req, res) => {
    const { search, limit } = req.query;
  
    let filteredProducts = [...products];
  
    if (search) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().startsWith(search.toLowerCase())
      );
    }
  
    if (limit) {
      const limitValue = Number(limit);
      filteredProducts = filteredProducts.slice(0, limitValue);
    }
  
    res.json(filteredProducts);
  };
  

  module.exports = {getProduct, getProductByID, getProductbySearch};