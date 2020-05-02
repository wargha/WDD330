//CH1

function getInput() {
  let input = Number(document.getElementById("input").value);
  document.getElementById("display-something").innerText = sumAllNumbers(input);
}

//CH2
function sumAllNumbers(num) {
  let total = 0;
  for (var i = num; i >= 0; --i) {
    console.log(i);
    total += i;
  }
  return total;
}

//CH3
function displaySum() {
  let input = Number(document.getElementById("input").value);
  let input2 = Number(document.getElementById("input2").value);
  document.getElementById("display-something").innerText = input + input2;
}

/* READING EXERCISES */
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

let object = {
  name: "Lucas",
  lname: "Wargha",
  id: 2,
};

let objArr = ["lucas", "wargha", 2]; // it also works!! :)
for (var prop in object) {
}

// generator obhect, mind blowing!!
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

console.log(gen.next().value); //1

console.log(gen.next().value); //2

//classes and inheritance, had no ideia other than using constructors and super on react that we could actually do this here
//EX FROM THE BOOK BELOW

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
// → 3,2
