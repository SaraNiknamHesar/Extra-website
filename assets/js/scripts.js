
document.querySelector('.close-col').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.top-bar').classList.add('scroll-top-bar');
    setTimeout(() => {
        showTopBar();
    }, 800)
});
function showTopBar() {
    document.querySelector('.showTopBar').classList.add('show-close-btn');
}
document.querySelector('.showTopBar').addEventListener('click', (event) => {
    event.currentTarget.classList.remove('show-close-btn');
    setTimeout(() => {
        remove();
    }, 370);
});
function remove() {
    document.querySelector('.top-bar').classList.remove('scroll-top-bar')
}
document.querySelector(".mega-menu-tab").addEventListener("mouseover", function (event) {
    document.querySelector(".mega-menu").classList.add("d-block-mega-menu");
});
document.querySelector(".mega-menu-tab").addEventListener("mouseleave", function (event) {
    document.querySelector(".mega-menu").classList.remove("d-block-mega-menu");
});
document.querySelector(".bars-menu-icon").addEventListener("click", function (event) {
    setTimeout(() => {
        document.querySelector(".sidebar-menu").style.visibility = "visible";
        document.querySelector(".sidebar-menu").classList.add("sidebar-menu-translate");
        document.querySelector(".sidebar-bg").style.display = "block";
        document.querySelector(".sidebar-menu-close").style.opacity = "1";
    }, 300)

});

document.querySelector(".sidebar-menu-close").addEventListener("click", function (event) {
    event.currentTarget.classList.add("rotate-close-bottom");
    document.querySelector(".sidebar-menu").classList.remove("sidebar-menu-translate");
    document.querySelector(".sidebar-menu-close").style.opacity = "0";
    document.querySelector(".sidebar-bg").style.display = "none";


});
