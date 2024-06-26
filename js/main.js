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
        $(".header-menu-bar").toggleClass("dark");
    });

    $(".login-section-gallery").slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        // centerMode: true,
        prevArrow:
            '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angles-left"></i></button>',
        nextArrow:
            '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angles-right"></i></button>',
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 5,
                    infinite: true,
                    centerMode: true,
                },
            },
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                    centerMode: true,
                },
            },
            {
                breakpoint: 1365,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    centerMode: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    centerMode: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    centerMode: true,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    centerMode: true,
                },
            },
        ],
    });

    $(".hide-filter").hide();
    $(".second-filtering").hide();

    $(".show-filter").on("click", function () {
        $(".show-filter").hide();
        $(".hide-filter").show();
        $(".second-filtering").show();
    });

    $(".hide-filter").on("click", function () {
        $(".show-filter").show();
        $(".hide-filter").hide();
        $(".second-filtering").hide();
    });

    $(".area-select").select2();
    $(".package-select").select2();
    $(".trust-select").select2();
    $(".feature-select").select2();

    $(".area-select-cat").select2();
    $(".package-select-cat").select2();
    $(".trust-select-cat").select2();
    $(".feature-select-cat").select2();
});

jQuery(function ($) {
    function tog(v) {
        return v ? "addClass" : "removeClass";
    }

    $(document)
        .on("input", ".clearable", function () {
            $(this)[tog(this.value)]("x");
        })
        .on("mousemove", ".x", function (e) {
            $(this)[
                tog(
                    this.offsetWidth - 25 <
                        e.clientX - this.getBoundingClientRect().left
                )
            ]("onX");
        })
        .on("click", ".onX", function () {
            $(this).removeClass("x onX").val("");
        });
});
