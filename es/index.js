!(function (e, r) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = r(
        require("irdd/lib/button"),
        require("irdd/lib/icon"),
        require("irdd/lib/enhance-table"),
        require("irdd/lib/ird-input-number"),
        require("irdd/lib/with-search"),
        require("irdd/lib/ird-select"),
        require("irdd/lib/ird-upload"),
        require("irdd/lib/ird-modal")
      ))
    : "function" == typeof define && define.amd
    ? define(
        [
          "irdd/lib/button",
          "irdd/lib/icon",
          "irdd/lib/enhance-table",
          "irdd/lib/ird-input-number",
          "irdd/lib/with-search",
          "irdd/lib/ird-select",
          "irdd/lib/ird-upload",
          "irdd/lib/ird-modal",
        ],
        r
      )
    : "object" == typeof exports
    ? (exports.IRDD = r(
        require("irdd/lib/button"),
        require("irdd/lib/icon"),
        require("irdd/lib/enhance-table"),
        require("irdd/lib/ird-input-number"),
        require("irdd/lib/with-search"),
        require("irdd/lib/ird-select"),
        require("irdd/lib/ird-upload"),
        require("irdd/lib/ird-modal")
      ))
    : (e.IRDD = r(
        e["irdd/lib/button"],
        e["irdd/lib/icon"],
        e["irdd/lib/enhance-table"],
        e["irdd/lib/ird-input-number"],
        e["irdd/lib/with-search"],
        e["irdd/lib/ird-select"],
        e["irdd/lib/ird-upload"],
        e["irdd/lib/ird-modal"]
      ));
})(window, function (e, r, i, n, t, d, o, u) {
  return (function (e) {
    var r = {};
    function i(n) {
      if (r[n]) return r[n].exports;
      var t = (r[n] = { i: n, l: !1, exports: {} });
      return e[n].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
    }
    return (
      (i.m = e),
      (i.c = r),
      (i.d = function (e, r, n) {
        i.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
      }),
      (i.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (i.t = function (e, r) {
        if ((1 & r && (e = i(e)), 8 & r)) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (i.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & r && "string" != typeof e)
        )
          for (var t in e)
            i.d(
              n,
              t,
              function (r) {
                return e[r];
              }.bind(null, t)
            );
        return n;
      }),
      (i.n = function (e) {
        var r =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return i.d(r, "a", r), r;
      }),
      (i.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
      }),
      (i.p = ""),
      i((i.s = 8))
    );
  })([
    function (r, i) {
      r.exports = e;
    },
    function (e, i) {
      e.exports = r;
    },
    function (e, r) {
      e.exports = i;
    },
    function (e, r) {
      e.exports = n;
    },
    function (e, r) {
      e.exports = t;
    },
    function (e, r) {
      e.exports = d;
    },
    function (e, r) {
      e.exports = o;
    },
    function (e, r) {
      e.exports = u;
    },
    function (e, r, i) {
      e.exports = i(9);
    },
    function (e, r, i) {
      "use strict";
      i.r(r);
      var n = i(0),
        t = i.n(n),
        d = i(1),
        o = i.n(d),
        u = i(2),
        l = i.n(u),
        b = i(3),
        c = i.n(b),
        a = i(4),
        f = i.n(a),
        p = i(5),
        s = i.n(p),
        m = i(6),
        x = i.n(m),
        y = i(7),
        h = i.n(y);
      const q = [t.a, o.a, l.a, c.a, f.a, s.a, x.a, h.a],
        w = function (e, r = {}) {
          q.forEach((r) => {
            e.component(r.name, r);
          }),
            (e.prototype.$IRDD = {
              size: r.size || "small",
              zIndex: r.zIndex || 2e3,
            });
        };
      "undefined" != typeof window && window.Vue && w(window.Vue),
        (r.default = {
          install: w,
          Button: t(),
          Icon: o(),
          EnhanceTable: l(),
          IrdInputNumber: c(),
          WithSearch: f(),
          IrdSelect: s(),
          IrdUpload: x(),
          IrdModal: h(),
        });
    },
  ]).default;
});
