// File#: _1_collapse
// Usage: codyhouse.co/license
// Modified by Carkeek Studios to work with WordPress Gutenberg Blocks
(function() {
	Math.easeInOutQuad=function(t,b,c,d){t/=d/2;if(t<1)return c/2*t*t+b;t--;return-c/2*(t*(t-2)-1)+b;};
	var Collapse = function(element) {

		this.target = document.getElementById( element.getAttribute('aria-controls') );
		this.trigger = element;
		this.animate = element.getAttribute('data-collapse-animate') == 'on';
		this.animating = false;
		this.expanded = evaluateMediaQuery(this);

		initCollapse(this);
	};

	function evaluateMediaQuery(element) {
		var expanded;
		if (window.innerWidth < 768) {
			expanded = element.trigger.getAttribute('data-expanded-mobile') == 'true' ? true : false;
		} else if (window.innerWidth < 1024) {
			expanded = element.trigger.getAttribute('data-expanded-tablet') == 'true' ? true : false;
		} else {
			expanded = element.trigger.getAttribute('data-expanded-desktop') == 'true' ? true : false;
		}
		return expanded;
	}

  
	function initCollapse(element) {
		if ( element.trigger ) {
			// set initial 'aria-expanded' attribute for trigger elements
			updateTriggers(element, element.expanded);

			// detect click on trigger elements
			element.trigger.addEventListener('click', function(event) {
				event.preventDefault();
				toggleVisibility(element);
			});
		}

		updateTarget(element, element.expanded);
		// custom event
		element.target.addEventListener('collapseToggle', function(event){
			toggleVisibility(element);
		});

		var delay = 250, // delay between calls
		throttled = false, // are we currently throttled?
		prevWidth = window.innerWidth;
		window.addEventListener('resize', function() {
			// only run if we're not throttled
			if (!throttled) {

				// actual callback action
				var expanded = evaluateMediaQuery(element);
				updateTriggers(element, expanded);
				updateTarget(element, expanded);
				// we're throttled!
				throttled = true;
				// set a timeout to un-throttle
				setTimeout(function() {
					throttled = false;
				}, delay);
			}

		});
	};
  
	function toggleVisibility(element) {
		var bool = element.target.classList.contains('cj1-hide');
		if(element.animating) return;
		element.animating = true;
		animateElement(element, bool);
		updateTriggers(element, bool);
	};
  
	function animateElement(element, bool) {
	  // bool === true -> show content
	  if(!element.animate || !window.requestAnimationFrame) {
		element.target.classList.toggle('cj1-hide', !bool);
		element.animating = false;
		return;
	  }
  
	  // animate content height
	  element.target.classList.remove('cj1-hide');
	  var initHeight = !bool ? element.target.offsetHeight: 0,
		finalHeight = !bool ? 0 : element.target.offsetHeight;
  
	  element.target.classList.add('cj1-overflow-hidden');
	  
	  setHeight(initHeight, finalHeight, element.target, 200, function(){
		if(!bool) element.target.classList.add('cj1-hide');
		element.target.removeAttribute("style");
		element.target.classList.remove('cj1-overflow-hidden');
		element.animating = false;
	  }, 'easeInOutQuad');
	};
  
	function updateTriggers(element, expanded) {
		expanded ? element.trigger.setAttribute('aria-expanded', 'true') : element.trigger.removeAttribute('aria-expanded');
	};
	function updateTarget(element, expanded) {
		expanded ? element.target.classList.remove('cj1-hide') : element.target.classList.add('cj1-hide');
	}
  
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
	function initCollapseBlock() {
		var collapses = document.getElementsByClassName('js-collapse-btn');
		if( collapses.length > 0 ) {
			for( var i = 0; i < collapses.length; i++) {
				new Collapse(collapses[i]);
			}
		}
	}
	initCollapseBlock();
	// window.resize event listener

  }());


