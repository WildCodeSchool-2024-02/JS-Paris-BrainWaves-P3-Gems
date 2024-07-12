const AbstractRepository = require('./AbstractRepository')

class WishListRepository extends AbstractRepository{

    constructor(){
        super({table: "wish_list"})
    }

    async create(wish, userId){
        const [like] = await this.database.query(`INSERT INTO ${this.table} (Id_product, Id_user) VALUES (?, ?) `, [wish.Id_product, userId])
        return like ; 
    }

    async delete (idProduct, userId) {
        const like  = await this.database.query(`DELETE FROM ${this.table} WHERE  Id_product = ? and Id_user = ? `, [idProduct, userId])
        return like ;
    }

    async getWishlist (userId) {
        const row = await this.database.query(`SELECT * FROM ${this.table} WHERE Id_user = ? `, [userId])
        return row ;
    }

    async WishListCount (id) {
        
     const row  = await this.database.query(`SELECT count(*) as count FROM ${this.table} WHERE Id_user = ? `, [id])
  

        return row;
    }
}




module.exports = WishListRepository