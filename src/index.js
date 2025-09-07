import pizza from "./assets/download (3).jpeg";
import aboutPage from "./about.js";
import contactsPage from "./contacts.js";
import "./styles.css";
const content = document.getElementById("content");
const about = document.getElementById("about");
const contacts = document.getElementById("contacts");
const home = document.getElementById("home");

function createHomePage() {
  const parentDiv = document.createElement("div");
  const image = document.createElement("img");
  image.classList.add("banner-img");
  image.src = pizza;
  image.alt = "A yummy pizza!";
  image.loading = "lazy"

  const header = document.createElement("h1");
  header.textContent = "It's Pizza Time!";
  const para = document.createElement("p");
  para.textContent = "Welcome to the most famous restaurant in Burrito!";
  const paraTwo = document.createElement("p");
  paraTwo.textContent =
    "Our pizzas are carefully crafted from some fragile mixtures like Margherita (tomato, mozzarella, basil), Pepperoni, Veggie, and Quattro formaggi (four cheeses)";
  const paraThree = document.createElement("p");
  paraThree.textContent = "Have a pizza with us today!";
  parentDiv.append(header, para, paraTwo, image, paraThree);
  parentDiv.classList.add("home-page");
  return parentDiv;
}

content.appendChild(createHomePage());

about.addEventListener("click", () => {
  content.replaceChildren();
  content.appendChild(aboutPage());
  about.style.borderBottom = "5px solid white";
  home.style.borderBottom = "1px transparent";
  contacts.style.borderBottom = "1px transparent";
});

contacts.addEventListener("click", () => {
  contacts.style.borderBottom = "5px solid white";
  home.style.borderBottom = "1px transparent";
  about.style.borderBottom = "1px transparent";

  content.replaceChildren();
  content.appendChild(contactsPage());
});

home.addEventListener("click", () => {
  home.style.borderBottom = "5px solid white";
  about.style.borderBottom = "1px transparent";
  contacts.style.borderBottom = "1px transparent";
  content.replaceChildren();
  content.appendChild(createHomePage());
});
