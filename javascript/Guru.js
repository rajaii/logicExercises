/* 
QUESTION 1:
Given a string and a word, describe a function that will return the number of 
 times that the word appears in the string.
 Example 1: string - "Hello world", word - "Hello" → output: 1
/Example 2: string - “The tiny fox bit the big fox”, word - “fox” → output: 2
*/

// Provide your solution below. Written text, pseudo code, or JavaScript is acceptable


function countWords(string, word) {
    //set variable to count the number of occurrences of word
    let count = 0;

    //split the string into individual words
    let countStr = string.split(' ');

    //loop through the split string and count the occurrences of word
    for (let i = 0; i < countStr.length; i++) {
        if (countStr[i] === word) {
            count += 1;
        }
    }

    //return the count
    return count;
}

/*
QUESTION 2:
Given a list of numbers, describe how you would find the sum of the squares of the numbers in the list.

Example 1: numbers - [ 4, 3, 12, 6 ], result - 205
Example 2: numbers - [ 0, 8, 1 ], result - 65
*/


// Provide your solution below. Written text, pseudo code, or JavaScript is acceptable

function findSumOfSquares (arrayOfNums) {
    //Use built in reduce function to add each square of each value in arrayOfNums and return the result
    return arrayOfNums.reduce((a,c) => a + c ** 2, 0)
}

/*
BONUS QUESTION:
Write a function that takes a date and time as parameters, and calculates a new date and time 
based on a provided duration.

Example 1: Starting date -> “2020-07-17 13:21:34”, duration -> “10 days”  → Output: “2020-07-27 13:21:34”
Example 2: Starting date -> “2020-07-17 13:21:34”, duration -> “10 minutes”  → Output: “2020-07-17 13:31:34”
*/

// Provide your solution below. Written text, pseudo code, or JavaScript is acceptable

function calculateNewDate(startDate, duration) {
    //add functionality to the Date object's prototype in order to manipulate the given date with ease
    Date.prototype.addSeconds = function(s) {
        this.setTime(this.getTime() + (s*1000));
        return this;
    }
    
    Date.prototype.addMinutes = function(m) {
        this.setTime(this.getTime() + (m*60*1000));
        return this;
    }
    
    Date.prototype.addHours = function(h) {
        this.setTime(this.getTime() + (h*60*60*1000));
        return this;
      }
    
    Date.prototype.addDays = function(d) {
        this.setTime(this.getTime() + (d*24*60*60*1000));
        return this;
      }
    
    Date.prototype.addMonths = function(m) {
        this.setMonth(this.getMonth()+m);
        return this;
      }

    Date.prototype.addYears = function(y) {
        this.setFullYear(this.getFullYear()+y);
        return this;
      }

    //create an instance of the Date object with the startDate
    let date = new Date(startDate);

    //split duration (brought to lower case, just in case) 
    let lowerCasedDuration = duration.toLowerCase();
    let durationArr = lowerCasedDuration.split(' ');

    //run the appropriate Date function and return the date, 
    for (let i = 0; i < durationArr.length; i++) {
        if (durationArr[i] === 'second' || durationArr[i] === 'seconds') {
        date.addSeconds(parseInt(durationArr[i-1], 10));
        } else if (durationArr[i] === 'minute' || durationArr[i] === 'minutes') {
            date.addMinutes(parseInt(durationArr[i-1], 10));
        } else if (durationArr[i] === 'hour' || durationArr[i] === 'hours') {
            date.addHours(parseInt(durationArr[i-1], 10));
        } else if (durationArr[i] === 'day' || durationArr[i] === 'days') {
            date.addDays(parseInt(durationArr[i-1], 10));
        } else if (durationArr[i] === 'month' || durationArr[i] === 'months') {
            date.addMonths(parseInt(durationArr[i-1], 10));
        } else if (durationArr[i] === 'year' || durationArr[i] === 'years') {
            date.addYears(parseInt(durationArr[i-1], 10));
        } else {
            continue
        }
    }
    
      return date


}













