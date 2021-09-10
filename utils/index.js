module.exports = (function (t) {
  var n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var u = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(u.exports, u, u.exports, e), (u.l = !0), u.exports;
  }
  return (
    (e.m = t),
    (e.c = n),
    (e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
    }),
    (e.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.t = function (t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var u in t)
          e.d(
            r,
            u,
            function (n) {
              return t[n];
            }.bind(null, u)
          );
      return r;
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = "/"),
    e((e.s = 0))
  );
})([
  function (t, n, e) {
    t.exports = e(1);
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, n) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
            return;
          var e = [],
            r = !0,
            u = !1,
            o = void 0;
          try {
            for (
              var i, f = t[Symbol.iterator]();
              !(r = (i = f.next()).done) &&
              (e.push(i.value), !n || e.length !== n);
              r = !0
            );
          } catch (t) {
            (u = !0), (o = t);
          } finally {
            try {
              r || null == f.return || f.return();
            } finally {
              if (u) throw o;
            }
          }
          return e;
        })(t, n) ||
        (function (t, n) {
          if (!t) return;
          if ("string" == typeof t) return u(t, n);
          var e = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === e && t.constructor && (e = t.constructor.name);
          if ("Map" === e || "Set" === e) return Array.from(t);
          if (
            "Arguments" === e ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
          )
            return u(t, n);
        })(t, n) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function u(t, n) {
      (null == n || n > t.length) && (n = t.length);
      for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
      return r;
    }
    e.r(n),
      e.d(n, "PAGEPARAMS", function () {
        return o;
      }),
      e.d(n, "STARTTIME", function () {
        return i;
      }),
      e.d(n, "ENDTIME", function () {
        return f;
      }),
      e.d(n, "DATE_FORMAT", function () {
        return l;
      }),
      e.d(n, "DATE_TIME_FORMAT", function () {
        return a;
      }),
      e.d(n, "awaitWrap", function () {
        return c;
      }),
      e.d(n, "genID", function () {
        return d;
      }),
      e.d(n, "isEmail", function () {
        return s;
      }),
      e.d(n, "isInternetURL", function () {
        return p;
      }),
      e.d(n, "getBLen", function () {
        return g;
      }),
      e.d(n, "formatterNumber", function () {
        return y;
      }),
      e.d(n, "Rules", function () {
        return m;
      }),
      e.d(n, "returnFloat", function () {
        return b;
      }),
      e.d(n, "changeFields", function () {
        return h;
      });
    const o = { pageSize: 1e3, pageNum: 1 },
      i = "00:00:00",
      f = "23:59:59",
      l = "YYYY-MM-DD",
      a = "YYYY-MM-DD HH:mm:ss",
      c = (t) => t.then((t) => [null, t]).catch((t) => [t, null]),
      d = (t = 3) =>
        Number(Math.random().toString().substr(3, t) + Date.now()).toString(16);
    function s(t) {
      return new RegExp(
        "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"
      ).test(t);
    }
    function p(t) {
      return new RegExp("[a-zA-z]+://[^\\s]*").test(t);
    }
    const g = (t) => (null == t ? 0 : t.replace(/[^\x00-\xff]/g, "aa").length),
      y = (t, n = 2) => {
        if (m.thousandNumReg.test(t)) return t;
        let e = parseFloat(t, 10);
        if (isNaN(e)) return t;
        const u = r(e.toLocaleString().split("."), 2),
          o = u[0],
          i = u[1];
        return 0 === n ? o : o + "." + (void 0 === i ? "" : i).padEnd(n, "0");
      },
      m = {
        thousandNumReg: /^(-)?\d{1,3}(,\d{3})+(.\d+)?$/,
        phoneReg: /^1\d{10}$/,
        emojiReg:
          /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f])|(\ud83d[\ude80-\udeff])/,
      },
      b = (t = 0, n) => {
        if ((null == t || "null" == t) && n) return n;
        t = t || 0;
        let e = Math.round(100 * parseFloat(t)) / 100,
          r = e.toString().split(".");
        return 1 === r.length
          ? e.toString() + ".00"
          : r.length > 1
          ? (r[1].length < 2 && (e = e.toString() + "0"), e)
          : void 0;
      },
      h = (t, n, e) => {
        if (t.length) {
          if (!e) return t.find((t) => t.key === n);
          for (let r = 0; r < t.length; r++)
            if (t[r].key === n) {
              t[r].enums = e;
              break;
            }
        }
      };
  },
]);
