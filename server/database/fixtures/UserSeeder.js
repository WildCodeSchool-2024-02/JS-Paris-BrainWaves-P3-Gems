const argon2 = require("argon2")
const AbstractSeeder = require("./AbstractSeeder");


class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  async run () {
    const users = [
      {
        firstname: "curtis",
        lastname: "dakouri",
        mail: "curtis.dakouri@gmail.com",
        password: await argon2.hash("kirikou.24@"),
        is_admin: 1,
        refName: "use_1",
      },
      {
        firstname: "maxime",
        lastname: "maufront",
        mail: "maximmft@gmail.com",
        password: await argon2.hash("Azerty12!!"),
        is_admin: 1,
        refName: "use_2",
      },
      {
        firstname: "coline",
        lastname: "grosso",
        mail: "coline.grosso94@gmail.com",
        password: await argon2.hash("FindusIsa86@"),
        is_admin: 1,
        refName: "use_3",
      },
      {
        firstname: "Mickael",
        lastname: "Beaugrand",
        mail: "mickael.beaugrand@outlook.fr",
        password: await argon2.hash("Salut1234."),
        is_admin: 1,
        refName: "use_4",
      },
    ];
    users.forEach((user) => {
      this.insert(user);
    });
  }
}

module.exports = UserSeeder;
