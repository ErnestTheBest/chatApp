!function (e) {
  var t = {}

  function n (o) {
    if (t[o]) return t[o].exports
    var r = t[o] = {i: o, l: !1, exports: {}}
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }

  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    })
  }, n.r = function (e) {'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(e, '__esModule', {value: !0})}, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e
    if (4 & t && 'object' == typeof e && e && e.__esModule) return e
    var o = Object.create(null)
    if (n.r(o), Object.defineProperty(o, 'default', {
      enumerable: !0,
      value: e
    }), 2 & t && 'string' != typeof e) for (var r in e) n.d(o, r, function (t) {return e[t]}.bind(null, r))
    return o
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {return e.default} : function () {return e}
    return n.d(t, 'a', t), t
  }, n.o = function (e, t) {return Object.prototype.hasOwnProperty.call(e, t)}, n.p = '', n(n.s = 6)
}([function (e, t, n) {
  'use strict'

  function o (e, t) {
    var n
    document.querySelector('.error-message') ? n = document.querySelector('.error-message') : (n = document.createElement('div'), document.body.appendChild(n), n.addEventListener('click', function (e) {document.body.removeChild(document.querySelector('.error-message'))})), n.textContent = e, n.style.background = t, n.classList.add('error-message')
  }

  n.d(t, 'a', function () {return o})
}, function (e, t, n) {
  'use strict'

  function o () {
    var e = window.location.pathname
    window.sessionStorage.getItem('userId') ? (e.includes('/index.html') || e.includes('/register.html')) && window.location.replace('./chat.html') : e.includes('/index.html') || e.includes('/register.html') || window.location.replace('./index.html')
  }

  function r (e, t, n) {window.sessionStorage.setItem('userId', e), window.sessionStorage.setItem('credentials', btoa(''.concat(t, ':').concat(n)))}

  n.d(t, 'a', function () {return o}), n.d(t, 'b', function () {return r})
}, function (e, t, n) {
  'use strict'

  function o (e) {
    var t = e.querySelectorAll('input'), n = e.querySelectorAll('button')
    t.forEach(function (e) {return e.removeAttribute('disabled')}), n.forEach(function (e) {return e.removeAttribute('disabled')})
  }

  function r (e) {
    var t = e.querySelectorAll('input'), n = e.querySelectorAll('button')
    t.forEach(function (e) {return e.disabled = !0}), n.forEach(function (e) {return e.disabled = !0})
  }

  n.d(t, 'b', function () {return o}), n.d(t, 'a', function () {return r})
}, function (e, t, n) {
  'use strict'
  n.d(t, 'c', function () {return r}), n.d(t, 'd', function () {return c}), n.d(t, 'b', function () {return u}), n.d(t, 'a', function () {return i})
  var o = 'https://ernestthebest.herokuapp.com'

  function r (e, t) {
    return fetch(''.concat(o, '/users'), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: e, password: t})
    }).then(function (e) {return e.json()})
  }

  function c (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0
    return fetch(''.concat(o, '/users/').concat(window.sessionStorage.userId), {
      method: 'PUT',
      headers: {Authorization: 'Basic '.concat(window.sessionStorage.credentials), 'Content-Type': 'application/json'},
      body: JSON.stringify({name: e, password: t})
    }).then(function (e) {return e.ok})
  }

  function u (e, t) {return fetch(''.concat(o, '/me'), {headers: {Authorization: 'Basic '.concat(btoa(''.concat(e, ':').concat(t)))}}).then(function (e) {return e.json()})}

  function i () {return fetch(''.concat(o, '/me'), {headers: {Authorization: 'Basic '.concat(window.sessionStorage.credentials)}}).then(function (e) {return console.log(e), e.json()})}
}, , , function (e, t, n) {
  'use strict'
  n.r(t)
  var o, r, c = n(1), u = n(0), i = n(2), a = n(3)

  function d () {window.location.replace('./chat.html')}

  Object(c.a)(), o = document.getElementById('userLogin'), r = document.getElementById('display-name'), Object(a.a)().then(function (e) {
    var t = e.data
    console.log(t), o.textContent = t.username, t.name && (r.value = t.name)
  }), document.getElementById('cancel').addEventListener('click', function (e) {e.preventDefault(), d()}), document.addEventListener('submit', function (e) {e.preventDefault(), Object(i.a)(document.querySelector('form')), Object(a.d)(document.getElementById('display-name').value).then(function () {Object(u.a)('Display name changed', '#82df1b'), setTimeout(d, 1500)}), Object(i.b)(document.querySelector('form'))})
}])