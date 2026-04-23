/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/image-compare/script.js ***!
  \*************************************/
(function () {
  function initImageCompare() {
    var containers = document.querySelectorAll('.wp-block-carkeek-blocks-image-compare');
    if (!containers.length) return;
    /**
     * Set --ck-ic-width on the container so the before image can be sized
     * to the full container width (not just the clipped .cd-resize-img width),
     * allowing object-fit + object-position (focal point) to work correctly.
     */

    function updateContainerWidth(container) {
      container.style.setProperty('--ck-ic-width', container.offsetWidth + 'px');
    }
    /**
     * Apply the slider color from data-slider-color attribute.
     */


    function applySliderColor(container) {
      var color = container.dataset.sliderColor;

      if (color) {
        container.style.setProperty('--ck-ic-slider-color', color);
      }
    }
    /**
     * Apply divider line styles from data-divider-* attributes.
     */


    function applyDividerStyles(container) {
      var width = container.dataset.dividerWidth;
      var color = container.dataset.dividerColor;

      if (width !== undefined) {
        container.style.setProperty('--ck-ic-divider-width', width + 'px');
      }

      if (color) {
        container.style.setProperty('--ck-ic-divider-color', color);
      }
    }
    /**
     * Show/hide labels depending on whether they overlap the slider boundary.
     */


    function updateLabels(container) {
      var resizeImg = container.querySelector('.cd-resize-img');
      if (!resizeImg) return;
      var modifiedLabel = container.querySelector('.cd-image-label[data-type="modified"]');
      var originalLabel = container.querySelector('.cd-image-label[data-type="original"]');
      var resizeRight = resizeImg.getBoundingClientRect().right;

      if (modifiedLabel) {
        var modLabelRight = modifiedLabel.getBoundingClientRect().right;
        modifiedLabel.classList.toggle('is-hidden', modLabelRight >= resizeRight);
      }

      if (originalLabel) {
        var origLabelLeft = originalLabel.getBoundingClientRect().left;
        originalLabel.classList.toggle('is-hidden', origLabelLeft <= resizeRight);
      }
    }
    /**
     * Set up drag interaction for a single container.
     */


    function setupDrag(container) {
      var handle = container.querySelector('.cd-handle');
      var resizeImg = container.querySelector('.cd-resize-img');
      if (!handle || !resizeImg) return;
      var dragging = false;

      function getClientX(e) {
        if (e.touches && e.touches.length) {
          return e.touches[0].clientX;
        }

        return e.clientX;
      }

      function onDragStart(e) {
        e.preventDefault();
        handle.classList.add('draggable');
        resizeImg.classList.add('resizable');
        dragging = false;

        function onDragMove(e) {
          e.preventDefault();
          if (dragging) return;
          dragging = true;
          var clientX = getClientX(e);
          requestAnimationFrame(function () {
            var containerRect = container.getBoundingClientRect();
            var containerWidth = container.offsetWidth;
            var handleWidth = handle.offsetWidth;
            var offsetLeft = clientX - containerRect.left;
            var minOffset = handleWidth / 2 + 10;
            var maxOffset = containerWidth - handleWidth / 2 - 10;
            offsetLeft = Math.max(minOffset, Math.min(offsetLeft, maxOffset));
            var pct = (offsetLeft / containerWidth * 100).toFixed(2) + '%';
            handle.style.left = pct;
            resizeImg.style.width = pct;
            var divider = container.querySelector('.cd-divider');
            if (divider) divider.style.left = pct;
            updateLabels(container);
            dragging = false;
          });
        }

        function onDragEnd() {
          handle.classList.remove('draggable');
          resizeImg.classList.remove('resizable');
          document.removeEventListener('mousemove', onDragMove);
          document.removeEventListener('touchmove', onDragMove);
          document.removeEventListener('mouseup', onDragEnd);
          document.removeEventListener('touchend', onDragEnd);
        }

        document.addEventListener('mousemove', onDragMove, {
          passive: false
        });
        document.addEventListener('touchmove', onDragMove, {
          passive: false
        });
        document.addEventListener('mouseup', onDragEnd);
        document.addEventListener('touchend', onDragEnd);
      }

      handle.addEventListener('mousedown', onDragStart);
      handle.addEventListener('touchstart', onDragStart, {
        passive: false
      });
    } // Initialise each container


    containers.forEach(function (container) {
      applySliderColor(container);
      applyDividerStyles(container);
      updateContainerWidth(container);
      setupDrag(container);
      updateLabels(container);
    }); // Throttled resize handler

    var resizePending = false;
    window.addEventListener('resize', function () {
      if (resizePending) return;
      resizePending = true;
      requestAnimationFrame(function () {
        containers.forEach(function (container) {
          updateContainerWidth(container);
          updateLabels(container);
        });
        resizePending = false;
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageCompare);
  } else {
    initImageCompare();
  }
})();
/******/ })()
;
//# sourceMappingURL=script.js.map