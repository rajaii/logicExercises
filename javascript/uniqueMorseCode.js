const regex = new RegExp(/[^a-z+]/g)

let str = 'hi2 ali goed to3 find'
str = str.split(' ')

str = str.map(s => s.replace(regex, ''))
console.log(str)



