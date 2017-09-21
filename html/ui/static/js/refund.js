/*!
 * Author: lilJay-lin <lin_xjie@foxmail.com> 
 *  Name: daijingquan 
 *  Version: 1.0.0
 */
!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("jQuery"));else if("function"==typeof define&&define.amd)define(["jQuery"],n);else{var e=n("object"==typeof exports?require("jQuery"):t.jQuery);for(var o in e)("object"==typeof exports?exports:t)[o]=e[o]}}(this,function(t){return function(t){function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=102)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var o=e(39)("wks"),i=e(44),r=e(0).Symbol,s="function"==typeof r;(t.exports=function(t){return o[t]||(o[t]=s&&r[t]||(s?r:i)("Symbol."+t))}).store=o},function(t,n){var e=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){var o=e(12);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var o=e(13),i=e(38);t.exports=e(5)?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var o=e(0),i=e(2),r=e(10),s=e(4),u=function(t,n,e){var a,c,f,l=t&u.F,p=t&u.G,h=t&u.S,d=t&u.P,v=t&u.B,g=t&u.W,y=p?i:i[n]||(i[n]={}),m=y.prototype,_=p?o:h?o[n]:(o[n]||{}).prototype;p&&(e=n);for(a in e)(c=!l&&_&&void 0!==_[a])&&a in y||(f=c?_[a]:e[a],y[a]=p&&"function"!=typeof _[a]?e[a]:v&&c?r(f,o):g&&_[a]==f?function(t){var n=function(n,e,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,o)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):d&&"function"==typeof f?r(Function.call,f):f,d&&((y.virtual||(y.virtual={}))[a]=f,t&u.R&&m&&!m[a]&&s(m,a,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n){t.exports={}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var o=e(8);t.exports=function(t,n,e){if(o(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,o){return t.call(n,e,o)};case 3:return function(e,o,i){return t.call(n,e,o,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var o=e(3),i=e(55),r=e(74),s=Object.defineProperty;n.f=e(5)?Object.defineProperty:function(t,n,e){if(o(t),n=r(n,!0),o(e),i)try{return s(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(n,e){n.exports=t},function(t,n,e){t.exports={default:e(50),__esModule:!0}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var o=e(12),i=e(0).document,r=o(i)&&o(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){"use strict";function o(t){var n,e;this.promise=new t(function(t,o){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=o}),this.resolve=i(n),this.reject=i(e)}var i=e(8);t.exports.f=function(t){return new o(t)}},function(t,n,e){var o=e(13).f,i=e(11),r=e(1)("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,r)&&o(t,r,{configurable:!0,value:n})}},function(t,n,e){var o=e(39)("keys"),i=e(44);t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,n){var e=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:e)(t)}},function(t,n,e){var o=e(57),i=e(16);t.exports=function(t){return o(i(t))}},function(t,n,e){"use strict";var o=e(15),i=function(t){return t&&t.__esModule?t:{default:t}}(o),r=e(14),s=e(28),u=e(29);t.exports=function(t){var n=t.type,e=void 0===n?"GET":n,o=t.url,a=void 0===o?"":o,c=t.data,f=void 0===c?null:c,l={type:e.toUpperCase(),dataType:"json",timeout:5e3,crossDomain:!0,cache:!1},p=null,h=new i.default(function(t,n){["get","delete"].indexOf(e.toLowerCase())>-1?a=s.resolve(a,f):l.data=f,l.url="http://djq.tunnel.qydev.com"+a,p=r.ajax(l).done(function(e){3===e.status?u.toast({text:e.message}).done(function(){n()}):2===e.status?(u.toast({text:e.message}),n(e)):0===e.status?u.toast({text:e.message}).done(function(){n()}):t(e)}).fail(function(t,e){u.toast({text:"请求失败,请刷新重试："+e}).done(function(){n()})})});return h.abort=function(t){p.abort(t)},h}},function(t,n,e){"use strict";t.exports.USER_ID="uiUserId",t.exports.SHOP_ID="siShopAccountId",t.exports.USE_OPEN_ID="uiUserOpenId"},function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){var n=O(t);return"number"==typeof n&&n>=0&&n<=S}function r(t){return function(n){return null==n?n:n[t]}}function s(t){return"[object Object]"==E.call(t)}function u(t){return"[object Function]"==E.call(t)}function a(t,n){return t.replace(k,function(t,e,o,i){if(e||i)return t.replace("\\","");var r,s,u,a=o.replace(/\s/g,"").split("."),c=n;for(r=0,s=a.length;r<s;++r)if(u=a[r],void 0===(c=c[u])||null===c)return"";return c})}function c(t,n,e){if(null==n||!i(n))return"";var o="",r={};return f(n,function(i,u){s(n[u])?(r=n[u],r._order=u+1):(r.value=n[u],r._order=u+1),e&&(r=e(r)),o+=a(t,r)}),o}function f(t,n,e){var o,r,u=void 0==e?n:l(n,e);if(i(t))for(o=0,r=t.length;o<r&&!0!==u(t[o],o,t);o++);else if(s(t)){var a,c=(0,v.default)(t);for(o=0,r=c.length;o<r&&(a=c[o],!j.call(t,a)||!0!==u(t[a],a,t));o++);}}function l(t,n){return function(){return t.apply(n||this,arguments)}}var p=e(15),h=o(p),d=e(27),v=o(d),g=e(14),y=e(29);e(47);var m=e(45),_=e(25),w=e(48),x=e(28),b=Object.prototype,j=b.hasOwnProperty,E=b.toString,S=Math.pow(2,53)-1,O=r("length"),k=/(\\)?\{([^\{\}\\]+)(\\)?\}/g;t.exports={property:r,each:f,proxy:l,queryParse:x.queryParse,formatQuery:x.formatQuery,resolve:x.resolve,render:a,renderArray:c,goBack:function(){history.go(-1)},getOpenId:function(){},ready:function(t){var n=this,e=n.$;n.setBasePath("./");var o=function(t){return n.resolvePath(t)};n.paths={shop:o("shop.html"),user:o("user.html"),admin:o("admin.html"),index:o("index.html"),alogin:o("alogin.html"),ulogin:o("ulogin.html"),cart:o("cart.html"),record:o("record.html"),award:o("award.html"),voucher:o("voucher.html")},w.getConfig().then(function(t){w.wxLogin(t)});var i=n.formatQuery(window.location.search);i.code&&w.getOpenId(i.code),e(function(){e(document).delegate("header .left","click",function(){window.history.back()}),e(document).delegate("header .right","click",function(){window.location.href=n.paths.index}),e(document).delegate(".js-user","click",function(){window.location.href=n.paths.user}),e(document).delegate(".js-cart","click",function(){window.location.href=n.paths.cart}),t()})},$:g,toast:y.toast,all:function(t){var n=(0,v.default)(t),e=n.length,o={},i=!1;return new h.default(function(n,r){f(t,function(t,s){if(i)return!0;t.then||(t=h.default.resolve(t)),t.then(function(t){e--,o[s]=t,0===e&&n(o)},function(){i=!0,r()})})})},loading:function(t){u(t)&&(t=t());var n=g('<div class="page-loading"><img src="http://djq.tunnel.qydev.com/static/img/loading.gif" alt=""></div>'),e=setTimeout(function(){g(document.body).append(n)},50),o=function(){clearTimeout(e),n.remove()};return t.then||(t=h.default.resolve(t)),t.then(o,o)},BASE_PATH:"./",setBasePath:function(t){this.BASE_PATH=t},renderWithDetailUrl:function(t,n,e){var o="",i=this;return 0===t.length?o:(i.each(t,function(t){t.detail=e+"?id="+t.id,o+=i.render(n,t)}),o)},toggleLock:function(t,n){if(void 0===n)return t.data("lock");n?t.data("lock",1):t.data("lock",0)},resolvePath:function(t){return this.BASE_PATH+t},getCookie:function(t){return m.get(t)},setCookie:function(t,n){return m.set(t,n)},removeCookie:function(t){return m.remove(t)},lazyLoad:function(){g("._air_img").airLoadImage()},lock:function(t,n){if(!t.data("lock")){var e=Date.now(),o=function(){var n=Date.now();n-e>1e3?t.data("lock",0):setTimeout(function(){t.data("lock",0)},1e3-n-e)};return t.data("lock",1),new h.default(function(t,e){var i=n();u(i.then)||(i=h.default.resolve(i)),i.then(function(){o(),t()},function(){o(),e()})})}},isEmpty:function(t){return void 0===t||null===t||0===String(t).length},shuffle:function(t){for(var n,e,o=t.length,i=o;i--;)i!==(e=Math.floor(Math.random()*o))&&(n=t[i],t[i]=t[e],t[e]=n);return t},checkShopLogin:function(){var t=this;return new h.default(function(n,e){var o=t.getCookie(_.SHOP_ID);o?n(o):e()})},checkUserLogin:function(){var t=this;return new h.default(function(n,e){var o=t.getCookie(_.USER_ID);o?n(o):e()})}}},function(t,n,e){t.exports={default:e(49),__esModule:!0}},function(t,n,e){"use strict";function o(t){var n=h(t);return"number"==typeof n&&n>=0&&n<=p}function i(t){return"[object Object]"==l.call(t)}function r(t,n,e){var r,u,c=void 0==e?n:s(n,e);if(o(t))for(r=0,u=t.length;r<u&&!0!==c(t[r],r,t);r++);else if(i(t)){var l,p=(0,a.default)(t);for(r=0,u=p.length;r<u&&(l=p[r],!f.call(t,l)||!0!==c(t[l],l,t));r++);}}function s(t,n){return function(){return t.apply(n||this,arguments)}}var u=e(27),a=function(t){return t&&t.__esModule?t:{default:t}}(u),c=Object.prototype,f=c.hasOwnProperty,l=c.toString,p=Math.pow(2,53)-1,h=function(t){return function(n){return null==n?n:n[t]}}("length");t.exports={queryParse:function(t){var n="",e="";return r(t,function(t,o){void 0!==t&&null!==t&&""!==t&&(e=o+"="+encodeURIComponent(t),n+=""===n?e:"&"+e)}),n},formatQuery:function(t){0===t.indexOf("?")&&(t=t.substr(1));var n={};if(""===t.trim())return n;var e=/([^=]*)=(.*)$/i;return r(t.split("&"),function(t,o){var i=e.exec(t);i&&i.length>2&&(n[i[1]]=i[2]||"")}),n},resolve:function(t,n){var e=this.queryParse(n);return~t.indexOf("?")?t+"&"+e:t+"?"+e}}},function(t,n,e){"use strict";e(84);var o=e(14);t.exports.toast=function(t){var n=new o.Deferred;return t=o.extend({textAlign:"center",position:"mid-center",bgColor:"rgba(0,0,0,0.7)",textColor:"#fff",hideAfter:1500},t),o.toast(t),setTimeout(function(){n.resolve()},t.hideAfter||1500),n}},function(t,n,e){var o=e(9),i=e(1)("toStringTag"),r="Arguments"==o(function(){return arguments}()),s=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=s(n=Object(t),i))?e:r?o(n):"Object"==(u=o(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var o=e(0).document;t.exports=o&&o.documentElement},function(t,n,e){"use strict";var o=e(34),i=e(6),r=e(70),s=e(4),u=e(11),a=e(7),c=e(60),f=e(20),l=e(66),p=e(1)("iterator"),h=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,n,e,v,g,y,m){c(e,n,v);var _,w,x,b=function(t){if(!h&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},j=n+" Iterator",E="values"==g,S=!1,O=t.prototype,k=O[p]||O["@@iterator"]||g&&O[g],C=k||b(g),P=g?E?b("entries"):C:void 0,T="Array"==n?O.entries||k:k;if(T&&(x=l(T.call(new t)))!==Object.prototype&&x.next&&(f(x,j,!0),o||u(x,p)||s(x,p,d)),E&&k&&"values"!==k.name&&(S=!0,C=function(){return k.call(this)}),o&&!m||!h&&!S&&O[p]||s(O,p,C),a[n]=C,a[j]=d,g)if(_={values:E?C:b("values"),keys:y?C:b("keys"),entries:P},m)for(w in _)w in O||r(O,w,_[w]);else i(i.P+i.F*(h||S),n,_);return _}},function(t,n){t.exports=!0},function(t,n,e){var o=e(67),i=e(31);t.exports=Object.keys||function(t){return o(t,i)}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var o=e(19);t.exports=function(t,n){var e=o.f(t);return(0,e.resolve)(n),e.promise}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var o=e(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,e){var o=e(3),i=e(8),r=e(1)("species");t.exports=function(t,n){var e,s=o(t).constructor;return void 0===s||void 0==(e=o(s)[r])?n:i(e)}},function(t,n,e){var o,i,r,s=e(10),u=e(56),a=e(32),c=e(17),f=e(0),l=f.process,p=f.setImmediate,h=f.clearImmediate,d=f.MessageChannel,v=f.Dispatch,g=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},_=function(t){m.call(t.data)};p&&h||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return y[++g]=function(){u("function"==typeof t?t:Function(t),n)},o(g),g},h=function(t){delete y[t]},"process"==e(9)(l)?o=function(t){l.nextTick(s(m,t,1))}:v&&v.now?o=function(t){v.now(s(m,t,1))}:d?(i=new d,r=i.port2,i.port1.onmessage=_,o=s(r.postMessage,r,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(o=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):o="onreadystatechange"in c("script")?function(t){a.appendChild(c("script")).onreadystatechange=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(s(m,t,1),0)}),t.exports={set:p,clear:h}},function(t,n,e){var o=e(22),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},function(t,n,e){var o=e(16);t.exports=function(t){return Object(o(t))}},function(t,n){var e=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+o).toString(36))}},function(t,n,e){var o,i;!function(r){var s=!1;if(o=r,void 0!==(i="function"==typeof o?o.call(n,e,n,t):o)&&(t.exports=i),s=!0,t.exports=r(),s=!0,!s){var u=window.Cookies,a=window.Cookies=r();a.noConflict=function(){return window.Cookies=u,a}}}(function(){function t(){for(var t=0,n={};t<arguments.length;t++){var e=arguments[t];for(var o in e)n[o]=e[o]}return n}function n(e){function o(n,i,r){var s;if("undefined"!=typeof document){if(arguments.length>1){if(r=t({path:"/"},o.defaults,r),"number"==typeof r.expires){var u=new Date;u.setMilliseconds(u.getMilliseconds()+864e5*r.expires),r.expires=u}r.expires=r.expires?r.expires.toUTCString():"";try{s=JSON.stringify(i),/^[\{\[]/.test(s)&&(i=s)}catch(t){}i=e.write?e.write(i,n):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape);var a="";for(var c in r)r[c]&&(a+="; "+c,!0!==r[c]&&(a+="="+r[c]));return document.cookie=n+"="+i+a}n||(s={});for(var f=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,p=0;p<f.length;p++){var h=f[p].split("="),d=h.slice(1).join("=");'"'===d.charAt(0)&&(d=d.slice(1,-1));try{var v=h[0].replace(l,decodeURIComponent);if(d=e.read?e.read(d,v):e(d,v)||d.replace(l,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch(t){}if(n===v){s=d;break}n||(s[v]=d)}catch(t){}}return s}}return o.set=o,o.get=function(t){return o.call(o,t)},o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(n,e){o(n,"",t(e,{expires:-1}))},o.withConverter=n,o}return n(function(){})})},function(t,n){},function(t,n){!function(t,n,e){function o(n,e){this.elements=n,this.offset=0,this.windowHeight=0,this.options=t.extend({},r,e),this._defaults=r,this._name=i,this.init()}var i="airLoadImage",r={offset:"75%",delay:750,pluginId:"airLoadImage"};o.prototype.getOffset=function(){var t;return t="string"==typeof this.options.offset?parseFloat(this.options.offset)*this.windowHeight/100:this.options.offset,this.offset=-t,-t},o.prototype.updateWindowHeight=function(){return this.windowHeight=e.documentElement.clientHeight,this.windowHeight},o.prototype.throttle=function(t,n){function e(){if(r)return o=arguments,void(i=this);t.apply(this,arguments),r=!0,setTimeout(function(){r=!1,o&&(e.apply(i,o),o=i=null)},n)}var o,i,r=!1;return e},o.prototype.init=function(){function o(t){i.getOffset(),"resize"===t.type&&i.updateWindowHeight(),r.call(i)}var i=this,r=this.throttle(this.showVisible,this.options.delay);t(e).on("scroll."+this.options.pluginId,o),t(n).on("resize."+this.options.pluginId,o),this.getOffset(),this.updateWindowHeight(),this.showVisible()},o.prototype.checkVisible=function(t){var n=t.getBoundingClientRect(),e=n.top>0&&n.top+this.offset<=this.windowHeight,o=n.bottom>this.offset&&n.bottom<=this.windowHeight,i=n.top<0&&n.bottom>this.windowHeight;return e||o||i},o.prototype.showVisible=function(){for(var t=this.elements,n=0;n<t.length;n++){var e=t[n],o=e.getAttribute("data-air-img");o&&(this.checkVisible(e)&&("IMG"===e.tagName?e.src=o:e.style.backgroundImage="url("+o+")",e.setAttribute("data-air-img","")))}},o.prototype.reInit=function(){this.destroy(),this.init()},o.prototype.destroy=function(){t(e).off("scroll."+this.options.pluginId),t(n).off("resize."+this.options.pluginId)},t.fn[i]=function(n){if(!t.data(this,"plugin_"+i))return t.data(this,"plugin_"+i),new o(this,n).elements}}(jQuery,window,document)},function(t,n,e){"use strict";var o=e(24),i=e(45),r=e(25),s=window.wx;t.exports.getConfig=function(){return o({type:"get",url:"/open/wxpay/config"}).then(function(t){var n=t.result,e=n.appId;return s.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.noncestr,signature:n.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","chooseWXPay"]}),s.ready(function(){s.checkJsApi({jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","chooseWXPay"],success:function(){}}),s.onMenuShareTimeline({title:n.title,link:n.link,imgUrl:n.imgUrl,success:function(){},cancel:function(){}}),s.onMenuShareAppMessage({title:n.title,desc:n.desc,link:n.link,imgUrl:n.imgUrl,type:"link",dataUrl:"",success:function(){},cancel:function(){}})}),e})},t.exports.wxLogin=function(t){if(""!==t&&i.get(r.USE_OPEN_ID)){var n="",e=window.location.href;-1!==e.indexOf("?")&&(e=e.substring(0,e.indexOf("?"))),n="https://open.weixin.qq.com/connect/oauth2/authorize?appid={appId}&redirect_uri={targetUrl}&response_type=code&scope=snsapi_base&state=123#wechat_redirect",n=n.replace(/{appId}/,t),n=n.replace(/{targetUrl}/,encodeURIComponent(e)),window.location.href=n}},t.exports.getOpenId=function(t){if(i.get(r.USE_OPEN_ID))return o({type:"GET",url:"/open/wxpay/getOpenId",data:{code:t}})}},function(t,n,e){e(77),t.exports=e(2).Object.keys},function(t,n,e){e(78),e(80),e(83),e(79),e(81),e(82),t.exports=e(2).Promise},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n,e,o){if(!(t instanceof n)||void 0!==o&&o in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var o=e(23),i=e(42),r=e(73);t.exports=function(t){return function(n,e,s){var u,a=o(n),c=i(a.length),f=r(s,c);if(t&&e!=e){for(;c>f;)if((u=a[f++])!=u)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var o=e(10),i=e(59),r=e(58),s=e(3),u=e(42),a=e(75),c={},f={},n=t.exports=function(t,n,e,l,p){var h,d,v,g,y=p?function(){return t}:a(t),m=o(e,l,n?2:1),_=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(r(y)){for(h=u(t.length);h>_;_++)if((g=n?m(s(d=t[_])[0],d[1]):m(t[_]))===c||g===f)return g}else for(v=y.call(t);!(d=v.next()).done;)if((g=i(v,m,d.value,n))===c||g===f)return g};n.BREAK=c,n.RETURN=f},function(t,n,e){t.exports=!e(5)&&!e(18)(function(){return 7!=Object.defineProperty(e(17)("div"),"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t,n,e){var o=void 0===e;switch(n.length){case 0:return o?t():t.call(e);case 1:return o?t(n[0]):t.call(e,n[0]);case 2:return o?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return o?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return o?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var o=e(9);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,n,e){var o=e(7),i=e(1)("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||r[i]===t)}},function(t,n,e){var o=e(3);t.exports=function(t,n,e,i){try{return i?n(o(e)[0],e[1]):n(e)}catch(n){var r=t.return;throw void 0!==r&&o(r.call(t)),n}}},function(t,n,e){"use strict";var o=e(64),i=e(38),r=e(20),s={};e(4)(s,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=o(s,{next:i(1,e)}),r(t,n+" Iterator")}},function(t,n,e){var o=e(1)("iterator"),i=!1;try{var r=[7][o]();r.return=function(){i=!0},Array.from(r,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var e=!1;try{var r=[7],s=r[o]();s.next=function(){return{done:e=!0}},r[o]=function(){return s},t(r)}catch(t){}return e}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var o=e(0),i=e(41).set,r=o.MutationObserver||o.WebKitMutationObserver,s=o.process,u=o.Promise,a="process"==e(9)(s);t.exports=function(){var t,n,e,c=function(){var o,i;for(a&&(o=s.domain)&&o.exit();t;){i=t.fn,t=t.next;try{i()}catch(o){throw t?e():n=void 0,o}}n=void 0,o&&o.enter()};if(a)e=function(){s.nextTick(c)};else if(r){var f=!0,l=document.createTextNode("");new r(c).observe(l,{characterData:!0}),e=function(){l.data=f=!f}}else if(u&&u.resolve){var p=u.resolve();e=function(){p.then(c)}}else e=function(){i.call(o,c)};return function(o){var i={fn:o,next:void 0};n&&(n.next=i),t||(t=i,e()),n=i}}},function(t,n,e){var o=e(3),i=e(65),r=e(31),s=e(21)("IE_PROTO"),u=function(){},a=function(){var t,n=e(17)("iframe"),o=r.length;for(n.style.display="none",e(32).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;o--;)delete a.prototype[r[o]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=o(t),e=new u,u.prototype=null,e[s]=t):e=a(),void 0===n?e:i(e,n)}},function(t,n,e){var o=e(13),i=e(3),r=e(35);t.exports=e(5)?Object.defineProperties:function(t,n){i(t);for(var e,s=r(n),u=s.length,a=0;u>a;)o.f(t,e=s[a++],n[e]);return t}},function(t,n,e){var o=e(11),i=e(43),r=e(21)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),o(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,n,e){var o=e(11),i=e(23),r=e(53)(!1),s=e(21)("IE_PROTO");t.exports=function(t,n){var e,u=i(t),a=0,c=[];for(e in u)e!=s&&o(u,e)&&c.push(e);for(;n.length>a;)o(u,e=n[a++])&&(~r(c,e)||c.push(e));return c}},function(t,n,e){var o=e(6),i=e(2),r=e(18);t.exports=function(t,n){var e=(i.Object||{})[t]||Object[t],s={};s[t]=n(e),o(o.S+o.F*r(function(){e(1)}),"Object",s)}},function(t,n,e){var o=e(4);t.exports=function(t,n,e){for(var i in n)e&&t[i]?t[i]=n[i]:o(t,i,n[i]);return t}},function(t,n,e){t.exports=e(4)},function(t,n,e){"use strict";var o=e(0),i=e(2),r=e(13),s=e(5),u=e(1)("species");t.exports=function(t){var n="function"==typeof i[t]?i[t]:o[t];s&&n&&!n[u]&&r.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){var o=e(22),i=e(16);t.exports=function(t){return function(n,e){var r,s,u=String(i(n)),a=o(e),c=u.length;return a<0||a>=c?t?"":void 0:(r=u.charCodeAt(a),r<55296||r>56319||a+1===c||(s=u.charCodeAt(a+1))<56320||s>57343?t?u.charAt(a):r:t?u.slice(a,a+2):s-56320+(r-55296<<10)+65536)}}},function(t,n,e){var o=e(22),i=Math.max,r=Math.min;t.exports=function(t,n){return t=o(t),t<0?i(t+n,0):r(t,n)}},function(t,n,e){var o=e(12);t.exports=function(t,n){if(!o(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!o(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!o(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!o(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var o=e(30),i=e(1)("iterator"),r=e(7);t.exports=e(2).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||r[o(t)]}},function(t,n,e){"use strict";var o=e(51),i=e(62),r=e(7),s=e(23);t.exports=e(33)(Array,"Array",function(t,n){this._t=s(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,i(1)):"keys"==n?i(0,e):"values"==n?i(0,t[e]):i(0,[e,t[e]])},"values"),r.Arguments=r.Array,o("keys"),o("values"),o("entries")},function(t,n,e){var o=e(43),i=e(35);e(68)("keys",function(){return function(t){return i(o(t))}})},function(t,n){},function(t,n,e){"use strict";var o,i,r,s,u=e(34),a=e(0),c=e(10),f=e(30),l=e(6),p=e(12),h=e(8),d=e(52),v=e(54),g=e(40),y=e(41).set,m=e(63)(),_=e(19),w=e(36),x=e(37),b=a.TypeError,j=a.process,E=a.Promise,S="process"==f(j),O=function(){},k=i=_.f,C=!!function(){try{var t=E.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(O,O)};return(S||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof n}catch(t){}}(),P=u?function(t,n){return t===n||t===E&&n===s}:function(t,n){return t===n},T=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},A=function(t,n){if(!t._n){t._n=!0;var e=t._c;m(function(){for(var o=t._v,i=1==t._s,r=0;e.length>r;)!function(n){var e,r,s=i?n.ok:n.fail,u=n.resolve,a=n.reject,c=n.domain;try{s?(i||(2==t._h&&M(t),t._h=1),!0===s?e=o:(c&&c.enter(),e=s(o),c&&c.exit()),e===n.promise?a(b("Promise-chain cycle")):(r=T(e))?r.call(e,u,a):u(e)):a(o)}catch(t){a(t)}}(e[r++]);t._c=[],t._n=!1,n&&!t._h&&I(t)})}},I=function(t){y.call(a,function(){var n,e,o,i=t._v,r=H(t);if(r&&(n=w(function(){S?j.emit("unhandledRejection",i,t):(e=a.onunhandledrejection)?e({promise:t,reason:i}):(o=a.console)&&o.error&&o.error("Unhandled promise rejection",i)}),t._h=S||H(t)?2:1),t._a=void 0,r&&n.e)throw n.v})},H=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,o=0;e.length>o;)if(n=e[o++],n.fail||!H(n.promise))return!1;return!0},M=function(t){y.call(a,function(){var n;S?j.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},L=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),A(n,!0))},U=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw b("Promise can't be resolved itself");(n=T(t))?m(function(){var o={_w:e,_d:!1};try{n.call(t,c(U,o,1),c(L,o,1))}catch(t){L.call(o,t)}}):(e._v=t,e._s=1,A(e,!1))}catch(t){L.call({_w:e,_d:!1},t)}}};C||(E=function(t){d(this,E,"Promise","_h"),h(t),o.call(this);try{t(c(U,this,1),c(L,this,1))}catch(t){L.call(this,t)}},o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=e(69)(E.prototype,{then:function(t,n){var e=k(g(this,E));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=S?j.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&A(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),r=function(){var t=new o;this.promise=t,this.resolve=c(U,t,1),this.reject=c(L,t,1)},_.f=k=function(t){return P(E,t)?new r(t):i(t)}),l(l.G+l.W+l.F*!C,{Promise:E}),e(20)(E,"Promise"),e(71)("Promise"),s=e(2).Promise,l(l.S+l.F*!C,"Promise",{reject:function(t){var n=k(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(u||!C),"Promise",{resolve:function(t){return t instanceof E&&P(t.constructor,this)?t:x(this,t)}}),l(l.S+l.F*!(C&&e(61)(function(t){E.all(t).catch(O)})),"Promise",{all:function(t){var n=this,e=k(n),o=e.resolve,i=e.reject,r=w(function(){var e=[],r=0,s=1;v(t,!1,function(t){var u=r++,a=!1;e.push(void 0),s++,n.resolve(t).then(function(t){a||(a=!0,e[u]=t,--s||o(e))},i)}),--s||o(e)});return r.e&&i(r.v),e.promise},race:function(t){var n=this,e=k(n),o=e.reject,i=w(function(){v(t,!1,function(t){n.resolve(t).then(e.resolve,o)})});return i.e&&o(i.v),e.promise}})},function(t,n,e){"use strict";var o=e(72)(!0);e(33)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=o(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var o=e(6),i=e(2),r=e(0),s=e(40),u=e(37);o(o.P+o.R,"Promise",{finally:function(t){var n=s(this,i.Promise||r.Promise),e="function"==typeof t;return this.then(e?function(e){return u(n,t()).then(function(){return e})}:t,e?function(e){return u(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var o=e(6),i=e(19),r=e(36);o(o.S,"Promise",{try:function(t){var n=i.f(this),e=r(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n,e){e(76);for(var o=e(0),i=e(4),r=e(7),s=e(1)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<u.length;a++){var c=u[a],f=o[c],l=f&&f.prototype;l&&!l[s]&&i(l,s,c),r[c]=r.Array}},function(t,n){"function"!=typeof Object.create&&(Object.create=function(t){function n(){}return n.prototype=t,new n}),function(t,n){"use strict";var e={_positionClasses:["bottom-left","bottom-right","top-right","top-left","bottom-center","top-center","mid-center"],_defaultIcons:["success","error","info","warning"],init:function(n){this.prepareOptions(n,t.toast.options),this.process()},prepareOptions:function(n,e){var o={};"string"==typeof n||n instanceof Array?o.text=n:o=n,this.options=t.extend({},e,o)},process:function(){this.setup(),this.addToDom(),this.position(),this.bindToast(),this.animate()},setup:function(){var n="";if(this._toastEl=this._toastEl||t("<div></div>",{class:"jq-toast-single"}),n+='<span class="jq-toast-loader"></span>',this.options.allowToastClose&&(n+='<span class="close-jq-toast-single">&times;</span>'),this.options.text instanceof Array){this.options.heading&&(n+='<h2 class="jq-toast-heading">'+this.options.heading+"</h2>"),n+='<ul class="jq-toast-ul">';for(var e=0;e<this.options.text.length;e++)n+='<li class="jq-toast-li" id="jq-toast-item-'+e+'">'+this.options.text[e]+"</li>";n+="</ul>"}else this.options.heading&&(n+='<h2 class="jq-toast-heading">'+this.options.heading+"</h2>"),n+=this.options.text;this._toastEl.html(n),!1!==this.options.bgColor&&this._toastEl.css("background-color",this.options.bgColor),!1!==this.options.textColor&&this._toastEl.css("color",this.options.textColor),this.options.textAlign&&this._toastEl.css("text-align",this.options.textAlign),!1!==this.options.icon&&(this._toastEl.addClass("jq-has-icon"),-1!==t.inArray(this.options.icon,this._defaultIcons)&&this._toastEl.addClass("jq-icon-"+this.options.icon))},position:function(){"string"==typeof this.options.position&&-1!==t.inArray(this.options.position,this._positionClasses)?"bottom-center"===this.options.position?this._container.css({left:t(n).outerWidth()/2-this._container.outerWidth()/2,bottom:20}):"top-center"===this.options.position?this._container.css({left:t(n).outerWidth()/2-this._container.outerWidth()/2,top:20}):"mid-center"===this.options.position?this._container.css({left:t(n).outerWidth()/2-this._container.outerWidth()/2,top:t(n).outerHeight()/2-this._container.outerHeight()/2}):this._container.addClass(this.options.position):"object"==typeof this.options.position?this._container.css({top:this.options.position.top?this.options.position.top:"auto",bottom:this.options.position.bottom?this.options.position.bottom:"auto",left:this.options.position.left?this.options.position.left:"auto",right:this.options.position.right?this.options.position.right:"auto"}):this._container.addClass("bottom-left")},bindToast:function(){var t=this;this._toastEl.on("afterShown",function(){t.processLoader()}),this._toastEl.find(".close-jq-toast-single").on("click",function(n){n.preventDefault(),"fade"===t.options.showHideTransition?(t._toastEl.trigger("beforeHide"),t._toastEl.fadeOut(function(){t._toastEl.trigger("afterHidden")})):"slide"===t.options.showHideTransition?(t._toastEl.trigger("beforeHide"),t._toastEl.slideUp(function(){t._toastEl.trigger("afterHidden")})):(t._toastEl.trigger("beforeHide"),t._toastEl.hide(function(){t._toastEl.trigger("afterHidden")}))}),"function"==typeof this.options.beforeShow&&this._toastEl.on("beforeShow",function(){t.options.beforeShow()}),"function"==typeof this.options.afterShown&&this._toastEl.on("afterShown",function(){t.options.afterShown()}),"function"==typeof this.options.beforeHide&&this._toastEl.on("beforeHide",function(){t.options.beforeHide()}),"function"==typeof this.options.afterHidden&&this._toastEl.on("afterHidden",function(){t.options.afterHidden()})},addToDom:function(){var n=t(".jq-toast-wrap");if(0===n.length?(n=t("<div></div>",{class:"jq-toast-wrap"}),t("body").append(n)):(!this.options.stack||isNaN(parseInt(this.options.stack,10)))&&n.empty(),n.find(".jq-toast-single:hidden").remove(),n.append(this._toastEl),this.options.stack&&!isNaN(parseInt(this.options.stack),10)){var e=n.find(".jq-toast-single").length,o=e-this.options.stack;o>0&&t(".jq-toast-wrap").find(".jq-toast-single").slice(0,o).remove()}this._container=n},canAutoHide:function(){return!1!==this.options.hideAfter&&!isNaN(parseInt(this.options.hideAfter,10))},processLoader:function(){if(!this.canAutoHide()||!1===this.options.loader)return!1;var t=this._toastEl.find(".jq-toast-loader"),n=(this.options.hideAfter-400)/1e3+"s",e=this.options.loaderBg,o=t.attr("style")||"";o=o.substring(0,o.indexOf("-webkit-transition")),o+="-webkit-transition: width "+n+" ease-in;                       -o-transition: width "+n+" ease-in;                       transition: width "+n+" ease-in;                       background-color: "+e+";",t.attr("style",o).addClass("jq-toast-loaded")},animate:function(){var t=this;if(this._toastEl.hide(),this._toastEl.trigger("beforeShow"),"fade"===this.options.showHideTransition.toLowerCase()?this._toastEl.fadeIn(function(){t._toastEl.trigger("afterShown")}):"slide"===this.options.showHideTransition.toLowerCase()?this._toastEl.slideDown(function(){t._toastEl.trigger("afterShown")}):this._toastEl.show(function(){t._toastEl.trigger("afterShown")}),this.canAutoHide()){var t=this;n.setTimeout(function(){"fade"===t.options.showHideTransition.toLowerCase()?(t._toastEl.trigger("beforeHide"),t._toastEl.fadeOut(function(){t._toastEl.trigger("afterHidden")})):"slide"===t.options.showHideTransition.toLowerCase()?(t._toastEl.trigger("beforeHide"),t._toastEl.slideUp(function(){t._toastEl.trigger("afterHidden")})):(t._toastEl.trigger("beforeHide"),t._toastEl.hide(function(){t._toastEl.trigger("afterHidden")}))},this.options.hideAfter)}},reset:function(n){"all"===n?t(".jq-toast-wrap").remove():this._toastEl.remove()},update:function(t){this.prepareOptions(t,this.options),this.setup(),this.bindToast()}};t.toast=function(t){var n=Object.create(e);return n.init(t,this),{reset:function(t){n.reset(t)},update:function(t){n.update(t)}}},t.toast.options={text:"",heading:"",showHideTransition:"fade",allowToastClose:!0,hideAfter:3e3,loader:!0,loaderBg:"#9EC600",stack:5,position:"bottom-left",bgColor:!1,textColor:!1,textAlign:"left",icon:!1,beforeShow:function(){},afterShown:function(){},beforeHide:function(){},afterHidden:function(){}}}(jQuery,window,document)},,function(t,n,e){"use strict";var o=e(24);t.exports.getUnused=function(){return o({url:"/ui/cashCouponOrderUnused"})},t.exports.getUsed=function(){return o({url:"/ui/cashCouponOrderUsed"})},t.exports.getUnusedById=function(t){return o({url:"/ui/cashCouponOrderUnused/"+t})},t.exports.refund=function(t){return o({url:"/ui/refund",type:"POST",data:t})},t.exports.getRefund=function(){return o({url:"/ui/refund"})},t.exports.cancelRefund=function(t){return o({url:"/ui/cancelRefund/"+t,type:"PATCH"})},t.exports.getRefundReason=function(){return o({url:"/ui/refundReason"})}},,,,,,,,,,,,,,,,function(t,n,e){"use strict";var o=e(15),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e(46);var r=e(26),s=e(86);r.ready(function(){var t=$(".refund-upload-img img");$(document).delegate(".js-file","change",function(){var n=this.files[0];if(!/image\/\w+/.test(n.type))return void r.toast({text:"只能上传图片"});var e=new FileReader;e.readAsDataURL(n),e.onload=function(){t.attr("src",this.result),t.closest().addClass("show")}});var n={};$(document).delegate(".refund-btn","click",function(){r.lock($(this),function(){var t="",e=$(".js-text").text().trim();return $(".radio-box input").each(function(){var n=$(this);n.prop("checked")&&(t=n.val())}),r.isEmpty(t)?(r.toast({text:"请选择退款原因"}),0):s.refund({cashCouponOrderId:n.id,reason:e}).then(function(){r.toast({text:"退款申请提交成功"})})})}),r.loading(function(){var t=r.formatQuery(window.location.search);return r.isEmpty(t.id)?(r.toast({text:"退款代金券订单不存在，请检查"}),i.default.reject()):r.all({unused:s.getUnusedById(t.id),reasons:s.getRefundReason()}).then(function(t){n=t.unused.result,$(".refund-wrapper").html(r.render($("#refund-tpl").html(),n)),$(".js-reason-wrapper").html(r.renderArray($("#reason-tpl").html(),t.reasons.result.datas))})})})}])});