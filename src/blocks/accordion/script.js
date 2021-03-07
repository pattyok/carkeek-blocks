import jQuery from 'jquery';
import "./style.css";

( function( $ ) {
    var accordionButtons = $('.ck-accordion-button');
    function checkOthers(elem) {
        for (var i=0; i<accordionButtons.length; i++) {
          if (accordionButtons[i] != elem) {
            if (($(accordionButtons[i]).attr('aria-expanded')) == 'true') {
              $(accordionButtons[i]).attr('aria-expanded', 'false');
              const content = $(accordionButtons[i]).attr('aria-controls');
              $('#' + content).attr('aria-hidden', 'true');
              $('#' + content).slideToggle();
            }
          }
        }
      }
    $(function(){


        $('.ck-accordion-button').on('click', function() {

            const $control = $(this);

            const accordionContent = $control.attr('aria-controls');
            if ($(this).parents('.wp-block-carkeek-blocks-accordion').data('accordion') == true){
                checkOthers($control[0]);
            }

            const isAriaExp = $control.attr('aria-expanded');
            const newAriaExp = (isAriaExp == "false") ? "true" : "false";
            $control.attr('aria-expanded', newAriaExp);

            const isAriaHid = $('#' + accordionContent).attr('aria-hidden');
            if (isAriaHid == "true") {
                $('#' + accordionContent).attr('aria-hidden', "false");
            } else {
                $('#' + accordionContent).attr('aria-hidden', "true");
            }
            $('#' + accordionContent).slideToggle();
        });


});
}( jQuery ) );




