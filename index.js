const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
   return drivers = ['Antonia','Nuru'];
}

function returnLastTwoDrivers(drivers){
    return drivers = ['Amari','Mo'];

}

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }

function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  const fareDoubler = createFareMultiplier(2);

function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  const fareTripler = createFareMultiplier(3);
  

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  }
  