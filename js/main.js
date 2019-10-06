$( document ).ready(function() {
   //show mobile menu
    $(".page-header__bars").click(function(e) {
       e.preventDefault();
       $(".page-header__navigation").toggleClass("show");
    })

    //slider banner

        $('.slider__block').slick({
            dots: true,
            infinite: true,
            adaptiveHeight: true,
        });

    //show hidden text
    $(".tinyHouse button").click(function(e) {
        e.preventDefault();
        $(".tinyHouse__text").toggleClass("tinyHouse__hidden");
    })




    //slider reviews

        if (screen.width < 768) {
            $('.reviews').slick({
                dots: true,
                arrows: false,
                infinite: false
            });
        }
});

var image = document.getElementsByClassName('img');
new simpleParallax(image, {
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)'
});

var image1 = document.getElementsByClassName('bannerImg');
new simpleParallax(image1);