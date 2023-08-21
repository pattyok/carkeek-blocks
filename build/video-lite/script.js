!function(){"use strict";class t extends HTMLElement{constructor(){super(),this.isIframeLoaded=!1,this.setupDom()}static get observedAttributes(){return["videoid","playlistid"]}connectedCallback(){this.addEventListener("pointerover",t.warmConnections,{once:!0}),this.addEventListener("click",(()=>this.addIframe()))}get videoId(){return encodeURIComponent(this.getAttribute("videoid")||"")}set videoId(t){this.setAttribute("videoid",t)}get playlistId(){return encodeURIComponent(this.getAttribute("playlistid")||"")}set playlistId(t){this.setAttribute("playlistid",t)}get videoTitle(){return this.getAttribute("videotitle")||"Video"}set videoTitle(t){this.setAttribute("videotitle",t)}get videoPlay(){return this.getAttribute("videoPlay")||"Play"}set videoPlay(t){this.setAttribute("videoPlay",t)}get videoStartAt(){return this.getAttribute("videoStartAt")||"0"}get autoLoad(){return this.hasAttribute("autoload")}get noCookie(){return this.hasAttribute("nocookie")}get posterQuality(){return this.getAttribute("posterquality")||"hqdefault"}get posterLoading(){return this.getAttribute("posterloading")||"lazy"}get params(){return`start=${this.videoStartAt}&${this.getAttribute("params")}`}set params(t){this.setAttribute("params",t)}setupDom(){const t=this.attachShadow({mode:"open"});let e="";window.liteYouTubeNonce&&(e=`nonce="${window.liteYouTubeNonce}"`),t.innerHTML=`\n      <style ${e}>\n        :host {\n          contain: content;\n          display: block;\n          position: relative;\n          width: 100%;\n          padding-bottom: calc(100% / (16 / 9));\n        }\n\n        @media (max-width: 40em) {\n          :host([short]) {\n            padding-bottom: calc(100% / (9 / 16));\n          }\n        }\n\n        #frame, #fallbackPlaceholder, iframe {\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          left: 0;\n        }\n\n        #frame {\n          cursor: pointer;\n        }\n\n        #fallbackPlaceholder {\n          object-fit: cover;\n        }\n\n        #frame::before {\n          content: '';\n          display: block;\n          position: absolute;\n          top: 0;\n          background-image: linear-gradient(180deg, #111 -20%, transparent 90%);\n          height: 60px;\n          width: 100%;\n          z-index: 1;\n        }\n\n        #playButton {\n          width: 68px;\n          height: 48px;\n          background-color: transparent;\n          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');\n          z-index: 1;\n          border: 0;\n          border-radius: inherit;\n        }\n\n        #playButton:before {\n          content: '';\n          border-style: solid;\n          border-width: 11px 0 11px 19px;\n          border-color: transparent transparent transparent #fff;\n        }\n\n        #playButton,\n        #playButton:before {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate3d(-50%, -50%, 0);\n          cursor: inherit;\n        }\n\n        /* Post-click styles */\n        .activated {\n          cursor: unset;\n        }\n\n        #frame.activated::before,\n        #frame.activated > #playButton {\n          display: none;\n        }\n      </style>\n      <div id="frame">\n        <picture>\n          <source id="webpPlaceholder" type="image/webp">\n          <source id="jpegPlaceholder" type="image/jpeg">\n          <img id="fallbackPlaceholder" referrerpolicy="origin" loading="lazy">\n        </picture>\n        <button id="playButton"></button>\n      </div>\n    `,this.domRefFrame=t.querySelector("#frame"),this.domRefImg={fallback:t.querySelector("#fallbackPlaceholder"),webp:t.querySelector("#webpPlaceholder"),jpeg:t.querySelector("#jpegPlaceholder")},this.domRefPlayButton=t.querySelector("#playButton")}setupComponent(){this.initImagePlaceholder(),this.domRefPlayButton.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.setAttribute("title",`${this.videoPlay}: ${this.videoTitle}`),(this.autoLoad||this.isYouTubeShort())&&this.initIntersectionObserver()}attributeChangedCallback(t,e,i){switch(t){case"videoid":case"playlistid":case"videoTitle":case"videoPlay":e!==i&&(this.setupComponent(),this.domRefFrame.classList.contains("activated")&&(this.domRefFrame.classList.remove("activated"),this.shadowRoot.querySelector("iframe").remove(),this.isIframeLoaded=!1))}}addIframe(t=!1){if(!this.isIframeLoaded){let e=t?0:1;const i=this.noCookie?"-nocookie":"";let o;o=this.playlistId?`?listType=playlist&list=${this.playlistId}&`:`${this.videoId}?`,this.isYouTubeShort()&&(this.params=`loop=1&mute=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${this.videoId}`,e=1);const n=`\n<iframe frameborder="0" title="${this.videoTitle}"\n  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen\n  src="https://www.youtube${i}.com/embed/${o}autoplay=${e}&${this.params}"\n></iframe>`;this.domRefFrame.insertAdjacentHTML("beforeend",n),this.domRefFrame.classList.add("activated"),this.isIframeLoaded=!0,this.attemptShortAutoPlay(),this.dispatchEvent(new CustomEvent("liteYoutubeIframeLoaded",{detail:{videoId:this.videoId},bubbles:!0,cancelable:!0}))}}initImagePlaceholder(){const t=`https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`,e=`https://i.ytimg.com/vi/${this.videoId}/${this.posterQuality}.jpg`;this.domRefImg.fallback.loading=this.posterLoading,this.domRefImg.webp.srcset=t,this.domRefImg.jpeg.srcset=e,this.domRefImg.fallback.src=e,this.domRefImg.fallback.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.domRefImg?.fallback?.setAttribute("alt",`${this.videoPlay}: ${this.videoTitle}`)}initIntersectionObserver(){new IntersectionObserver(((e,i)=>{e.forEach((e=>{e.isIntersecting&&!this.isIframeLoaded&&(t.warmConnections(),this.addIframe(!0),i.unobserve(this))}))}),{root:null,rootMargin:"0px",threshold:0}).observe(this)}attemptShortAutoPlay(){this.isYouTubeShort()&&setTimeout((()=>{this.shadowRoot.querySelector("iframe")?.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}),2e3)}isYouTubeShort(){return""===this.getAttribute("short")&&window.matchMedia("(max-width: 40em)").matches}static addPrefetch(t,e){const i=document.createElement("link");i.rel=t,i.href=e,i.crossOrigin="true",document.head.append(i)}static warmConnections(){t.isPreconnected||window.liteYouTubeIsPreconnected||(t.addPrefetch("preconnect","https://i.ytimg.com/"),t.addPrefetch("preconnect","https://s.ytimg.com"),t.addPrefetch("preconnect","https://www.youtube.com"),t.addPrefetch("preconnect","https://www.google.com"),t.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),t.addPrefetch("preconnect","https://static.doubleclick.net"),t.isPreconnected=!0,window.liteYouTubeIsPreconnected=!0)}}t.isPreconnected=!1,customElements.define("lite-youtube",t);let e=(()=>{class t extends HTMLElement{constructor(){super(),this.iframeLoaded=!1,this.setupDom()}static get observedAttributes(){return["videoid"]}connectedCallback(){this.addEventListener("pointerover",t.warmConnections,{once:!0}),this.addEventListener("click",(()=>this.addIframe()))}get videoId(){return encodeURIComponent(this.getAttribute("videoid")||"")}set videoId(t){this.setAttribute("videoid",t)}get videoTitle(){return this.getAttribute("videotitle")||"Video"}set videoTitle(t){this.setAttribute("videotitle",t)}get videoPlay(){return this.getAttribute("videoPlay")||"Play"}set videoPlay(t){this.setAttribute("videoPlay",t)}get videoStartAt(){return this.getAttribute("videoPlay")||"0s"}set videoStartAt(t){this.setAttribute("videoPlay",t)}get autoLoad(){return this.hasAttribute("autoload")}set autoLoad(t){t?this.setAttribute("autoload",""):this.removeAttribute("autoload")}get autoPlay(){return this.hasAttribute("autoplay")}set autoPlay(t){t?this.setAttribute("autoplay","autoplay"):this.removeAttribute("autoplay")}setupDom(){this.attachShadow({mode:"open"}).innerHTML='\n      <style>\n        :host {\n          contain: content;\n          display: block;\n          position: relative;\n          width: 100%;\n          padding-bottom: calc(100% / (16 / 9));\n        }\n\n        #frame, #fallbackPlaceholder, iframe {\n          position: absolute;\n          width: 100%;\n          height: 100%;\n        }\n\n        #frame {\n          cursor: pointer;\n        }\n\n        #fallbackPlaceholder {\n          object-fit: cover;\n        }\n\n        #frame::before {\n          content: \'\';\n          display: block;\n          position: absolute;\n          top: 0;\n          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);\n          background-position: top;\n          background-repeat: repeat-x;\n          height: 60px;\n          padding-bottom: 50px;\n          width: 100%;\n          transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);\n          z-index: 1;\n        }\n        /* play button */\n        .lvo-playbtn {\n          width: 70px;\n          height: 46px;\n          background-color: #212121;\n          z-index: 1;\n          opacity: 0.8;\n          border-radius: 10%;\n          transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);\n          border: 0;\n        }\n        #frame:hover .lvo-playbtn {\n          background-color: rgb(98, 175, 237);\n          opacity: 1;\n        }\n        /* play button triangle */\n        .lvo-playbtn:before {\n          content: \'\';\n          border-style: solid;\n          border-width: 11px 0 11px 19px;\n          border-color: transparent transparent transparent #fff;\n        }\n        .lvo-playbtn,\n        .lvo-playbtn:before {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate3d(-50%, -50%, 0);\n        }\n\n        /* Post-click styles */\n        .lvo-activated {\n          cursor: unset;\n        }\n\n        #frame.lvo-activated::before,\n        .lvo-activated .lvo-playbtn {\n          display: none;\n        }\n      </style>\n      <div id="frame">\n        <picture>\n          <source id="webpPlaceholder" type="image/webp">\n          <source id="jpegPlaceholder" type="image/jpeg">\n          <img id="fallbackPlaceholder"\n               referrerpolicy="origin"\n               width="1100"\n               height="619"\n               decoding="async"\n               loading="lazy">\n        </picture>\n        <button class="lvo-playbtn"></button>\n      </div>\n    ',this.domRefFrame=this.shadowRoot.querySelector("#frame"),this.domRefImg={fallback:this.shadowRoot.querySelector("#fallbackPlaceholder"),webp:this.shadowRoot.querySelector("#webpPlaceholder"),jpeg:this.shadowRoot.querySelector("#jpegPlaceholder")},this.domRefPlayButton=this.shadowRoot.querySelector(".lvo-playbtn")}setupComponent(){this.initImagePlaceholder(),this.domRefPlayButton.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.setAttribute("title",`${this.videoPlay}: ${this.videoTitle}`),this.autoLoad&&this.initIntersectionObserver()}attributeChangedCallback(t,e,i){"videoid"===t&&e!==i&&(this.setupComponent(),this.domRefFrame.classList.contains("lvo-activated")&&(this.domRefFrame.classList.remove("lvo-activated"),this.shadowRoot.querySelector("iframe").remove()))}addIframe(){if(!this.iframeLoaded){const t=this.autoLoad&&this.autoPlay||!this.autoLoad?"autoplay=1":"",e=`\n<iframe frameborder="0"\n  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\n  allowfullscreen src="${new URL(`/video/${this.videoId}?${t}&#t=${this.videoStartAt}`,"https://player.vimeo.com/")}"></iframe>`;this.domRefFrame.insertAdjacentHTML("beforeend",e),this.domRefFrame.classList.add("lvo-activated"),this.iframeLoaded=!0}}async initImagePlaceholder(){t.addPrefetch("preconnect","https://i.vimeocdn.com/");const e=`https://vimeo.com/api/v2/video/${this.videoId}.json`,i=(await(await fetch(e)).json())[0].thumbnail_large,o=i.substr(i.lastIndexOf("/")+1).split("_")[0],n=`https://i.vimeocdn.com/video/${o}.webp?mw=1100&mh=619&q=70`,a=`https://i.vimeocdn.com/video/${o}.jpg?mw=1100&mh=619&q=70`;this.domRefImg.webp.srcset=n,this.domRefImg.jpeg.srcset=a,this.domRefImg.fallback.src=a,this.domRefImg.fallback.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.domRefImg.fallback.setAttribute("alt",`${this.videoPlay}: ${this.videoTitle}`)}initIntersectionObserver(){"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&new IntersectionObserver(((e,i)=>{e.forEach((e=>{e.isIntersecting&&!this.iframeLoaded&&(t.warmConnections(),this.addIframe(),i.unobserve(this))}))}),{root:null,rootMargin:"0px",threshold:0}).observe(this)}static addPrefetch(t,e,i){const o=document.createElement("link");o.rel=t,o.href=e,i&&(o.as=i),o.crossOrigin="true",document.head.append(o)}static warmConnections(){t.preconnected||(t.addPrefetch("preconnect","https://f.vimeocdn.com"),t.addPrefetch("preconnect","https://player.vimeo.com"),t.addPrefetch("preconnect","https://i.vimeocdn.com"),t.preconnected=!0)}}return t.preconnected=!1,t})();customElements.define("lite-vimeo",e)}();