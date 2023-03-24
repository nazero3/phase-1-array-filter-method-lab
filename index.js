// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, str){

    let arr=drivers.filter(function (driver){
        return driver.toLowerCase() === str.toLowerCase();
    })
    return arr;
}

function fuzzyMatch(drivers, str){
    let arr = drivers.filter(function (driver){
        return driver.at(0) === str.at(0);
    })
    return arr;
}

function matchName(drivers, str){
     let obj = drivers.filter(function (driver){
        return driver.name === str;
     })
     return obj;
}