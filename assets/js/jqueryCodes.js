$(document).ready(function () {
    $(".close-btn").click(function (event) {
        event.preventDefault();
        $(".top-bar").addClass("scroll-top-bar")
        setTimeout(function () {
            $(".showTopBar").addClass("show-close-btn");
        }, 900)
    })
    $(".showTopBar").click(function () {
        $(".top-bar").removeClass("scroll-top-bar");
        $(".showTopBar").removeClass("show-close-btn");
    })
    
})
