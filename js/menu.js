// create menu -----------------------------------------------------
// const menuContainer = document.querySelector(".menuContainer");
const anchor = document.querySelector(".menuList");

function createMenu() {
    const menu = document.createElement("div");

    const menuItem1 = document.createElement("a");
    menuItem1.textContent = "Home";
    menuItem1.href = "index.html";
    const menuItem2 = document.createElement("a");
    menuItem2.textContent = "Our Team";
    menuItem2.href = "team.html";
    const menuItem3 = document.createElement("a");
    menuItem3.textContent = "3rd Link";
    menuItem3.href = "#";

    menu.appendChild(menuItem1);
    menu.appendChild(menuItem2);
    menu.appendChild(menuItem3);

    menu.classList.add("menu", "menu-toggle");
        
    anchor.addEventListener("click", (event) => {
        menu.classList.toggle("menu-toggle");
        anchor.appendChild(menu);
    })

    return menu;
}

createMenu();