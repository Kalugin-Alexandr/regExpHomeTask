var addresses = require('./addresses');

var result = [];

var regStreet = /(\S.+?(?=,|дом|$))/;
var regHouse = /(\d+-[А-Я]|\d+(?![\w-])|$),?[(\/|кв.|\s|$)]*(\d+)?/;

for(var i = 0; i < addresses.length; i++){
     var temp = addresses[i].match(regHouse);
    result[i] = {
        street:addresses[i].match(regStreet)[0],
        house:temp[1],
        flat:temp[2]
    }
}

for(var i in result){
    console.log(result[i]);
}

module.exports = result;








