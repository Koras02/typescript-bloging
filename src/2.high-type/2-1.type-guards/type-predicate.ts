function isDog(animal: Dog | Cat): animal is Cat {
  return (animal as Dog).bark !== undefined;
}

const pet: Dog | Cat = { bark: () => console.log('Woof!') };

if (isDog(pet)) {
  pet.bark(); // 안전한게 Dog 타입으로 사용
}
