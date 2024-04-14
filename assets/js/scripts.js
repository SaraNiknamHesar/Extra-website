
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
    }, 300)

});


// })

// window.addEventListener('resize', function () {
//     adjustMenu();
// });

// function adjustMenu() {
//     const menu = document.querySelector('.menu');
//     const menuItems = menu.querySelectorAll('li');
//     const menuItemsLi = menu.querySelectorAll('li').length;
//     const screenWidth = window.innerWidth;

//     const numItemsToRemove = Math.ceil((955 - screenWidth) / 36);
//     for (let i = 0; i < menuItems.length; i++) {
//         if (i >= menuItems.length - numItemsToRemove) {
//             menuItems[i].style.display = 'none';
//         } else {
//             menuItems[i].style.display = 'block';
//         }
//     }
// }


// adjustMenu();
