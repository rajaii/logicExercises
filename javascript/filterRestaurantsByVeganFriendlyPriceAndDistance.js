//  from leetcode medium https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance

var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    //set the filtered
    const filtered = restaurants.filter(r => {
         if (veganFriendly === 1 && r[2] === 1 && r[3] <= maxPrice && r[4] <= maxDistance) {
            return r; 
         } else if (veganFriendly === 0 && r[3] <= maxPrice && r[4] <= maxDistance) {
            return r; 
        }
    })
   
    filtered.sort((a,b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0]; 
        } else {
            return b[1] - a[1];
        }
    })
    
    return filtered.map(r => r[0]);
    
};