namespace Animal {
  export class Cat {
    meow() {
      console.log('Cat meows');
    }
  }
}

const myCat = new Animal.Cat();
myCat.meow(); // Output: "Cat meows"
