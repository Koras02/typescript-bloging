class Spc {
    public publicProp: string;
    private privateProp: string;
    protected protectedProp: string;


    constructor() {
        this.publicProp = `public state`;
        this.privateProp = `private state`;
        this.protectedProp = `protected state`;
    }

    showPrivate() {
        console.log(this.privateProp);
    }
}

const example = new Spc();
console.log(example.publicProp); // i am public
example.showPrivate(); // i am private 
// console.log(example.privateProp); // Error 'private' is private 

