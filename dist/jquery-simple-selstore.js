!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=5)}([function(e,t){e.exports=jQuery},function(e,t,n){var i=n(2);"string"==typeof i&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};n(4)(i,o);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"@charset \"UTF-8\";\n.simple-selstore-item {\n  margin: 0 .3em 0 0; }\n\n.simple-selstore-remove {\n  display: inline-block;\n  width: 1.5em;\n  line-height: 1.5em;\n  background-color: #dfdfdf;\n  border-radius: 1em;\n  margin: .25em;\n  text-align: center;\n  color: #444;\n  font-size: .8em;\n  cursor: pointer; }\n  .simple-selstore-remove:after {\n    content: '\\D7'; }\n  .simple-selstore-remove:hover {\n    color: #f44;\n    background-color: #eee; }\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=i.sources.map((function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"}));return[n].concat(r).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";var i,o={},r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],a=t.base?r[0]+t.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}function c(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=o[i.id],a=0;if(r){for(r.refs++;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(y(i.parts[a],t))}else{for(var s=[];a<i.parts.length;a++)s.push(y(i.parts[a],t));o[i.id]={id:i.id,refs:1,parts:s}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var i=n.nc;i&&(e.attributes.nonce=i)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function h(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function d(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o&&e.setAttribute("media",o),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,v=0;function y(e,t){var n,i,o;if(t.singleton){var r=v++;n=p||(p=u(t)),i=h.bind(null,n,r,!1),o=h.bind(null,n,r,!0)}else n=u(t),i=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e,t);return c(n,t),function(e){for(var i=[],r=0;r<n.length;r++){var a=n[r],u=o[a.id];u&&(u.refs--,i.push(u))}e&&c(s(e,t),t);for(var l=0;l<i.length;l++){var f=i[l];if(0===f.refs){for(var h=0;h<f.parts.length;h++)f.parts[h]();delete o[f.id]}}}}},function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r="simple-selstore";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}var u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,e),this.opts={type:t.type||"session",key:t.key},this.inst=new l(this.opts)}return c(e,[{key:"get",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.inst.get(this.opts.key)||e}},{key:"set",value:function(e){this.inst.set(this.opts.key,e)}},{key:"remove",value:function(){this.inst.remove(this.opts.key)}}]),e}(),l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,e),this.storage={local:window.localStorage,session:window.sessionStorage}[t.type]}return c(e,[{key:"get",value:function(e){try{var t=this.storage.getItem(e);return t?JSON.parse(t):null}catch(e){return console.log(e),null}}},{key:"set",value:function(e,t){try{this.storage.setItem(e,JSON.stringify(t))}catch(e){console.log(e)}}},{key:"remove",value:function(e){this.storage.removeItem(e)}}]),e}();n(1);function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var h=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.instance=n,this.options=i,this.$container=o()(t),this.init()}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.$container.addClass("".concat(r,"-listview")),this.unbind(),this.bind()}},{key:"destroy",value:function(){this.$container.removeClass("".concat(r,"-listview")),this.unbind()}},{key:"bind",value:function(){var e=this;this.$container.on("click.".concat(r),".".concat(r,"-remove"),(function(t){e.instance.unselect(o()(t.target).parent().data("".concat(r,"-id"))),t.stopPropagation()}))}},{key:"unbind",value:function(){this.$container.off(".".concat(r))}},{key:"items",value:function(){return this.$container.find(".".concat(r,"-item"))}},{key:"findItem",value:function(e){return this.items().filter("[data-".concat(r,'-id="').concat(e,'"]'))}},{key:"add",value:function(e,t){var n=o()("<span>").addClass("".concat(r,"-item")).attr("data-".concat(r,"-id"),e).attr("data-".concat(r,"-title"),t);n.append(o()("<span>").addClass("".concat(r,"-title")).text(t)),n.append(o()("<span>").addClass("".concat(r,"-remove"))),n.append(o()('<input type="hidden">').attr("name",this.options.listname).val(e)),this.$container.append(n)}},{key:"remove",value:function(e){this.findItem(e).remove()}},{key:"clear",value:function(){this.$container.html("")}}])&&f(t.prototype,n),i&&f(t,i),e}();function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var p=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.instance=n,this.options=i,this.$container=o()(t),this.init()}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.$container.addClass("".concat(r,"-selector")),this.unbind(),this.bind()}},{key:"destroy",value:function(){this.$container.removeClass("".concat(r,"-selector")),this.unbind()}},{key:"bind",value:function(){var e=this;this.$container.on("click.".concat(r),this.options.checkbox,(function(t){var n=o()(t.target),i=n.attr("data-".concat(r,"-id"))||n.attr("value"),a=n.attr("data-".concat(r,"-title"))||n.parent().text();if(n.prop("checked")){if(e.exeeded())return e.options.maxAlert&&alert(e.options.maxAlert),void t.preventDefault();e.instance.select(i,a)}else e.instance.unselect(i)}))}},{key:"unbind",value:function(){this.$container.off(".".concat(r))}},{key:"checkboxes",value:function(){return this.$container.find(this.options.checkbox)}},{key:"findCheckbox",value:function(e){return this.checkboxes().filter('[value="'.concat(e,'"], [data-').concat(r,'-id="').concat(e,'"]'))}},{key:"check",value:function(e){this.findCheckbox(e).prop("checked",!0)}},{key:"uncheck",value:function(e){this.findCheckbox(e).prop("checked",!1)}},{key:"clear",value:function(){this.checkboxes().prop("checked",!1)}},{key:"exeeded",value:function(){return!!(this.options.maxSelect&&this.instance.listview.items().length>=this.options.maxSelect)}}])&&d(t.prototype,n),i&&d(t,i),e}();function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var y={checkbox:"input:checkbox",listname:"items[]",maxSelect:null,maxAlert:null,store:null,storeKey:null},m=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=o.a.extend(!0,{},y,i),this.selector=new p(t,this,this.options),this.listview=new h(n,this,this.options),this.options.store&&this.options.storeKey&&(this.store=new u({type:this.options.store,key:this.options.storeKey})),this.load()}var t,n,i;return t=e,i=[{key:"getDefaults",value:function(){return y}},{key:"setDefaults",value:function(e){return o.a.extend(!0,y,e)}}],(n=[{key:"destroy",value:function(){this.selector.destroy(),this.listview.destroy()}},{key:"select",value:function(e,t){this.selector.check(e),this.listview.add(e,t),this.save()}},{key:"unselect",value:function(e){this.selector.uncheck(e),this.listview.remove(e),this.save()}},{key:"load",value:function(){var e=this;if(this.store){var t=this.store.get();t&&t.forEach((function(t){e.select(t.id,t.title)}))}}},{key:"save",value:function(){if(this.store){var e=this.listview.items().map((function(e,t){var n=o()(t);return{id:n.data("".concat(r,"-id")),title:n.data("".concat(r,"-title"))}})).get();this.store.set(e)}}},{key:"clear",value:function(){this.selector.clear(),this.listview.clear(),this.store&&this.store.remove()}}])&&v(t.prototype,n),i&&v(t,i),e}();o.a.fn.simpleSelstore=function(e,t){return this.each((function(n,i){var a=o()(i);a.data(r)&&a.data(r).destroy(),a.data(r,new m(a,e,t))}))},o.a.SimpleSelstore=m}]);