const express = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); 

let products = [];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Product name is required' });
  }

  const newProduct = {
    id: uuidv4(),
    name,
    price: price || 0
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const removed = products.splice(index, 1)[0];
  res.json({ message: 'Deleted', product: removed });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
