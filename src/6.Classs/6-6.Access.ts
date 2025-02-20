class Accessor {
    private _value: number;

    constructor(value: number) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    set value(newValue: number) {
        this._value = newValue;
    }
}

const accessor = new Accessor(10);
console.log(accessor.value); // 10
accessor.value = 20;
console.log(accessor.value); // 20

