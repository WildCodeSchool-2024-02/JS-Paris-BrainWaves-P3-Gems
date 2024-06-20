const AbstractSeeder = require("./AbstractSeeder")

class UserSeeder extends AbstractSeeder{
    constructor(){
        super({table:"user", truncate : true})
    }

    run(){
        const users =[
            {firstname:"curtis", lastname:"dakouri", mail:"curtis.dakouri@gmail.com", password:"kirikou.24@", role:"user"},
            {firstname:"kiri", lastname:"kou", mail:"kirikou@gmail.com", password:"kirikou.24@", role:"user"}
        ]
     users.forEach((user)=> {
        this.insert(user)
     })
    }
}

module.exports = UserSeeder;
