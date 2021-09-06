var menuList = document.getElementById("navigation-list")
var menuButton = document.getElementById("menu-button")
var listNames = document.getElementsByClassName("link")

function toggleMenu() {
    if (getComputedStyle(menuList).display == "none") {
        menuList.style.display = "flex"
        console.log(getComputedStyle(menuList).display)

        menuList.style.transitionDuration = "2s"
        menuList.style.transform = "translateX(0%)"

        return
    }

    if (getComputedStyle(menuList).display == "flex") {
        menuList.style.display = "none"
        console.log(getComputedStyle(menuList).display)
        return
    }

}

function test() {
    console.log("Hello World!")
    menuList.style.display = "none"
}