const AbstractSeeder = require("./AbstractSeeder");

class CategorySeeder extends AbstractSeeder {
  constructor() {
    super({ table: "category", truncate: true });
  }

  run() {
    const categories = [
      {
        title: "Bracelets",
        picture: `${process.env.APP_HOST}/categoryPhotos/bracelet.jpg`,
        details: "Commander",
        exist: 1,
        refName: "cat_1",
      },
      {
        title: "Bagues",
        picture: `${process.env.APP_HOST}/categoryPhotos/ring.jpg`,
        details: "Commander",
        exist: 1,
        refName: "cat_2",
      },
      {
        title: "Colliers",
        picture: `${process.env.APP_HOST}/categoryPhotos/necklace.png`,
        details: "Commander",
        exist: 1,
        refName: "cat_3",
      },
      {
        title: "Boucles d'oreilles",
        picture: `${process.env.APP_HOST}/categoryPhotos/earrings.jpg`,
        details: "Commander",
        exist: 1,
        refName: "cat_4",
      },
      {
        title: "Montres",
        picture: `${process.env.APP_HOST}/categoryPhotos/watcch.jpg`,
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
