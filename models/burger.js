// models lies between the ORM and the controller
const orm = require("../config/orm.js");

let burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb){

        orm.insertOne("burgers", cols, vals, function(result) {
            cb(result);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, (result) => {
            cb(result);
        });
    },
    vomit: function(cb){
        orm.vomitAll("burgers", (result) => {
            cb(result);
        });
    }

};


module.exports = burger;