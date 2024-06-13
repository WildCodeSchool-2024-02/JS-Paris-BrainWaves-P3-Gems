const AbstractRepository = require("./AbstractRepository");

class ProductRepository extends AbstractRepository {
  constructor() {
    super({ table: "product" });
  }

  async add(product) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, details, price, Id_category, picture_jewell, picture_validation,  Id_user) VALUES(?, ?, ?, ?,?,?,?)`,
      [
        product.name,
        product.details,
        product.price,
        product.Id_category,
        product.picture_jewell,
        product.picture_validation,
        product.Id_user,
      ]
    );
    return result.insertId;
  }
}

module.exports = ProductRepository;
