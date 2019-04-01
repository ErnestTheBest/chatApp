!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return u});var r=n(2);function o(e,t){e.className="status",e.classList.add("status-".concat(Object(r.a)(t)))}function i(e){var t=e.querySelectorAll("input"),n=e.querySelectorAll("button");t.forEach(function(e){return e.removeAttribute("disabled")}),n.forEach(function(e){return e.removeAttribute("disabled")})}function u(e){var t=e.querySelectorAll("input"),n=e.querySelectorAll("button");t.forEach(function(e){e.disabled=!0}),n.forEach(function(e){e.disabled=!0})}},function(e,t,n){"use strict";function r(){var e=window.location.pathname;window.sessionStorage.getItem("userId")?(e.includes("/index.html")||e.includes("/register.html"))&&window.location.replace("./chat.html"):e.includes("/index.html")||e.includes("/register.html")||window.location.replace("./index.html")}function o(){window.sessionStorage.removeItem("userId"),window.sessionStorage.removeItem("credentials"),window.sessionStorage.removeItem("chatContextId"),window.sessionStorage.removeItem("chatUpdates"),window.sessionStorage.removeItem("chatContextName"),window.sessionStorage.removeItem("userStatuses"),r()}function i(e,t,n){window.sessionStorage.setItem("userId",e),window.sessionStorage.setItem("credentials",window.btoa("".concat(t,":").concat(n)))}function u(e,t){window.sessionStorage.setItem("chatContextId",e),window.sessionStorage.setItem("chatContextName",t)}function c(e){window.sessionStorage.setItem("userStatuses",e)}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"e",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return c})},function(e,t,n){"use strict";function r(e){var t=new Date,n=[],r=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var a=u.value;if(a.seen_at){var s=t-new Date(a.seen_at);s<18e4?n.push([a.id,"online"]):s<36e4?n.push([a.id,"away"]):n.push([a.id,"offline"])}else n.push([a.id,"offline"])}}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}function o(e){var t=JSON.parse(window.sessionStorage.userStatuses),n=!0,r=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var c=i.value;if(e==c[0])return c[1]}}catch(e){r=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(r)throw o}}}n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o})},function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"e",function(){return u}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return a});var r="https://ernestthebest.herokuapp.com";function o(){return window.fetch("".concat(r,"/users"),{headers:{Authorization:"Basic ".concat(window.sessionStorage.credentials)}}).then(function(e){return e.json()})}function i(e,t){return window.fetch("".concat(r,"/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then(function(e){return e.json()})}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return window.fetch("".concat(r,"/users/").concat(window.sessionStorage.userId),{method:"PUT",headers:{Authorization:"Basic ".concat(window.sessionStorage.credentials),"Content-Type":"application/json"},body:JSON.stringify({name:e,password:t})}).then(function(e){return e.ok})}function c(e,t){return window.fetch("".concat(r,"/me"),{headers:{Authorization:"Basic ".concat(window.btoa("".concat(e,":").concat(t)))}}).then(function(e){return e.json()})}function a(){return window.fetch("".concat(r,"/me"),{headers:{Authorization:"Basic ".concat(window.sessionStorage.credentials)}}).then(function(e){return console.log(e),e.json()})}},function(e,t,n){"use strict";function r(e,t){var n;document.querySelector(".error-message")?n=document.querySelector(".error-message"):(n=document.createElement("div"),document.body.appendChild(n),n.addEventListener("click",function(e){document.body.removeChild(document.querySelector(".error-message"))})),n.textContent=e,n.style.background=t,n.classList.add("error-message")}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(4),i=n(0),u=n(3);Object(r.a)(),document.getElementsByTagName("form")[0].addEventListener("submit",function(e){var t,n,c;e.preventDefault(),t=Array.from(document.querySelectorAll("form input")),n=document.getElementById("username"),c=document.getElementById("password"),t.every(function(e){return e.value})?function(e){Object(o.a)("Good boy","#82df1b"),e.forEach(function(e){return e.classList.remove("error")})}(t):function(e){Object(o.a)("Mandatory values must be entered","linear-gradient(#f95062, #df251b)"),e.forEach(function(e){e.value?e.classList.remove("error"):e.classList.add("error")})}(t),Object(i.a)(document.querySelector("form")),Object(u.c)(n.value,c.value).then(function(e){e.errors?(Object(o.a)(e.errors[0].title.replace("data.",""),"linear-gradient(#f95062, #df251b)"),Object(i.b)(document.querySelector("form"))):(Object(r.e)(e.data.id,n.value,c.value),Object(r.a)())})})}]);