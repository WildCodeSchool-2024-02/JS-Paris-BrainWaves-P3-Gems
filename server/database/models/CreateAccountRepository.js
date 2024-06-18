const AbstractRepository = require("./AbstractRepository");

class CreateAccountRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async add(user) {
    const [result] = await this.database.query(
      `INSERT INTO user(firstname,lastname,mail,password,role) VALUES (?,?,?,?,"user")`,
      [user.firstname, user.lastname, user.mail, user.password]
    );
    return result;
  }
}

module.exports = CreateAccountRepository;
