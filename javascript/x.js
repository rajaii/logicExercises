const a = new Date("12-23-2021")
//ms in a day86,400,000
var day = 60 * 60 * 24 * 1000;

var endDate = new Date(a.getTime() + day)
console.log(a)
console.log(endDate.toISOString().slice(0,10))
console.log(endDate.getTime())
console.log(`${endDate.toISOString().slice(5,10)}-${endDate.toISOString().slice(0,4)}`)


