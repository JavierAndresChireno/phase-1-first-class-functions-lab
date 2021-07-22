const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers =() => {
    return drivers.slice(0,2,);
}

const returnLastTwoDrivers = ()=>{
    return drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(n){ 
    return function(){
        return n **2
    }
}

const fareDoubler = (n) =>{
    return n * 2 ;
}

const fareTripler = (n) =>{
    return n * 3 ;
}

function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}
    
