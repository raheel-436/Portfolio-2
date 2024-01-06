function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); //when clicked its either gonna
    icon.classList.toggle("open"); //add or remove the open class
}