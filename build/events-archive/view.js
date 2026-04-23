/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./src/events-archive/view.js ***!
  \************************************/
const initEventsArchiveLoadMore = () => {
  const buttons = document.querySelectorAll('.js-ck-events-archive-load-more');

  if (!buttons.length) {
    return;
  }

  buttons.forEach(button => {
    if (button.dataset.ckLoadMoreInit === '1') {
      return;
    }

    button.dataset.ckLoadMoreInit = '1';
    button.addEventListener('click', async event => {
      event.preventDefault();

      if (button.disabled) {
        return;
      }

      const container = button.closest('.carkeek-archive');
      const list = container === null || container === void 0 ? void 0 : container.querySelector('.ck-custom-archive__list');

      if (!container || !list) {
        return;
      }

      const ajaxUrl = button.dataset.ajaxUrl;
      const nonce = button.dataset.nonce;
      const attributes = button.dataset.attributes;
      const currentPage = parseInt(button.dataset.currentPage || '1', 10);
      const defaultLabel = button.dataset.defaultLabel || button.textContent.trim();
      const loadingLabel = button.dataset.loadingLabel || 'Loading...';
      const errorLabel = button.dataset.errorLabel || 'Unable to load more events.';
      const statusNode = container.querySelector('.js-ck-events-archive-load-more-status');

      if (!ajaxUrl || !nonce || !attributes) {
        return;
      }

      button.disabled = true;
      button.classList.add('is-loading');
      button.textContent = loadingLabel;
      button.setAttribute('aria-busy', 'true');

      if (statusNode) {
        statusNode.textContent = '';
      }

      const formData = new FormData();
      formData.append('action', 'ckb_events_archive_load_more');
      formData.append('nonce', nonce);
      formData.append('attributes', attributes);
      formData.append('page', String(currentPage + 1));

      try {
        const response = await fetch(ajaxUrl, {
          method: 'POST',
          credentials: 'same-origin',
          body: formData
        });
        const payload = await response.json();

        if (!(payload !== null && payload !== void 0 && payload.success) || !(payload !== null && payload !== void 0 && payload.data)) {
          throw new Error('Invalid response');
        }

        if (payload.data.itemsHtml) {
          list.insertAdjacentHTML('beforeend', payload.data.itemsHtml);
        }

        button.dataset.currentPage = String(payload.data.nextPage || currentPage + 1);

        if (!payload.data.hasMore) {
          const wrapper = button.closest('.ck-events-archive__load-more-wrap');

          if (wrapper) {
            wrapper.remove();
          } else {
            button.remove();
          }

          return;
        }
      } catch (error) {
        button.disabled = false;
        button.classList.remove('is-loading');
        button.removeAttribute('aria-busy');
        button.textContent = defaultLabel;

        if (statusNode) {
          statusNode.textContent = errorLabel;
        }

        return;
      }

      button.disabled = false;
      button.classList.remove('is-loading');
      button.removeAttribute('aria-busy');
      button.textContent = defaultLabel;
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEventsArchiveLoadMore);
} else {
  initEventsArchiveLoadMore();
}
/******/ })()
;
//# sourceMappingURL=view.js.map