const connection = require('../database/connection');

class Category {
  async create(category, res) {
    const sql = 'INSERT INTO categories SET ?'

    await connection.query(sql, category, (erro, results) => {
      if (erro)
        res.json(erro);
      else {
        res.json(results);
      }
    })
  }

  async read(res) {
    const sql = 'SELECT * FROM categories;';

    await connection.query(sql, (erro, results) => {
      if (erro)
        res.json(erro);
      else
        res.json(results);
    })
  }

  async delete(req, res) {
    const { id } = req.params;
    const sql = "DELETE FROM categories WHERE id = " + id + ";"

    await connection.query(sql, (error, results) => {
      if (error)
        res.json(error);
      else
        res.json(results);
    })
  }
}

module.exports = new Category