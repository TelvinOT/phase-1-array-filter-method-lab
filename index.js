// Code your solution h
function findMatching(drivers, query) {
    // Convert query to lowercase for case-insensitive comparison
    const lowercaseQuery = query.toLowerCase();
    
    // Filter the drivers array based on whether each driver matches the query
    return drivers.filter(driver => driver.toLowerCase() === lowercaseQuery);
  }
  // fuzzyMatch function
function fuzzyMatch(drivers, query) {
    // Filter the drivers array based on whether each driver's name starts with the query
    return drivers.filter(driver => driver.startsWith(query));
  }
  
  // matchName function
  function matchName(drivers, query) {
    // Filter the drivers array based on whether each driver's name matches the query
    return drivers.filter(driver => driver.name === query);
  }
  
