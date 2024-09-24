const path = require('path');
const express = require('express');
const PORT = 3000;
const indexRoutes = require ('./routes/index.routes')
const productsController = require('./controllers/productsController');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/products', productsController.detail)

app.get('/', indexRoutes);

app.get('product-detail.html', (req,res) => res.sendFile(path.join(__dirname, '..', 'views','product-detail.html')));
app.get('login.html', (req,res) => res.sendFile(path.join(__dirname, '..', 'views','login.html')));
app.get('products.html', (req,res) => res.sendFile(path.join(__dirname, '..', 'views','products.html')));
app.get('profile.html', (req,res) => res.sendFile(path.join(__dirname, '..', 'views','profile.html')));
app.get('register.html', (req,res) => res.sendFile(path.join(__dirname, '..', 'views','register.html')));
app.get('admin.html', (req,res) => res.sendFile(path.join(__dirname, '..', 'views','admin.html')));

app.listen(PORT, () => console.log('Server running in http://localhost:' + PORT));
