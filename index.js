// Code your solution in this file!
//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo
 const returnFirstTwoDrivers = function (drivers) {
    let firstTwoDrivers = drivers.slice(0, 2)
    return firstTwoDrivers 
}
const returnLastTwoDrivers = function (drivers) {
    let lastTwoDrivers = drivers.slice(-2)
    return lastTwoDrivers
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(number) {
    return function(){
        return number * number
    }
}