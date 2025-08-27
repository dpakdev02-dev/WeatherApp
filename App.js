let btn = document.getElementById("btn");
// console.log(btn);

let inp = document.getElementById("inp");
// console.log(inp);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  getApi(inp.value);
});
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=86de1c96c2d6c531631da0ab1e588e3f

// https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=86de1c96c2d6c531631da0ab1e588e3f
let card = document.querySelector(".innercard");

let getApi = async (city) => {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=86de1c96c2d6c531631da0ab1e588e3f&units=metrics`
  );
  let data = await res.json();
  let h1 = document.getElementById("h1");
  let hum = document.getElementById("humidity");
  //   console.log(data);
  card.style.visibility = "visible";
  
  // console.log(h1);
  if (data.name == undefined) {
      h1.innerText = "Not Found";
    h2.style.visibility = "hidden";
    hum.style.visibility = "hidden";
  } else {
      h1.innerText = "City Name:" + data.name;
      let h2 = document.getElementById("h2");
      h2.innerText = "Temperature:" + data.main.temp;
      hum.innerText = "Humidity:"+data.main.humidity;
      console.log(data.lon);
      console.log(data.lat);
  }
};
