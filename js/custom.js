let input = document.getElementById("input-city");
let cityLocation = document.getElementById("city-location");
let localTime = document.getElementById("time");
let t = document.getElementById("temp");
let btn = document.getElementById("search-btn");
let loading = document.getElementById("loading");

async function getData(cityName) {
  const promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=ff24614ef24b42d5b1f25425252607&q=${cityName}&aqi=yes`
  );
  const data = await promise.json();
  console.log(data);
  return data;
}

btn.addEventListener("click", async () => {
  console.log(input.value);
  const value = input.value;
  const result = await getData(value);

  cityLocation.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
  localTime.innerText = result.location.localtime;
  t.innerText = `${result.current.temp_c} Celsius`;
});
