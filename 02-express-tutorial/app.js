//import express module
const express = require('express');
const logger = require('./logger');
const peopleRouter = require('./routes/people');
const productRouter = require('./routes/product');
const { getProduct } = require('./controllers/product');

 //call express to be used 
const app = express();

// app.use('/', logger, (req, res) => {
//     res.send('Home')
// });

// app.get('/api/v1/people', (req, res) => {
//     res.json(people);
//   });
  

// Middleware
app.use(express.static('./methods-public'));
//parse form data 
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());
//people router 
app.use('/api/v1/people', peopleRouter);
//products router 
app.use('/api/v1/products', productRouter);

// app.get('/api/v1/products', getProduct);

app.all("*", (req, res) => {
    res.status(404).send("404");
  });

// Routes

// Add app.get and app.post statements here

// app.get('/api/v1/test', (req, res) => {
//     res.json({ message: 'It worked!' });
//   });

//   // API route - Get all products
// app.get('/api/v1/products', (req, res) => {
//     res.json(products);
//   });

//   app.post('/api/v1/people', (req, res) => {
//     const { name } = req.body
//     if (!name) {
//       return res
//         .status(400)
//         .json({ success: false, msg: 'please provide name value' })
//     }
//     const newPerson = { id: people.length, name };
//   people.push(newPerson);

//   res.status(201).json({ success: true, name })
// });
  

//   // API route - Get product by ID
// app.get('/api/v1/products/:productID', (req, res) => {
//     const { productID } = req.params;
//     const idToFind = parseInt(productID);
//     const product = products.find((p) => p.id === idToFind);
    
//     if (!product) {
//       res.status(404).json({ message: 'That product was not found.' });
//     } else {
//       res.json(product);
//     }
//   });
  
//   // API route - Search and limit products
//   app.get('/api/v1/query', (req, res) => {
//     const { search, limit } = req.query;
  
//     let filteredProducts = [...products];
  
//     if (search) {
//       filteredProducts = filteredProducts.filter((product) =>
//         product.name.toLowerCase().startsWith(search.toLowerCase())
//       );
//     }
  
//     if (limit) {
//       const limitValue = Number(limit);
//       filteredProducts = filteredProducts.slice(0, limitValue);
//     }
  
//     res.json(filteredProducts);
//   });
  
//   app.use((req, res) => {
//     res.status(404).send('Not found');
//   });
  
  app.listen(3000, () => {
    console.log('Server is listening on port 3000!');
  });

