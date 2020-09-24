const API_KEY = "63377d3005155c9326790be4bd611513";
const rates = [];
const input = document.querySelector("input");

const date = new Date();
const currentDate = date.toISOString().slice(0, 10);

input.value = currentDate;

let tbody = document.querySelector("tbody");
const div = document.getElementById("id");
let p = document.createElement("p");
p.innerHTML = "hejsan";
div.appendChild(p);

const descending = [];
const ascending = [];

let dec = false;

const up = document.getElementById("up");
const down = document.getElementById("down");
// up.addEventListener("click", () => {
//   dec = true;
//   console.log(dec);
// });

// const getRates = function (result) {
//   // console.log(result);
//   let arr = [];
//   arr.push(result);

//   // ascending.push(result.sort((a, b) => a.value - b.value));

//   let tr = document.createElement("tr");
//   let td = document.createElement("p");
//   let td2 = document.createElement("td");

//   // td.innerHTML = ascending[0][0].type;
//   // td2.innerHTML = ascending[0][0].value;

//   // tr.appendChild(td);
//   // tr.appendChild(td2);

//   // tbody.appendChild(tr);
// };

// axios(
//   `http://data.fixer.io/api/${currentDate || "latest"}?access_key=${API_KEY}`
// ).then((res) => {
//   const thisRate = res.data.rates;

//   for (rate in thisRate) {
//     rates.push({ type: rate, value: thisRate[rate] });
//     let result = { type: rate, value: thisRate[rate] };

//     getRates(result);

//     ascending.push(rates.sort((a, b) => a.value - b.value));
//     descending.push(rates.sort((a, b) => b.value - a.value));
//     // console.log(ascending[0][0].value);

//     // let tr = document.createElement("tr");
//     // let td = document.createElement("p");
//     // let td2 = document.createElement("td");

//     // td.innerHTML = ascending[0][0].type;
//     // td2.innerHTML = ascending[0][0].value;

//     // tr.appendChild(td);
//     // tr.appendChild(td2);

//     // tbody.appendChild(tr);

//     up.addEventListener("click", () => {
//       dec = true;
//       console.log(dec);
//     });

//     down.addEventListener("click", () => {
//       dec = false;
//       console.log(dec);
//     });

//     // console.log(dec);

//     // ascending / stigande
//     // rates.sort((a, b) => a.value - b.value);

//     // descending / nedåtgående
//     // rates.sort((a, b) => b.value - a.value);
//   }

//   input.addEventListener("change", (e) => {
//     axios(
//       `http://data.fixer.io/api/${e.target.value}?access_key=${API_KEY}`
//     ).then((res) => {
//       const thisRate = res.data.rates;

//       for (rate in thisRate) {
//         rates.push({ type: rate, value: thisRate[rate] });

//         // console.log(rates.sort((a, b) => b.value - a.value));
//         ascending.push(rates.sort((a, b) => a.value - b.value));
//         descending.push(rates.sort((a, b) => b.value - a.value));

//         console.log(ascending);

//         getRates;

//         // ascending / stigande
//         // rates.sort((a, b) => a.value - b.value);

//         // descending / nedåtgående
//         // rates.sort((a, b) => b.value - a.value);
//       }
//     });
//   });
// });

// ascending / stigande
// console.log(rates.sort((a, b) => b.value - a.value));

// descending / nedåtgående
// rates.sort((a, b) => b.value - a.value);

let arr = [];
axios(
  `http://data.fixer.io/api/${currentDate || "latest"}?access_key=${API_KEY}`
).then((res) => {
  let rates = res.data.rates;
  for (result in rates) {
    // console.log(result, rates[result]);
    arr.push({ type: result, value: rates[result] });
  }
  // for (let x of arr) console.log(x);
  // arr.sort((a, b) => sort.push(a.value - b.value));

  // console.log(sort);

  arr.sort((a, b) => {
    return a.value - b.value;
  });

  console.log(arr);
  // for (x of sort) console.log(x);
});

let testArr = [];
let testObj = {};
testObj.a = 1;
testObj.b = 2;
testObj.c = 3;
testObj.d = 4;
testObj.e = 5;
console.log(testObj);

for (x in testObj) {
  testArr.push({ v: testObj[x] });
}
// testArr.map((a) => console.log(a));
// console.log(testArr);
testArr.sort((a, b) => {
  return b.v - a.v;
});

// console.log(testArr);
