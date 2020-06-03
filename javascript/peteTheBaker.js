//from codewars 5 kyu https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
    if (Object.keys(available).length < Object.keys(recipe).length) {
    return 0
    } 
    let quotients = []
    for (const ing in recipe) {
     if (!available.hasOwnProperty(ing)) {
     return false
     }
    }
    for (const i in available) {
      for (const j in recipe) {
      if (i === j) {
      quotients.push(available[i]/recipe[j])
      }
      }
    }
    console.log(`recipe: ${JSON.stringify(recipe)}, available: ${JSON.stringify(available)}, quotients: ${quotients}`)
    return Math.floor(Math.min(...quotients))
  }
  