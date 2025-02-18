function handlePet(pet: Pet) {
    if (pet.type === "cat") {
       pet.meow(); // Cat 메서드 호출     
    } else {
        pet.bark(); // Dog 메서드 호출
    }
}