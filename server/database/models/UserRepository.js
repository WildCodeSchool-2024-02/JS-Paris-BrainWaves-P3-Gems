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

  async add(user) {
    const [result] = await this.database.query(
      `INSERT INTO user(firstname,lastname,mail,password) VALUES (?,?,?,?)`,
      [user.firstname, user.lastname, user.mail, user.hashedPassword]
    );
    return result;
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
