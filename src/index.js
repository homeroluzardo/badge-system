import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import Badge from "./components/Badge";
import "bootstrap/dist/css/bootstrap.css";
import "../src/styles/global.css";
//import BadgeNew from "./pages/BadgeNew";
//import Badges from "./pages/Badges";
import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById('root'));

// const jsx = (
//   <h1>
//     Hola como estas? soy {name} y el resultado de la funcion suma es {sum()}
//   </h1>
// );

// const element = React.createElement(
//   "a",
//   { href: "https://google.com" },
//   "Ir a Google"
// );

// const element = React.createElement(
//   "a",
//   { href: "https://google.com" },
//   "Ir a Google"
// );

// const element = React.createElement("h1", {}, `Hola soy ${name}`);

// const name = "Homero";
// const sum = () => 3 + 3;

// const jsx = (
//   <div>
//     <h1>
//       Hola, soy {name}. El resultado de la función suma es: {sum()}
//     </h1>
//     <p>Soy Ingeniero en Computacón</p>
//   </div>
// );
// const container1 = document.getElementById("header");
// const container2 = document.getElementById("app");

// ReactDOM.render(
//   <Badge
//     firstName="Homero"
//     lastName="Luzardo"
//     avatarUrl="https://s.gravatar.com/avatar/30416380be2273a63f51b29491f927ba?s=80"
//     jobTitle="Computer Engineer"
//     twitter="homeroluzardo"
//   />,
//   container1
// );
// ReactDOM.render(jsx, container2);

const container2 = document.getElementById("app");
// ReactDOM.render(<BadgeNew />, container2);
ReactDOM.render(<App />, container2);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
