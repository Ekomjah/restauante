const content = document.getElementById("content");
import pizza from "./assets/download (3).jpeg";
import "./styles.css";
function createHomePage() {
  const parentDiv = document.createElement("div");
  const image = document.createElement("img");
  image.src = pizza;
  image.alt = "A yummy pizza!";
  const header = document.createElement("h1");
  header.textContent = "It's Pizza Time!";
  const para = document.createElement("p");
  para.textContent = "Welcome to the most famous restaurant in Colorado!";
  parentDiv.append(header, para, image);
  return parentDiv;
}

content.appendChild(createHomePage());
