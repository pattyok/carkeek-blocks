/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@slightlyoff/lite-vimeo/lite-vimeo.js":
/*!************************************************************!*\
  !*** ./node_modules/@slightlyoff/lite-vimeo/lite-vimeo.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiteVimeoEmbed: () => (/* binding */ LiteVimeoEmbed)
/* harmony export */ });
/**
 *
 * The shadowDom / Intersection Observer version of Paul's concept:
 * https://github.com/paulirish/lite-youtube-embed
 *
 * A lightweight YouTube embed. Still should feel the same to the user, just
 * MUCH faster to initialize and paint.
 *
 * Thx to these as the inspiration
 *   https://storage.googleapis.com/amp-vs-non-amp/youtube-lazy.html
 *   https://autoplay-youtube-player.glitch.me/
 *
 * Once built it, I also found these (👍👍):
 *   https://github.com/ampproject/amphtml/blob/master/extensions/amp-youtube
 *   https://github.com/Daugilas/lazyYT https://github.com/vb/lazyframe
 */
/*
 * Vimeo example embed markup:
<iframe src="https://player.vimeo.com/video/364402896"
  width="640" height="360"
  frameborder="0"
  allow="autoplay; fullscreen" allowfullscreen>
</iframe>
<p><a href="https://vimeo.com/364402896">
  Alex Russell - The Mobile Web: MIA</a> from
    <a href="https://vimeo.com/fronteers">Fronteers</a>
    on <a href="https://vimeo.com">Vimeo</a>.
</p>
 */
let LiteVimeoEmbed = /** @class */ (() => {
    class LiteVimeoEmbed extends HTMLElement {
        constructor() {
            super();
            this.iframeLoaded = false;
            this.setupDom();
        }
        static get observedAttributes() {
            return ['videoid'];
        }
        connectedCallback() {
            this.addEventListener('pointerover', LiteVimeoEmbed.warmConnections, {
                once: true,
            });
            this.addEventListener('click', () => this.addIframe());
        }
        get videoId() {
            return encodeURIComponent(this.getAttribute('videoid') || '');
        }
        set videoId(id) {
            this.setAttribute('videoid', id);
        }
        get videoTitle() {
            return this.getAttribute('videotitle') || 'Video';
        }
        set videoTitle(title) {
            this.setAttribute('videotitle', title);
        }
        get videoPlay() {
            return this.getAttribute('videoPlay') || 'Play';
        }
        set videoPlay(name) {
            this.setAttribute('videoPlay', name);
        }
        get videoStartAt() {
            return this.getAttribute('videoPlay') || '0s';
        }
        set videoStartAt(time) {
            this.setAttribute('videoPlay', time);
        }
        get autoLoad() {
            return this.hasAttribute('autoload');
        }
        set autoLoad(value) {
            if (value) {
                this.setAttribute('autoload', '');
            }
            else {
                this.removeAttribute('autoload');
            }
        }
        get autoPlay() {
            return this.hasAttribute('autoplay');
        }
        set autoPlay(value) {
            if (value) {
                this.setAttribute('autoplay', 'autoplay');
            }
            else {
                this.removeAttribute('autoplay');
            }
        }
        /**
         * Define our shadowDOM for the component
         */
        setupDom() {
            const shadowDom = this.attachShadow({ mode: 'open' });
            shadowDom.innerHTML = `
      <style>
        :host {
          contain: content;
          display: block;
          position: relative;
          width: 100%;
          padding-bottom: calc(100% / (16 / 9));
        }

        #frame, #fallbackPlaceholder, iframe {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        #frame {
          cursor: pointer;
        }

        #fallbackPlaceholder {
          object-fit: cover;
        }

        #frame::before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
          background-position: top;
          background-repeat: repeat-x;
          height: 60px;
          padding-bottom: 50px;
          width: 100%;
          transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
          z-index: 1;
        }
        /* play button */
        .lvo-playbtn {
          width: 70px;
          height: 46px;
          background-color: #212121;
          z-index: 1;
          opacity: 0.8;
          border-radius: 10%;
          transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
          border: 0;
        }
        #frame:hover .lvo-playbtn {
          background-color: rgb(98, 175, 237);
          opacity: 1;
        }
        /* play button triangle */
        .lvo-playbtn:before {
          content: '';
          border-style: solid;
          border-width: 11px 0 11px 19px;
          border-color: transparent transparent transparent #fff;
        }
        .lvo-playbtn,
        .lvo-playbtn:before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }

        /* Post-click styles */
        .lvo-activated {
          cursor: unset;
        }

        #frame.lvo-activated::before,
        .lvo-activated .lvo-playbtn {
          display: none;
        }
      </style>
      <div id="frame">
        <picture>
          <source id="webpPlaceholder" type="image/webp">
          <source id="jpegPlaceholder" type="image/jpeg">
          <img id="fallbackPlaceholder"
               referrerpolicy="origin"
               width="1100"
               height="619"
               decoding="async"
               loading="lazy">
        </picture>
        <button class="lvo-playbtn"></button>
      </div>
    `;
            this.domRefFrame = this.shadowRoot.querySelector('#frame');
            this.domRefImg = {
                fallback: this.shadowRoot.querySelector('#fallbackPlaceholder'),
                webp: this.shadowRoot.querySelector('#webpPlaceholder'),
                jpeg: this.shadowRoot.querySelector('#jpegPlaceholder'),
            };
            this.domRefPlayButton = this.shadowRoot.querySelector('.lvo-playbtn');
        }
        /**
         * Parse our attributes and fire up some placeholders
         */
        setupComponent() {
            this.initImagePlaceholder();
            this.domRefPlayButton.setAttribute('aria-label', `${this.videoPlay}: ${this.videoTitle}`);
            this.setAttribute('title', `${this.videoPlay}: ${this.videoTitle}`);
            if (this.autoLoad) {
                this.initIntersectionObserver();
            }
        }
        /**
         * Lifecycle method that we use to listen for attribute changes to period
         * @param {*} name
         * @param {*} oldVal
         * @param {*} newVal
         */
        attributeChangedCallback(name, oldVal, newVal) {
            switch (name) {
                case 'videoid': {
                    if (oldVal !== newVal) {
                        this.setupComponent();
                        // if we have a previous iframe, remove it and the activated class
                        if (this.domRefFrame.classList.contains('lvo-activated')) {
                            this.domRefFrame.classList.remove('lvo-activated');
                            this.shadowRoot.querySelector('iframe').remove();
                        }
                    }
                    break;
                }
                default:
                    break;
            }
        }
        /**
         * Inject the iframe into the component body
         */
        addIframe() {
            if (!this.iframeLoaded) {
                /**
                 * Vimeo example embed markup:
                 *
                 *  <iframe src="https://player.vimeo.com/video/364402896#t=1m3s"
                 *    width="640" height="360"
                 *    frameborder="0"
                 *    allow="autoplay; fullscreen" allowfullscreen>
                 *  </iframe>
                 */
                // FIXME: add a setting for autoplay
                const apValue = ((this.autoLoad && this.autoPlay) || (!this.autoLoad)) ?
                    "autoplay=1" : "";
                const srcUrl = new URL(`/video/${this.videoId}?${apValue}&#t=${this.videoStartAt}`, "https://player.vimeo.com/");
                // TODO: construct src value w/ URL constructor
                const iframeHTML = `
<iframe frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen src="${srcUrl}"></iframe>`;
                this.domRefFrame.insertAdjacentHTML('beforeend', iframeHTML);
                this.domRefFrame.classList.add('lvo-activated');
                this.iframeLoaded = true;
            }
        }
        /**
         * Setup the placeholder image for the component
         */
        async initImagePlaceholder() {
            // TODO(slightlyoff): TODO: cache API responses
            // we don't know which image type to preload, so warm the connection
            LiteVimeoEmbed.addPrefetch('preconnect', 'https://i.vimeocdn.com/');
            // API is the video-id based
            // http://vimeo.com/api/v2/video/364402896.json
            const apiUrl = `https://vimeo.com/api/v2/video/${this.videoId}.json`;
            // Now fetch the JSON that locates our placeholder from vimeo's JSON API
            const apiResponse = (await (await fetch(apiUrl)).json())[0];
            // Extract the image id, e.g. 819916979, from a URL like:
            // thumbnail_large: "https://i.vimeocdn.com/video/819916979_640.jpg"
            const tnLarge = apiResponse.thumbnail_large;
            const imgId = (tnLarge.substr(tnLarge.lastIndexOf("/") + 1)).split("_")[0];
            // const posterUrlWebp =
            //    `https://i.ytimg.com/vi_webp/${this.videoId}/hqdefault.webp`;
            const posterUrlWebp = `https://i.vimeocdn.com/video/${imgId}.webp?mw=1100&mh=619&q=70`;
            const posterUrlJpeg = `https://i.vimeocdn.com/video/${imgId}.jpg?mw=1100&mh=619&q=70`;
            this.domRefImg.webp.srcset = posterUrlWebp;
            this.domRefImg.jpeg.srcset = posterUrlJpeg;
            this.domRefImg.fallback.src = posterUrlJpeg;
            this.domRefImg.fallback.setAttribute('aria-label', `${this.videoPlay}: ${this.videoTitle}`);
            this.domRefImg.fallback.setAttribute('alt', `${this.videoPlay}: ${this.videoTitle}`);
        }
        /**
         * Setup the Intersection Observer to load the iframe when scrolled into view
         */
        initIntersectionObserver() {
            if ('IntersectionObserver' in window &&
                'IntersectionObserverEntry' in window) {
                const options = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0,
                };
                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !this.iframeLoaded) {
                            LiteVimeoEmbed.warmConnections();
                            this.addIframe();
                            observer.unobserve(this);
                        }
                    });
                }, options);
                observer.observe(this);
            }
        }
        /**
         * Add a <link rel={preload | preconnect} ...> to the head
         * @param {*} kind
         * @param {*} url
         * @param {*} as
         */
        static addPrefetch(kind, url, as) {
            const linkElem = document.createElement('link');
            linkElem.rel = kind;
            linkElem.href = url;
            if (as) {
                linkElem.as = as;
            }
            linkElem.crossOrigin = 'true';
            document.head.append(linkElem);
        }
        /**
         * Begin preconnecting to warm up the iframe load Since the embed's netwok
         * requests load within its iframe, preload/prefetch'ing them outside the
         * iframe will only cause double-downloads. So, the best we can do is warm up
         * a few connections to origins that are in the critical path.
         *
         * Maybe `<link rel=preload as=document>` would work, but it's unsupported:
         * http://crbug.com/593267 But TBH, I don't think it'll happen soon with Site
         * Isolation and split caches adding serious complexity.
         */
        static warmConnections() {
            if (LiteVimeoEmbed.preconnected)
                return;
            // Host that Vimeo uses to serve JS needed by player
            LiteVimeoEmbed.addPrefetch('preconnect', 'https://f.vimeocdn.com');
            // The iframe document comes from player.vimeo.com
            LiteVimeoEmbed.addPrefetch('preconnect', 'https://player.vimeo.com');
            // Image for placeholder comes from i.vimeocdn.com
            LiteVimeoEmbed.addPrefetch('preconnect', 'https://i.vimeocdn.com');
            LiteVimeoEmbed.preconnected = true;
        }
    }
    LiteVimeoEmbed.preconnected = false;
    return LiteVimeoEmbed;
})();

// Register custom element
customElements.define('lite-vimeo', LiteVimeoEmbed);
//# sourceMappingURL=lite-vimeo.js.map

/***/ }),

/***/ "./node_modules/@justinribeiro/lite-youtube/lite-youtube.js":
/*!******************************************************************!*\
  !*** ./node_modules/@justinribeiro/lite-youtube/lite-youtube.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiteYTEmbed: () => (/* binding */ LiteYTEmbed)
/* harmony export */ });
class LiteYTEmbed extends HTMLElement {
    constructor() {
        super();
        this.isIframeLoaded = false;
        this.setupDom();
    }
    static get observedAttributes() {
        return ['videoid', 'playlistid'];
    }
    connectedCallback() {
        this.addEventListener('pointerover', LiteYTEmbed.warmConnections, {
            once: true,
        });
        this.addEventListener('click', () => this.addIframe());
    }
    get videoId() {
        return encodeURIComponent(this.getAttribute('videoid') || '');
    }
    set videoId(id) {
        this.setAttribute('videoid', id);
    }
    get playlistId() {
        return encodeURIComponent(this.getAttribute('playlistid') || '');
    }
    set playlistId(id) {
        this.setAttribute('playlistid', id);
    }
    get videoTitle() {
        return this.getAttribute('videotitle') || 'Video';
    }
    set videoTitle(title) {
        this.setAttribute('videotitle', title);
    }
    get videoPlay() {
        return this.getAttribute('videoPlay') || 'Play';
    }
    set videoPlay(name) {
        this.setAttribute('videoPlay', name);
    }
    get videoStartAt() {
        return this.getAttribute('videoStartAt') || '0';
    }
    get autoLoad() {
        return this.hasAttribute('autoload');
    }
    get noCookie() {
        return this.hasAttribute('nocookie');
    }
    get posterQuality() {
        return this.getAttribute('posterquality') || 'hqdefault';
    }
    get posterLoading() {
        return (this.getAttribute('posterloading') ||
            'lazy');
    }
    get params() {
        return `start=${this.videoStartAt}&${this.getAttribute('params')}`;
    }
    set params(opts) {
        this.setAttribute('params', opts);
    }
    setupDom() {
        const shadowDom = this.attachShadow({ mode: 'open' });
        let nonce = '';
        if (window.liteYouTubeNonce) {
            nonce = `nonce="${window.liteYouTubeNonce}"`;
        }
        shadowDom.innerHTML = `
      <style ${nonce}>
        :host {
          contain: content;
          display: block;
          position: relative;
          width: 100%;
          padding-bottom: calc(100% / (16 / 9));
        }

        @media (max-width: 40em) {
          :host([short]) {
            padding-bottom: calc(100% / (9 / 16));
          }
        }

        #frame, #fallbackPlaceholder, iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
        }

        #frame {
          cursor: pointer;
        }

        #fallbackPlaceholder {
          object-fit: cover;
        }

        #frame::before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          background-image: linear-gradient(180deg, #111 -20%, transparent 90%);
          height: 60px;
          width: 100%;
          z-index: 1;
        }

        #playButton {
          width: 68px;
          height: 48px;
          background-color: transparent;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');
          z-index: 1;
          border: 0;
          border-radius: inherit;
        }

        #playButton:before {
          content: '';
          border-style: solid;
          border-width: 11px 0 11px 19px;
          border-color: transparent transparent transparent #fff;
        }

        #playButton,
        #playButton:before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          cursor: inherit;
        }

        /* Post-click styles */
        .activated {
          cursor: unset;
        }

        #frame.activated::before,
        #frame.activated > #playButton {
          display: none;
        }
      </style>
      <div id="frame">
        <picture>
          <source id="webpPlaceholder" type="image/webp">
          <source id="jpegPlaceholder" type="image/jpeg">
          <img id="fallbackPlaceholder" referrerpolicy="origin" loading="lazy">
        </picture>
        <button id="playButton"></button>
      </div>
    `;
        this.domRefFrame = shadowDom.querySelector('#frame');
        this.domRefImg = {
            fallback: shadowDom.querySelector('#fallbackPlaceholder'),
            webp: shadowDom.querySelector('#webpPlaceholder'),
            jpeg: shadowDom.querySelector('#jpegPlaceholder'),
        };
        this.domRefPlayButton = shadowDom.querySelector('#playButton');
    }
    setupComponent() {
        this.initImagePlaceholder();
        this.domRefPlayButton.setAttribute('aria-label', `${this.videoPlay}: ${this.videoTitle}`);
        this.setAttribute('title', `${this.videoPlay}: ${this.videoTitle}`);
        if (this.autoLoad || this.isYouTubeShort()) {
            this.initIntersectionObserver();
        }
    }
    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case 'videoid':
            case 'playlistid':
            case 'videoTitle':
            case 'videoPlay': {
                if (oldVal !== newVal) {
                    this.setupComponent();
                    if (this.domRefFrame.classList.contains('activated')) {
                        this.domRefFrame.classList.remove('activated');
                        this.shadowRoot.querySelector('iframe').remove();
                        this.isIframeLoaded = false;
                    }
                }
                break;
            }
            default:
                break;
        }
    }
    addIframe(isIntersectionObserver = false) {
        if (!this.isIframeLoaded) {
            let autoplay = isIntersectionObserver ? 0 : 1;
            const wantsNoCookie = this.noCookie ? '-nocookie' : '';
            let embedTarget;
            if (this.playlistId) {
                embedTarget = `?listType=playlist&list=${this.playlistId}&`;
            }
            else {
                embedTarget = `${this.videoId}?`;
            }
            if (this.isYouTubeShort()) {
                this.params = `loop=1&mute=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${this.videoId}`;
                autoplay = 1;
            }
            const iframeHTML = `
<iframe frameborder="0" title="${this.videoTitle}"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
  src="https://www.youtube${wantsNoCookie}.com/embed/${embedTarget}autoplay=${autoplay}&${this.params}"
></iframe>`;
            this.domRefFrame.insertAdjacentHTML('beforeend', iframeHTML);
            this.domRefFrame.classList.add('activated');
            this.isIframeLoaded = true;
            this.attemptShortAutoPlay();
            this.dispatchEvent(new CustomEvent('liteYoutubeIframeLoaded', {
                detail: {
                    videoId: this.videoId,
                },
                bubbles: true,
                cancelable: true,
            }));
        }
    }
    initImagePlaceholder() {
        const posterUrlWebp = `https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`;
        const posterUrlJpeg = `https://i.ytimg.com/vi/${this.videoId}/${this.posterQuality}.jpg`;
        this.domRefImg.fallback.loading = this.posterLoading;
        this.domRefImg.webp.srcset = posterUrlWebp;
        this.domRefImg.jpeg.srcset = posterUrlJpeg;
        this.domRefImg.fallback.src = posterUrlJpeg;
        this.domRefImg.fallback.setAttribute('aria-label', `${this.videoPlay}: ${this.videoTitle}`);
        this.domRefImg?.fallback?.setAttribute('alt', `${this.videoPlay}: ${this.videoTitle}`);
    }
    initIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isIframeLoaded) {
                    LiteYTEmbed.warmConnections();
                    this.addIframe(true);
                    observer.unobserve(this);
                }
            });
        }, options);
        observer.observe(this);
    }
    attemptShortAutoPlay() {
        if (this.isYouTubeShort()) {
            setTimeout(() => {
                this.shadowRoot
                    .querySelector('iframe')
                    ?.contentWindow?.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
            }, 2000);
        }
    }
    isYouTubeShort() {
        return (this.getAttribute('short') === '' &&
            window.matchMedia('(max-width: 40em)').matches);
    }
    static addPrefetch(kind, url) {
        const linkElem = document.createElement('link');
        linkElem.rel = kind;
        linkElem.href = url;
        linkElem.crossOrigin = 'true';
        document.head.append(linkElem);
    }
    static warmConnections() {
        if (LiteYTEmbed.isPreconnected || window.liteYouTubeIsPreconnected)
            return;
        LiteYTEmbed.addPrefetch('preconnect', 'https://i.ytimg.com/');
        LiteYTEmbed.addPrefetch('preconnect', 'https://s.ytimg.com');
        LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube.com');
        LiteYTEmbed.addPrefetch('preconnect', 'https://www.google.com');
        LiteYTEmbed.addPrefetch('preconnect', 'https://googleads.g.doubleclick.net');
        LiteYTEmbed.addPrefetch('preconnect', 'https://static.doubleclick.net');
        LiteYTEmbed.isPreconnected = true;
        window.liteYouTubeIsPreconnected = true;
    }
}
LiteYTEmbed.isPreconnected = false;
customElements.define('lite-youtube', LiteYTEmbed);
//# sourceMappingURL=lite-youtube.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/video-lite/script.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _justinribeiro_lite_youtube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @justinribeiro/lite-youtube */ "./node_modules/@justinribeiro/lite-youtube/lite-youtube.js");
/* harmony import */ var _slightlyoff_lite_vimeo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @slightlyoff/lite-vimeo */ "./node_modules/@slightlyoff/lite-vimeo/lite-vimeo.js");


})();

/******/ })()
;
//# sourceMappingURL=script.js.map