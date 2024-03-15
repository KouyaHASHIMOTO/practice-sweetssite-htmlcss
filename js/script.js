jQuery(".header-nav-toggle").on("click", function () {
    jQuery(".drawer-list").slideToggle();
});

$(function () {
    var pagetop = $("#page-top");
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn(300);
        } else {
            pagetop.fadeOut(300);
        }
    });
    pagetop.click(function () {
        $("body, html").animate({ scrollTop: 0 }, 500);
        return false;
    });
});
