const about = document.getElementById("about");
import pizza from "./assets/download (3).jpeg";
import piks from "./assets/queso-taco.png";

export default function createContactsPage() {
  const parentDiv = document.createElement("div");
  const image = document.createElement("img");
  image.src = piks;
  image.alt = "A yummy taco! too";
  image.loading = "lazy";
  const header = document.createElement("h1");
  header.textContent = "It's Chop Chop Time!";
  const para = document.createElement("p");
  para.textContent = "Tasted And Trusted!";
  const contactsWrapper = document.createElement("div");
  const contactPhone = document.createElement("p");
  const contactEmail = document.createElement("div");
  contactEmail.textContent = "Send a mail to us at: pizzas@yard.com";
  contactPhone.textContent = "Call us with: 1-555-555-555";
  contactsWrapper.append(contactEmail, contactPhone);
  parentDiv.append(header, para, image, contactsWrapper);
  return parentDiv;
}
