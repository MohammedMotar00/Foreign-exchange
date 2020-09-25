const API_KEY = "63377d3005155c9326790be4bd611513";

// HTML
const input = document.querySelector("input");
const select = document.getElementById("select");
let tbody = document.querySelector("tbody");

// Fix todays date
const date = new Date();
const currentDate = date.toISOString().slice(0, 10);

// Save todays date and value in input
input.value = currentDate;
input.max = currentDate;

// runFnOnce is for the fetchOnce(), when i change the date, then this function stop working
let runFnOnce = true;

// save item in this array
let arr = [];

const fetchData = (date) => {
  axios(
    `http://data.fixer.io/api/${date || "latest"}?access_key=${API_KEY}`
  ).then((res) => {
    const rates = res.data.rates;

    for (result in rates) arr.push({ type: result, value: rates[result] });

    tbody.innerHTML = "";

    // Render direct when this function is on
    // setting the select value back do ascend
    select.value = "ascend";

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

    // Listen for changes in <select>
    select.addEventListener("change", (e) => {
      if (e.target.value === "ascend") {
        tbody.innerHTML = "";

        arr.sort((a, b) => a.value - b.value);
        arr.map((item) => {
          let tr = document.createElement("tr");
          let td = document.createElement("td");
          let td2 = document.createElement("td");

          td.innerHTML = item.type;
          td2.innerHTML = item.value;
          tr.appendChild(td);
          tr.appendChild(td2);
          tbody.appendChild(tr);
        });
      } else {
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
      }
    });
  });
};

// Renders items when page reloads, runs once
const fetchOnce = () => {
  fetchData(currentDate);
};

// Runs when the date changes
input.addEventListener("change", (e) => {
  tbody.innerHTML = "";

  // When i change date in input, then the function stops and this eventListener takes over
  runFnOnce = false;

  // Making the array empty when changing the date and when going over from the fetchOnce() to this eventListener
  arr = [];

  fetchData(e.target.value);
});

runFnOnce && fetchOnce();
