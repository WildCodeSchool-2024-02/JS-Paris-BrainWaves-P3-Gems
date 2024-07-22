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

  async getProductByCategory(id) {
    const [result] = await this.database.query(
      `SELECT p.*, cat.title, us.firstname, us.lastname, us.mail FROM gems.product AS p JOIN gems.category AS cat  ON p.id_category = cat.Id_category_list JOIN gems.user AS us ON p.id_user = us.id_user WHERE p.id_category = ? AND p.validated = true AND p.sold = false`,
      [id]
    );
    return result;
  }

  async getSingleProduct(id) {
    const [result] = await this.database.query(
      `SELECT p.*, cat.title as catname, us.firstname, us.lastname, us.mail FROM gems.product AS p JOIN gems.category AS cat  ON p.id_category = cat.Id_category_list JOIN gems.user AS us ON p.id_user = us.id_user WHERE p.Id_product= ? `,
      [id]
    );
    return result;
  }

  async searchForProduct(value) {
    const query = `SELECT * FROM gems.product WHERE name LIKE ?`;
    const [result] = await this.database.query(query, [`%${value}%`]);
    return result;
  }

  async readProductByUser(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} 
      INNER JOIN user ON ${this.table}.Id_user = user.Id_user 
      WHERE ${this.table}.Id_user = ? AND ${this.table}.validated = true AND ${this.table}.sold = false`,
     [id]
    );
    return [rows];
  }

  async readSells(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} 
      INNER JOIN user ON ${this.table}.Id_user = user.Id_user 
      WHERE ${this.table}.Id_user = ? AND ${this.table}.validated = true AND ${this.table}.sold = true`,
     [id]
    );
    return [rows];
  }

  async readProductToValidate() {
    const [rows] = await this.database.query(
      `SELECT * 
     FROM ${this.table} 
     INNER JOIN category ON ${this.table}.Id_category = category.Id_category_list 
     INNER JOIN user ON ${this.table}.Id_user = user.Id_user
     WHERE ${this.table}.validated = false`
    );
    return [rows];
  }

  async deleteProductByUser(data, IdUser) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE Id_user = ? AND Id_product = ?`,
      [IdUser, data.Id_product]
    );
    return rows;
  }

  async getProductFromWishlist(id) {
    const [rows] = await this.database.query(
      `SELECT p.*, cat.title AS categoryName FROM product AS p JOIN category AS cat  ON p.id_category = cat.Id_category_list  JOIN wish_list AS w ON w.Id_product = p.Id_product  WHERE w.Id_user=?`,
      [id]
    );
    return rows;
  }

  async validateProduct(IdProduct) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET validated = true WHERE Id_product = ?`,
      [IdProduct]
    );
    return [rows];
  }

  async sellProduct(IdProduct) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET sold = true WHERE Id_product = ?`,
      [IdProduct]
    );
    return [rows];
  }

async getProductByAsc(id){   

  const [rows] =  await this.database.query(`SELECT p.* FROM ${this.table} AS p JOIN category AS cat on p.Id_category = cat.Id_category_list  where p.Id_category = ?  order by p.price asc`, [id]);
  return rows
 }
 
 async getProductByDesc(id){   
 
   const [rows] =  await this.database.query(`SELECT p.* FROM ${this.table} AS p JOIN category AS cat on p.Id_category = cat.Id_category_list  where p.Id_category = ?  order by p.price desc`, [id]);
   return rows
 }
 
}

module.exports = ProductRepository;
