require('dotenv').config()
const customExpress = require('./config/customExpress');
const connection = require('./database/connection');
const table = require('./database/table');

connection.connect(error => {
  if (error)
    console.log(error)
  else {
    console.log('conectado com sucesso!')

    table.init(connection);

    const app = customExpress();

    app.listen(process.env.PORT || 3000, () => console.log('servidor rodando'));
  }
});