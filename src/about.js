import pizzeriaImage from "./images/pizzeria.jpg";

const createAboutPage = () => {
    const originalDiv = document.querySelector("div#content");
    const div = document.createElement("div");
    div.classList.add("home");
    const image = document.createElement("img");
    image.src = pizzeriaImage;  
    image.classList.add("picture");  
    const p = document.createElement ("p");
    p.innerText = "Consequuntur ducimus vel ipsa sequi nisi mollitia voluptates debitis maiores, vluptatem id maxime accusantium, obcaecati eum repudiandae magni, aliquam laborum exercitationem fugiat!";
    div.appendChild(p);
    div.appendChild(image);
    originalDiv.appendChild(div);
}

export default createAboutPage;


