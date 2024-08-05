import ze, { useState as L, useRef as On, useEffect as ve } from "react";
var Ce = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Vn() {
  if (We) return J;
  We = 1;
  var o = ze, a = Symbol.for("react.element"), c = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(p, f, m) {
    var v, x = {}, C = null, j = null;
    m !== void 0 && (C = "" + m), f.key !== void 0 && (C = "" + f.key), f.ref !== void 0 && (j = f.ref);
    for (v in f) s.call(f, v) && !E.hasOwnProperty(v) && (x[v] = f[v]);
    if (p && p.defaultProps) for (v in f = p.defaultProps, f) x[v] === void 0 && (x[v] = f[v]);
    return { $$typeof: a, type: p, key: C, ref: j, props: x, _owner: l.current };
  }
  return J.Fragment = c, J.jsx = _, J.jsxs = _, J;
}
var K = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function $n() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var o = ze, a = Symbol.for("react.element"), c = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), p = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), k = Symbol.iterator, O = "@@iterator";
    function B(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = k && e[k] || e[O];
      return typeof n == "function" ? n : null;
    }
    var T = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
          t[i - 1] = arguments[i];
        ie("error", e, t);
      }
    }
    function ie(e, n, t) {
      {
        var i = T.ReactDebugCurrentFrame, h = i.getStackAddendum();
        h !== "" && (n += "%s", t = t.concat([h]));
        var g = t.map(function(d) {
          return String(d);
        });
        g.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var se = !1, U = !1, W = !1, I = !1, V = !1, xe;
    xe = Symbol.for("react.module.reference");
    function tn(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === E || V || e === l || e === m || e === v || I || e === j || se || U || W || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === x || e.$$typeof === _ || e.$$typeof === p || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === xe || e.getModuleId !== void 0));
    }
    function rn(e, n, t) {
      var i = e.displayName;
      if (i)
        return i;
      var h = n.displayName || n.name || "";
      return h !== "" ? t + "(" + h + ")" : t;
    }
    function we(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case c:
          return "Portal";
        case E:
          return "Profiler";
        case l:
          return "StrictMode";
        case m:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var n = e;
            return we(n) + ".Consumer";
          case _:
            var t = e;
            return we(t._context) + ".Provider";
          case f:
            return rn(e, e.render, "ForwardRef");
          case x:
            var i = e.displayName || null;
            return i !== null ? i : $(e.type) || "Memo";
          case C: {
            var h = e, g = h._payload, d = h._init;
            try {
              return $(d(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, Z = 0, be, Ee, Pe, je, Te, Re, Se;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function an() {
      {
        if (Z === 0) {
          be = console.log, Ee = console.info, Pe = console.warn, je = console.error, Te = console.group, Re = console.groupCollapsed, Se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Z++;
      }
    }
    function on() {
      {
        if (Z--, Z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: be
            }),
            info: D({}, e, {
              value: Ee
            }),
            warn: D({}, e, {
              value: Pe
            }),
            error: D({}, e, {
              value: je
            }),
            group: D({}, e, {
              value: Te
            }),
            groupCollapsed: D({}, e, {
              value: Re
            }),
            groupEnd: D({}, e, {
              value: Se
            })
          });
        }
        Z < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = T.ReactCurrentDispatcher, le;
    function X(e, n, t) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (h) {
            var i = h.stack.trim().match(/\n( *(at )?)/);
            le = i && i[1] || "";
          }
        return `
` + le + e;
      }
    }
    var ue = !1, Q;
    {
      var sn = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new sn();
    }
    function He(e, n) {
      if (!e || ue)
        return "";
      {
        var t = Q.get(e);
        if (t !== void 0)
          return t;
      }
      var i;
      ue = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = ce.current, ce.current = null, an();
      try {
        if (n) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (R) {
              i = R;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (R) {
              i = R;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            i = R;
          }
          e();
        }
      } catch (R) {
        if (R && i && typeof R.stack == "string") {
          for (var u = R.stack.split(`
`), P = i.stack.split(`
`), y = u.length - 1, b = P.length - 1; y >= 1 && b >= 0 && u[y] !== P[b]; )
            b--;
          for (; y >= 1 && b >= 0; y--, b--)
            if (u[y] !== P[b]) {
              if (y !== 1 || b !== 1)
                do
                  if (y--, b--, b < 0 || u[y] !== P[b]) {
                    var H = `
` + u[y].replace(" at new ", " at ");
                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, H), H;
                  }
                while (y >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        ue = !1, ce.current = g, on(), Error.prepareStackTrace = h;
      }
      var A = e ? e.displayName || e.name : "", F = A ? X(A) : "";
      return typeof e == "function" && Q.set(e, F), F;
    }
    function cn(e, n, t) {
      return He(e, !1);
    }
    function ln(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function ee(e, n, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return He(e, ln(e));
      if (typeof e == "string")
        return X(e);
      switch (e) {
        case m:
          return X("Suspense");
        case v:
          return X("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return cn(e.render);
          case x:
            return ee(e.type, n, t);
          case C: {
            var i = e, h = i._payload, g = i._init;
            try {
              return ee(g(h), n, t);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, Oe = {}, Ve = T.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var n = e._owner, t = ee(e.type, e._source, n ? n.type : null);
        Ve.setExtraStackFrame(t);
      } else
        Ve.setExtraStackFrame(null);
    }
    function un(e, n, t, i, h) {
      {
        var g = Function.call.bind(q);
        for (var d in e)
          if (g(e, d)) {
            var u = void 0;
            try {
              if (typeof e[d] != "function") {
                var P = Error((i || "React class") + ": " + t + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              u = e[d](n, d, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              u = y;
            }
            u && !(u instanceof Error) && (ne(h), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, d, typeof u), ne(null)), u instanceof Error && !(u.message in Oe) && (Oe[u.message] = !0, ne(h), w("Failed %s type: %s", t, u.message), ne(null));
          }
      }
    }
    var dn = Array.isArray;
    function de(e) {
      return dn(e);
    }
    function fn(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, t = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function hn(e) {
      try {
        return $e(e), !1;
      } catch {
        return !0;
      }
    }
    function $e(e) {
      return "" + e;
    }
    function Be(e) {
      if (hn(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fn(e)), $e(e);
    }
    var Y = T.ReactCurrentOwner, pn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, Fe, fe;
    fe = {};
    function gn(e) {
      if (q.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function _n(e) {
      if (q.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function vn(e, n) {
      if (typeof e.ref == "string" && Y.current && n && Y.current.stateNode !== n) {
        var t = $(Y.current.type);
        fe[t] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(Y.current.type), e.ref), fe[t] = !0);
      }
    }
    function Cn(e, n) {
      {
        var t = function() {
          De || (De = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function mn(e, n) {
      {
        var t = function() {
          Fe || (Fe = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var yn = function(e, n, t, i, h, g, d) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: t,
        props: d,
        // Record the component responsible for creating this element.
        _owner: g
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function xn(e, n, t, i, h) {
      {
        var g, d = {}, u = null, P = null;
        t !== void 0 && (Be(t), u = "" + t), _n(n) && (Be(n.key), u = "" + n.key), gn(n) && (P = n.ref, vn(n, h));
        for (g in n)
          q.call(n, g) && !pn.hasOwnProperty(g) && (d[g] = n[g]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (g in y)
            d[g] === void 0 && (d[g] = y[g]);
        }
        if (u || P) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && Cn(d, b), P && mn(d, b);
        }
        return yn(e, u, P, h, i, Y.current, d);
      }
    }
    var he = T.ReactCurrentOwner, Le = T.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var n = e._owner, t = ee(e.type, e._source, n ? n.type : null);
        Le.setExtraStackFrame(t);
      } else
        Le.setExtraStackFrame(null);
    }
    var pe;
    pe = !1;
    function ge(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Ie() {
      {
        if (he.current) {
          var e = $(he.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function wn(e) {
      return "";
    }
    var Ne = {};
    function bn(e) {
      {
        var n = Ie();
        if (!n) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (n = `

Check the top-level render call using <` + t + ">.");
        }
        return n;
      }
    }
    function Ae(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = bn(n);
        if (Ne[t])
          return;
        Ne[t] = !0;
        var i = "";
        e && e._owner && e._owner !== he.current && (i = " It was passed a child from " + $(e._owner.type) + "."), N(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), N(null);
      }
    }
    function Me(e, n) {
      {
        if (typeof e != "object")
          return;
        if (de(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            ge(i) && Ae(i, n);
          }
        else if (ge(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = B(e);
          if (typeof h == "function" && h !== e.entries)
            for (var g = h.call(e), d; !(d = g.next()).done; )
              ge(d.value) && Ae(d.value, n);
        }
      }
    }
    function En(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var t;
        if (typeof n == "function")
          t = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === x))
          t = n.propTypes;
        else
          return;
        if (t) {
          var i = $(n);
          un(t, e.props, "prop", i, e);
        } else if (n.PropTypes !== void 0 && !pe) {
          pe = !0;
          var h = $(n);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pn(e) {
      {
        for (var n = Object.keys(e.props), t = 0; t < n.length; t++) {
          var i = n[t];
          if (i !== "children" && i !== "key") {
            N(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    var Ge = {};
    function Ue(e, n, t, i, h, g) {
      {
        var d = tn(e);
        if (!d) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = wn();
          P ? u += P : u += Ie();
          var y;
          e === null ? y = "null" : de(e) ? y = "array" : e !== void 0 && e.$$typeof === a ? (y = "<" + ($(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, u);
        }
        var b = xn(e, n, t, h, g);
        if (b == null)
          return b;
        if (d) {
          var H = n.children;
          if (H !== void 0)
            if (i)
              if (de(H)) {
                for (var A = 0; A < H.length; A++)
                  Me(H[A], e);
                Object.freeze && Object.freeze(H);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(H, e);
        }
        if (q.call(n, "key")) {
          var F = $(e), R = Object.keys(n).filter(function(Hn) {
            return Hn !== "key";
          }), _e = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ge[F + _e]) {
            var kn = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _e, F, kn, F), Ge[F + _e] = !0;
          }
        }
        return e === s ? Pn(b) : En(b), b;
      }
    }
    function jn(e, n, t) {
      return Ue(e, n, t, !0);
    }
    function Tn(e, n, t) {
      return Ue(e, n, t, !1);
    }
    var Rn = Tn, Sn = jn;
    K.Fragment = s, K.jsx = Rn, K.jsxs = Sn;
  }()), K;
}
process.env.NODE_ENV === "production" ? Ce.exports = Vn() : Ce.exports = $n();
var r = Ce.exports;
const Bn = "_container_rbh39_3", Dn = "_cursorPointer_rbh39_1", Fn = {
  container: Bn,
  cursorPointer: Dn
};
function u2() {
  return /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsx("div", { className: Fn.container, children: "Hell world !!!" }) });
}
const Xe = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='16'%20cy='16'%20r='16'%20fill='%23192737'/%3e%3cpath%20d='M15.5469%209.89326H19.445C20.8457%209.89326%2021.9808%2011.0379%2021.9808%2012.4504V13.2151C21.9808%2013.3238%2022.0681%2013.412%2022.176%2013.412H23.6619C23.7696%2013.412%2023.8571%2013.3238%2023.8571%2013.2151V11.5976C23.8571%2011.2714%2023.7288%2010.9601%2023.5006%2010.73L21.1499%208.35942C20.9206%208.12706%2020.6153%208%2020.2906%208H15.5469V9.89326Z'%20fill='url(%23paint0_linear_974_2916)'/%3e%3cpath%20d='M15.5469%2022.1069H19.4451C20.8458%2022.1069%2021.9809%2020.9622%2021.9809%2019.5496V16.6798C21.9809%2016.5711%2022.0682%2016.4829%2022.1761%2016.4829H23.6619C23.7697%2016.4829%2023.8571%2016.5711%2023.8571%2016.6798V20.4025C23.8571%2020.7287%2023.7289%2021.04%2023.5007%2021.2701L21.15%2023.6407C20.9207%2023.873%2020.6153%2024.0001%2020.2907%2024.0001H15.5469V22.1069Z'%20fill='url(%23paint1_linear_974_2916)'/%3e%3cpath%20d='M15.9286%208H11.5664C11.2463%208%2010.9331%208.13164%2010.7072%208.35942L8.3564%2010.73C8.12825%2010.9601%208%2011.2714%208%2011.5965V16H9.87742V12.4504C9.87742%2011.0379%2011.0125%209.89326%2012.4132%209.89326H15.9286V8Z'%20fill='url(%23paint2_linear_974_2916)'/%3e%3cpath%20d='M15.9286%2024H11.5664C11.2463%2024%2010.9331%2023.8683%2010.7072%2023.6405L8.3564%2021.2699C8.12825%2021.0399%208%2020.7285%208%2020.4035V15.7646H9.87742V19.5495C9.87742%2020.9621%2011.0125%2022.1067%2012.4132%2022.1067H15.9286V24Z'%20fill='url(%23paint3_linear_974_2916)'/%3e%3cpath%20d='M13.738%2017.2632C14.2949%2017.2632%2014.7464%2016.7919%2014.7464%2016.2106C14.7464%2015.6293%2014.2949%2015.158%2013.738%2015.158C13.181%2015.158%2012.7295%2015.6293%2012.7295%2016.2106C12.7295%2016.7919%2013.181%2017.2632%2013.738%2017.2632Z'%20fill='%23EFEFE5'/%3e%3cpath%20d='M18.2585%2017.2632C18.8154%2017.2632%2019.2669%2016.7919%2019.2669%2016.2106C19.2669%2015.6293%2018.8154%2015.158%2018.2585%2015.158C17.7015%2015.158%2017.25%2015.6293%2017.25%2016.2106C17.25%2016.7919%2017.7015%2017.2632%2018.2585%2017.2632Z'%20fill='%23EFEFE5'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_974_2916'%20x1='23.405'%20y1='13.4035'%20x2='16.0049'%20y2='9.59814'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%236C5AE6'/%3e%3cstop%20offset='1'%20stop-color='%23509ADD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_974_2916'%20x1='23.405'%20y1='18.5966'%20x2='16.0049'%20y2='22.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FC6756'/%3e%3cstop%20offset='1'%20stop-color='%23F8CF3E'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_974_2916'%20x1='15.6156'%20y1='9.78948'%20x2='9.99046'%20y2='16.7929'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23509ADD'/%3e%3cstop%20offset='1'%20stop-color='%2326F4D0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_974_2916'%20x1='14.2246'%20y1='22.1754'%20x2='9.75442'%20y2='15.7567'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F8CF3E'/%3e%3cstop%20offset='0.288195'%20stop-color='%23F8CF3E'/%3e%3cstop%20offset='1'%20stop-color='%2327F3D1'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", Ln = "_logo_1m0mc_1", In = {
  logo: Ln
};
function Qe({ className: o }) {
  return /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsx(
    "img",
    {
      src: Xe,
      alt: "chainGPT close",
      className: `${In.logo} ${o}`
    }
  ) });
}
const Nn = "_box_1n1ql_1", An = {
  box: Nn
};
function en() {
  return /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: An.box,
      children: [
        /* @__PURE__ */ r.jsx("div", { children: "👋 Have a question?" }),
        /* @__PURE__ */ r.jsx("div", { children: "Ask me anything about aelf!" })
      ]
    }
  ) });
}
const Mn = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.32285%2019.7478C5.2057%2019.8649%205.01575%2019.8649%204.89859%2019.7478L3.83793%2018.6871C3.72077%2018.57%203.72077%2018.38%203.83793%2018.2628L10.3079%2011.7929L3.83787%205.32282C3.72071%205.20567%203.72071%205.01572%203.83787%204.89856L4.89853%203.8379C5.01569%203.72074%205.20563%203.72074%205.32279%203.8379L11.7928%2010.3079L18.2629%203.83787C18.3801%203.72071%2018.57%203.72071%2018.6872%203.83787L19.7478%204.89853C19.865%205.01569%2019.865%205.20563%2019.7478%205.32279L13.2778%2011.7929L19.7478%2018.2629C19.8649%2018.38%2019.8649%2018.57%2019.7478%2018.6871L18.6871%2019.7478C18.57%2019.865%2018.38%2019.865%2018.2628%2019.7478L11.7928%2013.2778L5.32285%2019.7478Z'%20fill='%23808080'/%3e%3c/svg%3e", Gn = "_container_arsdy_1", Un = "_cursorPointer_arsdy_1", Wn = "_questionBox_arsdy_3", Zn = "_questionInnerBox_arsdy_7", qe = {
  container: Gn,
  cursorPointer: Un,
  questionBox: Wn,
  questionInnerBox: Zn
};
function qn({
  children: o
  // will be a page or nested layout
}) {
  return /* @__PURE__ */ r.jsx("div", { className: qe.questionBox, children: /* @__PURE__ */ r.jsx("div", { className: qe.questionInnerBox, children: o }) });
}
const Yn = "_container_1txyw_3", Jn = "_cursorPointer_1txyw_1", Kn = "_innerContainer_1txyw_7", zn = "_childrenContainer_1txyw_11", Xn = "_logoImage_1txyw_15", ae = {
  container: Yn,
  cursorPointer: Jn,
  innerContainer: Kn,
  childrenContainer: zn,
  logoImage: Xn
};
function me({
  children: o,
  className: a
}) {
  return /* @__PURE__ */ r.jsx("div", { className: `${ae.container} ${a}`, children: /* @__PURE__ */ r.jsxs("div", { className: ae.innerContainer, children: [
    /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(Qn, {}) }),
    /* @__PURE__ */ r.jsx("div", { className: ae.childrenContainer, children: o })
  ] }) });
}
function Qn() {
  return /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsx(
    "img",
    {
      src: Xe,
      alt: "chainGPT close",
      className: ae.logoImage
    }
  ) });
}
const et = "_container_1yyfw_1", nt = "_cursorPointer_1yyfw_1", tt = "_loadingFlex_1yyfw_3", rt = "_loadingHidden_1yyfw_7", at = "_chainGptDotTypingStage_1yyfw_16", ot = "_chainGptDotTyping_1yyfw_16", te = {
  container: et,
  cursorPointer: nt,
  loadingFlex: tt,
  loadingHidden: rt,
  chainGptDotTypingStage: at,
  chainGptDotTyping: ot
};
function it({
  loading: o = !0
}) {
  return /* @__PURE__ */ r.jsx("div", { className: `${te.chainGptDotTypingStage} 
    ${o ? te.loadingFlex : te.loadingHidden}`, children: /* @__PURE__ */ r.jsx("div", { className: te.chainGptDotTyping }) });
}
const st = "_container_1gv8g_2", ct = "_cursorPointer_1gv8g_1", lt = "_inputContainer_1gv8g_7", ut = "_chainGptInputPlaceholder_1gv8g_12", dt = "_image_1gv8g_28", z = {
  container: st,
  cursorPointer: ct,
  inputContainer: lt,
  chainGptInputPlaceholder: ut,
  image: dt
}, ft = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_974_3019'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_974_3019)'%3e%3cpath%20d='M3%2020V14L11%2012L3%2010V4L22%2012L3%2020Z'%20fill='%23D6D6D6'/%3e%3c/g%3e%3c/svg%3e", ht = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_975_3206'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_975_3206)'%3e%3cpath%20d='M3%2020V14L11%2012L3%2010V4L22%2012L3%2020Z'%20fill='%23127FFF'/%3e%3c/g%3e%3c/svg%3e", pt = ({
  sendMessage: o
}) => {
  const [a, c] = L(""), s = (_) => {
    c(_.target.value);
  }, l = () => {
    a.trim() !== "" && (o(a), c(""));
  }, E = (_) => {
    _.key === "Enter" && l();
  };
  return /* @__PURE__ */ r.jsxs("div", { className: z.container, children: [
    /* @__PURE__ */ r.jsx("div", { className: z.inputContainer, children: /* @__PURE__ */ r.jsx(
      "input",
      {
        className: z.chainGptInputPlaceholder,
        type: "text",
        value: a,
        onChange: s,
        onKeyDown: E,
        placeholder: "Ask me anything..."
      }
    ) }),
    /* @__PURE__ */ r.jsx("div", { className: z.image, children: /* @__PURE__ */ r.jsx(
      "img",
      {
        onClick: l,
        src: a.trim() ? ht : ft,
        alt: "send ready",
        className: z.cursorPointer
      }
    ) })
  ] });
}, gt = "_container_1v7dh_3", _t = "_cursorPointer_1v7dh_1", vt = "_messageBox_1v7dh_7", Ct = "_messageBoxInner_1v7dh_21", mt = "_inputBox_1v7dh_25", yt = "_answerBlock_1v7dh_29", xt = "_answerHidden_1v7dh_33", M = {
  container: gt,
  cursorPointer: _t,
  messageBox: vt,
  messageBoxInner: Ct,
  inputBox: mt,
  answerBlock: yt,
  answerHidden: xt
};
async function wt(o, a) {
  const c = o.getReader();
  let s;
  for (; !(s = await c.read()).done; )
    a(s.value);
}
function bt(o) {
  let a, c, s, l = !1;
  return function(_) {
    a === void 0 ? (a = _, c = 0, s = -1) : a = Pt(a, _);
    const p = a.length;
    let f = 0;
    for (; c < p; ) {
      l && (a[c] === 10 && (f = ++c), l = !1);
      let m = -1;
      for (; c < p && m === -1; ++c)
        switch (a[c]) {
          case 58:
            s === -1 && (s = c - f);
            break;
          case 13:
            l = !0;
          case 10:
            m = c;
            break;
        }
      if (m === -1)
        break;
      o(a.subarray(f, m), s), f = c, s = -1;
    }
    f === p ? a = void 0 : f !== 0 && (a = a.subarray(f), c -= f);
  };
}
function Et(o, a, c) {
  let s = Ye();
  const l = new TextDecoder();
  return function(_, p) {
    if (_.length === 0)
      c == null || c(s), s = Ye();
    else if (p > 0) {
      const f = l.decode(_.subarray(0, p)), m = p + (_[p + 1] === 32 ? 2 : 1), v = l.decode(_.subarray(m));
      switch (f) {
        case "data":
          s.data = s.data ? s.data + `
` + v : v;
          break;
        case "event":
          s.event = v;
          break;
        case "id":
          o(s.id = v);
          break;
        case "retry":
          const x = parseInt(v, 10);
          isNaN(x) || a(s.retry = x);
          break;
      }
    }
  };
}
function Pt(o, a) {
  const c = new Uint8Array(o.length + a.length);
  return c.set(o), c.set(a, o.length), c;
}
function Ye() {
  return {
    data: "",
    event: "",
    id: "",
    retry: void 0
  };
}
var jt = function(o, a) {
  var c = {};
  for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && a.indexOf(s) < 0 && (c[s] = o[s]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, s = Object.getOwnPropertySymbols(o); l < s.length; l++)
      a.indexOf(s[l]) < 0 && Object.prototype.propertyIsEnumerable.call(o, s[l]) && (c[s[l]] = o[s[l]]);
  return c;
};
const ye = "text/event-stream", Tt = 1e3, Je = "last-event-id";
function Rt(o, a) {
  var { signal: c, headers: s, onopen: l, onmessage: E, onclose: _, onerror: p, openWhenHidden: f, fetch: m } = a, v = jt(a, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]);
  return new Promise((x, C) => {
    const j = Object.assign({}, s);
    j.accept || (j.accept = ye);
    let k;
    function O() {
      k.abort(), document.hidden || U();
    }
    f || document.addEventListener("visibilitychange", O);
    let B = Tt, T = 0;
    function w() {
      document.removeEventListener("visibilitychange", O), window.clearTimeout(T), k.abort();
    }
    c == null || c.addEventListener("abort", () => {
      w(), x();
    });
    const ie = m ?? window.fetch, se = l ?? St;
    async function U() {
      var W;
      k = new AbortController();
      try {
        const I = await ie(o, Object.assign(Object.assign({}, v), { headers: j, signal: k.signal }));
        await se(I), await wt(I.body, bt(Et((V) => {
          V ? j[Je] = V : delete j[Je];
        }, (V) => {
          B = V;
        }, E))), _ == null || _(), w(), x();
      } catch (I) {
        if (!k.signal.aborted)
          try {
            const V = (W = p == null ? void 0 : p(I)) !== null && W !== void 0 ? W : B;
            window.clearTimeout(T), T = window.setTimeout(U, V);
          } catch (V) {
            w(), C(V);
          }
      }
    }
    U();
  });
}
function St(o) {
  const a = o.headers.get("content-type");
  if (!(a != null && a.startsWith(ye)))
    throw new Error(`Expected content-type to be ${ye}, Actual: ${a}`);
}
function kt({
  defaultList: o = [],
  Welcome: a,
  apiUri: c,
  historyLimit: s = 200
}) {
  const [l, E] = L(o), [_, p] = L(!1), [f, m] = L(!1), v = async (C) => {
    if (console.log("value: ", C), C.trim().length <= 0)
      return;
    const j = {
      text: C,
      type: "question"
    }, k = [...l, j];
    E(k), p(!0), m(!0);
    let O = "";
    await Rt(c, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: C
      }),
      onmessage(B) {
        O += B.data;
        const T = {
          text: O,
          type: "answer"
        };
        O && (p(!1), E([...k, T]));
      },
      onclose() {
        console.log("close"), p(!1), m(!1);
      },
      onerror(B) {
        console.error(B), O = "Please try again";
        const T = {
          text: O,
          type: "answer"
        };
        throw E([...k, T]), p(!1), m(!1), new Error("Response Error");
      }
    });
  };
  console.log("chatList", l, JSON.stringify(l));
  const x = On(null);
  return ve(() => {
    if (x.current && "scrollIntoView" in x.current && x.current.scrollIntoView({ behavior: "smooth" }), l && l.length) {
      const C = l.length > s ? l.slice(l.length - s) : l;
      localStorage.setItem("chainGPTChatHistory", JSON.stringify(C));
    }
  }, [l]), ve(() => {
    const C = localStorage.getItem("chainGPTChatHistory");
    C && E(JSON.parse(C));
  }, []), /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsxs("div", { className: M.container, children: [
    /* @__PURE__ */ r.jsx("div", { className: M.messageBox, children: /* @__PURE__ */ r.jsxs("div", { className: M.messageBoxInner, children: [
      a && /* @__PURE__ */ r.jsx(a, {}),
      l.map((C, j) => /* @__PURE__ */ r.jsx("div", { children: C.type === "question" ? /* @__PURE__ */ r.jsx(qn, { children: Ke(C.text) }) : /* @__PURE__ */ r.jsx(me, { children: Ke(C.text) }) }, j)),
      /* @__PURE__ */ r.jsx(me, { className: _ && f ? M.answerBlock : M.answerHidden, children: /* @__PURE__ */ r.jsx(it, { loading: _ }) }),
      /* @__PURE__ */ r.jsx("div", { ref: x })
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { className: M.inputBox, children: /* @__PURE__ */ r.jsx(pt, { sendMessage: v }) })
  ] }) });
}
function Ke(o) {
  return typeof o == "string" ? o : /* @__PURE__ */ r.jsx("input", {});
}
const Ht = "_container_gs954_1", Ot = "_cursorPointer_gs954_1", Vt = "_blank_gs954_3", $t = "_textListFlex_gs954_7", Bt = "_textListSpan_gs954_11", oe = {
  container: Ht,
  cursorPointer: Ot,
  blank: Vt,
  textListFlex: $t,
  textListSpan: Bt
};
function re({
  children: o
}) {
  return /* @__PURE__ */ r.jsxs("p", { className: oe.textListFlex, children: [
    /* @__PURE__ */ r.jsx("span", { className: oe.textListSpan, children: "·" }),
    o
  ] });
}
function Dt() {
  return /* @__PURE__ */ r.jsxs(me, { children: [
    /* @__PURE__ */ r.jsx("div", { children: "Hi there! I'm your AI assistant, here to help you explore and understand all about aelf! Ready to dive in? Here are a few things I can assist you with:" }),
    /* @__PURE__ */ r.jsx("div", { className: oe.blank }),
    /* @__PURE__ */ r.jsxs("div", { children: [
      /* @__PURE__ */ r.jsx(re, { children: " 🌟 “Tell me about aelf’s features.”" }),
      /* @__PURE__ */ r.jsx(re, { children: " 📈 “How can aelf improve my blockchain project?”" }),
      /* @__PURE__ */ r.jsx(re, { children: " 🛠️ “What tools and resources are available?”" }),
      /* @__PURE__ */ r.jsx(re, { children: " 🤝 “How do I get started with aelf?”" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: oe.blank }),
    /* @__PURE__ */ r.jsx("div", { children: "Ask me anything, and let’s get started!" })
  ] });
}
const Ft = "data:image/svg+xml,%3csvg%20width='83'%20height='18'%20viewBox='0%200%2083%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_974_3024)'%3e%3cmask%20id='mask0_974_3024'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='83'%20height='18'%3e%3cpath%20d='M82.5882%200H0V18H82.5882V0Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_974_3024)'%3e%3cpath%20d='M8.4707%202.12992H12.8459C14.418%202.12992%2015.692%203.41765%2015.692%205.00672V5.86694C15.692%205.98929%2015.7901%206.08845%2015.9112%206.08845H17.5789C17.6998%206.08845%2017.798%205.98929%2017.798%205.86694V4.04735C17.798%203.68034%2017.654%203.33008%2017.3979%203.07125L14.7594%200.404352C14.5021%200.142941%2014.1594%200%2013.795%200H8.4707V2.12992Z'%20fill='%23808080'/%3e%3cpath%20d='M8.47046%2015.8702H12.8457C14.4179%2015.8702%2015.6919%2014.5824%2015.6919%2012.9933V9.76472C15.6919%209.64237%2015.7899%209.54321%2015.911%209.54321H17.5787C17.6997%209.54321%2017.7978%209.64237%2017.7978%209.76472V13.9527C17.7978%2014.3197%2017.6538%2014.67%2017.3978%2014.9288L14.7593%2017.5957C14.5019%2017.8571%2014.1593%2018%2013.7949%2018H8.47046V15.8702Z'%20fill='%23808080'/%3e%3cpath%20d='M8.89894%200H4.00291C3.64365%200%203.29203%200.148092%203.0385%200.404352L0.400024%203.07125C0.143949%203.33008%200%203.68034%200%204.04606V9H2.1072V5.00672C2.1072%203.41765%203.38121%202.12992%204.95334%202.12992H8.89894V0Z'%20fill='%23808080'/%3e%3cpath%20d='M8.89894%2018.0001H4.00291C3.64365%2018.0001%203.29203%2017.8519%203.0385%2017.5957L0.400024%2014.9288C0.143949%2014.67%200%2014.3197%200%2013.954V8.73535H2.1072V12.9933C2.1072%2014.5824%203.38121%2015.8701%204.95334%2015.8701H8.89894V18.0001Z'%20fill='%23808080'/%3e%3cpath%20d='M24.8232%209.42679C24.8232%2012.2015%2026.4197%2013.6578%2028.5236%2013.6578H29.5383C31.1224%2013.6578%2032.5951%2012.5906%2032.8921%2010.5317H31.7412C31.4937%2011.6867%2030.5903%2012.5404%2029.031%2012.5404C26.6796%2012.5404%2025.9371%2011.0464%2025.9371%209.32641V8.67349C25.9371%206.95348%2026.6796%205.42179%2029.031%205.42179C30.4666%205.42179%2031.3699%206.17509%2031.667%207.22968H32.8551C32.4714%205.359%2031.0358%204.34204%2029.5383%204.34204H28.5236C26.4197%204.34204%2024.8232%205.79841%2024.8232%208.57306V9.42679Z'%20fill='%23808080'/%3e%3cpath%20d='M37.3913%207.22968C36.6735%207.22968%2035.8196%207.66909%2035.3741%208.30941V4.34204H34.2603V13.457H35.3741V10.3057C35.3741%208.76137%2036.4136%208.30941%2037.0325%208.30941C38.072%208.30941%2038.5176%208.78646%2038.5176%209.91644V13.457H39.6313V9.71558C39.6313%207.8449%2038.4185%207.22968%2037.3913%207.22968Z'%20fill='%23808080'/%3e%3cpath%20d='M46.6111%2011.9128V9.71569C46.6111%207.84497%2045.6581%207.22974%2044.5566%207.22974H43.3438C42.131%207.22974%2041.2771%208.14625%2041.2771%209.06277H42.3909C42.3909%208.661%2042.8364%208.30947%2043.4553%208.30947H44.1978C45.2992%208.30947%2045.4725%208.79918%2045.4973%209.64036H43.48C42.032%209.64036%2041.1162%2010.4187%2041.1162%2011.5236V11.6617C41.1162%2013.1934%2042.329%2013.6454%2043.48%2013.6454C44.2473%2013.6454%2045.1755%2013.457%2045.5962%2012.8042C45.8438%2013.4444%2046.5244%2013.457%2047.0937%2013.457V12.3773C46.8709%2012.3773%2046.6111%2012.302%2046.6111%2011.9128ZM43.8389%2012.5656C42.6755%2012.5656%2042.2301%2012.3145%2042.2301%2011.6114C42.2301%2011.2097%2042.4528%2010.5945%2043.8389%2010.5945H45.4973V11.5863C45.4973%2012.3899%2044.3339%2012.5656%2043.8389%2012.5656Z'%20fill='%23808080'/%3e%3cpath%20d='M49.0643%205.84865C49.4727%205.84865%2049.8069%205.52222%2049.8069%205.10789C49.8069%204.69358%2049.4727%204.34204%2049.0643%204.34204C48.6559%204.34204%2048.3218%204.69358%2048.3218%205.10789C48.3218%205.52222%2048.6559%205.84865%2049.0643%205.84865ZM48.5074%2013.457H49.6212V7.43059H48.5074V13.457Z'%20fill='%23808080'/%3e%3cpath%20d='M54.6618%207.22974C53.9068%207.22974%2052.991%207.71939%2052.5702%208.4225V7.43065H51.5305V13.457H52.6444V10.3057C52.6444%208.76143%2053.684%208.30947%2054.3028%208.30947C55.3421%208.30947%2055.7878%208.78652%2055.7878%209.9165V13.457H56.9017V9.71569C56.9017%207.84497%2055.6888%207.22974%2054.6618%207.22974Z'%20fill='%23808080'/%3e%3cpath%20d='M66.6783%208.88695C66.6434%208.88695%2062.6066%208.88695%2062.6066%208.88695V9.96663H65.5274V9.99178C65.3537%2011.4105%2064.5744%2012.5404%2062.5325%2012.5404C60.1808%2012.5404%2059.4381%2011.0464%2059.4381%209.32641V8.67349C59.4381%206.95348%2060.1808%205.42179%2062.5325%205.42179C64.2155%205.42179%2065.0075%206.20018%2065.3664%207.27992H66.5422C66.1086%205.38409%2064.7846%204.34204%2063.0396%204.34204H62.0248C59.9209%204.34204%2058.3247%205.79841%2058.3247%208.57306V9.42679C58.3247%2012.2015%2059.9209%2013.6578%2062.0248%2013.6578H63.0396C64.1165%2013.6578%2065.0567%2013.2686%2065.7005%2012.5279C66.3437%2011.7872%2066.9096%2010.3663%2066.6783%208.88695Z'%20fill='%23808080'/%3e%3cpath%20d='M72.4914%204.54297H68.4568V13.4571H69.5707V10.1802H72.4914C73.8896%2010.1802%2075.2883%209.56493%2075.2883%207.36781C75.2883%205.28371%2073.8896%204.54297%2072.4914%204.54297ZM72.2564%209.10042H69.5707V5.63526H72.2564C73.6673%205.63526%2074.1125%206.36341%2074.1125%207.36781C74.1125%208.37227%2073.6673%209.10042%2072.2564%209.10042Z'%20fill='%23808080'/%3e%3cpath%20d='M82.5884%204.54297H75.7817V5.62271H78.6284V13.4571H79.7423V5.62271H82.5884V4.54297Z'%20fill='%23808080'/%3e%3cpath%20d='M6.43999%2010.4212C7.06512%2010.4212%207.57187%209.8909%207.57187%209.23692C7.57187%208.58294%207.06512%208.05273%206.43999%208.05273C5.81486%208.05273%205.30811%208.58294%205.30811%209.23692C5.30811%209.8909%205.81486%2010.4212%206.43999%2010.4212Z'%20fill='%23808080'/%3e%3cpath%20d='M11.514%2010.4212C12.1391%2010.4212%2012.6458%209.8909%2012.6458%209.23692C12.6458%208.58294%2012.1391%208.05273%2011.514%208.05273C10.8888%208.05273%2010.3821%208.58294%2010.3821%209.23692C10.3821%209.8909%2010.8888%2010.4212%2011.514%2010.4212Z'%20fill='%23808080'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_974_3024'%3e%3crect%20width='82.5882'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Lt = "_container_1fc8a_1", It = "_cursorPointer_1fc8a_1", Nt = "_con_1fc8a_3", At = "_headerCon_1fc8a_9", Mt = "_close_1fc8a_15", Gt = "_chatBoxCon_1fc8a_20", Ut = "_imageCon_1fc8a_24", Wt = "_image_1fc8a_24", G = {
  container: Lt,
  cursorPointer: It,
  con: Nt,
  headerCon: At,
  close: Mt,
  chatBoxCon: Gt,
  imageCon: Ut,
  image: Wt
};
function nn({
  onClose: o,
  apiUri: a,
  historyLimit: c = 200
}) {
  return /* @__PURE__ */ r.jsxs("div", { className: G.con, children: [
    /* @__PURE__ */ r.jsxs("div", { className: G.headerCon, children: [
      /* @__PURE__ */ r.jsx("div", { children: "aelf AI Chatbot" }),
      /* @__PURE__ */ r.jsx(
        "img",
        {
          onClick: o,
          src: Mn,
          alt: "chainGPT logo",
          className: G.close
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: G.chatBoxCon, children: /* @__PURE__ */ r.jsx(
      kt,
      {
        Welcome: Dt,
        apiUri: a,
        historyLimit: c
      }
    ) }),
    /* @__PURE__ */ r.jsxs("div", { className: G.imageCon, children: [
      "Powered by",
      /* @__PURE__ */ r.jsx(
        "img",
        {
          src: Ft,
          alt: "chainGPT logo small",
          className: G.image
        }
      )
    ] })
  ] });
}
const Zt = "_container_1w0as_1", qt = "_cursorPointer_1w0as_1", Yt = "_chatCon_1w0as_3", Jt = "_tipConPosition_1w0as_9", Kt = "_tipConPositionHidden_1w0as_14", zt = "_tipCon_1w0as_9", Xt = "_tipConShow_1w0as_23", Qt = "_chatBlock_1w0as_27", e2 = "_chatHidden_1w0as_31", n2 = "_logo_1w0as_35", t2 = "_logoCon_1w0as_42", r2 = "_logoConHidden_1w0as_49", a2 = "_chatBoxCon_1w0as_53", o2 = "_chatBoxConHidden_1w0as_59", S = {
  container: Zt,
  cursorPointer: qt,
  chatCon: Yt,
  tipConPosition: Jt,
  tipConPositionHidden: Kt,
  tipCon: zt,
  tipConShow: Xt,
  chatBlock: Qt,
  chatHidden: e2,
  logo: n2,
  logoCon: t2,
  logoConHidden: r2,
  chatBoxCon: a2,
  chatBoxConHidden: o2
}, i2 = "_tailwindContainer_1h4qv_1", s2 = {
  tailwindContainer: i2
}, d2 = {
  TipBox: en,
  ChainGPTLogo: Qe,
  CustomChatBox: nn,
  ChatBoxButton: c2
};
function c2({
  apiUri: o,
  historyLimit: a = 200
}) {
  const [c, s] = L(!0), [l, E] = L(!0), [_, p] = L(!1);
  ve(() => {
    localStorage.getItem("chainGPT") || (s(!1), setTimeout(() => {
      localStorage.setItem("chainGPT", "chainGPT talked");
    }, 200)), setTimeout(() => {
      p(!0);
    }, 5e3);
  }, []);
  const f = !c && _;
  return /* @__PURE__ */ r.jsxs("div", { className: `${s2.tailwindContainer} ${S.chatCon}`, children: [
    /* @__PURE__ */ r.jsx("div", { className: `${S.tipConPosition} ${c && S.tipConPositionHidden}`, children: /* @__PURE__ */ r.jsx("div", { className: `${S.tipCon} ${f && S.tipConShow}`, children: /* @__PURE__ */ r.jsx(en, {}) }) }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `${S.chatBlock} ${S.logoCon} ${!l && S.logoConHidden}`,
        onClick: () => {
          s(!0), E(!1), localStorage.setItem("chainGPT", "chainGPT talked");
        },
        children: /* @__PURE__ */ r.jsx(Qe, { className: `${S.cursorPointer} ${S.logo}` })
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: `${S.chatBlock} ${S.chatBoxCon} ${l && S.chatBoxConHidden}`, children: /* @__PURE__ */ r.jsx(
      nn,
      {
        onClose: () => {
          E(!0);
        },
        apiUri: o,
        historyLimit: a
      }
    ) })
  ] });
}
export {
  d2 as ChainGPT,
  c2 as ChatBoxButton,
  u2 as MyComponentVite
};
