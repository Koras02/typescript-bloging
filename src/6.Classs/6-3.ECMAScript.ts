class ECMA {
    #privateField: string;

    constructor() {
        this.#privateField = "i am private";
    }

    getPrivateField() {
        return this.#privateField;
    }
}

const e = new ECMA();
console.log(e.getPrivateField()); // i am private 
console.log(e.#privateField); // Error: "privateField" is private;

