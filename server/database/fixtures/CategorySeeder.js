const AbstractSeeder = require("./AbstractSeeder");

class CategorySeeder extends AbstractSeeder{
    constructor(){
        super({table: "category", truncate: true});
    }

    run() {
        const categories = [
            {name:"Bracelets", picture:"https://img.edenly.com/pt/40/origine-n45-bague-fiancailles-or-jaune-18-carats__3499955_1.png",details:"Commander", exist:1},
            {name:"Bagues", picture:"https://img.edenly.com/pt/40/origine-n45-bague-fiancailles-or-jaune-18-carats__3499955_1.png",details:"Commander", exist:1},
            {name:"Colliers", picture:"https://img.edenly.com/pt/40/origine-n45-bague-fiancailles-or-jaune-18-carats__3499955_1.png",details:"Commander", exist:1},
            {name:"Boucles d'oreilles", picture:"https://img.edenly.com/pt/40/origine-n45-bague-fiancailles-or-jaune-18-carats__3499955_1.png",details:"Commander", exist:1},
            {name:"Montres", picture:"https://img.edenly.com/pt/40/origine-n45-bague-fiancailles-or-jaune-18-carats__3499955_1.png",details:"Commander", exist:1},
        ]

        categories.forEach((category) => {
            this.insert(category);
        })

    }


}

module.exports = CategorySeeder