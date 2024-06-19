const AbstractSeeder = require('./AbstractSeeder')

class ProductSeeder extends AbstractSeeder{
    constructor(){
        super({table: "product", truncate: true})
    }

    run(){
        const products = [
            { name:"collier 12 carrats", details:"collier details .....", price:500, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/necklace.png", picture_validation:"http://localhost:3311/categoryPhotos/necklace.png", validated:1, Id_user:1, Id_category:3},
            { name:"collier 12 carrats", details:"collier details .....", price:900, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/necklace.png", picture_validation:"http://localhost:3311/categoryPhotos/necklace.png", validated:1, Id_user:1, Id_category:3},
            { name:"collier 12 carrats", details:"collier details .....", price:1320, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/necklace.png", picture_validation:"http://localhost:3311/categoryPhotos/necklace.png", validated:1, Id_user:1, Id_category:3},
            { name:"chiane en or", details:"chiane en or details .....", price:1500, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/necklace.png", picture_validation:"http://localhost:3311/categoryPhotos/necklace.png", validated:1, Id_user:1, Id_category:3},
            { name:"Bagues 12 carrats", details:"Bagues details .....", price:4000, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/ring.jpg", picture_validation:"http://localhost:3311/categoryPhotos/ring.jpg", validated:1, Id_user:1, Id_category:2},
            { name:"Bagues 12 carrats", details:"Bagues details .....", price:9000, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/ring.jpg", picture_validation:"http://localhost:3311/categoryPhotos/ring.jpg", validated:1, Id_user:1, Id_category:2},
            { name:"Bagues 12 carrats", details:"Bagues details .....", price:2000, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/ring.jpg", picture_validation:"http://localhost:3311/categoryPhotos/ring.jpg", validated:1, Id_user:1, Id_category:2},
            { name:"Bagues 12 carrats", details:"Bagues details .....", price:32000, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/ring.jpg", picture_validation:"http://localhost:3311/categoryPhotos/ring.jpg", validated:1, Id_user:1, Id_category:2},
            { name:"Boucles d'oreilles", details:"Boucles d'oreilles details .....", price:450, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/earring.jpg", picture_validation:"http://localhost:3311/categoryPhotos/earring.jpg", validated:1, Id_user:1, Id_category:4},
            { name:"Boucles d'oreilles", details:"Boucles d'oreilles details .....", price:400, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/earring.jpg", picture_validation:"http://localhost:3311/categoryPhotos/earring.jpg", validated:1, Id_user:1, Id_category:4},
            { name:"Boucles d'oreilles", details:"Boucles d'oreilles details .....", price:300, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/earring.jpg", picture_validation:"http://localhost:3311/categoryPhotos/earring.jpg", validated:1, Id_user:1, Id_category:4},
            { name:"Boucles d'oreilles", details:"Boucles d'oreilles details .....", price:500, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/earring.jpg", picture_validation:"http://localhost:3311/categoryPhotos/earring.jpg", validated:1, Id_user:1, Id_category:4},
            { name:"Bracelets en or", details:"Bracelets details .....", price:6500, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/bracelet.jpg", picture_validation:"http://localhost:3311/categoryPhotos/bracelet.jpg", validated:1, Id_user:1, Id_category:1},                       
            { name:"Bracelets en or", details:"Bracelets details .....", price:6500, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/bracelet.jpg", picture_validation:"http://localhost:3311/categoryPhotos/bracelet.jpg", validated:1, Id_user:1, Id_category:1},       
            { name:"Bracelets en or", details:"Bracelets details .....", price:6500, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/bracelet.jpg", picture_validation:"http://localhost:3311/categoryPhotos/bracelet.jpg", validated:1, Id_user:1, Id_category:1},         
            { name:"Bracelets en or", details:"Bracelets en or details .....", price:6500, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/bracelet.jpg", picture_validation:"http://localhost:3311/categoryPhotos/bracelet.jpg", validated:1, Id_user:1, Id_category:1},
            { name:"Montres en or", details:"Montres en or  details .....", price:3600, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/watch.jpg", picture_validation:"http://localhost:3311/categoryPhotos/watch.jpg", validated:1, Id_user:1, Id_category:5},
            { name:"Montres en or", details:"Montres en or  details .....", price:28500, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/watch.jpg", picture_validation:"http://localhost:3311/categoryPhotos/watch.jpg", validated:1, Id_user:1, Id_category:5},
            { name:"Montres en or", details:"Montres en or  details .....", price:4500, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/watch.jpg", picture_validation:"http://localhost:3311/categoryPhotos/watch.jpg", validated:1, Id_user:1, Id_category:5},
            { name:"Rolex en or", details:"Rolex en or  details .....", price:70000, sold:0, picture_jewell:"http://localhost:3311/categoryPhotos/watch.jpg", picture_validation:"http://localhost:3311/categoryPhotos/watch.jpg", validated:1, Id_user:1, Id_category:5},
            
        ]

        products.forEach((product)=>{
            this.insert(product)
        })
    }
}

module.exports = ProductSeeder