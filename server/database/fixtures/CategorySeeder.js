const AbstractSeeder = require("./AbstractSeeder");

class CategorySeeder extends AbstractSeeder {
  constructor() {
    super({ table: "category", truncate: true });
  }

  run() {
    const categories = [
      {
        name: "Bracelets",
        picture: "http://localhost:3311/categoryPhotos/bracelet.jpg",
        details: "Commander",
        exist: 1,
        refName: "cat_1",
      },
      {
        name: "Bagues",
        picture: "http://localhost:3311/categoryPhotos/ring.jpg",
        details: "Commander",
        exist: 1,
        refName: "cat_2",
      },
      {
        name: "Colliers",
        picture: "http://localhost:3311/categoryPhotos/necklace.png",
        details: "Commander",
        exist: 1,
        refName: "cat_3",
      },
      {
        name: "Boucles d'oreilles",
        picture: "http://localhost:3311/categoryPhotos/earrings.jpg",
        details: "Commander",
        exist: 1,
        refName: "cat_4",
      },
      {
        name: "Montres",
        picture: "http://localhost:3311/categoryPhotos/watcch.jpg",
        details: "Commander",
        exist: 1,
        refName: "cat_5",
      },
    ];

    categories.forEach((category) => {
      this.insert(category);
    });
  }
}

module.exports = CategorySeeder;
