const API_KEY = "63377d3005155c9326790be4bd611513";
const rates = [];
const input = document.querySelector("input");

const date = new Date();
const currentDate = date.toISOString().slice(0, 10);

input.value = currentDate;
let obj = {};
let y;

axios(
  `http://data.fixer.io/api/${currentDate || "latest"}?access_key=${API_KEY}`
).then((res) => {
  const thisRate = res.data.rates;

  console.log(thisRate);

  for (rate in thisRate) {
    console.log(rate, thisRate[rate]);
    // obj.rates.push([rate, thisRate[rate]]);
    (obj.prop = rate), thisRate[rate];
  }

  // for (x of rates) console.log(x);

  input.addEventListener("change", (e) => {
    axios(
      `http://data.fixer.io/api/${e.target.value}?access_key=${API_KEY}`
    ).then((res) => {
      const rates = res.data.rates;
      console.log(rates);
      // for (let x in rates) {
      //   arr.push(x);
      // }
    });
  });
});

// for (x in rates) console.log(x);
console.log(rates);
// console.log(rates);
// rates.sort((a, b) => {
//   console.log(parseFloat("this is a: ", a, "this is b: ", b));
// });
console.log(obj);
