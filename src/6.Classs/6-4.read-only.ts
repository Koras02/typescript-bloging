class ReadOnly {
    readonly name: string;

    constructor(name:string) {
        this.name = name;
    }
}

const readonly = new ReadOnly("James");

console.log(readonly.name); // "James"
// console.log(readonly.name = "Kyoo"); // Error: "Kyoo" is read only!

