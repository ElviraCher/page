import "./styles.css";
import Logo from "./img/logo.jpg";

const image = new Image();
image.src = Logo;
image.classList.add("logo");
const element = document.querySelector("div.logo-container");
element.appendChild(image);
