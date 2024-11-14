

// File#: _1_collapse
// Usage: codyhouse.co/license
(function() {
  var Collapse = function(element) {
    this.element = element;
    this.triggers = document.querySelectorAll('[aria-controls="'+this.element.getAttribute('id')+'"]');
    this.animate = this.element.getAttribute('data-collapse-animate') == 'on';
    this.animating = false;
    initCollapse(this);
  };

  function initCollapse(element) {
    if ( element.triggers ) {
      // set initial 'aria-expanded' attribute for trigger elements
      updateTriggers(element, !element.element.classList.contains('cj1-hide'));

      // detect click on trigger elements
			for(var i = 0; i < element.triggers.length; i++) {
				element.triggers[i].addEventListener('click', function(event) {
					event.preventDefault();
					toggleVisibility(element);
				});
			}
    }
    
    // custom event
    element.element.addEventListener('collapseToggle', function(event){
      toggleVisibility(element);
    });
  };

  function toggleVisibility(element) {
    var bool = element.element.classList.contains('cj1-hide');
    if(element.animating) return;
    element.animating = true;
    animateElement(element, bool);
    updateTriggers(element, bool);
  };

  function animateElement(element, bool) {
    // bool === true -> show content
    if(!element.animate || !window.requestAnimationFrame) {
      element.element.classList.toggle('cj1-hide', !bool);
      element.animating = false;
      return;
    }

    // animate content height
    element.element.classList.remove('cj1-hide');
    var initHeight = !bool ? element.element.offsetHeight: 0,
      finalHeight = !bool ? 0 : element.element.offsetHeight;

    element.element.classList.add('cj1-overflow-hidden');
    
    setHeight(initHeight, finalHeight, element.element, 200, function(){
      if(!bool) element.element.classList.add('cj1-hide');
      element.element.removeAttribute("style");
      element.element.classList.remove('cj1-overflow-hidden');
      element.animating = false;
    }, 'easeInOutQuad');
  };

  function updateTriggers(element, bool) {
    for(var i = 0; i < element.triggers.length; i++) {
      bool ? element.triggers[i].setAttribute('aria-expanded', 'true') : element.triggers[i].removeAttribute('aria-expanded');
    };
  };

  function setHeight(start, to, element, duration, cb, timeFunction) {
    var change = to - start,
      currentTime = null;

    var animateHeight = function(timestamp){  
    if (!currentTime) currentTime = timestamp;         
    var progress = timestamp - currentTime;
    if(progress > duration) progress = duration;
    var val = parseInt((progress/duration)*change + start);
    if(timeFunction) {
      val = Math[timeFunction](progress, start, to - start, duration);
    }
    element.style.height = val+"px";
    if(progress < duration) {
      window.requestAnimationFrame(animateHeight);
    } else {
      if(cb) cb();
    }
    };

    //set the height of the element before starting animation -> fix bug on Safari
    element.style.height = start+"px";
    window.requestAnimationFrame(animateHeight);
  };

  window.Collapse = Collapse;

  //initialize the Collapse objects
	var collapses = document.getElementsByClassName('js-collapse');
	if( collapses.length > 0 ) {
    for( var i = 0; i < collapses.length; i++) {
      new Collapse(collapses[i]);
    }
  }
}());

