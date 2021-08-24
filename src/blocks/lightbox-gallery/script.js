import jQuery from 'jquery';

(function($) {

    $(function(){
        if (typeof $().fancybox !== "undefined") {

            let titleAdded = false;
            let galleryTitle = '';
            $('[data-fancybox^="gallery-"]').fancybox({
                thumbs : {
                autoStart : true
                },
                beforeLoad : function( instance, slide ) {
                    //gets the data-title attribute of the parent gallery
                    if (!titleAdded) {
                        const gallery = slide.opts.fancybox;
                        const $wrapper = $('#wrapper' + gallery);
                        galleryTitle = $wrapper.data('title');
                        if (typeof galleryTitle !== typeof undefined && galleryTitle !== false) {
                        $('.fancybox-infobar').prepend('<div class="fancybox-gallery-title">' + galleryTitle + '</div>');
                        }
                        titleAdded = true;
                    }
                },
                afterClose : function() {
                    titleAdded = false;
                }
            });

        }

        // setup
        var sliderElem = $(".ck-blocks-gallery-grid.mobile-scroll"),
        sliderBool = false,
        sliderBreakpoint = 1023;

        function sliderInit() {
            if (window.innerWidth <= sliderBreakpoint && sliderElem.length > 0) {
                if (sliderBool == false) {
                    sliderElem.each(function(){
                        const slidesmobile = $(this).data('slidesmobile') ? $(this).data('slidesmobile') : 1;
                        const scrollmobile = $(this).data('scrollmobile') ? $(this).data('scrollmobile') : 1;
                        const slidestablet = $(this).data('slidestablet') ? $(this).data('slidestablet') : 3;
                        const scrolltablet = $(this).data('scrolltablet') ? $(this).data('scrolltablet') : 1;
                        const sliderSettings = {
                            arrows: true,
                            mobileFirst: true,
                            slidesToShow: slidesmobile,
                            slidesToScroll: scrollmobile,
                            responsive: [
                                {
                                    breakpoint: sliderBreakpoint,
                                    settings: "unslick"
                                },
                                {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: slidestablet,
                                    slidesToScroll: scrolltablet,
                                },
                            }

                            ]
                        };
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
                          }).slick(sliderSettings);

                    })
                    sliderBool = true;
                }
            } else {
                sliderBool = false;
            }
        }
        sliderInit();
        // resize
        $(window).on('resize', function () {
            sliderInit();
        });

    });
})(jQuery);