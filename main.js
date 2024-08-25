(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>B});var o=t(354),A=t.n(o),i=t(314),r=t.n(i),a=t(417),s=t.n(a),l=new URL(t(386),t.b),d=new URL(t(552),t.b),p=new URL(t(395),t.b),c=new URL(t(195),t.b),f=r()(A()),u=s()(l),C=s()(d),m=s()(p),x=s()(c);f.push([n.id,`@font-face {\n    font-family: 'Poppins Light';\n    src: url(${u}) format('woff2'),\n    url(${C}) format('woff');\n    font-weight: 500;\n    font-style: normal;\n    font-display: swap;\n}\n\n\n@font-face {\n    font-family: 'Poppins Medium';\n    src: url(${m}) format('woff2'),\n    url(${x}) format('woff');\n    font-weight: 500;\n    font-style: normal;\n    font-display: swap;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins Light';\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.288);\n}\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#app {\n    border: 1px rgba(0, 0, 0, 0.25) solid;\n    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.35);\n    display: flex;\n    flex-direction: row;\n    border-radius: 6px;\n    height: 65%;\n    background-color: white;\n    z-index: 1;\n}\n\n.nav-bar {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 5px 25px;\n    margin-right: 140px;\n    margin-top: min(10%, 70px);\n}\n.nav-btn {\n    border: none;\n    font-size: 16px;\n    text-align: left;\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    align-items: center;\n    gap: 15px;\n    cursor: pointer;\n    background-color: white;\n}\n.nav-icon {\n    width: 29;\n    height: 29;\n}\n#do-list-container {\n    flex-grow: 4;\n    margin-top: min(8%, 55px);\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    min-width: 700px;\n}\n#do-list-title {\n    font-size: 28px;\n    font-family: 'Poppins Medium';\n}\n.do-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.do-list-subtitle {\n    font-size: 20px;\n    font-family: 'Poppins Light';\n}\n.do-list-add-task-btn {\n    border: none;\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    align-items: center;\n    gap: 10px;\n    font-size: 16px;\n    cursor: pointer;\n    background-color: white;\n}\n.do-add-btn {\n    width: 20;\n    height: 20;\n}\n#modal-root {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#modal {\n    position: absolute;\n    top: 35%;\n    z-index: 10;\n    padding: 25px 20px;\n    border: 1px rgba(0, 0, 0, 0.25) solid;\n    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.35);\n    border-radius: 6px;\n    background-color: white;\n    flex-direction: column;\n    gap: 20px;\n    opacity: 1;\n    transition: opacity 300ms ease-in-out;\n    font-size: 16px;\n}\n.modal-root {\n    z-index: 5;\n}\n.modal {\n    display: flex;\n}\n#modal:active {\n    transition: 300ms ease-in-out;\n}\n\n.modal-body {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n.modal-field-container {\n    display: flex;\n    flex-direction: row;\n}\n#modal input {\n    flex: auto;\n    font-family: inherit;\n    font-size: 16px;\n    padding: 2px 5px;\n    border-radius: 6px;\n    border: 1px rgba(0, 0, 0, 0.3) solid;\n}\n#modal input:focus {\n    outline-width: 0;\n}\n#modal-btn-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n#modal-btn-container button {\n    border: none;\n}\n#priority-container {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.priority-radio-container {\n    display: flex;\n    flex-direction: column;\n    box-shadow: none;\n    gap: 3px;\n}\n.priority-radio-label {\n    font-size: 14.5px;\n}\n#modal-submit {\n    font-size: 16px;\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,4BAA4B;IAC5B;0DAC2D;IAC3D,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;;AAGA;IACI,6BAA6B;IAC7B;0DAC4D;IAC5D,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,sCAAsC;AAC1C;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,qCAAqC;IACrC,2CAA2C;IAC3C,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,mBAAmB;IACnB,0BAA0B;AAC9B;AACA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,uBAAuB;AAC3B;AACA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,eAAe;IACf,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,eAAe;IACf,uBAAuB;AAC3B;AACA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,kBAAkB;IAClB,qCAAqC;IACrC,2CAA2C;IAC3C,kBAAkB;IAClB,uBAAuB;IACvB,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,qCAAqC;IACrC,eAAe;AACnB;AACA;IACI,UAAU;AACd;AACA;IACI,aAAa;AACjB;AACA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,UAAU;IACV,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,oCAAoC;AACxC;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,QAAQ;AACZ;AACA;IACI,iBAAiB;AACrB;AACA;IACI,eAAe;AACnB",sourcesContent:["@font-face {\n    font-family: 'Poppins Light';\n    src: url('./components/fonts/Poppins-Light.woff2') format('woff2'),\n    url('./components/fonts/Poppins-Light.woff') format('woff');\n    font-weight: 500;\n    font-style: normal;\n    font-display: swap;\n}\n\n\n@font-face {\n    font-family: 'Poppins Medium';\n    src: url('./components/fonts/Poppins-Medium.woff2') format('woff2'),\n    url('./components/fonts/Poppins-Medium.woff') format('woff');\n    font-weight: 500;\n    font-style: normal;\n    font-display: swap;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins Light';\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.288);\n}\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#app {\n    border: 1px rgba(0, 0, 0, 0.25) solid;\n    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.35);\n    display: flex;\n    flex-direction: row;\n    border-radius: 6px;\n    height: 65%;\n    background-color: white;\n    z-index: 1;\n}\n\n.nav-bar {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 5px 25px;\n    margin-right: 140px;\n    margin-top: min(10%, 70px);\n}\n.nav-btn {\n    border: none;\n    font-size: 16px;\n    text-align: left;\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    align-items: center;\n    gap: 15px;\n    cursor: pointer;\n    background-color: white;\n}\n.nav-icon {\n    width: 29;\n    height: 29;\n}\n#do-list-container {\n    flex-grow: 4;\n    margin-top: min(8%, 55px);\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    min-width: 700px;\n}\n#do-list-title {\n    font-size: 28px;\n    font-family: 'Poppins Medium';\n}\n.do-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.do-list-subtitle {\n    font-size: 20px;\n    font-family: 'Poppins Light';\n}\n.do-list-add-task-btn {\n    border: none;\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    align-items: center;\n    gap: 10px;\n    font-size: 16px;\n    cursor: pointer;\n    background-color: white;\n}\n.do-add-btn {\n    width: 20;\n    height: 20;\n}\n#modal-root {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#modal {\n    position: absolute;\n    top: 35%;\n    z-index: 10;\n    padding: 25px 20px;\n    border: 1px rgba(0, 0, 0, 0.25) solid;\n    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.35);\n    border-radius: 6px;\n    background-color: white;\n    flex-direction: column;\n    gap: 20px;\n    opacity: 1;\n    transition: opacity 300ms ease-in-out;\n    font-size: 16px;\n}\n.modal-root {\n    z-index: 5;\n}\n.modal {\n    display: flex;\n}\n#modal:active {\n    transition: 300ms ease-in-out;\n}\n\n.modal-body {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n.modal-field-container {\n    display: flex;\n    flex-direction: row;\n}\n#modal input {\n    flex: auto;\n    font-family: inherit;\n    font-size: 16px;\n    padding: 2px 5px;\n    border-radius: 6px;\n    border: 1px rgba(0, 0, 0, 0.3) solid;\n}\n#modal input:focus {\n    outline-width: 0;\n}\n#modal-btn-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n#modal-btn-container button {\n    border: none;\n}\n#priority-container {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.priority-radio-container {\n    display: flex;\n    flex-direction: column;\n    box-shadow: none;\n    gap: 3px;\n}\n.priority-radio-label {\n    font-size: 14.5px;\n}\n#modal-submit {\n    font-size: 16px;\n}"],sourceRoot:""}]);const B=f},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,A,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(r[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&r[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),A&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=A):d[4]="".concat(A)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(A," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},r=[],a=0;a<n.length;a++){var s=n[a],l=o.base?s[0]+o.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var c=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==c)e[c].references++,e[c].updater(f);else{var u=A(f,o);o.byIndex=a,e.splice(a,0,{identifier:p,updater:u,references:1})}r.push(p)}return r}function A(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,A){var i=o(n=n||[],A=A||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var a=t(i[r]);e[a].references--}for(var s=o(n,A),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var A=void 0!==t.layer;A&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,A&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},552:(n,e,t)=>{n.exports=t.p+"dd955e507b9de44ef2ef.woff"},386:(n,e,t)=>{n.exports=t.p+"e30e98e0e860d602c19e.woff2"},195:(n,e,t)=>{n.exports=t.p+"4059ad24157ca3c18cc4.woff"},395:(n,e,t)=>{n.exports=t.p+"967ee284888df9dbc3c7.woff2"}},e={};function t(o){var A=e[o];if(void 0!==A)return A.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var A=o.length-1;A>-1&&(!n||!/^http(s?):/.test(n));)n=o[A--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),A=t.n(o),i=t(825),r=t.n(i),a=t(659),s=t.n(a),l=t(56),d=t.n(l),p=t(540),c=t.n(p),f=t(113),u=t.n(f),C=t(208),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=s().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=c(),A()(C.A,m),C.A&&C.A.locals&&C.A.locals,window.onload=()=>{let n=document.querySelector("#task-name-input");n.value="Event/Task",n.addEventListener("focus",(e=>{"Event/Task"==n.value&&(n.value="")})),n.addEventListener("blur",(e=>{""==n.value&&(n.value="Event/Task")})),document.querySelectorAll(".do-list-add-task-btn").forEach((n=>{n.addEventListener("click",(()=>{document.querySelector("#modal").classList.add("modal"),document.querySelector("#modal-root").classList.add("modal-root")}))})),document.querySelector("#modal-root").addEventListener("click",(n=>{document.querySelector("#modal-root").classList.remove("modal-root"),document.querySelector("#modal").classList.remove("modal")})),document.querySelector("#modal").addEventListener("click",(n=>(n.stopPropagation(),n.stopImmediatePropagation(),!1)))}})();
//# sourceMappingURL=main.js.map