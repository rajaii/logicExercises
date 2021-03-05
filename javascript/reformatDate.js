//from leetcode easy: https://leetcode.com/problems/reformat-date/

var reformatDate = function(date) {
    //make the monthObject to equivocate and retDate to concat and return
    const monthObj = {"Jan": '01', "Feb": '02', "Mar": '03', "Apr": '04', "May": '05', "Jun": '06', "Jul": '07', "Aug": '08', "Sep": '09', "Oct": '10', "Nov": '11', "Dec": '12'}
    let retDate = '';
    
    //split d and concat to retDate accordingly
    const d = date.split(' ');
    retDate += `${d[2]}-`
    retDate += `${monthObj[d[1]]}-`  
   
    //split d[0] to get rid of the letters and only use the numbers
    
    let regex = /[snrt]/;
    let day = d[0].split(regex);
    if (day[0].length > 1) {
    retDate += day[0];
    } else {
    retDate += `0${day[0]}`;
    }
    
    
    return retDate;
};

//edge cases: 
//?'s: limits on time/space? Are months capitalized always?  

//PSEUDO:
//make object with {month: numberMonth} fromat
//set monthObj = {}
//set retDate = '';
//let d = date.split(' ');
//retDate += `${d[2]-}`
//retDate += `${monthObj[d[1]]-}`

//d[0].split('t')
//retDate += d[0][0]