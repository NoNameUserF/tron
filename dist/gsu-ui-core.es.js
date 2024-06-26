import we from "react";
import { Link as cr, Routes as dr, Route as vr } from "react-router-dom";
import './index.css';var Q = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function pr() {
  if (Oe) return W;
  Oe = 1;
  var y = we, g = Symbol.for("react.element"), R = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, Y = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(_, c, w) {
    var p, E = {}, T = null, N = null;
    w !== void 0 && (T = "" + w), c.key !== void 0 && (T = "" + c.key), c.ref !== void 0 && (N = c.ref);
    for (p in c) S.call(c, p) && !$.hasOwnProperty(p) && (E[p] = c[p]);
    if (_ && _.defaultProps) for (p in c = _.defaultProps, c) E[p] === void 0 && (E[p] = c[p]);
    return { $$typeof: g, type: _, key: T, ref: N, props: E, _owner: Y.current };
  }
  return W.Fragment = R, W.jsx = k, W.jsxs = k, W;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function gr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var y = we, g = Symbol.for("react.element"), R = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), _ = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), ee = Symbol.iterator, xe = "@@iterator";
    function Ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[xe];
      return typeof r == "function" ? r : null;
    }
    var x = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ke = !1, De = !1, Fe = !1, Ae = !1, We = !1, re;
    re = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === S || e === $ || We || e === Y || e === w || e === p || Ae || e === N || ke || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === E || e.$$typeof === k || e.$$typeof === _ || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case S:
          return "Fragment";
        case R:
          return "Portal";
        case $:
          return "Profiler";
        case Y:
          return "StrictMode";
        case w:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return te(r) + ".Consumer";
          case k:
            var t = e;
            return te(t._context) + ".Provider";
          case c:
            return Ye(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case T: {
            var i = e, u = i._payload, o = i._init;
            try {
              return b(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, D = 0, ne, ae, oe, ie, ue, se, le;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function $e() {
      {
        if (D === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, ue = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
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
        D++;
      }
    }
    function Ne() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ne
            }),
            info: j({}, e, {
              value: ae
            }),
            warn: j({}, e, {
              value: oe
            }),
            error: j({}, e, {
              value: ie
            }),
            group: j({}, e, {
              value: ue
            }),
            groupCollapsed: j({}, e, {
              value: se
            }),
            groupEnd: j({}, e, {
              value: le
            })
          });
        }
        D < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = x.ReactCurrentDispatcher, G;
    function L(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
          }
        return `
` + G + e;
      }
    }
    var J = !1, U;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Le();
    }
    function ce(e, r) {
      if (!e || J)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = B.current, B.current = null, $e();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (v) {
              n = v;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          e();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, l = d.length - 1; s >= 1 && l >= 0 && a[s] !== d[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== d[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== d[l]) {
                    var h = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, h), h;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        J = !1, B.current = u, Ne(), Error.prepareStackTrace = i;
      }
      var P = e ? e.displayName || e.name : "", O = P ? L(P) : "";
      return typeof e == "function" && U.set(e, O), O;
    }
    function Ue(e, r, t) {
      return ce(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Ve(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case w:
          return L("Suspense");
        case p:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ue(e.render);
          case E:
            return V(e.type, r, t);
          case T: {
            var n = e, i = n._payload, u = n._init;
            try {
              return V(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, de = {}, ve = x.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Me(e, r, t, n, i) {
      {
        var u = Function.call.bind(F);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (M(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, M(i), f("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Be = Array.isArray;
    function q(e) {
      return Be(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ge(e) {
      if (Je(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), pe(e);
    }
    var A = x.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, me, K;
    K = {};
    function Ke(e) {
      if (F.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (F.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = b(A.current.type);
        K[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(A.current.type), e.ref), K[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          he || (he = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          me || (me = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, i) {
      {
        var u, o = {}, a = null, d = null;
        t !== void 0 && (ge(t), a = "" + t), ze(r) && (ge(r.key), a = "" + r.key), Ke(r) && (d = r.ref, Xe(r, i));
        for (u in r)
          F.call(r, u) && !qe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(o, l), d && Ze(o, l);
        }
        return Qe(e, a, d, i, n, A.current, o);
      }
    }
    var z = x.ReactCurrentOwner, ye = x.ReactDebugCurrentFrame;
    function C(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function Re() {
      {
        if (z.current) {
          var e = b(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var be = {};
    function tr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + b(e._owner.type) + "."), C(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), C(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && Ee(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Ce(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              H(o.value) && Ee(o.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          Me(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = b(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            C(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), C(null);
            break;
          }
        }
        e.ref !== null && (C(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), C(null));
      }
    }
    var Te = {};
    function je(e, r, t, n, i, u) {
      {
        var o = Ie(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = rr();
          d ? a += d : a += Re();
          var s;
          e === null ? s = "null" : q(e) ? s = "array" : e !== void 0 && e.$$typeof === g ? (s = "<" + (b(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = er(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (q(h)) {
                for (var P = 0; P < h.length; P++)
                  _e(h[P], e);
                Object.freeze && Object.freeze(h);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(h, e);
        }
        if (F.call(r, "key")) {
          var O = b(e), v = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), Z = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[O + Z]) {
            var lr = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, O, lr, O), Te[O + Z] = !0;
          }
        }
        return e === S ? ar(l) : nr(l), l;
      }
    }
    function or(e, r, t) {
      return je(e, r, t, !0);
    }
    function ir(e, r, t) {
      return je(e, r, t, !1);
    }
    var ur = ir, sr = or;
    I.Fragment = S, I.jsx = ur, I.jsxs = sr;
  }()), I;
}
process.env.NODE_ENV === "production" ? Q.exports = pr() : Q.exports = gr();
var m = Q.exports;
const hr = () => /* @__PURE__ */ m.jsx("header", { className: "gsu-header" }), mr = ({ router: y }) => {
  const g = y ?? !1;
  return /* @__PURE__ */ m.jsx("nav", { className: "gsu-nav", children: g ? y.map((R) => /* @__PURE__ */ m.jsx(cr, { to: R.path, children: R.name }, R.name)) : "Your Nav Bar" });
}, yr = ({ router: y }) => {
  const g = y ?? !1;
  return /* @__PURE__ */ m.jsx("div", { className: "gsu-widget", children: g ? /* @__PURE__ */ m.jsx(dr, { children: y.map((R) => /* @__PURE__ */ m.jsx(vr, { path: R.path, element: R.component }, R.name)) }) : "Your Widget" });
}, Er = ({ router: y }) => {
  const g = y ?? !1;
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(hr, {}),
    /* @__PURE__ */ m.jsxs("div", { className: "gsu-app", children: [
      /* @__PURE__ */ m.jsx(mr, { router: g }),
      /* @__PURE__ */ m.jsx(yr, { router: g })
    ] })
  ] });
};
export {
  Er as GSUApp
};
