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
    const [rows] = await this.database.query(
      `select  mail, is_admin from ${this.table}`
    );
    return rows;
  }

  async add(user) {
    const [result] = await this.database.query(
      `INSERT INTO user(firstname,lastname,mail,hashed_password) VALUES (?,?,?,?)`,
      [user.firstname, user.lastname, user.mail, user.hashedPassword]
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

  async readByEmailWithPassword(mail) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where mail = ?`,
      [mail]
    );

    return rows[0];
  }
}

module.exports = UserRepository;
