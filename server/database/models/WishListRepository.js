const AbstractRepository = require('./AbstractRepository')


class WishListRepository extends AbstractRepository{
    constructor(){
        super({table:'wish_list'})
    }

    async addToWishlist(idProduct, idUser){
        const [row] = await this.database.query(`INSERT INTO gems.wish_list (Id_product, Id_user) VALUES (?, ?)`, [idProduct, idUser])
        return row
    }

    async getIt (id){
        const [row] = await this.database.query(`SELECT p.*, cat.name, us.firstname, us.lastname, us.mail FROM gems.product AS p JOIN gems.category AS cat  ON p.id_category = cat.Id_category_list JOIN gems.user AS us ON p.id_user = us.id_user JOIN gems.wish_list AS w ON w.Id_product = p.id_product WHERE w.Id_user = ?`, [id]);
        return row
    }

    async deleteFromWishList (idProduct, idUser){
        const [row] = await this.database.query(`DELETE FROM gems.${this.table} WHERE Id_product = ? and Id_user = ?`, [idProduct, idUser]);
        return row;
    }
}

module.exports=WishListRepository;