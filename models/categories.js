const connection = require('../database/connection');

class Category {
  create(category, res) {
    const sql = 'INSERT INTO categories SET ?'

    connection.query(sql, category, (erro, results) => {
      if (erro)
        res.json(erro);
      else {
        res.json(results);
      }
    })
  }

  read(res) {
    const sql = 'SELECT * FROM categories;';

    connection.query(sql, (erro, results) => {
      if (erro)
        res.json(erro);
      else
        res.json(results);
    })
  }

  delete(req, res) {
    const { id } = req.params;
    const sql = "DELETE FROM categories WHERE id = " + id + ";"

    connection.query(sql, (error, results) => {
      if (error)
        res.json(error);
      else
        res.json(results);
    })
  }
}

module.exports = new Category