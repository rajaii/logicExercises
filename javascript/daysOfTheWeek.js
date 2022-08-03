//from leetcode easy:https://leetcode.com/problems/day-of-the-week

var dayOfTheWeek = function(day, month, year) {
  const months = {
      "1": "January",
      "2": "February",
      "3": "March",
      "4": "April",
      "5": "May",
      "6": "June",
      "7": "July",
      "8": "August",
      "9": "September",
      "10": "October",
      "11": "November",
      "12": "December",
  }
  
  const date = `${months[month]} ${day}, ${year}`;
  const dae  = new Date(date).getDay();
  
  const days = {
      "1": "Monday",
      "2": "Tuesday",
      "3": "Wednesday",
      "4": "Thursday",
      "5": "Friday",
      "6": "Saturday",
      "0": "Sunday",
  }
  
  return days[dae];
};