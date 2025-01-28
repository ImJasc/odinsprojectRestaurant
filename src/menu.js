import pizzaImage from "./images/pizza.jpg";

const createMenuPage = () => {
    const originalDiv = document.querySelector("div#content");
    const div = document.createElement("div");
    div.classList.add("home");
    const image = document.createElement("img");
    image.src = pizzaImage;  
    image.classList.add("picture");  
    const p = document.createElement ("p");
    p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    div.appendChild(p);
    div.appendChild(image);
    originalDiv.appendChild(div);
}

export default createMenuPage;