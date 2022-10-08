/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={648:(t,e,r)=>{var o=r(288).default;function n(){"use strict";t.exports=n=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function p(t,e,r,o){var n=e&&e.prototype instanceof h?e:h,a=Object.create(n.prototype),i=new z(o||[]);return a._invoke=function(t,e,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return{value:void 0,done:!0}}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var s=S(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var u=f(t,e,r);if("normal"===u.type){if(o=r.done?"completed":"suspendedYield",u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var m={};function h(){}function d(){}function y(){}var v={};l(v,s,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(O([])));b&&b!==r&&a.call(b,s)&&(v=b);var x=y.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(n,i,s,u){var c=f(t[n],t,i);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==o(p)&&a.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,s,u)}),(function(t){r("throw",t,s,u)})):e.resolve(p).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,u)}))}u(c.arg)}var n;this._invoke=function(t,o){function a(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(a,a):a()}}function S(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var n=o.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=y,l(x,"constructor",y),l(y,"constructor",d),d.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},w(L.prototype),l(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,o,n,a){void 0===a&&(a=Promise);var i=new L(p(t,r,o,n),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(x),l(x,c,"Generator"),l(x,s,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},e.values=O,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return i.type="throw",i.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],i=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var s=a.call(n,"catchLoc"),u=a.call(n,"finallyLoc");if(s&&u){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(s){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=t,i.arg=e,n?(this.method="next",this.next=n.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;j(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,e,r)=>{var o=r(648)();t.exports=o;try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};(()=>{"use strict";r.r(o);const t=flarum.core.compat["common/app"];r.n(t)().initializers.add("jeromegillard/osm",(function(){console.log("[jeromegillard/osm] Hello, forum and admin!")}));const e=flarum.core.compat["forum/app"];var n=r.n(e);const a=flarum.core.compat["components/Post"];var i=r.n(a);const s=flarum.core.compat["common/extend"],u=flarum.core.compat["common/components/TextEditor"];var c=r.n(u);const l=flarum.core.compat["common/components/TextEditorButton"];var p=r.n(l);function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}const h=flarum.core.compat["common/Model"];var d=r.n(h);const y=flarum.core.compat["common/utils/mixin"];var v=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,f(e,r);var n=o.prototype;return n.apiEndpoint=function(){return"/fof/uploads"+(this.exists?"/"+this.data.id:"")},n.bbcode=function(){switch(this.tag()){case"jeromegillard-map":return"[upl-file uuid="+this.uuid()+" size="+this.humanSize()+" url="+this.url()+"]"+this.baseName()+"[/upl-file]";case"file":return"[upl-file uuid="+this.uuid()+" size="+this.humanSize()+"]"+this.baseName()+"[/upl-this]";case"image":return"[upl-image uuid="+this.uuid()+" size="+this.humanSize()+" url="+this.url()+"]"+this.baseName()+"[/upl-image]";case"image-preview":return"[upl-image-preview url="+this.url()+"]";default:return this.url()}},o}(r.n(y)()(d(),{baseName:d().attribute("baseName"),path:d().attribute("path"),url:d().attribute("url"),type:d().attribute("type"),size:d().attribute("size"),humanSize:d().attribute("humanSize"),createdAt:d().attribute("createdAt"),uuid:d().attribute("uuid"),tag:d().attribute("tag"),hidden:d().attribute("hidden")}));function g(t,e,r,o,n,a,i){try{var s=t[a](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(o,n)}var b=r(357),x=r.n(b);function w(t,e,r){var o,a,i,s,u,c,l,p,f,m,h=null!=(o=n().forum.attribute("tilesProvider"))?o:"osm",d=null!=(a=n().forum.attribute("zoom"))?a:13;switch((t&&"mapbox"===t||"thunderforest"===t||"osm"===t)&&(h=t),h){case"mapbox":p=null!=(i=n().forum.attribute("mapbox.key"))?i:"",l=null!=(s=n().forum.attribute("mapbox.style"))?s:"mapbox/light-v9",f="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}@2x?access_token={key}",m='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, © <a href="https://www.mapbox.com/">Mapbox</a>';break;case"thunderforest":p=null!=(u=n().forum.attribute("thunderforest.key"))?u:"",l=null!=(c=n().forum.attribute("thunderforest.style"))?c:"atlas",f="https://tile.thunderforest.com/{id}/{z}/{x}/{y}.png?apikey={key}",m='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, © <a href="https://www.thunderforest.com/">Thunderforest</a>';break;default:f="https://tile.openstreetmap.org/{z}/{x}/{y}.png",m='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}if(e)switch(h){case"mapbox":"mapbox/streets-v11"!==e&&"mapbox/outdoors-v11"!==e&&"mapbox/light-v10"!==e&&"mapbox/dark-v10"!==e&&"mapbox/satellite-v9"!==e&&"mapbox/satellite-streets-v11"!==e&&"mapbox/navigation-day-v1"!==e&&"mapbox/streets-v11"!==e&&"mapbox/navigation-night-v1"!==e||(l=e);break;case"thunderforest":"cycle"!==e&&"transport"!==e&&"landscape"!==e&&"outdoors"!==e&&"transport-dark9"!==e&&"spinal-map"!==e&&"pioneer"!==e&&"mobile-atlas"!==e&&"neighbourhood"!==e&&"atlas"!==e||(l=e)}return r>=0&&r<=18&&(d=r),{tilesProvider:h,attribution:m,currentStyle:l,currentKey:p,tileLayerURL:f,zoom:d,maxZoom:18,tileSize:512,zoomOffset:-1,detectRetina:!0,defaultLocation:[51.505,-.09]}}n().initializers.add("jeromegillard/osm",(function(){n().store.models.files=v,(0,s.extend)(c().prototype,"toolbarItems",(function(t){var e=w();t.add("bbcode",m(p(),{onclick:function(){return t=e.tilesProvider,r=e.currentStyle,o=e.zoom,void(n=x().mark((function e(){var n,a,i,s,u;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.querySelector("textarea.FormControl"),a=n.selectionStart,i=n.value.substring(0,a),s=n.value.substring(a,n.value.length),u="[map provider="+(null!=t?t:"osm")+" style="+(null!=r?r:"street")+" zoom="+(null!=o?o:13)+"]"+app.translator.trans("jeromegillard-map.forum.text_editor.location_placeholder")+"[/map]",n.value=i+u+s,a+=1,n.selectionStart=a,n.selectionEnd=a,n.focus();case 10:case"end":return e.stop()}}),e)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function i(t){g(a,r,o,i,s,"next",t)}function s(t){g(a,r,o,i,s,"throw",t)}i(void 0)}))})();var t,r,o,n},icon:"fas fa-map"},n().translator.trans("jeromegillard-map.forum.text_editor.bbcode_tooltip")))}))})),(0,s.extend)(i().prototype,"oncreate",(function(){this.postId=this.attrs.post.id(),this.mapConf=w();var t=this;this.$(".mapFile-container").each((function(e){var r=$(this).children(".mapFile").data("fofUploadDownloadUuid"),o="map-"+t.postId+e+"-"+r,a=n().forum.attribute("apiUrl")+"/fof/download";a+="/"+r,a+="/"+t.postId,a+="/"+n().session.csrfToken;var i=$(this).children(".mapFile").data("mapUrl").split(".").pop().toLowerCase();$(this).children(".mapFile-placeholder").prop("id",o);var s=L.map(o);s.addControl(new L.Control.Fullscreen),new L.tileLayer(t.mapConf.tileLayerURL,{key:t.mapConf.currentKey,maxZoom:t.mapConf.maxZoom,attribution:t.mapConf.attribution,id:t.mapConf.currentStyle,tileSize:t.mapConf.tileSize,zoomOffset:t.mapConf.zoomOffset,detectRetina:t.mapConf.detectRetina}).addTo(s),"gpx"==i?new L.GPX(a,{async:!0,marker_options:{startIconUrl:"/assets/extensions/jeromegillard-map/pin-icon-start.png",endIconUrl:"/assets/extensions/jeromegillard-map/pin-icon-end.png",shadowUrl:"/assets/extensions/jeromegillard-map/pin-shadow.png",wptIconUrls:{"":"/assets/extensions/jeromegillard-map/default-waypoint.png","Geocache Found":"/assets/extensions/jeromegillard-map/geocache.png",Park:"/assets/extensions/jeromegillard-map/tree.png"}}}).on("loaded",(function(t){s.fitBounds(t.target.getBounds())})).addTo(s):"json"==i||"geojson"==i?fetch(a).then((function(t){return t.json()})).then((function(t){var e=L.geoJSON([t],{style:function(t){if(t.properties&&t.properties.colour)return{color:t.properties.colour,weight:3,opacity:1}},onEachFeature:function(t,e){var r="";t.properties&&t.properties.name&&(r+=t.properties.name),e.bindPopup(r)}}).addTo(s);s.fitBounds(e.getBounds())})):s.setView(t.mapConf.defaultLocation,t.mapConf.zoom)})),this.$(".bbcode-map").each((function(t){var e=$(this).data("mapLocation"),r=w($(this).data("mapProvider"),$(this).data("mapStyle"),$(this).data("mapZoom")),o="map-"+Math.floor(1e3*Math.random());$(this).prop("id",o),e&&fetch("https://nominatim.openstreetmap.org/search?q="+e+"&format=json").then((function(t){return t.json()})).then((function(t){var e=L.map(o);e.addControl(new L.Control.Fullscreen),new L.tileLayer(r.tileLayerURL,{key:r.currentKey,maxZoom:r.maxZoom,attribution:r.attribution,id:r.currentStyle,tileSize:r.tileSize,zoomOffset:r.zoomOffset,detectRetina:r.detectRetina}).addTo(e),e.setView([t[0].lat,t[0].lon],r.zoom)}))}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map