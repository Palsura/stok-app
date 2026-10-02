const express = require('express');
const { products } = require('./db');

const app = express();

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  if (!product) return res.status(404).json({ error: 'no such product' });
  res.json(product);
});

// Anything else: a clear "not found" instead of an HTML error page.
app.all('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});

module.exports = app;

if (require.main === module) {
  const port = process.env.APP_PORT;
  const env = process.env.APP_ENV || 'development';
  if (!port) {
    console.error('APP_PORT is not set. Copy .env.example to .env and try again.');
    process.exit(1);
  }
  app.listen(port, '127.0.0.1', () => {
    console.log(`stok-app (${env}) listening on http://localhost:${port}`);
  });
}
