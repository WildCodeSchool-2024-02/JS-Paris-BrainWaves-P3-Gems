const AbstractRepository = require('./AbstractRepository')

class WishListRepository extends AbstractRepository{

    constructor(){
        super({table: "wish_list"})
    }

    async create(wish){
        const [like] = await this.database.query(`INSERT INTO ${this.table} (Id_product, Id_user) VALUES (?, ?) `, [wish.Id_product, wish.Id_user])
        return like ; 
    }

    async delete (wish){
        const like  = await this.database.query(`DELETE FROM ${this.table} WHERE  Id_product = ? and Id_user = ? `, [wish.Id_product, wish.Id_user])
        return like ;
    }

    async WishListCount (id) {
        const [[row]] = await this.database.query(`SELECT count(Id_product) as count FROM ${this.table} WHERE Id_user = ? `, [id])
        return row;
    }
}




module.exports = WishListRepository