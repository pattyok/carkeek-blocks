!function(){"use strict";var a,t={n:function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(e,{a:e}),e},d:function(a,e){for(var i in e)t.o(e,i)&&!t.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:e[i]})},o:function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}},e=jQuery,i=t.n(e);(a=i())((function(){a(".carkeek-blocks-accordion").length>0&&a(".carkeek-blocks-accordion").each((function(){a(".ck-accordion-header",a(this)).each((function(){var t=a(this).text(),e=a(this).attr("id"),i=a(".ck-accordion-panel[aria-labellledby="+e+"]"),r='<button class="ck-accordion-button" aria-controls="'+i.attr("id")+'" aria-expanded="false">'+t+"</button>";a(this).html(r),i.attr("aria-hidden",!0)}))}))})),function(a){var t=a(".ck-accordion-button");a((function(){a(".ck-accordion-button").on("click",(function(){var e=a(this),i=e.attr("aria-controls");1==a(this).parents(".wp-block-carkeek-blocks-accordion").data("accordion")&&function(e){for(var i=0;i<t.length;i++)if(t[i]!=e&&"true"==a(t[i]).attr("aria-expanded")){a(t[i]).attr("aria-expanded","false");var r=a(t[i]).attr("aria-controls");a("#"+r).attr("aria-hidden","true"),a("#"+r).slideToggle()}}(e[0]);var r="false"==e.attr("aria-expanded")?"true":"false";e.attr("aria-expanded",r),"true"==a("#"+i).attr("aria-hidden")?a("#"+i).attr("aria-hidden","false"):a("#"+i).attr("aria-hidden","true"),a("#"+i).slideToggle()}))}))}(i()),function(a){a((function(){a(".ck-carkeek-slider__slide-wrapper").each((function(){var t=a(this).data("autoplay"),e=a(this).data("speed"),i=a(this).data("type"),r=a(this).data("slides"),n=a(this).data("slides"),o=a(this).data("transition"),d=a(this).data("transitionspd"),c={dots:a(this).data("showdots"),speed:d};1==t&&(c.autoplay=!0,c.autoplaySpeed=e),"carousel"==i&&(c.slidesToShow=r,c.slidesToScroll=n),"fade"==o&&(c.fade=!0,c.cssEase="linear"),a(this).children().each((function(){a(this).wrap('<div class="slide-'+i+'"></div>')})),a(this).find("img").addClass("skip-lazy"),a(this).slick(c)}))}))}(i())}();