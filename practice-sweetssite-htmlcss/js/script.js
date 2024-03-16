jQuery(".header-nav-toggle").on("click", function () {
    jQuery(".drawer-list").slideToggle();
});

$(function () {
    var pagetop = $("#page-top");
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
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

let scrollPos;

$(".js-photo").click(function () {
    scrollPos = $(window).scrollTop();
    $(".js-overlay").html($(this).prop("outerHTML"));
    $(".js-overlay").fadeIn(200);
    $("body").css({ height: "100%", overflow: "hidden" });
    return false;
});

$(".js-overlay").click(function () {
    $(".js-overlay").fadeOut(200, function () {
        $(window).scrollTop(scrollPos);
        $("body").css({ height: "", overflow: "" });
    });
    return false;
});
