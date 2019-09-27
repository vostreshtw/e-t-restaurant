const mongoose = require("mongoose");
const Dish = require('./models/Dish');

const data = [{

        Name: "BUN DAU MAM TOM",
        preis: 7
    },
    {

        Name: "PIZZA",
        preis: 6.5
    },
    {

        Name: "BANH MI",
        preis: 8
    }
]

function seedDB() {
    Dish.remove({}, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("alle gelöscht");

        data.forEach((seed) => {
            Dish.create(seed, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("neues Gericht hinzugefügt!");
                }
            });
        });
    });
}

module.exports = seedDB;