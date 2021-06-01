import "./style.css";

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
            })
        }

        // setup
        var sliderElem = $(".ck-blocks-gallery-grid.mobile-scroll"),
        sliderBool = false,
        sliderBreakpoint = 767,
        sliderSettings = {
            arrows: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: sliderBreakpoint,
                    settings: "unslick"
                }
            ]
        };

        function sliderInit() {
            if (window.innerWidth <= sliderBreakpoint && sliderElem.length > 0) {
                if (sliderBool == false) {
                    sliderElem.slick(sliderSettings);
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