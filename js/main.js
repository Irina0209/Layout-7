$(function() {

    var $images = $('.main-slides__num img');

    var active = 0;

    var timer = setInterval(function() {
        nextImage()
    }, 1000);

    $('.main-slides__button-but--next').on('click', function() {
        clearInterval(timer);
        nextImage();
    });

    $('.main-slides__button-but--prev').on('click', function() {
        clearInterval(timer);
        prevImage();
    });

    function nextImage() {

        $images.eq(active).removeClass('active');

        active++;

        if(active >= $images.length) {
            active = 0;
        }

        $images.eq(active).addClass('active');
    }

    function prevImage() {

        $images.eq(active).removeClass('active');

        active--;

        if (active < 0) {
            active = $images.length - 1;
        }

        $images.eq(active).addClass('active');
    }


});