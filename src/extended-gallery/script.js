import jQuery from "jquery";

(function($) {
    $(function() {
        $(".wp-block-carkeek-blocks-extended-gallery ul.slider-carousel").each(function() {
            //collect slider settings
            const autoPlay = $(this).data("autoplay");
            const speed = $(this).data("speed");
            const type = $(this).data("type");
            const slides = $(this).data("slides");
            const scroll = $(this).data("scroll");
            const slidesmobile = $(this).data("slidesmobile");
            const scrollmobile = $(this).data("scrollmobile");
            const slidestablet = $(this).data("slidestablet");
            const scrolltablet = $(this).data("scrolltablet");
            const fade = $(this).data("transitiontype");
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
                if (slides !== slidesmobile || slides !== slidesmobile) {
                    options.responsive = [{
                        breakpoint: 600,
                        settings: {
                            slidesToShow: slidesmobile,
                            slidesToScroll: scrollmobile,
                        },
                    },{
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: slidestablet,
                            slidesToScroll: scrolltablet,
                        },
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
            if ($(this).hasClass("fix-height-true")) {
                const minHeight = $(this).data("minheight");
                const maxHeight = $(this).data("maxheight");

                $(this).find('img').css({
                    minHeight: minHeight + 'px',
                    maxHeight: maxHeight + 'px'
                });
            }
            $(this).on("init", function(e, slick) {
                // we remove the data-fancybox attribute from the cloned slides,
                // and add a data-trigger attribute with the same value,
                // and add a data-index attribute to indicate which slide to open
                slick.$slider
                  .find(".slick-cloned a")
                  .each(function() {
                    var $slide = $(this),
                        trigger = $slide.attr("data-fancybox"),
                      clonedIndex = parseInt($slide.attr("data-slick-index")),
                      originalIndex =
                        clonedIndex < 0
                          ? clonedIndex + slick.$slides.length
                          : clonedIndex - slick.$slides.length;
                    $slide.attr("data-index", originalIndex);
                    $slide.attr("data-trigger", trigger);
                    $slide.removeAttr("data-fancybox");
                  });
              }).slick(options);
        });

    });
})(jQuery);

function setGalleryHeight() {
	const tiledGalleries = document.querySelectorAll('.wp-block-carkeek-blocks-extended-gallery .ck-tiled-gallery');
	tiledGalleries?.forEach(gallery => {
		const width = gallery.offsetWidth;
		const rowHeight = width / 12;
		gallery.style.setProperty('--ck-grid-row-height', `${rowHeight}px`);
	});
}

setGalleryHeight();
window.addEventListener('resize', setGalleryHeight);
