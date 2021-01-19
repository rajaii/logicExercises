const regex = new RegExp(/^(?=.{6,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*$/)

console.log(regex.test('Ali4'))