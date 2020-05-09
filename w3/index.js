// Team Activity

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

// 5. Sort the inventors by years lived

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// goto the link above and open the console. Paste the following two lines in.  That will create a list of links in memory that you can reference through the console. Use that list to finish the problem.
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));

// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const start = [
  { name: "car", value: 0 },
  { name: "van", value: 0 },
  { name: "truck", value: 0 },
  { name: "walk", value: 0 },
  { name: "bike", value: 0 },
];

const filtered = inventors.filter(function (item) {
  return item.year >= 1500 && item.year <= 1599;
});

const names = inventors.map(function (item) {
  return item.first + " " + item.last;
});

console.log(names);
const sortBithdates = inventors.sort(function (a, b) {
  return a.year - b.year;
});

console.log(sortBithdates);
const reducedYears = inventors.reduce(function (total, item) {
  let yearsLived = item.passed - item.year;
  return total + yearsLived;
}, 0);

console.log(reducedYears);

const sortYearsLived = inventors.sort(function (a, b) {
  let yearsA = a.passed - a.year;
  let yearsB = b.passed - b.year;
  return yearsA - yearsB;
});

console.log(sortYearsLived);
const category = document.querySelector(".mw-category");
const links = Array.from(category.querySelectorAll("a"));
const streetNames = links.map(function (link) {
  return link.outerText;
});

const ourStreets = [
  "Boulevards of Paris",
  "City walls of Paris",
  "Thiers wall",
  "Wall of Charles V",
  "Wall of Philip II Augustus",
  "City gates of Paris",
  "Haussmann's renovation of Paris",
  "Boulevards of the Marshals",
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone",
];

const filterStreets = streetNames.filter(function (item) {
  return item.includes("de");
});

console.log(filterStreets);

const eachOf = [
  { name: "car", value: 0 },
  { name: "truck", value: 0 },
  { name: "bike", value: 0 },
  { name: "walk", value: 0 },
  { name: "van", value: 0 },
];

const count = data.reduce(function (result, item) {
  let index = eachOf.indexOf(item.name);
  result[index].value++;
}, eachOf);

console.log(count);

// Reading Exercises

function sayThis() {
  console.log(this);
}
const boundFunc = sayThis.bind(null, 1, 2, 3, 4, 5);

let dots = [];
for (let i = 0; i < 12; i++) {
  let node = document.createElement("div");
  node.className = "trail";
  document.body.appendChild(node);
  dots.push(node);
}
let currentDot = 0;

window.addEventListener("mousemove", (event) => {
  let dot = dots[currentDot];
  dot.style.left = event.pageX - 3 + "px";
  dot.style.top = event.pageY - 3 + "px";
  currentDot = (currentDot + 1) % dots.length; //why?
});
