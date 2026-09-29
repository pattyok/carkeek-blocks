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
			const arrows = $(this).data("showarrows");
            const options = {
                dots: dots,
				arrows: arrows,
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
            const $slider = $(this);

            // Pan treatment (.is-style-pan): the pan is driven by our own
            // .is-panning class rather than .slick-active, because slick strips
            // .slick-active from the outgoing slide the moment the fade starts,
            // which would cancel the animation mid-fade, and never adds it to
            // the first slide (it is already there), so nothing would trigger.
            if ($slider.closest(".wp-block-carkeek-blocks-extended-gallery").hasClass("is-style-pan")) {
                // Clones carry indexes outside 0..slideCount-1, so normalise.
                const logicalIndex = function(el, count) {
                    const raw = parseInt(el.getAttribute("data-slick-index"), 10);
                    return ((raw % count) + count) % count;
                };

                const slidesFor = function(target, count) {
                    return $slider.find(".slick-slide").filter(function() {
                        return logicalIndex(this, count) === target;
                    });
                };

                const startPan = function(target, count) {
                    slidesFor(target, count)
                        .removeClass("is-panning")
                        .each(function() {
                            // Force a reflow between the remove and the add so
                            // the keyframes restart when a slide comes back
                            // round. No paint happens in between, so no flash.
                            void this.offsetWidth;
                        })
                        .addClass("is-panning");
                };

                // Dropping the class parks the slide back at the start of its
                // pan. Doing that to the incoming slide before the fade begins
                // — while it is still at opacity 0 — means it fades in already
                // framed correctly, instead of showing where its last pan ended
                // and then jumping when the new pan starts. The outgoing slide
                // keeps its class so it holds its framing all the way out.
                $slider.on("beforeChange", function(e, slick, current, next) {
                    slidesFor(next, slick.slideCount).removeClass("is-panning");
                });

                $slider.on("init", function(e, slick) {
                    $slider.find(".slick-slide").each(function() {
                        $(this).addClass(
                            logicalIndex(this, slick.slideCount) % 2 === 0 ? "pan-down" : "pan-up"
                        );
                    });
                    startPan(slick.currentSlide, slick.slideCount);
                });

                $slider.on("afterChange", function(e, slick, currentSlide) {
                    startPan(currentSlide, slick.slideCount);
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
            if (true == autoPlay) {
                const $pauseButton = $slider.next(".slick-play");

                $pauseButton.on("click", function() {
					console.log("Pause button clicked");
                    const isPaused = $slider.hasClass("slick-paused");

                    if (isPaused) {
                        $slider.slick("slickPlay");
                        $slider.removeClass("slick-paused");
                        $pauseButton
                            .removeClass("paused")
                            .attr("aria-label", "Pause slideshow");
                    } else {
                        $slider.slick("slickPause");
                        $slider.addClass("slick-paused");
                        $pauseButton
                            .addClass("paused")
                            .attr("aria-label", "Play slideshow");
                    }
                });
            }
			$slider.on("afterChange", function(event, slick, currentSlide) {
				console.log(currentSlide);
			});

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
