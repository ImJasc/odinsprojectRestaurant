import "./styles.css";
import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createAboutPage from "./about.js";

const giveActionButtons = () => {
    const btnHome = document.querySelector("button#home");
    const btnMenu = document.querySelector("button#menu");
    const btnAbout = document.querySelector("button#about");

    btnHome.addEventListener("click", () =>{
        changeTab(0);
    });
    btnMenu.addEventListener("click", () =>{
        changeTab(1);
    });
    btnAbout.addEventListener("click", () =>{
        changeTab(2);
    });
}

function clearContent(){
    const mainDiv = document.querySelector("div#content");
    mainDiv.innerHTML = "";
}

function changeTab(tabNumber){
    switch (tabNumber) {
        case 0:
            clearContent();
            createHomePage();
            break;
        case 1:
            clearContent();
            createMenuPage();
            break;
        case 2:
            clearContent();
            createAboutPage();
            break;
        default:
            break;
    }
}

createHomePage();
giveActionButtons();

