let myNames = require("../names.json");
let images = require("../images/men");

var MAX_RESULTS = 5000;

exports.index = function (req, res) {
    res.send('Random User API');

}
exports.api = function (req,res){
    this.results = req.query.results;
    this.seed = req.query.seed;
    res.send(generatedNames(this.results, this.seed));
}
function generatedNames(results, seed){
    this.results = results;

    if (this.results > MAX_RESULTS){
        this.results = MAX_RESULTS;
    }

    this.seed = seed;
    let rand = require('random-seed').create(this.seed);
    
    var gender;
    var picRand;
    var picNum;
    var genRand;
    var userName;
    var picMedium;
    var age;
    var cell;
    var email;
    var firstName, lastName, street, city, state;

    var name = {
        "results": []
    }

    for (var i = 0; i < this.results; i++){
        genRand = rand(2);
        picRand = rand(40) +1;
        age = rand(100) - 1;

        if (picRand < 10) {
            picNum = "00" + picRand;
        } else if (picRand < 100) {
            picNum = "0" + picRand;
        }else {
            picNum = "" + picRand;
        }
        if (genRand == 0) {
            gender = "male";
            picMedium =  ("http://localhost:3000/images/m" + picNum + ".jpg");
            firstName = myNames.male_names[rand(myNames.male_names.length)];
            lastName = myNames.last_names[rand(myNames.last_names.length)];
            city = myNames.city_endings[rand(myNames.city_endings.length)];
            state = myNames.states[rand(myNames.states.length)];
            userName = myNames.username_a[rand(myNames.username_a.length)] + firstName;
            cell = myNames.cell[rand(myNames.cell.length)];
            email = myNames.email[rand(myNames.email.length)];
        }
        else {
            gender = "female";
            picMedium = "http://localhost:3000/images/f" + picNum + ".jpg";
            firstName = myNames.female_names[rand(myNames.female_names.length)];
            lastName = myNames.last_names[rand(myNames.last_names.length)];
            city = myNames.city_endings[rand(myNames.city_endings.length)];
            state = myNames.states[rand(myNames.states.length)];
            userName = myNames.username_a[rand(myNames.username_a.length)] + firstName;
            cell = myNames.cell[rand(myNames.cell.length)];
            email = myNames.email[rand(myNames.email.length)];
        }

        street = myNames.street[rand(myNames.street.length)] + " " + myNames.street_types[rand(myNames.street_types.length)];
        let person = {
            "gender" : gender,
            name: {
                "first": firstName,
                "last": lastName
            },
            location: {
                "street": street,
                "city": city,
                "state": state
            },
            "userName": userName,
            picture:{
                "medium": picMedium
            },
            dob : {
                "age": age
            },
            "cell" : cell,
            "email" : email
        }
        console.log(person);
        name.results.push(person);
    }
    return name;
}


