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

  async getProductByCategory(id){
    const [result] = await this.database.query(`SELECT p.*, cat.name, us.firstname, us.lastname, us.mail FROM gems.product AS p JOIN gems.category AS cat  ON p.id_category = cat.Id_category_list JOIN gems.user AS us ON p.id_user = us.id_user WHERE p.id_category = ? `, [id]);
    return result
  }

  async getSingleProduct(id){
    const [result] = await this.database.query(`SELECT p.*, cat.name as catname, us.firstname, us.lastname, us.mail FROM gems.product AS p JOIN gems.category AS cat  ON p.id_category = cat.Id_category_list JOIN gems.user AS us ON p.id_user = us.id_user WHERE p.Id_product= ? `, [id]);
    return result
  }

  async searchForProduct(value){

    const query = `SELECT * FROM gems.product WHERE name LIKE ?`;
    const [result] = await this.database.query(query,[`%${value}%`]);
    return result 
  }

  async readProductByUser(id){
    const [rows] = await this.database.query(
        `SELECT* from ${this.table} INNER JOIN user ON ${this.table}.Id_user = user.Id_user`,[id]
    )
return [rows];
}

async deleteProductByUser(data){
  const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE Id_user = ? AND Id_product = ?`,
      [data.Id_user, data.Id_product]
    );
return [rows];
}


}

module.exports = ProductRepository;
