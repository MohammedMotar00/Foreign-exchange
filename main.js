const API_KEY = "63377d3005155c9326790be4bd611513";
const rates = [];
const input = document.querySelector("input");

const date = new Date();
const currentDate = date.toISOString().slice(0, 10);

input.value = currentDate;

axios(
  `http://data.fixer.io/api/${currentDate || "latest"}?access_key=${API_KEY}`
).then((res) => {
  const thisRate = res.data.rates;

  for (rate in thisRate) {
    rates.push({ type: rate, value: thisRate[rate] });

    // ascending / stigande
    // rates.sort((a, b) => a.value - b.value);

    // descending / nedåtgående
    // rates.sort((a, b) => b.value - a.value);
  }

  input.addEventListener("change", (e) => {
    axios(
      `http://data.fixer.io/api/${e.target.value}?access_key=${API_KEY}`
    ).then((res) => {
      const thisRate = res.data.rates;

      for (rate in thisRate) {
        rates.push({ type: rate, value: thisRate[rate] });

        // ascending / stigande
        // rates.sort((a, b) => a.value - b.value);

        // descending / nedåtgående
        // rates.sort((a, b) => b.value - a.value);
      }
    });
  });
});

// ascending / stigande
rates.sort((a, b) => a.value - b.value);

// descending / nedåtgående
// rates.sort((a, b) => b.value - a.value);
