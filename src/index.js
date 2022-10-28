import "./styles.css";

const getPopulation = () => {
  console.log("Clicked");
};

const elem = document.getElementById("click-here");

elem.onclick = () => {
  fetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  ).then((res) => console.log(res));
};
// document.getElementById("app").innerHTML = `
// <h1>Hello</h1>
// `;
