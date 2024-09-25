let p = fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}"
);
p.then((value1) => {
  console.log(value1.headers);
  console.log(value1.text);
  console.log(value1.arrayBuffer);
  console.log(value1.status);
  console.log(value1.ok);

  return value1.json();
}).then((value2) => {
  console.log(value2);
});
