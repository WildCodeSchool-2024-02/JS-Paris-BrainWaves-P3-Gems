const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository{
    constructor(){
        super({table:"user"});
    }


    async readProduct(){
        const [rows] = await this.database.query(
            `select * from ${this.table} INNER JOIN product ON ${this.table}.Id_user = product.Id_user`
        )
    return [rows];
    }
}

module.exports = UserRepository;