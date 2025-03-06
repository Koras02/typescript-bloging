type Dog = { bark: () => void };
type Cat = { meow: () => void };

function getNoise(animal: Dog | Cat) {
  if ('bark' in animal) {
    animal.bark(); // Dog 타입으로 인식되어 안전하게 호출
    console.log('This is Dog');
  } else {
    animal.meow();
    console.log('This is a Cat');
  }
}

const myPet: Dog = { bark: () => console.log('Woof') };
getNoise(myPet);
