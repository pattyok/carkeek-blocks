import jQuery from 'jquery';
import "./style.css";

(function($) {
    $(function(){
        $(".wp-block-carkeek-blocks-carkeek-slider .ck-carkeek-slider__slide-wrapper").each(function() {
            //collect slider settings
            const autoPlay = $(this).data("autoplay");
            const speed = $(this).data("speed");
            const type = $(this).data("type");
            const slides = $(this).data("slides");
            const scroll = $(this).data("scroll");
            const slidesMobile = $(this).data("slidesmobile");
            const scrollMobile = $(this).data("scrollmobile");
            const fade = $(this).data("transition");
            const transSpeed = $(this).data("transitionspd");
            const dots = $(this).data("showdots");
            const options = {
                dots: dots,
                speed: transSpeed,
            };
            if (true == autoPlay) {
                options.autoplay = true;
                options.autoplaySpeed = speed;
            }
            if (type == "carousel") {
                options.slidesToShow = slides;
                options.slidesToScroll = scroll;
                if (slides > slidesMobile) {
                    options.responsive = [{
                        breakpoint: 600,
                        settings: {
                            slidesToShow: slidesMobile,
                            slidesToScroll: scrollMobile
                        }
                    }]
                }
            }

            if (fade == 'fade') {
                options.fade = true;

                options.cssEase = 'linear';
            }
            //wrap each inner block in a div so as not to mess with the inner block styling
            $(this)
                .children()
                .each(function() {
                    $(this).wrap('<div class="slide-' + type + '"></div>');
                });
            $(this)
                .find("img")
                .addClass("skip-lazy");
            $(this).slick(options);
        });

    });
})(jQuery);