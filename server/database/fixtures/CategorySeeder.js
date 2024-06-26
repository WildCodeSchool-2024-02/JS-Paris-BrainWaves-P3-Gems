const AbstractSeeder = require("./AbstractSeeder");

class CategorySeeder extends AbstractSeeder {
  constructor() {
    super({ table: "category", truncate: true });
  }

  run() {
    const categories = [
      {
        title: "Bracelets",
        picture: "http://localhost:3311/categoryPhotos/bracelet.jpg",
        details: "Commander",
        exist: 1,
        refName: "cat_1",
      },
      {
        title: "Bagues",
        picture: "http://localhost:3311/categoryPhotos/ring.jpg",
        details: "Commander",
        exist: 1,
        refName: "cat_2",
      },
      {
        title: "Colliers",
        picture: "http://localhost:3311/categoryPhotos/necklace.png",
        details: "Commander",
        exist: 1,
        refName: "cat_3",
      },
      {
        title: "Boucles d'oreilles",
        picture: "http://localhost:3311/categoryPhotos/earrings.jpg",
        details: "Commander",
        exist: 1,
        refName: "cat_4",
      },
      {
        title: "Montres",
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
