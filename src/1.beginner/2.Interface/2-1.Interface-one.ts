interface LabeledValue {
  Int: string;
}

function printInt(IntObj: LabeledValue) {
  console.log(IntObj.Int);
}

let myObj = { size: 10, Int: 'Size 20 Inter' };
printInt(myObj);
