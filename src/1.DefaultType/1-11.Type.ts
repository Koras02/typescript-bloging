let someValue: any = 'this is string';

// let strLength: number = (<string>someValue).length;

let strLength: number = (someValue as string).length;
