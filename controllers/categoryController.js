const Categories = require('../models/categories');

module.exports = app => {
  app.get('/categories', (req, res) => {

    Categories.read(res);

  });

  app.post('/categories', (req, res) => {

    const category = req.body;

    Categories.create(category, res);

  });

  app.delete('/categories/:id', (req, res) => Categories.delete(req, res));
}