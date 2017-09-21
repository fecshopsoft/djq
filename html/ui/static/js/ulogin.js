/*!
 * Author: lilJay-lin <lin_xjie@foxmail.com> 
 *  Name: daijingquan 
 *  Version: 1.0.0
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("jQuery"));else if("function"==typeof define&&define.amd)define(["jQuery"],e);else{var n=e("object"==typeof exports?require("jQuery"):t.jQuery);for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(this,function(t){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=104)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var o=n(39)("wks"),i=n(44),r=n(0).Symbol,s="function"==typeof r;(t.exports=function(t){return o[t]||(o[t]=s&&r[t]||(s?r:i)("Symbol."+t))}).store=o},function(t,e){var n=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var o=n(12);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var o=n(13),i=n(38);t.exports=n(5)?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(0),i=n(2),r=n(10),s=n(4),c=function(t,e,n){var u,a,f,l=t&c.F,p=t&c.G,h=t&c.S,d=t&c.P,v=t&c.B,g=t&c.W,m=p?i:i[e]||(i[e]={}),y=m.prototype,_=p?o:h?o[e]:(o[e]||{}).prototype;p&&(n=e);for(u in n)(a=!l&&_&&void 0!==_[u])&&u in m||(f=a?_[u]:n[u],m[u]=p&&"function"!=typeof _[u]?n[u]:v&&a?r(f,o):g&&_[u]==f?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):d&&"function"==typeof f?r(Function.call,f):f,d&&((m.virtual||(m.virtual={}))[u]=f,t&c.R&&y&&!y[u]&&s(y,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){t.exports={}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(8);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var o=n(3),i=n(55),r=n(74),s=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(o(t),e=r(e,!0),o(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(e,n){e.exports=t},function(t,e,n){t.exports={default:n(50),__esModule:!0}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(12),i=n(0).document,r=o(i)&&o(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){"use strict";function o(t){var e,n;this.promise=new t(function(t,o){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=o}),this.resolve=i(e),this.reject=i(n)}var i=n(8);t.exports.f=function(t){return new o(t)}},function(t,e,n){var o=n(13).f,i=n(11),r=n(1)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,r)&&o(t,r,{configurable:!0,value:e})}},function(t,e,n){var o=n(39)("keys"),i=n(44);t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(57),i=n(16);t.exports=function(t){return o(i(t))}},function(t,e,n){"use strict";var o=n(15),i=function(t){return t&&t.__esModule?t:{default:t}}(o),r=n(14),s=n(28),c=n(29);t.exports=function(t){var e=t.type,n=void 0===e?"GET":e,o=t.url,u=void 0===o?"":o,a=t.data,f=void 0===a?null:a,l={type:n.toUpperCase(),dataType:"json",timeout:5e3,crossDomain:!0,cache:!1},p=null,h=new i.default(function(t,e){["get","delete"].indexOf(n.toLowerCase())>-1?u=s.resolve(u,f):l.data=f,l.url="http://djq.tunnel.qydev.com"+u,p=r.ajax(l).done(function(n){3===n.status?c.toast({text:n.message}).done(function(){e()}):2===n.status?(c.toast({text:n.message}),e(n)):0===n.status?c.toast({text:n.message}).done(function(){e()}):t(n)}).fail(function(t,n){c.toast({text:"请求失败,请刷新重试："+n}).done(function(){e()})})});return h.abort=function(t){p.abort(t)},h}},function(t,e,n){"use strict";t.exports.USER_ID="uiUserId",t.exports.SHOP_ID="siShopAccountId",t.exports.USE_OPEN_ID="uiUserOpenId"},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){var e=O(t);return"number"==typeof e&&e>=0&&e<=E}function r(t){return function(e){return null==e?e:e[t]}}function s(t){return"[object Object]"==S.call(t)}function c(t){return"[object Function]"==S.call(t)}function u(t,e){return t.replace(k,function(t,n,o,i){if(n||i)return t.replace("\\","");var r,s,c,u=o.replace(/\s/g,"").split("."),a=e;for(r=0,s=u.length;r<s;++r)if(c=u[r],void 0===(a=a[c])||null===a)return"";return a})}function a(t,e,n){if(null==e||!i(e))return"";var o="",r={};return f(e,function(i,c){s(e[c])?(r=e[c],r._order=c+1):(r.value=e[c],r._order=c+1),n&&(r=n(r)),o+=u(t,r)}),o}function f(t,e,n){var o,r,c=void 0==n?e:l(e,n);if(i(t))for(o=0,r=t.length;o<r&&!0!==c(t[o],o,t);o++);else if(s(t)){var u,a=(0,v.default)(t);for(o=0,r=a.length;o<r&&(u=a[o],!j.call(t,u)||!0!==c(t[u],u,t));o++);}}function l(t,e){return function(){return t.apply(e||this,arguments)}}var p=n(15),h=o(p),d=n(27),v=o(d),g=n(14),m=n(29);n(47);var y=n(45),_=n(25),w=n(48),x=n(28),b=Object.prototype,j=b.hasOwnProperty,S=b.toString,E=Math.pow(2,53)-1,O=r("length"),k=/(\\)?\{([^\{\}\\]+)(\\)?\}/g;t.exports={property:r,each:f,proxy:l,queryParse:x.queryParse,formatQuery:x.formatQuery,resolve:x.resolve,render:u,renderArray:a,goBack:function(){history.go(-1)},getOpenId:function(){},ready:function(t){var e=this,n=e.$;e.setBasePath("./");var o=function(t){return e.resolvePath(t)};e.paths={shop:o("shop.html"),user:o("user.html"),admin:o("admin.html"),index:o("index.html"),alogin:o("alogin.html"),ulogin:o("ulogin.html"),cart:o("cart.html"),record:o("record.html"),award:o("award.html"),voucher:o("voucher.html")},w.getConfig().then(function(t){w.wxLogin(t)});var i=e.formatQuery(window.location.search);i.code&&w.getOpenId(i.code),n(function(){n(document).delegate("header .left","click",function(){window.history.back()}),n(document).delegate("header .right","click",function(){window.location.href=e.paths.index}),n(document).delegate(".js-user","click",function(){window.location.href=e.paths.user}),n(document).delegate(".js-cart","click",function(){window.location.href=e.paths.cart}),t()})},$:g,toast:m.toast,all:function(t){var e=(0,v.default)(t),n=e.length,o={},i=!1;return new h.default(function(e,r){f(t,function(t,s){if(i)return!0;t.then||(t=h.default.resolve(t)),t.then(function(t){n--,o[s]=t,0===n&&e(o)},function(){i=!0,r()})})})},loading:function(t){c(t)&&(t=t());var e=g('<div class="page-loading"><img src="http://djq.tunnel.qydev.com/static/img/loading.gif" alt=""></div>'),n=setTimeout(function(){g(document.body).append(e)},50),o=function(){clearTimeout(n),e.remove()};return t.then||(t=h.default.resolve(t)),t.then(o,o)},BASE_PATH:"./",setBasePath:function(t){this.BASE_PATH=t},renderWithDetailUrl:function(t,e,n){var o="",i=this;return 0===t.length?o:(i.each(t,function(t){t.detail=n+"?id="+t.id,o+=i.render(e,t)}),o)},toggleLock:function(t,e){if(void 0===e)return t.data("lock");e?t.data("lock",1):t.data("lock",0)},resolvePath:function(t){return this.BASE_PATH+t},getCookie:function(t){return y.get(t)},setCookie:function(t,e){return y.set(t,e)},removeCookie:function(t){return y.remove(t)},lazyLoad:function(){g("._air_img").airLoadImage()},lock:function(t,e){if(!t.data("lock")){var n=Date.now(),o=function(){var e=Date.now();e-n>1e3?t.data("lock",0):setTimeout(function(){t.data("lock",0)},1e3-e-n)};return t.data("lock",1),new h.default(function(t,n){var i=e();c(i.then)||(i=h.default.resolve(i)),i.then(function(){o(),t()},function(){o(),n()})})}},isEmpty:function(t){return void 0===t||null===t||0===String(t).length},shuffle:function(t){for(var e,n,o=t.length,i=o;i--;)i!==(n=Math.floor(Math.random()*o))&&(e=t[i],t[i]=t[n],t[n]=e);return t},checkShopLogin:function(){var t=this;return new h.default(function(e,n){var o=t.getCookie(_.SHOP_ID);o?e(o):n()})},checkUserLogin:function(){var t=this;return new h.default(function(e,n){var o=t.getCookie(_.USER_ID);o?e(o):n()})}}},function(t,e,n){t.exports={default:n(49),__esModule:!0}},function(t,e,n){"use strict";function o(t){var e=h(t);return"number"==typeof e&&e>=0&&e<=p}function i(t){return"[object Object]"==l.call(t)}function r(t,e,n){var r,c,a=void 0==n?e:s(e,n);if(o(t))for(r=0,c=t.length;r<c&&!0!==a(t[r],r,t);r++);else if(i(t)){var l,p=(0,u.default)(t);for(r=0,c=p.length;r<c&&(l=p[r],!f.call(t,l)||!0!==a(t[l],l,t));r++);}}function s(t,e){return function(){return t.apply(e||this,arguments)}}var c=n(27),u=function(t){return t&&t.__esModule?t:{default:t}}(c),a=Object.prototype,f=a.hasOwnProperty,l=a.toString,p=Math.pow(2,53)-1,h=function(t){return function(e){return null==e?e:e[t]}}("length");t.exports={queryParse:function(t){var e="",n="";return r(t,function(t,o){void 0!==t&&null!==t&&""!==t&&(n=o+"="+encodeURIComponent(t),e+=""===e?n:"&"+n)}),e},formatQuery:function(t){0===t.indexOf("?")&&(t=t.substr(1));var e={};if(""===t.trim())return e;var n=/([^=]*)=(.*)$/i;return r(t.split("&"),function(t,o){var i=n.exec(t);i&&i.length>2&&(e[i[1]]=i[2]||"")}),e},resolve:function(t,e){var n=this.queryParse(e);return~t.indexOf("?")?t+"&"+n:t+"?"+n}}},function(t,e,n){"use strict";n(84);var o=n(14);t.exports.toast=function(t){var e=new o.Deferred;return t=o.extend({textAlign:"center",position:"mid-center",bgColor:"rgba(0,0,0,0.7)",textColor:"#fff",hideAfter:1500},t),o.toast(t),setTimeout(function(){e.resolve()},t.hideAfter||1500),e}},function(t,e,n){var o=n(9),i=n(1)("toStringTag"),r="Arguments"==o(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),i))?n:r?o(e):"Object"==(c=o(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(0).document;t.exports=o&&o.documentElement},function(t,e,n){"use strict";var o=n(34),i=n(6),r=n(70),s=n(4),c=n(11),u=n(7),a=n(60),f=n(20),l=n(66),p=n(1)("iterator"),h=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,g,m,y){a(n,e,v);var _,w,x,b=function(t){if(!h&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",S="values"==g,E=!1,O=t.prototype,k=O[p]||O["@@iterator"]||g&&O[g],C=k||b(g),T=g?S?b("entries"):C:void 0,P="Array"==e?O.entries||k:k;if(P&&(x=l(P.call(new t)))!==Object.prototype&&x.next&&(f(x,j,!0),o||c(x,p)||s(x,p,d)),S&&k&&"values"!==k.name&&(E=!0,C=function(){return k.call(this)}),o&&!y||!h&&!E&&O[p]||s(O,p,C),u[e]=C,u[j]=d,g)if(_={values:S?C:b("values"),keys:m?C:b("keys"),entries:T},y)for(w in _)w in O||r(O,w,_[w]);else i(i.P+i.F*(h||E),e,_);return _}},function(t,e){t.exports=!0},function(t,e,n){var o=n(67),i=n(31);t.exports=Object.keys||function(t){return o(t,i)}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var o=n(19);t.exports=function(t,e){var n=o.f(t);return(0,n.resolve)(e),n.promise}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var o=n(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var o=n(3),i=n(8),r=n(1)("species");t.exports=function(t,e){var n,s=o(t).constructor;return void 0===s||void 0==(n=o(s)[r])?e:i(n)}},function(t,e,n){var o,i,r,s=n(10),c=n(56),u=n(32),a=n(17),f=n(0),l=f.process,p=f.setImmediate,h=f.clearImmediate,d=f.MessageChannel,v=f.Dispatch,g=0,m={},y=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},_=function(t){y.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return m[++g]=function(){c("function"==typeof t?t:Function(t),e)},o(g),g},h=function(t){delete m[t]},"process"==n(9)(l)?o=function(t){l.nextTick(s(y,t,1))}:v&&v.now?o=function(t){v.now(s(y,t,1))}:d?(i=new d,r=i.port2,i.port1.onmessage=_,o=s(r.postMessage,r,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(o=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):o="onreadystatechange"in a("script")?function(t){u.appendChild(a("script")).onreadystatechange=function(){u.removeChild(this),y.call(t)}}:function(t){setTimeout(s(y,t,1),0)}),t.exports={set:p,clear:h}},function(t,e,n){var o=n(22),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},function(t,e,n){var o=n(16);t.exports=function(t){return Object(o(t))}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e,n){var o,i;!function(r){var s=!1;if(o=r,void 0!==(i="function"==typeof o?o.call(e,n,e,t):o)&&(t.exports=i),s=!0,t.exports=r(),s=!0,!s){var c=window.Cookies,u=window.Cookies=r();u.noConflict=function(){return window.Cookies=c,u}}}(function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}function e(n){function o(e,i,r){var s;if("undefined"!=typeof document){if(arguments.length>1){if(r=t({path:"/"},o.defaults,r),"number"==typeof r.expires){var c=new Date;c.setMilliseconds(c.getMilliseconds()+864e5*r.expires),r.expires=c}r.expires=r.expires?r.expires.toUTCString():"";try{s=JSON.stringify(i),/^[\{\[]/.test(s)&&(i=s)}catch(t){}i=n.write?n.write(i,e):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)),e=e.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),e=e.replace(/[\(\)]/g,escape);var u="";for(var a in r)r[a]&&(u+="; "+a,!0!==r[a]&&(u+="="+r[a]));return document.cookie=e+"="+i+u}e||(s={});for(var f=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,p=0;p<f.length;p++){var h=f[p].split("="),d=h.slice(1).join("=");'"'===d.charAt(0)&&(d=d.slice(1,-1));try{var v=h[0].replace(l,decodeURIComponent);if(d=n.read?n.read(d,v):n(d,v)||d.replace(l,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch(t){}if(e===v){s=d;break}e||(s[v]=d)}catch(t){}}return s}}return o.set=o,o.get=function(t){return o.call(o,t)},o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(e,n){o(e,"",t(n,{expires:-1}))},o.withConverter=e,o}return e(function(){})})},function(t,e){},function(t,e){!function(t,e,n){function o(e,n){this.elements=e,this.offset=0,this.windowHeight=0,this.options=t.extend({},r,n),this._defaults=r,this._name=i,this.init()}var i="airLoadImage",r={offset:"75%",delay:750,pluginId:"airLoadImage"};o.prototype.getOffset=function(){var t;return t="string"==typeof this.options.offset?parseFloat(this.options.offset)*this.windowHeight/100:this.options.offset,this.offset=-t,-t},o.prototype.updateWindowHeight=function(){return this.windowHeight=n.documentElement.clientHeight,this.windowHeight},o.prototype.throttle=function(t,e){function n(){if(r)return o=arguments,void(i=this);t.apply(this,arguments),r=!0,setTimeout(function(){r=!1,o&&(n.apply(i,o),o=i=null)},e)}var o,i,r=!1;return n},o.prototype.init=function(){function o(t){i.getOffset(),"resize"===t.type&&i.updateWindowHeight(),r.call(i)}var i=this,r=this.throttle(this.showVisible,this.options.delay);t(n).on("scroll."+this.options.pluginId,o),t(e).on("resize."+this.options.pluginId,o),this.getOffset(),this.updateWindowHeight(),this.showVisible()},o.prototype.checkVisible=function(t){var e=t.getBoundingClientRect(),n=e.top>0&&e.top+this.offset<=this.windowHeight,o=e.bottom>this.offset&&e.bottom<=this.windowHeight,i=e.top<0&&e.bottom>this.windowHeight;return n||o||i},o.prototype.showVisible=function(){for(var t=this.elements,e=0;e<t.length;e++){var n=t[e],o=n.getAttribute("data-air-img");o&&(this.checkVisible(n)&&("IMG"===n.tagName?n.src=o:n.style.backgroundImage="url("+o+")",n.setAttribute("data-air-img","")))}},o.prototype.reInit=function(){this.destroy(),this.init()},o.prototype.destroy=function(){t(n).off("scroll."+this.options.pluginId),t(e).off("resize."+this.options.pluginId)},t.fn[i]=function(e){if(!t.data(this,"plugin_"+i))return t.data(this,"plugin_"+i),new o(this,e).elements}}(jQuery,window,document)},function(t,e,n){"use strict";var o=n(24),i=n(45),r=n(25),s=window.wx;t.exports.getConfig=function(){return o({type:"get",url:"/open/wxpay/config"}).then(function(t){var e=t.result,n=e.appId;return s.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.noncestr,signature:e.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","chooseWXPay"]}),s.ready(function(){s.checkJsApi({jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","chooseWXPay"],success:function(){}}),s.onMenuShareTimeline({title:e.title,link:e.link,imgUrl:e.imgUrl,success:function(){},cancel:function(){}}),s.onMenuShareAppMessage({title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl,type:"link",dataUrl:"",success:function(){},cancel:function(){}})}),n})},t.exports.wxLogin=function(t){if(""!==t&&i.get(r.USE_OPEN_ID)){var e="",n=window.location.href;-1!==n.indexOf("?")&&(n=n.substring(0,n.indexOf("?"))),e="https://open.weixin.qq.com/connect/oauth2/authorize?appid={appId}&redirect_uri={targetUrl}&response_type=code&scope=snsapi_base&state=123#wechat_redirect",e=e.replace(/{appId}/,t),e=e.replace(/{targetUrl}/,encodeURIComponent(n)),window.location.href=e}},t.exports.getOpenId=function(t){if(i.get(r.USE_OPEN_ID))return o({type:"GET",url:"/open/wxpay/getOpenId",data:{code:t}})}},function(t,e,n){n(77),t.exports=n(2).Object.keys},function(t,e,n){n(78),n(80),n(83),n(79),n(81),n(82),t.exports=n(2).Promise},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e,n,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var o=n(23),i=n(42),r=n(73);t.exports=function(t){return function(e,n,s){var c,u=o(e),a=i(u.length),f=r(s,a);if(t&&n!=n){for(;a>f;)if((c=u[f++])!=c)return!0}else for(;a>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var o=n(10),i=n(59),r=n(58),s=n(3),c=n(42),u=n(75),a={},f={},e=t.exports=function(t,e,n,l,p){var h,d,v,g,m=p?function(){return t}:u(t),y=o(n,l,e?2:1),_=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(r(m)){for(h=c(t.length);h>_;_++)if((g=e?y(s(d=t[_])[0],d[1]):y(t[_]))===a||g===f)return g}else for(v=m.call(t);!(d=v.next()).done;)if((g=i(v,y,d.value,e))===a||g===f)return g};e.BREAK=a,e.RETURN=f},function(t,e,n){t.exports=!n(5)&&!n(18)(function(){return 7!=Object.defineProperty(n(17)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var o=n(9);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,n){var o=n(7),i=n(1)("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||r[i]===t)}},function(t,e,n){var o=n(3);t.exports=function(t,e,n,i){try{return i?e(o(n)[0],n[1]):e(n)}catch(e){var r=t.return;throw void 0!==r&&o(r.call(t)),e}}},function(t,e,n){"use strict";var o=n(64),i=n(38),r=n(20),s={};n(4)(s,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(s,{next:i(1,n)}),r(t,e+" Iterator")}},function(t,e,n){var o=n(1)("iterator"),i=!1;try{var r=[7][o]();r.return=function(){i=!0},Array.from(r,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var r=[7],s=r[o]();s.next=function(){return{done:n=!0}},r[o]=function(){return s},t(r)}catch(t){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var o=n(0),i=n(41).set,r=o.MutationObserver||o.WebKitMutationObserver,s=o.process,c=o.Promise,u="process"==n(9)(s);t.exports=function(){var t,e,n,a=function(){var o,i;for(u&&(o=s.domain)&&o.exit();t;){i=t.fn,t=t.next;try{i()}catch(o){throw t?n():e=void 0,o}}e=void 0,o&&o.enter()};if(u)n=function(){s.nextTick(a)};else if(r){var f=!0,l=document.createTextNode("");new r(a).observe(l,{characterData:!0}),n=function(){l.data=f=!f}}else if(c&&c.resolve){var p=c.resolve();n=function(){p.then(a)}}else n=function(){i.call(o,a)};return function(o){var i={fn:o,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},function(t,e,n){var o=n(3),i=n(65),r=n(31),s=n(21)("IE_PROTO"),c=function(){},u=function(){var t,e=n(17)("iframe"),o=r.length;for(e.style.display="none",n(32).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;o--;)delete u.prototype[r[o]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=o(t),n=new c,c.prototype=null,n[s]=t):n=u(),void 0===e?n:i(n,e)}},function(t,e,n){var o=n(13),i=n(3),r=n(35);t.exports=n(5)?Object.defineProperties:function(t,e){i(t);for(var n,s=r(e),c=s.length,u=0;c>u;)o.f(t,n=s[u++],e[n]);return t}},function(t,e,n){var o=n(11),i=n(43),r=n(21)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),o(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var o=n(11),i=n(23),r=n(53)(!1),s=n(21)("IE_PROTO");t.exports=function(t,e){var n,c=i(t),u=0,a=[];for(n in c)n!=s&&o(c,n)&&a.push(n);for(;e.length>u;)o(c,n=e[u++])&&(~r(a,n)||a.push(n));return a}},function(t,e,n){var o=n(6),i=n(2),r=n(18);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],s={};s[t]=e(n),o(o.S+o.F*r(function(){n(1)}),"Object",s)}},function(t,e,n){var o=n(4);t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:o(t,i,e[i]);return t}},function(t,e,n){t.exports=n(4)},function(t,e,n){"use strict";var o=n(0),i=n(2),r=n(13),s=n(5),c=n(1)("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:o[t];s&&e&&!e[c]&&r.f(e,c,{configurable:!0,get:function(){return this}})}},function(t,e,n){var o=n(22),i=n(16);t.exports=function(t){return function(e,n){var r,s,c=String(i(e)),u=o(n),a=c.length;return u<0||u>=a?t?"":void 0:(r=c.charCodeAt(u),r<55296||r>56319||u+1===a||(s=c.charCodeAt(u+1))<56320||s>57343?t?c.charAt(u):r:t?c.slice(u,u+2):s-56320+(r-55296<<10)+65536)}}},function(t,e,n){var o=n(22),i=Math.max,r=Math.min;t.exports=function(t,e){return t=o(t),t<0?i(t+e,0):r(t,e)}},function(t,e,n){var o=n(12);t.exports=function(t,e){if(!o(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!o(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var o=n(30),i=n(1)("iterator"),r=n(7);t.exports=n(2).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||r[o(t)]}},function(t,e,n){"use strict";var o=n(51),i=n(62),r=n(7),s=n(23);t.exports=n(33)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,n):"values"==e?i(0,t[n]):i(0,[n,t[n]])},"values"),r.Arguments=r.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var o=n(43),i=n(35);n(68)("keys",function(){return function(t){return i(o(t))}})},function(t,e){},function(t,e,n){"use strict";var o,i,r,s,c=n(34),u=n(0),a=n(10),f=n(30),l=n(6),p=n(12),h=n(8),d=n(52),v=n(54),g=n(40),m=n(41).set,y=n(63)(),_=n(19),w=n(36),x=n(37),b=u.TypeError,j=u.process,S=u.Promise,E="process"==f(j),O=function(){},k=i=_.f,C=!!function(){try{var t=S.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(O,O)};return(E||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof e}catch(t){}}(),T=c?function(t,e){return t===e||t===S&&e===s}:function(t,e){return t===e},P=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},A=function(t,e){if(!t._n){t._n=!0;var n=t._c;y(function(){for(var o=t._v,i=1==t._s,r=0;n.length>r;)!function(e){var n,r,s=i?e.ok:e.fail,c=e.resolve,u=e.reject,a=e.domain;try{s?(i||(2==t._h&&M(t),t._h=1),!0===s?n=o:(a&&a.enter(),n=s(o),a&&a.exit()),n===e.promise?u(b("Promise-chain cycle")):(r=P(n))?r.call(n,c,u):c(n)):u(o)}catch(t){u(t)}}(n[r++]);t._c=[],t._n=!1,e&&!t._h&&I(t)})}},I=function(t){m.call(u,function(){var e,n,o,i=t._v,r=H(t);if(r&&(e=w(function(){E?j.emit("unhandledRejection",i,t):(n=u.onunhandledrejection)?n({promise:t,reason:i}):(o=u.console)&&o.error&&o.error("Unhandled promise rejection",i)}),t._h=E||H(t)?2:1),t._a=void 0,r&&e.e)throw e.v})},H=function(t){if(1==t._h)return!1;for(var e,n=t._a||t._c,o=0;n.length>o;)if(e=n[o++],e.fail||!H(e.promise))return!1;return!0},M=function(t){m.call(u,function(){var e;E?j.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})})},L=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0))},q=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw b("Promise can't be resolved itself");(e=P(t))?y(function(){var o={_w:n,_d:!1};try{e.call(t,a(q,o,1),a(L,o,1))}catch(t){L.call(o,t)}}):(n._v=t,n._s=1,A(n,!1))}catch(t){L.call({_w:n,_d:!1},t)}}};C||(S=function(t){d(this,S,"Promise","_h"),h(t),o.call(this);try{t(a(q,this,1),a(L,this,1))}catch(t){L.call(this,t)}},o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=n(69)(S.prototype,{then:function(t,e){var n=k(g(this,S));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=E?j.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&A(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),r=function(){var t=new o;this.promise=t,this.resolve=a(q,t,1),this.reject=a(L,t,1)},_.f=k=function(t){return T(S,t)?new r(t):i(t)}),l(l.G+l.W+l.F*!C,{Promise:S}),n(20)(S,"Promise"),n(71)("Promise"),s=n(2).Promise,l(l.S+l.F*!C,"Promise",{reject:function(t){var e=k(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(c||!C),"Promise",{resolve:function(t){return t instanceof S&&T(t.constructor,this)?t:x(this,t)}}),l(l.S+l.F*!(C&&n(61)(function(t){S.all(t).catch(O)})),"Promise",{all:function(t){var e=this,n=k(e),o=n.resolve,i=n.reject,r=w(function(){var n=[],r=0,s=1;v(t,!1,function(t){var c=r++,u=!1;n.push(void 0),s++,e.resolve(t).then(function(t){u||(u=!0,n[c]=t,--s||o(n))},i)}),--s||o(n)});return r.e&&i(r.v),n.promise},race:function(t){var e=this,n=k(e),o=n.reject,i=w(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,o)})});return i.e&&o(i.v),n.promise}})},function(t,e,n){"use strict";var o=n(72)(!0);n(33)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var o=n(6),i=n(2),r=n(0),s=n(40),c=n(37);o(o.P+o.R,"Promise",{finally:function(t){var e=s(this,i.Promise||r.Promise),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then(function(){return n})}:t,n?function(n){return c(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var o=n(6),i=n(19),r=n(36);o(o.S,"Promise",{try:function(t){var e=i.f(this),n=r(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){n(76);for(var o=n(0),i=n(4),r=n(7),s=n(1)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<c.length;u++){var a=c[u],f=o[a],l=f&&f.prototype;l&&!l[s]&&i(l,s,a),r[a]=r.Array}},function(t,e){"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(t,e){"use strict";var n={_positionClasses:["bottom-left","bottom-right","top-right","top-left","bottom-center","top-center","mid-center"],_defaultIcons:["success","error","info","warning"],init:function(e){this.prepareOptions(e,t.toast.options),this.process()},prepareOptions:function(e,n){var o={};"string"==typeof e||e instanceof Array?o.text=e:o=e,this.options=t.extend({},n,o)},process:function(){this.setup(),this.addToDom(),this.position(),this.bindToast(),this.animate()},setup:function(){var e="";if(this._toastEl=this._toastEl||t("<div></div>",{class:"jq-toast-single"}),e+='<span class="jq-toast-loader"></span>',this.options.allowToastClose&&(e+='<span class="close-jq-toast-single">&times;</span>'),this.options.text instanceof Array){this.options.heading&&(e+='<h2 class="jq-toast-heading">'+this.options.heading+"</h2>"),e+='<ul class="jq-toast-ul">';for(var n=0;n<this.options.text.length;n++)e+='<li class="jq-toast-li" id="jq-toast-item-'+n+'">'+this.options.text[n]+"</li>";e+="</ul>"}else this.options.heading&&(e+='<h2 class="jq-toast-heading">'+this.options.heading+"</h2>"),e+=this.options.text;this._toastEl.html(e),!1!==this.options.bgColor&&this._toastEl.css("background-color",this.options.bgColor),!1!==this.options.textColor&&this._toastEl.css("color",this.options.textColor),this.options.textAlign&&this._toastEl.css("text-align",this.options.textAlign),!1!==this.options.icon&&(this._toastEl.addClass("jq-has-icon"),-1!==t.inArray(this.options.icon,this._defaultIcons)&&this._toastEl.addClass("jq-icon-"+this.options.icon))},position:function(){"string"==typeof this.options.position&&-1!==t.inArray(this.options.position,this._positionClasses)?"bottom-center"===this.options.position?this._container.css({left:t(e).outerWidth()/2-this._container.outerWidth()/2,bottom:20}):"top-center"===this.options.position?this._container.css({left:t(e).outerWidth()/2-this._container.outerWidth()/2,top:20}):"mid-center"===this.options.position?this._container.css({left:t(e).outerWidth()/2-this._container.outerWidth()/2,top:t(e).outerHeight()/2-this._container.outerHeight()/2}):this._container.addClass(this.options.position):"object"==typeof this.options.position?this._container.css({top:this.options.position.top?this.options.position.top:"auto",bottom:this.options.position.bottom?this.options.position.bottom:"auto",left:this.options.position.left?this.options.position.left:"auto",right:this.options.position.right?this.options.position.right:"auto"}):this._container.addClass("bottom-left")},bindToast:function(){var t=this;this._toastEl.on("afterShown",function(){t.processLoader()}),this._toastEl.find(".close-jq-toast-single").on("click",function(e){e.preventDefault(),"fade"===t.options.showHideTransition?(t._toastEl.trigger("beforeHide"),t._toastEl.fadeOut(function(){t._toastEl.trigger("afterHidden")})):"slide"===t.options.showHideTransition?(t._toastEl.trigger("beforeHide"),t._toastEl.slideUp(function(){t._toastEl.trigger("afterHidden")})):(t._toastEl.trigger("beforeHide"),t._toastEl.hide(function(){t._toastEl.trigger("afterHidden")}))}),"function"==typeof this.options.beforeShow&&this._toastEl.on("beforeShow",function(){t.options.beforeShow()}),"function"==typeof this.options.afterShown&&this._toastEl.on("afterShown",function(){t.options.afterShown()}),"function"==typeof this.options.beforeHide&&this._toastEl.on("beforeHide",function(){t.options.beforeHide()}),"function"==typeof this.options.afterHidden&&this._toastEl.on("afterHidden",function(){t.options.afterHidden()})},addToDom:function(){var e=t(".jq-toast-wrap");if(0===e.length?(e=t("<div></div>",{class:"jq-toast-wrap"}),t("body").append(e)):(!this.options.stack||isNaN(parseInt(this.options.stack,10)))&&e.empty(),e.find(".jq-toast-single:hidden").remove(),e.append(this._toastEl),this.options.stack&&!isNaN(parseInt(this.options.stack),10)){var n=e.find(".jq-toast-single").length,o=n-this.options.stack;o>0&&t(".jq-toast-wrap").find(".jq-toast-single").slice(0,o).remove()}this._container=e},canAutoHide:function(){return!1!==this.options.hideAfter&&!isNaN(parseInt(this.options.hideAfter,10))},processLoader:function(){if(!this.canAutoHide()||!1===this.options.loader)return!1;var t=this._toastEl.find(".jq-toast-loader"),e=(this.options.hideAfter-400)/1e3+"s",n=this.options.loaderBg,o=t.attr("style")||"";o=o.substring(0,o.indexOf("-webkit-transition")),o+="-webkit-transition: width "+e+" ease-in;                       -o-transition: width "+e+" ease-in;                       transition: width "+e+" ease-in;                       background-color: "+n+";",t.attr("style",o).addClass("jq-toast-loaded")},animate:function(){var t=this;if(this._toastEl.hide(),this._toastEl.trigger("beforeShow"),"fade"===this.options.showHideTransition.toLowerCase()?this._toastEl.fadeIn(function(){t._toastEl.trigger("afterShown")}):"slide"===this.options.showHideTransition.toLowerCase()?this._toastEl.slideDown(function(){t._toastEl.trigger("afterShown")}):this._toastEl.show(function(){t._toastEl.trigger("afterShown")}),this.canAutoHide()){var t=this;e.setTimeout(function(){"fade"===t.options.showHideTransition.toLowerCase()?(t._toastEl.trigger("beforeHide"),t._toastEl.fadeOut(function(){t._toastEl.trigger("afterHidden")})):"slide"===t.options.showHideTransition.toLowerCase()?(t._toastEl.trigger("beforeHide"),t._toastEl.slideUp(function(){t._toastEl.trigger("afterHidden")})):(t._toastEl.trigger("beforeHide"),t._toastEl.hide(function(){t._toastEl.trigger("afterHidden")}))},this.options.hideAfter)}},reset:function(e){"all"===e?t(".jq-toast-wrap").remove():this._toastEl.remove()},update:function(t){this.prepareOptions(t,this.options),this.setup(),this.bindToast()}};t.toast=function(t){var e=Object.create(n);return e.init(t,this),{reset:function(t){e.reset(t)},update:function(t){e.update(t)}}},t.toast.options={text:"",heading:"",showHideTransition:"fade",allowToastClose:!0,hideAfter:3e3,loader:!0,loaderBg:"#9EC600",stack:5,position:"bottom-left",bgColor:!1,textColor:!1,textAlign:"left",icon:!1,beforeShow:function(){},afterShown:function(){},beforeHide:function(){},afterHidden:function(){}}}(jQuery,window,document)},,,,,function(t,e,n){"use strict";var o=n(15),i=function(t){return t&&t.__esModule?t:{default:t}}(o),r=n(24);t.exports.getPublicKey=function(){return r({url:"/open/getPublicKey"})},t.exports.geetest=function(){return new i.default(function(t,e){r({type:"post",url:"/open/geetest?t="+Date.now()}).then(function(e){var n=e.user_id,o=e.success,i=e.gt,r=e.challenge;t({user_id:n,challenge:r,offline:o,product:"popup",gt:i})})})},t.exports.getCaptcha=function(t){return r({type:"POST",url:"/open/captcha",data:t})}},,function(t,e,n){"use strict";var o=n(24);t.exports.login=function(t){return o({type:"POST",url:"/ui/login",data:t})},t.exports.logout=function(t){return o({type:"POST",url:"/ui/logout",data:t})}},,,,function(t,e,n){"use strict";function o(t){var e=this;if(e.el=t&&t.el||"",""===e.el)throw new Error("el不能为空");e.$el=i(e.el),e.disabledClass=t.disabledClass||"disabled",e.text=t.text||"发送验证码",e.disabledCb=t.disabledCb||function(t){return"发送（"+t+"）秒"},e.seconds=t.seconds||60,e._counted=0,e.timeout=null,e.event=i({}),e.init()}var i=n(14);o.prototype={constructor:o,init:function(){var t=this,e=t.$el,n="click.timecount";e.removeClass(t.disabledClass),e.text(t.text),e.off(n),e.on(n,function(n){n.preventDefault(),e.hasClass(t.disabledClass)||t.start()})},locked:function(t){this.lock=t},start:function(){var t=this,e=t.$el,n=t.disabledClass;t.trigger("beforestart.timecount"),t.lock||e.hasClass(n)||(t._counted=0,t.trigger("start.timecount"),t.count())},restart:function(){this.init()},count:function(){var t=this,e=t._counted,n=t.$el;n.addClass(t.disabledClass),n.text(t.disabledCb(t.seconds-e)),t.timeout&&clearTimeout(t.timeout),t.timeout=setTimeout(i.proxy(function(){e===t.seconds?(t.restart(),t.trigger("over.timecount")):(t._counted++,t.count())},t),1e3)},on:function(){this.event.on.apply(this.event,[].slice.call(arguments))},off:function(){this.event.off.apply(this.event,[].slice.call(arguments))},trigger:function(){this.event.trigger.apply(this.event,[].slice.call(arguments))}},t.exports=o},,,,,,,,,function(t,e,n){"use strict";var o=n(15),i=function(t){return t&&t.__esModule?t:{default:t}}(o);n(46);var r=n(26),s=n(91),c=n(95),u=n(89),a=n(25);r.ready(function(){function t(t){return new i.default(function(i,r){var s=!1;if(l=e.val().trim(),p=n.val().trim(),""===l?o.text("手机号码不能为空"):/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(l)?(s=!0,o.text("")):o.text("手机号码不合法，请检查"),t)return void(s?i():r());""===p?(s=!1,f.text("请输入验证码")):(s=!0,f.text("")),s?i():r()})}if(r.getCookie(a.USER_ID))return void(window.location.href=r.paths.user);var e=$(".js-phone"),n=$(".js-code"),o=e.next(".error-block"),f=n.next(".error-block"),l="",p="",h=null,d=null,v=null,g=null,m=new c({el:".js-verification"});m.on("beforestart.timecount",function(){g=v&&v.getValidate(),g?m.locked(0):(r.toast({text:"请先进行验证"}),g=null,m.locked(1))}),m.on("start.timecount",function(){t(!0).then(function(){u.getCaptcha({mobile:e.val().trim(),gt_server_status:d,user_id:h,geetest_challenge:g.geetest_challenge,geetest_validate:g.geetest_validate,geetest_seccode:g.geetest_seccode}).then(function(t){console.dir(t)})})}),$(".login").on("click",function(){r.lock($(this),function(){return t().then(function(){return s.login({mobile:l,captcha:p}).then(function(){r.toast({text:"登录成功"}).then(function(){window.location.href=r.paths.user})},function(){v.reset()})},function(){})})}),r.loading(function(){return u.geetest().then(function(t){h=t.user_id,d=t.offline,t.offline=!t.offline,delete t.user_id,window.initGeetest(t,function(t){v=t,v.appendTo("#popup-captcha")})})})})}])});