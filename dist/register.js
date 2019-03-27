!function (e) {
  var t = {}

  function n (r) {
    if (t[r]) return t[r].exports
    var o = t[r] = {i: r, l: !1, exports: {}}
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    })
  }, n.r = function (e) {'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(e, '__esModule', {value: !0})}, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e
    if (4 & t && 'object' == typeof e && e && e.__esModule) return e
    var r = Object.create(null)
    if (n.r(r), Object.defineProperty(r, 'default', {
      enumerable: !0,
      value: e
    }), 2 & t && 'string' != typeof e) for (var o in e) n.d(r, o, function (t) {return e[t]}.bind(null, o))
    return r
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {return e.default} : function () {return e}
    return n.d(t, 'a', t), t
  }, n.o = function (e, t) {return Object.prototype.hasOwnProperty.call(e, t)}, n.p = '', n(n.s = 5)
}([function (e, t, n) {
  'use strict'

  function r () {
    var e = window.location.pathname
    window.sessionStorage.getItem('userId') ? (e.includes('/index.html') || e.includes('/register.html')) && window.location.replace('./chat.html') : e.includes('/index.html') || e.includes('/register.html') || window.location.replace('./index.html')
  }

  function o (e, t, n) {window.sessionStorage.setItem('userId', e), window.sessionStorage.setItem('credentials', btoa(''.concat(t, ':').concat(n)))}

  n.d(t, 'a', function () {return r}), n.d(t, 'b', function () {return o})
}, function (e, t, n) {
  'use strict'

  function r (e, t) {
    var n
    document.querySelector('.error-message') ? n = document.querySelector('.error-message') : (n = document.createElement('div'), document.body.appendChild(n), n.addEventListener('click', function (e) {document.body.removeChild(document.querySelector('.error-message'))})), n.textContent = e, n.style.background = t, n.classList.add('error-message')
  }

  n.d(t, 'a', function () {return r})
}, function (e, t, n) {
  'use strict'

  function r (e) {
    var t = e.querySelectorAll('input'), n = e.querySelectorAll('button')
    t.forEach(function (e) {return e.removeAttribute('disabled')}), n.forEach(function (e) {return e.removeAttribute('disabled')})
  }

  function o (e) {
    var t = e.querySelectorAll('input'), n = e.querySelectorAll('button')
    t.forEach(function (e) {return e.disabled = !0}), n.forEach(function (e) {return e.disabled = !0})
  }

  n.d(t, 'b', function () {return r}), n.d(t, 'a', function () {return o})
}, function (e, t, n) {
  'use strict'
  n.d(t, 'b', function () {return o}), n.d(t, 'a', function () {return u})
  var r = 'https://ernestthebest.herokuapp.com'

  function o (e, t) {
    return fetch(''.concat(r, '/users'), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: e, password: t})
    }).then(function (e) {return e.json()})
  }

  function u (e, t) {return fetch(''.concat(r, '/me'), {headers: {Authorization: 'Basic '.concat(btoa(''.concat(e, ':').concat(t)))}}).then(function (e) {return e.json()})}
}, , function (e, t, n) {
  'use strict'
  n.r(t)
  var r = n(0), o = n(2), u = n(3), c = n(1)
  Object(r.a)(), document.addEventListener('submit', function (e) {
    var t, n, i, a
    e.preventDefault(), t = Array.from(document.querySelectorAll('form input')), n = document.getElementById('username'), i = document.getElementById('password'), a = document.getElementById('confirm-password'), function (e) {return e.every(function (e) {return e.value})}(t) ? function (e, t) {return e.value === t.value}(i, a) ? (function (e) {Object(c.a)('Good boy', '#82df1b'), e.forEach(function (e) {return e.classList.remove('error')})}(t), Object(o.a)(document.querySelector('form')), Object(u.b)(n.value, i.value).then(function (e) {e.errors ? (Object(c.a)(e.errors[0].title.replace('data.', ''), 'linear-gradient(#f95062, #df251b)'), Object(o.b)(document.querySelector('form'))) : (Object(r.b)(e.data.id, n.value, i.value), Object(r.a)())})) : function (e, t) {Object(c.a)('Passwords do not match', 'linear-gradient(#f95062, #df251b)'), e.classList.add('error'), t.classList.add('error')}(i, a) : function (e) {Object(c.a)('Mandatory values must be entered', 'linear-gradient(#f95062, #df251b)'), e.forEach(function (e) {e.value ? e.classList.remove('error') : e.classList.add('error')})}()
  })
}])