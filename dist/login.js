!function (e) {
    var t = {};

    function r(o) {
        if (t[o]) return t[o].exports;
        var n = t[o] = {i: o, l: !1, exports: {}};
        return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }

    r.m = e, r.c = t, r.d = function (e, t, o) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (r.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) r.d(o, n, function (t) {
            return e[t]
        }.bind(null, n));
        return o
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 0)
}([function (e, t, r) {
    "use strict";

    function o() {
        let e = window.location.pathname;
        window.sessionStorage.getItem("userId") ? (e.includes("/index.html") || e.includes("/register.html")) && window.location.replace("./chat.html") : e.includes("/index.html") || e.includes("/register.html") || window.location.replace("./index.html")
    }

    function n(e, t) {
        let r;
        document.querySelector(".error-message") ? r = document.querySelector(".error-message") : (r = document.createElement("div"), document.body.appendChild(r), r.addEventListener("click", function (e) {
            document.body.removeChild(document.querySelector(".error-message"))
        })), r.textContent = e, r.style.background = t, r.classList.add("error-message")
    }

    r.r(t);
    let l = "https://ernestthebest.herokuapp.com";
    o();
    const u = Array.from(document.querySelectorAll("form input")), a = document.getElementById("username"),
        i = document.getElementById("password");
    document.getElementsByTagName("form")[0].addEventListener("submit", function (e) {
        var t, r;
        e.preventDefault(), u.every(e => e.value) ? (n("Good boy", "#82df1b"), u.forEach(e => e.classList.remove("error"))) : (n("Mandatory values must be entered", "linear-gradient(#f95062, #df251b)"), u.forEach(e => {
            e.value ? e.classList.remove("error") : e.classList.add("error")
        })), function (e) {
            let t = e.querySelectorAll("input"), r = e.querySelectorAll("button");
            t.forEach(e => e.disabled = !0), r.forEach(e => e.disabled = !0)
        }(document.querySelector("form")), (t = a.value, r = i.value, fetch(`${l}/me`, {headers: {Authorization: `Basic ${btoa(`${t}:${r}`)}`}}).then(e => e.json())).then(e => {
            e.errors ? (n(e.errors[0].title.replace("data.", ""), "linear-gradient(#f95062, #df251b)"), function (e) {
                let t = e.querySelectorAll("input"), r = e.querySelectorAll("button");
                t.forEach(e => e.removeAttribute("disabled")), r.forEach(e => e.removeAttribute("disabled"))
            }(document.querySelector("form"))) : (function (e, t, r) {
                window.sessionStorage.setItem("userId", e), window.sessionStorage.setItem("credentials", btoa(`${t}:${r}`))
            }(e.data.id, a.value, i.value), o())
        })
    })
}]);