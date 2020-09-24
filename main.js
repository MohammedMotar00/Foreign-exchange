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

const API_KEY = "63377d3005155c9326790be4bd611513";
const rates = [];
const input = document.querySelector("input");

const date = new Date();
const currentDate = date.toISOString().slice(0, 10);

input.value = currentDate;
input.max = currentDate;

let tbody = document.querySelector("tbody");

const ascend = document.getElementById("ascend");
const descend = document.getElementById("descend");

let runOnce = true;

let arr = [];

const fetchOnce = () => {
  axios(
    `http://data.fixer.io/api/${currentDate || "latest"}?access_key=${API_KEY}`
  ).then((res) => {
    let rates = res.data.rates;

    for (result in rates) arr.push({ type: result, value: rates[result] });

    // render direct
    arr.sort((a, b) => a.value - b.value);
    arr.map((item) => {
      console.log(item);
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let td2 = document.createElement("td");

      td.innerHTML = item.type;
      td2.innerHTML = item.value;
      tr.appendChild(td);
      tr.appendChild(td2);
      tbody.appendChild(tr);
    });

    // ascending
    ascend.addEventListener("click", () => {
      tbody.innerHTML = "";

      arr.sort((a, b) => a.value - b.value);
      arr.map((item) => {
        console.log(item);
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td2 = document.createElement("td");

        td.innerHTML = item.type;
        td2.innerHTML = item.value;
        tr.appendChild(td);
        tr.appendChild(td2);
        tbody.appendChild(tr);
      });
    });

    descend.addEventListener("click", () => {
      tbody.innerHTML = "";

      arr.sort((a, b) => b.value - a.value);
      arr.map((item) => {
        console.log(item);
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td2 = document.createElement("td");

        td.innerHTML = item.type;
        td2.innerHTML = item.value;
        tr.appendChild(td);
        tr.appendChild(td2);
        tbody.appendChild(tr);
      });
    });
  });
};

// *Runs when the date changes
input.addEventListener("change", (e) => {
  tbody.innerHTML = "";
  runOnce = false;
  arr = [];

  axios(
    `http://data.fixer.io/api/${e.target.value}?access_key=${API_KEY}`
  ).then((res) => {
    const rates = res.data.rates;

    for (result in rates) arr.push({ type: result, value: rates[result] });

    tbody.innerHTML = "";

    // Render direct when this function is on
    arr.sort((a, b) => a.value - b.value);
    arr.map((item) => {
      console.log(item);
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let td2 = document.createElement("td");

      td.innerHTML = item.type;
      td2.innerHTML = item.value;
      tr.appendChild(td);
      tr.appendChild(td2);
      tbody.appendChild(tr);
    });

    // ascending
    ascend.addEventListener("click", () => {
      tbody.innerHTML = "";

      arr.sort((a, b) => a.value - b.value);
      arr.map((item) => {
        console.log(item);
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td2 = document.createElement("td");

        td.innerHTML = item.type;
        td2.innerHTML = item.value;
        tr.appendChild(td);
        tr.appendChild(td2);
        tbody.appendChild(tr);
      });
    });

    descend.addEventListener("click", () => {
      tbody.innerHTML = "";

      arr.sort((a, b) => b.value - a.value);
      arr.map((item) => {
        console.log(item);
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td2 = document.createElement("td");

        td.innerHTML = item.type;
        td2.innerHTML = item.value;
        tr.appendChild(td);
        tr.appendChild(td2);
        tbody.appendChild(tr);
      });
    });
  });
});

runOnce && fetchOnce();
