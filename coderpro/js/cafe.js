class Animal {
  constructor (type, name) {
    this.type = type;
    this.name = name;
    this.belly = [];
  }

  digest () {
    this.belly.pop();
  }
}

class Cafe {
  constructor (menu) {
    this.menu = menu;
  }

  feed (animal) {
    const { type, belly, name } = animal;
    if (belly.length > 2) {
      console.log(`${type} named ${name} is full.  Try again after they have digested their food`);
      return `${type} named ${name} is full.  Try again after they have digested their food`
    }
    console.log(`feeding ${type}`);
    switch (type) { 
      case "dog":
        belly.push(this.menu.dogFeed);
        break;
      case "cat":
        belly.push(this.menu.catFeed);
        break;
      case "bird":
        belly.push(this.menu.birdFeed);
        break;
      default:
        belly.push(this.menu.water);
        break;
    }
    return animal;
  }
}

const dog = new Animal("dog", "Rusty");
const cat = new Animal("cat", "Sally");
const bird = new Animal("bird", "Chirpie");

const animalCafe = new Cafe({
  dogFeed: "beggin strips",
  catFeed: "pediggree",
  birdFeed: "sunflower seeds",
});

animalCafe.feed(dog);
animalCafe.feed(dog);
animalCafe.feed(dog);
animalCafe.feed(dog);
dog.digest();
dog.digest();
animalCafe.feed(dog);
console.log(dog.belly);
