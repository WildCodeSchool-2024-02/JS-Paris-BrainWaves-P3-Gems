const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    const users = [
      {
        firstname: "curtis",
        lastname: "dakouri",
        mail: "curtis.dakouri@gmail.com",
        password: "kirikou.24@",
        role: "user",
        refName: "use_1",
      },
      {
        firstname: "maxime",
        lastname: "maufront",
        mail: "maximmft@gmail.com",
        password: "kirikou.24@",
        role: "user",
        refName: "use_2",
      },
      {
        firstname: "coline",
        lastname: "grosso",
        mail: "coline.grosso94@gmail.com",
        password: "FindusIsa86@",
        role: "user",
        refName: "use_3",
      },
      {
        firstname: "mickael",
        lastname: "beaugrand",
        mail: "kirikou@gmail.com",
        password: "kirikou.24@",
        role: "user",
        refName: "use_4",
      },
    ];
    users.forEach((user) => {
      this.insert(user);
    });
  }
}

module.exports = UserSeeder;
