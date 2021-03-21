class Tables {
  init(connection) {

    this.connection = connection

    this.createTables();
  }

  createTables() {
    const createTableDeviceSql = `CREATE TABLE IF NOT EXISTS devices (id int NOT NULL AUTO_INCREMENT, category int NOT NULL, color varchar(16) NOT NULL, partNumber int NOT NULL, PRIMARY KEY(id));`
    const createTableCategoriesSql = `CREATE TABLE IF NOT EXISTS categories (id int NOT NULL AUTO_INCREMENT, name varchar(128) NOT NULL, PRIMARY KEY(id));`

    this.connection.query(createTableDeviceSql, (erro) => {
      if (erro)
        console.log(erro)
      else
        console.log('Tabela Devices criada com sucesso!');
    });

    this.connection.query(createTableCategoriesSql, (erro) => {
      if (erro)
        console.log(erro)
      else
        console.log('Tabela Categories criada com sucesso!');
    });

  }
}

module.exports = new Tables