// from leetcode easy https://leetcode.com/problems/number-of-days-between-two-dates/



var daysBetweenDates = function(date1, date2) {
    const newDate1 = new Date(date1).getTime();
    const newDate2 = new Date(date2).getTime();

    const timeBetween = newDate2 - newDate1;
    const dayInMS = (1000 * 60 * 60 * 24);

    const days = timeBetween / dayInMS;

    return Math.abs(days);
};
