module.exports = (function (e) {
  var r = {};
  function n(t) {
    if (r[t]) return r[t].exports;
    var o = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  return (
    (n.m = e),
    (n.c = r),
    (n.d = function (e, r, t) {
      n.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, r) {
      if ((1 & r && (e = n(e)), 8 & r)) return e;
      if (4 & r && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (n.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & r && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            t,
            o,
            function (r) {
              return e[r];
            }.bind(null, o)
          );
      return t;
    }),
    (n.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(r, "a", r), r;
    }),
    (n.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (n.p = "/"),
    n((n.s = 8))
  );
})([
  function (e, r) {
    e.exports = require("irdd/lib/button");
  },
  function (e, r) {
    e.exports = require("irdd/lib/icon");
  },
  function (e, r) {
    e.exports = require("irdd/lib/enhance-table");
  },
  function (e, r) {
    e.exports = require("irdd/lib/ird-input-number");
  },
  function (e, r) {
    e.exports = require("irdd/lib/with-search");
  },
  function (e, r) {
    e.exports = require("irdd/lib/ird-select");
  },
  function (e, r) {
    e.exports = require("irdd/lib/ird-upload");
  },
  function (e, r) {
    e.exports = require("irdd/lib/ird-modal");
  },
  function (e, r, n) {
    e.exports = n(9);
  },
  function (e, r, n) {
    "use strict";
    n.r(r);
    var t = n(0),
      o = n.n(t),
      i = n(1),
      u = n.n(i),
      d = n(2),
      l = n.n(d),
      a = n(3),
      c = n.n(a),
      f = n(4),
      p = n.n(f),
      s = n(5),
      b = n.n(s),
      x = n(6),
      y = n.n(x),
      m = n(7),
      v = n.n(m);
    const I = [o.a, u.a, l.a, c.a, p.a, b.a, y.a, v.a],
      h = function (e, r = {}) {
        I.forEach((r) => {
          e.component(r.name, r);
        }),
          (e.prototype.$IRDD = {
            size: r.size || "small",
            zIndex: r.zIndex || 2e3,
          });
      };
    "undefined" != typeof window && window.Vue && h(window.Vue),
      (r.default = {
        install: h,
        Button: o(),
        Icon: u(),
        EnhanceTable: l(),
        IrdInputNumber: c(),
        WithSearch: p(),
        IrdSelect: b(),
        IrdUpload: y(),
        IrdModal: v(),
      });
  },
]).default;
