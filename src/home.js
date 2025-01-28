import chefImage from "./images/chef.jpg";

const createHomePage = () => {
    const originalDiv = document.querySelector("div#content");
    const div = document.createElement("div");
    div.classList.add("home");
    const image = document.createElement("img");
    image.src = chefImage;  
    image.classList.add("picture");  
    const p = document.createElement ("p");
    p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ducimus vel ipsa sequi nisi mollitia voluptates debitis maiores, vluptatem id maxime accusantium, obcaecati eum repudiandae magni, aliquam laborum exercitationem fugiat!";
    div.appendChild(p);
    div.appendChild(image);
    originalDiv.appendChild(div);
}

export default createHomePage;