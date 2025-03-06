interface Cat {
    type: 'cat';
    meow: () => void;
}

interface Dog {
    type: 'dog';
    bark: () => void;
}

type Pet = Cat | Dog;

 
