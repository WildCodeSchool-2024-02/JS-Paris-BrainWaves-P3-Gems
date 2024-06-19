const AbstractSeeder = require("./AbstractSeeder");

class CategorySeeder extends AbstractSeeder{
    constructor(){
        super({table: "category", truncate: true});
    }

    run() {
        const newLocal = "http://localhost:3311/categoryPhotos/watch.jpg";
        const categories = [
            {name:"Bracelets", picture:"http://localhost:3311/categoryPhotos/bracelet.jpg",details:"Commander", exist:1},
            {name:"Bagues", picture:"http://localhost:3311/categoryPhotos/ring.jpg",details:"Commander", exist:1},
            {name:"Colliers", picture:"http://localhost:3311/categoryPhotos/necklace.png",details:"Commander", exist:1},
            {name:"Boucles d'oreilles", picture:"http://localhost:3311/categoryPhotos/earrings.jpg",details:"Commander", exist:1},
            {name:"Montres", picture:newLocal,details:"Commander", exist:1},
        ]

        categories.forEach((category) => {
            this.insert(category);
        })

    }


}

module.exports = CategorySeeder

