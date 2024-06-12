const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
    constructor(){
        super ({table: "category"})
    }

    async readAll(){
        const [rows] = await this.database.query(
            `SELECT * FROM ${this.table}`
        )
        return rows;
    }

}

module.exports = CategoryRepository;