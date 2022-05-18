console.log('it works');

// func defintion

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the func body
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  console.log(total);
  return total;
}

// func call or run
// const myTotal = calculateBill(100, 0.13); // capture the return value
// const myTotal2 = calculateBill(200, 0.13);
// console.log(myTotal);

const myBill4 = calculateBill(100, undefined, 0.2); // full back to default


// func defintion
function sayHi(firstName) {
  return `hello ${firstName}`;
}

// const greeting = sayHi('libby');
// console.log(greeting);

// const myTotal3 = calculateBill(20 + 20 + 20 + 20, 0.15); // running an expression

// pass func as an agrument

function docterize(name) {
  return `Dr. ${name}`;
}

// set the default so doesn't error
function yell(name = '') {
  return `HEY ${name.toUpperCase()}`;
}

// const talk = docterize(yell());
// console.log(talk);

// yell(docterize('libby'));
