$(document).ready(function () {
    $(".header-category-list").slick({
        infinite: false,
        initialSlide: 0,
        centerMode: false,
        centerPadding: "0w",
        slidesToShow: 10,
        slidesToScroll: 1,
        dots: false,
        variableWidth: true,
        prevArrow:
            '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angles-left"></i></button>',
        nextArrow:
            '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angles-right"></i></button>',
    });

    $(".header-category-list").on(
        "afterChange",
        function (event, slick, currentSlide) {
            if ($(".slick-arrow").attr("aria-disabled") == "false") {
                $(".header-category-list").addClass("cat-fade");
            } else {
                $(".header-category-list").removeClass("cat-fade");
            }
            if ($(".slick-arrow.next-arrow").attr("aria-disabled") == "true") {
                $(".header-category-list").addClass("cat-not-fade-right");
            } else {
                $(".header-category-list").removeClass("cat-not-fade-right");
            }
        }
    );

    $(".header-menu-bar").on("click", function () {
        $(".haeder-bar-menu").toggleClass("open");
    });
});
