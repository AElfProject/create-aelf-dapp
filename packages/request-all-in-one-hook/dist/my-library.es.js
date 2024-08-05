var Rs = (n) => {
  throw TypeError(n);
};
var Nr = (n, e, t) => e.has(n) || Rs("Cannot " + t);
var k = (n, e, t) => (Nr(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Z = (n, e, t) => e.has(n) ? Rs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Q = (n, e, t, r) => (Nr(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t), ie = (n, e, t) => (Nr(n, e, "access private method"), t);
import * as ke from "react";
import ia, { useState as _u, useEffect as wu } from "react";
var Vi = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(n) {
    return this.listeners.add(n), this.onSubscribe(), () => {
      this.listeners.delete(n), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Xn = typeof window > "u" || "Deno" in globalThis;
function ku() {
}
function As(n) {
  return typeof n == "number" && n >= 0 && n !== 1 / 0;
}
function Su(n, e) {
  return Math.max(n + (e || 0) - Date.now(), 0);
}
function Bn(n, e) {
  return typeof n == "function" ? n(e) : n;
}
function xe(n, e) {
  return typeof n == "function" ? n(e) : n;
}
function sa(n, e) {
  if (n === e)
    return n;
  const t = Cs(n) && Cs(e);
  if (t || Fs(n) && Fs(e)) {
    const r = t ? n : Object.keys(n), i = r.length, s = t ? e : Object.keys(e), o = s.length, a = t ? [] : {};
    let c = 0;
    for (let u = 0; u < o; u++) {
      const l = t ? u : s[u];
      (!t && r.includes(l) || t) && n[l] === void 0 && e[l] === void 0 ? (a[l] = void 0, c++) : (a[l] = sa(n[l], e[l]), a[l] === n[l] && n[l] !== void 0 && c++);
    }
    return i === o && c === i ? n : a;
  }
  return e;
}
function Gr(n, e) {
  if (!e || Object.keys(n).length !== Object.keys(e).length)
    return !1;
  for (const t in n)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
function Cs(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function Fs(n) {
  if (!Ls(n))
    return !1;
  const e = n.constructor;
  if (e === void 0)
    return !0;
  const t = e.prototype;
  return !(!Ls(t) || !t.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(n) !== Object.prototype);
}
function Ls(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function Ps(n, e, t) {
  return typeof t.structuralSharing == "function" ? t.structuralSharing(n, e) : t.structuralSharing !== !1 ? sa(n, e) : e;
}
var tt, Qe, _t, ta, xu = (ta = class extends Vi {
  constructor() {
    super();
    Z(this, tt);
    Z(this, Qe);
    Z(this, _t);
    Q(this, _t, (e) => {
      if (!Xn && window.addEventListener) {
        const t = () => e();
        return window.addEventListener("visibilitychange", t, !1), () => {
          window.removeEventListener("visibilitychange", t);
        };
      }
    });
  }
  onSubscribe() {
    k(this, Qe) || this.setEventListener(k(this, _t));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = k(this, Qe)) == null || e.call(this), Q(this, Qe, void 0));
  }
  setEventListener(e) {
    var t;
    Q(this, _t, e), (t = k(this, Qe)) == null || t.call(this), Q(this, Qe, e((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(e) {
    k(this, tt) !== e && (Q(this, tt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    var e;
    return typeof k(this, tt) == "boolean" ? k(this, tt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, tt = new WeakMap(), Qe = new WeakMap(), _t = new WeakMap(), ta), Nu = new xu(), wt, ze, kt, na, Iu = (na = class extends Vi {
  constructor() {
    super();
    Z(this, wt, !0);
    Z(this, ze);
    Z(this, kt);
    Q(this, kt, (e) => {
      if (!Xn && window.addEventListener) {
        const t = () => e(!0), r = () => e(!1);
        return window.addEventListener("online", t, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", t), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    k(this, ze) || this.setEventListener(k(this, kt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = k(this, ze)) == null || e.call(this), Q(this, ze, void 0));
  }
  setEventListener(e) {
    var t;
    Q(this, kt, e), (t = k(this, ze)) == null || t.call(this), Q(this, ze, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    k(this, wt) !== e && (Q(this, wt, e), this.listeners.forEach((r) => {
      r(e);
    }));
  }
  isOnline() {
    return k(this, wt);
  }
}, wt = new WeakMap(), ze = new WeakMap(), kt = new WeakMap(), na), Du = new Iu();
function Ru(n) {
  return (n ?? "online") === "online" ? Du.isOnline() : !0;
}
function Au() {
  let n = [], e = 0, t = (f) => {
    f();
  }, r = (f) => {
    f();
  }, i = (f) => setTimeout(f, 0);
  const s = (f) => {
    i = f;
  }, o = (f) => {
    let d;
    e++;
    try {
      d = f();
    } finally {
      e--, e || u();
    }
    return d;
  }, a = (f) => {
    e ? n.push(f) : i(() => {
      t(f);
    });
  }, c = (f) => (...d) => {
    a(() => {
      f(...d);
    });
  }, u = () => {
    const f = n;
    n = [], f.length && i(() => {
      r(() => {
        f.forEach((d) => {
          t(d);
        });
      });
    });
  };
  return {
    batch: o,
    batchCalls: c,
    schedule: a,
    setNotifyFunction: (f) => {
      t = f;
    },
    setBatchNotifyFunction: (f) => {
      r = f;
    },
    setScheduler: s
  };
}
var oa = Au();
function Cu(n, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ru(e.networkMode) ? "fetching" : "paused",
    ...n === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
var ge, V, mn, ye, nt, St, Se, gn, xt, Nt, rt, it, We, It, Y, en, Jr, Kr, Hr, Xr, Zr, ei, ti, aa, ra, Fu = (ra = class extends Vi {
  constructor(e, t) {
    super();
    Z(this, Y);
    Z(this, ge);
    Z(this, V);
    Z(this, mn);
    Z(this, ye);
    Z(this, nt);
    Z(this, St);
    Z(this, Se);
    Z(this, gn);
    Z(this, xt);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    Z(this, Nt);
    Z(this, rt);
    Z(this, it);
    Z(this, We);
    Z(this, It, /* @__PURE__ */ new Set());
    this.options = t, Q(this, ge, e), Q(this, Se, null), this.bindMethods(), this.setOptions(t);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (k(this, V).addObserver(this), js(k(this, V), this.options) ? ie(this, Y, en).call(this) : this.updateResult(), ie(this, Y, Xr).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ni(
      k(this, V),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return ni(
      k(this, V),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ie(this, Y, Zr).call(this), ie(this, Y, ei).call(this), k(this, V).removeObserver(this);
  }
  setOptions(e, t) {
    const r = this.options, i = k(this, V);
    if (this.options = k(this, ge).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof xe(this.options.enabled, k(this, V)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    ie(this, Y, ti).call(this), k(this, V).setOptions(this.options), r._defaulted && !Gr(this.options, r) && k(this, ge).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: k(this, V),
      observer: this
    });
    const s = this.hasListeners();
    s && Ms(
      k(this, V),
      i,
      this.options,
      r
    ) && ie(this, Y, en).call(this), this.updateResult(t), s && (k(this, V) !== i || xe(this.options.enabled, k(this, V)) !== xe(r.enabled, k(this, V)) || Bn(this.options.staleTime, k(this, V)) !== Bn(r.staleTime, k(this, V))) && ie(this, Y, Jr).call(this);
    const o = ie(this, Y, Kr).call(this);
    s && (k(this, V) !== i || xe(this.options.enabled, k(this, V)) !== xe(r.enabled, k(this, V)) || o !== k(this, We)) && ie(this, Y, Hr).call(this, o);
  }
  getOptimisticResult(e) {
    const t = k(this, ge).getQueryCache().build(k(this, ge), e), r = this.createResult(t, e);
    return Pu(this, r) && (Q(this, ye, r), Q(this, St, this.options), Q(this, nt, k(this, V).state)), r;
  }
  getCurrentResult() {
    return k(this, ye);
  }
  trackResult(e, t) {
    const r = {};
    return Object.keys(e).forEach((i) => {
      Object.defineProperty(r, i, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(i), t == null || t(i), e[i])
      });
    }), r;
  }
  trackProp(e) {
    k(this, It).add(e);
  }
  getCurrentQuery() {
    return k(this, V);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const t = k(this, ge).defaultQueryOptions(e), r = k(this, ge).getQueryCache().build(k(this, ge), t);
    return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, t));
  }
  fetch(e) {
    return ie(this, Y, en).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), k(this, ye)));
  }
  createResult(e, t) {
    var C;
    const r = k(this, V), i = this.options, s = k(this, ye), o = k(this, nt), a = k(this, St), u = e !== r ? e.state : k(this, mn), { state: l } = e;
    let h = { ...l }, f = !1, d;
    if (t._optimisticResults) {
      const A = this.hasListeners(), B = !A && js(e, t), K = A && Ms(e, r, t, i);
      (B || K) && (h = {
        ...h,
        ...Cu(l.data, e.options)
      }), t._optimisticResults === "isRestoring" && (h.fetchStatus = "idle");
    }
    let { error: y, errorUpdatedAt: g, status: E } = h;
    if (t.select && h.data !== void 0)
      if (s && h.data === (o == null ? void 0 : o.data) && t.select === k(this, gn))
        d = k(this, xt);
      else
        try {
          Q(this, gn, t.select), d = t.select(h.data), d = Ps(s == null ? void 0 : s.data, d, t), Q(this, xt, d), Q(this, Se, null);
        } catch (A) {
          Q(this, Se, A);
        }
    else
      d = h.data;
    if (t.placeholderData !== void 0 && d === void 0 && E === "pending") {
      let A;
      if (s != null && s.isPlaceholderData && t.placeholderData === (a == null ? void 0 : a.placeholderData))
        A = s.data;
      else if (A = typeof t.placeholderData == "function" ? t.placeholderData(
        (C = k(this, Nt)) == null ? void 0 : C.state.data,
        k(this, Nt)
      ) : t.placeholderData, t.select && A !== void 0)
        try {
          A = t.select(A), Q(this, Se, null);
        } catch (B) {
          Q(this, Se, B);
        }
      A !== void 0 && (E = "success", d = Ps(
        s == null ? void 0 : s.data,
        A,
        t
      ), f = !0);
    }
    k(this, Se) && (y = k(this, Se), d = k(this, xt), g = Date.now(), E = "error");
    const m = h.fetchStatus === "fetching", _ = E === "pending", b = E === "error", x = _ && m, S = d !== void 0;
    return {
      status: E,
      fetchStatus: h.fetchStatus,
      isPending: _,
      isSuccess: E === "success",
      isError: b,
      isInitialLoading: x,
      isLoading: x,
      data: d,
      dataUpdatedAt: h.dataUpdatedAt,
      error: y,
      errorUpdatedAt: g,
      failureCount: h.fetchFailureCount,
      failureReason: h.fetchFailureReason,
      errorUpdateCount: h.errorUpdateCount,
      isFetched: h.dataUpdateCount > 0 || h.errorUpdateCount > 0,
      isFetchedAfterMount: h.dataUpdateCount > u.dataUpdateCount || h.errorUpdateCount > u.errorUpdateCount,
      isFetching: m,
      isRefetching: m && !_,
      isLoadingError: b && !S,
      isPaused: h.fetchStatus === "paused",
      isPlaceholderData: f,
      isRefetchError: b && S,
      isStale: qi(e, t),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const t = k(this, ye), r = this.createResult(k(this, V), this.options);
    if (Q(this, nt, k(this, V).state), Q(this, St, this.options), k(this, nt).data !== void 0 && Q(this, Nt, k(this, V)), Gr(r, t))
      return;
    Q(this, ye, r);
    const i = {}, s = () => {
      if (!t)
        return !0;
      const { notifyOnChangeProps: o } = this.options, a = typeof o == "function" ? o() : o;
      if (a === "all" || !a && !k(this, It).size)
        return !0;
      const c = new Set(
        a ?? k(this, It)
      );
      return this.options.throwOnError && c.add("error"), Object.keys(k(this, ye)).some((u) => {
        const l = u;
        return k(this, ye)[l] !== t[l] && c.has(l);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && s() && (i.listeners = !0), ie(this, Y, aa).call(this, { ...i, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ie(this, Y, Xr).call(this);
  }
}, ge = new WeakMap(), V = new WeakMap(), mn = new WeakMap(), ye = new WeakMap(), nt = new WeakMap(), St = new WeakMap(), Se = new WeakMap(), gn = new WeakMap(), xt = new WeakMap(), Nt = new WeakMap(), rt = new WeakMap(), it = new WeakMap(), We = new WeakMap(), It = new WeakMap(), Y = new WeakSet(), en = function(e) {
  ie(this, Y, ti).call(this);
  let t = k(this, V).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (t = t.catch(ku)), t;
}, Jr = function() {
  ie(this, Y, Zr).call(this);
  const e = Bn(
    this.options.staleTime,
    k(this, V)
  );
  if (Xn || k(this, ye).isStale || !As(e))
    return;
  const r = Su(k(this, ye).dataUpdatedAt, e) + 1;
  Q(this, rt, setTimeout(() => {
    k(this, ye).isStale || this.updateResult();
  }, r));
}, Kr = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(k(this, V)) : this.options.refetchInterval) ?? !1;
}, Hr = function(e) {
  ie(this, Y, ei).call(this), Q(this, We, e), !(Xn || xe(this.options.enabled, k(this, V)) === !1 || !As(k(this, We)) || k(this, We) === 0) && Q(this, it, setInterval(() => {
    (this.options.refetchIntervalInBackground || Nu.isFocused()) && ie(this, Y, en).call(this);
  }, k(this, We)));
}, Xr = function() {
  ie(this, Y, Jr).call(this), ie(this, Y, Hr).call(this, ie(this, Y, Kr).call(this));
}, Zr = function() {
  k(this, rt) && (clearTimeout(k(this, rt)), Q(this, rt, void 0));
}, ei = function() {
  k(this, it) && (clearInterval(k(this, it)), Q(this, it, void 0));
}, ti = function() {
  const e = k(this, ge).getQueryCache().build(k(this, ge), this.options);
  if (e === k(this, V))
    return;
  const t = k(this, V);
  Q(this, V, e), Q(this, mn, e.state), this.hasListeners() && (t == null || t.removeObserver(this), e.addObserver(this));
}, aa = function(e) {
  oa.batch(() => {
    e.listeners && this.listeners.forEach((t) => {
      t(k(this, ye));
    }), k(this, ge).getQueryCache().notify({
      query: k(this, V),
      type: "observerResultsUpdated"
    });
  });
}, ra);
function Lu(n, e) {
  return xe(e.enabled, n) !== !1 && n.state.data === void 0 && !(n.state.status === "error" && e.retryOnMount === !1);
}
function js(n, e) {
  return Lu(n, e) || n.state.data !== void 0 && ni(n, e, e.refetchOnMount);
}
function ni(n, e, t) {
  if (xe(e.enabled, n) !== !1) {
    const r = typeof t == "function" ? t(n) : t;
    return r === "always" || r !== !1 && qi(n, e);
  }
  return !1;
}
function Ms(n, e, t, r) {
  return (n !== e || xe(r.enabled, n) === !1) && (!t.suspense || n.state.status !== "error") && qi(n, t);
}
function qi(n, e) {
  return xe(e.enabled, n) !== !1 && n.isStaleByTime(Bn(e.staleTime, n));
}
function Pu(n, e) {
  return !Gr(n.getCurrentResult(), e);
}
var Wt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vs;
function ju() {
  if (Vs) return Wt;
  Vs = 1;
  var n = ia, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, c, u) {
    var l, h = {}, f = null, d = null;
    u !== void 0 && (f = "" + u), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (d = c.ref);
    for (l in c) r.call(c, l) && !s.hasOwnProperty(l) && (h[l] = c[l]);
    if (a && a.defaultProps) for (l in c = a.defaultProps, c) h[l] === void 0 && (h[l] = c[l]);
    return { $$typeof: e, type: a, key: f, ref: d, props: h, _owner: i.current };
  }
  return Wt.Fragment = t, Wt.jsx = o, Wt.jsxs = o, Wt;
}
var Yt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qs;
function Mu() {
  return qs || (qs = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ia, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), y = Symbol.iterator, g = "@@iterator";
    function E(p) {
      if (p === null || typeof p != "object")
        return null;
      var w = y && p[y] || p[g];
      return typeof w == "function" ? w : null;
    }
    var m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(p) {
      {
        for (var w = arguments.length, N = new Array(w > 1 ? w - 1 : 0), P = 1; P < w; P++)
          N[P - 1] = arguments[P];
        b("error", p, N);
      }
    }
    function b(p, w, N) {
      {
        var P = m.ReactDebugCurrentFrame, z = P.getStackAddendum();
        z !== "" && (w += "%s", N = N.concat([z]));
        var J = N.map(function(U) {
          return String(U);
        });
        J.unshift("Warning: " + w), Function.prototype.apply.call(console[p], console, J);
      }
    }
    var x = !1, S = !1, D = !1, C = !1, A = !1, B;
    B = Symbol.for("react.module.reference");
    function K(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === s || A || p === i || p === u || p === l || C || p === d || x || S || D || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === h || p.$$typeof === o || p.$$typeof === a || p.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === B || p.getModuleId !== void 0));
    }
    function Me(p, w, N) {
      var P = p.displayName;
      if (P)
        return P;
      var z = w.displayName || w.name || "";
      return z !== "" ? N + "(" + z + ")" : N;
    }
    function Ae(p) {
      return p.displayName || "Context";
    }
    function G(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case a:
            var w = p;
            return Ae(w) + ".Consumer";
          case o:
            var N = p;
            return Ae(N._context) + ".Provider";
          case c:
            return Me(p, p.render, "ForwardRef");
          case h:
            var P = p.displayName || null;
            return P !== null ? P : G(p.type) || "Memo";
          case f: {
            var z = p, J = z._payload, U = z._init;
            try {
              return G(U(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var fe = Object.assign, Ce = 0, qt, wn, Bt, pe, kn, Ut, Fe;
    function ct() {
    }
    ct.__reactDisabledLog = !0;
    function Sn() {
      {
        if (Ce === 0) {
          qt = console.log, wn = console.info, Bt = console.warn, pe = console.error, kn = console.group, Ut = console.groupCollapsed, Fe = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: ct,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        Ce++;
      }
    }
    function Hc() {
      {
        if (Ce--, Ce === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: fe({}, p, {
              value: qt
            }),
            info: fe({}, p, {
              value: wn
            }),
            warn: fe({}, p, {
              value: Bt
            }),
            error: fe({}, p, {
              value: pe
            }),
            group: fe({}, p, {
              value: kn
            }),
            groupCollapsed: fe({}, p, {
              value: Ut
            }),
            groupEnd: fe({}, p, {
              value: Fe
            })
          });
        }
        Ce < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var br = m.ReactCurrentDispatcher, Er;
    function xn(p, w, N) {
      {
        if (Er === void 0)
          try {
            throw Error();
          } catch (z) {
            var P = z.stack.trim().match(/\n( *(at )?)/);
            Er = P && P[1] || "";
          }
        return `
` + Er + p;
      }
    }
    var Tr = !1, Nn;
    {
      var Xc = typeof WeakMap == "function" ? WeakMap : Map;
      Nn = new Xc();
    }
    function ms(p, w) {
      if (!p || Tr)
        return "";
      {
        var N = Nn.get(p);
        if (N !== void 0)
          return N;
      }
      var P;
      Tr = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = br.current, br.current = null, Sn();
      try {
        if (w) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch (me) {
              P = me;
            }
            Reflect.construct(p, [], U);
          } else {
            try {
              U.call();
            } catch (me) {
              P = me;
            }
            p.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (me) {
            P = me;
          }
          p();
        }
      } catch (me) {
        if (me && P && typeof me.stack == "string") {
          for (var j = me.stack.split(`
`), de = P.stack.split(`
`), ne = j.length - 1, re = de.length - 1; ne >= 1 && re >= 0 && j[ne] !== de[re]; )
            re--;
          for (; ne >= 1 && re >= 0; ne--, re--)
            if (j[ne] !== de[re]) {
              if (ne !== 1 || re !== 1)
                do
                  if (ne--, re--, re < 0 || j[ne] !== de[re]) {
                    var Ee = `
` + j[ne].replace(" at new ", " at ");
                    return p.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", p.displayName)), typeof p == "function" && Nn.set(p, Ee), Ee;
                  }
                while (ne >= 1 && re >= 0);
              break;
            }
        }
      } finally {
        Tr = !1, br.current = J, Hc(), Error.prepareStackTrace = z;
      }
      var lt = p ? p.displayName || p.name : "", Xe = lt ? xn(lt) : "";
      return typeof p == "function" && Nn.set(p, Xe), Xe;
    }
    function Zc(p, w, N) {
      return ms(p, !1);
    }
    function eu(p) {
      var w = p.prototype;
      return !!(w && w.isReactComponent);
    }
    function In(p, w, N) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return ms(p, eu(p));
      if (typeof p == "string")
        return xn(p);
      switch (p) {
        case u:
          return xn("Suspense");
        case l:
          return xn("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case c:
            return Zc(p.render);
          case h:
            return In(p.type, w, N);
          case f: {
            var P = p, z = P._payload, J = P._init;
            try {
              return In(J(z), w, N);
            } catch {
            }
          }
        }
      return "";
    }
    var Qt = Object.prototype.hasOwnProperty, gs = {}, bs = m.ReactDebugCurrentFrame;
    function Dn(p) {
      if (p) {
        var w = p._owner, N = In(p.type, p._source, w ? w.type : null);
        bs.setExtraStackFrame(N);
      } else
        bs.setExtraStackFrame(null);
    }
    function tu(p, w, N, P, z) {
      {
        var J = Function.call.bind(Qt);
        for (var U in p)
          if (J(p, U)) {
            var j = void 0;
            try {
              if (typeof p[U] != "function") {
                var de = Error((P || "React class") + ": " + N + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              j = p[U](w, U, P, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ne) {
              j = ne;
            }
            j && !(j instanceof Error) && (Dn(z), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", N, U, typeof j), Dn(null)), j instanceof Error && !(j.message in gs) && (gs[j.message] = !0, Dn(z), _("Failed %s type: %s", N, j.message), Dn(null));
          }
      }
    }
    var nu = Array.isArray;
    function Or(p) {
      return nu(p);
    }
    function ru(p) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, N = w && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return N;
      }
    }
    function iu(p) {
      try {
        return Es(p), !1;
      } catch {
        return !0;
      }
    }
    function Es(p) {
      return "" + p;
    }
    function Ts(p) {
      if (iu(p))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ru(p)), Es(p);
    }
    var zt = m.ReactCurrentOwner, su = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Os, _s, _r;
    _r = {};
    function ou(p) {
      if (Qt.call(p, "ref")) {
        var w = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function au(p) {
      if (Qt.call(p, "key")) {
        var w = Object.getOwnPropertyDescriptor(p, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function cu(p, w) {
      if (typeof p.ref == "string" && zt.current && w && zt.current.stateNode !== w) {
        var N = G(zt.current.type);
        _r[N] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(zt.current.type), p.ref), _r[N] = !0);
      }
    }
    function uu(p, w) {
      {
        var N = function() {
          Os || (Os = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        N.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: N,
          configurable: !0
        });
      }
    }
    function lu(p, w) {
      {
        var N = function() {
          _s || (_s = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        N.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: N,
          configurable: !0
        });
      }
    }
    var hu = function(p, w, N, P, z, J, U) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: p,
        key: w,
        ref: N,
        props: U,
        // Record the component responsible for creating this element.
        _owner: J
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function fu(p, w, N, P, z) {
      {
        var J, U = {}, j = null, de = null;
        N !== void 0 && (Ts(N), j = "" + N), au(w) && (Ts(w.key), j = "" + w.key), ou(w) && (de = w.ref, cu(w, z));
        for (J in w)
          Qt.call(w, J) && !su.hasOwnProperty(J) && (U[J] = w[J]);
        if (p && p.defaultProps) {
          var ne = p.defaultProps;
          for (J in ne)
            U[J] === void 0 && (U[J] = ne[J]);
        }
        if (j || de) {
          var re = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          j && uu(U, re), de && lu(U, re);
        }
        return hu(p, j, de, z, P, zt.current, U);
      }
    }
    var wr = m.ReactCurrentOwner, ws = m.ReactDebugCurrentFrame;
    function ut(p) {
      if (p) {
        var w = p._owner, N = In(p.type, p._source, w ? w.type : null);
        ws.setExtraStackFrame(N);
      } else
        ws.setExtraStackFrame(null);
    }
    var kr;
    kr = !1;
    function Sr(p) {
      return typeof p == "object" && p !== null && p.$$typeof === e;
    }
    function ks() {
      {
        if (wr.current) {
          var p = G(wr.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function pu(p) {
      return "";
    }
    var Ss = {};
    function du(p) {
      {
        var w = ks();
        if (!w) {
          var N = typeof p == "string" ? p : p.displayName || p.name;
          N && (w = `

Check the top-level render call using <` + N + ">.");
        }
        return w;
      }
    }
    function xs(p, w) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var N = du(w);
        if (Ss[N])
          return;
        Ss[N] = !0;
        var P = "";
        p && p._owner && p._owner !== wr.current && (P = " It was passed a child from " + G(p._owner.type) + "."), ut(p), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, P), ut(null);
      }
    }
    function Ns(p, w) {
      {
        if (typeof p != "object")
          return;
        if (Or(p))
          for (var N = 0; N < p.length; N++) {
            var P = p[N];
            Sr(P) && xs(P, w);
          }
        else if (Sr(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var z = E(p);
          if (typeof z == "function" && z !== p.entries)
            for (var J = z.call(p), U; !(U = J.next()).done; )
              Sr(U.value) && xs(U.value, w);
        }
      }
    }
    function yu(p) {
      {
        var w = p.type;
        if (w == null || typeof w == "string")
          return;
        var N;
        if (typeof w == "function")
          N = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === h))
          N = w.propTypes;
        else
          return;
        if (N) {
          var P = G(w);
          tu(N, p.props, "prop", P, p);
        } else if (w.PropTypes !== void 0 && !kr) {
          kr = !0;
          var z = G(w);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vu(p) {
      {
        for (var w = Object.keys(p.props), N = 0; N < w.length; N++) {
          var P = w[N];
          if (P !== "children" && P !== "key") {
            ut(p), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), ut(null);
            break;
          }
        }
        p.ref !== null && (ut(p), _("Invalid attribute `ref` supplied to `React.Fragment`."), ut(null));
      }
    }
    var Is = {};
    function Ds(p, w, N, P, z, J) {
      {
        var U = K(p);
        if (!U) {
          var j = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = pu();
          de ? j += de : j += ks();
          var ne;
          p === null ? ne = "null" : Or(p) ? ne = "array" : p !== void 0 && p.$$typeof === e ? (ne = "<" + (G(p.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : ne = typeof p, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ne, j);
        }
        var re = fu(p, w, N, z, J);
        if (re == null)
          return re;
        if (U) {
          var Ee = w.children;
          if (Ee !== void 0)
            if (P)
              if (Or(Ee)) {
                for (var lt = 0; lt < Ee.length; lt++)
                  Ns(Ee[lt], p);
                Object.freeze && Object.freeze(Ee);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ns(Ee, p);
        }
        if (Qt.call(w, "key")) {
          var Xe = G(p), me = Object.keys(w).filter(function(Ou) {
            return Ou !== "key";
          }), xr = me.length > 0 ? "{key: someKey, " + me.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Is[Xe + xr]) {
            var Tu = me.length > 0 ? "{" + me.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xr, Xe, Tu, Xe), Is[Xe + xr] = !0;
          }
        }
        return p === r ? vu(re) : yu(re), re;
      }
    }
    function mu(p, w, N) {
      return Ds(p, w, N, !0);
    }
    function gu(p, w, N) {
      return Ds(p, w, N, !1);
    }
    var bu = gu, Eu = mu;
    Yt.Fragment = r, Yt.jsx = bu, Yt.jsxs = Eu;
  }()), Yt;
}
process.env.NODE_ENV === "production" ? ju() : Mu();
var Vu = ke.createContext(
  void 0
), qu = (n) => {
  const e = ke.useContext(Vu);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, ca = ke.createContext(!1), Bu = () => ke.useContext(ca);
ca.Provider;
function Uu() {
  let n = !1;
  return {
    clearReset: () => {
      n = !1;
    },
    reset: () => {
      n = !0;
    },
    isReset: () => n
  };
}
var Qu = ke.createContext(Uu()), zu = () => ke.useContext(Qu);
function Wu(n, e) {
  return typeof n == "function" ? n(...e) : !!n;
}
var Yu = (n, e) => {
  (n.suspense || n.throwOnError) && (e.isReset() || (n.retryOnMount = !1));
}, $u = (n) => {
  ke.useEffect(() => {
    n.clearReset();
  }, [n]);
}, Gu = ({
  result: n,
  errorResetBoundary: e,
  throwOnError: t,
  query: r
}) => n.isError && !e.isReset() && !n.isFetching && r && Wu(t, [n.error, r]), Ju = (n) => {
  n.suspense && typeof n.staleTime != "number" && (n.staleTime = 1e3);
}, Ku = (n, e) => (n == null ? void 0 : n.suspense) && e.isPending, Hu = (n, e, t) => e.fetchOptimistic(n).catch(() => {
  t.clearReset();
});
function Xu(n, e, t) {
  var u, l, h, f;
  if (process.env.NODE_ENV !== "production" && (typeof n != "object" || Array.isArray(n)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const r = qu(), i = Bu(), s = zu(), o = r.defaultQueryOptions(n);
  (l = (u = r.getDefaultOptions().queries) == null ? void 0 : u._experimental_beforeQuery) == null || l.call(
    u,
    o
  ), o._optimisticResults = i ? "isRestoring" : "optimistic", Ju(o), Yu(o, s), $u(s);
  const [a] = ke.useState(
    () => new e(
      r,
      o
    )
  ), c = a.getOptimisticResult(o);
  if (ke.useSyncExternalStore(
    ke.useCallback(
      (d) => {
        const y = i ? () => {
        } : a.subscribe(oa.batchCalls(d));
        return a.updateResult(), y;
      },
      [a, i]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), ke.useEffect(() => {
    a.setOptions(o, { listeners: !1 });
  }, [o, a]), Ku(o, c))
    throw Hu(o, a, s);
  if (Gu({
    result: c,
    errorResetBoundary: s,
    throwOnError: o.throwOnError,
    query: r.getQueryCache().get(o.queryHash)
  }))
    throw c.error;
  return (f = (h = r.getDefaultOptions().queries) == null ? void 0 : h._experimental_afterQuery) == null || f.call(
    h,
    o,
    c
  ), o.notifyOnChangeProps ? c : a.trackResult(c);
}
function ua(n, e) {
  return Xu(n, Fu);
}
var Zu = Object.defineProperty, el = (n, e, t) => e in n ? Zu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, Rn = (n, e, t) => el(n, typeof e != "symbol" ? e + "" : e, t), ri = function(n, e) {
  return ri = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }, ri(n, e);
};
function Re(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ri(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var v = function() {
  return v = Object.assign || function(n) {
    for (var e, t = 1, r = arguments.length; t < r; t++) {
      e = arguments[t];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
    }
    return n;
  }, v.apply(this, arguments);
};
function Le(n, e) {
  var t = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(n); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i]) && (t[r[i]] = n[r[i]]);
  return t;
}
function qe(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (h) {
        o(h);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (h) {
        o(h);
      }
    }
    function u(l) {
      l.done ? s(l.value) : i(l.value).then(a, c);
    }
    u((r = r.apply(n, e || [])).next());
  });
}
function Be(n, e) {
  var t = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (t = 0)), t; ) try {
      if (r = 1, i && (s = u[0] & 2 ? i.return : u[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, u[1])).done) return s;
      switch (i = 0, s && (u = [u[0] & 2, s.value]), u[0]) {
        case 0:
        case 1:
          s = u;
          break;
        case 4:
          return t.label++, { value: u[1], done: !1 };
        case 5:
          t.label++, i = u[1], u = [0];
          continue;
        case 7:
          u = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (s = t.trys, !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            t = 0;
            continue;
          }
          if (u[0] === 3 && (!s || u[1] > s[0] && u[1] < s[3])) {
            t.label = u[1];
            break;
          }
          if (u[0] === 6 && t.label < s[1]) {
            t.label = s[1], s = u;
            break;
          }
          if (s && t.label < s[2]) {
            t.label = s[2], t.ops.push(u);
            break;
          }
          s[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      u = e.call(n, t);
    } catch (l) {
      u = [6, l], i = 0;
    } finally {
      r = s = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function be(n, e, t) {
  if (t || arguments.length === 2) for (var r = 0, i = e.length, s; r < i; r++)
    (s || !(r in e)) && (s || (s = Array.prototype.slice.call(e, 0, r)), s[r] = e[r]);
  return n.concat(s || Array.prototype.slice.call(e));
}
var Ir = "Invariant Violation", Bs = Object.setPrototypeOf, tl = Bs === void 0 ? function(n, e) {
  return n.__proto__ = e, n;
} : Bs, la = (
  /** @class */
  function(n) {
    Re(e, n);
    function e(t) {
      t === void 0 && (t = Ir);
      var r = n.call(this, typeof t == "number" ? Ir + ": " + t + " (see https://github.com/apollographql/invariant-packages)" : t) || this;
      return r.framesToPop = 1, r.name = Ir, tl(r, e.prototype), r;
    }
    return e;
  }(Error)
);
function et(n, e) {
  if (!n)
    throw new la(e);
}
var ha = ["debug", "log", "warn", "error", "silent"], nl = ha.indexOf("log");
function An(n) {
  return function() {
    if (ha.indexOf(n) >= nl) {
      var e = console[n] || console.log;
      return e.apply(console, arguments);
    }
  };
}
(function(n) {
  n.debug = An("debug"), n.log = An("log"), n.warn = An("warn"), n.error = An("error");
})(et || (et = {}));
var Bi = "3.11.1";
function we(n) {
  try {
    return n();
  } catch {
  }
}
const ii = we(function() {
  return globalThis;
}) || we(function() {
  return window;
}) || we(function() {
  return self;
}) || we(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
we(function() {
  return we.constructor("return this")();
});
var Us = /* @__PURE__ */ new Map();
function si(n) {
  var e = Us.get(n) || 1;
  return Us.set(n, e + 1), "".concat(n, ":").concat(e, ":").concat(Math.random().toString(36).slice(2));
}
function fa(n, e) {
  e === void 0 && (e = 0);
  var t = si("stringifyForDisplay");
  return JSON.stringify(n, function(r, i) {
    return i === void 0 ? t : i;
  }, e).split(JSON.stringify(t)).join("<undefined>");
}
function Cn(n) {
  return function(e) {
    for (var t = [], r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
    if (typeof e == "number") {
      var i = e;
      e = Ui(i), e || (e = Qi(i, t), t = []);
    }
    n.apply(void 0, [e].concat(t));
  };
}
var L = Object.assign(function(n, e) {
  for (var t = [], r = 2; r < arguments.length; r++)
    t[r - 2] = arguments[r];
  n || et(n, Ui(e, t) || Qi(e, t));
}, {
  debug: Cn(et.debug),
  log: Cn(et.log),
  warn: Cn(et.warn),
  error: Cn(et.error)
});
function ve(n) {
  for (var e = [], t = 1; t < arguments.length; t++)
    e[t - 1] = arguments[t];
  return new la(Ui(n, e) || Qi(n, e));
}
var Qs = Symbol.for("ApolloErrorMessageHandler_" + Bi);
function pa(n) {
  if (typeof n == "string")
    return n;
  try {
    return fa(n, 2).slice(0, 1e3);
  } catch {
    return "<non-serializable>";
  }
}
function Ui(n, e) {
  if (e === void 0 && (e = []), !!n)
    return ii[Qs] && ii[Qs](n, e.map(pa));
}
function Qi(n, e) {
  if (e === void 0 && (e = []), !!n)
    return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
      version: Bi,
      message: n,
      args: e.map(pa)
    })));
}
function Un(n, e) {
  throw new Error(e);
}
function rl(n) {
  return typeof n == "object" && n !== null;
}
function il(n, e) {
  throw new Error(
    "Unexpected invariant triggered."
  );
}
const sl = /\r\n|[\n\r]/g;
function oi(n, e) {
  let t = 0, r = 1;
  for (const i of n.body.matchAll(sl)) {
    if (typeof i.index == "number" || il(), i.index >= e)
      break;
    t = i.index + i[0].length, r += 1;
  }
  return {
    line: r,
    column: e + 1 - t
  };
}
function ol(n) {
  return da(
    n.source,
    oi(n.source, n.start)
  );
}
function da(n, e) {
  const t = n.locationOffset.column - 1, r = "".padStart(t) + n.body, i = e.line - 1, s = n.locationOffset.line - 1, o = e.line + s, a = e.line === 1 ? t : 0, c = e.column + a, u = `${n.name}:${o}:${c}
`, l = r.split(/\r\n|[\n\r]/g), h = l[i];
  if (h.length > 120) {
    const f = Math.floor(c / 80), d = c % 80, y = [];
    for (let g = 0; g < h.length; g += 80)
      y.push(h.slice(g, g + 80));
    return u + zs([
      [`${o} |`, y[0]],
      ...y.slice(1, f + 1).map((g) => ["|", g]),
      ["|", "^".padStart(d)],
      ["|", y[f + 1]]
    ]);
  }
  return u + zs([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, l[i - 1]],
    [`${o} |`, h],
    ["|", "^".padStart(c)],
    [`${o + 1} |`, l[i + 1]]
  ]);
}
function zs(n) {
  const e = n.filter(([r, i]) => i !== void 0), t = Math.max(...e.map(([r]) => r.length));
  return e.map(([r, i]) => r.padStart(t) + (i ? " " + i : "")).join(`
`);
}
function al(n) {
  const e = n[0];
  return e == null || "kind" in e || "length" in e ? {
    nodes: e,
    source: n[1],
    positions: n[2],
    path: n[3],
    originalError: n[4],
    extensions: n[5]
  } : e;
}
class zi extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(e, ...t) {
    var r, i, s;
    const { nodes: o, source: a, positions: c, path: u, originalError: l, extensions: h } = al(t);
    super(e), this.name = "GraphQLError", this.path = u ?? void 0, this.originalError = l ?? void 0, this.nodes = Ws(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const f = Ws(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map((y) => y.loc).filter((y) => y != null)
    );
    this.source = a ?? (f == null || (i = f[0]) === null || i === void 0 ? void 0 : i.source), this.positions = c ?? (f == null ? void 0 : f.map((y) => y.start)), this.locations = c && a ? c.map((y) => oi(a, y)) : f == null ? void 0 : f.map((y) => oi(y.source, y.start));
    const d = rl(
      l == null ? void 0 : l.extensions
    ) ? l == null ? void 0 : l.extensions : void 0;
    this.extensions = (s = h ?? d) !== null && s !== void 0 ? s : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
      message: {
        writable: !0,
        enumerable: !0
      },
      name: {
        enumerable: !1
      },
      nodes: {
        enumerable: !1
      },
      source: {
        enumerable: !1
      },
      positions: {
        enumerable: !1
      },
      originalError: {
        enumerable: !1
      }
    }), l != null && l.stack ? Object.defineProperty(this, "stack", {
      value: l.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, zi) : Object.defineProperty(this, "stack", {
      value: Error().stack,
      writable: !0,
      configurable: !0
    });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let e = this.message;
    if (this.nodes)
      for (const t of this.nodes)
        t.loc && (e += `

` + ol(t.loc));
    else if (this.source && this.locations)
      for (const t of this.locations)
        e += `

` + da(this.source, t);
    return e;
  }
  toJSON() {
    const e = {
      message: this.message
    };
    return this.locations != null && (e.locations = this.locations), this.path != null && (e.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e;
  }
}
function Ws(n) {
  return n === void 0 || n.length === 0 ? void 0 : n;
}
function ue(n, e, t) {
  return new zi(`Syntax Error: ${t}`, {
    source: n,
    positions: [e]
  });
}
class cl {
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The Token at which this Node begins.
   */
  /**
   * The Token at which this Node ends.
   */
  /**
   * The Source document the AST represents.
   */
  constructor(e, t, r) {
    this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = r;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class ya {
  /**
   * The kind of Token.
   */
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The 1-indexed line number on which this Token appears.
   */
  /**
   * The 1-indexed column number at which this Token begins.
   */
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(e, t, r, i, s, o) {
    this.kind = e, this.start = t, this.end = r, this.line = i, this.column = s, this.value = o, this.prev = null, this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const va = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
}, ul = new Set(Object.keys(va));
function Ys(n) {
  const e = n == null ? void 0 : n.kind;
  return typeof e == "string" && ul.has(e);
}
var yt;
(function(n) {
  n.QUERY = "query", n.MUTATION = "mutation", n.SUBSCRIPTION = "subscription";
})(yt || (yt = {}));
var ai;
(function(n) {
  n.QUERY = "QUERY", n.MUTATION = "MUTATION", n.SUBSCRIPTION = "SUBSCRIPTION", n.FIELD = "FIELD", n.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", n.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", n.INLINE_FRAGMENT = "INLINE_FRAGMENT", n.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", n.SCHEMA = "SCHEMA", n.SCALAR = "SCALAR", n.OBJECT = "OBJECT", n.FIELD_DEFINITION = "FIELD_DEFINITION", n.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", n.INTERFACE = "INTERFACE", n.UNION = "UNION", n.ENUM = "ENUM", n.ENUM_VALUE = "ENUM_VALUE", n.INPUT_OBJECT = "INPUT_OBJECT", n.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(ai || (ai = {}));
var I;
(function(n) {
  n.NAME = "Name", n.DOCUMENT = "Document", n.OPERATION_DEFINITION = "OperationDefinition", n.VARIABLE_DEFINITION = "VariableDefinition", n.SELECTION_SET = "SelectionSet", n.FIELD = "Field", n.ARGUMENT = "Argument", n.FRAGMENT_SPREAD = "FragmentSpread", n.INLINE_FRAGMENT = "InlineFragment", n.FRAGMENT_DEFINITION = "FragmentDefinition", n.VARIABLE = "Variable", n.INT = "IntValue", n.FLOAT = "FloatValue", n.STRING = "StringValue", n.BOOLEAN = "BooleanValue", n.NULL = "NullValue", n.ENUM = "EnumValue", n.LIST = "ListValue", n.OBJECT = "ObjectValue", n.OBJECT_FIELD = "ObjectField", n.DIRECTIVE = "Directive", n.NAMED_TYPE = "NamedType", n.LIST_TYPE = "ListType", n.NON_NULL_TYPE = "NonNullType", n.SCHEMA_DEFINITION = "SchemaDefinition", n.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", n.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", n.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", n.FIELD_DEFINITION = "FieldDefinition", n.INPUT_VALUE_DEFINITION = "InputValueDefinition", n.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", n.UNION_TYPE_DEFINITION = "UnionTypeDefinition", n.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", n.ENUM_VALUE_DEFINITION = "EnumValueDefinition", n.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", n.DIRECTIVE_DEFINITION = "DirectiveDefinition", n.SCHEMA_EXTENSION = "SchemaExtension", n.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", n.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", n.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", n.UNION_TYPE_EXTENSION = "UnionTypeExtension", n.ENUM_TYPE_EXTENSION = "EnumTypeExtension", n.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(I || (I = {}));
function ci(n) {
  return n === 9 || n === 32;
}
function ln(n) {
  return n >= 48 && n <= 57;
}
function ma(n) {
  return n >= 97 && n <= 122 || // A-Z
  n >= 65 && n <= 90;
}
function ga(n) {
  return ma(n) || n === 95;
}
function ll(n) {
  return ma(n) || ln(n) || n === 95;
}
function hl(n) {
  var e;
  let t = Number.MAX_SAFE_INTEGER, r = null, i = -1;
  for (let o = 0; o < n.length; ++o) {
    var s;
    const a = n[o], c = fl(a);
    c !== a.length && (r = (s = r) !== null && s !== void 0 ? s : o, i = o, o !== 0 && c < t && (t = c));
  }
  return n.map((o, a) => a === 0 ? o : o.slice(t)).slice(
    (e = r) !== null && e !== void 0 ? e : 0,
    i + 1
  );
}
function fl(n) {
  let e = 0;
  for (; e < n.length && ci(n.charCodeAt(e)); )
    ++e;
  return e;
}
function pl(n, e) {
  const t = n.replace(/"""/g, '\\"""'), r = t.split(/\r\n|[\n\r]/g), i = r.length === 1, s = r.length > 1 && r.slice(1).every((d) => d.length === 0 || ci(d.charCodeAt(0))), o = t.endsWith('\\"""'), a = n.endsWith('"') && !o, c = n.endsWith("\\"), u = a || c, l = (
    // add leading and trailing new lines only if it improves readability
    !i || n.length > 70 || u || s || o
  );
  let h = "";
  const f = i && ci(n.charCodeAt(0));
  return (l && !f || s) && (h += `
`), h += t, (l || u) && (h += `
`), '"""' + h + '"""';
}
var T;
(function(n) {
  n.SOF = "<SOF>", n.EOF = "<EOF>", n.BANG = "!", n.DOLLAR = "$", n.AMP = "&", n.PAREN_L = "(", n.PAREN_R = ")", n.SPREAD = "...", n.COLON = ":", n.EQUALS = "=", n.AT = "@", n.BRACKET_L = "[", n.BRACKET_R = "]", n.BRACE_L = "{", n.PIPE = "|", n.BRACE_R = "}", n.NAME = "Name", n.INT = "Int", n.FLOAT = "Float", n.STRING = "String", n.BLOCK_STRING = "BlockString", n.COMMENT = "Comment";
})(T || (T = {}));
class dl {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(e) {
    const t = new ya(T.SOF, 0, 0, 0, 0);
    this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    return this.lastToken = this.token, this.token = this.lookahead();
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let e = this.token;
    if (e.kind !== T.EOF)
      do
        if (e.next)
          e = e.next;
        else {
          const t = vl(this, e.end);
          e.next = t, t.prev = e, e = t;
        }
      while (e.kind === T.COMMENT);
    return e;
  }
}
function yl(n) {
  return n === T.BANG || n === T.DOLLAR || n === T.AMP || n === T.PAREN_L || n === T.PAREN_R || n === T.SPREAD || n === T.COLON || n === T.EQUALS || n === T.AT || n === T.BRACKET_L || n === T.BRACKET_R || n === T.BRACE_L || n === T.PIPE || n === T.BRACE_R;
}
function Lt(n) {
  return n >= 0 && n <= 55295 || n >= 57344 && n <= 1114111;
}
function sr(n, e) {
  return ba(n.charCodeAt(e)) && Ea(n.charCodeAt(e + 1));
}
function ba(n) {
  return n >= 55296 && n <= 56319;
}
function Ea(n) {
  return n >= 56320 && n <= 57343;
}
function st(n, e) {
  const t = n.source.body.codePointAt(e);
  if (t === void 0)
    return T.EOF;
  if (t >= 32 && t <= 126) {
    const r = String.fromCodePoint(t);
    return r === '"' ? `'"'` : `"${r}"`;
  }
  return "U+" + t.toString(16).toUpperCase().padStart(4, "0");
}
function se(n, e, t, r, i) {
  const s = n.line, o = 1 + t - n.lineStart;
  return new ya(e, t, r, s, o, i);
}
function vl(n, e) {
  const t = n.source.body, r = t.length;
  let i = e;
  for (; i < r; ) {
    const s = t.charCodeAt(i);
    switch (s) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++i;
        continue;
      case 10:
        ++i, ++n.line, n.lineStart = i;
        continue;
      case 13:
        t.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++n.line, n.lineStart = i;
        continue;
      case 35:
        return ml(n, i);
      case 33:
        return se(n, T.BANG, i, i + 1);
      case 36:
        return se(n, T.DOLLAR, i, i + 1);
      case 38:
        return se(n, T.AMP, i, i + 1);
      case 40:
        return se(n, T.PAREN_L, i, i + 1);
      case 41:
        return se(n, T.PAREN_R, i, i + 1);
      case 46:
        if (t.charCodeAt(i + 1) === 46 && t.charCodeAt(i + 2) === 46)
          return se(n, T.SPREAD, i, i + 3);
        break;
      case 58:
        return se(n, T.COLON, i, i + 1);
      case 61:
        return se(n, T.EQUALS, i, i + 1);
      case 64:
        return se(n, T.AT, i, i + 1);
      case 91:
        return se(n, T.BRACKET_L, i, i + 1);
      case 93:
        return se(n, T.BRACKET_R, i, i + 1);
      case 123:
        return se(n, T.BRACE_L, i, i + 1);
      case 124:
        return se(n, T.PIPE, i, i + 1);
      case 125:
        return se(n, T.BRACE_R, i, i + 1);
      case 34:
        return t.charCodeAt(i + 1) === 34 && t.charCodeAt(i + 2) === 34 ? _l(n, i) : bl(n, i);
    }
    if (ln(s) || s === 45)
      return gl(n, i, s);
    if (ga(s))
      return wl(n, i);
    throw ue(
      n.source,
      i,
      s === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Lt(s) || sr(t, i) ? `Unexpected character: ${st(n, i)}.` : `Invalid character: ${st(n, i)}.`
    );
  }
  return se(n, T.EOF, r, r);
}
function ml(n, e) {
  const t = n.source.body, r = t.length;
  let i = e + 1;
  for (; i < r; ) {
    const s = t.charCodeAt(i);
    if (s === 10 || s === 13)
      break;
    if (Lt(s))
      ++i;
    else if (sr(t, i))
      i += 2;
    else
      break;
  }
  return se(
    n,
    T.COMMENT,
    e,
    i,
    t.slice(e + 1, i)
  );
}
function gl(n, e, t) {
  const r = n.source.body;
  let i = e, s = t, o = !1;
  if (s === 45 && (s = r.charCodeAt(++i)), s === 48) {
    if (s = r.charCodeAt(++i), ln(s))
      throw ue(
        n.source,
        i,
        `Invalid number, unexpected digit after 0: ${st(
          n,
          i
        )}.`
      );
  } else
    i = Dr(n, i, s), s = r.charCodeAt(i);
  if (s === 46 && (o = !0, s = r.charCodeAt(++i), i = Dr(n, i, s), s = r.charCodeAt(i)), (s === 69 || s === 101) && (o = !0, s = r.charCodeAt(++i), (s === 43 || s === 45) && (s = r.charCodeAt(++i)), i = Dr(n, i, s), s = r.charCodeAt(i)), s === 46 || ga(s))
    throw ue(
      n.source,
      i,
      `Invalid number, expected digit but got: ${st(
        n,
        i
      )}.`
    );
  return se(
    n,
    o ? T.FLOAT : T.INT,
    e,
    i,
    r.slice(e, i)
  );
}
function Dr(n, e, t) {
  if (!ln(t))
    throw ue(
      n.source,
      e,
      `Invalid number, expected digit but got: ${st(
        n,
        e
      )}.`
    );
  const r = n.source.body;
  let i = e + 1;
  for (; ln(r.charCodeAt(i)); )
    ++i;
  return i;
}
function bl(n, e) {
  const t = n.source.body, r = t.length;
  let i = e + 1, s = i, o = "";
  for (; i < r; ) {
    const a = t.charCodeAt(i);
    if (a === 34)
      return o += t.slice(s, i), se(n, T.STRING, e, i + 1, o);
    if (a === 92) {
      o += t.slice(s, i);
      const c = t.charCodeAt(i + 1) === 117 ? t.charCodeAt(i + 2) === 123 ? El(n, i) : Tl(n, i) : Ol(n, i);
      o += c.value, i += c.size, s = i;
      continue;
    }
    if (a === 10 || a === 13)
      break;
    if (Lt(a))
      ++i;
    else if (sr(t, i))
      i += 2;
    else
      throw ue(
        n.source,
        i,
        `Invalid character within String: ${st(
          n,
          i
        )}.`
      );
  }
  throw ue(n.source, i, "Unterminated string.");
}
function El(n, e) {
  const t = n.source.body;
  let r = 0, i = 3;
  for (; i < 12; ) {
    const s = t.charCodeAt(e + i++);
    if (s === 125) {
      if (i < 5 || !Lt(r))
        break;
      return {
        value: String.fromCodePoint(r),
        size: i
      };
    }
    if (r = r << 4 | tn(s), r < 0)
      break;
  }
  throw ue(
    n.source,
    e,
    `Invalid Unicode escape sequence: "${t.slice(
      e,
      e + i
    )}".`
  );
}
function Tl(n, e) {
  const t = n.source.body, r = $s(t, e + 2);
  if (Lt(r))
    return {
      value: String.fromCodePoint(r),
      size: 6
    };
  if (ba(r) && t.charCodeAt(e + 6) === 92 && t.charCodeAt(e + 7) === 117) {
    const i = $s(t, e + 8);
    if (Ea(i))
      return {
        value: String.fromCodePoint(r, i),
        size: 12
      };
  }
  throw ue(
    n.source,
    e,
    `Invalid Unicode escape sequence: "${t.slice(e, e + 6)}".`
  );
}
function $s(n, e) {
  return tn(n.charCodeAt(e)) << 12 | tn(n.charCodeAt(e + 1)) << 8 | tn(n.charCodeAt(e + 2)) << 4 | tn(n.charCodeAt(e + 3));
}
function tn(n) {
  return n >= 48 && n <= 57 ? n - 48 : n >= 65 && n <= 70 ? n - 55 : n >= 97 && n <= 102 ? n - 87 : -1;
}
function Ol(n, e) {
  const t = n.source.body;
  switch (t.charCodeAt(e + 1)) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: `
`,
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw ue(
    n.source,
    e,
    `Invalid character escape sequence: "${t.slice(
      e,
      e + 2
    )}".`
  );
}
function _l(n, e) {
  const t = n.source.body, r = t.length;
  let i = n.lineStart, s = e + 3, o = s, a = "";
  const c = [];
  for (; s < r; ) {
    const u = t.charCodeAt(s);
    if (u === 34 && t.charCodeAt(s + 1) === 34 && t.charCodeAt(s + 2) === 34) {
      a += t.slice(o, s), c.push(a);
      const l = se(
        n,
        T.BLOCK_STRING,
        e,
        s + 3,
        // Return a string of the lines joined with U+000A.
        hl(c).join(`
`)
      );
      return n.line += c.length - 1, n.lineStart = i, l;
    }
    if (u === 92 && t.charCodeAt(s + 1) === 34 && t.charCodeAt(s + 2) === 34 && t.charCodeAt(s + 3) === 34) {
      a += t.slice(o, s), o = s + 1, s += 4;
      continue;
    }
    if (u === 10 || u === 13) {
      a += t.slice(o, s), c.push(a), u === 13 && t.charCodeAt(s + 1) === 10 ? s += 2 : ++s, a = "", o = s, i = s;
      continue;
    }
    if (Lt(u))
      ++s;
    else if (sr(t, s))
      s += 2;
    else
      throw ue(
        n.source,
        s,
        `Invalid character within String: ${st(
          n,
          s
        )}.`
      );
  }
  throw ue(n.source, s, "Unterminated string.");
}
function wl(n, e) {
  const t = n.source.body, r = t.length;
  let i = e + 1;
  for (; i < r; ) {
    const s = t.charCodeAt(i);
    if (ll(s))
      ++i;
    else
      break;
  }
  return se(
    n,
    T.NAME,
    e,
    i,
    t.slice(e, i)
  );
}
const kl = 10, Ta = 2;
function Wi(n) {
  return or(n, []);
}
function or(n, e) {
  switch (typeof n) {
    case "string":
      return JSON.stringify(n);
    case "function":
      return n.name ? `[function ${n.name}]` : "[function]";
    case "object":
      return Sl(n, e);
    default:
      return String(n);
  }
}
function Sl(n, e) {
  if (n === null)
    return "null";
  if (e.includes(n))
    return "[Circular]";
  const t = [...e, n];
  if (xl(n)) {
    const r = n.toJSON();
    if (r !== n)
      return typeof r == "string" ? r : or(r, t);
  } else if (Array.isArray(n))
    return Il(n, t);
  return Nl(n, t);
}
function xl(n) {
  return typeof n.toJSON == "function";
}
function Nl(n, e) {
  const t = Object.entries(n);
  return t.length === 0 ? "{}" : e.length > Ta ? "[" + Dl(n) + "]" : "{ " + t.map(
    ([r, i]) => r + ": " + or(i, e)
  ).join(", ") + " }";
}
function Il(n, e) {
  if (n.length === 0)
    return "[]";
  if (e.length > Ta)
    return "[Array]";
  const t = Math.min(kl, n.length), r = n.length - t, i = [];
  for (let s = 0; s < t; ++s)
    i.push(or(n[s], e));
  return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function Dl(n) {
  const e = Object.prototype.toString.call(n).replace(/^\[object /, "").replace(/]$/, "");
  if (e === "Object" && typeof n.constructor == "function") {
    const t = n.constructor.name;
    if (typeof t == "string" && t !== "")
      return t;
  }
  return e;
}
const Rl = globalThis.process && // eslint-disable-next-line no-undef
process.env.NODE_ENV === "production", Al = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  Rl ? function(n, e) {
    return n instanceof e;
  } : function(n, e) {
    if (n instanceof e)
      return !0;
    if (typeof n == "object" && n !== null) {
      var t;
      const r = e.prototype[Symbol.toStringTag], i = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in n ? n[Symbol.toStringTag] : (t = n.constructor) === null || t === void 0 ? void 0 : t.name
      );
      if (r === i) {
        const s = Wi(n);
        throw new Error(`Cannot use ${r} "${s}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return !1;
  }
);
class Oa {
  constructor(e, t = "GraphQL request", r = {
    line: 1,
    column: 1
  }) {
    typeof e == "string" || Un(!1, `Body must be a string. Received: ${Wi(e)}.`), this.body = e, this.name = t, this.locationOffset = r, this.locationOffset.line > 0 || Un(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || Un(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function Cl(n) {
  return Al(n, Oa);
}
function Fl(n, e) {
  return new Ll(n, e).parseDocument();
}
class Ll {
  constructor(e, t = {}) {
    const r = Cl(e) ? e : new Oa(e);
    this._lexer = new dl(r), this._options = t, this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const e = this.expectToken(T.NAME);
    return this.node(e, {
      kind: I.NAME,
      value: e.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: I.DOCUMENT,
      definitions: this.many(
        T.SOF,
        this.parseDefinition,
        T.EOF
      )
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(T.BRACE_L))
      return this.parseOperationDefinition();
    const e = this.peekDescription(), t = e ? this._lexer.lookahead() : this._lexer.token;
    if (t.kind === T.NAME) {
      switch (t.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (e)
        throw ue(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      switch (t.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(t);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const e = this._lexer.token;
    if (this.peek(T.BRACE_L))
      return this.node(e, {
        kind: I.OPERATION_DEFINITION,
        operation: yt.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const t = this.parseOperationType();
    let r;
    return this.peek(T.NAME) && (r = this.parseName()), this.node(e, {
      kind: I.OPERATION_DEFINITION,
      operation: t,
      name: r,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const e = this.expectToken(T.NAME);
    switch (e.value) {
      case "query":
        return yt.QUERY;
      case "mutation":
        return yt.MUTATION;
      case "subscription":
        return yt.SUBSCRIPTION;
    }
    throw this.unexpected(e);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      T.PAREN_L,
      this.parseVariableDefinition,
      T.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: I.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(T.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(T.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const e = this._lexer.token;
    return this.expectToken(T.DOLLAR), this.node(e, {
      kind: I.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: I.SELECTION_SET,
      selections: this.many(
        T.BRACE_L,
        this.parseSelection,
        T.BRACE_R
      )
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(T.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const e = this._lexer.token, t = this.parseName();
    let r, i;
    return this.expectOptionalToken(T.COLON) ? (r = t, i = this.parseName()) : i = t, this.node(e, {
      kind: I.FIELD,
      alias: r,
      name: i,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(T.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(e) {
    const t = e ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(T.PAREN_L, t, T.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(e = !1) {
    const t = this._lexer.token, r = this.parseName();
    return this.expectToken(T.COLON), this.node(t, {
      kind: I.ARGUMENT,
      name: r,
      value: this.parseValueLiteral(e)
    });
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const e = this._lexer.token;
    this.expectToken(T.SPREAD);
    const t = this.expectOptionalKeyword("on");
    return !t && this.peek(T.NAME) ? this.node(e, {
      kind: I.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(e, {
      kind: I.INLINE_FRAGMENT,
      typeCondition: t ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    const e = this._lexer.token;
    return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(e, {
      kind: I.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(e, {
      kind: I.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on")
      throw this.unexpected();
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(e) {
    const t = this._lexer.token;
    switch (t.kind) {
      case T.BRACKET_L:
        return this.parseList(e);
      case T.BRACE_L:
        return this.parseObject(e);
      case T.INT:
        return this.advanceLexer(), this.node(t, {
          kind: I.INT,
          value: t.value
        });
      case T.FLOAT:
        return this.advanceLexer(), this.node(t, {
          kind: I.FLOAT,
          value: t.value
        });
      case T.STRING:
      case T.BLOCK_STRING:
        return this.parseStringLiteral();
      case T.NAME:
        switch (this.advanceLexer(), t.value) {
          case "true":
            return this.node(t, {
              kind: I.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(t, {
              kind: I.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(t, {
              kind: I.NULL
            });
          default:
            return this.node(t, {
              kind: I.ENUM,
              value: t.value
            });
        }
      case T.DOLLAR:
        if (e)
          if (this.expectToken(T.DOLLAR), this._lexer.token.kind === T.NAME) {
            const r = this._lexer.token.value;
            throw ue(
              this._lexer.source,
              t.start,
              `Unexpected variable "$${r}" in constant value.`
            );
          } else
            throw this.unexpected(t);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const e = this._lexer.token;
    return this.advanceLexer(), this.node(e, {
      kind: I.STRING,
      value: e.value,
      block: e.kind === T.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(e) {
    const t = () => this.parseValueLiteral(e);
    return this.node(this._lexer.token, {
      kind: I.LIST,
      values: this.any(T.BRACKET_L, t, T.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(e) {
    const t = () => this.parseObjectField(e);
    return this.node(this._lexer.token, {
      kind: I.OBJECT,
      fields: this.any(T.BRACE_L, t, T.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(e) {
    const t = this._lexer.token, r = this.parseName();
    return this.expectToken(T.COLON), this.node(t, {
      kind: I.OBJECT_FIELD,
      name: r,
      value: this.parseValueLiteral(e)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(e) {
    const t = [];
    for (; this.peek(T.AT); )
      t.push(this.parseDirective(e));
    return t;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(e) {
    const t = this._lexer.token;
    return this.expectToken(T.AT), this.node(t, {
      kind: I.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(e)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const e = this._lexer.token;
    let t;
    if (this.expectOptionalToken(T.BRACKET_L)) {
      const r = this.parseTypeReference();
      this.expectToken(T.BRACKET_R), t = this.node(e, {
        kind: I.LIST_TYPE,
        type: r
      });
    } else
      t = this.parseNamedType();
    return this.expectOptionalToken(T.BANG) ? this.node(e, {
      kind: I.NON_NULL_TYPE,
      type: t
    }) : t;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: I.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(T.STRING) || this.peek(T.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription())
      return this.parseStringLiteral();
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("schema");
    const r = this.parseConstDirectives(), i = this.many(
      T.BRACE_L,
      this.parseOperationTypeDefinition,
      T.BRACE_R
    );
    return this.node(e, {
      kind: I.SCHEMA_DEFINITION,
      description: t,
      directives: r,
      operationTypes: i
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const e = this._lexer.token, t = this.parseOperationType();
    this.expectToken(T.COLON);
    const r = this.parseNamedType();
    return this.node(e, {
      kind: I.OPERATION_TYPE_DEFINITION,
      operation: t,
      type: r
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("scalar");
    const r = this.parseName(), i = this.parseConstDirectives();
    return this.node(e, {
      kind: I.SCALAR_TYPE_DEFINITION,
      description: t,
      name: r,
      directives: i
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("type");
    const r = this.parseName(), i = this.parseImplementsInterfaces(), s = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    return this.node(e, {
      kind: I.OBJECT_TYPE_DEFINITION,
      description: t,
      name: r,
      interfaces: i,
      directives: s,
      fields: o
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(T.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      T.BRACE_L,
      this.parseFieldDefinition,
      T.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const e = this._lexer.token, t = this.parseDescription(), r = this.parseName(), i = this.parseArgumentDefs();
    this.expectToken(T.COLON);
    const s = this.parseTypeReference(), o = this.parseConstDirectives();
    return this.node(e, {
      kind: I.FIELD_DEFINITION,
      description: t,
      name: r,
      arguments: i,
      type: s,
      directives: o
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(
      T.PAREN_L,
      this.parseInputValueDef,
      T.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const e = this._lexer.token, t = this.parseDescription(), r = this.parseName();
    this.expectToken(T.COLON);
    const i = this.parseTypeReference();
    let s;
    this.expectOptionalToken(T.EQUALS) && (s = this.parseConstValueLiteral());
    const o = this.parseConstDirectives();
    return this.node(e, {
      kind: I.INPUT_VALUE_DEFINITION,
      description: t,
      name: r,
      type: i,
      defaultValue: s,
      directives: o
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("interface");
    const r = this.parseName(), i = this.parseImplementsInterfaces(), s = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    return this.node(e, {
      kind: I.INTERFACE_TYPE_DEFINITION,
      description: t,
      name: r,
      interfaces: i,
      directives: s,
      fields: o
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("union");
    const r = this.parseName(), i = this.parseConstDirectives(), s = this.parseUnionMemberTypes();
    return this.node(e, {
      kind: I.UNION_TYPE_DEFINITION,
      description: t,
      name: r,
      directives: i,
      types: s
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(T.EQUALS) ? this.delimitedMany(T.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("enum");
    const r = this.parseName(), i = this.parseConstDirectives(), s = this.parseEnumValuesDefinition();
    return this.node(e, {
      kind: I.ENUM_TYPE_DEFINITION,
      description: t,
      name: r,
      directives: i,
      values: s
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(
      T.BRACE_L,
      this.parseEnumValueDefinition,
      T.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const e = this._lexer.token, t = this.parseDescription(), r = this.parseEnumValueName(), i = this.parseConstDirectives();
    return this.node(e, {
      kind: I.ENUM_VALUE_DEFINITION,
      description: t,
      name: r,
      directives: i
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
      throw ue(
        this._lexer.source,
        this._lexer.token.start,
        `${Fn(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("input");
    const r = this.parseName(), i = this.parseConstDirectives(), s = this.parseInputFieldsDefinition();
    return this.node(e, {
      kind: I.INPUT_OBJECT_TYPE_DEFINITION,
      description: t,
      name: r,
      directives: i,
      fields: s
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(
      T.BRACE_L,
      this.parseInputValueDef,
      T.BRACE_R
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const e = this._lexer.lookahead();
    if (e.kind === T.NAME)
      switch (e.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(e);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const t = this.parseConstDirectives(), r = this.optionalMany(
      T.BRACE_L,
      this.parseOperationTypeDefinition,
      T.BRACE_R
    );
    if (t.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: I.SCHEMA_EXTENSION,
      directives: t,
      operationTypes: r
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const t = this.parseName(), r = this.parseConstDirectives();
    if (r.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: I.SCALAR_TYPE_EXTENSION,
      name: t,
      directives: r
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const t = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    if (r.length === 0 && i.length === 0 && s.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: I.OBJECT_TYPE_EXTENSION,
      name: t,
      interfaces: r,
      directives: i,
      fields: s
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const t = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    if (r.length === 0 && i.length === 0 && s.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: I.INTERFACE_TYPE_EXTENSION,
      name: t,
      interfaces: r,
      directives: i,
      fields: s
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const t = this.parseName(), r = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
    if (r.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: I.UNION_TYPE_EXTENSION,
      name: t,
      directives: r,
      types: i
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const t = this.parseName(), r = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
    if (r.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: I.ENUM_TYPE_EXTENSION,
      name: t,
      directives: r,
      values: i
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const t = this.parseName(), r = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
    if (r.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: I.INPUT_OBJECT_TYPE_EXTENSION,
      name: t,
      directives: r,
      fields: i
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(T.AT);
    const r = this.parseName(), i = this.parseArgumentDefs(), s = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const o = this.parseDirectiveLocations();
    return this.node(e, {
      kind: I.DIRECTIVE_DEFINITION,
      description: t,
      name: r,
      arguments: i,
      repeatable: s,
      locations: o
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(T.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const e = this._lexer.token, t = this.parseName();
    if (Object.prototype.hasOwnProperty.call(ai, t.value))
      return t;
    throw this.unexpected(e);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(e, t) {
    return this._options.noLocation !== !0 && (t.loc = new cl(
      e,
      this._lexer.lastToken,
      this._lexer.source
    )), t;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(e) {
    return this._lexer.token.kind === e;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(e) {
    const t = this._lexer.token;
    if (t.kind === e)
      return this.advanceLexer(), t;
    throw ue(
      this._lexer.source,
      t.start,
      `Expected ${_a(e)}, found ${Fn(t)}.`
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(e) {
    return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(e) {
    const t = this._lexer.token;
    if (t.kind === T.NAME && t.value === e)
      this.advanceLexer();
    else
      throw ue(
        this._lexer.source,
        t.start,
        `Expected "${e}", found ${Fn(t)}.`
      );
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(e) {
    const t = this._lexer.token;
    return t.kind === T.NAME && t.value === e ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(e) {
    const t = e ?? this._lexer.token;
    return ue(
      this._lexer.source,
      t.start,
      `Unexpected ${Fn(t)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(e, t, r) {
    this.expectToken(e);
    const i = [];
    for (; !this.expectOptionalToken(r); )
      i.push(t.call(this));
    return i;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(e, t, r) {
    if (this.expectOptionalToken(e)) {
      const i = [];
      do
        i.push(t.call(this));
      while (!this.expectOptionalToken(r));
      return i;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(e, t, r) {
    this.expectToken(e);
    const i = [];
    do
      i.push(t.call(this));
    while (!this.expectOptionalToken(r));
    return i;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(e, t) {
    this.expectOptionalToken(e);
    const r = [];
    do
      r.push(t.call(this));
    while (this.expectOptionalToken(e));
    return r;
  }
  advanceLexer() {
    const { maxTokens: e } = this._options, t = this._lexer.advance();
    if (e !== void 0 && t.kind !== T.EOF && (++this._tokenCounter, this._tokenCounter > e))
      throw ue(
        this._lexer.source,
        t.start,
        `Document contains more that ${e} tokens. Parsing aborted.`
      );
  }
}
function Fn(n) {
  const e = n.value;
  return _a(n.kind) + (e != null ? ` "${e}"` : "");
}
function _a(n) {
  return yl(n) ? `"${n}"` : n;
}
function Pl(n) {
  return `"${n.replace(jl, Ml)}"`;
}
const jl = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Ml(n) {
  return Vl[n.charCodeAt(0)];
}
const Vl = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
], Yi = Object.freeze({});
function Pe(n, e, t = va) {
  const r = /* @__PURE__ */ new Map();
  for (const m of Object.values(I))
    r.set(m, ql(e, m));
  let i, s = Array.isArray(n), o = [n], a = -1, c = [], u = n, l, h;
  const f = [], d = [];
  do {
    a++;
    const m = a === o.length, _ = m && c.length !== 0;
    if (m) {
      if (l = d.length === 0 ? void 0 : f[f.length - 1], u = h, h = d.pop(), _)
        if (s) {
          u = u.slice();
          let x = 0;
          for (const [S, D] of c) {
            const C = S - x;
            D === null ? (u.splice(C, 1), x++) : u[C] = D;
          }
        } else {
          u = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(u)
          );
          for (const [x, S] of c)
            u[x] = S;
        }
      a = i.index, o = i.keys, c = i.edits, s = i.inArray, i = i.prev;
    } else if (h) {
      if (l = s ? a : o[a], u = h[l], u == null)
        continue;
      f.push(l);
    }
    let b;
    if (!Array.isArray(u)) {
      var y, g;
      Ys(u) || Un(!1, `Invalid AST Node: ${Wi(u)}.`);
      const x = m ? (y = r.get(u.kind)) === null || y === void 0 ? void 0 : y.leave : (g = r.get(u.kind)) === null || g === void 0 ? void 0 : g.enter;
      if (b = x == null ? void 0 : x.call(e, u, l, h, f, d), b === Yi)
        break;
      if (b === !1) {
        if (!m) {
          f.pop();
          continue;
        }
      } else if (b !== void 0 && (c.push([l, b]), !m))
        if (Ys(b))
          u = b;
        else {
          f.pop();
          continue;
        }
    }
    if (b === void 0 && _ && c.push([l, u]), m)
      f.pop();
    else {
      var E;
      i = {
        inArray: s,
        index: a,
        keys: o,
        edits: c,
        prev: i
      }, s = Array.isArray(u), o = s ? u : (E = t[u.kind]) !== null && E !== void 0 ? E : [], a = -1, c = [], h && d.push(h), h = u;
    }
  } while (i !== void 0);
  return c.length !== 0 ? c[c.length - 1][1] : n;
}
function ql(n, e) {
  const t = n[e];
  return typeof t == "object" ? t : typeof t == "function" ? {
    enter: t,
    leave: void 0
  } : {
    enter: n.enter,
    leave: n.leave
  };
}
function Bl(n) {
  return Pe(n, Ql);
}
const Ul = 80, Ql = {
  Name: {
    leave: (n) => n.value
  },
  Variable: {
    leave: (n) => "$" + n.name
  },
  // Document
  Document: {
    leave: (n) => R(n.definitions, `

`)
  },
  OperationDefinition: {
    leave(n) {
      const e = M("(", R(n.variableDefinitions, ", "), ")"), t = R(
        [
          n.operation,
          R([n.name, e]),
          R(n.directives, " ")
        ],
        " "
      );
      return (t === "query" ? "" : t + " ") + n.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: n, type: e, defaultValue: t, directives: r }) => n + ": " + e + M(" = ", t) + M(" ", R(r, " "))
  },
  SelectionSet: {
    leave: ({ selections: n }) => Oe(n)
  },
  Field: {
    leave({ alias: n, name: e, arguments: t, directives: r, selectionSet: i }) {
      const s = M("", n, ": ") + e;
      let o = s + M("(", R(t, ", "), ")");
      return o.length > Ul && (o = s + M(`(
`, Qn(R(t, `
`)), `
)`)), R([o, R(r, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: n, value: e }) => n + ": " + e
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: n, directives: e }) => "..." + n + M(" ", R(e, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: n, directives: e, selectionSet: t }) => R(
      [
        "...",
        M("on ", n),
        R(e, " "),
        t
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: n, typeCondition: e, variableDefinitions: t, directives: r, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${n}${M("(", R(t, ", "), ")")} on ${e} ${M("", R(r, " "), " ")}` + i
    )
  },
  // Value
  IntValue: {
    leave: ({ value: n }) => n
  },
  FloatValue: {
    leave: ({ value: n }) => n
  },
  StringValue: {
    leave: ({ value: n, block: e }) => e ? pl(n) : Pl(n)
  },
  BooleanValue: {
    leave: ({ value: n }) => n ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value: n }) => n
  },
  ListValue: {
    leave: ({ values: n }) => "[" + R(n, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: n }) => "{" + R(n, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: n, value: e }) => n + ": " + e
  },
  // Directive
  Directive: {
    leave: ({ name: n, arguments: e }) => "@" + n + M("(", R(e, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name: n }) => n
  },
  ListType: {
    leave: ({ type: n }) => "[" + n + "]"
  },
  NonNullType: {
    leave: ({ type: n }) => n + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description: n, directives: e, operationTypes: t }) => M("", n, `
`) + R(["schema", R(e, " "), Oe(t)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: n, type: e }) => n + ": " + e
  },
  ScalarTypeDefinition: {
    leave: ({ description: n, name: e, directives: t }) => M("", n, `
`) + R(["scalar", e, R(t, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: n, name: e, interfaces: t, directives: r, fields: i }) => M("", n, `
`) + R(
      [
        "type",
        e,
        M("implements ", R(t, " & ")),
        R(r, " "),
        Oe(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: n, name: e, arguments: t, type: r, directives: i }) => M("", n, `
`) + e + (Gs(t) ? M(`(
`, Qn(R(t, `
`)), `
)`) : M("(", R(t, ", "), ")")) + ": " + r + M(" ", R(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: n, name: e, type: t, defaultValue: r, directives: i }) => M("", n, `
`) + R(
      [e + ": " + t, M("= ", r), R(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: n, name: e, interfaces: t, directives: r, fields: i }) => M("", n, `
`) + R(
      [
        "interface",
        e,
        M("implements ", R(t, " & ")),
        R(r, " "),
        Oe(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: n, name: e, directives: t, types: r }) => M("", n, `
`) + R(
      ["union", e, R(t, " "), M("= ", R(r, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: n, name: e, directives: t, values: r }) => M("", n, `
`) + R(["enum", e, R(t, " "), Oe(r)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: n, name: e, directives: t }) => M("", n, `
`) + R([e, R(t, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: n, name: e, directives: t, fields: r }) => M("", n, `
`) + R(["input", e, R(t, " "), Oe(r)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: n, name: e, arguments: t, repeatable: r, locations: i }) => M("", n, `
`) + "directive @" + e + (Gs(t) ? M(`(
`, Qn(R(t, `
`)), `
)`) : M("(", R(t, ", "), ")")) + (r ? " repeatable" : "") + " on " + R(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: n, operationTypes: e }) => R(
      ["extend schema", R(n, " "), Oe(e)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: n, directives: e }) => R(["extend scalar", n, R(e, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: n, interfaces: e, directives: t, fields: r }) => R(
      [
        "extend type",
        n,
        M("implements ", R(e, " & ")),
        R(t, " "),
        Oe(r)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: n, interfaces: e, directives: t, fields: r }) => R(
      [
        "extend interface",
        n,
        M("implements ", R(e, " & ")),
        R(t, " "),
        Oe(r)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: n, directives: e, types: t }) => R(
      [
        "extend union",
        n,
        R(e, " "),
        M("= ", R(t, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: n, directives: e, values: t }) => R(["extend enum", n, R(e, " "), Oe(t)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: n, directives: e, fields: t }) => R(["extend input", n, R(e, " "), Oe(t)], " ")
  }
};
function R(n, e = "") {
  var t;
  return (t = n == null ? void 0 : n.filter((r) => r).join(e)) !== null && t !== void 0 ? t : "";
}
function Oe(n) {
  return M(`{
`, Qn(R(n, `
`)), `
}`);
}
function M(n, e, t = "") {
  return e != null && e !== "" ? n + e + t : "";
}
function Qn(n) {
  return M("  ", n.replace(/\n/g, `
  `));
}
function Gs(n) {
  var e;
  return (e = n == null ? void 0 : n.some((t) => t.includes(`
`))) !== null && e !== void 0 ? e : !1;
}
function Js(n) {
  return n.kind === I.FIELD || n.kind === I.FRAGMENT_SPREAD || n.kind === I.INLINE_FRAGMENT;
}
function bn(n, e) {
  var t = n.directives;
  return !t || !t.length ? !0 : Yl(t).every(function(r) {
    var i = r.directive, s = r.ifArgument, o = !1;
    return s.value.kind === "Variable" ? (o = e && e[s.value.name.value], L(o !== void 0, 69, i.name.value)) : o = s.value.value, i.name.value === "skip" ? !o : o;
  });
}
function hn(n, e, t) {
  var r = new Set(n), i = r.size;
  return Pe(e, {
    Directive: function(s) {
      if (r.delete(s.name.value) && (!t || !r.size))
        return Yi;
    }
  }), t ? !r.size : r.size < i;
}
function zl(n) {
  return n && hn(["client", "export"], n, !0);
}
function Wl(n) {
  var e = n.name.value;
  return e === "skip" || e === "include";
}
function Yl(n) {
  var e = [];
  return n && n.length && n.forEach(function(t) {
    if (Wl(t)) {
      var r = t.arguments, i = t.name.value;
      L(r && r.length === 1, 70, i);
      var s = r[0];
      L(s.name && s.name.value === "if", 71, i);
      var o = s.value;
      L(o && (o.kind === "Variable" || o.kind === "BooleanValue"), 72, i), e.push({ directive: t, ifArgument: s });
    }
  }), e;
}
const $l = () => /* @__PURE__ */ Object.create(null), { forEach: Gl, slice: Ks } = Array.prototype, { hasOwnProperty: Jl } = Object.prototype;
let Pt = class wa {
  constructor(e = !0, t = $l) {
    this.weakness = e, this.makeData = t;
  }
  lookup() {
    return this.lookupArray(arguments);
  }
  lookupArray(e) {
    let t = this;
    return Gl.call(e, (r) => t = t.getChildTrie(r)), Jl.call(t, "data") ? t.data : t.data = this.makeData(Ks.call(e));
  }
  peek() {
    return this.peekArray(arguments);
  }
  peekArray(e) {
    let t = this;
    for (let r = 0, i = e.length; t && r < i; ++r) {
      const s = t.mapFor(e[r], !1);
      t = s && s.get(e[r]);
    }
    return t && t.data;
  }
  remove() {
    return this.removeArray(arguments);
  }
  removeArray(e) {
    let t;
    if (e.length) {
      const r = e[0], i = this.mapFor(r, !1), s = i && i.get(r);
      s && (t = s.removeArray(Ks.call(e, 1)), !s.data && !s.weak && !(s.strong && s.strong.size) && i.delete(r));
    } else
      t = this.data, delete this.data;
    return t;
  }
  getChildTrie(e) {
    const t = this.mapFor(e, !0);
    let r = t.get(e);
    return r || t.set(e, r = new wa(this.weakness, this.makeData)), r;
  }
  mapFor(e, t) {
    return this.weakness && Kl(e) ? this.weak || (t ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (t ? this.strong = /* @__PURE__ */ new Map() : void 0);
  }
};
function Kl(n) {
  switch (typeof n) {
    case "object":
      if (n === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
var Hl = we(function() {
  return navigator.product;
}) == "ReactNative", jt = typeof WeakMap == "function" && !(Hl && !global.HermesInternal), ka = typeof WeakSet == "function", Sa = typeof Symbol == "function" && typeof Symbol.for == "function", ar = Sa && Symbol.asyncIterator;
we(function() {
  return window.document.createElement;
});
we(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function ee(n) {
  return n !== null && typeof n == "object";
}
function Xl(n, e) {
  var t = e, r = [];
  n.definitions.forEach(function(s) {
    if (s.kind === "OperationDefinition")
      throw ve(
        73,
        s.operation,
        s.name ? " named '".concat(s.name.value, "'") : ""
      );
    s.kind === "FragmentDefinition" && r.push(s);
  }), typeof t > "u" && (L(r.length === 1, 74, r.length), t = r[0].name.value);
  var i = v(v({}, n), { definitions: be([
    {
      kind: "OperationDefinition",
      // OperationTypeNode is an enum
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: t
            }
          }
        ]
      }
    }
  ], n.definitions, !0) });
  return i;
}
function cr(n) {
  n === void 0 && (n = []);
  var e = {};
  return n.forEach(function(t) {
    e[t.name.value] = t;
  }), e;
}
function ur(n, e) {
  switch (n.kind) {
    case "InlineFragment":
      return n;
    case "FragmentSpread": {
      var t = n.name.value;
      if (typeof e == "function")
        return e(t);
      var r = e && e[t];
      return L(r, 75, t), r || null;
    }
    default:
      return null;
  }
}
function Zl() {
}
class ui {
  constructor(e = 1 / 0, t = Zl) {
    this.max = e, this.dispose = t, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
  }
  has(e) {
    return this.map.has(e);
  }
  get(e) {
    const t = this.getNode(e);
    return t && t.value;
  }
  get size() {
    return this.map.size;
  }
  getNode(e) {
    const t = this.map.get(e);
    if (t && t !== this.newest) {
      const { older: r, newer: i } = t;
      i && (i.older = r), r && (r.newer = i), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = i);
    }
    return t;
  }
  set(e, t) {
    let r = this.getNode(e);
    return r ? r.value = t : (r = {
      key: e,
      value: t,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = r), this.newest = r, this.oldest = this.oldest || r, this.map.set(e, r), r.value);
  }
  clean() {
    for (; this.oldest && this.map.size > this.max; )
      this.delete(this.oldest.key);
  }
  delete(e) {
    const t = this.map.get(e);
    return t ? (t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.map.delete(e), this.dispose(t.value, e), !0) : !1;
  }
}
function li() {
}
const eh = li, th = typeof WeakRef < "u" ? WeakRef : function(n) {
  return { deref: () => n };
}, nh = typeof WeakMap < "u" ? WeakMap : Map, rh = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
  return {
    register: li,
    unregister: li
  };
}, ih = 10024;
class Zn {
  constructor(e = 1 / 0, t = eh) {
    this.max = e, this.dispose = t, this.map = new nh(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
      const r = this.unfinalizedNodes.values();
      for (let i = 0; i < ih; i++) {
        const s = r.next().value;
        if (!s)
          break;
        this.unfinalizedNodes.delete(s);
        const o = s.key;
        delete s.key, s.keyRef = new th(o), this.registry.register(o, s, s);
      }
      this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
    }, this.registry = new rh(this.deleteNode.bind(this));
  }
  has(e) {
    return this.map.has(e);
  }
  get(e) {
    const t = this.getNode(e);
    return t && t.value;
  }
  getNode(e) {
    const t = this.map.get(e);
    if (t && t !== this.newest) {
      const { older: r, newer: i } = t;
      i && (i.older = r), r && (r.newer = i), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = i);
    }
    return t;
  }
  set(e, t) {
    let r = this.getNode(e);
    return r ? r.value = t : (r = {
      key: e,
      value: t,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = r), this.newest = r, this.oldest = this.oldest || r, this.scheduleFinalization(r), this.map.set(e, r), this.size++, r.value);
  }
  clean() {
    for (; this.oldest && this.size > this.max; )
      this.deleteNode(this.oldest);
  }
  deleteNode(e) {
    e === this.newest && (this.newest = e.older), e === this.oldest && (this.oldest = e.newer), e.newer && (e.newer.older = e.older), e.older && (e.older.newer = e.newer), this.size--;
    const t = e.key || e.keyRef && e.keyRef.deref();
    this.dispose(e.value, t), e.keyRef ? this.registry.unregister(e) : this.unfinalizedNodes.delete(e), t && this.map.delete(t);
  }
  delete(e) {
    const t = this.map.get(e);
    return t ? (this.deleteNode(t), !0) : !1;
  }
  scheduleFinalization(e) {
    this.unfinalizedNodes.add(e), this.finalizationScheduled || (this.finalizationScheduled = !0, queueMicrotask(this.finalize));
  }
}
var Rr = /* @__PURE__ */ new WeakSet();
function xa(n) {
  n.size <= (n.max || -1) || Rr.has(n) || (Rr.add(n), setTimeout(function() {
    n.clean(), Rr.delete(n);
  }, 100));
}
var Na = function(n, e) {
  var t = new Zn(n, e);
  return t.set = function(r, i) {
    var s = Zn.prototype.set.call(this, r, i);
    return xa(this), s;
  }, t;
}, sh = function(n, e) {
  var t = new ui(n, e);
  return t.set = function(r, i) {
    var s = ui.prototype.set.call(this, r, i);
    return xa(this), s;
  }, t;
}, oh = Symbol.for("apollo.cacheSize"), je = v({}, ii[oh]), Ze = {};
function Ia(n, e) {
  Ze[n] = e;
}
var ah = globalThis.__DEV__ !== !1 ? hh : void 0, ch = globalThis.__DEV__ !== !1 ? fh : void 0, uh = globalThis.__DEV__ !== !1 ? Da : void 0;
function lh() {
  var n = {
    parser: 1e3,
    canonicalStringify: 1e3,
    print: 2e3,
    "documentTransform.cache": 2e3,
    "queryManager.getDocumentInfo": 2e3,
    "PersistedQueryLink.persistedQueryHashes": 2e3,
    "fragmentRegistry.transform": 2e3,
    "fragmentRegistry.lookup": 1e3,
    "fragmentRegistry.findFragmentSpreads": 4e3,
    "cache.fragmentQueryDocuments": 1e3,
    "removeTypenameFromVariables.getVariableDefinitions": 2e3,
    "inMemoryCache.maybeBroadcastWatch": 5e3,
    "inMemoryCache.executeSelectionSet": 5e4,
    "inMemoryCache.executeSubSelectedArray": 1e4
  };
  return Object.fromEntries(Object.entries(n).map(function(e) {
    var t = e[0], r = e[1];
    return [
      t,
      je[t] || r
    ];
  }));
}
function hh() {
  var n, e, t, r, i;
  if (globalThis.__DEV__ === !1)
    throw new Error("only supported in development mode");
  return {
    limits: lh(),
    sizes: v({ print: (n = Ze.print) === null || n === void 0 ? void 0 : n.call(Ze), parser: (e = Ze.parser) === null || e === void 0 ? void 0 : e.call(Ze), canonicalStringify: (t = Ze.canonicalStringify) === null || t === void 0 ? void 0 : t.call(Ze), links: fi(this.link), queryManager: {
      getDocumentInfo: this.queryManager.transformCache.size,
      documentTransforms: Aa(this.queryManager.documentTransform)
    } }, (i = (r = this.cache).getMemoryInternals) === null || i === void 0 ? void 0 : i.call(r))
  };
}
function Da() {
  return {
    cache: {
      fragmentQueryDocuments: Ue(this.getFragmentDoc)
    }
  };
}
function fh() {
  var n = this.config.fragments;
  return v(v({}, Da.apply(this)), { addTypenameDocumentTransform: Aa(this.addTypenameTransform), inMemoryCache: {
    executeSelectionSet: Ue(this.storeReader.executeSelectionSet),
    executeSubSelectedArray: Ue(this.storeReader.executeSubSelectedArray),
    maybeBroadcastWatch: Ue(this.maybeBroadcastWatch)
  }, fragmentRegistry: {
    findFragmentSpreads: Ue(n == null ? void 0 : n.findFragmentSpreads),
    lookup: Ue(n == null ? void 0 : n.lookup),
    transform: Ue(n == null ? void 0 : n.transform)
  } });
}
function ph(n) {
  return !!n && "dirtyKey" in n;
}
function Ue(n) {
  return ph(n) ? n.size : void 0;
}
function Ra(n) {
  return n != null;
}
function Aa(n) {
  return hi(n).map(function(e) {
    return { cache: e };
  });
}
function hi(n) {
  return n ? be(be([
    Ue(n == null ? void 0 : n.performWork)
  ], hi(n == null ? void 0 : n.left), !0), hi(n == null ? void 0 : n.right), !0).filter(Ra) : [];
}
function fi(n) {
  var e;
  return n ? be(be([
    (e = n == null ? void 0 : n.getMemoryInternals) === null || e === void 0 ? void 0 : e.call(n)
  ], fi(n == null ? void 0 : n.left), !0), fi(n == null ? void 0 : n.right), !0).filter(Ra) : [];
}
var Ye = Object.assign(function(n) {
  return JSON.stringify(n, dh);
}, {
  reset: function() {
    vt = new sh(
      je.canonicalStringify || 1e3
      /* defaultCacheSizes.canonicalStringify */
    );
  }
});
globalThis.__DEV__ !== !1 && Ia("canonicalStringify", function() {
  return vt.size;
});
var vt;
Ye.reset();
function dh(n, e) {
  if (e && typeof e == "object") {
    var t = Object.getPrototypeOf(e);
    if (t === Object.prototype || t === null) {
      var r = Object.keys(e);
      if (r.every(yh))
        return e;
      var i = JSON.stringify(r), s = vt.get(i);
      if (!s) {
        r.sort();
        var o = JSON.stringify(r);
        s = vt.get(o) || r, vt.set(i, s), vt.set(o, s);
      }
      var a = Object.create(t);
      return s.forEach(function(c) {
        a[c] = e[c];
      }), a;
    }
  }
  return e;
}
function yh(n, e, t) {
  return e === 0 || t[e - 1] <= n;
}
function Et(n) {
  return { __ref: String(n) };
}
function W(n) {
  return !!(n && typeof n == "object" && typeof n.__ref == "string");
}
function vh(n) {
  return ee(n) && n.kind === "Document" && Array.isArray(n.definitions);
}
function mh(n) {
  return n.kind === "StringValue";
}
function gh(n) {
  return n.kind === "BooleanValue";
}
function bh(n) {
  return n.kind === "IntValue";
}
function Eh(n) {
  return n.kind === "FloatValue";
}
function Th(n) {
  return n.kind === "Variable";
}
function Oh(n) {
  return n.kind === "ObjectValue";
}
function _h(n) {
  return n.kind === "ListValue";
}
function wh(n) {
  return n.kind === "EnumValue";
}
function kh(n) {
  return n.kind === "NullValue";
}
function Dt(n, e, t, r) {
  if (bh(t) || Eh(t))
    n[e.value] = Number(t.value);
  else if (gh(t) || mh(t))
    n[e.value] = t.value;
  else if (Oh(t)) {
    var i = {};
    t.fields.map(function(o) {
      return Dt(i, o.name, o.value, r);
    }), n[e.value] = i;
  } else if (Th(t)) {
    var s = (r || {})[t.name.value];
    n[e.value] = s;
  } else if (_h(t))
    n[e.value] = t.values.map(function(o) {
      var a = {};
      return Dt(a, e, o, r), a[e.value];
    });
  else if (wh(t))
    n[e.value] = t.value;
  else if (kh(t))
    n[e.value] = null;
  else
    throw ve(84, e.value, t.kind);
}
function Sh(n, e) {
  var t = null;
  n.directives && (t = {}, n.directives.forEach(function(i) {
    t[i.name.value] = {}, i.arguments && i.arguments.forEach(function(s) {
      var o = s.name, a = s.value;
      return Dt(t[i.name.value], o, a, e);
    });
  }));
  var r = null;
  return n.arguments && n.arguments.length && (r = {}, n.arguments.forEach(function(i) {
    var s = i.name, o = i.value;
    return Dt(r, s, o, e);
  })), Ca(n.name.value, r, t);
}
var xh = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], $t = Ye, Ca = Object.assign(function(n, e, t) {
  if (e && t && t.connection && t.connection.key)
    if (t.connection.filter && t.connection.filter.length > 0) {
      var r = t.connection.filter ? t.connection.filter : [];
      r.sort();
      var i = {};
      return r.forEach(function(a) {
        i[a] = e[a];
      }), "".concat(t.connection.key, "(").concat($t(i), ")");
    } else
      return t.connection.key;
  var s = n;
  if (e) {
    var o = $t(e);
    s += "(".concat(o, ")");
  }
  return t && Object.keys(t).forEach(function(a) {
    xh.indexOf(a) === -1 && (t[a] && Object.keys(t[a]).length ? s += "@".concat(a, "(").concat($t(t[a]), ")") : s += "@".concat(a));
  }), s;
}, {
  setStringify: function(n) {
    var e = $t;
    return $t = n, e;
  }
});
function lr(n, e) {
  if (n.arguments && n.arguments.length) {
    var t = {};
    return n.arguments.forEach(function(r) {
      var i = r.name, s = r.value;
      return Dt(t, i, s, e);
    }), t;
  }
  return null;
}
function $e(n) {
  return n.alias ? n.alias.value : n.name.value;
}
function pi(n, e, t) {
  for (var r, i = 0, s = e.selections; i < s.length; i++) {
    var o = s[i];
    if (Ge(o)) {
      if (o.name.value === "__typename")
        return n[$e(o)];
    } else r ? r.push(o) : r = [o];
  }
  if (typeof n.__typename == "string")
    return n.__typename;
  if (r)
    for (var a = 0, c = r; a < c.length; a++) {
      var o = c[a], u = pi(n, ur(o, t).selectionSet, t);
      if (typeof u == "string")
        return u;
    }
}
function Ge(n) {
  return n.kind === "Field";
}
function Nh(n) {
  return n.kind === "InlineFragment";
}
function En(n) {
  L(n && n.kind === "Document", 76);
  var e = n.definitions.filter(function(t) {
    return t.kind !== "FragmentDefinition";
  }).map(function(t) {
    if (t.kind !== "OperationDefinition")
      throw ve(77, t.kind);
    return t;
  });
  return L(e.length <= 1, 78, e.length), n;
}
function Tn(n) {
  return En(n), n.definitions.filter(function(e) {
    return e.kind === "OperationDefinition";
  })[0];
}
function di(n) {
  return n.definitions.filter(function(e) {
    return e.kind === "OperationDefinition" && !!e.name;
  }).map(function(e) {
    return e.name.value;
  })[0] || null;
}
function hr(n) {
  return n.definitions.filter(function(e) {
    return e.kind === "FragmentDefinition";
  });
}
function Fa(n) {
  var e = Tn(n);
  return L(e && e.operation === "query", 79), e;
}
function Ih(n) {
  L(n.kind === "Document", 80), L(n.definitions.length <= 1, 81);
  var e = n.definitions[0];
  return L(e.kind === "FragmentDefinition", 82), e;
}
function On(n) {
  En(n);
  for (var e, t = 0, r = n.definitions; t < r.length; t++) {
    var i = r[t];
    if (i.kind === "OperationDefinition") {
      var s = i.operation;
      if (s === "query" || s === "mutation" || s === "subscription")
        return i;
    }
    i.kind === "FragmentDefinition" && !e && (e = i);
  }
  if (e)
    return e;
  throw ve(83);
}
function $i(n) {
  var e = /* @__PURE__ */ Object.create(null), t = n && n.variableDefinitions;
  return t && t.length && t.forEach(function(r) {
    r.defaultValue && Dt(e, r.variable.name, r.defaultValue);
  }), e;
}
const Dh = () => /* @__PURE__ */ Object.create(null), { forEach: Rh, slice: Ah } = Array.prototype, { hasOwnProperty: Ch } = Object.prototype;
class Gi {
  constructor(e = !0, t = Dh) {
    this.weakness = e, this.makeData = t;
  }
  lookup(...e) {
    return this.lookupArray(e);
  }
  lookupArray(e) {
    let t = this;
    return Rh.call(e, (r) => t = t.getChildTrie(r)), Ch.call(t, "data") ? t.data : t.data = this.makeData(Ah.call(e));
  }
  peek(...e) {
    return this.peekArray(e);
  }
  peekArray(e) {
    let t = this;
    for (let r = 0, i = e.length; t && r < i; ++r) {
      const s = this.weakness && Hs(e[r]) ? t.weak : t.strong;
      t = s && s.get(e[r]);
    }
    return t && t.data;
  }
  getChildTrie(e) {
    const t = this.weakness && Hs(e) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let r = t.get(e);
    return r || t.set(e, r = new Gi(this.weakness, this.makeData)), r;
  }
}
function Hs(n) {
  switch (typeof n) {
    case "object":
      if (n === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
let he = null;
const Xs = {};
let Fh = 1;
const Lh = () => class {
  constructor() {
    this.id = [
      "slot",
      Fh++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let n = he; n; n = n.parent)
      if (this.id in n.slots) {
        const e = n.slots[this.id];
        if (e === Xs)
          break;
        return n !== he && (he.slots[this.id] = e), !0;
      }
    return he && (he.slots[this.id] = Xs), !1;
  }
  getValue() {
    if (this.hasValue())
      return he.slots[this.id];
  }
  withValue(n, e, t, r) {
    const i = {
      __proto__: null,
      [this.id]: n
    }, s = he;
    he = { parent: s, slots: i };
    try {
      return e.apply(r, t);
    } finally {
      he = s;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(n) {
    const e = he;
    return function() {
      const t = he;
      try {
        return he = e, n.apply(this, arguments);
      } finally {
        he = t;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(n, e, t) {
    if (he) {
      const r = he;
      try {
        return he = null, n.apply(t, e);
      } finally {
        he = r;
      }
    } else
      return n.apply(t, e);
  }
};
function Zs(n) {
  try {
    return n();
  } catch {
  }
}
const Ar = "@wry/context:Slot", Ph = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Zs(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Zs(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), eo = Ph, La = eo[Ar] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[Ar] || function(n) {
  try {
    Object.defineProperty(eo, Ar, {
      value: n,
      enumerable: !1,
      writable: !1,
      // When it was possible for globalHost to be the Array constructor (a
      // legacy Slot dedup strategy), it was important for the property to be
      // configurable:true so it could be deleted. That does not seem to be as
      // important when globalHost is the global object, but I don't want to
      // cause similar problems again, and configurable:true seems safest.
      // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
      configurable: !0
    });
  } finally {
    return n;
  }
}(Lh()), fr = new La(), { hasOwnProperty: jh } = Object.prototype, Ji = Array.from || function(n) {
  const e = [];
  return n.forEach((t) => e.push(t)), e;
};
function Ki(n) {
  const { unsubscribe: e } = n;
  typeof e == "function" && (n.unsubscribe = void 0, e());
}
const fn = [], Mh = 100;
function Rt(n, e) {
  if (!n)
    throw new Error(e || "assertion failure");
}
function Pa(n, e) {
  const t = n.length;
  return (
    // Unknown values are not equal to each other.
    t > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    t === e.length && // The underlying value or exception must be the same.
    n[t - 1] === e[t - 1]
  );
}
function ja(n) {
  switch (n.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return n[0];
    case 2:
      throw n[1];
  }
}
function Ma(n) {
  return n.slice(0);
}
class pr {
  constructor(e) {
    this.fn = e, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++pr.count;
  }
  peek() {
    if (this.value.length === 1 && !Je(this))
      return to(this), this.value[0];
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(e) {
    return Rt(!this.recomputing, "already recomputing"), to(this), Je(this) ? Vh(this, e) : ja(this.value);
  }
  setDirty() {
    this.dirty || (this.dirty = !0, Va(this), Ki(this));
  }
  dispose() {
    this.setDirty(), za(this), Hi(this, (e, t) => {
      e.setDirty(), Wa(e, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(e) {
    e.add(this), this.deps || (this.deps = fn.pop() || /* @__PURE__ */ new Set()), this.deps.add(e);
  }
  forgetDeps() {
    this.deps && (Ji(this.deps).forEach((e) => e.delete(this)), this.deps.clear(), fn.push(this.deps), this.deps = null);
  }
}
pr.count = 0;
function to(n) {
  const e = fr.getValue();
  if (e)
    return n.parents.add(e), e.childValues.has(n) || e.childValues.set(n, []), Je(n) ? Ba(e, n) : Ua(e, n), e;
}
function Vh(n, e) {
  return za(n), fr.withValue(n, qh, [n, e]), Uh(n, e) && Bh(n), ja(n.value);
}
function qh(n, e) {
  n.recomputing = !0;
  const { normalizeResult: t } = n;
  let r;
  t && n.value.length === 1 && (r = Ma(n.value)), n.value.length = 0;
  try {
    if (n.value[0] = n.fn.apply(null, e), t && r && !Pa(r, n.value))
      try {
        n.value[0] = t(n.value[0], r[0]);
      } catch {
      }
  } catch (i) {
    n.value[1] = i;
  }
  n.recomputing = !1;
}
function Je(n) {
  return n.dirty || !!(n.dirtyChildren && n.dirtyChildren.size);
}
function Bh(n) {
  n.dirty = !1, !Je(n) && qa(n);
}
function Va(n) {
  Hi(n, Ba);
}
function qa(n) {
  Hi(n, Ua);
}
function Hi(n, e) {
  const t = n.parents.size;
  if (t) {
    const r = Ji(n.parents);
    for (let i = 0; i < t; ++i)
      e(r[i], n);
  }
}
function Ba(n, e) {
  Rt(n.childValues.has(e)), Rt(Je(e));
  const t = !Je(n);
  if (!n.dirtyChildren)
    n.dirtyChildren = fn.pop() || /* @__PURE__ */ new Set();
  else if (n.dirtyChildren.has(e))
    return;
  n.dirtyChildren.add(e), t && Va(n);
}
function Ua(n, e) {
  Rt(n.childValues.has(e)), Rt(!Je(e));
  const t = n.childValues.get(e);
  t.length === 0 ? n.childValues.set(e, Ma(e.value)) : Pa(t, e.value) || n.setDirty(), Qa(n, e), !Je(n) && qa(n);
}
function Qa(n, e) {
  const t = n.dirtyChildren;
  t && (t.delete(e), t.size === 0 && (fn.length < Mh && fn.push(t), n.dirtyChildren = null));
}
function za(n) {
  n.childValues.size > 0 && n.childValues.forEach((e, t) => {
    Wa(n, t);
  }), n.forgetDeps(), Rt(n.dirtyChildren === null);
}
function Wa(n, e) {
  e.parents.delete(n), n.childValues.delete(e), Qa(n, e);
}
function Uh(n, e) {
  if (typeof n.subscribe == "function")
    try {
      Ki(n), n.unsubscribe = n.subscribe.apply(null, e);
    } catch {
      return n.setDirty(), !1;
    }
  return !0;
}
const Qh = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function Ya(n) {
  const e = /* @__PURE__ */ new Map();
  function t(r) {
    const i = fr.getValue();
    if (i) {
      let s = e.get(r);
      s || e.set(r, s = /* @__PURE__ */ new Set()), i.dependOn(s);
    }
  }
  return t.dirty = function(r, i) {
    const s = e.get(r);
    if (s) {
      const o = i && jh.call(Qh, i) ? i : "setDirty";
      Ji(s).forEach((a) => a[o]()), e.delete(r), Ki(s);
    }
  }, t;
}
let no;
function zh(...n) {
  return (no || (no = new Gi(typeof WeakMap == "function"))).lookupArray(n);
}
const Cr = /* @__PURE__ */ new Set();
function pn(n, { max: e = Math.pow(2, 16), keyArgs: t, makeCacheKey: r = zh, normalizeResult: i, subscribe: s, cache: o = ui } = /* @__PURE__ */ Object.create(null)) {
  const a = typeof o == "function" ? new o(e, (f) => f.dispose()) : o, c = function() {
    const f = r.apply(null, t ? t.apply(null, arguments) : arguments);
    if (f === void 0)
      return n.apply(null, arguments);
    let d = a.get(f);
    d || (a.set(f, d = new pr(n)), d.normalizeResult = i, d.subscribe = s, d.forget = () => a.delete(f));
    const y = d.recompute(Array.prototype.slice.call(arguments));
    return a.set(f, d), Cr.add(a), fr.hasValue() || (Cr.forEach((g) => g.clean()), Cr.clear()), y;
  };
  Object.defineProperty(c, "size", {
    get: () => a.size,
    configurable: !1,
    enumerable: !1
  }), Object.freeze(c.options = {
    max: e,
    keyArgs: t,
    makeCacheKey: r,
    normalizeResult: i,
    subscribe: s,
    cache: a
  });
  function u(f) {
    const d = f && a.get(f);
    d && d.setDirty();
  }
  c.dirtyKey = u, c.dirty = function() {
    u(r.apply(null, arguments));
  };
  function l(f) {
    const d = f && a.get(f);
    if (d)
      return d.peek();
  }
  c.peekKey = l, c.peek = function() {
    return l(r.apply(null, arguments));
  };
  function h(f) {
    return f ? a.delete(f) : !1;
  }
  return c.forgetKey = h, c.forget = function() {
    return h(r.apply(null, arguments));
  }, c.makeCacheKey = r, c.getKey = t ? function() {
    return r.apply(null, t.apply(null, arguments));
  } : r, Object.freeze(c);
}
function Wh(n) {
  return n;
}
var $a = (
  /** @class */
  function() {
    function n(e, t) {
      t === void 0 && (t = /* @__PURE__ */ Object.create(null)), this.resultCache = ka ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = e, t.getCacheKey && (this.getCacheKey = t.getCacheKey), this.cached = t.cache !== !1, this.resetCache();
    }
    return n.prototype.getCacheKey = function(e) {
      return [e];
    }, n.identity = function() {
      return new n(Wh, { cache: !1 });
    }, n.split = function(e, t, r) {
      return r === void 0 && (r = n.identity()), Object.assign(new n(
        function(i) {
          var s = e(i) ? t : r;
          return s.transformDocument(i);
        },
        // Reasonably assume both `left` and `right` transforms handle their own caching
        { cache: !1 }
      ), { left: t, right: r });
    }, n.prototype.resetCache = function() {
      var e = this;
      if (this.cached) {
        var t = new Pt(jt);
        this.performWork = pn(n.prototype.performWork.bind(this), {
          makeCacheKey: function(r) {
            var i = e.getCacheKey(r);
            if (i)
              return L(Array.isArray(i), 68), t.lookupArray(i);
          },
          max: je["documentTransform.cache"],
          cache: Zn
        });
      }
    }, n.prototype.performWork = function(e) {
      return En(e), this.transform(e);
    }, n.prototype.transformDocument = function(e) {
      if (this.resultCache.has(e))
        return e;
      var t = this.performWork(e);
      return this.resultCache.add(t), t;
    }, n.prototype.concat = function(e) {
      var t = this;
      return Object.assign(new n(
        function(r) {
          return e.transformDocument(t.transformDocument(r));
        },
        // Reasonably assume both transforms handle their own caching
        { cache: !1 }
      ), {
        left: this,
        right: e
      });
    }, n;
  }()
), sn, dr = Object.assign(function(n) {
  var e = sn.get(n);
  return e || (e = Bl(n), sn.set(n, e)), e;
}, {
  reset: function() {
    sn = new Na(
      je.print || 2e3
      /* defaultCacheSizes.print */
    );
  }
});
dr.reset();
globalThis.__DEV__ !== !1 && Ia("print", function() {
  return sn ? sn.size : 0;
});
var te = Array.isArray;
function Ie(n) {
  return Array.isArray(n) && n.length > 0;
}
var ro = {
  kind: I.FIELD,
  name: {
    kind: I.NAME,
    value: "__typename"
  }
};
function Ga(n, e) {
  return !n || n.selectionSet.selections.every(function(t) {
    return t.kind === I.FRAGMENT_SPREAD && Ga(e[t.name.value], e);
  });
}
function Yh(n) {
  return Ga(Tn(n) || Ih(n), cr(hr(n))) ? null : n;
}
function $h(n) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return n.forEach(function(r) {
    r && (r.name ? e.set(r.name, r) : r.test && t.set(r.test, r));
  }), function(r) {
    var i = e.get(r.name.value);
    return !i && t.size && t.forEach(function(s, o) {
      o(r) && (i = s);
    }), i;
  };
}
function io(n) {
  var e = /* @__PURE__ */ new Map();
  return function(t) {
    t === void 0 && (t = n);
    var r = e.get(t);
    return r || e.set(t, r = {
      // Variable and fragment spread names used directly within this
      // operation or fragment definition, as identified by key. These sets
      // will be populated during the first traversal of the document in
      // removeDirectivesFromDocument below.
      variables: /* @__PURE__ */ new Set(),
      fragmentSpreads: /* @__PURE__ */ new Set()
    }), r;
  };
}
function Ja(n, e) {
  En(e);
  for (var t = io(""), r = io(""), i = function(m) {
    for (var _ = 0, b = void 0; _ < m.length && (b = m[_]); ++_)
      if (!te(b)) {
        if (b.kind === I.OPERATION_DEFINITION)
          return t(b.name && b.name.value);
        if (b.kind === I.FRAGMENT_DEFINITION)
          return r(b.name.value);
      }
    return globalThis.__DEV__ !== !1 && L.error(85), null;
  }, s = 0, o = e.definitions.length - 1; o >= 0; --o)
    e.definitions[o].kind === I.OPERATION_DEFINITION && ++s;
  var a = $h(n), c = function(m) {
    return Ie(m) && m.map(a).some(function(_) {
      return _ && _.remove;
    });
  }, u = /* @__PURE__ */ new Map(), l = !1, h = {
    enter: function(m) {
      if (c(m.directives))
        return l = !0, null;
    }
  }, f = Pe(e, {
    // These two AST node types share the same implementation, defined above.
    Field: h,
    InlineFragment: h,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(m, _, b, x, S) {
        var D = i(S);
        D && D.variables.add(m.name.value);
      }
    },
    FragmentSpread: {
      enter: function(m, _, b, x, S) {
        if (c(m.directives))
          return l = !0, null;
        var D = i(S);
        D && D.fragmentSpreads.add(m.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(m, _, b, x) {
        u.set(JSON.stringify(x), m);
      },
      leave: function(m, _, b, x) {
        var S = u.get(JSON.stringify(x));
        if (m === S)
          return m;
        if (
          // This logic applies only if the document contains one or more
          // operations, since removing all fragments from a document containing
          // only fragments makes the document useless.
          s > 0 && m.selectionSet.selections.every(function(D) {
            return D.kind === I.FIELD && D.name.value === "__typename";
          })
        )
          return r(m.name.value).removed = !0, l = !0, null;
      }
    },
    Directive: {
      leave: function(m) {
        if (a(m))
          return l = !0, null;
      }
    }
  });
  if (!l)
    return e;
  var d = function(m) {
    return m.transitiveVars || (m.transitiveVars = new Set(m.variables), m.removed || m.fragmentSpreads.forEach(function(_) {
      d(r(_)).transitiveVars.forEach(function(b) {
        m.transitiveVars.add(b);
      });
    })), m;
  }, y = /* @__PURE__ */ new Set();
  f.definitions.forEach(function(m) {
    m.kind === I.OPERATION_DEFINITION ? d(t(m.name && m.name.value)).fragmentSpreads.forEach(function(_) {
      y.add(_);
    }) : m.kind === I.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
    // definitions count as usages of their own fragment names. This heuristic
    // prevents accidentally removing all fragment definitions from the
    // document just because it contains no operations that use the fragments.
    s === 0 && !r(m.name.value).removed && y.add(m.name.value);
  }), y.forEach(function(m) {
    d(r(m)).fragmentSpreads.forEach(function(_) {
      y.add(_);
    });
  });
  var g = function(m) {
    return !!// A fragment definition will be removed if there are no spreads that refer
    // to it, or the fragment was explicitly removed because it had no fields
    // other than __typename.
    (!y.has(m) || r(m).removed);
  }, E = {
    enter: function(m) {
      if (g(m.name.value))
        return null;
    }
  };
  return Yh(Pe(f, {
    // If the fragment is going to be removed, then leaving any dangling
    // FragmentSpread nodes with the same name would be a mistake.
    FragmentSpread: E,
    // This is where the fragment definition is actually removed.
    FragmentDefinition: E,
    OperationDefinition: {
      leave: function(m) {
        if (m.variableDefinitions) {
          var _ = d(
            // If an operation is anonymous, we use the empty string as its key.
            t(m.name && m.name.value)
          ).transitiveVars;
          if (_.size < m.variableDefinitions.length)
            return v(v({}, m), { variableDefinitions: m.variableDefinitions.filter(function(b) {
              return _.has(b.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var Xi = Object.assign(function(n) {
  return Pe(n, {
    SelectionSet: {
      enter: function(e, t, r) {
        if (!(r && r.kind === I.OPERATION_DEFINITION)) {
          var i = e.selections;
          if (i) {
            var s = i.some(function(a) {
              return Ge(a) && (a.name.value === "__typename" || a.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!s) {
              var o = r;
              if (!(Ge(o) && o.directives && o.directives.some(function(a) {
                return a.name.value === "export";
              })))
                return v(v({}, e), { selections: be(be([], i, !0), [ro], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(n) {
    return n === ro;
  }
});
function Gh(n) {
  var e = On(n), t = e.operation;
  if (t === "query")
    return n;
  var r = Pe(n, {
    OperationDefinition: {
      enter: function(i) {
        return v(v({}, i), { operation: "query" });
      }
    }
  });
  return r;
}
function Ka(n) {
  En(n);
  var e = Ja([
    {
      test: function(t) {
        return t.name.value === "client";
      },
      remove: !0
    }
  ], n);
  return e;
}
var Jh = Object.prototype.hasOwnProperty;
function so() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  return yr(n);
}
function yr(n) {
  var e = n[0] || {}, t = n.length;
  if (t > 1)
    for (var r = new Ke(), i = 1; i < t; ++i)
      e = r.merge(e, n[i]);
  return e;
}
var Kh = function(n, e, t) {
  return this.merge(n[t], e[t]);
}, Ke = (
  /** @class */
  function() {
    function n(e) {
      e === void 0 && (e = Kh), this.reconciler = e, this.isObject = ee, this.pastCopies = /* @__PURE__ */ new Set();
    }
    return n.prototype.merge = function(e, t) {
      for (var r = this, i = [], s = 2; s < arguments.length; s++)
        i[s - 2] = arguments[s];
      return ee(t) && ee(e) ? (Object.keys(t).forEach(function(o) {
        if (Jh.call(e, o)) {
          var a = e[o];
          if (t[o] !== a) {
            var c = r.reconciler.apply(r, be([
              e,
              t,
              o
            ], i, !1));
            c !== a && (e = r.shallowCopyForMerge(e), e[o] = c);
          }
        } else
          e = r.shallowCopyForMerge(e), e[o] = t[o];
      }), e) : t;
    }, n.prototype.shallowCopyForMerge = function(e) {
      return ee(e) && (this.pastCopies.has(e) || (Array.isArray(e) ? e = e.slice(0) : e = v({ __proto__: Object.getPrototypeOf(e) }, e), this.pastCopies.add(e))), e;
    }, n;
  }()
);
function Hh(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t) return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = Xh(n)) || e) {
    t && (n = t);
    var r = 0;
    return function() {
      return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xh(n, e) {
  if (n) {
    if (typeof n == "string") return oo(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return oo(n, e);
  }
}
function oo(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function ao(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function Zi(n, e, t) {
  return e && ao(n.prototype, e), t && ao(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var es = function() {
  return typeof Symbol == "function";
}, ts = function(n) {
  return es() && !!Symbol[n];
}, ns = function(n) {
  return ts(n) ? Symbol[n] : "@@" + n;
};
es() && !ts("observable") && (Symbol.observable = Symbol("observable"));
var Zh = ns("iterator"), yi = ns("observable"), Ha = ns("species");
function er(n, e) {
  var t = n[e];
  if (t != null) {
    if (typeof t != "function") throw new TypeError(t + " is not a function");
    return t;
  }
}
function Gt(n) {
  var e = n.constructor;
  return e !== void 0 && (e = e[Ha], e === null && (e = void 0)), e !== void 0 ? e : H;
}
function ef(n) {
  return n instanceof H;
}
function At(n) {
  At.log ? At.log(n) : setTimeout(function() {
    throw n;
  });
}
function zn(n) {
  Promise.resolve().then(function() {
    try {
      n();
    } catch (e) {
      At(e);
    }
  });
}
function Xa(n) {
  var e = n._cleanup;
  if (e !== void 0 && (n._cleanup = void 0, !!e))
    try {
      if (typeof e == "function")
        e();
      else {
        var t = er(e, "unsubscribe");
        t && t.call(e);
      }
    } catch (r) {
      At(r);
    }
}
function vi(n) {
  n._observer = void 0, n._queue = void 0, n._state = "closed";
}
function tf(n) {
  var e = n._queue;
  if (e) {
    n._queue = void 0, n._state = "ready";
    for (var t = 0; t < e.length && (Za(n, e[t].type, e[t].value), n._state !== "closed"); ++t)
      ;
  }
}
function Za(n, e, t) {
  n._state = "running";
  var r = n._observer;
  try {
    var i = er(r, e);
    switch (e) {
      case "next":
        i && i.call(r, t);
        break;
      case "error":
        if (vi(n), i) i.call(r, t);
        else throw t;
        break;
      case "complete":
        vi(n), i && i.call(r);
        break;
    }
  } catch (s) {
    At(s);
  }
  n._state === "closed" ? Xa(n) : n._state === "running" && (n._state = "ready");
}
function Fr(n, e, t) {
  if (n._state !== "closed") {
    if (n._state === "buffering") {
      n._queue.push({
        type: e,
        value: t
      });
      return;
    }
    if (n._state !== "ready") {
      n._state = "buffering", n._queue = [{
        type: e,
        value: t
      }], zn(function() {
        return tf(n);
      });
      return;
    }
    Za(n, e, t);
  }
}
var nf = /* @__PURE__ */ function() {
  function n(t, r) {
    this._cleanup = void 0, this._observer = t, this._queue = void 0, this._state = "initializing";
    var i = new rf(this);
    try {
      this._cleanup = r.call(void 0, i);
    } catch (s) {
      i.error(s);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var e = n.prototype;
  return e.unsubscribe = function() {
    this._state !== "closed" && (vi(this), Xa(this));
  }, Zi(n, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), n;
}(), rf = /* @__PURE__ */ function() {
  function n(t) {
    this._subscription = t;
  }
  var e = n.prototype;
  return e.next = function(t) {
    Fr(this._subscription, "next", t);
  }, e.error = function(t) {
    Fr(this._subscription, "error", t);
  }, e.complete = function() {
    Fr(this._subscription, "complete");
  }, Zi(n, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), n;
}(), H = /* @__PURE__ */ function() {
  function n(t) {
    if (!(this instanceof n)) throw new TypeError("Observable cannot be called as a function");
    if (typeof t != "function") throw new TypeError("Observable initializer must be a function");
    this._subscriber = t;
  }
  var e = n.prototype;
  return e.subscribe = function(t) {
    return (typeof t != "object" || t === null) && (t = {
      next: t,
      error: arguments[1],
      complete: arguments[2]
    }), new nf(t, this._subscriber);
  }, e.forEach = function(t) {
    var r = this;
    return new Promise(function(i, s) {
      if (typeof t != "function") {
        s(new TypeError(t + " is not a function"));
        return;
      }
      function o() {
        a.unsubscribe(), i();
      }
      var a = r.subscribe({
        next: function(c) {
          try {
            t(c, o);
          } catch (u) {
            s(u), a.unsubscribe();
          }
        },
        error: s,
        complete: i
      });
    });
  }, e.map = function(t) {
    var r = this;
    if (typeof t != "function") throw new TypeError(t + " is not a function");
    var i = Gt(this);
    return new i(function(s) {
      return r.subscribe({
        next: function(o) {
          try {
            o = t(o);
          } catch (a) {
            return s.error(a);
          }
          s.next(o);
        },
        error: function(o) {
          s.error(o);
        },
        complete: function() {
          s.complete();
        }
      });
    });
  }, e.filter = function(t) {
    var r = this;
    if (typeof t != "function") throw new TypeError(t + " is not a function");
    var i = Gt(this);
    return new i(function(s) {
      return r.subscribe({
        next: function(o) {
          try {
            if (!t(o)) return;
          } catch (a) {
            return s.error(a);
          }
          s.next(o);
        },
        error: function(o) {
          s.error(o);
        },
        complete: function() {
          s.complete();
        }
      });
    });
  }, e.reduce = function(t) {
    var r = this;
    if (typeof t != "function") throw new TypeError(t + " is not a function");
    var i = Gt(this), s = arguments.length > 1, o = !1, a = arguments[1], c = a;
    return new i(function(u) {
      return r.subscribe({
        next: function(l) {
          var h = !o;
          if (o = !0, !h || s)
            try {
              c = t(c, l);
            } catch (f) {
              return u.error(f);
            }
          else
            c = l;
        },
        error: function(l) {
          u.error(l);
        },
        complete: function() {
          if (!o && !s) return u.error(new TypeError("Cannot reduce an empty sequence"));
          u.next(c), u.complete();
        }
      });
    });
  }, e.concat = function() {
    for (var t = this, r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    var o = Gt(this);
    return new o(function(a) {
      var c, u = 0;
      function l(h) {
        c = h.subscribe({
          next: function(f) {
            a.next(f);
          },
          error: function(f) {
            a.error(f);
          },
          complete: function() {
            u === i.length ? (c = void 0, a.complete()) : l(o.from(i[u++]));
          }
        });
      }
      return l(t), function() {
        c && (c.unsubscribe(), c = void 0);
      };
    });
  }, e.flatMap = function(t) {
    var r = this;
    if (typeof t != "function") throw new TypeError(t + " is not a function");
    var i = Gt(this);
    return new i(function(s) {
      var o = [], a = r.subscribe({
        next: function(u) {
          if (t)
            try {
              u = t(u);
            } catch (h) {
              return s.error(h);
            }
          var l = i.from(u).subscribe({
            next: function(h) {
              s.next(h);
            },
            error: function(h) {
              s.error(h);
            },
            complete: function() {
              var h = o.indexOf(l);
              h >= 0 && o.splice(h, 1), c();
            }
          });
          o.push(l);
        },
        error: function(u) {
          s.error(u);
        },
        complete: function() {
          c();
        }
      });
      function c() {
        a.closed && o.length === 0 && s.complete();
      }
      return function() {
        o.forEach(function(u) {
          return u.unsubscribe();
        }), a.unsubscribe();
      };
    });
  }, e[yi] = function() {
    return this;
  }, n.from = function(t) {
    var r = typeof this == "function" ? this : n;
    if (t == null) throw new TypeError(t + " is not an object");
    var i = er(t, yi);
    if (i) {
      var s = i.call(t);
      if (Object(s) !== s) throw new TypeError(s + " is not an object");
      return ef(s) && s.constructor === r ? s : new r(function(o) {
        return s.subscribe(o);
      });
    }
    if (ts("iterator") && (i = er(t, Zh), i))
      return new r(function(o) {
        zn(function() {
          if (!o.closed) {
            for (var a = Hh(i.call(t)), c; !(c = a()).done; ) {
              var u = c.value;
              if (o.next(u), o.closed) return;
            }
            o.complete();
          }
        });
      });
    if (Array.isArray(t))
      return new r(function(o) {
        zn(function() {
          if (!o.closed) {
            for (var a = 0; a < t.length; ++a)
              if (o.next(t[a]), o.closed) return;
            o.complete();
          }
        });
      });
    throw new TypeError(t + " is not observable");
  }, n.of = function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    var s = typeof this == "function" ? this : n;
    return new s(function(o) {
      zn(function() {
        if (!o.closed) {
          for (var a = 0; a < r.length; ++a)
            if (o.next(r[a]), o.closed) return;
          o.complete();
        }
      });
    });
  }, Zi(n, null, [{
    key: Ha,
    get: function() {
      return this;
    }
  }]), n;
}();
es() && Object.defineProperty(H, Symbol("extensions"), {
  value: {
    symbol: yi,
    hostReportError: At
  },
  configurable: !0
});
function sf(n) {
  var e, t = n.Symbol;
  if (typeof t == "function")
    if (t.observable)
      e = t.observable;
    else {
      typeof t.for == "function" ? e = t.for("https://github.com/benlesh/symbol-observable") : e = t("https://github.com/benlesh/symbol-observable");
      try {
        t.observable = e;
      } catch {
      }
    }
  else
    e = "@@observable";
  return e;
}
var ft;
typeof self < "u" ? ft = self : typeof window < "u" ? ft = window : typeof global < "u" ? ft = global : typeof module < "u" ? ft = module : ft = Function("return this")();
sf(ft);
var co = H.prototype, uo = "@@observable";
co[uo] || (co[uo] = function() {
  return this;
});
var of = Object.prototype.toString;
function ec(n) {
  return mi(n);
}
function mi(n, e) {
  switch (of.call(n)) {
    case "[object Array]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(n))
        return e.get(n);
      var t = n.slice(0);
      return e.set(n, t), t.forEach(function(i, s) {
        t[s] = mi(i, e);
      }), t;
    }
    case "[object Object]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(n))
        return e.get(n);
      var r = Object.create(Object.getPrototypeOf(n));
      return e.set(n, r), Object.keys(n).forEach(function(i) {
        r[i] = mi(n[i], e);
      }), r;
    }
    default:
      return n;
  }
}
function af(n) {
  var e = /* @__PURE__ */ new Set([n]);
  return e.forEach(function(t) {
    ee(t) && cf(t) === t && Object.getOwnPropertyNames(t).forEach(function(r) {
      ee(t[r]) && e.add(t[r]);
    });
  }), n;
}
function cf(n) {
  if (globalThis.__DEV__ !== !1 && !Object.isFrozen(n))
    try {
      Object.freeze(n);
    } catch (e) {
      if (e instanceof TypeError)
        return null;
      throw e;
    }
  return n;
}
function gi(n) {
  return globalThis.__DEV__ !== !1 && af(n), n;
}
function on(n, e, t) {
  var r = [];
  n.forEach(function(i) {
    return i[e] && r.push(i);
  }), r.forEach(function(i) {
    return i[e](t);
  });
}
function Lr(n, e, t) {
  return new H(function(r) {
    var i = {
      // Normally we would initialize promiseQueue to Promise.resolve(), but
      // in this case, for backwards compatibility, we need to be careful to
      // invoke the first callback synchronously.
      then: function(c) {
        return new Promise(function(u) {
          return u(c());
        });
      }
    };
    function s(c, u) {
      return function(l) {
        if (c) {
          var h = function() {
            return r.closed ? (
              /* will be swallowed */
              0
            ) : c(l);
          };
          i = i.then(h, h).then(function(f) {
            return r.next(f);
          }, function(f) {
            return r.error(f);
          });
        } else
          r[u](l);
      };
    }
    var o = {
      next: s(e, "next"),
      error: s(t, "error"),
      complete: function() {
        i.then(function() {
          return r.complete();
        });
      }
    }, a = n.subscribe(o);
    return function() {
      return a.unsubscribe();
    };
  });
}
function tc(n) {
  function e(t) {
    Object.defineProperty(n, t, { value: H });
  }
  return Sa && Symbol.species && e(Symbol.species), e("@@species"), n;
}
function lo(n) {
  return n && typeof n.then == "function";
}
var pt = (
  /** @class */
  function(n) {
    Re(e, n);
    function e(t) {
      var r = n.call(this, function(i) {
        return r.addObserver(i), function() {
          return r.removeObserver(i);
        };
      }) || this;
      return r.observers = /* @__PURE__ */ new Set(), r.promise = new Promise(function(i, s) {
        r.resolve = i, r.reject = s;
      }), r.handlers = {
        next: function(i) {
          r.sub !== null && (r.latest = ["next", i], r.notify("next", i), on(r.observers, "next", i));
        },
        error: function(i) {
          var s = r.sub;
          s !== null && (s && setTimeout(function() {
            return s.unsubscribe();
          }), r.sub = null, r.latest = ["error", i], r.reject(i), r.notify("error", i), on(r.observers, "error", i));
        },
        complete: function() {
          var i = r, s = i.sub, o = i.sources, a = o === void 0 ? [] : o;
          if (s !== null) {
            var c = a.shift();
            c ? lo(c) ? c.then(function(u) {
              return r.sub = u.subscribe(r.handlers);
            }, r.handlers.error) : r.sub = c.subscribe(r.handlers) : (s && setTimeout(function() {
              return s.unsubscribe();
            }), r.sub = null, r.latest && r.latest[0] === "next" ? r.resolve(r.latest[1]) : r.resolve(), r.notify("complete"), on(r.observers, "complete"));
          }
        }
      }, r.nextResultListeners = /* @__PURE__ */ new Set(), r.cancel = function(i) {
        r.reject(i), r.sources = [], r.handlers.complete();
      }, r.promise.catch(function(i) {
      }), typeof t == "function" && (t = [new H(t)]), lo(t) ? t.then(function(i) {
        return r.start(i);
      }, r.handlers.error) : r.start(t), r;
    }
    return e.prototype.start = function(t) {
      this.sub === void 0 && (this.sources = Array.from(t), this.handlers.complete());
    }, e.prototype.deliverLastMessage = function(t) {
      if (this.latest) {
        var r = this.latest[0], i = t[r];
        i && i.call(t, this.latest[1]), this.sub === null && r === "next" && t.complete && t.complete();
      }
    }, e.prototype.addObserver = function(t) {
      this.observers.has(t) || (this.deliverLastMessage(t), this.observers.add(t));
    }, e.prototype.removeObserver = function(t) {
      this.observers.delete(t) && this.observers.size < 1 && this.handlers.complete();
    }, e.prototype.notify = function(t, r) {
      var i = this.nextResultListeners;
      i.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), i.forEach(function(s) {
        return s(t, r);
      }));
    }, e.prototype.beforeNext = function(t) {
      var r = !1;
      this.nextResultListeners.add(function(i, s) {
        r || (r = !0, t(i, s));
      });
    }, e;
  }(H)
);
tc(pt);
function Tt(n) {
  return "incremental" in n;
}
function uf(n) {
  return "hasNext" in n && "data" in n;
}
function lf(n) {
  return Tt(n) || uf(n);
}
function hf(n) {
  return ee(n) && "payload" in n;
}
function nc(n, e) {
  var t = n, r = new Ke();
  return Tt(e) && Ie(e.incremental) && e.incremental.forEach(function(i) {
    for (var s = i.data, o = i.path, a = o.length - 1; a >= 0; --a) {
      var c = o[a], u = !isNaN(+c), l = u ? [] : {};
      l[c] = s, s = l;
    }
    t = r.merge(t, s);
  }), t;
}
function Wn(n) {
  var e = bi(n);
  return Ie(e);
}
function bi(n) {
  var e = Ie(n.errors) ? n.errors.slice(0) : [];
  return Tt(n) && Ie(n.incremental) && n.incremental.forEach(function(t) {
    t.errors && e.push.apply(e, t.errors);
  }), e;
}
function Ct() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = /* @__PURE__ */ Object.create(null);
  return n.forEach(function(r) {
    r && Object.keys(r).forEach(function(i) {
      var s = r[i];
      s !== void 0 && (t[i] = s);
    });
  }), t;
}
function Pr(n, e) {
  return Ct(n, e, e.variables && {
    variables: Ct(v(v({}, n && n.variables), e.variables))
  });
}
function jr(n) {
  return new H(function(e) {
    e.error(n);
  });
}
var rc = function(n, e, t) {
  var r = new Error(t);
  throw r.name = "ServerError", r.response = n, r.statusCode = n.status, r.result = e, r;
};
function ff(n) {
  for (var e = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], t = 0, r = Object.keys(n); t < r.length; t++) {
    var i = r[t];
    if (e.indexOf(i) < 0)
      throw ve(43, i);
  }
  return n;
}
function pf(n, e) {
  var t = v({}, n), r = function(s) {
    typeof s == "function" ? t = v(v({}, t), s(t)) : t = v(v({}, t), s);
  }, i = function() {
    return v({}, t);
  };
  return Object.defineProperty(e, "setContext", {
    enumerable: !1,
    value: r
  }), Object.defineProperty(e, "getContext", {
    enumerable: !1,
    value: i
  }), e;
}
function df(n) {
  var e = {
    variables: n.variables || {},
    extensions: n.extensions || {},
    operationName: n.operationName,
    query: n.query
  };
  return e.operationName || (e.operationName = typeof e.query != "string" ? di(e.query) || void 0 : ""), e;
}
function yf(n, e) {
  var t = v({}, n), r = new Set(Object.keys(n));
  return Pe(e, {
    Variable: function(i, s, o) {
      o && o.kind !== "VariableDefinition" && r.delete(i.name.value);
    }
  }), r.forEach(function(i) {
    delete t[i];
  }), t;
}
function ho(n, e) {
  return e ? e(n) : H.of();
}
function Jt(n) {
  return typeof n == "function" ? new _n(n) : n;
}
function Ln(n) {
  return n.request.length <= 1;
}
var _n = (
  /** @class */
  function() {
    function n(e) {
      e && (this.request = e);
    }
    return n.empty = function() {
      return new n(function() {
        return H.of();
      });
    }, n.from = function(e) {
      return e.length === 0 ? n.empty() : e.map(Jt).reduce(function(t, r) {
        return t.concat(r);
      });
    }, n.split = function(e, t, r) {
      var i = Jt(t), s = Jt(r || new n(ho)), o;
      return Ln(i) && Ln(s) ? o = new n(function(a) {
        return e(a) ? i.request(a) || H.of() : s.request(a) || H.of();
      }) : o = new n(function(a, c) {
        return e(a) ? i.request(a, c) || H.of() : s.request(a, c) || H.of();
      }), Object.assign(o, { left: i, right: s });
    }, n.execute = function(e, t) {
      return e.request(pf(t.context, df(ff(t)))) || H.of();
    }, n.concat = function(e, t) {
      var r = Jt(e);
      if (Ln(r))
        return globalThis.__DEV__ !== !1 && L.warn(35, r), r;
      var i = Jt(t), s;
      return Ln(i) ? s = new n(function(o) {
        return r.request(o, function(a) {
          return i.request(a) || H.of();
        }) || H.of();
      }) : s = new n(function(o, a) {
        return r.request(o, function(c) {
          return i.request(c, a) || H.of();
        }) || H.of();
      }), Object.assign(s, { left: r, right: i });
    }, n.prototype.split = function(e, t, r) {
      return this.concat(n.split(e, t, r || new n(ho)));
    }, n.prototype.concat = function(e) {
      return n.concat(this, e);
    }, n.prototype.request = function(e, t) {
      throw ve(36);
    }, n.prototype.onError = function(e, t) {
      if (t && t.error)
        return t.error(e), !1;
      throw e;
    }, n.prototype.setOnError = function(e) {
      return this.onError = e, this;
    }, n;
  }()
), Ei = _n.execute;
function vf(n) {
  var e, t = n[Symbol.asyncIterator]();
  return e = {
    next: function() {
      return t.next();
    }
  }, e[Symbol.asyncIterator] = function() {
    return this;
  }, e;
}
function mf(n) {
  var e = null, t = null, r = !1, i = [], s = [];
  function o(h) {
    if (!t) {
      if (s.length) {
        var f = s.shift();
        if (Array.isArray(f) && f[0])
          return f[0]({ value: h, done: !1 });
      }
      i.push(h);
    }
  }
  function a(h) {
    t = h;
    var f = s.slice();
    f.forEach(function(d) {
      d[1](h);
    }), !e || e();
  }
  function c() {
    r = !0;
    var h = s.slice();
    h.forEach(function(f) {
      f[0]({ value: void 0, done: !0 });
    }), !e || e();
  }
  e = function() {
    e = null, n.removeListener("data", o), n.removeListener("error", a), n.removeListener("end", c), n.removeListener("finish", c), n.removeListener("close", c);
  }, n.on("data", o), n.on("error", a), n.on("end", c), n.on("finish", c), n.on("close", c);
  function u() {
    return new Promise(function(h, f) {
      if (t)
        return f(t);
      if (i.length)
        return h({ value: i.shift(), done: !1 });
      if (r)
        return h({ value: void 0, done: !0 });
      s.push([h, f]);
    });
  }
  var l = {
    next: function() {
      return u();
    }
  };
  return ar && (l[Symbol.asyncIterator] = function() {
    return this;
  }), l;
}
function gf(n) {
  var e = !1, t = {
    next: function() {
      return e ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (e = !0, new Promise(function(r, i) {
        n.then(function(s) {
          r({ value: s, done: !1 });
        }).catch(i);
      }));
    }
  };
  return ar && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function fo(n) {
  var e = {
    next: function() {
      return n.read();
    }
  };
  return ar && (e[Symbol.asyncIterator] = function() {
    return this;
  }), e;
}
function bf(n) {
  return !!n.body;
}
function Ef(n) {
  return !!n.getReader;
}
function Tf(n) {
  return !!(ar && n[Symbol.asyncIterator]);
}
function Of(n) {
  return !!n.stream;
}
function _f(n) {
  return !!n.arrayBuffer;
}
function wf(n) {
  return !!n.pipe;
}
function kf(n) {
  var e = n;
  if (bf(n) && (e = n.body), Tf(e))
    return vf(e);
  if (Ef(e))
    return fo(e.getReader());
  if (Of(e))
    return fo(e.stream().getReader());
  if (_f(e))
    return gf(e.arrayBuffer());
  if (wf(e))
    return mf(e);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var rs = Symbol();
function Sf(n) {
  return n.extensions ? Array.isArray(n.extensions[rs]) : !1;
}
function xf(n) {
  return n.hasOwnProperty("graphQLErrors");
}
var Nf = function(n) {
  var e = be(be(be([], n.graphQLErrors, !0), n.clientErrors, !0), n.protocolErrors, !0);
  return n.networkError && e.push(n.networkError), e.map(function(t) {
    return ee(t) && t.message || "Error message not found.";
  }).join(`
`);
}, ht = (
  /** @class */
  function(n) {
    Re(e, n);
    function e(t) {
      var r = t.graphQLErrors, i = t.protocolErrors, s = t.clientErrors, o = t.networkError, a = t.errorMessage, c = t.extraInfo, u = n.call(this, a) || this;
      return u.name = "ApolloError", u.graphQLErrors = r || [], u.protocolErrors = i || [], u.clientErrors = s || [], u.networkError = o || null, u.message = a || Nf(u), u.extraInfo = c, u.cause = be(be(be([
        o
      ], r || [], !0), i || [], !0), s || [], !0).find(function(l) {
        return !!l;
      }) || null, u.__proto__ = e.prototype, u;
    }
    return e;
  }(Error)
), po = Object.prototype.hasOwnProperty;
function If(n, e) {
  return qe(this, void 0, void 0, function() {
    var t, r, i, s, o, a, c, u, l, h, f, d, y, g, E, m, _, b, x, S, D, C, A, B;
    return Be(this, function(K) {
      switch (K.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          t = new TextDecoder("utf-8"), r = (B = n.headers) === null || B === void 0 ? void 0 : B.get("content-type"), i = "boundary=", s = r != null && r.includes(i) ? r == null ? void 0 : r.substring((r == null ? void 0 : r.indexOf(i)) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", o = `\r
--`.concat(s), a = "", c = kf(n), u = !0, K.label = 1;
        case 1:
          return u ? [4, c.next()] : [3, 3];
        case 2:
          for (l = K.sent(), h = l.value, f = l.done, d = typeof h == "string" ? h : t.decode(h), y = a.length - o.length + 1, u = !f, a += d, g = a.indexOf(o, y); g > -1; ) {
            if (E = void 0, C = [
              a.slice(0, g),
              a.slice(g + o.length)
            ], E = C[0], a = C[1], m = E.indexOf(`\r
\r
`), _ = Df(E.slice(0, m)), b = _["content-type"], b && b.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (x = E.slice(m), x) {
              if (S = ic(n, x), Object.keys(S).length > 1 || "data" in S || "incremental" in S || "errors" in S || "payload" in S)
                if (hf(S)) {
                  if (D = {}, "payload" in S) {
                    if (Object.keys(S).length === 1 && S.payload === null)
                      return [
                        2
                        /*return*/
                      ];
                    D = v({}, S.payload);
                  }
                  "errors" in S && (D = v(v({}, D), { extensions: v(v({}, "extensions" in D ? D.extensions : null), (A = {}, A[rs] = S.errors, A)) })), e(D);
                } else
                  e(S);
              else if (
                // If the chunk contains only a "hasNext: false", we can call
                // observer.complete() immediately.
                Object.keys(S).length === 1 && "hasNext" in S && !S.hasNext
              )
                return [
                  2
                  /*return*/
                ];
            }
            g = a.indexOf(o);
          }
          return [3, 1];
        case 3:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function Df(n) {
  var e = {};
  return n.split(`
`).forEach(function(t) {
    var r = t.indexOf(":");
    if (r > -1) {
      var i = t.slice(0, r).trim().toLowerCase(), s = t.slice(r + 1).trim();
      e[i] = s;
    }
  }), e;
}
function ic(n, e) {
  if (n.status >= 300) {
    var t = function() {
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    };
    rc(n, t(), "Response not successful: Received status code ".concat(n.status));
  }
  try {
    return JSON.parse(e);
  } catch (i) {
    var r = i;
    throw r.name = "ServerParseError", r.response = n, r.statusCode = n.status, r.bodyText = e, r;
  }
}
function Rf(n, e) {
  n.result && n.result.errors && n.result.data && e.next(n.result), e.error(n);
}
function Af(n) {
  return function(e) {
    return e.text().then(function(t) {
      return ic(e, t);
    }).then(function(t) {
      return !Array.isArray(t) && !po.call(t, "data") && !po.call(t, "errors") && rc(e, t, "Server response was missing for query '".concat(Array.isArray(n) ? n.map(function(r) {
        return r.operationName;
      }) : n.operationName, "'.")), t;
    });
  };
}
var Ti = function(n, e) {
  var t;
  try {
    t = JSON.stringify(n);
  } catch (i) {
    var r = ve(39, e, i.message);
    throw r.parseError = i, r;
  }
  return t;
}, Cf = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, Ff = {
  // headers are case insensitive (https://stackoverflow.com/a/5259004)
  accept: "*/*",
  // The content-type header describes the type of the body of the request, and
  // so it typically only is sent with requests that actually have bodies. One
  // could imagine that Apollo Client would remove this header when constructing
  // a GET request (which has no body), but we historically have not done that.
  // This means that browsers will preflight all Apollo Client requests (even
  // GET requests). Apollo Server's CSRF prevention feature (introduced in
  // AS3.7) takes advantage of this fact and does not block requests with this
  // header. If you want to drop this header from GET requests, then you should
  // probably replace it with a `apollo-require-preflight` header, or servers
  // with CSRF prevention enabled might block your GET request. See
  // https://www.apollographql.com/docs/apollo-server/security/cors/#preventing-cross-site-request-forgery-csrf
  // for more details.
  "content-type": "application/json"
}, Lf = {
  method: "POST"
}, Pf = {
  http: Cf,
  headers: Ff,
  options: Lf
}, jf = function(n, e) {
  return e(n);
};
function Mf(n, e) {
  for (var t = [], r = 2; r < arguments.length; r++)
    t[r - 2] = arguments[r];
  var i = {}, s = {};
  t.forEach(function(h) {
    i = v(v(v({}, i), h.options), { headers: v(v({}, i.headers), h.headers) }), h.credentials && (i.credentials = h.credentials), s = v(v({}, s), h.http);
  }), i.headers && (i.headers = Vf(i.headers, s.preserveHeaderCase));
  var o = n.operationName, a = n.extensions, c = n.variables, u = n.query, l = { operationName: o, variables: c };
  return s.includeExtensions && (l.extensions = a), s.includeQuery && (l.query = e(u, dr)), {
    options: i,
    body: l
  };
}
function Vf(n, e) {
  if (!e) {
    var t = /* @__PURE__ */ Object.create(null);
    return Object.keys(Object(n)).forEach(function(s) {
      t[s.toLowerCase()] = n[s];
    }), t;
  }
  var r = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(n)).forEach(function(s) {
    r[s.toLowerCase()] = {
      originalName: s,
      value: n[s]
    };
  });
  var i = /* @__PURE__ */ Object.create(null);
  return Object.keys(r).forEach(function(s) {
    i[r[s].originalName] = r[s].value;
  }), i;
}
var qf = function(n) {
  if (!n && typeof fetch > "u")
    throw ve(37);
}, Bf = function(n, e) {
  var t = n.getContext(), r = t.uri;
  return r || (typeof e == "function" ? e(n) : e || "/graphql");
};
function Uf(n, e) {
  var t = [], r = function(h, f) {
    t.push("".concat(h, "=").concat(encodeURIComponent(f)));
  };
  if ("query" in e && r("query", e.query), e.operationName && r("operationName", e.operationName), e.variables) {
    var i = void 0;
    try {
      i = Ti(e.variables, "Variables map");
    } catch (h) {
      return { parseError: h };
    }
    r("variables", i);
  }
  if (e.extensions) {
    var s = void 0;
    try {
      s = Ti(e.extensions, "Extensions map");
    } catch (h) {
      return { parseError: h };
    }
    r("extensions", s);
  }
  var o = "", a = n, c = n.indexOf("#");
  c !== -1 && (o = n.substr(c), a = n.substr(0, c));
  var u = a.indexOf("?") === -1 ? "?" : "&", l = a + u + t.join("&") + o;
  return { newURI: l };
}
var yo = we(function() {
  return fetch;
}), Qf = function(n) {
  n === void 0 && (n = {});
  var e = n.uri, t = e === void 0 ? "/graphql" : e, r = n.fetch, i = n.print, s = i === void 0 ? jf : i, o = n.includeExtensions, a = n.preserveHeaderCase, c = n.useGETForQueries, u = n.includeUnusedVariables, l = u === void 0 ? !1 : u, h = Le(n, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && qf(r || yo);
  var f = {
    http: { includeExtensions: o, preserveHeaderCase: a },
    options: h.fetchOptions,
    credentials: h.credentials,
    headers: h.headers
  };
  return new _n(function(d) {
    var y = Bf(d, t), g = d.getContext(), E = {};
    if (g.clientAwareness) {
      var m = g.clientAwareness, _ = m.name, b = m.version;
      _ && (E["apollographql-client-name"] = _), b && (E["apollographql-client-version"] = b);
    }
    var x = v(v({}, E), g.headers), S = {
      http: g.http,
      options: g.fetchOptions,
      credentials: g.credentials,
      headers: x
    };
    if (hn(["client"], d.query)) {
      var D = Ka(d.query);
      if (!D)
        return jr(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      d.query = D;
    }
    var C = Mf(d, s, Pf, f, S), A = C.options, B = C.body;
    B.variables && !l && (B.variables = yf(B.variables, d.query));
    var K;
    !A.signal && typeof AbortController < "u" && (K = new AbortController(), A.signal = K.signal);
    var Me = function(pe) {
      return pe.kind === "OperationDefinition" && pe.operation === "mutation";
    }, Ae = function(pe) {
      return pe.kind === "OperationDefinition" && pe.operation === "subscription";
    }, G = Ae(On(d.query)), fe = hn(["defer"], d.query);
    if (c && !d.query.definitions.some(Me) && (A.method = "GET"), fe || G) {
      A.headers = A.headers || {};
      var Ce = "multipart/mixed;";
      G && fe && globalThis.__DEV__ !== !1 && L.warn(38), G ? Ce += "boundary=graphql;subscriptionSpec=1.0,application/json" : fe && (Ce += "deferSpec=20220824,application/json"), A.headers.accept = Ce;
    }
    if (A.method === "GET") {
      var qt = Uf(y, B), wn = qt.newURI, Bt = qt.parseError;
      if (Bt)
        return jr(Bt);
      y = wn;
    } else
      try {
        A.body = Ti(B, "Payload");
      } catch (pe) {
        return jr(pe);
      }
    return new H(function(pe) {
      var kn = r || we(function() {
        return fetch;
      }) || yo, Ut = pe.next.bind(pe);
      return kn(y, A).then(function(Fe) {
        var ct;
        d.setContext({ response: Fe });
        var Sn = (ct = Fe.headers) === null || ct === void 0 ? void 0 : ct.get("content-type");
        return Sn !== null && /^multipart\/mixed/i.test(Sn) ? If(Fe, Ut) : Af(d)(Fe).then(Ut);
      }).then(function() {
        K = void 0, pe.complete();
      }).catch(function(Fe) {
        K = void 0, Rf(Fe, pe);
      }), function() {
        K && K.abort();
      };
    });
  });
}, zf = (
  /** @class */
  function(n) {
    Re(e, n);
    function e(t) {
      t === void 0 && (t = {});
      var r = n.call(this, Qf(t).request) || this;
      return r.options = t, r;
    }
    return e;
  }(_n)
);
const { toString: vo, hasOwnProperty: Wf } = Object.prototype, mo = Function.prototype.toString, Oi = /* @__PURE__ */ new Map();
function X(n, e) {
  try {
    return _i(n, e);
  } finally {
    Oi.clear();
  }
}
function _i(n, e) {
  if (n === e)
    return !0;
  const t = vo.call(n), r = vo.call(e);
  if (t !== r)
    return !1;
  switch (t) {
    case "[object Array]":
      if (n.length !== e.length)
        return !1;
    case "[object Object]": {
      if (bo(n, e))
        return !0;
      const i = go(n), s = go(e), o = i.length;
      if (o !== s.length)
        return !1;
      for (let a = 0; a < o; ++a)
        if (!Wf.call(e, i[a]))
          return !1;
      for (let a = 0; a < o; ++a) {
        const c = i[a];
        if (!_i(n[c], e[c]))
          return !1;
      }
      return !0;
    }
    case "[object Error]":
      return n.name === e.name && n.message === e.message;
    case "[object Number]":
      if (n !== n)
        return e !== e;
    case "[object Boolean]":
    case "[object Date]":
      return +n == +e;
    case "[object RegExp]":
    case "[object String]":
      return n == `${e}`;
    case "[object Map]":
    case "[object Set]": {
      if (n.size !== e.size)
        return !1;
      if (bo(n, e))
        return !0;
      const i = n.entries(), s = t === "[object Map]";
      for (; ; ) {
        const o = i.next();
        if (o.done)
          break;
        const [a, c] = o.value;
        if (!e.has(a) || s && !_i(c, e.get(a)))
          return !1;
      }
      return !0;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      n = new Uint8Array(n), e = new Uint8Array(e);
    case "[object DataView]": {
      let i = n.byteLength;
      if (i === e.byteLength)
        for (; i-- && n[i] === e[i]; )
          ;
      return i === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const i = mo.call(n);
      return i !== mo.call(e) ? !1 : !Gf(i, $f);
    }
  }
  return !1;
}
function go(n) {
  return Object.keys(n).filter(Yf, n);
}
function Yf(n) {
  return this[n] !== void 0;
}
const $f = "{ [native code] }";
function Gf(n, e) {
  const t = n.length - e.length;
  return t >= 0 && n.indexOf(e, t) === t;
}
function bo(n, e) {
  let t = Oi.get(n);
  if (t) {
    if (t.has(e))
      return !0;
  } else
    Oi.set(n, t = /* @__PURE__ */ new Set());
  return t.add(e), !1;
}
function sc(n, e, t, r) {
  var i = e.data, s = Le(e, ["data"]), o = t.data, a = Le(t, ["data"]);
  return X(s, a) && Yn(On(n).selectionSet, i, o, {
    fragmentMap: cr(hr(n)),
    variables: r
  });
}
function Yn(n, e, t, r) {
  if (e === t)
    return !0;
  var i = /* @__PURE__ */ new Set();
  return n.selections.every(function(s) {
    if (i.has(s) || (i.add(s), !bn(s, r.variables)) || Eo(s))
      return !0;
    if (Ge(s)) {
      var o = $e(s), a = e && e[o], c = t && t[o], u = s.selectionSet;
      if (!u)
        return X(a, c);
      var l = Array.isArray(a), h = Array.isArray(c);
      if (l !== h)
        return !1;
      if (l && h) {
        var f = a.length;
        if (c.length !== f)
          return !1;
        for (var d = 0; d < f; ++d)
          if (!Yn(u, a[d], c[d], r))
            return !1;
        return !0;
      }
      return Yn(u, a, c, r);
    } else {
      var y = ur(s, r.fragmentMap);
      if (y)
        return Eo(y) ? !0 : Yn(
          y.selectionSet,
          // Notice that we reuse the same aResult and bResult values here,
          // since the fragment ...spread does not specify a field name, but
          // consists of multiple fields (within the fragment's selection set)
          // that should be applied to the current result value(s).
          e,
          t,
          r
        );
    }
  });
}
function Eo(n) {
  return !!n.directives && n.directives.some(Jf);
}
function Jf(n) {
  return n.name.value === "nonreactive";
}
var oc = (
  /** @class */
  function() {
    function n() {
      this.assumeImmutableResults = !1, this.getFragmentDoc = pn(Xl, {
        max: je["cache.fragmentQueryDocuments"] || 1e3,
        cache: Zn
      });
    }
    return n.prototype.batch = function(e) {
      var t = this, r = typeof e.optimistic == "string" ? e.optimistic : e.optimistic === !1 ? null : void 0, i;
      return this.performTransaction(function() {
        return i = e.update(t);
      }, r), i;
    }, n.prototype.recordOptimisticTransaction = function(e, t) {
      this.performTransaction(e, t);
    }, n.prototype.transformDocument = function(e) {
      return e;
    }, n.prototype.transformForLink = function(e) {
      return e;
    }, n.prototype.identify = function(e) {
    }, n.prototype.gc = function() {
      return [];
    }, n.prototype.modify = function(e) {
      return !1;
    }, n.prototype.readQuery = function(e, t) {
      return t === void 0 && (t = !!e.optimistic), this.read(v(v({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: t }));
    }, n.prototype.watchFragment = function(e) {
      var t = this, r = e.fragment, i = e.fragmentName, s = e.from, o = e.optimistic, a = o === void 0 ? !0 : o, c = Le(e, ["fragment", "fragmentName", "from", "optimistic"]), u = this.getFragmentDoc(r, i), l = v(v({}, c), { returnPartialData: !0, id: typeof s == "string" ? s : this.identify(s), query: u, optimistic: a }), h;
      return new H(function(f) {
        return t.watch(v(v({}, l), { immediate: !0, callback: function(d) {
          if (
            // Always ensure we deliver the first result
            !(h && sc(u, { data: h == null ? void 0 : h.result }, { data: d.result }))
          ) {
            var y = {
              data: d.result,
              complete: !!d.complete
            };
            d.missing && (y.missing = yr(d.missing.map(function(g) {
              return g.missing;
            }))), h = d, f.next(y);
          }
        } }));
      });
    }, n.prototype.readFragment = function(e, t) {
      return t === void 0 && (t = !!e.optimistic), this.read(v(v({}, e), { query: this.getFragmentDoc(e.fragment, e.fragmentName), rootId: e.id, optimistic: t }));
    }, n.prototype.writeQuery = function(e) {
      var t = e.id, r = e.data, i = Le(e, ["id", "data"]);
      return this.write(Object.assign(i, {
        dataId: t || "ROOT_QUERY",
        result: r
      }));
    }, n.prototype.writeFragment = function(e) {
      var t = e.id, r = e.data, i = e.fragment, s = e.fragmentName, o = Le(e, ["id", "data", "fragment", "fragmentName"]);
      return this.write(Object.assign(o, {
        query: this.getFragmentDoc(i, s),
        dataId: t,
        result: r
      }));
    }, n.prototype.updateQuery = function(e, t) {
      return this.batch({
        update: function(r) {
          var i = r.readQuery(e), s = t(i);
          return s == null ? i : (r.writeQuery(v(v({}, e), { data: s })), s);
        }
      });
    }, n.prototype.updateFragment = function(e, t) {
      return this.batch({
        update: function(r) {
          var i = r.readFragment(e), s = t(i);
          return s == null ? i : (r.writeFragment(v(v({}, e), { data: s })), s);
        }
      });
    }, n;
  }()
);
globalThis.__DEV__ !== !1 && (oc.prototype.getMemoryInternals = uh);
var ac = (
  /** @class */
  function(n) {
    Re(e, n);
    function e(t, r, i, s) {
      var o, a = n.call(this, t) || this;
      if (a.message = t, a.path = r, a.query = i, a.variables = s, Array.isArray(a.path)) {
        a.missing = a.message;
        for (var c = a.path.length - 1; c >= 0; --c)
          a.missing = (o = {}, o[a.path[c]] = a.missing, o);
      } else
        a.missing = a.path;
      return a.__proto__ = e.prototype, a;
    }
    return e;
  }(Error)
), ce = Object.prototype.hasOwnProperty;
function Kt(n) {
  return n == null;
}
function cc(n, e) {
  var t = n.__typename, r = n.id, i = n._id;
  if (typeof t == "string" && (e && (e.keyObject = Kt(r) ? Kt(i) ? void 0 : { _id: i } : { id: r }), Kt(r) && !Kt(i) && (r = i), !Kt(r)))
    return "".concat(t, ":").concat(typeof r == "number" || typeof r == "string" ? r : JSON.stringify(r));
}
var uc = {
  dataIdFromObject: cc,
  addTypename: !0,
  resultCaching: !0,
  // Thanks to the shouldCanonizeResults helper, this should be the only line
  // you have to change to reenable canonization by default in the future.
  canonizeResults: !1
};
function Kf(n) {
  return Ct(uc, n);
}
function lc(n) {
  var e = n.canonizeResults;
  return e === void 0 ? uc.canonizeResults : e;
}
function Hf(n, e) {
  return W(e) ? n.get(e.__ref, "__typename") : e && e.__typename;
}
var hc = /^[_a-z][_0-9a-z]*/i;
function He(n) {
  var e = n.match(hc);
  return e ? e[0] : n;
}
function wi(n, e, t) {
  return ee(e) ? te(e) ? e.every(function(r) {
    return wi(n, r, t);
  }) : n.selections.every(function(r) {
    if (Ge(r) && bn(r, t)) {
      var i = $e(r);
      return ce.call(e, i) && (!r.selectionSet || wi(r.selectionSet, e[i], t));
    }
    return !0;
  }) : !1;
}
function mt(n) {
  return ee(n) && !W(n) && !te(n);
}
function Xf() {
  return new Ke();
}
function fc(n, e) {
  var t = cr(hr(n));
  return {
    fragmentMap: t,
    lookupFragment: function(r) {
      var i = t[r];
      return !i && e && (i = e.lookup(r)), i || null;
    }
  };
}
var $n = /* @__PURE__ */ Object.create(null), Mr = function() {
  return $n;
}, To = /* @__PURE__ */ Object.create(null), dn = (
  /** @class */
  function() {
    function n(e, t) {
      var r = this;
      this.policies = e, this.group = t, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(i, s) {
        return gi(W(i) ? r.get(i.__ref, s) : i && i[s]);
      }, this.canRead = function(i) {
        return W(i) ? r.has(i.__ref) : typeof i == "object";
      }, this.toReference = function(i, s) {
        if (typeof i == "string")
          return Et(i);
        if (W(i))
          return i;
        var o = r.policies.identify(i)[0];
        if (o) {
          var a = Et(o);
          return s && r.merge(o, i), a;
        }
      };
    }
    return n.prototype.toObject = function() {
      return v({}, this.data);
    }, n.prototype.has = function(e) {
      return this.lookup(e, !0) !== void 0;
    }, n.prototype.get = function(e, t) {
      if (this.group.depend(e, t), ce.call(this.data, e)) {
        var r = this.data[e];
        if (r && ce.call(r, t))
          return r[t];
      }
      if (t === "__typename" && ce.call(this.policies.rootTypenamesById, e))
        return this.policies.rootTypenamesById[e];
      if (this instanceof Ve)
        return this.parent.get(e, t);
    }, n.prototype.lookup = function(e, t) {
      if (t && this.group.depend(e, "__exists"), ce.call(this.data, e))
        return this.data[e];
      if (this instanceof Ve)
        return this.parent.lookup(e, t);
      if (this.policies.rootTypenamesById[e])
        return /* @__PURE__ */ Object.create(null);
    }, n.prototype.merge = function(e, t) {
      var r = this, i;
      W(e) && (e = e.__ref), W(t) && (t = t.__ref);
      var s = typeof e == "string" ? this.lookup(i = e) : e, o = typeof t == "string" ? this.lookup(i = t) : t;
      if (o) {
        L(typeof i == "string", 1);
        var a = new Ke(ep).merge(s, o);
        if (this.data[i] = a, a !== s && (delete this.refs[i], this.group.caching)) {
          var c = /* @__PURE__ */ Object.create(null);
          s || (c.__exists = 1), Object.keys(o).forEach(function(u) {
            if (!s || s[u] !== a[u]) {
              c[u] = 1;
              var l = He(u);
              l !== u && !r.policies.hasKeyArgs(a.__typename, l) && (c[l] = 1), a[u] === void 0 && !(r instanceof Ve) && delete a[u];
            }
          }), c.__typename && !(s && s.__typename) && // Since we return default root __typename strings
          // automatically from store.get, we don't need to dirty the
          // ROOT_QUERY.__typename field if merged.__typename is equal
          // to the default string (usually "Query").
          this.policies.rootTypenamesById[i] === a.__typename && delete c.__typename, Object.keys(c).forEach(function(u) {
            return r.group.dirty(i, u);
          });
        }
      }
    }, n.prototype.modify = function(e, t) {
      var r = this, i = this.lookup(e);
      if (i) {
        var s = /* @__PURE__ */ Object.create(null), o = !1, a = !0, c = {
          DELETE: $n,
          INVALIDATE: To,
          isReference: W,
          toReference: this.toReference,
          canRead: this.canRead,
          readField: function(u, l) {
            return r.policies.readField(typeof u == "string" ? {
              fieldName: u,
              from: l || Et(e)
            } : u, { store: r });
          }
        };
        if (Object.keys(i).forEach(function(u) {
          var l = He(u), h = i[u];
          if (h !== void 0) {
            var f = typeof t == "function" ? t : t[u] || t[l];
            if (f) {
              var d = f === Mr ? $n : f(gi(h), v(v({}, c), { fieldName: l, storeFieldName: u, storage: r.getStorage(e, u) }));
              if (d === To)
                r.group.dirty(e, u);
              else if (d === $n && (d = void 0), d !== h && (s[u] = d, o = !0, h = d, globalThis.__DEV__ !== !1)) {
                var y = function(S) {
                  if (r.lookup(S.__ref) === void 0)
                    return globalThis.__DEV__ !== !1 && L.warn(2, S), !0;
                };
                if (W(d))
                  y(d);
                else if (Array.isArray(d))
                  for (var g = !1, E = void 0, m = 0, _ = d; m < _.length; m++) {
                    var b = _[m];
                    if (W(b)) {
                      if (g = !0, y(b))
                        break;
                    } else if (typeof b == "object" && b) {
                      var x = r.policies.identify(b)[0];
                      x && (E = b);
                    }
                    if (g && E !== void 0) {
                      globalThis.__DEV__ !== !1 && L.warn(3, E);
                      break;
                    }
                  }
              }
            }
            h !== void 0 && (a = !1);
          }
        }), o)
          return this.merge(e, s), a && (this instanceof Ve ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
      }
      return !1;
    }, n.prototype.delete = function(e, t, r) {
      var i, s = this.lookup(e);
      if (s) {
        var o = this.getFieldValue(s, "__typename"), a = t && r ? this.policies.getStoreFieldName({ typename: o, fieldName: t, args: r }) : t;
        return this.modify(e, a ? (i = {}, i[a] = Mr, i) : Mr);
      }
      return !1;
    }, n.prototype.evict = function(e, t) {
      var r = !1;
      return e.id && (ce.call(this.data, e.id) && (r = this.delete(e.id, e.fieldName, e.args)), this instanceof Ve && this !== t && (r = this.parent.evict(e, t) || r), (e.fieldName || r) && this.group.dirty(e.id, e.fieldName || "__exists")), r;
    }, n.prototype.clear = function() {
      this.replace(null);
    }, n.prototype.extract = function() {
      var e = this, t = this.toObject(), r = [];
      return this.getRootIdSet().forEach(function(i) {
        ce.call(e.policies.rootTypenamesById, i) || r.push(i);
      }), r.length && (t.__META = { extraRootIds: r.sort() }), t;
    }, n.prototype.replace = function(e) {
      var t = this;
      if (Object.keys(this.data).forEach(function(s) {
        e && ce.call(e, s) || t.delete(s);
      }), e) {
        var r = e.__META, i = Le(e, ["__META"]);
        Object.keys(i).forEach(function(s) {
          t.merge(s, i[s]);
        }), r && r.extraRootIds.forEach(this.retain, this);
      }
    }, n.prototype.retain = function(e) {
      return this.rootIds[e] = (this.rootIds[e] || 0) + 1;
    }, n.prototype.release = function(e) {
      if (this.rootIds[e] > 0) {
        var t = --this.rootIds[e];
        return t || delete this.rootIds[e], t;
      }
      return 0;
    }, n.prototype.getRootIdSet = function(e) {
      return e === void 0 && (e = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(e.add, e), this instanceof Ve ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
    }, n.prototype.gc = function() {
      var e = this, t = this.getRootIdSet(), r = this.toObject();
      t.forEach(function(o) {
        ce.call(r, o) && (Object.keys(e.findChildRefIds(o)).forEach(t.add, t), delete r[o]);
      });
      var i = Object.keys(r);
      if (i.length) {
        for (var s = this; s instanceof Ve; )
          s = s.parent;
        i.forEach(function(o) {
          return s.delete(o);
        });
      }
      return i;
    }, n.prototype.findChildRefIds = function(e) {
      if (!ce.call(this.refs, e)) {
        var t = this.refs[e] = /* @__PURE__ */ Object.create(null), r = this.data[e];
        if (!r)
          return t;
        var i = /* @__PURE__ */ new Set([r]);
        i.forEach(function(s) {
          W(s) && (t[s.__ref] = !0), ee(s) && Object.keys(s).forEach(function(o) {
            var a = s[o];
            ee(a) && i.add(a);
          });
        });
      }
      return this.refs[e];
    }, n.prototype.makeCacheKey = function() {
      return this.group.keyMaker.lookupArray(arguments);
    }, n;
  }()
), pc = (
  /** @class */
  function() {
    function n(e, t) {
      t === void 0 && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching();
    }
    return n.prototype.resetCaching = function() {
      this.d = this.caching ? Ya() : null, this.keyMaker = new Pt(jt);
    }, n.prototype.depend = function(e, t) {
      if (this.d) {
        this.d(Vr(e, t));
        var r = He(t);
        r !== t && this.d(Vr(e, r)), this.parent && this.parent.depend(e, t);
      }
    }, n.prototype.dirty = function(e, t) {
      this.d && this.d.dirty(
        Vr(e, t),
        // When storeFieldName === "__exists", that means the entity identified
        // by dataId has either disappeared from the cache or was newly added,
        // so the result caching system would do well to "forget everything it
        // knows" about that object. To achieve that kind of invalidation, we
        // not only dirty the associated result cache entry, but also remove it
        // completely from the dependency graph. For the optimism implementation
        // details, see https://github.com/benjamn/optimism/pull/195.
        t === "__exists" ? "forget" : "setDirty"
      );
    }, n;
  }()
);
function Vr(n, e) {
  return e + "#" + n;
}
function Oo(n, e) {
  an(n) && n.group.depend(e, "__exists");
}
(function(n) {
  var e = (
    /** @class */
    function(t) {
      Re(r, t);
      function r(i) {
        var s = i.policies, o = i.resultCaching, a = o === void 0 ? !0 : o, c = i.seed, u = t.call(this, s, new pc(a)) || this;
        return u.stump = new Zf(u), u.storageTrie = new Pt(jt), c && u.replace(c), u;
      }
      return r.prototype.addLayer = function(i, s) {
        return this.stump.addLayer(i, s);
      }, r.prototype.removeLayer = function() {
        return this;
      }, r.prototype.getStorage = function() {
        return this.storageTrie.lookupArray(arguments);
      }, r;
    }(n)
  );
  n.Root = e;
})(dn || (dn = {}));
var Ve = (
  /** @class */
  function(n) {
    Re(e, n);
    function e(t, r, i, s) {
      var o = n.call(this, r.policies, s) || this;
      return o.id = t, o.parent = r, o.replay = i, o.group = s, i(o), o;
    }
    return e.prototype.addLayer = function(t, r) {
      return new e(t, this, r, this.group);
    }, e.prototype.removeLayer = function(t) {
      var r = this, i = this.parent.removeLayer(t);
      return t === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(s) {
        var o = r.data[s], a = i.lookup(s);
        a ? o ? o !== a && Object.keys(o).forEach(function(c) {
          X(o[c], a[c]) || r.group.dirty(s, c);
        }) : (r.group.dirty(s, "__exists"), Object.keys(a).forEach(function(c) {
          r.group.dirty(s, c);
        })) : r.delete(s);
      }), i) : i === this.parent ? this : i.addLayer(this.id, this.replay);
    }, e.prototype.toObject = function() {
      return v(v({}, this.parent.toObject()), this.data);
    }, e.prototype.findChildRefIds = function(t) {
      var r = this.parent.findChildRefIds(t);
      return ce.call(this.data, t) ? v(v({}, r), n.prototype.findChildRefIds.call(this, t)) : r;
    }, e.prototype.getStorage = function() {
      for (var t = this.parent; t.parent; )
        t = t.parent;
      return t.getStorage.apply(
        t,
        // @ts-expect-error
        arguments
      );
    }, e;
  }(dn)
), Zf = (
  /** @class */
  function(n) {
    Re(e, n);
    function e(t) {
      return n.call(this, "EntityStore.Stump", t, function() {
      }, new pc(t.group.caching, t.group)) || this;
    }
    return e.prototype.removeLayer = function() {
      return this;
    }, e.prototype.merge = function(t, r) {
      return this.parent.merge(t, r);
    }, e;
  }(Ve)
);
function ep(n, e, t) {
  var r = n[t], i = e[t];
  return X(r, i) ? r : i;
}
function an(n) {
  return !!(n instanceof dn && n.group.caching);
}
function tp(n) {
  return ee(n) ? te(n) ? n.slice(0) : v({ __proto__: Object.getPrototypeOf(n) }, n) : n;
}
var _o = (
  /** @class */
  function() {
    function n() {
      this.known = new (ka ? WeakSet : Set)(), this.pool = new Pt(jt), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
    }
    return n.prototype.isKnown = function(e) {
      return ee(e) && this.known.has(e);
    }, n.prototype.pass = function(e) {
      if (ee(e)) {
        var t = tp(e);
        return this.passes.set(t, e), t;
      }
      return e;
    }, n.prototype.admit = function(e) {
      var t = this;
      if (ee(e)) {
        var r = this.passes.get(e);
        if (r)
          return r;
        var i = Object.getPrototypeOf(e);
        switch (i) {
          case Array.prototype: {
            if (this.known.has(e))
              return e;
            var s = e.map(this.admit, this), o = this.pool.lookupArray(s);
            return o.array || (this.known.add(o.array = s), globalThis.__DEV__ !== !1 && Object.freeze(s)), o.array;
          }
          case null:
          case Object.prototype: {
            if (this.known.has(e))
              return e;
            var a = Object.getPrototypeOf(e), c = [a], u = this.sortedKeys(e);
            c.push(u.json);
            var l = c.length;
            u.sorted.forEach(function(d) {
              c.push(t.admit(e[d]));
            });
            var o = this.pool.lookupArray(c);
            if (!o.object) {
              var h = o.object = Object.create(a);
              this.known.add(h), u.sorted.forEach(function(d, y) {
                h[d] = c[l + y];
              }), globalThis.__DEV__ !== !1 && Object.freeze(h);
            }
            return o.object;
          }
        }
      }
      return e;
    }, n.prototype.sortedKeys = function(e) {
      var t = Object.keys(e), r = this.pool.lookupArray(t);
      if (!r.keys) {
        t.sort();
        var i = JSON.stringify(t);
        (r.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, r.keys = { sorted: t, json: i });
      }
      return r.keys;
    }, n;
  }()
);
function wo(n) {
  return [
    n.selectionSet,
    n.objectOrReference,
    n.context,
    // We split out this property so we can pass different values
    // independently without modifying options.context itself.
    n.context.canonizeResults
  ];
}
var np = (
  /** @class */
  function() {
    function n(e) {
      var t = this;
      this.knownResults = new (jt ? WeakMap : Map)(), this.config = Ct(e, {
        addTypename: e.addTypename !== !1,
        canonizeResults: lc(e)
      }), this.canon = e.canon || new _o(), this.executeSelectionSet = pn(function(r) {
        var i, s = r.context.canonizeResults, o = wo(r);
        o[3] = !s;
        var a = (i = t.executeSelectionSet).peek.apply(i, o);
        return a ? s ? v(v({}, a), {
          // If we previously read this result without canonizing it, we can
          // reuse that result simply by canonizing it now.
          result: t.canon.admit(a.result)
        }) : a : (Oo(r.context.store, r.enclosingRef.__ref), t.execSelectionSetImpl(r));
      }, {
        max: this.config.resultCacheMaxSize || je["inMemoryCache.executeSelectionSet"] || 5e4,
        keyArgs: wo,
        // Note that the parameters of makeCacheKey are determined by the
        // array returned by keyArgs.
        makeCacheKey: function(r, i, s, o) {
          if (an(s.store))
            return s.store.makeCacheKey(r, W(i) ? i.__ref : i, s.varString, o);
        }
      }), this.executeSubSelectedArray = pn(function(r) {
        return Oo(r.context.store, r.enclosingRef.__ref), t.execSubSelectedArrayImpl(r);
      }, {
        max: this.config.resultCacheMaxSize || je["inMemoryCache.executeSubSelectedArray"] || 1e4,
        makeCacheKey: function(r) {
          var i = r.field, s = r.array, o = r.context;
          if (an(o.store))
            return o.store.makeCacheKey(i, s, o.varString);
        }
      });
    }
    return n.prototype.resetCanon = function() {
      this.canon = new _o();
    }, n.prototype.diffQueryAgainstStore = function(e) {
      var t = e.store, r = e.query, i = e.rootId, s = i === void 0 ? "ROOT_QUERY" : i, o = e.variables, a = e.returnPartialData, c = a === void 0 ? !0 : a, u = e.canonizeResults, l = u === void 0 ? this.config.canonizeResults : u, h = this.config.cache.policies;
      o = v(v({}, $i(Fa(r))), o);
      var f = Et(s), d = this.executeSelectionSet({
        selectionSet: On(r).selectionSet,
        objectOrReference: f,
        enclosingRef: f,
        context: v({ store: t, query: r, policies: h, variables: o, varString: Ye(o), canonizeResults: l }, fc(r, this.config.fragments))
      }), y;
      if (d.missing && (y = [
        new ac(rp(d.missing), d.missing, r, o)
      ], !c))
        throw y[0];
      return {
        result: d.result,
        complete: !y,
        missing: y
      };
    }, n.prototype.isFresh = function(e, t, r, i) {
      if (an(i.store) && this.knownResults.get(e) === r) {
        var s = this.executeSelectionSet.peek(
          r,
          t,
          i,
          // If result is canonical, then it could only have been previously
          // cached by the canonizing version of executeSelectionSet, so we can
          // avoid checking both possibilities here.
          this.canon.isKnown(e)
        );
        if (s && e === s.result)
          return !0;
      }
      return !1;
    }, n.prototype.execSelectionSetImpl = function(e) {
      var t = this, r = e.selectionSet, i = e.objectOrReference, s = e.enclosingRef, o = e.context;
      if (W(i) && !o.policies.rootTypenamesById[i.__ref] && !o.store.has(i.__ref))
        return {
          result: this.canon.empty,
          missing: "Dangling reference to missing ".concat(i.__ref, " object")
        };
      var a = o.variables, c = o.policies, u = o.store, l = u.getFieldValue(i, "__typename"), h = [], f, d = new Ke();
      this.config.addTypename && typeof l == "string" && !c.rootIdsByTypename[l] && h.push({ __typename: l });
      function y(b, x) {
        var S;
        return b.missing && (f = d.merge(f, (S = {}, S[x] = b.missing, S))), b.result;
      }
      var g = new Set(r.selections);
      g.forEach(function(b) {
        var x, S;
        if (bn(b, a))
          if (Ge(b)) {
            var D = c.readField({
              fieldName: b.name.value,
              field: b,
              variables: o.variables,
              from: i
            }, o), C = $e(b);
            D === void 0 ? Xi.added(b) || (f = d.merge(f, (x = {}, x[C] = "Can't find field '".concat(b.name.value, "' on ").concat(W(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), x))) : te(D) ? D.length > 0 && (D = y(t.executeSubSelectedArray({
              field: b,
              array: D,
              enclosingRef: s,
              context: o
            }), C)) : b.selectionSet ? D != null && (D = y(t.executeSelectionSet({
              selectionSet: b.selectionSet,
              objectOrReference: D,
              enclosingRef: W(D) ? D : s,
              context: o
            }), C)) : o.canonizeResults && (D = t.canon.pass(D)), D !== void 0 && h.push((S = {}, S[C] = D, S));
          } else {
            var A = ur(b, o.lookupFragment);
            if (!A && b.kind === I.FRAGMENT_SPREAD)
              throw ve(9, b.name.value);
            A && c.fragmentMatches(A, l) && A.selectionSet.selections.forEach(g.add, g);
          }
      });
      var E = yr(h), m = { result: E, missing: f }, _ = o.canonizeResults ? this.canon.admit(m) : gi(m);
      return _.result && this.knownResults.set(_.result, r), _;
    }, n.prototype.execSubSelectedArrayImpl = function(e) {
      var t = this, r = e.field, i = e.array, s = e.enclosingRef, o = e.context, a, c = new Ke();
      function u(l, h) {
        var f;
        return l.missing && (a = c.merge(a, (f = {}, f[h] = l.missing, f))), l.result;
      }
      return r.selectionSet && (i = i.filter(o.store.canRead)), i = i.map(function(l, h) {
        return l === null ? null : te(l) ? u(t.executeSubSelectedArray({
          field: r,
          array: l,
          enclosingRef: s,
          context: o
        }), h) : r.selectionSet ? u(t.executeSelectionSet({
          selectionSet: r.selectionSet,
          objectOrReference: l,
          enclosingRef: W(l) ? l : s,
          context: o
        }), h) : (globalThis.__DEV__ !== !1 && ip(o.store, r, l), l);
      }), {
        result: o.canonizeResults ? this.canon.admit(i) : i,
        missing: a
      };
    }, n;
  }()
);
function rp(n) {
  try {
    JSON.stringify(n, function(e, t) {
      if (typeof t == "string")
        throw t;
      return t;
    });
  } catch (e) {
    return e;
  }
}
function ip(n, e, t) {
  if (!e.selectionSet) {
    var r = /* @__PURE__ */ new Set([t]);
    r.forEach(function(i) {
      ee(i) && (L(
        !W(i),
        10,
        Hf(n, i),
        e.name.value
      ), Object.values(i).forEach(r.add, r));
    });
  }
}
var is = new La(), ko = /* @__PURE__ */ new WeakMap();
function cn(n) {
  var e = ko.get(n);
  return e || ko.set(n, e = {
    vars: /* @__PURE__ */ new Set(),
    dep: Ya()
  }), e;
}
function So(n) {
  cn(n).vars.forEach(function(e) {
    return e.forgetCache(n);
  });
}
function sp(n) {
  cn(n).vars.forEach(function(e) {
    return e.attachCache(n);
  });
}
function op(n) {
  var e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), r = function(s) {
    if (arguments.length > 0) {
      if (n !== s) {
        n = s, e.forEach(function(c) {
          cn(c).dep.dirty(r), ap(c);
        });
        var o = Array.from(t);
        t.clear(), o.forEach(function(c) {
          return c(n);
        });
      }
    } else {
      var a = is.getValue();
      a && (i(a), cn(a).dep(r));
    }
    return n;
  };
  r.onNextChange = function(s) {
    return t.add(s), function() {
      t.delete(s);
    };
  };
  var i = r.attachCache = function(s) {
    return e.add(s), cn(s).vars.add(r), r;
  };
  return r.forgetCache = function(s) {
    return e.delete(s);
  }, r;
}
function ap(n) {
  n.broadcastWatches && n.broadcastWatches();
}
var xo = /* @__PURE__ */ Object.create(null);
function ss(n) {
  var e = JSON.stringify(n);
  return xo[e] || (xo[e] = /* @__PURE__ */ Object.create(null));
}
function No(n) {
  var e = ss(n);
  return e.keyFieldsFn || (e.keyFieldsFn = function(t, r) {
    var i = function(o, a) {
      return r.readField(a, o);
    }, s = r.keyObject = os(n, function(o) {
      var a = Ot(
        r.storeObject,
        o,
        // Using context.readField to extract paths from context.storeObject
        // allows the extraction to see through Reference objects and respect
        // custom read functions.
        i
      );
      return a === void 0 && t !== r.storeObject && ce.call(t, o[0]) && (a = Ot(t, o, yc)), L(a !== void 0, 4, o.join("."), t), a;
    });
    return "".concat(r.typename, ":").concat(JSON.stringify(s));
  });
}
function Io(n) {
  var e = ss(n);
  return e.keyArgsFn || (e.keyArgsFn = function(t, r) {
    var i = r.field, s = r.variables, o = r.fieldName, a = os(n, function(u) {
      var l = u[0], h = l.charAt(0);
      if (h === "@") {
        if (i && Ie(i.directives)) {
          var f = l.slice(1), d = i.directives.find(function(m) {
            return m.name.value === f;
          }), y = d && lr(d, s);
          return y && Ot(
            y,
            // If keyPath.length === 1, this code calls extractKeyPath with an
            // empty path, which works because it uses directiveArgs as the
            // extracted value.
            u.slice(1)
          );
        }
        return;
      }
      if (h === "$") {
        var g = l.slice(1);
        if (s && ce.call(s, g)) {
          var E = u.slice(0);
          return E[0] = g, Ot(s, E);
        }
        return;
      }
      if (t)
        return Ot(t, u);
    }), c = JSON.stringify(a);
    return (t || c !== "{}") && (o += ":" + c), o;
  });
}
function os(n, e) {
  var t = new Ke();
  return dc(n).reduce(function(r, i) {
    var s, o = e(i);
    if (o !== void 0) {
      for (var a = i.length - 1; a >= 0; --a)
        o = (s = {}, s[i[a]] = o, s);
      r = t.merge(r, o);
    }
    return r;
  }, /* @__PURE__ */ Object.create(null));
}
function dc(n) {
  var e = ss(n);
  if (!e.paths) {
    var t = e.paths = [], r = [];
    n.forEach(function(i, s) {
      te(i) ? (dc(i).forEach(function(o) {
        return t.push(r.concat(o));
      }), r.length = 0) : (r.push(i), te(n[s + 1]) || (t.push(r.slice(0)), r.length = 0));
    });
  }
  return e.paths;
}
function yc(n, e) {
  return n[e];
}
function Ot(n, e, t) {
  return t = t || yc, vc(e.reduce(function r(i, s) {
    return te(i) ? i.map(function(o) {
      return r(o, s);
    }) : i && t(i, s);
  }, n));
}
function vc(n) {
  return ee(n) ? te(n) ? n.map(vc) : os(Object.keys(n).sort(), function(e) {
    return Ot(n, e);
  }) : n;
}
function ki(n) {
  return n.args !== void 0 ? n.args : n.field ? lr(n.field, n.variables) : null;
}
var cp = function() {
}, Do = function(n, e) {
  return e.fieldName;
}, Ro = function(n, e, t) {
  var r = t.mergeObjects;
  return r(n, e);
}, Ao = function(n, e) {
  return e;
}, up = (
  /** @class */
  function() {
    function n(e) {
      this.config = e, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = v({ dataIdFromObject: cc }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
    }
    return n.prototype.identify = function(e, t) {
      var r, i = this, s = t && (t.typename || ((r = t.storeObject) === null || r === void 0 ? void 0 : r.__typename)) || e.__typename;
      if (s === this.rootTypenamesById.ROOT_QUERY)
        return ["ROOT_QUERY"];
      for (var o = t && t.storeObject || e, a = v(v({}, t), { typename: s, storeObject: o, readField: t && t.readField || function() {
        var f = as(arguments, o);
        return i.readField(f, {
          store: i.cache.data,
          variables: f.variables
        });
      } }), c, u = s && this.getTypePolicy(s), l = u && u.keyFn || this.config.dataIdFromObject; l; ) {
        var h = l(v(v({}, e), o), a);
        if (te(h))
          l = No(h);
        else {
          c = h;
          break;
        }
      }
      return c = c ? String(c) : void 0, a.keyObject ? [c, a.keyObject] : [c];
    }, n.prototype.addTypePolicies = function(e) {
      var t = this;
      Object.keys(e).forEach(function(r) {
        var i = e[r], s = i.queryType, o = i.mutationType, a = i.subscriptionType, c = Le(i, ["queryType", "mutationType", "subscriptionType"]);
        s && t.setRootTypename("Query", r), o && t.setRootTypename("Mutation", r), a && t.setRootTypename("Subscription", r), ce.call(t.toBeAdded, r) ? t.toBeAdded[r].push(c) : t.toBeAdded[r] = [c];
      });
    }, n.prototype.updateTypePolicy = function(e, t) {
      var r = this, i = this.getTypePolicy(e), s = t.keyFields, o = t.fields;
      function a(c, u) {
        c.merge = typeof u == "function" ? u : u === !0 ? Ro : u === !1 ? Ao : c.merge;
      }
      a(i, t.merge), i.keyFn = // Pass false to disable normalization for this typename.
      s === !1 ? cp : te(s) ? No(s) : typeof s == "function" ? s : i.keyFn, o && Object.keys(o).forEach(function(c) {
        var u = r.getFieldPolicy(e, c, !0), l = o[c];
        if (typeof l == "function")
          u.read = l;
        else {
          var h = l.keyArgs, f = l.read, d = l.merge;
          u.keyFn = // Pass false to disable argument-based differentiation of
          // field identities.
          h === !1 ? Do : te(h) ? Io(h) : typeof h == "function" ? h : u.keyFn, typeof f == "function" && (u.read = f), a(u, d);
        }
        u.read && u.merge && (u.keyFn = u.keyFn || Do);
      });
    }, n.prototype.setRootTypename = function(e, t) {
      t === void 0 && (t = e);
      var r = "ROOT_" + e.toUpperCase(), i = this.rootTypenamesById[r];
      t !== i && (L(!i || i === e, 5, e), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[t] = r, this.rootTypenamesById[r] = t);
    }, n.prototype.addPossibleTypes = function(e) {
      var t = this;
      this.usingPossibleTypes = !0, Object.keys(e).forEach(function(r) {
        t.getSupertypeSet(r, !0), e[r].forEach(function(i) {
          t.getSupertypeSet(i, !0).add(r);
          var s = i.match(hc);
          (!s || s[0] !== i) && t.fuzzySubtypes.set(i, new RegExp(i));
        });
      });
    }, n.prototype.getTypePolicy = function(e) {
      var t = this;
      if (!ce.call(this.typePolicies, e)) {
        var r = this.typePolicies[e] = /* @__PURE__ */ Object.create(null);
        r.fields = /* @__PURE__ */ Object.create(null);
        var i = this.supertypeMap.get(e);
        !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(e, !0), this.fuzzySubtypes.forEach(function(o, a) {
          if (o.test(e)) {
            var c = t.supertypeMap.get(a);
            c && c.forEach(function(u) {
              return i.add(u);
            });
          }
        })), i && i.size && i.forEach(function(o) {
          var a = t.getTypePolicy(o), c = a.fields, u = Le(a, ["fields"]);
          Object.assign(r, u), Object.assign(r.fields, c);
        });
      }
      var s = this.toBeAdded[e];
      return s && s.length && s.splice(0).forEach(function(o) {
        t.updateTypePolicy(e, o);
      }), this.typePolicies[e];
    }, n.prototype.getFieldPolicy = function(e, t, r) {
      if (e) {
        var i = this.getTypePolicy(e).fields;
        return i[t] || r && (i[t] = /* @__PURE__ */ Object.create(null));
      }
    }, n.prototype.getSupertypeSet = function(e, t) {
      var r = this.supertypeMap.get(e);
      return !r && t && this.supertypeMap.set(e, r = /* @__PURE__ */ new Set()), r;
    }, n.prototype.fragmentMatches = function(e, t, r, i) {
      var s = this;
      if (!e.typeCondition)
        return !0;
      if (!t)
        return !1;
      var o = e.typeCondition.name.value;
      if (t === o)
        return !0;
      if (this.usingPossibleTypes && this.supertypeMap.has(o))
        for (var a = this.getSupertypeSet(t, !0), c = [a], u = function(y) {
          var g = s.getSupertypeSet(y, !1);
          g && g.size && c.indexOf(g) < 0 && c.push(g);
        }, l = !!(r && this.fuzzySubtypes.size), h = !1, f = 0; f < c.length; ++f) {
          var d = c[f];
          if (d.has(o))
            return a.has(o) || (h && globalThis.__DEV__ !== !1 && L.warn(6, t, o), a.add(o)), !0;
          d.forEach(u), l && // Start checking fuzzy subtypes only after exhausting all
          // non-fuzzy subtypes (after the final iteration of the loop).
          f === c.length - 1 && // We could wait to compare fragment.selectionSet to result
          // after we verify the supertype, but this check is often less
          // expensive than that search, and we will have to do the
          // comparison anyway whenever we find a potential match.
          wi(e.selectionSet, r, i) && (l = !1, h = !0, this.fuzzySubtypes.forEach(function(y, g) {
            var E = t.match(y);
            E && E[0] === t && u(g);
          }));
        }
      return !1;
    }, n.prototype.hasKeyArgs = function(e, t) {
      var r = this.getFieldPolicy(e, t, !1);
      return !!(r && r.keyFn);
    }, n.prototype.getStoreFieldName = function(e) {
      var t = e.typename, r = e.fieldName, i = this.getFieldPolicy(t, r, !1), s, o = i && i.keyFn;
      if (o && t)
        for (var a = {
          typename: t,
          fieldName: r,
          field: e.field || null,
          variables: e.variables
        }, c = ki(e); o; ) {
          var u = o(c, a);
          if (te(u))
            o = Io(u);
          else {
            s = u || r;
            break;
          }
        }
      return s === void 0 && (s = e.field ? Sh(e.field, e.variables) : Ca(r, ki(e))), s === !1 ? r : r === He(s) ? s : r + ":" + s;
    }, n.prototype.readField = function(e, t) {
      var r = e.from;
      if (r) {
        var i = e.field || e.fieldName;
        if (i) {
          if (e.typename === void 0) {
            var s = t.store.getFieldValue(r, "__typename");
            s && (e.typename = s);
          }
          var o = this.getStoreFieldName(e), a = He(o), c = t.store.getFieldValue(r, o), u = this.getFieldPolicy(e.typename, a, !1), l = u && u.read;
          if (l) {
            var h = Co(this, r, e, t, t.store.getStorage(W(r) ? r.__ref : r, o));
            return is.withValue(this.cache, l, [
              c,
              h
            ]);
          }
          return c;
        }
      }
    }, n.prototype.getReadFunction = function(e, t) {
      var r = this.getFieldPolicy(e, t, !1);
      return r && r.read;
    }, n.prototype.getMergeFunction = function(e, t, r) {
      var i = this.getFieldPolicy(e, t, !1), s = i && i.merge;
      return !s && r && (i = this.getTypePolicy(r), s = i && i.merge), s;
    }, n.prototype.runMergeFunction = function(e, t, r, i, s) {
      var o = r.field, a = r.typename, c = r.merge;
      return c === Ro ? mc(i.store)(e, t) : c === Ao ? t : (i.overwrite && (e = void 0), c(e, t, Co(
        this,
        // Unlike options.readField for read functions, we do not fall
        // back to the current object if no foreignObjOrRef is provided,
        // because it's not clear what the current object should be for
        // merge functions: the (possibly undefined) existing object, or
        // the incoming object? If you think your merge function needs
        // to read sibling fields in order to produce a new value for
        // the current field, you might want to rethink your strategy,
        // because that's a recipe for making merge behavior sensitive
        // to the order in which fields are written into the cache.
        // However, readField(name, ref) is useful for merge functions
        // that need to deduplicate child objects and references.
        void 0,
        {
          typename: a,
          fieldName: o.name.value,
          field: o,
          variables: i.variables
        },
        i,
        s || /* @__PURE__ */ Object.create(null)
      )));
    }, n;
  }()
);
function Co(n, e, t, r, i) {
  var s = n.getStoreFieldName(t), o = He(s), a = t.variables || r.variables, c = r.store, u = c.toReference, l = c.canRead;
  return {
    args: ki(t),
    field: t.field || null,
    fieldName: o,
    storeFieldName: s,
    variables: a,
    isReference: W,
    toReference: u,
    storage: i,
    cache: n.cache,
    canRead: l,
    readField: function() {
      return n.readField(as(arguments, e, a), r);
    },
    mergeObjects: mc(r.store)
  };
}
function as(n, e, t) {
  var r = n[0], i = n[1], s = n.length, o;
  return typeof r == "string" ? o = {
    fieldName: r,
    // Default to objectOrReference only when no second argument was
    // passed for the from parameter, not when undefined is explicitly
    // passed as the second argument.
    from: s > 1 ? i : e
  } : (o = v({}, r), ce.call(o, "from") || (o.from = e)), globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && L.warn(7, fa(Array.from(n))), o.variables === void 0 && (o.variables = t), o;
}
function mc(n) {
  return function(e, t) {
    if (te(e) || te(t))
      throw ve(8);
    if (ee(e) && ee(t)) {
      var r = n.getFieldValue(e, "__typename"), i = n.getFieldValue(t, "__typename"), s = r && i && r !== i;
      if (s)
        return t;
      if (W(e) && mt(t))
        return n.merge(e.__ref, t), e;
      if (mt(e) && W(t))
        return n.merge(e, t.__ref), t;
      if (mt(e) && mt(t))
        return v(v({}, e), t);
    }
    return t;
  };
}
function qr(n, e, t) {
  var r = "".concat(e).concat(t), i = n.flavors.get(r);
  return i || n.flavors.set(r, i = n.clientOnly === e && n.deferred === t ? n : v(v({}, n), { clientOnly: e, deferred: t })), i;
}
var lp = (
  /** @class */
  function() {
    function n(e, t, r) {
      this.cache = e, this.reader = t, this.fragments = r;
    }
    return n.prototype.writeToStore = function(e, t) {
      var r = this, i = t.query, s = t.result, o = t.dataId, a = t.variables, c = t.overwrite, u = Tn(i), l = Xf();
      a = v(v({}, $i(u)), a);
      var h = v(v({ store: e, written: /* @__PURE__ */ Object.create(null), merge: function(d, y) {
        return l.merge(d, y);
      }, variables: a, varString: Ye(a) }, fc(i, this.fragments)), { overwrite: !!c, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), f = this.processSelectionSet({
        result: s || /* @__PURE__ */ Object.create(null),
        dataId: o,
        selectionSet: u.selectionSet,
        mergeTree: { map: /* @__PURE__ */ new Map() },
        context: h
      });
      if (!W(f))
        throw ve(11, s);
      return h.incomingById.forEach(function(d, y) {
        var g = d.storeObject, E = d.mergeTree, m = d.fieldNodeSet, _ = Et(y);
        if (E && E.map.size) {
          var b = r.applyMerges(E, _, g, h);
          if (W(b))
            return;
          g = b;
        }
        if (globalThis.__DEV__ !== !1 && !h.overwrite) {
          var x = /* @__PURE__ */ Object.create(null);
          m.forEach(function(C) {
            C.selectionSet && (x[C.name.value] = !0);
          });
          var S = function(C) {
            return x[He(C)] === !0;
          }, D = function(C) {
            var A = E && E.map.get(C);
            return !!(A && A.info && A.info.merge);
          };
          Object.keys(g).forEach(function(C) {
            S(C) && !D(C) && hp(_, g, C, h.store);
          });
        }
        e.merge(y, g);
      }), e.retain(f.__ref), f;
    }, n.prototype.processSelectionSet = function(e) {
      var t = this, r = e.dataId, i = e.result, s = e.selectionSet, o = e.context, a = e.mergeTree, c = this.cache.policies, u = /* @__PURE__ */ Object.create(null), l = r && c.rootTypenamesById[r] || pi(i, s, o.fragmentMap) || r && o.store.get(r, "__typename");
      typeof l == "string" && (u.__typename = l);
      var h = function() {
        var b = as(arguments, u, o.variables);
        if (W(b.from)) {
          var x = o.incomingById.get(b.from.__ref);
          if (x) {
            var S = c.readField(v(v({}, b), { from: x.storeObject }), o);
            if (S !== void 0)
              return S;
          }
        }
        return c.readField(b, o);
      }, f = /* @__PURE__ */ new Set();
      this.flattenFields(
        s,
        i,
        // This WriteContext will be the default context value for fields returned
        // by the flattenFields method, but some fields may be assigned a modified
        // context, depending on the presence of @client and other directives.
        o,
        l
      ).forEach(function(b, x) {
        var S, D = $e(x), C = i[D];
        if (f.add(x), C !== void 0) {
          var A = c.getStoreFieldName({
            typename: l,
            fieldName: x.name.value,
            field: x,
            variables: b.variables
          }), B = Fo(a, A), K = t.processFieldValue(
            C,
            x,
            // Reset context.clientOnly and context.deferred to their default
            // values before processing nested selection sets.
            x.selectionSet ? qr(b, !1, !1) : b,
            B
          ), Me = void 0;
          x.selectionSet && (W(K) || mt(K)) && (Me = h("__typename", K));
          var Ae = c.getMergeFunction(l, x.name.value, Me);
          Ae ? B.info = {
            // TODO Check compatibility against any existing childTree.field?
            field: x,
            typename: l,
            merge: Ae
          } : Lo(a, A), u = b.merge(u, (S = {}, S[A] = K, S));
        } else globalThis.__DEV__ !== !1 && !b.clientOnly && !b.deferred && !Xi.added(x) && // If the field has a read function, it may be a synthetic field or
        // provide a default value, so its absence from the written data should
        // not be cause for alarm.
        !c.getReadFunction(l, x.name.value) && globalThis.__DEV__ !== !1 && L.error(12, $e(x), i);
      });
      try {
        var d = c.identify(i, {
          typename: l,
          selectionSet: s,
          fragmentMap: o.fragmentMap,
          storeObject: u,
          readField: h
        }), y = d[0], g = d[1];
        r = r || y, g && (u = o.merge(u, g));
      } catch (b) {
        if (!r)
          throw b;
      }
      if (typeof r == "string") {
        var E = Et(r), m = o.written[r] || (o.written[r] = []);
        if (m.indexOf(s) >= 0 || (m.push(s), this.reader && this.reader.isFresh(i, E, s, o)))
          return E;
        var _ = o.incomingById.get(r);
        return _ ? (_.storeObject = o.merge(_.storeObject, u), _.mergeTree = Si(_.mergeTree, a), f.forEach(function(b) {
          return _.fieldNodeSet.add(b);
        })) : o.incomingById.set(r, {
          storeObject: u,
          // Save a reference to mergeTree only if it is not empty, because
          // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
          // reused for entirely different parts of the result tree.
          mergeTree: tr(a) ? void 0 : a,
          fieldNodeSet: f
        }), E;
      }
      return u;
    }, n.prototype.processFieldValue = function(e, t, r, i) {
      var s = this;
      return !t.selectionSet || e === null ? globalThis.__DEV__ !== !1 ? ec(e) : e : te(e) ? e.map(function(o, a) {
        var c = s.processFieldValue(o, t, r, Fo(i, a));
        return Lo(i, a), c;
      }) : this.processSelectionSet({
        result: e,
        selectionSet: t.selectionSet,
        context: r,
        mergeTree: i
      });
    }, n.prototype.flattenFields = function(e, t, r, i) {
      i === void 0 && (i = pi(t, e, r.fragmentMap));
      var s = /* @__PURE__ */ new Map(), o = this.cache.policies, a = new Pt(!1);
      return function c(u, l) {
        var h = a.lookup(
          u,
          // Because we take inheritedClientOnly and inheritedDeferred into
          // consideration here (in addition to selectionSet), it's possible for
          // the same selection set to be flattened more than once, if it appears
          // in the query with different @client and/or @directive configurations.
          l.clientOnly,
          l.deferred
        );
        h.visited || (h.visited = !0, u.selections.forEach(function(f) {
          if (bn(f, r.variables)) {
            var d = l.clientOnly, y = l.deferred;
            if (
              // Since the presence of @client or @defer on this field can only
              // cause clientOnly or deferred to become true, we can skip the
              // forEach loop if both clientOnly and deferred are already true.
              !(d && y) && Ie(f.directives) && f.directives.forEach(function(m) {
                var _ = m.name.value;
                if (_ === "client" && (d = !0), _ === "defer") {
                  var b = lr(m, r.variables);
                  (!b || b.if !== !1) && (y = !0);
                }
              }), Ge(f)
            ) {
              var g = s.get(f);
              g && (d = d && g.clientOnly, y = y && g.deferred), s.set(f, qr(r, d, y));
            } else {
              var E = ur(f, r.lookupFragment);
              if (!E && f.kind === I.FRAGMENT_SPREAD)
                throw ve(13, f.name.value);
              E && o.fragmentMatches(E, i, t, r.variables) && c(E.selectionSet, qr(r, d, y));
            }
          }
        }));
      }(e, r), s;
    }, n.prototype.applyMerges = function(e, t, r, i, s) {
      var o, a = this;
      if (e.map.size && !W(r)) {
        var c = (
          // Items in the same position in different arrays are not
          // necessarily related to each other, so when incoming is an array
          // we process its elements as if there was no existing data.
          !te(r) && // Likewise, existing must be either a Reference or a StoreObject
          // in order for its fields to be safe to merge with the fields of
          // the incoming object.
          (W(t) || mt(t)) ? t : void 0
        ), u = r;
        c && !s && (s = [W(c) ? c.__ref : c]);
        var l, h = function(f, d) {
          return te(f) ? typeof d == "number" ? f[d] : void 0 : i.store.getFieldValue(f, String(d));
        };
        e.map.forEach(function(f, d) {
          var y = h(c, d), g = h(u, d);
          if (g !== void 0) {
            s && s.push(d);
            var E = a.applyMerges(f, y, g, i, s);
            E !== g && (l = l || /* @__PURE__ */ new Map(), l.set(d, E)), s && L(s.pop() === d);
          }
        }), l && (r = te(u) ? u.slice(0) : v({}, u), l.forEach(function(f, d) {
          r[d] = f;
        }));
      }
      return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, i, s && (o = i.store).getStorage.apply(o, s)) : r;
    }, n;
  }()
), gc = [];
function Fo(n, e) {
  var t = n.map;
  return t.has(e) || t.set(e, gc.pop() || { map: /* @__PURE__ */ new Map() }), t.get(e);
}
function Si(n, e) {
  if (n === e || !e || tr(e))
    return n;
  if (!n || tr(n))
    return e;
  var t = n.info && e.info ? v(v({}, n.info), e.info) : n.info || e.info, r = n.map.size && e.map.size, i = r ? /* @__PURE__ */ new Map() : n.map.size ? n.map : e.map, s = { info: t, map: i };
  if (r) {
    var o = new Set(e.map.keys());
    n.map.forEach(function(a, c) {
      s.map.set(c, Si(a, e.map.get(c))), o.delete(c);
    }), o.forEach(function(a) {
      s.map.set(a, Si(e.map.get(a), n.map.get(a)));
    });
  }
  return s;
}
function tr(n) {
  return !n || !(n.info || n.map.size);
}
function Lo(n, e) {
  var t = n.map, r = t.get(e);
  r && tr(r) && (gc.push(r), t.delete(e));
}
var Po = /* @__PURE__ */ new Set();
function hp(n, e, t, r) {
  var i = function(h) {
    var f = r.getFieldValue(h, t);
    return typeof f == "object" && f;
  }, s = i(n);
  if (s) {
    var o = i(e);
    if (o && !W(s) && !X(s, o) && !Object.keys(s).every(function(h) {
      return r.getFieldValue(o, h) !== void 0;
    })) {
      var a = r.getFieldValue(n, "__typename") || r.getFieldValue(e, "__typename"), c = He(t), u = "".concat(a, ".").concat(c);
      if (!Po.has(u)) {
        Po.add(u);
        var l = [];
        !te(s) && !te(o) && [s, o].forEach(function(h) {
          var f = r.getFieldValue(h, "__typename");
          typeof f == "string" && !l.includes(f) && l.push(f);
        }), globalThis.__DEV__ !== !1 && L.warn(14, c, a, l.length ? "either ensure all objects of type " + l.join(" and ") + " have an ID or a custom merge function, or " : "", u, v({}, s), v({}, o));
      }
    }
  }
}
var cs = (
  /** @class */
  function(n) {
    Re(e, n);
    function e(t) {
      t === void 0 && (t = {});
      var r = n.call(this) || this;
      return r.watches = /* @__PURE__ */ new Set(), r.addTypenameTransform = new $a(Xi), r.assumeImmutableResults = !0, r.makeVar = op, r.txCount = 0, r.config = Kf(t), r.addTypename = !!r.config.addTypename, r.policies = new up({
        cache: r,
        dataIdFromObject: r.config.dataIdFromObject,
        possibleTypes: r.config.possibleTypes,
        typePolicies: r.config.typePolicies
      }), r.init(), r;
    }
    return e.prototype.init = function() {
      var t = this.data = new dn.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching
      });
      this.optimisticData = t.stump, this.resetResultCache();
    }, e.prototype.resetResultCache = function(t) {
      var r = this, i = this.storeReader, s = this.config.fragments;
      this.storeWriter = new lp(this, this.storeReader = new np({
        cache: this,
        addTypename: this.addTypename,
        resultCacheMaxSize: this.config.resultCacheMaxSize,
        canonizeResults: lc(this.config),
        canon: t ? void 0 : i && i.canon,
        fragments: s
      }), s), this.maybeBroadcastWatch = pn(function(o, a) {
        return r.broadcastWatch(o, a);
      }, {
        max: this.config.resultCacheMaxSize || je["inMemoryCache.maybeBroadcastWatch"] || 5e3,
        makeCacheKey: function(o) {
          var a = o.optimistic ? r.optimisticData : r.data;
          if (an(a)) {
            var c = o.optimistic, u = o.id, l = o.variables;
            return a.makeCacheKey(
              o.query,
              // Different watches can have the same query, optimistic
              // status, rootId, and variables, but if their callbacks are
              // different, the (identical) result needs to be delivered to
              // each distinct callback. The easiest way to achieve that
              // separation is to include c.callback in the cache key for
              // maybeBroadcastWatch calls. See issue #5733.
              o.callback,
              Ye({ optimistic: c, id: u, variables: l })
            );
          }
        }
      }), (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function(o) {
        return o.resetCaching();
      });
    }, e.prototype.restore = function(t) {
      return this.init(), t && this.data.replace(t), this;
    }, e.prototype.extract = function(t) {
      return t === void 0 && (t = !1), (t ? this.optimisticData : this.data).extract();
    }, e.prototype.read = function(t) {
      var r = t.returnPartialData, i = r === void 0 ? !1 : r;
      try {
        return this.storeReader.diffQueryAgainstStore(v(v({}, t), { store: t.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: i })).result || null;
      } catch (s) {
        if (s instanceof ac)
          return null;
        throw s;
      }
    }, e.prototype.write = function(t) {
      try {
        return ++this.txCount, this.storeWriter.writeToStore(this.data, t);
      } finally {
        !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.modify = function(t) {
      if (ce.call(t, "id") && !t.id)
        return !1;
      var r = t.optimistic ? this.optimisticData : this.data;
      try {
        return ++this.txCount, r.modify(t.id || "ROOT_QUERY", t.fields);
      } finally {
        !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.diff = function(t) {
      return this.storeReader.diffQueryAgainstStore(v(v({}, t), { store: t.optimistic ? this.optimisticData : this.data, rootId: t.id || "ROOT_QUERY", config: this.config }));
    }, e.prototype.watch = function(t) {
      var r = this;
      return this.watches.size || sp(this), this.watches.add(t), t.immediate && this.maybeBroadcastWatch(t), function() {
        r.watches.delete(t) && !r.watches.size && So(r), r.maybeBroadcastWatch.forget(t);
      };
    }, e.prototype.gc = function(t) {
      var r;
      Ye.reset(), dr.reset(), this.addTypenameTransform.resetCache(), (r = this.config.fragments) === null || r === void 0 || r.resetCaches();
      var i = this.optimisticData.gc();
      return t && !this.txCount && (t.resetResultCache ? this.resetResultCache(t.resetResultIdentities) : t.resetResultIdentities && this.storeReader.resetCanon()), i;
    }, e.prototype.retain = function(t, r) {
      return (r ? this.optimisticData : this.data).retain(t);
    }, e.prototype.release = function(t, r) {
      return (r ? this.optimisticData : this.data).release(t);
    }, e.prototype.identify = function(t) {
      if (W(t))
        return t.__ref;
      try {
        return this.policies.identify(t)[0];
      } catch (r) {
        globalThis.__DEV__ !== !1 && L.warn(r);
      }
    }, e.prototype.evict = function(t) {
      if (!t.id) {
        if (ce.call(t, "id"))
          return !1;
        t = v(v({}, t), { id: "ROOT_QUERY" });
      }
      try {
        return ++this.txCount, this.optimisticData.evict(t, this.data);
      } finally {
        !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.reset = function(t) {
      var r = this;
      return this.init(), Ye.reset(), t && t.discardWatches ? (this.watches.forEach(function(i) {
        return r.maybeBroadcastWatch.forget(i);
      }), this.watches.clear(), So(this)) : this.broadcastWatches(), Promise.resolve();
    }, e.prototype.removeOptimistic = function(t) {
      var r = this.optimisticData.removeLayer(t);
      r !== this.optimisticData && (this.optimisticData = r, this.broadcastWatches());
    }, e.prototype.batch = function(t) {
      var r = this, i = t.update, s = t.optimistic, o = s === void 0 ? !0 : s, a = t.removeOptimistic, c = t.onWatchUpdated, u, l = function(f) {
        var d = r, y = d.data, g = d.optimisticData;
        ++r.txCount, f && (r.data = r.optimisticData = f);
        try {
          return u = i(r);
        } finally {
          --r.txCount, r.data = y, r.optimisticData = g;
        }
      }, h = /* @__PURE__ */ new Set();
      return c && !this.txCount && this.broadcastWatches(v(v({}, t), { onWatchUpdated: function(f) {
        return h.add(f), !1;
      } })), typeof o == "string" ? this.optimisticData = this.optimisticData.addLayer(o, l) : o === !1 ? l(this.data) : l(), typeof a == "string" && (this.optimisticData = this.optimisticData.removeLayer(a)), c && h.size ? (this.broadcastWatches(v(v({}, t), { onWatchUpdated: function(f, d) {
        var y = c.call(this, f, d);
        return y !== !1 && h.delete(f), y;
      } })), h.size && h.forEach(function(f) {
        return r.maybeBroadcastWatch.dirty(f);
      })) : this.broadcastWatches(t), u;
    }, e.prototype.performTransaction = function(t, r) {
      return this.batch({
        update: t,
        optimistic: r || r !== null
      });
    }, e.prototype.transformDocument = function(t) {
      return this.addTypenameToDocument(this.addFragmentsToDocument(t));
    }, e.prototype.broadcastWatches = function(t) {
      var r = this;
      this.txCount || this.watches.forEach(function(i) {
        return r.maybeBroadcastWatch(i, t);
      });
    }, e.prototype.addFragmentsToDocument = function(t) {
      var r = this.config.fragments;
      return r ? r.transform(t) : t;
    }, e.prototype.addTypenameToDocument = function(t) {
      return this.addTypename ? this.addTypenameTransform.transformDocument(t) : t;
    }, e.prototype.broadcastWatch = function(t, r) {
      var i = t.lastDiff, s = this.diff(t);
      r && (t.optimistic && typeof r.optimistic == "string" && (s.fromOptimisticTransaction = !0), r.onWatchUpdated && r.onWatchUpdated.call(this, t, s, i) === !1) || (!i || !X(i.result, s.result)) && t.callback(t.lastDiff = s, i);
    }, e;
  }(oc)
);
globalThis.__DEV__ !== !1 && (cs.prototype.getMemoryInternals = ch);
var $;
(function(n) {
  n[n.loading = 1] = "loading", n[n.setVariables = 2] = "setVariables", n[n.fetchMore = 3] = "fetchMore", n[n.refetch = 4] = "refetch", n[n.poll = 6] = "poll", n[n.ready = 7] = "ready", n[n.error = 8] = "error";
})($ || ($ = {}));
function yn(n) {
  return n ? n < 7 : !1;
}
var jo = Object.assign, fp = Object.hasOwnProperty, xi = (
  /** @class */
  function(n) {
    Re(e, n);
    function e(t) {
      var r = t.queryManager, i = t.queryInfo, s = t.options, o = n.call(this, function(E) {
        try {
          var m = E._subscription._observer;
          m && !m.error && (m.error = pp);
        } catch {
        }
        var _ = !o.observers.size;
        o.observers.add(E);
        var b = o.last;
        return b && b.error ? E.error && E.error(b.error) : b && b.result && E.next && E.next(b.result), _ && o.reobserve().catch(function() {
        }), function() {
          o.observers.delete(E) && !o.observers.size && o.tearDownQuery();
        };
      }) || this;
      o.observers = /* @__PURE__ */ new Set(), o.subscriptions = /* @__PURE__ */ new Set(), o.queryInfo = i, o.queryManager = r, o.waitForOwnResult = Br(s.fetchPolicy), o.isTornDown = !1, o.subscribeToMore = o.subscribeToMore.bind(o);
      var a = r.defaultOptions.watchQuery, c = a === void 0 ? {} : a, u = c.fetchPolicy, l = u === void 0 ? "cache-first" : u, h = s.fetchPolicy, f = h === void 0 ? l : h, d = s.initialFetchPolicy, y = d === void 0 ? f === "standby" ? l : f : d;
      o.options = v(v({}, s), {
        // Remember the initial options.fetchPolicy so we can revert back to this
        // policy when variables change. This information can also be specified
        // (or overridden) by providing options.initialFetchPolicy explicitly.
        initialFetchPolicy: y,
        // This ensures this.options.fetchPolicy always has a string value, in
        // case options.fetchPolicy was not provided.
        fetchPolicy: f
      }), o.queryId = i.queryId || r.generateQueryId();
      var g = Tn(o.query);
      return o.queryName = g && g.name && g.name.value, o;
    }
    return Object.defineProperty(e.prototype, "query", {
      // The `query` computed property will always reflect the document transformed
      // by the last run query. `this.options.query` will always reflect the raw
      // untransformed query to ensure document transforms with runtime conditionals
      // are run on the original document.
      get: function() {
        return this.lastQuery || this.options.query;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "variables", {
      // Computed shorthand for this.options.variables, preserved for
      // backwards compatibility.
      /**
       * An object containing the variables that were provided for the query.
       */
      get: function() {
        return this.options.variables;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.result = function() {
      var t = this;
      return new Promise(function(r, i) {
        var s = {
          next: function(a) {
            r(a), t.observers.delete(s), t.observers.size || t.queryManager.removeQuery(t.queryId), setTimeout(function() {
              o.unsubscribe();
            }, 0);
          },
          error: i
        }, o = t.subscribe(s);
      });
    }, e.prototype.resetDiff = function() {
      this.queryInfo.resetDiff();
    }, e.prototype.getCurrentResult = function(t) {
      t === void 0 && (t = !0);
      var r = this.getLastResult(!0), i = this.queryInfo.networkStatus || r && r.networkStatus || $.ready, s = v(v({}, r), { loading: yn(i), networkStatus: i }), o = this.options.fetchPolicy, a = o === void 0 ? "cache-first" : o;
      if (
        // These fetch policies should never deliver data from the cache, unless
        // redelivering a previously delivered result.
        !(Br(a) || // If this.options.query has @client(always: true) fields, we cannot
        // trust diff.result, since it was read from the cache without running
        // local resolvers (and it's too late to run resolvers now, since we must
        // return a result synchronously).
        this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)
      ) if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var c = this.queryInfo.getDiff();
        (c.complete || this.options.returnPartialData) && (s.data = c.result), X(s.data, {}) && (s.data = void 0), c.complete ? (delete s.partial, c.complete && s.networkStatus === $.loading && (a === "cache-first" || a === "cache-only") && (s.networkStatus = $.ready, s.loading = !1)) : s.partial = !0, globalThis.__DEV__ !== !1 && !c.complete && !this.options.partialRefetch && !s.loading && !s.data && !s.error && Ec(c.missing);
      }
      return t && this.updateLastResult(s), s;
    }, e.prototype.isDifferentFromLastResult = function(t, r) {
      if (!this.last)
        return !0;
      var i = this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective ? !sc(this.query, this.last.result, t, this.variables) : !X(this.last.result, t);
      return i || r && !X(this.last.variables, r);
    }, e.prototype.getLast = function(t, r) {
      var i = this.last;
      if (i && i[t] && (!r || X(i.variables, this.variables)))
        return i[t];
    }, e.prototype.getLastResult = function(t) {
      return this.getLast("result", t);
    }, e.prototype.getLastError = function(t) {
      return this.getLast("error", t);
    }, e.prototype.resetLastResults = function() {
      delete this.last, this.isTornDown = !1;
    }, e.prototype.resetQueryStoreErrors = function() {
      this.queryManager.resetErrors(this.queryId);
    }, e.prototype.refetch = function(t) {
      var r, i = {
        // Always disable polling for refetches.
        pollInterval: 0
      }, s = this.options.fetchPolicy;
      if (s === "cache-and-network" ? i.fetchPolicy = s : s === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && t && fp.call(t, "variables")) {
        var o = Fa(this.query), a = o.variableDefinitions;
        (!a || !a.some(function(c) {
          return c.variable.name.value === "variables";
        })) && globalThis.__DEV__ !== !1 && L.warn(
          20,
          t,
          ((r = o.name) === null || r === void 0 ? void 0 : r.value) || o
        );
      }
      return t && !X(this.options.variables, t) && (i.variables = this.options.variables = v(v({}, this.options.variables), t)), this.queryInfo.resetLastWrite(), this.reobserve(i, $.refetch);
    }, e.prototype.fetchMore = function(t) {
      var r = this, i = v(v({}, t.query ? t : v(v(v(v({}, this.options), { query: this.options.query }), t), { variables: v(v({}, this.options.variables), t.variables) })), {
        // The fetchMore request goes immediately to the network and does
        // not automatically write its result to the cache (hence no-cache
        // instead of network-only), because we allow the caller of
        // fetchMore to provide an updateQuery callback that determines how
        // the data gets written to the cache.
        fetchPolicy: "no-cache"
      });
      i.query = this.transformDocument(i.query);
      var s = this.queryManager.generateQueryId();
      this.lastQuery = t.query ? this.transformDocument(this.options.query) : i.query;
      var o = this.queryInfo, a = o.networkStatus;
      o.networkStatus = $.fetchMore, i.notifyOnNetworkStatusChange && this.observe();
      var c = /* @__PURE__ */ new Set();
      return this.queryManager.fetchQuery(s, i, $.fetchMore).then(function(u) {
        return r.queryManager.removeQuery(s), o.networkStatus === $.fetchMore && (o.networkStatus = a), r.queryManager.cache.batch({
          update: function(l) {
            var h = t.updateQuery;
            h ? l.updateQuery({
              query: r.query,
              variables: r.variables,
              returnPartialData: !0,
              optimistic: !1
            }, function(f) {
              return h(f, {
                fetchMoreResult: u.data,
                variables: i.variables
              });
            }) : l.writeQuery({
              query: i.query,
              variables: i.variables,
              data: u.data
            });
          },
          onWatchUpdated: function(l) {
            c.add(l.query);
          }
        }), u;
      }).finally(function() {
        c.has(r.query) || bc(r);
      });
    }, e.prototype.subscribeToMore = function(t) {
      var r = this, i = this.queryManager.startGraphQLSubscription({
        query: t.document,
        variables: t.variables,
        context: t.context
      }).subscribe({
        next: function(s) {
          var o = t.updateQuery;
          o && r.updateQuery(function(a, c) {
            var u = c.variables;
            return o(a, {
              subscriptionData: s,
              variables: u
            });
          });
        },
        error: function(s) {
          if (t.onError) {
            t.onError(s);
            return;
          }
          globalThis.__DEV__ !== !1 && L.error(21, s);
        }
      });
      return this.subscriptions.add(i), function() {
        r.subscriptions.delete(i) && i.unsubscribe();
      };
    }, e.prototype.setOptions = function(t) {
      return this.reobserve(t);
    }, e.prototype.silentSetOptions = function(t) {
      var r = Ct(this.options, t || {});
      jo(this.options, r);
    }, e.prototype.setVariables = function(t) {
      return X(this.variables, t) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = t, this.observers.size ? this.reobserve({
        // Reset options.fetchPolicy to its original value.
        fetchPolicy: this.options.initialFetchPolicy,
        variables: t
      }, $.setVariables) : Promise.resolve());
    }, e.prototype.updateQuery = function(t) {
      var r = this.queryManager, i = r.cache.diff({
        query: this.options.query,
        variables: this.variables,
        returnPartialData: !0,
        optimistic: !1
      }).result, s = t(i, {
        variables: this.variables
      });
      s && (r.cache.writeQuery({
        query: this.options.query,
        data: s,
        variables: this.variables
      }), r.broadcastQueries());
    }, e.prototype.startPolling = function(t) {
      this.options.pollInterval = t, this.updatePolling();
    }, e.prototype.stopPolling = function() {
      this.options.pollInterval = 0, this.updatePolling();
    }, e.prototype.applyNextFetchPolicy = function(t, r) {
      if (r.nextFetchPolicy) {
        var i = r.fetchPolicy, s = i === void 0 ? "cache-first" : i, o = r.initialFetchPolicy, a = o === void 0 ? s : o;
        s === "standby" || (typeof r.nextFetchPolicy == "function" ? r.fetchPolicy = r.nextFetchPolicy(s, {
          reason: t,
          options: r,
          observable: this,
          initialFetchPolicy: a
        }) : t === "variables-changed" ? r.fetchPolicy = a : r.fetchPolicy = r.nextFetchPolicy);
      }
      return r.fetchPolicy;
    }, e.prototype.fetch = function(t, r, i) {
      return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, t, r, i);
    }, e.prototype.updatePolling = function() {
      var t = this;
      if (!this.queryManager.ssrMode) {
        var r = this, i = r.pollingInfo, s = r.options.pollInterval;
        if (!s || !this.hasObservers()) {
          i && (clearTimeout(i.timeout), delete this.pollingInfo);
          return;
        }
        if (!(i && i.interval === s)) {
          L(s, 22);
          var o = i || (this.pollingInfo = {});
          o.interval = s;
          var a = function() {
            var u, l;
            t.pollingInfo && (!yn(t.queryInfo.networkStatus) && !(!((l = (u = t.options).skipPollAttempt) === null || l === void 0) && l.call(u)) ? t.reobserve({
              // Most fetchPolicy options don't make sense to use in a polling context, as
              // users wouldn't want to be polling the cache directly. However, network-only and
              // no-cache are both useful for when the user wants to control whether or not the
              // polled results are written to the cache.
              fetchPolicy: t.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
            }, $.poll).then(c, c) : c());
          }, c = function() {
            var u = t.pollingInfo;
            u && (clearTimeout(u.timeout), u.timeout = setTimeout(a, u.interval));
          };
          c();
        }
      }
    }, e.prototype.updateLastResult = function(t, r) {
      r === void 0 && (r = this.variables);
      var i = this.getLastError();
      return i && this.last && !X(r, this.last.variables) && (i = void 0), this.last = v({ result: this.queryManager.assumeImmutableResults ? t : ec(t), variables: r }, i ? { error: i } : null);
    }, e.prototype.reobserveAsConcast = function(t, r) {
      var i = this;
      this.isTornDown = !1;
      var s = (
        // Refetching uses a disposable Concast to allow refetches using different
        // options/variables, without permanently altering the options of the
        // original ObservableQuery.
        r === $.refetch || // The fetchMore method does not actually call the reobserve method, but,
        // if it did, it would definitely use a disposable Concast.
        r === $.fetchMore || // Polling uses a disposable Concast so the polling options (which force
        // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
        r === $.poll
      ), o = this.options.variables, a = this.options.fetchPolicy, c = Ct(this.options, t || {}), u = s ? (
        // Disposable Concast fetches receive a shallow copy of this.options
        // (merged with newOptions), leaving this.options unmodified.
        c
      ) : jo(this.options, c), l = this.transformDocument(u.query);
      this.lastQuery = l, s || (this.updatePolling(), t && t.variables && !X(t.variables, o) && // Don't mess with the fetchPolicy if it's currently "standby".
      u.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
      // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
      (u.fetchPolicy === a || // A `nextFetchPolicy` function has even higher priority, though,
      // so in that case `applyNextFetchPolicy` must be called.
      typeof u.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", u), r === void 0 && (r = $.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = Br(u.fetchPolicy));
      var h = function() {
        i.concast === y && (i.waitForOwnResult = !1);
      }, f = u.variables && v({}, u.variables), d = this.fetch(u, r, l), y = d.concast, g = d.fromLink, E = {
        next: function(m) {
          X(i.variables, f) && (h(), i.reportResult(m, f));
        },
        error: function(m) {
          X(i.variables, f) && (h(), i.reportError(m, f));
        }
      };
      return !s && (g || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = y, this.observer = E), y.addObserver(E), y;
    }, e.prototype.reobserve = function(t, r) {
      return this.reobserveAsConcast(t, r).promise;
    }, e.prototype.resubscribeAfterError = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      var i = this.last;
      this.resetLastResults();
      var s = this.subscribe.apply(this, t);
      return this.last = i, s;
    }, e.prototype.observe = function() {
      this.reportResult(
        // Passing false is important so that this.getCurrentResult doesn't
        // save the fetchMore result as this.lastResult, causing it to be
        // ignored due to the this.isDifferentFromLastResult check in
        // this.reportResult.
        this.getCurrentResult(!1),
        this.variables
      );
    }, e.prototype.reportResult = function(t, r) {
      var i = this.getLastError(), s = this.isDifferentFromLastResult(t, r);
      (i || !t.partial || this.options.returnPartialData) && this.updateLastResult(t, r), (i || s) && on(this.observers, "next", t);
    }, e.prototype.reportError = function(t, r) {
      var i = v(v({}, this.getLastResult()), { error: t, errors: t.graphQLErrors, networkStatus: $.error, loading: !1 });
      this.updateLastResult(i, r), on(this.observers, "error", this.last.error = t);
    }, e.prototype.hasObservers = function() {
      return this.observers.size > 0;
    }, e.prototype.tearDownQuery = function() {
      this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(t) {
        return t.unsubscribe();
      }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
    }, e.prototype.transformDocument = function(t) {
      return this.queryManager.transform(t);
    }, e;
  }(H)
);
tc(xi);
function bc(n) {
  var e = n.options, t = e.fetchPolicy, r = e.nextFetchPolicy;
  return t === "cache-and-network" || t === "network-only" ? n.reobserve({
    fetchPolicy: "cache-first",
    // Use a temporary nextFetchPolicy function that replaces itself with the
    // previous nextFetchPolicy value and returns the original fetchPolicy.
    nextFetchPolicy: function(i, s) {
      return this.nextFetchPolicy = r, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(i, s) : t;
    }
  }) : n.reobserve();
}
function pp(n) {
  globalThis.__DEV__ !== !1 && L.error(23, n.message, n.stack);
}
function Ec(n) {
  globalThis.__DEV__ !== !1 && n && globalThis.__DEV__ !== !1 && L.debug(24, n);
}
function Br(n) {
  return n === "network-only" || n === "no-cache" || n === "standby";
}
var gt = new (jt ? WeakMap : Map)();
function Ur(n, e) {
  var t = n[e];
  typeof t == "function" && (n[e] = function() {
    return gt.set(
      n,
      // The %1e15 allows the count to wrap around to 0 safely every
      // quadrillion evictions, so there's no risk of overflow. To be
      // clear, this is more of a pedantic principle than something
      // that matters in any conceivable practical scenario.
      (gt.get(n) + 1) % 1e15
    ), t.apply(this, arguments);
  });
}
function Mo(n) {
  n.notifyTimeout && (clearTimeout(n.notifyTimeout), n.notifyTimeout = void 0);
}
var Qr = (
  /** @class */
  function() {
    function n(e, t) {
      t === void 0 && (t = e.generateQueryId()), this.queryId = t, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.stopped = !1, this.dirty = !1, this.observableQuery = null;
      var r = this.cache = e.cache;
      gt.has(r) || (gt.set(r, 0), Ur(r, "evict"), Ur(r, "modify"), Ur(r, "reset"));
    }
    return n.prototype.init = function(e) {
      var t = e.networkStatus || $.loading;
      return this.variables && this.networkStatus !== $.loading && !X(this.variables, e.variables) && (t = $.setVariables), X(e.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
        document: e.document,
        variables: e.variables,
        networkError: null,
        graphQLErrors: this.graphQLErrors || [],
        networkStatus: t
      }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this;
    }, n.prototype.reset = function() {
      Mo(this), this.dirty = !1;
    }, n.prototype.resetDiff = function() {
      this.lastDiff = void 0;
    }, n.prototype.getDiff = function() {
      var e = this.getDiffOptions();
      if (this.lastDiff && X(e, this.lastDiff.options))
        return this.lastDiff.diff;
      this.updateWatch(this.variables);
      var t = this.observableQuery;
      if (t && t.options.fetchPolicy === "no-cache")
        return { complete: !1 };
      var r = this.cache.diff(e);
      return this.updateLastDiff(r, e), r;
    }, n.prototype.updateLastDiff = function(e, t) {
      this.lastDiff = e ? {
        diff: e,
        options: t || this.getDiffOptions()
      } : void 0;
    }, n.prototype.getDiffOptions = function(e) {
      var t;
      return e === void 0 && (e = this.variables), {
        query: this.document,
        variables: e,
        returnPartialData: !0,
        optimistic: !0,
        canonizeResults: (t = this.observableQuery) === null || t === void 0 ? void 0 : t.options.canonizeResults
      };
    }, n.prototype.setDiff = function(e) {
      var t = this, r, i = this.lastDiff && this.lastDiff.diff;
      e && !e.complete && !((r = this.observableQuery) === null || r === void 0) && r.getLastError() || (this.updateLastDiff(e), !this.dirty && !X(i && i.result, e && e.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
        return t.notify();
      }, 0))));
    }, n.prototype.setObservableQuery = function(e) {
      var t = this;
      e !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = e, e ? (e.queryInfo = this, this.listeners.add(this.oqListener = function() {
        var r = t.getDiff();
        r.fromOptimisticTransaction ? e.observe() : bc(e);
      })) : delete this.oqListener);
    }, n.prototype.notify = function() {
      var e = this;
      Mo(this), this.shouldNotify() && this.listeners.forEach(function(t) {
        return t(e);
      }), this.dirty = !1;
    }, n.prototype.shouldNotify = function() {
      if (!this.dirty || !this.listeners.size)
        return !1;
      if (yn(this.networkStatus) && this.observableQuery) {
        var e = this.observableQuery.options.fetchPolicy;
        if (e !== "cache-only" && e !== "cache-and-network")
          return !1;
      }
      return !0;
    }, n.prototype.stop = function() {
      if (!this.stopped) {
        this.stopped = !0, this.reset(), this.cancel(), this.cancel = n.prototype.cancel;
        var e = this.observableQuery;
        e && e.stopPolling();
      }
    }, n.prototype.cancel = function() {
    }, n.prototype.updateWatch = function(e) {
      var t = this;
      e === void 0 && (e = this.variables);
      var r = this.observableQuery;
      if (!(r && r.options.fetchPolicy === "no-cache")) {
        var i = v(v({}, this.getDiffOptions(e)), { watcher: this, callback: function(s) {
          return t.setDiff(s);
        } });
        (!this.lastWatch || !X(i, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = i));
      }
    }, n.prototype.resetLastWrite = function() {
      this.lastWrite = void 0;
    }, n.prototype.shouldWrite = function(e, t) {
      var r = this.lastWrite;
      return !(r && // If cache.evict has been called since the last time we wrote this
      // data into the cache, there's a chance writing this result into
      // the cache will repair what was evicted.
      r.dmCount === gt.get(this.cache) && X(t, r.variables) && X(e.data, r.result.data));
    }, n.prototype.markResult = function(e, t, r, i) {
      var s = this, o = new Ke(), a = Ie(e.errors) ? e.errors.slice(0) : [];
      if (this.reset(), "incremental" in e && Ie(e.incremental)) {
        var c = nc(this.getDiff().result, e);
        e.data = c;
      } else if ("hasNext" in e && e.hasNext) {
        var u = this.getDiff();
        e.data = o.merge(u.result, e.data);
      }
      this.graphQLErrors = a, r.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: e.data, complete: !0 }, this.getDiffOptions(r.variables)) : i !== 0 && (Ni(e, r.errorPolicy) ? this.cache.performTransaction(function(l) {
        if (s.shouldWrite(e, r.variables))
          l.writeQuery({
            query: t,
            data: e.data,
            variables: r.variables,
            overwrite: i === 1
          }), s.lastWrite = {
            result: e,
            variables: r.variables,
            dmCount: gt.get(s.cache)
          };
        else if (s.lastDiff && s.lastDiff.diff.complete) {
          e.data = s.lastDiff.diff.result;
          return;
        }
        var h = s.getDiffOptions(r.variables), f = l.diff(h);
        !s.stopped && X(s.variables, r.variables) && s.updateWatch(r.variables), s.updateLastDiff(f, h), f.complete && (e.data = f.result);
      }) : this.lastWrite = void 0);
    }, n.prototype.markReady = function() {
      return this.networkError = null, this.networkStatus = $.ready;
    }, n.prototype.markError = function(e) {
      return this.networkStatus = $.error, this.lastWrite = void 0, this.reset(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e;
    }, n;
  }()
);
function Ni(n, e) {
  e === void 0 && (e = "none");
  var t = e === "ignore" || e === "all", r = !Wn(n);
  return !r && t && n.data && (r = !0), r;
}
var dp = Object.prototype.hasOwnProperty, Vo = /* @__PURE__ */ Object.create(null), yp = (
  /** @class */
  function() {
    function n(e) {
      var t = this;
      this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new Na(
        je["queryManager.getDocumentInfo"] || 2e3
        /* defaultCacheSizes["queryManager.getDocumentInfo"] */
      ), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new Pt(!1);
      var r = new $a(
        function(s) {
          return t.cache.transformDocument(s);
        },
        // Allow the apollo cache to manage its own transform caches
        { cache: !1 }
      );
      this.cache = e.cache, this.link = e.link, this.defaultOptions = e.defaultOptions, this.queryDeduplication = e.queryDeduplication, this.clientAwareness = e.clientAwareness, this.localState = e.localState, this.ssrMode = e.ssrMode, this.assumeImmutableResults = e.assumeImmutableResults;
      var i = e.documentTransform;
      this.documentTransform = i ? r.concat(i).concat(r) : r, this.defaultContext = e.defaultContext || /* @__PURE__ */ Object.create(null), (this.onBroadcast = e.onBroadcast) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
    }
    return n.prototype.stop = function() {
      var e = this;
      this.queries.forEach(function(t, r) {
        e.stopQueryNoBroadcast(r);
      }), this.cancelPendingFetches(ve(25));
    }, n.prototype.cancelPendingFetches = function(e) {
      this.fetchCancelFns.forEach(function(t) {
        return t(e);
      }), this.fetchCancelFns.clear();
    }, n.prototype.mutate = function(e) {
      return qe(this, arguments, void 0, function(t) {
        var r, i, s, o, a, c, u, l = t.mutation, h = t.variables, f = t.optimisticResponse, d = t.updateQueries, y = t.refetchQueries, g = y === void 0 ? [] : y, E = t.awaitRefetchQueries, m = E === void 0 ? !1 : E, _ = t.update, b = t.onQueryUpdated, x = t.fetchPolicy, S = x === void 0 ? ((c = this.defaultOptions.mutate) === null || c === void 0 ? void 0 : c.fetchPolicy) || "network-only" : x, D = t.errorPolicy, C = D === void 0 ? ((u = this.defaultOptions.mutate) === null || u === void 0 ? void 0 : u.errorPolicy) || "none" : D, A = t.keepRootFields, B = t.context;
        return Be(this, function(K) {
          switch (K.label) {
            case 0:
              return L(l, 26), L(S === "network-only" || S === "no-cache", 27), r = this.generateMutationId(), l = this.cache.transformForLink(this.transform(l)), i = this.getDocumentInfo(l).hasClientExports, h = this.getVariables(l, h), i ? [4, this.localState.addExportedVariables(l, h, B)] : [3, 2];
            case 1:
              h = K.sent(), K.label = 2;
            case 2:
              return s = this.mutationStore && (this.mutationStore[r] = {
                mutation: l,
                variables: h,
                loading: !0,
                error: null
              }), o = f && this.markMutationOptimistic(f, {
                mutationId: r,
                document: l,
                variables: h,
                fetchPolicy: S,
                errorPolicy: C,
                context: B,
                updateQueries: d,
                update: _,
                keepRootFields: A
              }), this.broadcastQueries(), a = this, [2, new Promise(function(Me, Ae) {
                return Lr(a.getObservableFromLink(l, v(v({}, B), { optimisticResponse: o ? f : void 0 }), h, {}, !1), function(G) {
                  if (Wn(G) && C === "none")
                    throw new ht({
                      graphQLErrors: bi(G)
                    });
                  s && (s.loading = !1, s.error = null);
                  var fe = v({}, G);
                  return typeof g == "function" && (g = g(fe)), C === "ignore" && Wn(fe) && delete fe.errors, a.markMutationResult({
                    mutationId: r,
                    result: fe,
                    document: l,
                    variables: h,
                    fetchPolicy: S,
                    errorPolicy: C,
                    context: B,
                    update: _,
                    updateQueries: d,
                    awaitRefetchQueries: m,
                    refetchQueries: g,
                    removeOptimistic: o ? r : void 0,
                    onQueryUpdated: b,
                    keepRootFields: A
                  });
                }).subscribe({
                  next: function(G) {
                    a.broadcastQueries(), (!("hasNext" in G) || G.hasNext === !1) && Me(G);
                  },
                  error: function(G) {
                    s && (s.loading = !1, s.error = G), o && a.cache.removeOptimistic(r), a.broadcastQueries(), Ae(G instanceof ht ? G : new ht({
                      networkError: G
                    }));
                  }
                });
              })];
          }
        });
      });
    }, n.prototype.markMutationResult = function(e, t) {
      var r = this;
      t === void 0 && (t = this.cache);
      var i = e.result, s = [], o = e.fetchPolicy === "no-cache";
      if (!o && Ni(i, e.errorPolicy)) {
        if (Tt(i) || s.push({
          result: i.data,
          dataId: "ROOT_MUTATION",
          query: e.document,
          variables: e.variables
        }), Tt(i) && Ie(i.incremental)) {
          var a = t.diff({
            id: "ROOT_MUTATION",
            // The cache complains if passed a mutation where it expects a
            // query, so we transform mutations and subscriptions to queries
            // (only once, thanks to this.transformCache).
            query: this.getDocumentInfo(e.document).asQuery,
            variables: e.variables,
            optimistic: !1,
            returnPartialData: !0
          }), c = void 0;
          a.result && (c = nc(a.result, i)), typeof c < "u" && (i.data = c, s.push({
            result: c,
            dataId: "ROOT_MUTATION",
            query: e.document,
            variables: e.variables
          }));
        }
        var u = e.updateQueries;
        u && this.queries.forEach(function(h, f) {
          var d = h.observableQuery, y = d && d.queryName;
          if (!(!y || !dp.call(u, y))) {
            var g = u[y], E = r.queries.get(f), m = E.document, _ = E.variables, b = t.diff({
              query: m,
              variables: _,
              returnPartialData: !0,
              optimistic: !1
            }), x = b.result, S = b.complete;
            if (S && x) {
              var D = g(x, {
                mutationResult: i,
                queryName: m && di(m) || void 0,
                queryVariables: _
              });
              D && s.push({
                result: D,
                dataId: "ROOT_QUERY",
                query: m,
                variables: _
              });
            }
          }
        });
      }
      if (s.length > 0 || (e.refetchQueries || "").length > 0 || e.update || e.onQueryUpdated || e.removeOptimistic) {
        var l = [];
        if (this.refetchQueries({
          updateCache: function(h) {
            o || s.forEach(function(g) {
              return h.write(g);
            });
            var f = e.update, d = !lf(i) || Tt(i) && !i.hasNext;
            if (f) {
              if (!o) {
                var y = h.diff({
                  id: "ROOT_MUTATION",
                  // The cache complains if passed a mutation where it expects a
                  // query, so we transform mutations and subscriptions to queries
                  // (only once, thanks to this.transformCache).
                  query: r.getDocumentInfo(e.document).asQuery,
                  variables: e.variables,
                  optimistic: !1,
                  returnPartialData: !0
                });
                y.complete && (i = v(v({}, i), { data: y.result }), "incremental" in i && delete i.incremental, "hasNext" in i && delete i.hasNext);
              }
              d && f(h, i, {
                context: e.context,
                variables: e.variables
              });
            }
            !o && !e.keepRootFields && d && h.modify({
              id: "ROOT_MUTATION",
              fields: function(g, E) {
                var m = E.fieldName, _ = E.DELETE;
                return m === "__typename" ? g : _;
              }
            });
          },
          include: e.refetchQueries,
          // Write the final mutation.result to the root layer of the cache.
          optimistic: !1,
          // Remove the corresponding optimistic layer at the same time as we
          // write the final non-optimistic result.
          removeOptimistic: e.removeOptimistic,
          // Let the caller of client.mutate optionally determine the refetching
          // behavior for watched queries after the mutation.update function runs.
          // If no onQueryUpdated function was provided for this mutation, pass
          // null instead of undefined to disable the default refetching behavior.
          onQueryUpdated: e.onQueryUpdated || null
        }).forEach(function(h) {
          return l.push(h);
        }), e.awaitRefetchQueries || e.onQueryUpdated)
          return Promise.all(l).then(function() {
            return i;
          });
      }
      return Promise.resolve(i);
    }, n.prototype.markMutationOptimistic = function(e, t) {
      var r = this, i = typeof e == "function" ? e(t.variables, { IGNORE: Vo }) : e;
      return i === Vo ? !1 : (this.cache.recordOptimisticTransaction(function(s) {
        try {
          r.markMutationResult(v(v({}, t), { result: { data: i } }), s);
        } catch (o) {
          globalThis.__DEV__ !== !1 && L.error(o);
        }
      }, t.mutationId), !0);
    }, n.prototype.fetchQuery = function(e, t, r) {
      return this.fetchConcastWithInfo(e, t, r).concast.promise;
    }, n.prototype.getQueryStore = function() {
      var e = /* @__PURE__ */ Object.create(null);
      return this.queries.forEach(function(t, r) {
        e[r] = {
          variables: t.variables,
          networkStatus: t.networkStatus,
          networkError: t.networkError,
          graphQLErrors: t.graphQLErrors
        };
      }), e;
    }, n.prototype.resetErrors = function(e) {
      var t = this.queries.get(e);
      t && (t.networkError = void 0, t.graphQLErrors = []);
    }, n.prototype.transform = function(e) {
      return this.documentTransform.transformDocument(e);
    }, n.prototype.getDocumentInfo = function(e) {
      var t = this.transformCache;
      if (!t.has(e)) {
        var r = {
          // TODO These three calls (hasClientExports, shouldForceResolvers, and
          // usesNonreactiveDirective) are performing independent full traversals
          // of the transformed document. We should consider merging these
          // traversals into a single pass in the future, though the work is
          // cached after the first time.
          hasClientExports: zl(e),
          hasForcedResolvers: this.localState.shouldForceResolvers(e),
          hasNonreactiveDirective: hn(["nonreactive"], e),
          clientQuery: this.localState.clientQuery(e),
          serverQuery: Ja([
            { name: "client", remove: !0 },
            { name: "connection" },
            { name: "nonreactive" }
          ], e),
          defaultVars: $i(Tn(e)),
          // Transform any mutation or subscription operations to query operations
          // so we can read/write them from/to the cache.
          asQuery: v(v({}, e), { definitions: e.definitions.map(function(i) {
            return i.kind === "OperationDefinition" && i.operation !== "query" ? v(v({}, i), { operation: "query" }) : i;
          }) })
        };
        t.set(e, r);
      }
      return t.get(e);
    }, n.prototype.getVariables = function(e, t) {
      return v(v({}, this.getDocumentInfo(e).defaultVars), t);
    }, n.prototype.watchQuery = function(e) {
      var t = this.transform(e.query);
      e = v(v({}, e), { variables: this.getVariables(t, e.variables) }), typeof e.notifyOnNetworkStatusChange > "u" && (e.notifyOnNetworkStatusChange = !1);
      var r = new Qr(this), i = new xi({
        queryManager: this,
        queryInfo: r,
        options: e
      });
      return i.lastQuery = t, this.queries.set(i.queryId, r), r.init({
        document: t,
        observableQuery: i,
        variables: i.variables
      }), i;
    }, n.prototype.query = function(e, t) {
      var r = this;
      return t === void 0 && (t = this.generateQueryId()), L(e.query, 28), L(e.query.kind === "Document", 29), L(!e.returnPartialData, 30), L(!e.pollInterval, 31), this.fetchQuery(t, v(v({}, e), { query: this.transform(e.query) })).finally(function() {
        return r.stopQuery(t);
      });
    }, n.prototype.generateQueryId = function() {
      return String(this.queryIdCounter++);
    }, n.prototype.generateRequestId = function() {
      return this.requestIdCounter++;
    }, n.prototype.generateMutationId = function() {
      return String(this.mutationIdCounter++);
    }, n.prototype.stopQueryInStore = function(e) {
      this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
    }, n.prototype.stopQueryInStoreNoBroadcast = function(e) {
      var t = this.queries.get(e);
      t && t.stop();
    }, n.prototype.clearStore = function(e) {
      return e === void 0 && (e = {
        discardWatches: !0
      }), this.cancelPendingFetches(ve(32)), this.queries.forEach(function(t) {
        t.observableQuery ? t.networkStatus = $.loading : t.stop();
      }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(e);
    }, n.prototype.getObservableQueries = function(e) {
      var t = this;
      e === void 0 && (e = "active");
      var r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
      return Array.isArray(e) && e.forEach(function(o) {
        typeof o == "string" ? i.set(o, !1) : vh(o) ? i.set(t.transform(o), !1) : ee(o) && o.query && s.add(o);
      }), this.queries.forEach(function(o, a) {
        var c = o.observableQuery, u = o.document;
        if (c) {
          if (e === "all") {
            r.set(a, c);
            return;
          }
          var l = c.queryName, h = c.options.fetchPolicy;
          if (h === "standby" || e === "active" && !c.hasObservers())
            return;
          (e === "active" || l && i.has(l) || u && i.has(u)) && (r.set(a, c), l && i.set(l, !0), u && i.set(u, !0));
        }
      }), s.size && s.forEach(function(o) {
        var a = si("legacyOneTimeQuery"), c = t.getQuery(a).init({
          document: o.query,
          variables: o.variables
        }), u = new xi({
          queryManager: t,
          queryInfo: c,
          options: v(v({}, o), { fetchPolicy: "network-only" })
        });
        L(u.queryId === a), c.setObservableQuery(u), r.set(a, u);
      }), globalThis.__DEV__ !== !1 && i.size && i.forEach(function(o, a) {
        o || globalThis.__DEV__ !== !1 && L.warn(typeof a == "string" ? 33 : 34, a);
      }), r;
    }, n.prototype.reFetchObservableQueries = function(e) {
      var t = this;
      e === void 0 && (e = !1);
      var r = [];
      return this.getObservableQueries(e ? "all" : "active").forEach(function(i, s) {
        var o = i.options.fetchPolicy;
        i.resetLastResults(), (e || o !== "standby" && o !== "cache-only") && r.push(i.refetch()), t.getQuery(s).setDiff(null);
      }), this.broadcastQueries(), Promise.all(r);
    }, n.prototype.setObservableQuery = function(e) {
      this.getQuery(e.queryId).setObservableQuery(e);
    }, n.prototype.startGraphQLSubscription = function(e) {
      var t = this, r = e.query, i = e.fetchPolicy, s = e.errorPolicy, o = s === void 0 ? "none" : s, a = e.variables, c = e.context, u = c === void 0 ? {} : c, l = e.extensions, h = l === void 0 ? {} : l;
      r = this.transform(r), a = this.getVariables(r, a);
      var f = function(y) {
        return t.getObservableFromLink(r, u, y, h).map(function(g) {
          i !== "no-cache" && (Ni(g, o) && t.cache.write({
            query: r,
            result: g.data,
            dataId: "ROOT_SUBSCRIPTION",
            variables: y
          }), t.broadcastQueries());
          var E = Wn(g), m = Sf(g);
          if (E || m) {
            var _ = {};
            if (E && (_.graphQLErrors = g.errors), m && (_.protocolErrors = g.extensions[rs]), o === "none" || m)
              throw new ht(_);
          }
          return o === "ignore" && delete g.errors, g;
        });
      };
      if (this.getDocumentInfo(r).hasClientExports) {
        var d = this.localState.addExportedVariables(r, a, u).then(f);
        return new H(function(y) {
          var g = null;
          return d.then(function(E) {
            return g = E.subscribe(y);
          }, y.error), function() {
            return g && g.unsubscribe();
          };
        });
      }
      return f(a);
    }, n.prototype.stopQuery = function(e) {
      this.stopQueryNoBroadcast(e), this.broadcastQueries();
    }, n.prototype.stopQueryNoBroadcast = function(e) {
      this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
    }, n.prototype.removeQuery = function(e) {
      this.fetchCancelFns.delete(e), this.queries.has(e) && (this.getQuery(e).stop(), this.queries.delete(e));
    }, n.prototype.broadcastQueries = function() {
      this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(e) {
        return e.notify();
      });
    }, n.prototype.getLocalState = function() {
      return this.localState;
    }, n.prototype.getObservableFromLink = function(e, t, r, i, s) {
      var o = this, a;
      s === void 0 && (s = (a = t == null ? void 0 : t.queryDeduplication) !== null && a !== void 0 ? a : this.queryDeduplication);
      var c, u = this.getDocumentInfo(e), l = u.serverQuery, h = u.clientQuery;
      if (l) {
        var f = this, d = f.inFlightLinkObservables, y = f.link, g = {
          query: l,
          variables: r,
          operationName: di(l) || void 0,
          context: this.prepareContext(v(v({}, t), { forceFetch: !s })),
          extensions: i
        };
        if (t = g.context, s) {
          var E = dr(l), m = Ye(r), _ = d.lookup(E, m);
          if (c = _.observable, !c) {
            var b = new pt([
              Ei(y, g)
            ]);
            c = _.observable = b, b.beforeNext(function() {
              d.remove(E, m);
            });
          }
        } else
          c = new pt([
            Ei(y, g)
          ]);
      } else
        c = new pt([H.of({ data: {} })]), t = this.prepareContext(t);
      return h && (c = Lr(c, function(x) {
        return o.localState.runResolvers({
          document: h,
          remoteResult: x,
          context: t,
          variables: r
        });
      })), c;
    }, n.prototype.getResultsFromLink = function(e, t, r) {
      var i = e.lastRequestId = this.generateRequestId(), s = this.cache.transformForLink(r.query);
      return Lr(this.getObservableFromLink(s, r.context, r.variables), function(o) {
        var a = bi(o), c = a.length > 0;
        if (i >= e.lastRequestId) {
          if (c && r.errorPolicy === "none")
            throw e.markError(new ht({
              graphQLErrors: a
            }));
          e.markResult(o, s, r, t), e.markReady();
        }
        var u = {
          data: o.data,
          loading: !1,
          networkStatus: $.ready
        };
        return c && r.errorPolicy !== "ignore" && (u.errors = a, u.networkStatus = $.error), u;
      }, function(o) {
        var a = xf(o) ? o : new ht({ networkError: o });
        throw i >= e.lastRequestId && e.markError(a), a;
      });
    }, n.prototype.fetchConcastWithInfo = function(e, t, r, i) {
      var s = this;
      r === void 0 && (r = $.loading), i === void 0 && (i = t.query);
      var o = this.getVariables(i, t.variables), a = this.getQuery(e), c = this.defaultOptions.watchQuery, u = t.fetchPolicy, l = u === void 0 ? c && c.fetchPolicy || "cache-first" : u, h = t.errorPolicy, f = h === void 0 ? c && c.errorPolicy || "none" : h, d = t.returnPartialData, y = d === void 0 ? !1 : d, g = t.notifyOnNetworkStatusChange, E = g === void 0 ? !1 : g, m = t.context, _ = m === void 0 ? {} : m, b = Object.assign({}, t, {
        query: i,
        variables: o,
        fetchPolicy: l,
        errorPolicy: f,
        returnPartialData: y,
        notifyOnNetworkStatusChange: E,
        context: _
      }), x = function(B) {
        b.variables = B;
        var K = s.fetchQueryByPolicy(a, b, r);
        return (
          // If we're in standby, postpone advancing options.fetchPolicy using
          // applyNextFetchPolicy.
          b.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
          // this is another way to detect when nothing was done/fetched.
          K.sources.length > 0 && a.observableQuery && a.observableQuery.applyNextFetchPolicy("after-fetch", t), K
        );
      }, S = function() {
        return s.fetchCancelFns.delete(e);
      };
      this.fetchCancelFns.set(e, function(B) {
        S(), setTimeout(function() {
          return D.cancel(B);
        });
      });
      var D, C;
      if (this.getDocumentInfo(b.query).hasClientExports)
        D = new pt(this.localState.addExportedVariables(b.query, b.variables, b.context).then(x).then(function(B) {
          return B.sources;
        })), C = !0;
      else {
        var A = x(b.variables);
        C = A.fromLink, D = new pt(A.sources);
      }
      return D.promise.then(S, S), {
        concast: D,
        fromLink: C
      };
    }, n.prototype.refetchQueries = function(e) {
      var t = this, r = e.updateCache, i = e.include, s = e.optimistic, o = s === void 0 ? !1 : s, a = e.removeOptimistic, c = a === void 0 ? o ? si("refetchQueries") : void 0 : a, u = e.onQueryUpdated, l = /* @__PURE__ */ new Map();
      i && this.getObservableQueries(i).forEach(function(f, d) {
        l.set(d, {
          oq: f,
          lastDiff: t.getQuery(d).getDiff()
        });
      });
      var h = /* @__PURE__ */ new Map();
      return r && this.cache.batch({
        update: r,
        // Since you can perform any combination of cache reads and/or writes in
        // the cache.batch update function, its optimistic option can be either
        // a boolean or a string, representing three distinct modes of
        // operation:
        //
        // * false: read/write only the root layer
        // * true: read/write the topmost layer
        // * string: read/write a fresh optimistic layer with that ID string
        //
        // When typeof optimistic === "string", a new optimistic layer will be
        // temporarily created within cache.batch with that string as its ID. If
        // we then pass that same string as the removeOptimistic option, we can
        // make cache.batch immediately remove the optimistic layer after
        // running the updateCache function, triggering only one broadcast.
        //
        // However, the refetchQueries method accepts only true or false for its
        // optimistic option (not string). We interpret true to mean a temporary
        // optimistic layer should be created, to allow efficiently rolling back
        // the effect of the updateCache function, which involves passing a
        // string instead of true as the optimistic option to cache.batch, when
        // refetchQueries receives optimistic: true.
        //
        // In other words, we are deliberately not supporting the use case of
        // writing to an *existing* optimistic layer (using the refetchQueries
        // updateCache function), since that would potentially interfere with
        // other optimistic updates in progress. Instead, you can read/write
        // only the root layer by passing optimistic: false to refetchQueries,
        // or you can read/write a brand new optimistic layer that will be
        // automatically removed by passing optimistic: true.
        optimistic: o && c || !1,
        // The removeOptimistic option can also be provided by itself, even if
        // optimistic === false, to remove some previously-added optimistic
        // layer safely and efficiently, like we do in markMutationResult.
        //
        // If an explicit removeOptimistic string is provided with optimistic:
        // true, the removeOptimistic string will determine the ID of the
        // temporary optimistic layer, in case that ever matters.
        removeOptimistic: c,
        onWatchUpdated: function(f, d, y) {
          var g = f.watcher instanceof Qr && f.watcher.observableQuery;
          if (g) {
            if (u) {
              l.delete(g.queryId);
              var E = u(g, d, y);
              return E === !0 && (E = g.refetch()), E !== !1 && h.set(g, E), E;
            }
            u !== null && l.set(g.queryId, { oq: g, lastDiff: y, diff: d });
          }
        }
      }), l.size && l.forEach(function(f, d) {
        var y = f.oq, g = f.lastDiff, E = f.diff, m;
        if (u) {
          if (!E) {
            var _ = y.queryInfo;
            _.reset(), E = _.getDiff();
          }
          m = u(y, E, g);
        }
        (!u || m === !0) && (m = y.refetch()), m !== !1 && h.set(y, m), d.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(d);
      }), c && this.cache.removeOptimistic(c), h;
    }, n.prototype.fetchQueryByPolicy = function(e, t, r) {
      var i = this, s = t.query, o = t.variables, a = t.fetchPolicy, c = t.refetchWritePolicy, u = t.errorPolicy, l = t.returnPartialData, h = t.context, f = t.notifyOnNetworkStatusChange, d = e.networkStatus;
      e.init({
        document: s,
        variables: o,
        networkStatus: r
      });
      var y = function() {
        return e.getDiff();
      }, g = function(x, S) {
        S === void 0 && (S = e.networkStatus || $.loading);
        var D = x.result;
        globalThis.__DEV__ !== !1 && !l && !X(D, {}) && Ec(x.missing);
        var C = function(A) {
          return H.of(v({ data: A, loading: yn(S), networkStatus: S }, x.complete ? null : { partial: !0 }));
        };
        return D && i.getDocumentInfo(s).hasForcedResolvers ? i.localState.runResolvers({
          document: s,
          remoteResult: { data: D },
          context: h,
          variables: o,
          onlyRunForcedResolvers: !0
        }).then(function(A) {
          return C(A.data || void 0);
        }) : u === "none" && S === $.refetch && Array.isArray(x.missing) ? C(void 0) : C(D);
      }, E = a === "no-cache" ? 0 : r === $.refetch && c !== "merge" ? 1 : 2, m = function() {
        return i.getResultsFromLink(e, E, {
          query: s,
          variables: o,
          context: h,
          fetchPolicy: a,
          errorPolicy: u
        });
      }, _ = f && typeof d == "number" && d !== r && yn(r);
      switch (a) {
        default:
        case "cache-first": {
          var b = y();
          return b.complete ? {
            fromLink: !1,
            sources: [g(b, e.markReady())]
          } : l || _ ? {
            fromLink: !0,
            sources: [g(b), m()]
          } : { fromLink: !0, sources: [m()] };
        }
        case "cache-and-network": {
          var b = y();
          return b.complete || l || _ ? {
            fromLink: !0,
            sources: [g(b), m()]
          } : { fromLink: !0, sources: [m()] };
        }
        case "cache-only":
          return {
            fromLink: !1,
            sources: [g(y(), e.markReady())]
          };
        case "network-only":
          return _ ? {
            fromLink: !0,
            sources: [g(y()), m()]
          } : { fromLink: !0, sources: [m()] };
        case "no-cache":
          return _ ? {
            fromLink: !0,
            // Note that queryInfo.getDiff() for no-cache queries does not call
            // cache.diff, but instead returns a { complete: false } stub result
            // when there is no queryInfo.diff already defined.
            sources: [g(e.getDiff()), m()]
          } : { fromLink: !0, sources: [m()] };
        case "standby":
          return { fromLink: !1, sources: [] };
      }
    }, n.prototype.getQuery = function(e) {
      return e && !this.queries.has(e) && this.queries.set(e, new Qr(this, e)), this.queries.get(e);
    }, n.prototype.prepareContext = function(e) {
      e === void 0 && (e = {});
      var t = this.localState.prepareContext(e);
      return v(v(v({}, this.defaultContext), t), { clientAwareness: this.clientAwareness });
    }, n;
  }()
), vp = (
  /** @class */
  function() {
    function n(e) {
      var t = e.cache, r = e.client, i = e.resolvers, s = e.fragmentMatcher;
      this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = t, r && (this.client = r), i && this.addResolvers(i), s && this.setFragmentMatcher(s);
    }
    return n.prototype.addResolvers = function(e) {
      var t = this;
      this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(r) {
        t.resolvers = so(t.resolvers, r);
      }) : this.resolvers = so(this.resolvers, e);
    }, n.prototype.setResolvers = function(e) {
      this.resolvers = {}, this.addResolvers(e);
    }, n.prototype.getResolvers = function() {
      return this.resolvers || {};
    }, n.prototype.runResolvers = function(e) {
      return qe(this, arguments, void 0, function(t) {
        var r = t.document, i = t.remoteResult, s = t.context, o = t.variables, a = t.onlyRunForcedResolvers, c = a === void 0 ? !1 : a;
        return Be(this, function(u) {
          return r ? [2, this.resolveDocument(r, i.data, s, o, this.fragmentMatcher, c).then(function(l) {
            return v(v({}, i), { data: l.result });
          })] : [2, i];
        });
      });
    }, n.prototype.setFragmentMatcher = function(e) {
      this.fragmentMatcher = e;
    }, n.prototype.getFragmentMatcher = function() {
      return this.fragmentMatcher;
    }, n.prototype.clientQuery = function(e) {
      return hn(["client"], e) && this.resolvers ? e : null;
    }, n.prototype.serverQuery = function(e) {
      return Ka(e);
    }, n.prototype.prepareContext = function(e) {
      var t = this.cache;
      return v(v({}, e), {
        cache: t,
        // Getting an entry's cache key is useful for local state resolvers.
        getCacheKey: function(r) {
          return t.identify(r);
        }
      });
    }, n.prototype.addExportedVariables = function(e) {
      return qe(this, arguments, void 0, function(t, r, i) {
        return r === void 0 && (r = {}), i === void 0 && (i = {}), Be(this, function(s) {
          return t ? [2, this.resolveDocument(t, this.buildRootValueFromCache(t, r) || {}, this.prepareContext(i), r).then(function(o) {
            return v(v({}, r), o.exportedVariables);
          })] : [2, v({}, r)];
        });
      });
    }, n.prototype.shouldForceResolvers = function(e) {
      var t = !1;
      return Pe(e, {
        Directive: {
          enter: function(r) {
            if (r.name.value === "client" && r.arguments && (t = r.arguments.some(function(i) {
              return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
            }), t))
              return Yi;
          }
        }
      }), t;
    }, n.prototype.buildRootValueFromCache = function(e, t) {
      return this.cache.diff({
        query: Gh(e),
        variables: t,
        returnPartialData: !0,
        optimistic: !1
      }).result;
    }, n.prototype.resolveDocument = function(e, t) {
      return qe(this, arguments, void 0, function(r, i, s, o, a, c) {
        var u, l, h, f, d, y, g, E, m, _, b;
        return s === void 0 && (s = {}), o === void 0 && (o = {}), a === void 0 && (a = function() {
          return !0;
        }), c === void 0 && (c = !1), Be(this, function(x) {
          return u = On(r), l = hr(r), h = cr(l), f = this.collectSelectionsToResolve(u, h), d = u.operation, y = d ? d.charAt(0).toUpperCase() + d.slice(1) : "Query", g = this, E = g.cache, m = g.client, _ = {
            fragmentMap: h,
            context: v(v({}, s), { cache: E, client: m }),
            variables: o,
            fragmentMatcher: a,
            defaultOperationType: y,
            exportedVariables: {},
            selectionsToResolve: f,
            onlyRunForcedResolvers: c
          }, b = !1, [2, this.resolveSelectionSet(u.selectionSet, b, i, _).then(function(S) {
            return {
              result: S,
              exportedVariables: _.exportedVariables
            };
          })];
        });
      });
    }, n.prototype.resolveSelectionSet = function(e, t, r, i) {
      return qe(this, void 0, void 0, function() {
        var s, o, a, c, u, l = this;
        return Be(this, function(h) {
          return s = i.fragmentMap, o = i.context, a = i.variables, c = [r], u = function(f) {
            return qe(l, void 0, void 0, function() {
              var d, y;
              return Be(this, function(g) {
                return !t && !i.selectionsToResolve.has(f) ? [
                  2
                  /*return*/
                ] : bn(f, a) ? Ge(f) ? [2, this.resolveField(f, t, r, i).then(function(E) {
                  var m;
                  typeof E < "u" && c.push((m = {}, m[$e(f)] = E, m));
                })] : (Nh(f) ? d = f : (d = s[f.name.value], L(d, 18, f.name.value)), d && d.typeCondition && (y = d.typeCondition.name.value, i.fragmentMatcher(r, y, o)) ? [2, this.resolveSelectionSet(d.selectionSet, t, r, i).then(function(E) {
                  c.push(E);
                })] : [
                  2
                  /*return*/
                ]) : [
                  2
                  /*return*/
                ];
              });
            });
          }, [2, Promise.all(e.selections.map(u)).then(function() {
            return yr(c);
          })];
        });
      });
    }, n.prototype.resolveField = function(e, t, r, i) {
      return qe(this, void 0, void 0, function() {
        var s, o, a, c, u, l, h, f, d, y = this;
        return Be(this, function(g) {
          return r ? (s = i.variables, o = e.name.value, a = $e(e), c = o !== a, u = r[a] || r[o], l = Promise.resolve(u), (!i.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (h = r.__typename || i.defaultOperationType, f = this.resolvers && this.resolvers[h], f && (d = f[c ? o : a], d && (l = Promise.resolve(
            // In case the resolve function accesses reactive variables,
            // set cacheSlot to the current cache instance.
            is.withValue(this.cache, d, [
              r,
              lr(e, s),
              i.context,
              { field: e, fragmentMap: i.fragmentMap }
            ])
          )))), [2, l.then(function(E) {
            var m, _;
            if (E === void 0 && (E = u), e.directives && e.directives.forEach(function(x) {
              x.name.value === "export" && x.arguments && x.arguments.forEach(function(S) {
                S.name.value === "as" && S.value.kind === "StringValue" && (i.exportedVariables[S.value.value] = E);
              });
            }), !e.selectionSet || E == null)
              return E;
            var b = (_ = (m = e.directives) === null || m === void 0 ? void 0 : m.some(function(x) {
              return x.name.value === "client";
            })) !== null && _ !== void 0 ? _ : !1;
            if (Array.isArray(E))
              return y.resolveSubSelectedArray(e, t || b, E, i);
            if (e.selectionSet)
              return y.resolveSelectionSet(e.selectionSet, t || b, E, i);
          })]) : [2, null];
        });
      });
    }, n.prototype.resolveSubSelectedArray = function(e, t, r, i) {
      var s = this;
      return Promise.all(r.map(function(o) {
        if (o === null)
          return null;
        if (Array.isArray(o))
          return s.resolveSubSelectedArray(e, t, o, i);
        if (e.selectionSet)
          return s.resolveSelectionSet(e.selectionSet, t, o, i);
      }));
    }, n.prototype.collectSelectionsToResolve = function(e, t) {
      var r = function(o) {
        return !Array.isArray(o);
      }, i = this.selectionsToResolveCache;
      function s(o) {
        if (!i.has(o)) {
          var a = /* @__PURE__ */ new Set();
          i.set(o, a), Pe(o, {
            Directive: function(c, u, l, h, f) {
              c.name.value === "client" && f.forEach(function(d) {
                r(d) && Js(d) && a.add(d);
              });
            },
            FragmentSpread: function(c, u, l, h, f) {
              var d = t[c.name.value];
              L(d, 19, c.name.value);
              var y = s(d);
              y.size > 0 && (f.forEach(function(g) {
                r(g) && Js(g) && a.add(g);
              }), a.add(c), y.forEach(function(g) {
                a.add(g);
              }));
            }
          });
        }
        return i.get(o);
      }
      return s(e);
    }, n;
  }()
), qo = !1, Tc = (
  /** @class */
  function() {
    function n(e) {
      var t = this;
      if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache)
        throw ve(15);
      var r = e.uri, i = e.credentials, s = e.headers, o = e.cache, a = e.documentTransform, c = e.ssrMode, u = c === void 0 ? !1 : c, l = e.ssrForceFetchDelay, h = l === void 0 ? 0 : l, f = e.connectToDevTools, d = e.queryDeduplication, y = d === void 0 ? !0 : d, g = e.defaultOptions, E = e.defaultContext, m = e.assumeImmutableResults, _ = m === void 0 ? o.assumeImmutableResults : m, b = e.resolvers, x = e.typeDefs, S = e.fragmentMatcher, D = e.name, C = e.version, A = e.devtools, B = e.link;
      B || (B = r ? new zf({ uri: r, credentials: i, headers: s }) : _n.empty()), this.link = B, this.cache = o, this.disableNetworkFetches = u || h > 0, this.queryDeduplication = y, this.defaultOptions = g || /* @__PURE__ */ Object.create(null), this.typeDefs = x, this.devtoolsConfig = v(v({}, A), { enabled: (A == null ? void 0 : A.enabled) || f }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), h && setTimeout(function() {
        return t.disableNetworkFetches = !1;
      }, h), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = Bi, this.localState = new vp({
        cache: o,
        client: this,
        resolvers: b,
        fragmentMatcher: S
      }), this.queryManager = new yp({
        cache: this.cache,
        link: this.link,
        defaultOptions: this.defaultOptions,
        defaultContext: E,
        documentTransform: a,
        queryDeduplication: y,
        ssrMode: u,
        clientAwareness: {
          name: D,
          version: C
        },
        localState: this.localState,
        assumeImmutableResults: _,
        onBroadcast: this.devtoolsConfig.enabled ? function() {
          t.devToolsHookCb && t.devToolsHookCb({
            action: {},
            state: {
              queries: t.queryManager.getQueryStore(),
              mutations: t.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: t.cache.extract(!0)
          });
        } : void 0
      }), this.devtoolsConfig.enabled && this.connectToDevTools();
    }
    return n.prototype.connectToDevTools = function() {
      if (!(typeof window > "u")) {
        var e = window, t = Symbol.for("apollo.devtools");
        (e[t] = e[t] || []).push(this), e.__APOLLO_CLIENT__ = this, !qo && globalThis.__DEV__ !== !1 && (qo = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
          if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
            var r = window.navigator, i = r && r.userAgent, s = void 0;
            typeof i == "string" && (i.indexOf("Chrome/") > -1 ? s = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : i.indexOf("Firefox/") > -1 && (s = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), s && globalThis.__DEV__ !== !1 && L.log("Download the Apollo DevTools for a better development experience: %s", s);
          }
        }, 1e4));
      }
    }, Object.defineProperty(n.prototype, "documentTransform", {
      /**
       * The `DocumentTransform` used to modify GraphQL documents before a request
       * is made. If a custom `DocumentTransform` is not provided, this will be the
       * default document transform.
       */
      get: function() {
        return this.queryManager.documentTransform;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.stop = function() {
      this.queryManager.stop();
    }, n.prototype.watchQuery = function(e) {
      return this.defaultOptions.watchQuery && (e = Pr(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = v(v({}, e), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(e);
    }, n.prototype.query = function(e) {
      return this.defaultOptions.query && (e = Pr(this.defaultOptions.query, e)), L(e.fetchPolicy !== "cache-and-network", 16), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = v(v({}, e), { fetchPolicy: "cache-first" })), this.queryManager.query(e);
    }, n.prototype.mutate = function(e) {
      return this.defaultOptions.mutate && (e = Pr(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
    }, n.prototype.subscribe = function(e) {
      return this.queryManager.startGraphQLSubscription(e);
    }, n.prototype.readQuery = function(e, t) {
      return t === void 0 && (t = !1), this.cache.readQuery(e, t);
    }, n.prototype.watchFragment = function(e) {
      return this.cache.watchFragment(e);
    }, n.prototype.readFragment = function(e, t) {
      return t === void 0 && (t = !1), this.cache.readFragment(e, t);
    }, n.prototype.writeQuery = function(e) {
      var t = this.cache.writeQuery(e);
      return e.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
    }, n.prototype.writeFragment = function(e) {
      var t = this.cache.writeFragment(e);
      return e.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
    }, n.prototype.__actionHookForDevTools = function(e) {
      this.devToolsHookCb = e;
    }, n.prototype.__requestRaw = function(e) {
      return Ei(this.link, e);
    }, n.prototype.resetStore = function() {
      var e = this;
      return Promise.resolve().then(function() {
        return e.queryManager.clearStore({
          discardWatches: !1
        });
      }).then(function() {
        return Promise.all(e.resetStoreCallbacks.map(function(t) {
          return t();
        }));
      }).then(function() {
        return e.reFetchObservableQueries();
      });
    }, n.prototype.clearStore = function() {
      var e = this;
      return Promise.resolve().then(function() {
        return e.queryManager.clearStore({
          discardWatches: !0
        });
      }).then(function() {
        return Promise.all(e.clearStoreCallbacks.map(function(t) {
          return t();
        }));
      });
    }, n.prototype.onResetStore = function(e) {
      var t = this;
      return this.resetStoreCallbacks.push(e), function() {
        t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function(r) {
          return r !== e;
        });
      };
    }, n.prototype.onClearStore = function(e) {
      var t = this;
      return this.clearStoreCallbacks.push(e), function() {
        t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function(r) {
          return r !== e;
        });
      };
    }, n.prototype.reFetchObservableQueries = function(e) {
      return this.queryManager.reFetchObservableQueries(e);
    }, n.prototype.refetchQueries = function(e) {
      var t = this.queryManager.refetchQueries(e), r = [], i = [];
      t.forEach(function(o, a) {
        r.push(a), i.push(o);
      });
      var s = Promise.all(i);
      return s.queries = r, s.results = i, s.catch(function(o) {
        globalThis.__DEV__ !== !1 && L.debug(17, o);
      }), s;
    }, n.prototype.getObservableQueries = function(e) {
      return e === void 0 && (e = "active"), this.queryManager.getObservableQueries(e);
    }, n.prototype.extract = function(e) {
      return this.cache.extract(e);
    }, n.prototype.restore = function(e) {
      return this.cache.restore(e);
    }, n.prototype.addResolvers = function(e) {
      this.localState.addResolvers(e);
    }, n.prototype.setResolvers = function(e) {
      this.localState.setResolvers(e);
    }, n.prototype.getResolvers = function() {
      return this.localState.getResolvers();
    }, n.prototype.setLocalStateFragmentMatcher = function(e) {
      this.localState.setFragmentMatcher(e);
    }, n.prototype.setLink = function(e) {
      this.link = this.queryManager.link = e;
    }, Object.defineProperty(n.prototype, "defaultContext", {
      get: function() {
        return this.queryManager.defaultContext;
      },
      enumerable: !1,
      configurable: !0
    }), n;
  }()
);
globalThis.__DEV__ !== !1 && (Tc.prototype.getMemoryInternals = ah);
var Gn = /* @__PURE__ */ new Map(), Ii = /* @__PURE__ */ new Map(), Oc = !0, nr = !1;
function _c(n) {
  return n.replace(/[\s,]+/g, " ").trim();
}
function mp(n) {
  return _c(n.source.body.substring(n.start, n.end));
}
function gp(n) {
  var e = /* @__PURE__ */ new Set(), t = [];
  return n.definitions.forEach(function(r) {
    if (r.kind === "FragmentDefinition") {
      var i = r.name.value, s = mp(r.loc), o = Ii.get(i);
      o && !o.has(s) ? Oc && console.warn("Warning: fragment with name " + i + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : o || Ii.set(i, o = /* @__PURE__ */ new Set()), o.add(s), e.has(s) || (e.add(s), t.push(r));
    } else
      t.push(r);
  }), v(v({}, n), { definitions: t });
}
function bp(n) {
  var e = new Set(n.definitions);
  e.forEach(function(r) {
    r.loc && delete r.loc, Object.keys(r).forEach(function(i) {
      var s = r[i];
      s && typeof s == "object" && e.add(s);
    });
  });
  var t = n.loc;
  return t && (delete t.startToken, delete t.endToken), n;
}
function Ep(n) {
  var e = _c(n);
  if (!Gn.has(e)) {
    var t = Fl(n, {
      experimentalFragmentVariables: nr,
      allowLegacyFragmentVariables: nr
    });
    if (!t || t.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    Gn.set(e, bp(gp(t)));
  }
  return Gn.get(e);
}
function ot(n) {
  for (var e = [], t = 1; t < arguments.length; t++)
    e[t - 1] = arguments[t];
  typeof n == "string" && (n = [n]);
  var r = n[0];
  return e.forEach(function(i, s) {
    i && i.kind === "Document" ? r += i.loc.source.body : r += i, r += n[s + 1];
  }), Ep(r);
}
function Tp() {
  Gn.clear(), Ii.clear();
}
function Op() {
  Oc = !1;
}
function _p() {
  nr = !0;
}
function wp() {
  nr = !1;
}
var Ht = {
  gql: ot,
  resetCaches: Tp,
  disableFragmentWarnings: Op,
  enableExperimentalFragmentVariables: _p,
  disableExperimentalFragmentVariables: wp
};
(function(n) {
  n.gql = Ht.gql, n.resetCaches = Ht.resetCaches, n.disableFragmentWarnings = Ht.disableFragmentWarnings, n.enableExperimentalFragmentVariables = Ht.enableExperimentalFragmentVariables, n.disableExperimentalFragmentVariables = Ht.disableExperimentalFragmentVariables;
})(ot || (ot = {}));
ot.default = ot;
const kp = (n) => new Tc({
  // uri: "https://countries.trevorblades.com",
  // cache: new InMemoryCache(),
  uri: n.uri || "https://countries.trevorblades.com",
  cache: n.cache || new cs()
});
ot`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;
const Bo = async (n, e = {}) => {
  const { method: t = "GET", headers: r = {}, body: i } = e, s = {
    method: t,
    headers: r
  };
  i && (s.body = JSON.stringify(i));
  const o = await fetch(n, s);
  if (!o.ok)
    throw new Error(`HTTP error! status: ${o.status}`);
  return o.json();
}, De = /* @__PURE__ */ Object.create(null);
De.open = "0";
De.close = "1";
De.ping = "2";
De.pong = "3";
De.message = "4";
De.upgrade = "5";
De.noop = "6";
const Jn = /* @__PURE__ */ Object.create(null);
Object.keys(De).forEach((n) => {
  Jn[De[n]] = n;
});
const Di = { type: "error", data: "parser error" }, wc = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", kc = typeof ArrayBuffer == "function", Sc = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n && n.buffer instanceof ArrayBuffer, us = ({ type: n, data: e }, t, r) => wc && e instanceof Blob ? t ? r(e) : Uo(e, r) : kc && (e instanceof ArrayBuffer || Sc(e)) ? t ? r(e) : Uo(new Blob([e]), r) : r(De[n] + (e || "")), Uo = (n, e) => {
  const t = new FileReader();
  return t.onload = function() {
    const r = t.result.split(",")[1];
    e("b" + (r || ""));
  }, t.readAsDataURL(n);
};
function Qo(n) {
  return n instanceof Uint8Array ? n : n instanceof ArrayBuffer ? new Uint8Array(n) : new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
}
let zr;
function Sp(n, e) {
  if (wc && n.data instanceof Blob)
    return n.data.arrayBuffer().then(Qo).then(e);
  if (kc && (n.data instanceof ArrayBuffer || Sc(n.data)))
    return e(Qo(n.data));
  us(n, !1, (t) => {
    zr || (zr = new TextEncoder()), e(zr.encode(t));
  });
}
const zo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", nn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let n = 0; n < zo.length; n++)
  nn[zo.charCodeAt(n)] = n;
const xp = (n) => {
  let e = n.length * 0.75, t = n.length, r, i = 0, s, o, a, c;
  n[n.length - 1] === "=" && (e--, n[n.length - 2] === "=" && e--);
  const u = new ArrayBuffer(e), l = new Uint8Array(u);
  for (r = 0; r < t; r += 4)
    s = nn[n.charCodeAt(r)], o = nn[n.charCodeAt(r + 1)], a = nn[n.charCodeAt(r + 2)], c = nn[n.charCodeAt(r + 3)], l[i++] = s << 2 | o >> 4, l[i++] = (o & 15) << 4 | a >> 2, l[i++] = (a & 3) << 6 | c & 63;
  return u;
}, Np = typeof ArrayBuffer == "function", ls = (n, e) => {
  if (typeof n != "string")
    return {
      type: "message",
      data: xc(n, e)
    };
  const t = n.charAt(0);
  return t === "b" ? {
    type: "message",
    data: Ip(n.substring(1), e)
  } : Jn[t] ? n.length > 1 ? {
    type: Jn[t],
    data: n.substring(1)
  } : {
    type: Jn[t]
  } : Di;
}, Ip = (n, e) => {
  if (Np) {
    const t = xp(n);
    return xc(t, e);
  } else
    return { base64: !0, data: n };
}, xc = (n, e) => {
  switch (e) {
    case "blob":
      return n instanceof Blob ? n : new Blob([n]);
    case "arraybuffer":
    default:
      return n instanceof ArrayBuffer ? n : n.buffer;
  }
}, Nc = "", Dp = (n, e) => {
  const t = n.length, r = new Array(t);
  let i = 0;
  n.forEach((s, o) => {
    us(s, !1, (a) => {
      r[o] = a, ++i === t && e(r.join(Nc));
    });
  });
}, Rp = (n, e) => {
  const t = n.split(Nc), r = [];
  for (let i = 0; i < t.length; i++) {
    const s = ls(t[i], e);
    if (r.push(s), s.type === "error")
      break;
  }
  return r;
};
function Ap() {
  return new TransformStream({
    transform(n, e) {
      Sp(n, (t) => {
        const r = t.length;
        let i;
        if (r < 126)
          i = new Uint8Array(1), new DataView(i.buffer).setUint8(0, r);
        else if (r < 65536) {
          i = new Uint8Array(3);
          const s = new DataView(i.buffer);
          s.setUint8(0, 126), s.setUint16(1, r);
        } else {
          i = new Uint8Array(9);
          const s = new DataView(i.buffer);
          s.setUint8(0, 127), s.setBigUint64(1, BigInt(r));
        }
        n.data && typeof n.data != "string" && (i[0] |= 128), e.enqueue(i), e.enqueue(t);
      });
    }
  });
}
let Wr;
function Pn(n) {
  return n.reduce((e, t) => e + t.length, 0);
}
function jn(n, e) {
  if (n[0].length === e)
    return n.shift();
  const t = new Uint8Array(e);
  let r = 0;
  for (let i = 0; i < e; i++)
    t[i] = n[0][r++], r === n[0].length && (n.shift(), r = 0);
  return n.length && r < n[0].length && (n[0] = n[0].slice(r)), t;
}
function Cp(n, e) {
  Wr || (Wr = new TextDecoder());
  const t = [];
  let r = 0, i = -1, s = !1;
  return new TransformStream({
    transform(o, a) {
      for (t.push(o); ; ) {
        if (r === 0) {
          if (Pn(t) < 1)
            break;
          const c = jn(t, 1);
          s = (c[0] & 128) === 128, i = c[0] & 127, i < 126 ? r = 3 : i === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Pn(t) < 2)
            break;
          const c = jn(t, 2);
          i = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Pn(t) < 8)
            break;
          const c = jn(t, 8), u = new DataView(c.buffer, c.byteOffset, c.length), l = u.getUint32(0);
          if (l > Math.pow(2, 21) - 1) {
            a.enqueue(Di);
            break;
          }
          i = l * Math.pow(2, 32) + u.getUint32(4), r = 3;
        } else {
          if (Pn(t) < i)
            break;
          const c = jn(t, i);
          a.enqueue(ls(s ? c : Wr.decode(c), e)), r = 0;
        }
        if (i === 0 || i > n) {
          a.enqueue(Di);
          break;
        }
      }
    }
  });
}
const Ic = 4;
function ae(n) {
  if (n) return Fp(n);
}
function Fp(n) {
  for (var e in ae.prototype)
    n[e] = ae.prototype[e];
  return n;
}
ae.prototype.on = ae.prototype.addEventListener = function(n, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(e), this;
};
ae.prototype.once = function(n, e) {
  function t() {
    this.off(n, t), e.apply(this, arguments);
  }
  return t.fn = e, this.on(n, t), this;
};
ae.prototype.off = ae.prototype.removeListener = ae.prototype.removeAllListeners = ae.prototype.removeEventListener = function(n, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var t = this._callbacks["$" + n];
  if (!t) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + n], this;
  for (var r, i = 0; i < t.length; i++)
    if (r = t[i], r === e || r.fn === e) {
      t.splice(i, 1);
      break;
    }
  return t.length === 0 && delete this._callbacks["$" + n], this;
};
ae.prototype.emit = function(n) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), t = this._callbacks["$" + n], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  if (t) {
    t = t.slice(0);
    for (var r = 0, i = t.length; r < i; ++r)
      t[r].apply(this, e);
  }
  return this;
};
ae.prototype.emitReserved = ae.prototype.emit;
ae.prototype.listeners = function(n) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || [];
};
ae.prototype.hasListeners = function(n) {
  return !!this.listeners(n).length;
};
const Te = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function Dc(n, ...e) {
  return e.reduce((t, r) => (n.hasOwnProperty(r) && (t[r] = n[r]), t), {});
}
const Lp = Te.setTimeout, Pp = Te.clearTimeout;
function vr(n, e) {
  e.useNativeTimers ? (n.setTimeoutFn = Lp.bind(Te), n.clearTimeoutFn = Pp.bind(Te)) : (n.setTimeoutFn = Te.setTimeout.bind(Te), n.clearTimeoutFn = Te.clearTimeout.bind(Te));
}
const jp = 1.33;
function Mp(n) {
  return typeof n == "string" ? Vp(n) : Math.ceil((n.byteLength || n.size) * jp);
}
function Vp(n) {
  let e = 0, t = 0;
  for (let r = 0, i = n.length; r < i; r++)
    e = n.charCodeAt(r), e < 128 ? t += 1 : e < 2048 ? t += 2 : e < 55296 || e >= 57344 ? t += 3 : (r++, t += 4);
  return t;
}
function qp(n) {
  let e = "";
  for (let t in n)
    n.hasOwnProperty(t) && (e.length && (e += "&"), e += encodeURIComponent(t) + "=" + encodeURIComponent(n[t]));
  return e;
}
function Bp(n) {
  let e = {}, t = n.split("&");
  for (let r = 0, i = t.length; r < i; r++) {
    let s = t[r].split("=");
    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return e;
}
class Up extends Error {
  constructor(e, t, r) {
    super(e), this.description = t, this.context = r, this.type = "TransportError";
  }
}
class hs extends ae {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, vr(this, e), this.opts = e, this.query = e.query, this.socket = e.socket;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(e, t, r) {
    return super.emitReserved("error", new Up(e, t, r)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(e) {
    this.readyState === "open" && this.write(e);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(e) {
    const t = ls(e, this.socket.binaryType);
    this.onPacket(t);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(e) {
  }
  createUri(e, t = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(t);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const t = qp(e);
    return t.length ? "?" + t : "";
  }
}
const Rc = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Ri = 64, Qp = {};
let Wo = 0, Mn = 0, Yo;
function $o(n) {
  let e = "";
  do
    e = Rc[n % Ri] + e, n = Math.floor(n / Ri);
  while (n > 0);
  return e;
}
function Ac() {
  const n = $o(+/* @__PURE__ */ new Date());
  return n !== Yo ? (Wo = 0, Yo = n) : n + "." + $o(Wo++);
}
for (; Mn < Ri; Mn++)
  Qp[Rc[Mn]] = Mn;
let Cc = !1;
try {
  Cc = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const zp = Cc;
function Fc(n) {
  const e = n.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || zp))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new Te[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function Wp() {
}
const Yp = function() {
  return new Fc({
    xdomain: !1
  }).responseType != null;
}();
class $p extends hs {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), this.polling = !1, typeof location < "u") {
      const r = location.protocol === "https:";
      let i = location.port;
      i || (i = r ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || i !== e.port;
    }
    const t = e && e.forceBase64;
    this.supportsBinary = Yp && !t, this.opts.withCredentials && (this.cookieJar = void 0);
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(e) {
    this.readyState = "pausing";
    const t = () => {
      this.readyState = "paused", e();
    };
    if (this.polling || !this.writable) {
      let r = 0;
      this.polling && (r++, this.once("pollComplete", function() {
        --r || t();
      })), this.writable || (r++, this.once("drain", function() {
        --r || t();
      }));
    } else
      t();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  poll() {
    this.polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(e) {
    const t = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    Rp(e, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(e) {
    this.writable = !1, Dp(e, (t) => {
      this.doWrite(t, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "https" : "http", t = this.query || {};
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = Ac()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(e, t);
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(e = {}) {
    return Object.assign(e, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new Ne(this.uri(), e);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, t) {
    const r = this.request({
      method: "POST",
      data: e
    });
    r.on("success", t), r.on("error", (i, s) => {
      this.onError("xhr post error", i, s);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (t, r) => {
      this.onError("xhr poll error", t, r);
    }), this.pollXhr = e;
  }
}
class Ne extends ae {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, t) {
    super(), vr(this, t), this.opts = t, this.method = t.method || "GET", this.uri = e, this.data = t.data !== void 0 ? t.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var e;
    const t = Dc(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    t.xdomain = !!this.opts.xd;
    const r = this.xhr = new Fc(t);
    try {
      r.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let i in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(i) && r.setRequestHeader(i, this.opts.extraHeaders[i]);
        }
      } catch {
      }
      if (this.method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this.opts.cookieJar) === null || e === void 0 || e.addCookies(r), "withCredentials" in r && (r.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout), r.onreadystatechange = () => {
        var i;
        r.readyState === 3 && ((i = this.opts.cookieJar) === null || i === void 0 || i.parseCookies(r)), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this.data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this.onError(i);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = Ne.requestsCount++, Ne.requests[this.index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  onError(e) {
    this.emitReserved("error", e, this.xhr), this.cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(e) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (this.xhr.onreadystatechange = Wp, e)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Ne.requests[this.index], this.xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  onLoad() {
    const e = this.xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this.cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this.cleanup();
  }
}
Ne.requestsCount = 0;
Ne.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Go);
  else if (typeof addEventListener == "function") {
    const n = "onpagehide" in Te ? "pagehide" : "unload";
    addEventListener(n, Go, !1);
  }
}
function Go() {
  for (let n in Ne.requests)
    Ne.requests.hasOwnProperty(n) && Ne.requests[n].abort();
}
const fs = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, e) => e(n, 0), Vn = Te.WebSocket || Te.MozWebSocket, Jo = !0, Gp = "arraybuffer", Ko = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Jp extends hs {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(e) {
    super(e), this.supportsBinary = !e.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check())
      return;
    const e = this.uri(), t = this.opts.protocols, r = Ko ? {} : Dc(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = Jo && !Ko ? t ? new Vn(e, t) : new Vn(e) : new Vn(e, t, r);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let t = 0; t < e.length; t++) {
      const r = e[t], i = t === e.length - 1;
      us(r, this.supportsBinary, (s) => {
        try {
          Jo && this.ws.send(s);
        } catch {
        }
        i && fs(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "wss" : "ws", t = this.query || {};
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = Ac()), this.supportsBinary || (t.b64 = 1), this.createUri(e, t);
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!Vn;
  }
}
class Kp extends hs {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then(() => {
      this.onClose();
    }).catch((e) => {
      this.onError("webtransport error", e);
    }), this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then((e) => {
        const t = Cp(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = e.readable.pipeThrough(t).getReader(), i = Ap();
        i.readable.pipeTo(e.writable), this.writer = i.writable.getWriter();
        const s = () => {
          r.read().then(({ done: a, value: c }) => {
            a || (this.onPacket(c), s());
          }).catch((a) => {
          });
        };
        s();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this.writer.write(o).then(() => this.onOpen());
      });
    }));
  }
  write(e) {
    this.writable = !1;
    for (let t = 0; t < e.length; t++) {
      const r = e[t], i = t === e.length - 1;
      this.writer.write(r).then(() => {
        i && fs(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this.transport) === null || e === void 0 || e.close();
  }
}
const Hp = {
  websocket: Jp,
  webtransport: Kp,
  polling: $p
}, Xp = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Zp = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function Ai(n) {
  if (n.length > 2e3)
    throw "URI too long";
  const e = n, t = n.indexOf("["), r = n.indexOf("]");
  t != -1 && r != -1 && (n = n.substring(0, t) + n.substring(t, r).replace(/:/g, ";") + n.substring(r, n.length));
  let i = Xp.exec(n || ""), s = {}, o = 14;
  for (; o--; )
    s[Zp[o]] = i[o] || "";
  return t != -1 && r != -1 && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = ed(s, s.path), s.queryKey = td(s, s.query), s;
}
function ed(n, e) {
  const t = /\/{2,9}/g, r = e.replace(t, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && r.splice(0, 1), e.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function td(n, e) {
  const t = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, i, s) {
    i && (t[i] = s);
  }), t;
}
let Lc = class dt extends ae {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, t = {}) {
    super(), this.binaryType = Gp, this.writeBuffer = [], e && typeof e == "object" && (t = e, e = null), e ? (e = Ai(e), t.hostname = e.host, t.secure = e.protocol === "https" || e.protocol === "wss", t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = Ai(t.host).host), vr(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = t.transports || [
      "polling",
      "websocket",
      "webtransport"
    ], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Bp(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
      this.onClose("transport close", {
        description: "network connection lost"
      });
    }, addEventListener("offline", this.offlineEventListener, !1))), this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const t = Object.assign({}, this.opts.query);
    t.EIO = Ic, t.transport = e, this.id && (t.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: t,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new Hp[e](r);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let e;
    if (this.opts.rememberUpgrade && dt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
      e = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else
      e = this.transports[0];
    this.readyState = "opening";
    try {
      e = this.createTransport(e);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    e.open(), this.setTransport(e);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (t) => this.onClose("transport close", t));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(e) {
    let t = this.createTransport(e), r = !1;
    dt.priorWebsocketSuccess = !1;
    const i = () => {
      r || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (h) => {
        if (!r)
          if (h.type === "pong" && h.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            dt.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (l(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const f = new Error("probe error");
            f.transport = t.name, this.emitReserved("upgradeError", f);
          }
      }));
    };
    function s() {
      r || (r = !0, l(), t.close(), t = null);
    }
    const o = (h) => {
      const f = new Error("probe error: " + h);
      f.transport = t.name, s(), this.emitReserved("upgradeError", f);
    };
    function a() {
      o("transport closed");
    }
    function c() {
      o("socket closed");
    }
    function u(h) {
      t && h.name !== t.name && s();
    }
    const l = () => {
      t.removeListener("open", i), t.removeListener("error", o), t.removeListener("close", a), this.off("close", c), this.off("upgrading", u);
    };
    t.once("open", i), t.once("error", o), t.once("close", a), this.once("close", c), this.once("upgrading", u), this.upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      r || t.open();
    }, 200) : t.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", dt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let e = 0;
      const t = this.upgrades.length;
      for (; e < t; e++)
        this.probe(this.upgrades[e]);
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), this.resetPingTimeout(), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const t = new Error("server error");
          t.code = e.data, this.onError(t);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e = this.getWritablePackets();
      this.transport.send(e), this.prevBufferLen = e.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  getWritablePackets() {
    if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let e = 1;
    for (let t = 0; t < this.writeBuffer.length; t++) {
      const r = this.writeBuffer[t].data;
      if (r && (e += Mp(r)), t > 0 && e > this.maxPayload)
        return this.writeBuffer.slice(0, t);
      e += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} callback function.
   * @return {Socket} for chaining.
   */
  write(e, t, r) {
    return this.sendPacket("message", e, t, r), this;
  }
  send(e, t, r) {
    return this.sendPacket("message", e, t, r), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  sendPacket(e, t, r, i) {
    if (typeof t == "function" && (i = t, t = void 0), typeof r == "function" && (i = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const s = {
      type: e,
      data: t,
      options: r
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), i && this.once("flush", i), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this.onClose("forced close"), this.transport.close();
    }, t = () => {
      this.off("upgrade", t), this.off("upgradeError", t), e();
    }, r = () => {
      this.once("upgrade", t), this.once("upgradeError", t);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : e();
    }) : this.upgrading ? r() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(e) {
    dt.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(e, t) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(e) {
    const t = [];
    let r = 0;
    const i = e.length;
    for (; r < i; r++)
      ~this.transports.indexOf(e[r]) && t.push(e[r]);
    return t;
  }
};
Lc.protocol = Ic;
function nd(n, e = "", t) {
  let r = n;
  t = t || typeof location < "u" && location, n == null && (n = t.protocol + "//" + t.host), typeof n == "string" && (n.charAt(0) === "/" && (n.charAt(1) === "/" ? n = t.protocol + n : n = t.host + n), /^(https?|wss?):\/\//.test(n) || (typeof t < "u" ? n = t.protocol + "//" + n : n = "https://" + n), r = Ai(n)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + e, r.href = r.protocol + "://" + i + (t && t.port === r.port ? "" : ":" + r.port), r;
}
const rd = typeof ArrayBuffer == "function", id = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n.buffer instanceof ArrayBuffer, Pc = Object.prototype.toString, sd = typeof Blob == "function" || typeof Blob < "u" && Pc.call(Blob) === "[object BlobConstructor]", od = typeof File == "function" || typeof File < "u" && Pc.call(File) === "[object FileConstructor]";
function ps(n) {
  return rd && (n instanceof ArrayBuffer || id(n)) || sd && n instanceof Blob || od && n instanceof File;
}
function Kn(n, e) {
  if (!n || typeof n != "object")
    return !1;
  if (Array.isArray(n)) {
    for (let t = 0, r = n.length; t < r; t++)
      if (Kn(n[t]))
        return !0;
    return !1;
  }
  if (ps(n))
    return !0;
  if (n.toJSON && typeof n.toJSON == "function" && arguments.length === 1)
    return Kn(n.toJSON(), !0);
  for (const t in n)
    if (Object.prototype.hasOwnProperty.call(n, t) && Kn(n[t]))
      return !0;
  return !1;
}
function ad(n) {
  const e = [], t = n.data, r = n;
  return r.data = Ci(t, e), r.attachments = e.length, { packet: r, buffers: e };
}
function Ci(n, e) {
  if (!n)
    return n;
  if (ps(n)) {
    const t = { _placeholder: !0, num: e.length };
    return e.push(n), t;
  } else if (Array.isArray(n)) {
    const t = new Array(n.length);
    for (let r = 0; r < n.length; r++)
      t[r] = Ci(n[r], e);
    return t;
  } else if (typeof n == "object" && !(n instanceof Date)) {
    const t = {};
    for (const r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = Ci(n[r], e));
    return t;
  }
  return n;
}
function cd(n, e) {
  return n.data = Fi(n.data, e), delete n.attachments, n;
}
function Fi(n, e) {
  if (!n)
    return n;
  if (n && n._placeholder === !0) {
    if (typeof n.num == "number" && n.num >= 0 && n.num < e.length)
      return e[n.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(n))
    for (let t = 0; t < n.length; t++)
      n[t] = Fi(n[t], e);
  else if (typeof n == "object")
    for (const t in n)
      Object.prototype.hasOwnProperty.call(n, t) && (n[t] = Fi(n[t], e));
  return n;
}
const ud = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], ld = 5;
var q;
(function(n) {
  n[n.CONNECT = 0] = "CONNECT", n[n.DISCONNECT = 1] = "DISCONNECT", n[n.EVENT = 2] = "EVENT", n[n.ACK = 3] = "ACK", n[n.CONNECT_ERROR = 4] = "CONNECT_ERROR", n[n.BINARY_EVENT = 5] = "BINARY_EVENT", n[n.BINARY_ACK = 6] = "BINARY_ACK";
})(q || (q = {}));
class hd {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(e) {
    this.replacer = e;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(e) {
    return (e.type === q.EVENT || e.type === q.ACK) && Kn(e) ? this.encodeAsBinary({
      type: e.type === q.EVENT ? q.BINARY_EVENT : q.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let t = "" + e.type;
    return (e.type === q.BINARY_EVENT || e.type === q.BINARY_ACK) && (t += e.attachments + "-"), e.nsp && e.nsp !== "/" && (t += e.nsp + ","), e.id != null && (t += e.id), e.data != null && (t += JSON.stringify(e.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const t = ad(e), r = this.encodeAsString(t.packet), i = t.buffers;
    return i.unshift(r), i;
  }
}
function Ho(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
class ds extends ae {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(e) {
    super(), this.reviver = e;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(e) {
    let t;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      t = this.decodeString(e);
      const r = t.type === q.BINARY_EVENT;
      r || t.type === q.BINARY_ACK ? (t.type = r ? q.EVENT : q.ACK, this.reconstructor = new fd(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (ps(e) || e.base64)
      if (this.reconstructor)
        t = this.reconstructor.takeBinaryData(e), t && (this.reconstructor = null, super.emitReserved("decoded", t));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + e);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(e) {
    let t = 0;
    const r = {
      type: Number(e.charAt(0))
    };
    if (q[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === q.BINARY_EVENT || r.type === q.BINARY_ACK) {
      const s = t + 1;
      for (; e.charAt(++t) !== "-" && t != e.length; )
        ;
      const o = e.substring(s, t);
      if (o != Number(o) || e.charAt(t) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(o);
    }
    if (e.charAt(t + 1) === "/") {
      const s = t + 1;
      for (; ++t && !(e.charAt(t) === "," || t === e.length); )
        ;
      r.nsp = e.substring(s, t);
    } else
      r.nsp = "/";
    const i = e.charAt(t + 1);
    if (i !== "" && Number(i) == i) {
      const s = t + 1;
      for (; ++t; ) {
        const o = e.charAt(t);
        if (o == null || Number(o) != o) {
          --t;
          break;
        }
        if (t === e.length)
          break;
      }
      r.id = Number(e.substring(s, t + 1));
    }
    if (e.charAt(++t)) {
      const s = this.tryParse(e.substr(t));
      if (ds.isPayloadValid(r.type, s))
        r.data = s;
      else
        throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, t) {
    switch (e) {
      case q.CONNECT:
        return Ho(t);
      case q.DISCONNECT:
        return t === void 0;
      case q.CONNECT_ERROR:
        return typeof t == "string" || Ho(t);
      case q.EVENT:
      case q.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && ud.indexOf(t[0]) === -1);
      case q.ACK:
      case q.BINARY_ACK:
        return Array.isArray(t);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class fd {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const t = cd(this.reconPack, this.buffers);
      return this.finishedReconstruction(), t;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: ds,
  Encoder: hd,
  get PacketType() {
    return q;
  },
  protocol: ld
}, Symbol.toStringTag, { value: "Module" }));
function _e(n, e, t) {
  return n.on(e, t), function() {
    n.off(e, t);
  };
}
const dd = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class jc extends ae {
  /**
   * `Socket` constructor.
   */
  constructor(e, t, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const e = this.io;
    this.subs = [
      _e(e, "open", this.onopen.bind(this)),
      _e(e, "packet", this.onpacket.bind(this)),
      _e(e, "error", this.onerror.bind(this)),
      _e(e, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(e, ...t) {
    if (dd.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (t.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const r = {
      type: q.EVENT,
      data: t
    };
    if (r.options = {}, r.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const s = this.ids++, o = t.pop();
      this._registerAckCallback(s, o), r.id = s;
    }
    const i = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!i || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(r), this.packet(r)) : this.sendBuffer.push(r)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, t) {
    var r;
    const i = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[e] = t;
      return;
    }
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === e && this.sendBuffer.splice(a, 1);
      t.call(this, new Error("operation has timed out"));
    }, i), o = (...a) => {
      this.io.clearTimeoutFn(s), t.apply(this, a);
    };
    o.withError = !0, this.acks[e] = o;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(e, ...t) {
    return new Promise((r, i) => {
      const s = (o, a) => o ? i(o) : r(a);
      s.withError = !0, t.push(s), this.emit(e, ...t);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let t;
    typeof e[e.length - 1] == "function" && (t = e.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((i, ...s) => r !== this._queue[0] ? void 0 : (i !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), t && t(i)) : (this._queue.shift(), t && t(null, ...s)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const t = this._queue[0];
    t.pending && !e || (t.pending = !0, t.tryCount++, this.flags = t.flags, this.emit.apply(this, t.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((e) => {
      this._sendConnectPacket(e);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(e) {
    this.packet({
      type: q.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(e, t) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, t), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((e) => {
      if (!this.sendBuffer.some((t) => String(t.id) === e)) {
        const t = this.acks[e];
        delete this.acks[e], t.withError && t.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case q.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case q.EVENT:
        case q.BINARY_EVENT:
          this.onevent(e);
          break;
        case q.ACK:
        case q.BINARY_ACK:
          this.onack(e);
          break;
        case q.DISCONNECT:
          this.ondisconnect();
          break;
        case q.CONNECT_ERROR:
          this.destroy();
          const t = new Error(e.data.message);
          t.data = e.data.data, this.emitReserved("connect_error", t);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(e) {
    const t = e.data || [];
    e.id != null && t.push(this.ack(e.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const t = this._anyListeners.slice();
      for (const r of t)
        r.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const t = this;
    let r = !1;
    return function(...i) {
      r || (r = !0, t.packet({
        type: q.ACK,
        id: e,
        data: i
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(e) {
    const t = this.acks[e.id];
    typeof t == "function" && (delete this.acks[e.id], t.withError && e.data.unshift(null), t.apply(this, e.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, t) {
    this.id = e, this.recovered = t && this._pid === t, this._pid = t, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
      this.notifyOutgoingListeners(e), this.packet(e);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: q.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(e) {
    return this.flags.compress = e, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(e) {
    return this.flags.timeout = e, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(e) {
    if (!this._anyListeners)
      return this;
    if (e) {
      const t = this._anyListeners;
      for (let r = 0; r < t.length; r++)
        if (e === t[r])
          return t.splice(r, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners)
      return this;
    if (e) {
      const t = this._anyOutgoingListeners;
      for (let r = 0; r < t.length; r++)
        if (e === t[r])
          return t.splice(r, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const t = this._anyOutgoingListeners.slice();
      for (const r of t)
        r.apply(this, e.data);
    }
  }
}
function Mt(n) {
  n = n || {}, this.ms = n.min || 100, this.max = n.max || 1e4, this.factor = n.factor || 2, this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0, this.attempts = 0;
}
Mt.prototype.duration = function() {
  var n = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), t = Math.floor(e * this.jitter * n);
    n = Math.floor(e * 10) & 1 ? n + t : n - t;
  }
  return Math.min(n, this.max) | 0;
};
Mt.prototype.reset = function() {
  this.attempts = 0;
};
Mt.prototype.setMin = function(n) {
  this.ms = n;
};
Mt.prototype.setMax = function(n) {
  this.max = n;
};
Mt.prototype.setJitter = function(n) {
  this.jitter = n;
};
class Li extends ae {
  constructor(e, t) {
    var r;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, vr(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((r = t.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Mt({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
    const i = t.parser || pd;
    this.encoder = new i.Encoder(), this.decoder = new i.Decoder(), this._autoConnect = t.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var t;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (t = this.backoff) === null || t === void 0 || t.setMin(e), this);
  }
  randomizationFactor(e) {
    var t;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (t = this.backoff) === null || t === void 0 || t.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var t;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (t = this.backoff) === null || t === void 0 || t.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(e) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Lc(this.uri, this.opts);
    const t = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = _e(t, "open", function() {
      r.onopen(), e && e();
    }), s = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, o = _e(t, "error", s);
    if (this._timeout !== !1) {
      const a = this._timeout, c = this.setTimeoutFn(() => {
        i(), s(new Error("timeout")), t.close();
      }, a);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
    return this.subs.push(i), this.subs.push(o), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(e) {
    return this.open(e);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(_e(e, "ping", this.onping.bind(this)), _e(e, "data", this.ondata.bind(this)), _e(e, "error", this.onerror.bind(this)), _e(e, "close", this.onclose.bind(this)), _e(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (t) {
      this.onclose("parse error", t);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    fs(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(e) {
    this.emitReserved("error", e);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(e, t) {
    let r = this.nsps[e];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new jc(this, e, t), this.nsps[e] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const t = Object.keys(this.nsps);
    for (const r of t)
      if (this.nsps[r].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(e) {
    const t = this.encoder.encode(e);
    for (let r = 0; r < t.length; r++)
      this.engine.write(t[r], e.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close();
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called upon engine close.
   *
   * @private
   */
  onclose(e, t) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, t), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const t = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((i) => {
          i ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", i)) : e.onreconnect();
        }));
      }, t);
      this.opts.autoUnref && r.unref(), this.subs.push(() => {
        this.clearTimeoutFn(r);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const Xt = {};
function un(n, e) {
  typeof n == "object" && (e = n, n = void 0), e = e || {};
  const t = nd(n, e.path || "/socket.io"), r = t.source, i = t.id, s = t.path, o = Xt[i] && s in Xt[i].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let c;
  return a ? c = new Li(r, e) : (Xt[i] || (Xt[i] = new Li(r, e)), c = Xt[i]), t.query && !e.query && (e.query = t.queryKey), c.socket(t.path, e);
}
Object.assign(un, {
  Manager: Li,
  Socket: jc,
  io: un,
  connect: un
});
const yd = {
  "Content-Type": "application/json"
};
class ys {
  constructor(e) {
    Rn(this, "headers"), Rn(this, "apolloClient"), Rn(this, "socketClient"), Rn(this, "options"), this.options = e || {}, this.headers = e.headers || yd, this.initSocketIo(e), this.initApollo(e.apolloConfig);
  }
  initSocketIo(e) {
    !e || !e.socketPath || (this.socketClient = un({
      path: e.socketPath
    }));
  }
  initApollo(e) {
    e && (this.apolloClient = kp(e));
  }
  async get(e) {
    return Bo(e, { headers: this.headers });
  }
  async post(e, t = {}) {
    return Bo(e, {
      method: "POST",
      headers: {
        ...this.headers,
        ...t.headers
      },
      body: t.body
    });
  }
  async gql(e, t = {}) {
    if (this.apolloClient || (console.log("url: ", e), this.initApollo({
      uri: e,
      cache: new cs()
    })), !this.apolloClient)
      throw console.log("url: ", e), Error("No apollo client found");
    const { data: r } = await this.apolloClient.query({
      query: ot`${t.query}`
    });
    return r;
  }
  socket(e, t) {
    let r = this.socketClient;
    (this.options.socketPath !== e || !r) && (r = un({
      path: t.socketPath
    })), t.type === "on" ? r.on(t.event, (i) => {
      console.log(t.event, i), t.callback && t.callback(i);
    }) : r.emit(t.event, t.value, (i) => {
      console.log(i), t.callback && t.callback(i);
    });
  }
}
const Mc = new ys({}), vd = async (n) => {
  const e = await Mc.get(n);
  return console.log("fetchDataGet: ", e, n), console.log("fetchDataGet data: ", e.data), e;
}, md = async (n, e) => {
  const t = await Mc.post(n, e);
  return console.log("fetchDataPost: ", t), console.log("fetchDataPost data: ", t.data), t;
}, gd = (n, e = {}) => ua({
  queryKey: [n],
  queryFn: () => e.method === "post" ? md(n, e) : vd(n)
}), bd = (n, e) => {
  const [t, r] = _u(null);
  return wu(() => {
    const i = new ys({
      socketPath: n
      // '/socket-io/'
    }).socketClient;
    if (i)
      return i.on(e, (s) => {
        r(s);
      }), () => {
        i.disconnect();
      };
  }, [n, e]), t;
};
var rr = function() {
  return rr = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, rr.apply(this, arguments);
};
function Yr(n, e) {
  if (!!!n)
    throw new Error(e);
}
function Ed(n) {
  return typeof n == "object" && n !== null;
}
function Td(n, e) {
  if (!!!n)
    throw new Error(
      "Unexpected invariant triggered."
    );
}
const Od = /\r\n|[\n\r]/g;
function Pi(n, e) {
  let t = 0, r = 1;
  for (const i of n.body.matchAll(Od)) {
    if (typeof i.index == "number" || Td(!1), i.index >= e)
      break;
    t = i.index + i[0].length, r += 1;
  }
  return {
    line: r,
    column: e + 1 - t
  };
}
function _d(n) {
  return Vc(
    n.source,
    Pi(n.source, n.start)
  );
}
function Vc(n, e) {
  const t = n.locationOffset.column - 1, r = "".padStart(t) + n.body, i = e.line - 1, s = n.locationOffset.line - 1, o = e.line + s, a = e.line === 1 ? t : 0, c = e.column + a, u = `${n.name}:${o}:${c}
`, l = r.split(/\r\n|[\n\r]/g), h = l[i];
  if (h.length > 120) {
    const f = Math.floor(c / 80), d = c % 80, y = [];
    for (let g = 0; g < h.length; g += 80)
      y.push(h.slice(g, g + 80));
    return u + Xo([
      [`${o} |`, y[0]],
      ...y.slice(1, f + 1).map((g) => ["|", g]),
      ["|", "^".padStart(d)],
      ["|", y[f + 1]]
    ]);
  }
  return u + Xo([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, l[i - 1]],
    [`${o} |`, h],
    ["|", "^".padStart(c)],
    [`${o + 1} |`, l[i + 1]]
  ]);
}
function Xo(n) {
  const e = n.filter(([r, i]) => i !== void 0), t = Math.max(...e.map(([r]) => r.length));
  return e.map(([r, i]) => r.padStart(t) + (i ? " " + i : "")).join(`
`);
}
function wd(n) {
  const e = n[0];
  return e == null || "kind" in e || "length" in e ? {
    nodes: e,
    source: n[1],
    positions: n[2],
    path: n[3],
    originalError: n[4],
    extensions: n[5]
  } : e;
}
class vs extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(e, ...t) {
    var r, i, s;
    const { nodes: o, source: a, positions: c, path: u, originalError: l, extensions: h } = wd(t);
    super(e), this.name = "GraphQLError", this.path = u ?? void 0, this.originalError = l ?? void 0, this.nodes = Zo(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const f = Zo(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map((y) => y.loc).filter((y) => y != null)
    );
    this.source = a ?? (f == null || (i = f[0]) === null || i === void 0 ? void 0 : i.source), this.positions = c ?? (f == null ? void 0 : f.map((y) => y.start)), this.locations = c && a ? c.map((y) => Pi(a, y)) : f == null ? void 0 : f.map((y) => Pi(y.source, y.start));
    const d = Ed(
      l == null ? void 0 : l.extensions
    ) ? l == null ? void 0 : l.extensions : void 0;
    this.extensions = (s = h ?? d) !== null && s !== void 0 ? s : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
      message: {
        writable: !0,
        enumerable: !0
      },
      name: {
        enumerable: !1
      },
      nodes: {
        enumerable: !1
      },
      source: {
        enumerable: !1
      },
      positions: {
        enumerable: !1
      },
      originalError: {
        enumerable: !1
      }
    }), l != null && l.stack ? Object.defineProperty(this, "stack", {
      value: l.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, vs) : Object.defineProperty(this, "stack", {
      value: Error().stack,
      writable: !0,
      configurable: !0
    });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let e = this.message;
    if (this.nodes)
      for (const t of this.nodes)
        t.loc && (e += `

` + _d(t.loc));
    else if (this.source && this.locations)
      for (const t of this.locations)
        e += `

` + Vc(this.source, t);
    return e;
  }
  toJSON() {
    const e = {
      message: this.message
    };
    return this.locations != null && (e.locations = this.locations), this.path != null && (e.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e;
  }
}
function Zo(n) {
  return n === void 0 || n.length === 0 ? void 0 : n;
}
function le(n, e, t) {
  return new vs(`Syntax Error: ${t}`, {
    source: n,
    positions: [e]
  });
}
class kd {
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The Token at which this Node begins.
   */
  /**
   * The Token at which this Node ends.
   */
  /**
   * The Source document the AST represents.
   */
  constructor(e, t, r) {
    this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = r;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class qc {
  /**
   * The kind of Token.
   */
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The 1-indexed line number on which this Token appears.
   */
  /**
   * The 1-indexed column number at which this Token begins.
   */
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(e, t, r, i, s, o) {
    this.kind = e, this.start = t, this.end = r, this.line = i, this.column = s, this.value = o, this.prev = null, this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const Sd = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
};
new Set(Object.keys(Sd));
var bt;
(function(n) {
  n.QUERY = "query", n.MUTATION = "mutation", n.SUBSCRIPTION = "subscription";
})(bt || (bt = {}));
var ji;
(function(n) {
  n.QUERY = "QUERY", n.MUTATION = "MUTATION", n.SUBSCRIPTION = "SUBSCRIPTION", n.FIELD = "FIELD", n.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", n.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", n.INLINE_FRAGMENT = "INLINE_FRAGMENT", n.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", n.SCHEMA = "SCHEMA", n.SCALAR = "SCALAR", n.OBJECT = "OBJECT", n.FIELD_DEFINITION = "FIELD_DEFINITION", n.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", n.INTERFACE = "INTERFACE", n.UNION = "UNION", n.ENUM = "ENUM", n.ENUM_VALUE = "ENUM_VALUE", n.INPUT_OBJECT = "INPUT_OBJECT", n.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(ji || (ji = {}));
var F;
(function(n) {
  n.NAME = "Name", n.DOCUMENT = "Document", n.OPERATION_DEFINITION = "OperationDefinition", n.VARIABLE_DEFINITION = "VariableDefinition", n.SELECTION_SET = "SelectionSet", n.FIELD = "Field", n.ARGUMENT = "Argument", n.FRAGMENT_SPREAD = "FragmentSpread", n.INLINE_FRAGMENT = "InlineFragment", n.FRAGMENT_DEFINITION = "FragmentDefinition", n.VARIABLE = "Variable", n.INT = "IntValue", n.FLOAT = "FloatValue", n.STRING = "StringValue", n.BOOLEAN = "BooleanValue", n.NULL = "NullValue", n.ENUM = "EnumValue", n.LIST = "ListValue", n.OBJECT = "ObjectValue", n.OBJECT_FIELD = "ObjectField", n.DIRECTIVE = "Directive", n.NAMED_TYPE = "NamedType", n.LIST_TYPE = "ListType", n.NON_NULL_TYPE = "NonNullType", n.SCHEMA_DEFINITION = "SchemaDefinition", n.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", n.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", n.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", n.FIELD_DEFINITION = "FieldDefinition", n.INPUT_VALUE_DEFINITION = "InputValueDefinition", n.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", n.UNION_TYPE_DEFINITION = "UnionTypeDefinition", n.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", n.ENUM_VALUE_DEFINITION = "EnumValueDefinition", n.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", n.DIRECTIVE_DEFINITION = "DirectiveDefinition", n.SCHEMA_EXTENSION = "SchemaExtension", n.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", n.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", n.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", n.UNION_TYPE_EXTENSION = "UnionTypeExtension", n.ENUM_TYPE_EXTENSION = "EnumTypeExtension", n.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(F || (F = {}));
function xd(n) {
  return n === 9 || n === 32;
}
function vn(n) {
  return n >= 48 && n <= 57;
}
function Bc(n) {
  return n >= 97 && n <= 122 || // A-Z
  n >= 65 && n <= 90;
}
function Uc(n) {
  return Bc(n) || n === 95;
}
function Nd(n) {
  return Bc(n) || vn(n) || n === 95;
}
function Id(n) {
  var e;
  let t = Number.MAX_SAFE_INTEGER, r = null, i = -1;
  for (let o = 0; o < n.length; ++o) {
    var s;
    const a = n[o], c = Dd(a);
    c !== a.length && (r = (s = r) !== null && s !== void 0 ? s : o, i = o, o !== 0 && c < t && (t = c));
  }
  return n.map((o, a) => a === 0 ? o : o.slice(t)).slice(
    (e = r) !== null && e !== void 0 ? e : 0,
    i + 1
  );
}
function Dd(n) {
  let e = 0;
  for (; e < n.length && xd(n.charCodeAt(e)); )
    ++e;
  return e;
}
var O;
(function(n) {
  n.SOF = "<SOF>", n.EOF = "<EOF>", n.BANG = "!", n.DOLLAR = "$", n.AMP = "&", n.PAREN_L = "(", n.PAREN_R = ")", n.SPREAD = "...", n.COLON = ":", n.EQUALS = "=", n.AT = "@", n.BRACKET_L = "[", n.BRACKET_R = "]", n.BRACE_L = "{", n.PIPE = "|", n.BRACE_R = "}", n.NAME = "Name", n.INT = "Int", n.FLOAT = "Float", n.STRING = "String", n.BLOCK_STRING = "BlockString", n.COMMENT = "Comment";
})(O || (O = {}));
class Rd {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(e) {
    const t = new qc(O.SOF, 0, 0, 0, 0);
    this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    return this.lastToken = this.token, this.token = this.lookahead();
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let e = this.token;
    if (e.kind !== O.EOF)
      do
        if (e.next)
          e = e.next;
        else {
          const t = Cd(this, e.end);
          e.next = t, t.prev = e, e = t;
        }
      while (e.kind === O.COMMENT);
    return e;
  }
}
function Ad(n) {
  return n === O.BANG || n === O.DOLLAR || n === O.AMP || n === O.PAREN_L || n === O.PAREN_R || n === O.SPREAD || n === O.COLON || n === O.EQUALS || n === O.AT || n === O.BRACKET_L || n === O.BRACKET_R || n === O.BRACE_L || n === O.PIPE || n === O.BRACE_R;
}
function Vt(n) {
  return n >= 0 && n <= 55295 || n >= 57344 && n <= 1114111;
}
function mr(n, e) {
  return Qc(n.charCodeAt(e)) && zc(n.charCodeAt(e + 1));
}
function Qc(n) {
  return n >= 55296 && n <= 56319;
}
function zc(n) {
  return n >= 56320 && n <= 57343;
}
function at(n, e) {
  const t = n.source.body.codePointAt(e);
  if (t === void 0)
    return O.EOF;
  if (t >= 32 && t <= 126) {
    const r = String.fromCodePoint(t);
    return r === '"' ? `'"'` : `"${r}"`;
  }
  return "U+" + t.toString(16).toUpperCase().padStart(4, "0");
}
function oe(n, e, t, r, i) {
  const s = n.line, o = 1 + t - n.lineStart;
  return new qc(e, t, r, s, o, i);
}
function Cd(n, e) {
  const t = n.source.body, r = t.length;
  let i = e;
  for (; i < r; ) {
    const s = t.charCodeAt(i);
    switch (s) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++i;
        continue;
      case 10:
        ++i, ++n.line, n.lineStart = i;
        continue;
      case 13:
        t.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++n.line, n.lineStart = i;
        continue;
      case 35:
        return Fd(n, i);
      case 33:
        return oe(n, O.BANG, i, i + 1);
      case 36:
        return oe(n, O.DOLLAR, i, i + 1);
      case 38:
        return oe(n, O.AMP, i, i + 1);
      case 40:
        return oe(n, O.PAREN_L, i, i + 1);
      case 41:
        return oe(n, O.PAREN_R, i, i + 1);
      case 46:
        if (t.charCodeAt(i + 1) === 46 && t.charCodeAt(i + 2) === 46)
          return oe(n, O.SPREAD, i, i + 3);
        break;
      case 58:
        return oe(n, O.COLON, i, i + 1);
      case 61:
        return oe(n, O.EQUALS, i, i + 1);
      case 64:
        return oe(n, O.AT, i, i + 1);
      case 91:
        return oe(n, O.BRACKET_L, i, i + 1);
      case 93:
        return oe(n, O.BRACKET_R, i, i + 1);
      case 123:
        return oe(n, O.BRACE_L, i, i + 1);
      case 124:
        return oe(n, O.PIPE, i, i + 1);
      case 125:
        return oe(n, O.BRACE_R, i, i + 1);
      case 34:
        return t.charCodeAt(i + 1) === 34 && t.charCodeAt(i + 2) === 34 ? qd(n, i) : Pd(n, i);
    }
    if (vn(s) || s === 45)
      return Ld(n, i, s);
    if (Uc(s))
      return Bd(n, i);
    throw le(
      n.source,
      i,
      s === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Vt(s) || mr(t, i) ? `Unexpected character: ${at(n, i)}.` : `Invalid character: ${at(n, i)}.`
    );
  }
  return oe(n, O.EOF, r, r);
}
function Fd(n, e) {
  const t = n.source.body, r = t.length;
  let i = e + 1;
  for (; i < r; ) {
    const s = t.charCodeAt(i);
    if (s === 10 || s === 13)
      break;
    if (Vt(s))
      ++i;
    else if (mr(t, i))
      i += 2;
    else
      break;
  }
  return oe(
    n,
    O.COMMENT,
    e,
    i,
    t.slice(e + 1, i)
  );
}
function Ld(n, e, t) {
  const r = n.source.body;
  let i = e, s = t, o = !1;
  if (s === 45 && (s = r.charCodeAt(++i)), s === 48) {
    if (s = r.charCodeAt(++i), vn(s))
      throw le(
        n.source,
        i,
        `Invalid number, unexpected digit after 0: ${at(
          n,
          i
        )}.`
      );
  } else
    i = $r(n, i, s), s = r.charCodeAt(i);
  if (s === 46 && (o = !0, s = r.charCodeAt(++i), i = $r(n, i, s), s = r.charCodeAt(i)), (s === 69 || s === 101) && (o = !0, s = r.charCodeAt(++i), (s === 43 || s === 45) && (s = r.charCodeAt(++i)), i = $r(n, i, s), s = r.charCodeAt(i)), s === 46 || Uc(s))
    throw le(
      n.source,
      i,
      `Invalid number, expected digit but got: ${at(
        n,
        i
      )}.`
    );
  return oe(
    n,
    o ? O.FLOAT : O.INT,
    e,
    i,
    r.slice(e, i)
  );
}
function $r(n, e, t) {
  if (!vn(t))
    throw le(
      n.source,
      e,
      `Invalid number, expected digit but got: ${at(
        n,
        e
      )}.`
    );
  const r = n.source.body;
  let i = e + 1;
  for (; vn(r.charCodeAt(i)); )
    ++i;
  return i;
}
function Pd(n, e) {
  const t = n.source.body, r = t.length;
  let i = e + 1, s = i, o = "";
  for (; i < r; ) {
    const a = t.charCodeAt(i);
    if (a === 34)
      return o += t.slice(s, i), oe(n, O.STRING, e, i + 1, o);
    if (a === 92) {
      o += t.slice(s, i);
      const c = t.charCodeAt(i + 1) === 117 ? t.charCodeAt(i + 2) === 123 ? jd(n, i) : Md(n, i) : Vd(n, i);
      o += c.value, i += c.size, s = i;
      continue;
    }
    if (a === 10 || a === 13)
      break;
    if (Vt(a))
      ++i;
    else if (mr(t, i))
      i += 2;
    else
      throw le(
        n.source,
        i,
        `Invalid character within String: ${at(
          n,
          i
        )}.`
      );
  }
  throw le(n.source, i, "Unterminated string.");
}
function jd(n, e) {
  const t = n.source.body;
  let r = 0, i = 3;
  for (; i < 12; ) {
    const s = t.charCodeAt(e + i++);
    if (s === 125) {
      if (i < 5 || !Vt(r))
        break;
      return {
        value: String.fromCodePoint(r),
        size: i
      };
    }
    if (r = r << 4 | rn(s), r < 0)
      break;
  }
  throw le(
    n.source,
    e,
    `Invalid Unicode escape sequence: "${t.slice(
      e,
      e + i
    )}".`
  );
}
function Md(n, e) {
  const t = n.source.body, r = ea(t, e + 2);
  if (Vt(r))
    return {
      value: String.fromCodePoint(r),
      size: 6
    };
  if (Qc(r) && t.charCodeAt(e + 6) === 92 && t.charCodeAt(e + 7) === 117) {
    const i = ea(t, e + 8);
    if (zc(i))
      return {
        value: String.fromCodePoint(r, i),
        size: 12
      };
  }
  throw le(
    n.source,
    e,
    `Invalid Unicode escape sequence: "${t.slice(e, e + 6)}".`
  );
}
function ea(n, e) {
  return rn(n.charCodeAt(e)) << 12 | rn(n.charCodeAt(e + 1)) << 8 | rn(n.charCodeAt(e + 2)) << 4 | rn(n.charCodeAt(e + 3));
}
function rn(n) {
  return n >= 48 && n <= 57 ? n - 48 : n >= 65 && n <= 70 ? n - 55 : n >= 97 && n <= 102 ? n - 87 : -1;
}
function Vd(n, e) {
  const t = n.source.body;
  switch (t.charCodeAt(e + 1)) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: `
`,
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw le(
    n.source,
    e,
    `Invalid character escape sequence: "${t.slice(
      e,
      e + 2
    )}".`
  );
}
function qd(n, e) {
  const t = n.source.body, r = t.length;
  let i = n.lineStart, s = e + 3, o = s, a = "";
  const c = [];
  for (; s < r; ) {
    const u = t.charCodeAt(s);
    if (u === 34 && t.charCodeAt(s + 1) === 34 && t.charCodeAt(s + 2) === 34) {
      a += t.slice(o, s), c.push(a);
      const l = oe(
        n,
        O.BLOCK_STRING,
        e,
        s + 3,
        // Return a string of the lines joined with U+000A.
        Id(c).join(`
`)
      );
      return n.line += c.length - 1, n.lineStart = i, l;
    }
    if (u === 92 && t.charCodeAt(s + 1) === 34 && t.charCodeAt(s + 2) === 34 && t.charCodeAt(s + 3) === 34) {
      a += t.slice(o, s), o = s + 1, s += 4;
      continue;
    }
    if (u === 10 || u === 13) {
      a += t.slice(o, s), c.push(a), u === 13 && t.charCodeAt(s + 1) === 10 ? s += 2 : ++s, a = "", o = s, i = s;
      continue;
    }
    if (Vt(u))
      ++s;
    else if (mr(t, s))
      s += 2;
    else
      throw le(
        n.source,
        s,
        `Invalid character within String: ${at(
          n,
          s
        )}.`
      );
  }
  throw le(n.source, s, "Unterminated string.");
}
function Bd(n, e) {
  const t = n.source.body, r = t.length;
  let i = e + 1;
  for (; i < r; ) {
    const s = t.charCodeAt(i);
    if (Nd(s))
      ++i;
    else
      break;
  }
  return oe(
    n,
    O.NAME,
    e,
    i,
    t.slice(e, i)
  );
}
const Ud = 10, Wc = 2;
function Yc(n) {
  return gr(n, []);
}
function gr(n, e) {
  switch (typeof n) {
    case "string":
      return JSON.stringify(n);
    case "function":
      return n.name ? `[function ${n.name}]` : "[function]";
    case "object":
      return Qd(n, e);
    default:
      return String(n);
  }
}
function Qd(n, e) {
  if (n === null)
    return "null";
  if (e.includes(n))
    return "[Circular]";
  const t = [...e, n];
  if (zd(n)) {
    const r = n.toJSON();
    if (r !== n)
      return typeof r == "string" ? r : gr(r, t);
  } else if (Array.isArray(n))
    return Yd(n, t);
  return Wd(n, t);
}
function zd(n) {
  return typeof n.toJSON == "function";
}
function Wd(n, e) {
  const t = Object.entries(n);
  return t.length === 0 ? "{}" : e.length > Wc ? "[" + $d(n) + "]" : "{ " + t.map(
    ([i, s]) => i + ": " + gr(s, e)
  ).join(", ") + " }";
}
function Yd(n, e) {
  if (n.length === 0)
    return "[]";
  if (e.length > Wc)
    return "[Array]";
  const t = Math.min(Ud, n.length), r = n.length - t, i = [];
  for (let s = 0; s < t; ++s)
    i.push(gr(n[s], e));
  return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function $d(n) {
  const e = Object.prototype.toString.call(n).replace(/^\[object /, "").replace(/]$/, "");
  if (e === "Object" && typeof n.constructor == "function") {
    const t = n.constructor.name;
    if (typeof t == "string" && t !== "")
      return t;
  }
  return e;
}
const Gd = globalThis.process && // eslint-disable-next-line no-undef
process.env.NODE_ENV === "production", Jd = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  Gd ? function(e, t) {
    return e instanceof t;
  } : function(e, t) {
    if (e instanceof t)
      return !0;
    if (typeof e == "object" && e !== null) {
      var r;
      const i = t.prototype[Symbol.toStringTag], s = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in e ? e[Symbol.toStringTag] : (r = e.constructor) === null || r === void 0 ? void 0 : r.name
      );
      if (i === s) {
        const o = Yc(e);
        throw new Error(`Cannot use ${i} "${o}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return !1;
  }
);
class $c {
  constructor(e, t = "GraphQL request", r = {
    line: 1,
    column: 1
  }) {
    typeof e == "string" || Yr(!1, `Body must be a string. Received: ${Yc(e)}.`), this.body = e, this.name = t, this.locationOffset = r, this.locationOffset.line > 0 || Yr(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || Yr(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function Kd(n) {
  return Jd(n, $c);
}
function Hd(n, e) {
  return new Xd(n, e).parseDocument();
}
class Xd {
  constructor(e, t = {}) {
    const r = Kd(e) ? e : new $c(e);
    this._lexer = new Rd(r), this._options = t, this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const e = this.expectToken(O.NAME);
    return this.node(e, {
      kind: F.NAME,
      value: e.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: F.DOCUMENT,
      definitions: this.many(
        O.SOF,
        this.parseDefinition,
        O.EOF
      )
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(O.BRACE_L))
      return this.parseOperationDefinition();
    const e = this.peekDescription(), t = e ? this._lexer.lookahead() : this._lexer.token;
    if (t.kind === O.NAME) {
      switch (t.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (e)
        throw le(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      switch (t.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(t);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const e = this._lexer.token;
    if (this.peek(O.BRACE_L))
      return this.node(e, {
        kind: F.OPERATION_DEFINITION,
        operation: bt.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const t = this.parseOperationType();
    let r;
    return this.peek(O.NAME) && (r = this.parseName()), this.node(e, {
      kind: F.OPERATION_DEFINITION,
      operation: t,
      name: r,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const e = this.expectToken(O.NAME);
    switch (e.value) {
      case "query":
        return bt.QUERY;
      case "mutation":
        return bt.MUTATION;
      case "subscription":
        return bt.SUBSCRIPTION;
    }
    throw this.unexpected(e);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      O.PAREN_L,
      this.parseVariableDefinition,
      O.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: F.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(O.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(O.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const e = this._lexer.token;
    return this.expectToken(O.DOLLAR), this.node(e, {
      kind: F.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: F.SELECTION_SET,
      selections: this.many(
        O.BRACE_L,
        this.parseSelection,
        O.BRACE_R
      )
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(O.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const e = this._lexer.token, t = this.parseName();
    let r, i;
    return this.expectOptionalToken(O.COLON) ? (r = t, i = this.parseName()) : i = t, this.node(e, {
      kind: F.FIELD,
      alias: r,
      name: i,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(O.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(e) {
    const t = e ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(O.PAREN_L, t, O.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(e = !1) {
    const t = this._lexer.token, r = this.parseName();
    return this.expectToken(O.COLON), this.node(t, {
      kind: F.ARGUMENT,
      name: r,
      value: this.parseValueLiteral(e)
    });
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const e = this._lexer.token;
    this.expectToken(O.SPREAD);
    const t = this.expectOptionalKeyword("on");
    return !t && this.peek(O.NAME) ? this.node(e, {
      kind: F.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(e, {
      kind: F.INLINE_FRAGMENT,
      typeCondition: t ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    const e = this._lexer.token;
    return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(e, {
      kind: F.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(e, {
      kind: F.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on")
      throw this.unexpected();
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(e) {
    const t = this._lexer.token;
    switch (t.kind) {
      case O.BRACKET_L:
        return this.parseList(e);
      case O.BRACE_L:
        return this.parseObject(e);
      case O.INT:
        return this.advanceLexer(), this.node(t, {
          kind: F.INT,
          value: t.value
        });
      case O.FLOAT:
        return this.advanceLexer(), this.node(t, {
          kind: F.FLOAT,
          value: t.value
        });
      case O.STRING:
      case O.BLOCK_STRING:
        return this.parseStringLiteral();
      case O.NAME:
        switch (this.advanceLexer(), t.value) {
          case "true":
            return this.node(t, {
              kind: F.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(t, {
              kind: F.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(t, {
              kind: F.NULL
            });
          default:
            return this.node(t, {
              kind: F.ENUM,
              value: t.value
            });
        }
      case O.DOLLAR:
        if (e)
          if (this.expectToken(O.DOLLAR), this._lexer.token.kind === O.NAME) {
            const r = this._lexer.token.value;
            throw le(
              this._lexer.source,
              t.start,
              `Unexpected variable "$${r}" in constant value.`
            );
          } else
            throw this.unexpected(t);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const e = this._lexer.token;
    return this.advanceLexer(), this.node(e, {
      kind: F.STRING,
      value: e.value,
      block: e.kind === O.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(e) {
    const t = () => this.parseValueLiteral(e);
    return this.node(this._lexer.token, {
      kind: F.LIST,
      values: this.any(O.BRACKET_L, t, O.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(e) {
    const t = () => this.parseObjectField(e);
    return this.node(this._lexer.token, {
      kind: F.OBJECT,
      fields: this.any(O.BRACE_L, t, O.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(e) {
    const t = this._lexer.token, r = this.parseName();
    return this.expectToken(O.COLON), this.node(t, {
      kind: F.OBJECT_FIELD,
      name: r,
      value: this.parseValueLiteral(e)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(e) {
    const t = [];
    for (; this.peek(O.AT); )
      t.push(this.parseDirective(e));
    return t;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(e) {
    const t = this._lexer.token;
    return this.expectToken(O.AT), this.node(t, {
      kind: F.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(e)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const e = this._lexer.token;
    let t;
    if (this.expectOptionalToken(O.BRACKET_L)) {
      const r = this.parseTypeReference();
      this.expectToken(O.BRACKET_R), t = this.node(e, {
        kind: F.LIST_TYPE,
        type: r
      });
    } else
      t = this.parseNamedType();
    return this.expectOptionalToken(O.BANG) ? this.node(e, {
      kind: F.NON_NULL_TYPE,
      type: t
    }) : t;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: F.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(O.STRING) || this.peek(O.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription())
      return this.parseStringLiteral();
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("schema");
    const r = this.parseConstDirectives(), i = this.many(
      O.BRACE_L,
      this.parseOperationTypeDefinition,
      O.BRACE_R
    );
    return this.node(e, {
      kind: F.SCHEMA_DEFINITION,
      description: t,
      directives: r,
      operationTypes: i
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const e = this._lexer.token, t = this.parseOperationType();
    this.expectToken(O.COLON);
    const r = this.parseNamedType();
    return this.node(e, {
      kind: F.OPERATION_TYPE_DEFINITION,
      operation: t,
      type: r
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("scalar");
    const r = this.parseName(), i = this.parseConstDirectives();
    return this.node(e, {
      kind: F.SCALAR_TYPE_DEFINITION,
      description: t,
      name: r,
      directives: i
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("type");
    const r = this.parseName(), i = this.parseImplementsInterfaces(), s = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    return this.node(e, {
      kind: F.OBJECT_TYPE_DEFINITION,
      description: t,
      name: r,
      interfaces: i,
      directives: s,
      fields: o
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(O.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      O.BRACE_L,
      this.parseFieldDefinition,
      O.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const e = this._lexer.token, t = this.parseDescription(), r = this.parseName(), i = this.parseArgumentDefs();
    this.expectToken(O.COLON);
    const s = this.parseTypeReference(), o = this.parseConstDirectives();
    return this.node(e, {
      kind: F.FIELD_DEFINITION,
      description: t,
      name: r,
      arguments: i,
      type: s,
      directives: o
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(
      O.PAREN_L,
      this.parseInputValueDef,
      O.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const e = this._lexer.token, t = this.parseDescription(), r = this.parseName();
    this.expectToken(O.COLON);
    const i = this.parseTypeReference();
    let s;
    this.expectOptionalToken(O.EQUALS) && (s = this.parseConstValueLiteral());
    const o = this.parseConstDirectives();
    return this.node(e, {
      kind: F.INPUT_VALUE_DEFINITION,
      description: t,
      name: r,
      type: i,
      defaultValue: s,
      directives: o
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("interface");
    const r = this.parseName(), i = this.parseImplementsInterfaces(), s = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    return this.node(e, {
      kind: F.INTERFACE_TYPE_DEFINITION,
      description: t,
      name: r,
      interfaces: i,
      directives: s,
      fields: o
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("union");
    const r = this.parseName(), i = this.parseConstDirectives(), s = this.parseUnionMemberTypes();
    return this.node(e, {
      kind: F.UNION_TYPE_DEFINITION,
      description: t,
      name: r,
      directives: i,
      types: s
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(O.EQUALS) ? this.delimitedMany(O.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("enum");
    const r = this.parseName(), i = this.parseConstDirectives(), s = this.parseEnumValuesDefinition();
    return this.node(e, {
      kind: F.ENUM_TYPE_DEFINITION,
      description: t,
      name: r,
      directives: i,
      values: s
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(
      O.BRACE_L,
      this.parseEnumValueDefinition,
      O.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const e = this._lexer.token, t = this.parseDescription(), r = this.parseEnumValueName(), i = this.parseConstDirectives();
    return this.node(e, {
      kind: F.ENUM_VALUE_DEFINITION,
      description: t,
      name: r,
      directives: i
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
      throw le(
        this._lexer.source,
        this._lexer.token.start,
        `${qn(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("input");
    const r = this.parseName(), i = this.parseConstDirectives(), s = this.parseInputFieldsDefinition();
    return this.node(e, {
      kind: F.INPUT_OBJECT_TYPE_DEFINITION,
      description: t,
      name: r,
      directives: i,
      fields: s
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(
      O.BRACE_L,
      this.parseInputValueDef,
      O.BRACE_R
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const e = this._lexer.lookahead();
    if (e.kind === O.NAME)
      switch (e.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(e);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const t = this.parseConstDirectives(), r = this.optionalMany(
      O.BRACE_L,
      this.parseOperationTypeDefinition,
      O.BRACE_R
    );
    if (t.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: F.SCHEMA_EXTENSION,
      directives: t,
      operationTypes: r
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const t = this.parseName(), r = this.parseConstDirectives();
    if (r.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: F.SCALAR_TYPE_EXTENSION,
      name: t,
      directives: r
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const t = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    if (r.length === 0 && i.length === 0 && s.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: F.OBJECT_TYPE_EXTENSION,
      name: t,
      interfaces: r,
      directives: i,
      fields: s
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const t = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    if (r.length === 0 && i.length === 0 && s.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: F.INTERFACE_TYPE_EXTENSION,
      name: t,
      interfaces: r,
      directives: i,
      fields: s
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const t = this.parseName(), r = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
    if (r.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: F.UNION_TYPE_EXTENSION,
      name: t,
      directives: r,
      types: i
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const t = this.parseName(), r = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
    if (r.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: F.ENUM_TYPE_EXTENSION,
      name: t,
      directives: r,
      values: i
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const t = this.parseName(), r = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
    if (r.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: F.INPUT_OBJECT_TYPE_EXTENSION,
      name: t,
      directives: r,
      fields: i
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(O.AT);
    const r = this.parseName(), i = this.parseArgumentDefs(), s = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const o = this.parseDirectiveLocations();
    return this.node(e, {
      kind: F.DIRECTIVE_DEFINITION,
      description: t,
      name: r,
      arguments: i,
      repeatable: s,
      locations: o
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(O.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const e = this._lexer.token, t = this.parseName();
    if (Object.prototype.hasOwnProperty.call(ji, t.value))
      return t;
    throw this.unexpected(e);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(e, t) {
    return this._options.noLocation !== !0 && (t.loc = new kd(
      e,
      this._lexer.lastToken,
      this._lexer.source
    )), t;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(e) {
    return this._lexer.token.kind === e;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(e) {
    const t = this._lexer.token;
    if (t.kind === e)
      return this.advanceLexer(), t;
    throw le(
      this._lexer.source,
      t.start,
      `Expected ${Gc(e)}, found ${qn(t)}.`
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(e) {
    return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(e) {
    const t = this._lexer.token;
    if (t.kind === O.NAME && t.value === e)
      this.advanceLexer();
    else
      throw le(
        this._lexer.source,
        t.start,
        `Expected "${e}", found ${qn(t)}.`
      );
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(e) {
    const t = this._lexer.token;
    return t.kind === O.NAME && t.value === e ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(e) {
    const t = e ?? this._lexer.token;
    return le(
      this._lexer.source,
      t.start,
      `Unexpected ${qn(t)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(e, t, r) {
    this.expectToken(e);
    const i = [];
    for (; !this.expectOptionalToken(r); )
      i.push(t.call(this));
    return i;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(e, t, r) {
    if (this.expectOptionalToken(e)) {
      const i = [];
      do
        i.push(t.call(this));
      while (!this.expectOptionalToken(r));
      return i;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(e, t, r) {
    this.expectToken(e);
    const i = [];
    do
      i.push(t.call(this));
    while (!this.expectOptionalToken(r));
    return i;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(e, t) {
    this.expectOptionalToken(e);
    const r = [];
    do
      r.push(t.call(this));
    while (this.expectOptionalToken(e));
    return r;
  }
  advanceLexer() {
    const { maxTokens: e } = this._options, t = this._lexer.advance();
    if (e !== void 0 && t.kind !== O.EOF && (++this._tokenCounter, this._tokenCounter > e))
      throw le(
        this._lexer.source,
        t.start,
        `Document contains more that ${e} tokens. Parsing aborted.`
      );
  }
}
function qn(n) {
  const e = n.value;
  return Gc(n.kind) + (e != null ? ` "${e}"` : "");
}
function Gc(n) {
  return Ad(n) ? `"${n}"` : n;
}
var Hn = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), Jc = !0, ir = !1;
function Kc(n) {
  return n.replace(/[\s,]+/g, " ").trim();
}
function Zd(n) {
  return Kc(n.source.body.substring(n.start, n.end));
}
function ey(n) {
  var e = /* @__PURE__ */ new Set(), t = [];
  return n.definitions.forEach(function(r) {
    if (r.kind === "FragmentDefinition") {
      var i = r.name.value, s = Zd(r.loc), o = Mi.get(i);
      o && !o.has(s) ? Jc && console.warn("Warning: fragment with name " + i + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : o || Mi.set(i, o = /* @__PURE__ */ new Set()), o.add(s), e.has(s) || (e.add(s), t.push(r));
    } else
      t.push(r);
  }), rr(rr({}, n), { definitions: t });
}
function ty(n) {
  var e = new Set(n.definitions);
  e.forEach(function(r) {
    r.loc && delete r.loc, Object.keys(r).forEach(function(i) {
      var s = r[i];
      s && typeof s == "object" && e.add(s);
    });
  });
  var t = n.loc;
  return t && (delete t.startToken, delete t.endToken), n;
}
function ny(n) {
  var e = Kc(n);
  if (!Hn.has(e)) {
    var t = Hd(n, {
      experimentalFragmentVariables: ir,
      allowLegacyFragmentVariables: ir
    });
    if (!t || t.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    Hn.set(e, ty(ey(t)));
  }
  return Hn.get(e);
}
function Ft(n) {
  for (var e = [], t = 1; t < arguments.length; t++)
    e[t - 1] = arguments[t];
  typeof n == "string" && (n = [n]);
  var r = n[0];
  return e.forEach(function(i, s) {
    i && i.kind === "Document" ? r += i.loc.source.body : r += i, r += n[s + 1];
  }), ny(r);
}
function ry() {
  Hn.clear(), Mi.clear();
}
function iy() {
  Jc = !1;
}
function sy() {
  ir = !0;
}
function oy() {
  ir = !1;
}
var Zt = {
  gql: Ft,
  resetCaches: ry,
  disableFragmentWarnings: iy,
  enableExperimentalFragmentVariables: sy,
  disableExperimentalFragmentVariables: oy
};
(function(n) {
  n.gql = Zt.gql, n.resetCaches = Zt.resetCaches, n.disableFragmentWarnings = Zt.disableFragmentWarnings, n.enableExperimentalFragmentVariables = Zt.enableExperimentalFragmentVariables, n.disableExperimentalFragmentVariables = Zt.disableExperimentalFragmentVariables;
})(Ft || (Ft = {}));
Ft.default = Ft;
const ay = new ys({}), cy = async (n, e) => await ay.gql(n, {
  query: Ft`${e}`
}), uy = (n, e = {}) => ua({
  queryKey: [n],
  queryFn: () => cy(n, e.query)
}), fy = { useGraphql: uy, useSocket: bd, useFetch: gd };
export {
  fy as RequestAllInOneHook
};
