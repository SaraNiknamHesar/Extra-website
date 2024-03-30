// document.querySelector('.close-col').addEventListener('click', function (event) {
//     event.preventDefault();
//     document.querySelector('.top-bar').classList.add('active');
//     setTimeout(function () {
//         showTopBar();
//     }, 800)
// })

// function showTopBar() {
//     document.querySelector('.showTopBar').classList.remove('d-none');
// }

// document.querySelector('.showTopBar').addEventListener('click', function (event) {
//     event.preventDefault();
//     document.querySelector('.header-top').classList.remove('active');
//     document.querySelector('.showTopBar').classList.add('d-none');
// })
document.querySelector('.close-col').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.top-bar').classList.add('close-top-bar');
    setTimeout(() => {
        showTopBar();
    }, 800)
    function showTopBar() {
        document.querySelector('')
    }
});

