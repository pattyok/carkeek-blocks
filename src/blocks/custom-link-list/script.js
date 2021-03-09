import "./style.css";
import jQuery from 'jquery';

/** The accordion is set up here to make the php easier
 *   Accordion functionality is managed in the accordion block
 */

( function( $ ) {

   function setUpAccordions() {
       $('.carkeek-blocks-accordion').each(function(){
           //convert labels to buttons
           $('.ck-accordion-header', $(this)).each(function(){
               const label = $(this).text();
               const id = $(this).attr('id');
               const $controls = $('.ck-accordion-panel[aria-labellledby='+ id +']');
               const button = '<button class="ck-accordion-button" aria-controls="' + $controls.attr('id') + '" aria-expanded="false">' + label + '</button>';
               //add button control
               $(this).html(button);
               $controls.attr('aria-hidden', true);
           });

       });
   }
    $(function(){

    if ($('.carkeek-blocks-accordion').length > 0) {
        setUpAccordions();
    }


});
}( jQuery ) );
