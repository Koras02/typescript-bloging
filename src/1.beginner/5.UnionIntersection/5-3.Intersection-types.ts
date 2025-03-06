interface Swimmer {
    swim: () => void;
}

interface Flyer {
    fly: () => void;
}

type FlyFlash = Swimmer & Flyer;

const flyingFish: FlyFlash = {
    swim: () => console.log("Swimming"),
    fly: () => console.log("Flying")
    
}
