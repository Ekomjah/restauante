const about = document.getElementById("about");
import pizza from "./assets/download (3).jpeg";
import taco from "./assets/taco.jpg";

function importAll(image) {
  return image.keys().map(image);
}

const imageArr = importAll(
  require.context("./assets", false, /\.(png|jpe?g|svg)$/)
);

const textArr = [
  "Neopolitan pizza",
  "Chicago pizza",
  "Detroit pizza",
  "Sicilian pizza",
  "New York Pizza",
  "St. Louis–style pizza",
  "California Pizza",
  "Roman pizza",
  "Greek pizza",
  "Margherita Pizza",
  "Sicily",
  "Deep Dish",
  "Quad City Pizza",
  "Hawaiian pizza",
  "BBQ Chicken Pizza",
];
const costArr = [
  52.22, 23.25, 66.02, 24.64, 44.22, 42.55, 59.68, 32.97, 23.05, 60.71, 19.99,
  21.5, 65.65, 23.68,
];
export default function createAboutPage() {
  let grandParent = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.textContent = "Explore our yard of different pizza variants and recipes.";
  let headerPara = document.createElement("h1");
  h1.classList.add("about-header");
  headerPara.classList.add("header-para");
  headerPara.textContent =
    "Dive into tastes as tantalizing as the Hawaiian pizza or as salty as the Margherrita Pizza!";
  grandParent.appendChild(h1);
  grandParent.appendChild(headerPara);
  for (let i = 0; i < 14; i++) {
    const parentDiv = document.createElement("div");
    const image = document.createElement("img");
    image.src = imageArr[i];
    image.alt = "A yummy taco!";
    const header = document.createElement("div");
    header.textContent = textArr[i];
    const myPara = document.createElement("p");
    myPara.textContent = `$${costArr[i]}`;
    const myContainer = document.createElement("div");
    myContainer.classList.add("sub-flex");
    myContainer.append(header, myPara);

    parentDiv.classList.add("griddy-child");
    parentDiv.append(myContainer, image);
    grandParent.appendChild(parentDiv);
  }
  grandParent.classList.add("griddy");
  return grandParent;
}
