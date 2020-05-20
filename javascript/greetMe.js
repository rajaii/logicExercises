//take a name in your function and greet the name capitalized
//greet me codewars 7kyu https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript

var greet = function(name) {
    let newName = name[0].toUpperCase()  
    for (let i = 0; i < name.length; i++) {
      if (i === 0) {
      continue;
      } else {
      newName += name[i].toLowerCase()
      }
    } 
    console.log(newName)
    return `Hello ${newName}!`
  };