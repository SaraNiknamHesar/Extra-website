document.querySelector('.top-bar').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.top-bar').classList.add('close-top-bar');
    setTimeout(() => {
        showTopBar();
    }, 800)
});
function showTopBar() {
    document.querySelector('.showTopBar').classList.add('show-close-btn');
}
document.querySelector('.showTopBar').addEventListener('click', (event) => {
    event.currentTarget.classList.remove('show-close-btn');
    document.querySelector('.top-bar').classList.remove('close-top-bar')
});