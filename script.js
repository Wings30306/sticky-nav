const navbar = document.querySelector("#main")
const topOfNav = navbar.offsetTop;



function stickynav() {
    console.log("Top of nav:", topOfNav,"\nScroll", window.scrollY)
    if (window.scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav')
        document.body.style.paddingTop = navbar.offsetHeight + "px"
    } else {
        document.body.classList.remove('fixed-nav')
        document.body.style.paddingTop = 0
    }
}

document.addEventListener("scroll", stickynav)
