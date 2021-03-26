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
                    //gets the data-title attribute of the clicked item
                    if (!titleAdded) {
                        galleryTitle = slide.opts.$trigger.data('title');
                        $('.fancybox-infobar').prepend('<div class="fancybox-gallery-title">' + galleryTitle + '</div>');
                        titleAdded = true;
                    }
                },
                afterClose : function() {
                    titleAdded = false;
                }
            })
        }
    });
})(jQuery);