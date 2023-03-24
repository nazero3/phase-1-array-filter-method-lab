// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, str){
    let arr=[];
    drivers.filter(function (driver){
       if (driver.toLowerCase() === str.toLowerCase())
            arr.push(driver);
    })
    return arr;
}
 //console.log(findMatching(drivers,'bobby'));
function fuzzyMatch(drivers, str){
    let arr=[];
    drivers.filter(function (driver){
       if (driver.at(0) === str.at(0))
            arr.push(driver);
    })
    return arr;
}

function matchName(drivers, str){
    let obj = [];
    drivers.filter(function (driver){
        if (driver.name === str)
             obj.push(driver);
     })
     return obj;
}