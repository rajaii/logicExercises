//take a name in your function and greet the name capitalized

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