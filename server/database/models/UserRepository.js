const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async readProduct() {
    const [rows] = await this.database.query(
      `select * from ${this.table} INNER JOIN product ON ${this.table}.Id_user = product.Id_user`
    );
    return [rows];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async add(user) {
    const [result] = await this.database.query(
      `INSERT INTO user(firstname,lastname,mail,password,role) VALUES (?,?,?,?,"user")`,
      [user.firstname, user.lastname, user.mail, user.password]
    );
    return result;
  }

  async read(id) {
    const [[rows]] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE Id_user = ?`,
      [id]
    );
    return rows;
  }
}

module.exports = UserRepository;
