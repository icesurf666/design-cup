


    $('.slider-blocks').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true
    });
    $(".slider-arrows__left").click(function() {
        $('.slider-blocks').slick("prev");
    });
    $(".slider-arrows__right").click(function() {
        $('.slider-blocks').slick("next");
    });

