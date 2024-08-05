var fo = Object.defineProperty;
var lo = (r, e, t) => e in r ? fo(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ue = (r, e, t) => lo(r, typeof e != "symbol" ? e + "" : e, t);
var hr = function(r, e) {
  return hr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
  }, hr(r, e);
};
function re(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  hr(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var d = function() {
  return d = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n];
      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, d.apply(this, arguments);
};
function ne(r, e) {
  var t = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (t[n[i]] = r[n[i]]);
  return t;
}
function ce(r, e, t, n) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(f) {
      try {
        u(n.next(f));
      } catch (h) {
        o(h);
      }
    }
    function c(f) {
      try {
        u(n.throw(f));
      } catch (h) {
        o(h);
      }
    }
    function u(f) {
      f.done ? s(f.value) : i(f.value).then(a, c);
    }
    u((n = n.apply(r, e || [])).next());
  });
}
function ue(r, e) {
  var t = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(u) {
    return function(f) {
      return c([u, f]);
    };
  }
  function c(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (t = 0)), t; ) try {
      if (n = 1, i && (s = u[0] & 2 ? i.return : u[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, u[1])).done) return s;
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
      u = e.call(r, t);
    } catch (f) {
      u = [6, f], i = 0;
    } finally {
      n = s = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function G(r, e, t) {
  if (t || arguments.length === 2) for (var n = 0, i = e.length, s; n < i; n++)
    (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return r.concat(s || Array.prototype.slice.call(e));
}
var Yt = "Invariant Violation", Tn = Object.setPrototypeOf, ho = Tn === void 0 ? function(r, e) {
  return r.__proto__ = e, r;
} : Tn, Fi = (
  /** @class */
  function(r) {
    re(e, r);
    function e(t) {
      t === void 0 && (t = Yt);
      var n = r.call(this, typeof t == "number" ? Yt + ": " + t + " (see https://github.com/apollographql/invariant-packages)" : t) || this;
      return n.framesToPop = 1, n.name = Yt, ho(n, e.prototype), n;
    }
    return e;
  }(Error)
);
function ge(r, e) {
  if (!r)
    throw new Fi(e);
}
var Pi = ["debug", "log", "warn", "error", "silent"], po = Pi.indexOf("log");
function dt(r) {
  return function() {
    if (Pi.indexOf(r) >= po) {
      var e = console[r] || console.log;
      return e.apply(console, arguments);
    }
  };
}
(function(r) {
  r.debug = dt("debug"), r.log = dt("log"), r.warn = dt("warn"), r.error = dt("error");
})(ge || (ge = {}));
var Wr = "3.11.1";
function X(r) {
  try {
    return r();
  } catch {
  }
}
const pr = X(function() {
  return globalThis;
}) || X(function() {
  return window;
}) || X(function() {
  return self;
}) || X(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
X(function() {
  return X.constructor("return this")();
});
var Sn = /* @__PURE__ */ new Map();
function dr(r) {
  var e = Sn.get(r) || 1;
  return Sn.set(r, e + 1), "".concat(r, ":").concat(e, ":").concat(Math.random().toString(36).slice(2));
}
function Li(r, e) {
  e === void 0 && (e = 0);
  var t = dr("stringifyForDisplay");
  return JSON.stringify(r, function(n, i) {
    return i === void 0 ? t : i;
  }, e).split(JSON.stringify(t)).join("<undefined>");
}
function yt(r) {
  return function(e) {
    for (var t = [], n = 1; n < arguments.length; n++)
      t[n - 1] = arguments[n];
    if (typeof e == "number") {
      var i = e;
      e = $r(i), e || (e = Gr(i, t), t = []);
    }
    r.apply(void 0, [e].concat(t));
  };
}
var D = Object.assign(function(e, t) {
  for (var n = [], i = 2; i < arguments.length; i++)
    n[i - 2] = arguments[i];
  e || ge(e, $r(t, n) || Gr(t, n));
}, {
  debug: yt(ge.debug),
  log: yt(ge.log),
  warn: yt(ge.warn),
  error: yt(ge.error)
});
function $(r) {
  for (var e = [], t = 1; t < arguments.length; t++)
    e[t - 1] = arguments[t];
  return new Fi($r(r, e) || Gr(r, e));
}
var kn = Symbol.for("ApolloErrorMessageHandler_" + Wr);
function Mi(r) {
  if (typeof r == "string")
    return r;
  try {
    return Li(r, 2).slice(0, 1e3);
  } catch {
    return "<non-serializable>";
  }
}
function $r(r, e) {
  if (e === void 0 && (e = []), !!r)
    return pr[kn] && pr[kn](r, e.map(Mi));
}
function Gr(r, e) {
  if (e === void 0 && (e = []), !!r)
    return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
      version: Wr,
      message: r,
      args: e.map(Mi)
    })));
}
function Ot(r, e) {
  if (!!!r)
    throw new Error(e);
}
function yo(r) {
  return typeof r == "object" && r !== null;
}
function vo(r, e) {
  if (!!!r)
    throw new Error(
      "Unexpected invariant triggered."
    );
}
const mo = /\r\n|[\n\r]/g;
function yr(r, e) {
  let t = 0, n = 1;
  for (const i of r.body.matchAll(mo)) {
    if (typeof i.index == "number" || vo(!1), i.index >= e)
      break;
    t = i.index + i[0].length, n += 1;
  }
  return {
    line: n,
    column: e + 1 - t
  };
}
function go(r) {
  return qi(
    r.source,
    yr(r.source, r.start)
  );
}
function qi(r, e) {
  const t = r.locationOffset.column - 1, n = "".padStart(t) + r.body, i = e.line - 1, s = r.locationOffset.line - 1, o = e.line + s, a = e.line === 1 ? t : 0, c = e.column + a, u = `${r.name}:${o}:${c}
`, f = n.split(/\r\n|[\n\r]/g), h = f[i];
  if (h.length > 120) {
    const l = Math.floor(c / 80), p = c % 80, v = [];
    for (let m = 0; m < h.length; m += 80)
      v.push(h.slice(m, m + 80));
    return u + Dn([
      [`${o} |`, v[0]],
      ...v.slice(1, l + 1).map((m) => ["|", m]),
      ["|", "^".padStart(p)],
      ["|", v[l + 1]]
    ]);
  }
  return u + Dn([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, f[i - 1]],
    [`${o} |`, h],
    ["|", "^".padStart(c)],
    [`${o + 1} |`, f[i + 1]]
  ]);
}
function Dn(r) {
  const e = r.filter(([n, i]) => i !== void 0), t = Math.max(...e.map(([n]) => n.length));
  return e.map(([n, i]) => n.padStart(t) + (i ? " " + i : "")).join(`
`);
}
function bo(r) {
  const e = r[0];
  return e == null || "kind" in e || "length" in e ? {
    nodes: e,
    source: r[1],
    positions: r[2],
    path: r[3],
    originalError: r[4],
    extensions: r[5]
  } : e;
}
class Hr extends Error {
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
    var n, i, s;
    const { nodes: o, source: a, positions: c, path: u, originalError: f, extensions: h } = bo(t);
    super(e), this.name = "GraphQLError", this.path = u ?? void 0, this.originalError = f ?? void 0, this.nodes = xn(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const l = xn(
      (n = this.nodes) === null || n === void 0 ? void 0 : n.map((v) => v.loc).filter((v) => v != null)
    );
    this.source = a ?? (l == null || (i = l[0]) === null || i === void 0 ? void 0 : i.source), this.positions = c ?? (l == null ? void 0 : l.map((v) => v.start)), this.locations = c && a ? c.map((v) => yr(a, v)) : l == null ? void 0 : l.map((v) => yr(v.source, v.start));
    const p = yo(
      f == null ? void 0 : f.extensions
    ) ? f == null ? void 0 : f.extensions : void 0;
    this.extensions = (s = h ?? p) !== null && s !== void 0 ? s : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
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
    }), f != null && f.stack ? Object.defineProperty(this, "stack", {
      value: f.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Hr) : Object.defineProperty(this, "stack", {
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

` + go(t.loc));
    else if (this.source && this.locations)
      for (const t of this.locations)
        e += `

` + qi(this.source, t);
    return e;
  }
  toJSON() {
    const e = {
      message: this.message
    };
    return this.locations != null && (e.locations = this.locations), this.path != null && (e.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e;
  }
}
function xn(r) {
  return r === void 0 || r.length === 0 ? void 0 : r;
}
function U(r, e, t) {
  return new Hr(`Syntax Error: ${t}`, {
    source: r,
    positions: [e]
  });
}
class Eo {
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
  constructor(e, t, n) {
    this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n;
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
class Vi {
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
  constructor(e, t, n, i, s, o) {
    this.kind = e, this.start = t, this.end = n, this.line = i, this.column = s, this.value = o, this.prev = null, this.next = null;
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
const Bi = {
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
}, wo = new Set(Object.keys(Bi));
function Nn(r) {
  const e = r == null ? void 0 : r.kind;
  return typeof e == "string" && wo.has(e);
}
var xe;
(function(r) {
  r.QUERY = "query", r.MUTATION = "mutation", r.SUBSCRIPTION = "subscription";
})(xe || (xe = {}));
var vr;
(function(r) {
  r.QUERY = "QUERY", r.MUTATION = "MUTATION", r.SUBSCRIPTION = "SUBSCRIPTION", r.FIELD = "FIELD", r.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", r.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", r.INLINE_FRAGMENT = "INLINE_FRAGMENT", r.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", r.SCHEMA = "SCHEMA", r.SCALAR = "SCALAR", r.OBJECT = "OBJECT", r.FIELD_DEFINITION = "FIELD_DEFINITION", r.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", r.INTERFACE = "INTERFACE", r.UNION = "UNION", r.ENUM = "ENUM", r.ENUM_VALUE = "ENUM_VALUE", r.INPUT_OBJECT = "INPUT_OBJECT", r.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(vr || (vr = {}));
var T;
(function(r) {
  r.NAME = "Name", r.DOCUMENT = "Document", r.OPERATION_DEFINITION = "OperationDefinition", r.VARIABLE_DEFINITION = "VariableDefinition", r.SELECTION_SET = "SelectionSet", r.FIELD = "Field", r.ARGUMENT = "Argument", r.FRAGMENT_SPREAD = "FragmentSpread", r.INLINE_FRAGMENT = "InlineFragment", r.FRAGMENT_DEFINITION = "FragmentDefinition", r.VARIABLE = "Variable", r.INT = "IntValue", r.FLOAT = "FloatValue", r.STRING = "StringValue", r.BOOLEAN = "BooleanValue", r.NULL = "NullValue", r.ENUM = "EnumValue", r.LIST = "ListValue", r.OBJECT = "ObjectValue", r.OBJECT_FIELD = "ObjectField", r.DIRECTIVE = "Directive", r.NAMED_TYPE = "NamedType", r.LIST_TYPE = "ListType", r.NON_NULL_TYPE = "NonNullType", r.SCHEMA_DEFINITION = "SchemaDefinition", r.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", r.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", r.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", r.FIELD_DEFINITION = "FieldDefinition", r.INPUT_VALUE_DEFINITION = "InputValueDefinition", r.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", r.UNION_TYPE_DEFINITION = "UnionTypeDefinition", r.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", r.ENUM_VALUE_DEFINITION = "EnumValueDefinition", r.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", r.DIRECTIVE_DEFINITION = "DirectiveDefinition", r.SCHEMA_EXTENSION = "SchemaExtension", r.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", r.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", r.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", r.UNION_TYPE_EXTENSION = "UnionTypeExtension", r.ENUM_TYPE_EXTENSION = "EnumTypeExtension", r.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(T || (T = {}));
function mr(r) {
  return r === 9 || r === 32;
}
function nt(r) {
  return r >= 48 && r <= 57;
}
function ji(r) {
  return r >= 97 && r <= 122 || // A-Z
  r >= 65 && r <= 90;
}
function Qi(r) {
  return ji(r) || r === 95;
}
function Oo(r) {
  return ji(r) || nt(r) || r === 95;
}
function _o(r) {
  var e;
  let t = Number.MAX_SAFE_INTEGER, n = null, i = -1;
  for (let o = 0; o < r.length; ++o) {
    var s;
    const a = r[o], c = To(a);
    c !== a.length && (n = (s = n) !== null && s !== void 0 ? s : o, i = o, o !== 0 && c < t && (t = c));
  }
  return r.map((o, a) => a === 0 ? o : o.slice(t)).slice(
    (e = n) !== null && e !== void 0 ? e : 0,
    i + 1
  );
}
function To(r) {
  let e = 0;
  for (; e < r.length && mr(r.charCodeAt(e)); )
    ++e;
  return e;
}
function So(r, e) {
  const t = r.replace(/"""/g, '\\"""'), n = t.split(/\r\n|[\n\r]/g), i = n.length === 1, s = n.length > 1 && n.slice(1).every((p) => p.length === 0 || mr(p.charCodeAt(0))), o = t.endsWith('\\"""'), a = r.endsWith('"') && !o, c = r.endsWith("\\"), u = a || c, f = (
    // add leading and trailing new lines only if it improves readability
    !i || r.length > 70 || u || s || o
  );
  let h = "";
  const l = i && mr(r.charCodeAt(0));
  return (f && !l || s) && (h += `
`), h += t, (f || u) && (h += `
`), '"""' + h + '"""';
}
var b;
(function(r) {
  r.SOF = "<SOF>", r.EOF = "<EOF>", r.BANG = "!", r.DOLLAR = "$", r.AMP = "&", r.PAREN_L = "(", r.PAREN_R = ")", r.SPREAD = "...", r.COLON = ":", r.EQUALS = "=", r.AT = "@", r.BRACKET_L = "[", r.BRACKET_R = "]", r.BRACE_L = "{", r.PIPE = "|", r.BRACE_R = "}", r.NAME = "Name", r.INT = "Int", r.FLOAT = "Float", r.STRING = "String", r.BLOCK_STRING = "BlockString", r.COMMENT = "Comment";
})(b || (b = {}));
class ko {
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
    const t = new Vi(b.SOF, 0, 0, 0, 0);
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
    if (e.kind !== b.EOF)
      do
        if (e.next)
          e = e.next;
        else {
          const t = xo(this, e.end);
          e.next = t, t.prev = e, e = t;
        }
      while (e.kind === b.COMMENT);
    return e;
  }
}
function Do(r) {
  return r === b.BANG || r === b.DOLLAR || r === b.AMP || r === b.PAREN_L || r === b.PAREN_R || r === b.SPREAD || r === b.COLON || r === b.EQUALS || r === b.AT || r === b.BRACKET_L || r === b.BRACKET_R || r === b.BRACE_L || r === b.PIPE || r === b.BRACE_R;
}
function Ve(r) {
  return r >= 0 && r <= 55295 || r >= 57344 && r <= 1114111;
}
function Pt(r, e) {
  return Ui(r.charCodeAt(e)) && zi(r.charCodeAt(e + 1));
}
function Ui(r) {
  return r >= 55296 && r <= 56319;
}
function zi(r) {
  return r >= 56320 && r <= 57343;
}
function be(r, e) {
  const t = r.source.body.codePointAt(e);
  if (t === void 0)
    return b.EOF;
  if (t >= 32 && t <= 126) {
    const n = String.fromCodePoint(t);
    return n === '"' ? `'"'` : `"${n}"`;
  }
  return "U+" + t.toString(16).toUpperCase().padStart(4, "0");
}
function B(r, e, t, n, i) {
  const s = r.line, o = 1 + t - r.lineStart;
  return new Vi(e, t, n, s, o, i);
}
function xo(r, e) {
  const t = r.source.body, n = t.length;
  let i = e;
  for (; i < n; ) {
    const s = t.charCodeAt(i);
    switch (s) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++i;
        continue;
      case 10:
        ++i, ++r.line, r.lineStart = i;
        continue;
      case 13:
        t.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++r.line, r.lineStart = i;
        continue;
      case 35:
        return No(r, i);
      case 33:
        return B(r, b.BANG, i, i + 1);
      case 36:
        return B(r, b.DOLLAR, i, i + 1);
      case 38:
        return B(r, b.AMP, i, i + 1);
      case 40:
        return B(r, b.PAREN_L, i, i + 1);
      case 41:
        return B(r, b.PAREN_R, i, i + 1);
      case 46:
        if (t.charCodeAt(i + 1) === 46 && t.charCodeAt(i + 2) === 46)
          return B(r, b.SPREAD, i, i + 3);
        break;
      case 58:
        return B(r, b.COLON, i, i + 1);
      case 61:
        return B(r, b.EQUALS, i, i + 1);
      case 64:
        return B(r, b.AT, i, i + 1);
      case 91:
        return B(r, b.BRACKET_L, i, i + 1);
      case 93:
        return B(r, b.BRACKET_R, i, i + 1);
      case 123:
        return B(r, b.BRACE_L, i, i + 1);
      case 124:
        return B(r, b.PIPE, i, i + 1);
      case 125:
        return B(r, b.BRACE_R, i, i + 1);
      case 34:
        return t.charCodeAt(i + 1) === 34 && t.charCodeAt(i + 2) === 34 ? Po(r, i) : Co(r, i);
    }
    if (nt(s) || s === 45)
      return Io(r, i, s);
    if (Qi(s))
      return Lo(r, i);
    throw U(
      r.source,
      i,
      s === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Ve(s) || Pt(t, i) ? `Unexpected character: ${be(r, i)}.` : `Invalid character: ${be(r, i)}.`
    );
  }
  return B(r, b.EOF, n, n);
}
function No(r, e) {
  const t = r.source.body, n = t.length;
  let i = e + 1;
  for (; i < n; ) {
    const s = t.charCodeAt(i);
    if (s === 10 || s === 13)
      break;
    if (Ve(s))
      ++i;
    else if (Pt(t, i))
      i += 2;
    else
      break;
  }
  return B(
    r,
    b.COMMENT,
    e,
    i,
    t.slice(e + 1, i)
  );
}
function Io(r, e, t) {
  const n = r.source.body;
  let i = e, s = t, o = !1;
  if (s === 45 && (s = n.charCodeAt(++i)), s === 48) {
    if (s = n.charCodeAt(++i), nt(s))
      throw U(
        r.source,
        i,
        `Invalid number, unexpected digit after 0: ${be(
          r,
          i
        )}.`
      );
  } else
    i = Jt(r, i, s), s = n.charCodeAt(i);
  if (s === 46 && (o = !0, s = n.charCodeAt(++i), i = Jt(r, i, s), s = n.charCodeAt(i)), (s === 69 || s === 101) && (o = !0, s = n.charCodeAt(++i), (s === 43 || s === 45) && (s = n.charCodeAt(++i)), i = Jt(r, i, s), s = n.charCodeAt(i)), s === 46 || Qi(s))
    throw U(
      r.source,
      i,
      `Invalid number, expected digit but got: ${be(
        r,
        i
      )}.`
    );
  return B(
    r,
    o ? b.FLOAT : b.INT,
    e,
    i,
    n.slice(e, i)
  );
}
function Jt(r, e, t) {
  if (!nt(t))
    throw U(
      r.source,
      e,
      `Invalid number, expected digit but got: ${be(
        r,
        e
      )}.`
    );
  const n = r.source.body;
  let i = e + 1;
  for (; nt(n.charCodeAt(i)); )
    ++i;
  return i;
}
function Co(r, e) {
  const t = r.source.body, n = t.length;
  let i = e + 1, s = i, o = "";
  for (; i < n; ) {
    const a = t.charCodeAt(i);
    if (a === 34)
      return o += t.slice(s, i), B(r, b.STRING, e, i + 1, o);
    if (a === 92) {
      o += t.slice(s, i);
      const c = t.charCodeAt(i + 1) === 117 ? t.charCodeAt(i + 2) === 123 ? Ao(r, i) : Ro(r, i) : Fo(r, i);
      o += c.value, i += c.size, s = i;
      continue;
    }
    if (a === 10 || a === 13)
      break;
    if (Ve(a))
      ++i;
    else if (Pt(t, i))
      i += 2;
    else
      throw U(
        r.source,
        i,
        `Invalid character within String: ${be(
          r,
          i
        )}.`
      );
  }
  throw U(r.source, i, "Unterminated string.");
}
function Ao(r, e) {
  const t = r.source.body;
  let n = 0, i = 3;
  for (; i < 12; ) {
    const s = t.charCodeAt(e + i++);
    if (s === 125) {
      if (i < 5 || !Ve(n))
        break;
      return {
        value: String.fromCodePoint(n),
        size: i
      };
    }
    if (n = n << 4 | Je(s), n < 0)
      break;
  }
  throw U(
    r.source,
    e,
    `Invalid Unicode escape sequence: "${t.slice(
      e,
      e + i
    )}".`
  );
}
function Ro(r, e) {
  const t = r.source.body, n = In(t, e + 2);
  if (Ve(n))
    return {
      value: String.fromCodePoint(n),
      size: 6
    };
  if (Ui(n) && t.charCodeAt(e + 6) === 92 && t.charCodeAt(e + 7) === 117) {
    const i = In(t, e + 8);
    if (zi(i))
      return {
        value: String.fromCodePoint(n, i),
        size: 12
      };
  }
  throw U(
    r.source,
    e,
    `Invalid Unicode escape sequence: "${t.slice(e, e + 6)}".`
  );
}
function In(r, e) {
  return Je(r.charCodeAt(e)) << 12 | Je(r.charCodeAt(e + 1)) << 8 | Je(r.charCodeAt(e + 2)) << 4 | Je(r.charCodeAt(e + 3));
}
function Je(r) {
  return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : -1;
}
function Fo(r, e) {
  const t = r.source.body;
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
  throw U(
    r.source,
    e,
    `Invalid character escape sequence: "${t.slice(
      e,
      e + 2
    )}".`
  );
}
function Po(r, e) {
  const t = r.source.body, n = t.length;
  let i = r.lineStart, s = e + 3, o = s, a = "";
  const c = [];
  for (; s < n; ) {
    const u = t.charCodeAt(s);
    if (u === 34 && t.charCodeAt(s + 1) === 34 && t.charCodeAt(s + 2) === 34) {
      a += t.slice(o, s), c.push(a);
      const f = B(
        r,
        b.BLOCK_STRING,
        e,
        s + 3,
        // Return a string of the lines joined with U+000A.
        _o(c).join(`
`)
      );
      return r.line += c.length - 1, r.lineStart = i, f;
    }
    if (u === 92 && t.charCodeAt(s + 1) === 34 && t.charCodeAt(s + 2) === 34 && t.charCodeAt(s + 3) === 34) {
      a += t.slice(o, s), o = s + 1, s += 4;
      continue;
    }
    if (u === 10 || u === 13) {
      a += t.slice(o, s), c.push(a), u === 13 && t.charCodeAt(s + 1) === 10 ? s += 2 : ++s, a = "", o = s, i = s;
      continue;
    }
    if (Ve(u))
      ++s;
    else if (Pt(t, s))
      s += 2;
    else
      throw U(
        r.source,
        s,
        `Invalid character within String: ${be(
          r,
          s
        )}.`
      );
  }
  throw U(r.source, s, "Unterminated string.");
}
function Lo(r, e) {
  const t = r.source.body, n = t.length;
  let i = e + 1;
  for (; i < n; ) {
    const s = t.charCodeAt(i);
    if (Oo(s))
      ++i;
    else
      break;
  }
  return B(
    r,
    b.NAME,
    e,
    i,
    t.slice(e, i)
  );
}
const Mo = 10, Wi = 2;
function Yr(r) {
  return Lt(r, []);
}
function Lt(r, e) {
  switch (typeof r) {
    case "string":
      return JSON.stringify(r);
    case "function":
      return r.name ? `[function ${r.name}]` : "[function]";
    case "object":
      return qo(r, e);
    default:
      return String(r);
  }
}
function qo(r, e) {
  if (r === null)
    return "null";
  if (e.includes(r))
    return "[Circular]";
  const t = [...e, r];
  if (Vo(r)) {
    const n = r.toJSON();
    if (n !== r)
      return typeof n == "string" ? n : Lt(n, t);
  } else if (Array.isArray(r))
    return jo(r, t);
  return Bo(r, t);
}
function Vo(r) {
  return typeof r.toJSON == "function";
}
function Bo(r, e) {
  const t = Object.entries(r);
  return t.length === 0 ? "{}" : e.length > Wi ? "[" + Qo(r) + "]" : "{ " + t.map(
    ([i, s]) => i + ": " + Lt(s, e)
  ).join(", ") + " }";
}
function jo(r, e) {
  if (r.length === 0)
    return "[]";
  if (e.length > Wi)
    return "[Array]";
  const t = Math.min(Mo, r.length), n = r.length - t, i = [];
  for (let s = 0; s < t; ++s)
    i.push(Lt(r[s], e));
  return n === 1 ? i.push("... 1 more item") : n > 1 && i.push(`... ${n} more items`), "[" + i.join(", ") + "]";
}
function Qo(r) {
  const e = Object.prototype.toString.call(r).replace(/^\[object /, "").replace(/]$/, "");
  if (e === "Object" && typeof r.constructor == "function") {
    const t = r.constructor.name;
    if (typeof t == "string" && t !== "")
      return t;
  }
  return e;
}
const Uo = globalThis.process && // eslint-disable-next-line no-undef
process.env.NODE_ENV === "production", zo = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  Uo ? function(e, t) {
    return e instanceof t;
  } : function(e, t) {
    if (e instanceof t)
      return !0;
    if (typeof e == "object" && e !== null) {
      var n;
      const i = t.prototype[Symbol.toStringTag], s = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in e ? e[Symbol.toStringTag] : (n = e.constructor) === null || n === void 0 ? void 0 : n.name
      );
      if (i === s) {
        const o = Yr(e);
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
class $i {
  constructor(e, t = "GraphQL request", n = {
    line: 1,
    column: 1
  }) {
    typeof e == "string" || Ot(!1, `Body must be a string. Received: ${Yr(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || Ot(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || Ot(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function Wo(r) {
  return zo(r, $i);
}
function $o(r, e) {
  return new Go(r, e).parseDocument();
}
class Go {
  constructor(e, t = {}) {
    const n = Wo(e) ? e : new $i(e);
    this._lexer = new ko(n), this._options = t, this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const e = this.expectToken(b.NAME);
    return this.node(e, {
      kind: T.NAME,
      value: e.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: T.DOCUMENT,
      definitions: this.many(
        b.SOF,
        this.parseDefinition,
        b.EOF
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
    if (this.peek(b.BRACE_L))
      return this.parseOperationDefinition();
    const e = this.peekDescription(), t = e ? this._lexer.lookahead() : this._lexer.token;
    if (t.kind === b.NAME) {
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
        throw U(
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
    if (this.peek(b.BRACE_L))
      return this.node(e, {
        kind: T.OPERATION_DEFINITION,
        operation: xe.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const t = this.parseOperationType();
    let n;
    return this.peek(b.NAME) && (n = this.parseName()), this.node(e, {
      kind: T.OPERATION_DEFINITION,
      operation: t,
      name: n,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const e = this.expectToken(b.NAME);
    switch (e.value) {
      case "query":
        return xe.QUERY;
      case "mutation":
        return xe.MUTATION;
      case "subscription":
        return xe.SUBSCRIPTION;
    }
    throw this.unexpected(e);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      b.PAREN_L,
      this.parseVariableDefinition,
      b.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: T.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(b.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(b.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const e = this._lexer.token;
    return this.expectToken(b.DOLLAR), this.node(e, {
      kind: T.VARIABLE,
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
      kind: T.SELECTION_SET,
      selections: this.many(
        b.BRACE_L,
        this.parseSelection,
        b.BRACE_R
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
    return this.peek(b.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const e = this._lexer.token, t = this.parseName();
    let n, i;
    return this.expectOptionalToken(b.COLON) ? (n = t, i = this.parseName()) : i = t, this.node(e, {
      kind: T.FIELD,
      alias: n,
      name: i,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(b.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(e) {
    const t = e ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(b.PAREN_L, t, b.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(e = !1) {
    const t = this._lexer.token, n = this.parseName();
    return this.expectToken(b.COLON), this.node(t, {
      kind: T.ARGUMENT,
      name: n,
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
    this.expectToken(b.SPREAD);
    const t = this.expectOptionalKeyword("on");
    return !t && this.peek(b.NAME) ? this.node(e, {
      kind: T.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(e, {
      kind: T.INLINE_FRAGMENT,
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
      kind: T.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(e, {
      kind: T.FRAGMENT_DEFINITION,
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
      case b.BRACKET_L:
        return this.parseList(e);
      case b.BRACE_L:
        return this.parseObject(e);
      case b.INT:
        return this.advanceLexer(), this.node(t, {
          kind: T.INT,
          value: t.value
        });
      case b.FLOAT:
        return this.advanceLexer(), this.node(t, {
          kind: T.FLOAT,
          value: t.value
        });
      case b.STRING:
      case b.BLOCK_STRING:
        return this.parseStringLiteral();
      case b.NAME:
        switch (this.advanceLexer(), t.value) {
          case "true":
            return this.node(t, {
              kind: T.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(t, {
              kind: T.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(t, {
              kind: T.NULL
            });
          default:
            return this.node(t, {
              kind: T.ENUM,
              value: t.value
            });
        }
      case b.DOLLAR:
        if (e)
          if (this.expectToken(b.DOLLAR), this._lexer.token.kind === b.NAME) {
            const n = this._lexer.token.value;
            throw U(
              this._lexer.source,
              t.start,
              `Unexpected variable "$${n}" in constant value.`
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
      kind: T.STRING,
      value: e.value,
      block: e.kind === b.BLOCK_STRING
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
      kind: T.LIST,
      values: this.any(b.BRACKET_L, t, b.BRACKET_R)
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
      kind: T.OBJECT,
      fields: this.any(b.BRACE_L, t, b.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(e) {
    const t = this._lexer.token, n = this.parseName();
    return this.expectToken(b.COLON), this.node(t, {
      kind: T.OBJECT_FIELD,
      name: n,
      value: this.parseValueLiteral(e)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(e) {
    const t = [];
    for (; this.peek(b.AT); )
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
    return this.expectToken(b.AT), this.node(t, {
      kind: T.DIRECTIVE,
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
    if (this.expectOptionalToken(b.BRACKET_L)) {
      const n = this.parseTypeReference();
      this.expectToken(b.BRACKET_R), t = this.node(e, {
        kind: T.LIST_TYPE,
        type: n
      });
    } else
      t = this.parseNamedType();
    return this.expectOptionalToken(b.BANG) ? this.node(e, {
      kind: T.NON_NULL_TYPE,
      type: t
    }) : t;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: T.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(b.STRING) || this.peek(b.BLOCK_STRING);
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
    const n = this.parseConstDirectives(), i = this.many(
      b.BRACE_L,
      this.parseOperationTypeDefinition,
      b.BRACE_R
    );
    return this.node(e, {
      kind: T.SCHEMA_DEFINITION,
      description: t,
      directives: n,
      operationTypes: i
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const e = this._lexer.token, t = this.parseOperationType();
    this.expectToken(b.COLON);
    const n = this.parseNamedType();
    return this.node(e, {
      kind: T.OPERATION_TYPE_DEFINITION,
      operation: t,
      type: n
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("scalar");
    const n = this.parseName(), i = this.parseConstDirectives();
    return this.node(e, {
      kind: T.SCALAR_TYPE_DEFINITION,
      description: t,
      name: n,
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
    const n = this.parseName(), i = this.parseImplementsInterfaces(), s = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    return this.node(e, {
      kind: T.OBJECT_TYPE_DEFINITION,
      description: t,
      name: n,
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
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(b.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      b.BRACE_L,
      this.parseFieldDefinition,
      b.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const e = this._lexer.token, t = this.parseDescription(), n = this.parseName(), i = this.parseArgumentDefs();
    this.expectToken(b.COLON);
    const s = this.parseTypeReference(), o = this.parseConstDirectives();
    return this.node(e, {
      kind: T.FIELD_DEFINITION,
      description: t,
      name: n,
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
      b.PAREN_L,
      this.parseInputValueDef,
      b.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const e = this._lexer.token, t = this.parseDescription(), n = this.parseName();
    this.expectToken(b.COLON);
    const i = this.parseTypeReference();
    let s;
    this.expectOptionalToken(b.EQUALS) && (s = this.parseConstValueLiteral());
    const o = this.parseConstDirectives();
    return this.node(e, {
      kind: T.INPUT_VALUE_DEFINITION,
      description: t,
      name: n,
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
    const n = this.parseName(), i = this.parseImplementsInterfaces(), s = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    return this.node(e, {
      kind: T.INTERFACE_TYPE_DEFINITION,
      description: t,
      name: n,
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
    const n = this.parseName(), i = this.parseConstDirectives(), s = this.parseUnionMemberTypes();
    return this.node(e, {
      kind: T.UNION_TYPE_DEFINITION,
      description: t,
      name: n,
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
    return this.expectOptionalToken(b.EQUALS) ? this.delimitedMany(b.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const e = this._lexer.token, t = this.parseDescription();
    this.expectKeyword("enum");
    const n = this.parseName(), i = this.parseConstDirectives(), s = this.parseEnumValuesDefinition();
    return this.node(e, {
      kind: T.ENUM_TYPE_DEFINITION,
      description: t,
      name: n,
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
      b.BRACE_L,
      this.parseEnumValueDefinition,
      b.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const e = this._lexer.token, t = this.parseDescription(), n = this.parseEnumValueName(), i = this.parseConstDirectives();
    return this.node(e, {
      kind: T.ENUM_VALUE_DEFINITION,
      description: t,
      name: n,
      directives: i
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
      throw U(
        this._lexer.source,
        this._lexer.token.start,
        `${vt(
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
    const n = this.parseName(), i = this.parseConstDirectives(), s = this.parseInputFieldsDefinition();
    return this.node(e, {
      kind: T.INPUT_OBJECT_TYPE_DEFINITION,
      description: t,
      name: n,
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
      b.BRACE_L,
      this.parseInputValueDef,
      b.BRACE_R
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
    if (e.kind === b.NAME)
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
    const t = this.parseConstDirectives(), n = this.optionalMany(
      b.BRACE_L,
      this.parseOperationTypeDefinition,
      b.BRACE_R
    );
    if (t.length === 0 && n.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: T.SCHEMA_EXTENSION,
      directives: t,
      operationTypes: n
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const t = this.parseName(), n = this.parseConstDirectives();
    if (n.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: T.SCALAR_TYPE_EXTENSION,
      name: t,
      directives: n
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
    const t = this.parseName(), n = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    if (n.length === 0 && i.length === 0 && s.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: T.OBJECT_TYPE_EXTENSION,
      name: t,
      interfaces: n,
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
    const t = this.parseName(), n = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    if (n.length === 0 && i.length === 0 && s.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: T.INTERFACE_TYPE_EXTENSION,
      name: t,
      interfaces: n,
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
    const t = this.parseName(), n = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
    if (n.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: T.UNION_TYPE_EXTENSION,
      name: t,
      directives: n,
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
    const t = this.parseName(), n = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
    if (n.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: T.ENUM_TYPE_EXTENSION,
      name: t,
      directives: n,
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
    const t = this.parseName(), n = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
    if (n.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: T.INPUT_OBJECT_TYPE_EXTENSION,
      name: t,
      directives: n,
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
    this.expectKeyword("directive"), this.expectToken(b.AT);
    const n = this.parseName(), i = this.parseArgumentDefs(), s = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const o = this.parseDirectiveLocations();
    return this.node(e, {
      kind: T.DIRECTIVE_DEFINITION,
      description: t,
      name: n,
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
    return this.delimitedMany(b.PIPE, this.parseDirectiveLocation);
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
    if (Object.prototype.hasOwnProperty.call(vr, t.value))
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
    return this._options.noLocation !== !0 && (t.loc = new Eo(
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
    throw U(
      this._lexer.source,
      t.start,
      `Expected ${Gi(e)}, found ${vt(t)}.`
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
    if (t.kind === b.NAME && t.value === e)
      this.advanceLexer();
    else
      throw U(
        this._lexer.source,
        t.start,
        `Expected "${e}", found ${vt(t)}.`
      );
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(e) {
    const t = this._lexer.token;
    return t.kind === b.NAME && t.value === e ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(e) {
    const t = e ?? this._lexer.token;
    return U(
      this._lexer.source,
      t.start,
      `Unexpected ${vt(t)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(e, t, n) {
    this.expectToken(e);
    const i = [];
    for (; !this.expectOptionalToken(n); )
      i.push(t.call(this));
    return i;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(e, t, n) {
    if (this.expectOptionalToken(e)) {
      const i = [];
      do
        i.push(t.call(this));
      while (!this.expectOptionalToken(n));
      return i;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(e, t, n) {
    this.expectToken(e);
    const i = [];
    do
      i.push(t.call(this));
    while (!this.expectOptionalToken(n));
    return i;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(e, t) {
    this.expectOptionalToken(e);
    const n = [];
    do
      n.push(t.call(this));
    while (this.expectOptionalToken(e));
    return n;
  }
  advanceLexer() {
    const { maxTokens: e } = this._options, t = this._lexer.advance();
    if (e !== void 0 && t.kind !== b.EOF && (++this._tokenCounter, this._tokenCounter > e))
      throw U(
        this._lexer.source,
        t.start,
        `Document contains more that ${e} tokens. Parsing aborted.`
      );
  }
}
function vt(r) {
  const e = r.value;
  return Gi(r.kind) + (e != null ? ` "${e}"` : "");
}
function Gi(r) {
  return Do(r) ? `"${r}"` : r;
}
function Ho(r) {
  return `"${r.replace(Yo, Jo)}"`;
}
const Yo = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Jo(r) {
  return Ko[r.charCodeAt(0)];
}
const Ko = [
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
], Jr = Object.freeze({});
function ie(r, e, t = Bi) {
  const n = /* @__PURE__ */ new Map();
  for (const y of Object.values(T))
    n.set(y, Xo(e, y));
  let i, s = Array.isArray(r), o = [r], a = -1, c = [], u = r, f, h;
  const l = [], p = [];
  do {
    a++;
    const y = a === o.length, w = y && c.length !== 0;
    if (y) {
      if (f = p.length === 0 ? void 0 : l[l.length - 1], u = h, h = p.pop(), w)
        if (s) {
          u = u.slice();
          let _ = 0;
          for (const [O, k] of c) {
            const x = O - _;
            k === null ? (u.splice(x, 1), _++) : u[x] = k;
          }
        } else {
          u = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(u)
          );
          for (const [_, O] of c)
            u[_] = O;
        }
      a = i.index, o = i.keys, c = i.edits, s = i.inArray, i = i.prev;
    } else if (h) {
      if (f = s ? a : o[a], u = h[f], u == null)
        continue;
      l.push(f);
    }
    let g;
    if (!Array.isArray(u)) {
      var v, m;
      Nn(u) || Ot(!1, `Invalid AST Node: ${Yr(u)}.`);
      const _ = y ? (v = n.get(u.kind)) === null || v === void 0 ? void 0 : v.leave : (m = n.get(u.kind)) === null || m === void 0 ? void 0 : m.enter;
      if (g = _ == null ? void 0 : _.call(e, u, f, h, l, p), g === Jr)
        break;
      if (g === !1) {
        if (!y) {
          l.pop();
          continue;
        }
      } else if (g !== void 0 && (c.push([f, g]), !y))
        if (Nn(g))
          u = g;
        else {
          l.pop();
          continue;
        }
    }
    if (g === void 0 && w && c.push([f, u]), y)
      l.pop();
    else {
      var E;
      i = {
        inArray: s,
        index: a,
        keys: o,
        edits: c,
        prev: i
      }, s = Array.isArray(u), o = s ? u : (E = t[u.kind]) !== null && E !== void 0 ? E : [], a = -1, c = [], h && p.push(h), h = u;
    }
  } while (i !== void 0);
  return c.length !== 0 ? c[c.length - 1][1] : r;
}
function Xo(r, e) {
  const t = r[e];
  return typeof t == "object" ? t : typeof t == "function" ? {
    enter: t,
    leave: void 0
  } : {
    enter: r.enter,
    leave: r.leave
  };
}
function Zo(r) {
  return ie(r, ta);
}
const ea = 80, ta = {
  Name: {
    leave: (r) => r.value
  },
  Variable: {
    leave: (r) => "$" + r.name
  },
  // Document
  Document: {
    leave: (r) => S(r.definitions, `

`)
  },
  OperationDefinition: {
    leave(r) {
      const e = I("(", S(r.variableDefinitions, ", "), ")"), t = S(
        [
          r.operation,
          S([r.name, e]),
          S(r.directives, " ")
        ],
        " "
      );
      return (t === "query" ? "" : t + " ") + r.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: r, type: e, defaultValue: t, directives: n }) => r + ": " + e + I(" = ", t) + I(" ", S(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: r }) => J(r)
  },
  Field: {
    leave({ alias: r, name: e, arguments: t, directives: n, selectionSet: i }) {
      const s = I("", r, ": ") + e;
      let o = s + I("(", S(t, ", "), ")");
      return o.length > ea && (o = s + I(`(
`, _t(S(t, `
`)), `
)`)), S([o, S(n, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: r, value: e }) => r + ": " + e
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: r, directives: e }) => "..." + r + I(" ", S(e, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: r, directives: e, selectionSet: t }) => S(
      [
        "...",
        I("on ", r),
        S(e, " "),
        t
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: r, typeCondition: e, variableDefinitions: t, directives: n, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${r}${I("(", S(t, ", "), ")")} on ${e} ${I("", S(n, " "), " ")}` + i
    )
  },
  // Value
  IntValue: {
    leave: ({ value: r }) => r
  },
  FloatValue: {
    leave: ({ value: r }) => r
  },
  StringValue: {
    leave: ({ value: r, block: e }) => e ? So(r) : Ho(r)
  },
  BooleanValue: {
    leave: ({ value: r }) => r ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value: r }) => r
  },
  ListValue: {
    leave: ({ values: r }) => "[" + S(r, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: r }) => "{" + S(r, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: r, value: e }) => r + ": " + e
  },
  // Directive
  Directive: {
    leave: ({ name: r, arguments: e }) => "@" + r + I("(", S(e, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name: r }) => r
  },
  ListType: {
    leave: ({ type: r }) => "[" + r + "]"
  },
  NonNullType: {
    leave: ({ type: r }) => r + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description: r, directives: e, operationTypes: t }) => I("", r, `
`) + S(["schema", S(e, " "), J(t)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: r, type: e }) => r + ": " + e
  },
  ScalarTypeDefinition: {
    leave: ({ description: r, name: e, directives: t }) => I("", r, `
`) + S(["scalar", e, S(t, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: r, name: e, interfaces: t, directives: n, fields: i }) => I("", r, `
`) + S(
      [
        "type",
        e,
        I("implements ", S(t, " & ")),
        S(n, " "),
        J(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: r, name: e, arguments: t, type: n, directives: i }) => I("", r, `
`) + e + (Cn(t) ? I(`(
`, _t(S(t, `
`)), `
)`) : I("(", S(t, ", "), ")")) + ": " + n + I(" ", S(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: r, name: e, type: t, defaultValue: n, directives: i }) => I("", r, `
`) + S(
      [e + ": " + t, I("= ", n), S(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: r, name: e, interfaces: t, directives: n, fields: i }) => I("", r, `
`) + S(
      [
        "interface",
        e,
        I("implements ", S(t, " & ")),
        S(n, " "),
        J(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: r, name: e, directives: t, types: n }) => I("", r, `
`) + S(
      ["union", e, S(t, " "), I("= ", S(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: r, name: e, directives: t, values: n }) => I("", r, `
`) + S(["enum", e, S(t, " "), J(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: r, name: e, directives: t }) => I("", r, `
`) + S([e, S(t, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: r, name: e, directives: t, fields: n }) => I("", r, `
`) + S(["input", e, S(t, " "), J(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: r, name: e, arguments: t, repeatable: n, locations: i }) => I("", r, `
`) + "directive @" + e + (Cn(t) ? I(`(
`, _t(S(t, `
`)), `
)`) : I("(", S(t, ", "), ")")) + (n ? " repeatable" : "") + " on " + S(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: r, operationTypes: e }) => S(
      ["extend schema", S(r, " "), J(e)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: r, directives: e }) => S(["extend scalar", r, S(e, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: r, interfaces: e, directives: t, fields: n }) => S(
      [
        "extend type",
        r,
        I("implements ", S(e, " & ")),
        S(t, " "),
        J(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: r, interfaces: e, directives: t, fields: n }) => S(
      [
        "extend interface",
        r,
        I("implements ", S(e, " & ")),
        S(t, " "),
        J(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: r, directives: e, types: t }) => S(
      [
        "extend union",
        r,
        S(e, " "),
        I("= ", S(t, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: r, directives: e, values: t }) => S(["extend enum", r, S(e, " "), J(t)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: r, directives: e, fields: t }) => S(["extend input", r, S(e, " "), J(t)], " ")
  }
};
function S(r, e = "") {
  var t;
  return (t = r == null ? void 0 : r.filter((n) => n).join(e)) !== null && t !== void 0 ? t : "";
}
function J(r) {
  return I(`{
`, _t(S(r, `
`)), `
}`);
}
function I(r, e, t = "") {
  return e != null && e !== "" ? r + e + t : "";
}
function _t(r) {
  return I("  ", r.replace(/\n/g, `
  `));
}
function Cn(r) {
  var e;
  return (e = r == null ? void 0 : r.some((t) => t.includes(`
`))) !== null && e !== void 0 ? e : !1;
}
function An(r) {
  return r.kind === T.FIELD || r.kind === T.FRAGMENT_SPREAD || r.kind === T.INLINE_FRAGMENT;
}
function ut(r, e) {
  var t = r.directives;
  return !t || !t.length ? !0 : ia(t).every(function(n) {
    var i = n.directive, s = n.ifArgument, o = !1;
    return s.value.kind === "Variable" ? (o = e && e[s.value.name.value], D(o !== void 0, 69, i.name.value)) : o = s.value.value, i.name.value === "skip" ? !o : o;
  });
}
function it(r, e, t) {
  var n = new Set(r), i = n.size;
  return ie(e, {
    Directive: function(s) {
      if (n.delete(s.name.value) && (!t || !n.size))
        return Jr;
    }
  }), t ? !n.size : n.size < i;
}
function ra(r) {
  return r && it(["client", "export"], r, !0);
}
function na(r) {
  var e = r.name.value;
  return e === "skip" || e === "include";
}
function ia(r) {
  var e = [];
  return r && r.length && r.forEach(function(t) {
    if (na(t)) {
      var n = t.arguments, i = t.name.value;
      D(n && n.length === 1, 70, i);
      var s = n[0];
      D(s.name && s.name.value === "if", 71, i);
      var o = s.value;
      D(o && (o.kind === "Variable" || o.kind === "BooleanValue"), 72, i), e.push({ directive: t, ifArgument: s });
    }
  }), e;
}
const sa = () => /* @__PURE__ */ Object.create(null), { forEach: oa, slice: Rn } = Array.prototype, { hasOwnProperty: aa } = Object.prototype;
let Be = class Hi {
  constructor(e = !0, t = sa) {
    this.weakness = e, this.makeData = t;
  }
  lookup() {
    return this.lookupArray(arguments);
  }
  lookupArray(e) {
    let t = this;
    return oa.call(e, (n) => t = t.getChildTrie(n)), aa.call(t, "data") ? t.data : t.data = this.makeData(Rn.call(e));
  }
  peek() {
    return this.peekArray(arguments);
  }
  peekArray(e) {
    let t = this;
    for (let n = 0, i = e.length; t && n < i; ++n) {
      const s = t.mapFor(e[n], !1);
      t = s && s.get(e[n]);
    }
    return t && t.data;
  }
  remove() {
    return this.removeArray(arguments);
  }
  removeArray(e) {
    let t;
    if (e.length) {
      const n = e[0], i = this.mapFor(n, !1), s = i && i.get(n);
      s && (t = s.removeArray(Rn.call(e, 1)), !s.data && !s.weak && !(s.strong && s.strong.size) && i.delete(n));
    } else
      t = this.data, delete this.data;
    return t;
  }
  getChildTrie(e) {
    const t = this.mapFor(e, !0);
    let n = t.get(e);
    return n || t.set(e, n = new Hi(this.weakness, this.makeData)), n;
  }
  mapFor(e, t) {
    return this.weakness && ca(e) ? this.weak || (t ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (t ? this.strong = /* @__PURE__ */ new Map() : void 0);
  }
};
function ca(r) {
  switch (typeof r) {
    case "object":
      if (r === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
var ua = X(function() {
  return navigator.product;
}) == "ReactNative", je = typeof WeakMap == "function" && !(ua && !global.HermesInternal), Yi = typeof WeakSet == "function", Ji = typeof Symbol == "function" && typeof Symbol.for == "function", Mt = Ji && Symbol.asyncIterator;
X(function() {
  return window.document.createElement;
});
X(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function q(r) {
  return r !== null && typeof r == "object";
}
function fa(r, e) {
  var t = e, n = [];
  r.definitions.forEach(function(s) {
    if (s.kind === "OperationDefinition")
      throw $(
        73,
        s.operation,
        s.name ? " named '".concat(s.name.value, "'") : ""
      );
    s.kind === "FragmentDefinition" && n.push(s);
  }), typeof t > "u" && (D(n.length === 1, 74, n.length), t = n[0].name.value);
  var i = d(d({}, r), { definitions: G([
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
  ], r.definitions, !0) });
  return i;
}
function qt(r) {
  r === void 0 && (r = []);
  var e = {};
  return r.forEach(function(t) {
    e[t.name.value] = t;
  }), e;
}
function Vt(r, e) {
  switch (r.kind) {
    case "InlineFragment":
      return r;
    case "FragmentSpread": {
      var t = r.name.value;
      if (typeof e == "function")
        return e(t);
      var n = e && e[t];
      return D(n, 75, t), n || null;
    }
    default:
      return null;
  }
}
function la() {
}
class gr {
  constructor(e = 1 / 0, t = la) {
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
      const { older: n, newer: i } = t;
      i && (i.older = n), n && (n.newer = i), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = i);
    }
    return t;
  }
  set(e, t) {
    let n = this.getNode(e);
    return n ? n.value = t : (n = {
      key: e,
      value: t,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(e, n), n.value);
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
function br() {
}
const ha = br, pa = typeof WeakRef < "u" ? WeakRef : function(r) {
  return { deref: () => r };
}, da = typeof WeakMap < "u" ? WeakMap : Map, ya = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
  return {
    register: br,
    unregister: br
  };
}, va = 10024;
class Ct {
  constructor(e = 1 / 0, t = ha) {
    this.max = e, this.dispose = t, this.map = new da(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
      const n = this.unfinalizedNodes.values();
      for (let i = 0; i < va; i++) {
        const s = n.next().value;
        if (!s)
          break;
        this.unfinalizedNodes.delete(s);
        const o = s.key;
        delete s.key, s.keyRef = new pa(o), this.registry.register(o, s, s);
      }
      this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
    }, this.registry = new ya(this.deleteNode.bind(this));
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
      const { older: n, newer: i } = t;
      i && (i.older = n), n && (n.newer = i), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = i);
    }
    return t;
  }
  set(e, t) {
    let n = this.getNode(e);
    return n ? n.value = t : (n = {
      key: e,
      value: t,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.scheduleFinalization(n), this.map.set(e, n), this.size++, n.value);
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
var Kt = /* @__PURE__ */ new WeakSet();
function Ki(r) {
  r.size <= (r.max || -1) || Kt.has(r) || (Kt.add(r), setTimeout(function() {
    r.clean(), Kt.delete(r);
  }, 100));
}
var Xi = function(r, e) {
  var t = new Ct(r, e);
  return t.set = function(n, i) {
    var s = Ct.prototype.set.call(this, n, i);
    return Ki(this), s;
  }, t;
}, ma = function(r, e) {
  var t = new gr(r, e);
  return t.set = function(n, i) {
    var s = gr.prototype.set.call(this, n, i);
    return Ki(this), s;
  }, t;
}, ga = Symbol.for("apollo.cacheSize"), se = d({}, pr[ga]), me = {};
function Zi(r, e) {
  me[r] = e;
}
var ba = globalThis.__DEV__ !== !1 ? _a : void 0, Ea = globalThis.__DEV__ !== !1 ? Ta : void 0, wa = globalThis.__DEV__ !== !1 ? es : void 0;
function Oa() {
  var r = {
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
  return Object.fromEntries(Object.entries(r).map(function(e) {
    var t = e[0], n = e[1];
    return [
      t,
      se[t] || n
    ];
  }));
}
function _a() {
  var r, e, t, n, i;
  if (globalThis.__DEV__ === !1)
    throw new Error("only supported in development mode");
  return {
    limits: Oa(),
    sizes: d({ print: (r = me.print) === null || r === void 0 ? void 0 : r.call(me), parser: (e = me.parser) === null || e === void 0 ? void 0 : e.call(me), canonicalStringify: (t = me.canonicalStringify) === null || t === void 0 ? void 0 : t.call(me), links: wr(this.link), queryManager: {
      getDocumentInfo: this.queryManager.transformCache.size,
      documentTransforms: rs(this.queryManager.documentTransform)
    } }, (i = (n = this.cache).getMemoryInternals) === null || i === void 0 ? void 0 : i.call(n))
  };
}
function es() {
  return {
    cache: {
      fragmentQueryDocuments: fe(this.getFragmentDoc)
    }
  };
}
function Ta() {
  var r = this.config.fragments;
  return d(d({}, es.apply(this)), { addTypenameDocumentTransform: rs(this.addTypenameTransform), inMemoryCache: {
    executeSelectionSet: fe(this.storeReader.executeSelectionSet),
    executeSubSelectedArray: fe(this.storeReader.executeSubSelectedArray),
    maybeBroadcastWatch: fe(this.maybeBroadcastWatch)
  }, fragmentRegistry: {
    findFragmentSpreads: fe(r == null ? void 0 : r.findFragmentSpreads),
    lookup: fe(r == null ? void 0 : r.lookup),
    transform: fe(r == null ? void 0 : r.transform)
  } });
}
function Sa(r) {
  return !!r && "dirtyKey" in r;
}
function fe(r) {
  return Sa(r) ? r.size : void 0;
}
function ts(r) {
  return r != null;
}
function rs(r) {
  return Er(r).map(function(e) {
    return { cache: e };
  });
}
function Er(r) {
  return r ? G(G([
    fe(r == null ? void 0 : r.performWork)
  ], Er(r == null ? void 0 : r.left), !0), Er(r == null ? void 0 : r.right), !0).filter(ts) : [];
}
function wr(r) {
  var e;
  return r ? G(G([
    (e = r == null ? void 0 : r.getMemoryInternals) === null || e === void 0 ? void 0 : e.call(r)
  ], wr(r == null ? void 0 : r.left), !0), wr(r == null ? void 0 : r.right), !0).filter(ts) : [];
}
var le = Object.assign(function(e) {
  return JSON.stringify(e, ka);
}, {
  reset: function() {
    Ne = new ma(
      se.canonicalStringify || 1e3
      /* defaultCacheSizes.canonicalStringify */
    );
  }
});
globalThis.__DEV__ !== !1 && Zi("canonicalStringify", function() {
  return Ne.size;
});
var Ne;
le.reset();
function ka(r, e) {
  if (e && typeof e == "object") {
    var t = Object.getPrototypeOf(e);
    if (t === Object.prototype || t === null) {
      var n = Object.keys(e);
      if (n.every(Da))
        return e;
      var i = JSON.stringify(n), s = Ne.get(i);
      if (!s) {
        n.sort();
        var o = JSON.stringify(n);
        s = Ne.get(o) || n, Ne.set(i, s), Ne.set(o, s);
      }
      var a = Object.create(t);
      return s.forEach(function(c) {
        a[c] = e[c];
      }), a;
    }
  }
  return e;
}
function Da(r, e, t) {
  return e === 0 || t[e - 1] <= r;
}
function Ae(r) {
  return { __ref: String(r) };
}
function A(r) {
  return !!(r && typeof r == "object" && typeof r.__ref == "string");
}
function xa(r) {
  return q(r) && r.kind === "Document" && Array.isArray(r.definitions);
}
function Na(r) {
  return r.kind === "StringValue";
}
function Ia(r) {
  return r.kind === "BooleanValue";
}
function Ca(r) {
  return r.kind === "IntValue";
}
function Aa(r) {
  return r.kind === "FloatValue";
}
function Ra(r) {
  return r.kind === "Variable";
}
function Fa(r) {
  return r.kind === "ObjectValue";
}
function Pa(r) {
  return r.kind === "ListValue";
}
function La(r) {
  return r.kind === "EnumValue";
}
function Ma(r) {
  return r.kind === "NullValue";
}
function Pe(r, e, t, n) {
  if (Ca(t) || Aa(t))
    r[e.value] = Number(t.value);
  else if (Ia(t) || Na(t))
    r[e.value] = t.value;
  else if (Fa(t)) {
    var i = {};
    t.fields.map(function(o) {
      return Pe(i, o.name, o.value, n);
    }), r[e.value] = i;
  } else if (Ra(t)) {
    var s = (n || {})[t.name.value];
    r[e.value] = s;
  } else if (Pa(t))
    r[e.value] = t.values.map(function(o) {
      var a = {};
      return Pe(a, e, o, n), a[e.value];
    });
  else if (La(t))
    r[e.value] = t.value;
  else if (Ma(t))
    r[e.value] = null;
  else
    throw $(84, e.value, t.kind);
}
function qa(r, e) {
  var t = null;
  r.directives && (t = {}, r.directives.forEach(function(i) {
    t[i.name.value] = {}, i.arguments && i.arguments.forEach(function(s) {
      var o = s.name, a = s.value;
      return Pe(t[i.name.value], o, a, e);
    });
  }));
  var n = null;
  return r.arguments && r.arguments.length && (n = {}, r.arguments.forEach(function(i) {
    var s = i.name, o = i.value;
    return Pe(n, s, o, e);
  })), ns(r.name.value, n, t);
}
var Va = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], ze = le, ns = Object.assign(function(r, e, t) {
  if (e && t && t.connection && t.connection.key)
    if (t.connection.filter && t.connection.filter.length > 0) {
      var n = t.connection.filter ? t.connection.filter : [];
      n.sort();
      var i = {};
      return n.forEach(function(a) {
        i[a] = e[a];
      }), "".concat(t.connection.key, "(").concat(ze(i), ")");
    } else
      return t.connection.key;
  var s = r;
  if (e) {
    var o = ze(e);
    s += "(".concat(o, ")");
  }
  return t && Object.keys(t).forEach(function(a) {
    Va.indexOf(a) === -1 && (t[a] && Object.keys(t[a]).length ? s += "@".concat(a, "(").concat(ze(t[a]), ")") : s += "@".concat(a));
  }), s;
}, {
  setStringify: function(r) {
    var e = ze;
    return ze = r, e;
  }
});
function Bt(r, e) {
  if (r.arguments && r.arguments.length) {
    var t = {};
    return r.arguments.forEach(function(n) {
      var i = n.name, s = n.value;
      return Pe(t, i, s, e);
    }), t;
  }
  return null;
}
function he(r) {
  return r.alias ? r.alias.value : r.name.value;
}
function Or(r, e, t) {
  for (var n, i = 0, s = e.selections; i < s.length; i++) {
    var o = s[i];
    if (pe(o)) {
      if (o.name.value === "__typename")
        return r[he(o)];
    } else n ? n.push(o) : n = [o];
  }
  if (typeof r.__typename == "string")
    return r.__typename;
  if (n)
    for (var a = 0, c = n; a < c.length; a++) {
      var o = c[a], u = Or(r, Vt(o, t).selectionSet, t);
      if (typeof u == "string")
        return u;
    }
}
function pe(r) {
  return r.kind === "Field";
}
function Ba(r) {
  return r.kind === "InlineFragment";
}
function ft(r) {
  D(r && r.kind === "Document", 76);
  var e = r.definitions.filter(function(t) {
    return t.kind !== "FragmentDefinition";
  }).map(function(t) {
    if (t.kind !== "OperationDefinition")
      throw $(77, t.kind);
    return t;
  });
  return D(e.length <= 1, 78, e.length), r;
}
function lt(r) {
  return ft(r), r.definitions.filter(function(e) {
    return e.kind === "OperationDefinition";
  })[0];
}
function _r(r) {
  return r.definitions.filter(function(e) {
    return e.kind === "OperationDefinition" && !!e.name;
  }).map(function(e) {
    return e.name.value;
  })[0] || null;
}
function jt(r) {
  return r.definitions.filter(function(e) {
    return e.kind === "FragmentDefinition";
  });
}
function is(r) {
  var e = lt(r);
  return D(e && e.operation === "query", 79), e;
}
function ja(r) {
  D(r.kind === "Document", 80), D(r.definitions.length <= 1, 81);
  var e = r.definitions[0];
  return D(e.kind === "FragmentDefinition", 82), e;
}
function ht(r) {
  ft(r);
  for (var e, t = 0, n = r.definitions; t < n.length; t++) {
    var i = n[t];
    if (i.kind === "OperationDefinition") {
      var s = i.operation;
      if (s === "query" || s === "mutation" || s === "subscription")
        return i;
    }
    i.kind === "FragmentDefinition" && !e && (e = i);
  }
  if (e)
    return e;
  throw $(83);
}
function Kr(r) {
  var e = /* @__PURE__ */ Object.create(null), t = r && r.variableDefinitions;
  return t && t.length && t.forEach(function(n) {
    n.defaultValue && Pe(e, n.variable.name, n.defaultValue);
  }), e;
}
const Qa = () => /* @__PURE__ */ Object.create(null), { forEach: Ua, slice: za } = Array.prototype, { hasOwnProperty: Wa } = Object.prototype;
class Xr {
  constructor(e = !0, t = Qa) {
    this.weakness = e, this.makeData = t;
  }
  lookup(...e) {
    return this.lookupArray(e);
  }
  lookupArray(e) {
    let t = this;
    return Ua.call(e, (n) => t = t.getChildTrie(n)), Wa.call(t, "data") ? t.data : t.data = this.makeData(za.call(e));
  }
  peek(...e) {
    return this.peekArray(e);
  }
  peekArray(e) {
    let t = this;
    for (let n = 0, i = e.length; t && n < i; ++n) {
      const s = this.weakness && Fn(e[n]) ? t.weak : t.strong;
      t = s && s.get(e[n]);
    }
    return t && t.data;
  }
  getChildTrie(e) {
    const t = this.weakness && Fn(e) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let n = t.get(e);
    return n || t.set(e, n = new Xr(this.weakness, this.makeData)), n;
  }
}
function Fn(r) {
  switch (typeof r) {
    case "object":
      if (r === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
let z = null;
const Pn = {};
let $a = 1;
const Ga = () => class {
  constructor() {
    this.id = [
      "slot",
      $a++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let e = z; e; e = e.parent)
      if (this.id in e.slots) {
        const t = e.slots[this.id];
        if (t === Pn)
          break;
        return e !== z && (z.slots[this.id] = t), !0;
      }
    return z && (z.slots[this.id] = Pn), !1;
  }
  getValue() {
    if (this.hasValue())
      return z.slots[this.id];
  }
  withValue(e, t, n, i) {
    const s = {
      __proto__: null,
      [this.id]: e
    }, o = z;
    z = { parent: o, slots: s };
    try {
      return t.apply(i, n);
    } finally {
      z = o;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(e) {
    const t = z;
    return function() {
      const n = z;
      try {
        return z = t, e.apply(this, arguments);
      } finally {
        z = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(e, t, n) {
    if (z) {
      const i = z;
      try {
        return z = null, e.apply(n, t);
      } finally {
        z = i;
      }
    } else
      return e.apply(n, t);
  }
};
function Ln(r) {
  try {
    return r();
  } catch {
  }
}
const Xt = "@wry/context:Slot", Ha = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Ln(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Ln(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), Mn = Ha, ss = Mn[Xt] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[Xt] || function(r) {
  try {
    Object.defineProperty(Mn, Xt, {
      value: r,
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
    return r;
  }
}(Ga()), Qt = new ss(), { hasOwnProperty: Ya } = Object.prototype, Zr = Array.from || function(r) {
  const e = [];
  return r.forEach((t) => e.push(t)), e;
};
function en(r) {
  const { unsubscribe: e } = r;
  typeof e == "function" && (r.unsubscribe = void 0, e());
}
const st = [], Ja = 100;
function Le(r, e) {
  if (!r)
    throw new Error(e || "assertion failure");
}
function os(r, e) {
  const t = r.length;
  return (
    // Unknown values are not equal to each other.
    t > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    t === e.length && // The underlying value or exception must be the same.
    r[t - 1] === e[t - 1]
  );
}
function as(r) {
  switch (r.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return r[0];
    case 2:
      throw r[1];
  }
}
function cs(r) {
  return r.slice(0);
}
class Ut {
  constructor(e) {
    this.fn = e, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++Ut.count;
  }
  peek() {
    if (this.value.length === 1 && !de(this))
      return qn(this), this.value[0];
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(e) {
    return Le(!this.recomputing, "already recomputing"), qn(this), de(this) ? Ka(this, e) : as(this.value);
  }
  setDirty() {
    this.dirty || (this.dirty = !0, us(this), en(this));
  }
  dispose() {
    this.setDirty(), ds(this), tn(this, (e, t) => {
      e.setDirty(), ys(e, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(e) {
    e.add(this), this.deps || (this.deps = st.pop() || /* @__PURE__ */ new Set()), this.deps.add(e);
  }
  forgetDeps() {
    this.deps && (Zr(this.deps).forEach((e) => e.delete(this)), this.deps.clear(), st.push(this.deps), this.deps = null);
  }
}
Ut.count = 0;
function qn(r) {
  const e = Qt.getValue();
  if (e)
    return r.parents.add(e), e.childValues.has(r) || e.childValues.set(r, []), de(r) ? ls(e, r) : hs(e, r), e;
}
function Ka(r, e) {
  return ds(r), Qt.withValue(r, Xa, [r, e]), ec(r, e) && Za(r), as(r.value);
}
function Xa(r, e) {
  r.recomputing = !0;
  const { normalizeResult: t } = r;
  let n;
  t && r.value.length === 1 && (n = cs(r.value)), r.value.length = 0;
  try {
    if (r.value[0] = r.fn.apply(null, e), t && n && !os(n, r.value))
      try {
        r.value[0] = t(r.value[0], n[0]);
      } catch {
      }
  } catch (i) {
    r.value[1] = i;
  }
  r.recomputing = !1;
}
function de(r) {
  return r.dirty || !!(r.dirtyChildren && r.dirtyChildren.size);
}
function Za(r) {
  r.dirty = !1, !de(r) && fs(r);
}
function us(r) {
  tn(r, ls);
}
function fs(r) {
  tn(r, hs);
}
function tn(r, e) {
  const t = r.parents.size;
  if (t) {
    const n = Zr(r.parents);
    for (let i = 0; i < t; ++i)
      e(n[i], r);
  }
}
function ls(r, e) {
  Le(r.childValues.has(e)), Le(de(e));
  const t = !de(r);
  if (!r.dirtyChildren)
    r.dirtyChildren = st.pop() || /* @__PURE__ */ new Set();
  else if (r.dirtyChildren.has(e))
    return;
  r.dirtyChildren.add(e), t && us(r);
}
function hs(r, e) {
  Le(r.childValues.has(e)), Le(!de(e));
  const t = r.childValues.get(e);
  t.length === 0 ? r.childValues.set(e, cs(e.value)) : os(t, e.value) || r.setDirty(), ps(r, e), !de(r) && fs(r);
}
function ps(r, e) {
  const t = r.dirtyChildren;
  t && (t.delete(e), t.size === 0 && (st.length < Ja && st.push(t), r.dirtyChildren = null));
}
function ds(r) {
  r.childValues.size > 0 && r.childValues.forEach((e, t) => {
    ys(r, t);
  }), r.forgetDeps(), Le(r.dirtyChildren === null);
}
function ys(r, e) {
  e.parents.delete(r), r.childValues.delete(e), ps(r, e);
}
function ec(r, e) {
  if (typeof r.subscribe == "function")
    try {
      en(r), r.unsubscribe = r.subscribe.apply(null, e);
    } catch {
      return r.setDirty(), !1;
    }
  return !0;
}
const tc = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function vs(r) {
  const e = /* @__PURE__ */ new Map();
  function t(n) {
    const i = Qt.getValue();
    if (i) {
      let s = e.get(n);
      s || e.set(n, s = /* @__PURE__ */ new Set()), i.dependOn(s);
    }
  }
  return t.dirty = function(i, s) {
    const o = e.get(i);
    if (o) {
      const a = s && Ya.call(tc, s) ? s : "setDirty";
      Zr(o).forEach((c) => c[a]()), e.delete(i), en(o);
    }
  }, t;
}
let Vn;
function rc(...r) {
  return (Vn || (Vn = new Xr(typeof WeakMap == "function"))).lookupArray(r);
}
const Zt = /* @__PURE__ */ new Set();
function ot(r, { max: e = Math.pow(2, 16), keyArgs: t, makeCacheKey: n = rc, normalizeResult: i, subscribe: s, cache: o = gr } = /* @__PURE__ */ Object.create(null)) {
  const a = typeof o == "function" ? new o(e, (l) => l.dispose()) : o, c = function() {
    const l = n.apply(null, t ? t.apply(null, arguments) : arguments);
    if (l === void 0)
      return r.apply(null, arguments);
    let p = a.get(l);
    p || (a.set(l, p = new Ut(r)), p.normalizeResult = i, p.subscribe = s, p.forget = () => a.delete(l));
    const v = p.recompute(Array.prototype.slice.call(arguments));
    return a.set(l, p), Zt.add(a), Qt.hasValue() || (Zt.forEach((m) => m.clean()), Zt.clear()), v;
  };
  Object.defineProperty(c, "size", {
    get: () => a.size,
    configurable: !1,
    enumerable: !1
  }), Object.freeze(c.options = {
    max: e,
    keyArgs: t,
    makeCacheKey: n,
    normalizeResult: i,
    subscribe: s,
    cache: a
  });
  function u(l) {
    const p = l && a.get(l);
    p && p.setDirty();
  }
  c.dirtyKey = u, c.dirty = function() {
    u(n.apply(null, arguments));
  };
  function f(l) {
    const p = l && a.get(l);
    if (p)
      return p.peek();
  }
  c.peekKey = f, c.peek = function() {
    return f(n.apply(null, arguments));
  };
  function h(l) {
    return l ? a.delete(l) : !1;
  }
  return c.forgetKey = h, c.forget = function() {
    return h(n.apply(null, arguments));
  }, c.makeCacheKey = n, c.getKey = t ? function() {
    return n.apply(null, t.apply(null, arguments));
  } : n, Object.freeze(c);
}
function nc(r) {
  return r;
}
var ms = (
  /** @class */
  function() {
    function r(e, t) {
      t === void 0 && (t = /* @__PURE__ */ Object.create(null)), this.resultCache = Yi ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = e, t.getCacheKey && (this.getCacheKey = t.getCacheKey), this.cached = t.cache !== !1, this.resetCache();
    }
    return r.prototype.getCacheKey = function(e) {
      return [e];
    }, r.identity = function() {
      return new r(nc, { cache: !1 });
    }, r.split = function(e, t, n) {
      return n === void 0 && (n = r.identity()), Object.assign(new r(
        function(i) {
          var s = e(i) ? t : n;
          return s.transformDocument(i);
        },
        // Reasonably assume both `left` and `right` transforms handle their own caching
        { cache: !1 }
      ), { left: t, right: n });
    }, r.prototype.resetCache = function() {
      var e = this;
      if (this.cached) {
        var t = new Be(je);
        this.performWork = ot(r.prototype.performWork.bind(this), {
          makeCacheKey: function(n) {
            var i = e.getCacheKey(n);
            if (i)
              return D(Array.isArray(i), 68), t.lookupArray(i);
          },
          max: se["documentTransform.cache"],
          cache: Ct
        });
      }
    }, r.prototype.performWork = function(e) {
      return ft(e), this.transform(e);
    }, r.prototype.transformDocument = function(e) {
      if (this.resultCache.has(e))
        return e;
      var t = this.performWork(e);
      return this.resultCache.add(t), t;
    }, r.prototype.concat = function(e) {
      var t = this;
      return Object.assign(new r(
        function(n) {
          return e.transformDocument(t.transformDocument(n));
        },
        // Reasonably assume both transforms handle their own caching
        { cache: !1 }
      ), {
        left: this,
        right: e
      });
    }, r;
  }()
), Xe, zt = Object.assign(function(r) {
  var e = Xe.get(r);
  return e || (e = Zo(r), Xe.set(r, e)), e;
}, {
  reset: function() {
    Xe = new Xi(
      se.print || 2e3
      /* defaultCacheSizes.print */
    );
  }
});
zt.reset();
globalThis.__DEV__ !== !1 && Zi("print", function() {
  return Xe ? Xe.size : 0;
});
var V = Array.isArray;
function ee(r) {
  return Array.isArray(r) && r.length > 0;
}
var Bn = {
  kind: T.FIELD,
  name: {
    kind: T.NAME,
    value: "__typename"
  }
};
function gs(r, e) {
  return !r || r.selectionSet.selections.every(function(t) {
    return t.kind === T.FRAGMENT_SPREAD && gs(e[t.name.value], e);
  });
}
function ic(r) {
  return gs(lt(r) || ja(r), qt(jt(r))) ? null : r;
}
function sc(r) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return r.forEach(function(n) {
    n && (n.name ? e.set(n.name, n) : n.test && t.set(n.test, n));
  }), function(n) {
    var i = e.get(n.name.value);
    return !i && t.size && t.forEach(function(s, o) {
      o(n) && (i = s);
    }), i;
  };
}
function jn(r) {
  var e = /* @__PURE__ */ new Map();
  return function(n) {
    n === void 0 && (n = r);
    var i = e.get(n);
    return i || e.set(n, i = {
      // Variable and fragment spread names used directly within this
      // operation or fragment definition, as identified by key. These sets
      // will be populated during the first traversal of the document in
      // removeDirectivesFromDocument below.
      variables: /* @__PURE__ */ new Set(),
      fragmentSpreads: /* @__PURE__ */ new Set()
    }), i;
  };
}
function bs(r, e) {
  ft(e);
  for (var t = jn(""), n = jn(""), i = function(y) {
    for (var w = 0, g = void 0; w < y.length && (g = y[w]); ++w)
      if (!V(g)) {
        if (g.kind === T.OPERATION_DEFINITION)
          return t(g.name && g.name.value);
        if (g.kind === T.FRAGMENT_DEFINITION)
          return n(g.name.value);
      }
    return globalThis.__DEV__ !== !1 && D.error(85), null;
  }, s = 0, o = e.definitions.length - 1; o >= 0; --o)
    e.definitions[o].kind === T.OPERATION_DEFINITION && ++s;
  var a = sc(r), c = function(y) {
    return ee(y) && y.map(a).some(function(w) {
      return w && w.remove;
    });
  }, u = /* @__PURE__ */ new Map(), f = !1, h = {
    enter: function(y) {
      if (c(y.directives))
        return f = !0, null;
    }
  }, l = ie(e, {
    // These two AST node types share the same implementation, defined above.
    Field: h,
    InlineFragment: h,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(y, w, g, _, O) {
        var k = i(O);
        k && k.variables.add(y.name.value);
      }
    },
    FragmentSpread: {
      enter: function(y, w, g, _, O) {
        if (c(y.directives))
          return f = !0, null;
        var k = i(O);
        k && k.fragmentSpreads.add(y.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(y, w, g, _) {
        u.set(JSON.stringify(_), y);
      },
      leave: function(y, w, g, _) {
        var O = u.get(JSON.stringify(_));
        if (y === O)
          return y;
        if (
          // This logic applies only if the document contains one or more
          // operations, since removing all fragments from a document containing
          // only fragments makes the document useless.
          s > 0 && y.selectionSet.selections.every(function(k) {
            return k.kind === T.FIELD && k.name.value === "__typename";
          })
        )
          return n(y.name.value).removed = !0, f = !0, null;
      }
    },
    Directive: {
      leave: function(y) {
        if (a(y))
          return f = !0, null;
      }
    }
  });
  if (!f)
    return e;
  var p = function(y) {
    return y.transitiveVars || (y.transitiveVars = new Set(y.variables), y.removed || y.fragmentSpreads.forEach(function(w) {
      p(n(w)).transitiveVars.forEach(function(g) {
        y.transitiveVars.add(g);
      });
    })), y;
  }, v = /* @__PURE__ */ new Set();
  l.definitions.forEach(function(y) {
    y.kind === T.OPERATION_DEFINITION ? p(t(y.name && y.name.value)).fragmentSpreads.forEach(function(w) {
      v.add(w);
    }) : y.kind === T.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
    // definitions count as usages of their own fragment names. This heuristic
    // prevents accidentally removing all fragment definitions from the
    // document just because it contains no operations that use the fragments.
    s === 0 && !n(y.name.value).removed && v.add(y.name.value);
  }), v.forEach(function(y) {
    p(n(y)).fragmentSpreads.forEach(function(w) {
      v.add(w);
    });
  });
  var m = function(y) {
    return !!// A fragment definition will be removed if there are no spreads that refer
    // to it, or the fragment was explicitly removed because it had no fields
    // other than __typename.
    (!v.has(y) || n(y).removed);
  }, E = {
    enter: function(y) {
      if (m(y.name.value))
        return null;
    }
  };
  return ic(ie(l, {
    // If the fragment is going to be removed, then leaving any dangling
    // FragmentSpread nodes with the same name would be a mistake.
    FragmentSpread: E,
    // This is where the fragment definition is actually removed.
    FragmentDefinition: E,
    OperationDefinition: {
      leave: function(y) {
        if (y.variableDefinitions) {
          var w = p(
            // If an operation is anonymous, we use the empty string as its key.
            t(y.name && y.name.value)
          ).transitiveVars;
          if (w.size < y.variableDefinitions.length)
            return d(d({}, y), { variableDefinitions: y.variableDefinitions.filter(function(g) {
              return w.has(g.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var rn = Object.assign(function(r) {
  return ie(r, {
    SelectionSet: {
      enter: function(e, t, n) {
        if (!(n && n.kind === T.OPERATION_DEFINITION)) {
          var i = e.selections;
          if (i) {
            var s = i.some(function(a) {
              return pe(a) && (a.name.value === "__typename" || a.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!s) {
              var o = n;
              if (!(pe(o) && o.directives && o.directives.some(function(a) {
                return a.name.value === "export";
              })))
                return d(d({}, e), { selections: G(G([], i, !0), [Bn], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(r) {
    return r === Bn;
  }
});
function oc(r) {
  var e = ht(r), t = e.operation;
  if (t === "query")
    return r;
  var n = ie(r, {
    OperationDefinition: {
      enter: function(i) {
        return d(d({}, i), { operation: "query" });
      }
    }
  });
  return n;
}
function Es(r) {
  ft(r);
  var e = bs([
    {
      test: function(t) {
        return t.name.value === "client";
      },
      remove: !0
    }
  ], r);
  return e;
}
var ac = Object.prototype.hasOwnProperty;
function Qn() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r[e] = arguments[e];
  return Wt(r);
}
function Wt(r) {
  var e = r[0] || {}, t = r.length;
  if (t > 1)
    for (var n = new ye(), i = 1; i < t; ++i)
      e = n.merge(e, r[i]);
  return e;
}
var cc = function(r, e, t) {
  return this.merge(r[t], e[t]);
}, ye = (
  /** @class */
  function() {
    function r(e) {
      e === void 0 && (e = cc), this.reconciler = e, this.isObject = q, this.pastCopies = /* @__PURE__ */ new Set();
    }
    return r.prototype.merge = function(e, t) {
      for (var n = this, i = [], s = 2; s < arguments.length; s++)
        i[s - 2] = arguments[s];
      return q(t) && q(e) ? (Object.keys(t).forEach(function(o) {
        if (ac.call(e, o)) {
          var a = e[o];
          if (t[o] !== a) {
            var c = n.reconciler.apply(n, G([
              e,
              t,
              o
            ], i, !1));
            c !== a && (e = n.shallowCopyForMerge(e), e[o] = c);
          }
        } else
          e = n.shallowCopyForMerge(e), e[o] = t[o];
      }), e) : t;
    }, r.prototype.shallowCopyForMerge = function(e) {
      return q(e) && (this.pastCopies.has(e) || (Array.isArray(e) ? e = e.slice(0) : e = d({ __proto__: Object.getPrototypeOf(e) }, e), this.pastCopies.add(e))), e;
    }, r;
  }()
);
function uc(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = fc(r)) || e) {
    t && (r = t);
    var n = 0;
    return function() {
      return n >= r.length ? { done: !0 } : { done: !1, value: r[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fc(r, e) {
  if (r) {
    if (typeof r == "string") return Un(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Un(r, e);
  }
}
function Un(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++)
    n[t] = r[t];
  return n;
}
function zn(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
  }
}
function nn(r, e, t) {
  return e && zn(r.prototype, e), t && zn(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
var sn = function() {
  return typeof Symbol == "function";
}, on = function(r) {
  return sn() && !!Symbol[r];
}, an = function(r) {
  return on(r) ? Symbol[r] : "@@" + r;
};
sn() && !on("observable") && (Symbol.observable = Symbol("observable"));
var lc = an("iterator"), Tr = an("observable"), ws = an("species");
function At(r, e) {
  var t = r[e];
  if (t != null) {
    if (typeof t != "function") throw new TypeError(t + " is not a function");
    return t;
  }
}
function We(r) {
  var e = r.constructor;
  return e !== void 0 && (e = e[ws], e === null && (e = void 0)), e !== void 0 ? e : P;
}
function hc(r) {
  return r instanceof P;
}
function Me(r) {
  Me.log ? Me.log(r) : setTimeout(function() {
    throw r;
  });
}
function Tt(r) {
  Promise.resolve().then(function() {
    try {
      r();
    } catch (e) {
      Me(e);
    }
  });
}
function Os(r) {
  var e = r._cleanup;
  if (e !== void 0 && (r._cleanup = void 0, !!e))
    try {
      if (typeof e == "function")
        e();
      else {
        var t = At(e, "unsubscribe");
        t && t.call(e);
      }
    } catch (n) {
      Me(n);
    }
}
function Sr(r) {
  r._observer = void 0, r._queue = void 0, r._state = "closed";
}
function pc(r) {
  var e = r._queue;
  if (e) {
    r._queue = void 0, r._state = "ready";
    for (var t = 0; t < e.length && (_s(r, e[t].type, e[t].value), r._state !== "closed"); ++t)
      ;
  }
}
function _s(r, e, t) {
  r._state = "running";
  var n = r._observer;
  try {
    var i = At(n, e);
    switch (e) {
      case "next":
        i && i.call(n, t);
        break;
      case "error":
        if (Sr(r), i) i.call(n, t);
        else throw t;
        break;
      case "complete":
        Sr(r), i && i.call(n);
        break;
    }
  } catch (s) {
    Me(s);
  }
  r._state === "closed" ? Os(r) : r._state === "running" && (r._state = "ready");
}
function er(r, e, t) {
  if (r._state !== "closed") {
    if (r._state === "buffering") {
      r._queue.push({
        type: e,
        value: t
      });
      return;
    }
    if (r._state !== "ready") {
      r._state = "buffering", r._queue = [{
        type: e,
        value: t
      }], Tt(function() {
        return pc(r);
      });
      return;
    }
    _s(r, e, t);
  }
}
var dc = /* @__PURE__ */ function() {
  function r(t, n) {
    this._cleanup = void 0, this._observer = t, this._queue = void 0, this._state = "initializing";
    var i = new yc(this);
    try {
      this._cleanup = n.call(void 0, i);
    } catch (s) {
      i.error(s);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var e = r.prototype;
  return e.unsubscribe = function() {
    this._state !== "closed" && (Sr(this), Os(this));
  }, nn(r, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), r;
}(), yc = /* @__PURE__ */ function() {
  function r(t) {
    this._subscription = t;
  }
  var e = r.prototype;
  return e.next = function(n) {
    er(this._subscription, "next", n);
  }, e.error = function(n) {
    er(this._subscription, "error", n);
  }, e.complete = function() {
    er(this._subscription, "complete");
  }, nn(r, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), r;
}(), P = /* @__PURE__ */ function() {
  function r(t) {
    if (!(this instanceof r)) throw new TypeError("Observable cannot be called as a function");
    if (typeof t != "function") throw new TypeError("Observable initializer must be a function");
    this._subscriber = t;
  }
  var e = r.prototype;
  return e.subscribe = function(n) {
    return (typeof n != "object" || n === null) && (n = {
      next: n,
      error: arguments[1],
      complete: arguments[2]
    }), new dc(n, this._subscriber);
  }, e.forEach = function(n) {
    var i = this;
    return new Promise(function(s, o) {
      if (typeof n != "function") {
        o(new TypeError(n + " is not a function"));
        return;
      }
      function a() {
        c.unsubscribe(), s();
      }
      var c = i.subscribe({
        next: function(u) {
          try {
            n(u, a);
          } catch (f) {
            o(f), c.unsubscribe();
          }
        },
        error: o,
        complete: s
      });
    });
  }, e.map = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var s = We(this);
    return new s(function(o) {
      return i.subscribe({
        next: function(a) {
          try {
            a = n(a);
          } catch (c) {
            return o.error(c);
          }
          o.next(a);
        },
        error: function(a) {
          o.error(a);
        },
        complete: function() {
          o.complete();
        }
      });
    });
  }, e.filter = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var s = We(this);
    return new s(function(o) {
      return i.subscribe({
        next: function(a) {
          try {
            if (!n(a)) return;
          } catch (c) {
            return o.error(c);
          }
          o.next(a);
        },
        error: function(a) {
          o.error(a);
        },
        complete: function() {
          o.complete();
        }
      });
    });
  }, e.reduce = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var s = We(this), o = arguments.length > 1, a = !1, c = arguments[1], u = c;
    return new s(function(f) {
      return i.subscribe({
        next: function(h) {
          var l = !a;
          if (a = !0, !l || o)
            try {
              u = n(u, h);
            } catch (p) {
              return f.error(p);
            }
          else
            u = h;
        },
        error: function(h) {
          f.error(h);
        },
        complete: function() {
          if (!a && !o) return f.error(new TypeError("Cannot reduce an empty sequence"));
          f.next(u), f.complete();
        }
      });
    });
  }, e.concat = function() {
    for (var n = this, i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    var a = We(this);
    return new a(function(c) {
      var u, f = 0;
      function h(l) {
        u = l.subscribe({
          next: function(p) {
            c.next(p);
          },
          error: function(p) {
            c.error(p);
          },
          complete: function() {
            f === s.length ? (u = void 0, c.complete()) : h(a.from(s[f++]));
          }
        });
      }
      return h(n), function() {
        u && (u.unsubscribe(), u = void 0);
      };
    });
  }, e.flatMap = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var s = We(this);
    return new s(function(o) {
      var a = [], c = i.subscribe({
        next: function(f) {
          if (n)
            try {
              f = n(f);
            } catch (l) {
              return o.error(l);
            }
          var h = s.from(f).subscribe({
            next: function(l) {
              o.next(l);
            },
            error: function(l) {
              o.error(l);
            },
            complete: function() {
              var l = a.indexOf(h);
              l >= 0 && a.splice(l, 1), u();
            }
          });
          a.push(h);
        },
        error: function(f) {
          o.error(f);
        },
        complete: function() {
          u();
        }
      });
      function u() {
        c.closed && a.length === 0 && o.complete();
      }
      return function() {
        a.forEach(function(f) {
          return f.unsubscribe();
        }), c.unsubscribe();
      };
    });
  }, e[Tr] = function() {
    return this;
  }, r.from = function(n) {
    var i = typeof this == "function" ? this : r;
    if (n == null) throw new TypeError(n + " is not an object");
    var s = At(n, Tr);
    if (s) {
      var o = s.call(n);
      if (Object(o) !== o) throw new TypeError(o + " is not an object");
      return hc(o) && o.constructor === i ? o : new i(function(a) {
        return o.subscribe(a);
      });
    }
    if (on("iterator") && (s = At(n, lc), s))
      return new i(function(a) {
        Tt(function() {
          if (!a.closed) {
            for (var c = uc(s.call(n)), u; !(u = c()).done; ) {
              var f = u.value;
              if (a.next(f), a.closed) return;
            }
            a.complete();
          }
        });
      });
    if (Array.isArray(n))
      return new i(function(a) {
        Tt(function() {
          if (!a.closed) {
            for (var c = 0; c < n.length; ++c)
              if (a.next(n[c]), a.closed) return;
            a.complete();
          }
        });
      });
    throw new TypeError(n + " is not observable");
  }, r.of = function() {
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    var o = typeof this == "function" ? this : r;
    return new o(function(a) {
      Tt(function() {
        if (!a.closed) {
          for (var c = 0; c < i.length; ++c)
            if (a.next(i[c]), a.closed) return;
          a.complete();
        }
      });
    });
  }, nn(r, null, [{
    key: ws,
    get: function() {
      return this;
    }
  }]), r;
}();
sn() && Object.defineProperty(P, Symbol("extensions"), {
  value: {
    symbol: Tr,
    hostReportError: Me
  },
  configurable: !0
});
function vc(r) {
  var e, t = r.Symbol;
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
var Se;
typeof self < "u" ? Se = self : typeof window < "u" ? Se = window : typeof global < "u" ? Se = global : typeof module < "u" ? Se = module : Se = Function("return this")();
vc(Se);
var Wn = P.prototype, $n = "@@observable";
Wn[$n] || (Wn[$n] = function() {
  return this;
});
var mc = Object.prototype.toString;
function Ts(r) {
  return kr(r);
}
function kr(r, e) {
  switch (mc.call(r)) {
    case "[object Array]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(r))
        return e.get(r);
      var t = r.slice(0);
      return e.set(r, t), t.forEach(function(i, s) {
        t[s] = kr(i, e);
      }), t;
    }
    case "[object Object]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(r))
        return e.get(r);
      var n = Object.create(Object.getPrototypeOf(r));
      return e.set(r, n), Object.keys(r).forEach(function(i) {
        n[i] = kr(r[i], e);
      }), n;
    }
    default:
      return r;
  }
}
function gc(r) {
  var e = /* @__PURE__ */ new Set([r]);
  return e.forEach(function(t) {
    q(t) && bc(t) === t && Object.getOwnPropertyNames(t).forEach(function(n) {
      q(t[n]) && e.add(t[n]);
    });
  }), r;
}
function bc(r) {
  if (globalThis.__DEV__ !== !1 && !Object.isFrozen(r))
    try {
      Object.freeze(r);
    } catch (e) {
      if (e instanceof TypeError)
        return null;
      throw e;
    }
  return r;
}
function Dr(r) {
  return globalThis.__DEV__ !== !1 && gc(r), r;
}
function Ze(r, e, t) {
  var n = [];
  r.forEach(function(i) {
    return i[e] && n.push(i);
  }), n.forEach(function(i) {
    return i[e](t);
  });
}
function tr(r, e, t) {
  return new P(function(n) {
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
      return function(f) {
        if (c) {
          var h = function() {
            return n.closed ? (
              /* will be swallowed */
              0
            ) : c(f);
          };
          i = i.then(h, h).then(function(l) {
            return n.next(l);
          }, function(l) {
            return n.error(l);
          });
        } else
          n[u](f);
      };
    }
    var o = {
      next: s(e, "next"),
      error: s(t, "error"),
      complete: function() {
        i.then(function() {
          return n.complete();
        });
      }
    }, a = r.subscribe(o);
    return function() {
      return a.unsubscribe();
    };
  });
}
function Ss(r) {
  function e(t) {
    Object.defineProperty(r, t, { value: P });
  }
  return Ji && Symbol.species && e(Symbol.species), e("@@species"), r;
}
function Gn(r) {
  return r && typeof r.then == "function";
}
var ke = (
  /** @class */
  function(r) {
    re(e, r);
    function e(t) {
      var n = r.call(this, function(i) {
        return n.addObserver(i), function() {
          return n.removeObserver(i);
        };
      }) || this;
      return n.observers = /* @__PURE__ */ new Set(), n.promise = new Promise(function(i, s) {
        n.resolve = i, n.reject = s;
      }), n.handlers = {
        next: function(i) {
          n.sub !== null && (n.latest = ["next", i], n.notify("next", i), Ze(n.observers, "next", i));
        },
        error: function(i) {
          var s = n.sub;
          s !== null && (s && setTimeout(function() {
            return s.unsubscribe();
          }), n.sub = null, n.latest = ["error", i], n.reject(i), n.notify("error", i), Ze(n.observers, "error", i));
        },
        complete: function() {
          var i = n, s = i.sub, o = i.sources, a = o === void 0 ? [] : o;
          if (s !== null) {
            var c = a.shift();
            c ? Gn(c) ? c.then(function(u) {
              return n.sub = u.subscribe(n.handlers);
            }, n.handlers.error) : n.sub = c.subscribe(n.handlers) : (s && setTimeout(function() {
              return s.unsubscribe();
            }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), Ze(n.observers, "complete"));
          }
        }
      }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(i) {
        n.reject(i), n.sources = [], n.handlers.complete();
      }, n.promise.catch(function(i) {
      }), typeof t == "function" && (t = [new P(t)]), Gn(t) ? t.then(function(i) {
        return n.start(i);
      }, n.handlers.error) : n.start(t), n;
    }
    return e.prototype.start = function(t) {
      this.sub === void 0 && (this.sources = Array.from(t), this.handlers.complete());
    }, e.prototype.deliverLastMessage = function(t) {
      if (this.latest) {
        var n = this.latest[0], i = t[n];
        i && i.call(t, this.latest[1]), this.sub === null && n === "next" && t.complete && t.complete();
      }
    }, e.prototype.addObserver = function(t) {
      this.observers.has(t) || (this.deliverLastMessage(t), this.observers.add(t));
    }, e.prototype.removeObserver = function(t) {
      this.observers.delete(t) && this.observers.size < 1 && this.handlers.complete();
    }, e.prototype.notify = function(t, n) {
      var i = this.nextResultListeners;
      i.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), i.forEach(function(s) {
        return s(t, n);
      }));
    }, e.prototype.beforeNext = function(t) {
      var n = !1;
      this.nextResultListeners.add(function(i, s) {
        n || (n = !0, t(i, s));
      });
    }, e;
  }(P)
);
Ss(ke);
function Re(r) {
  return "incremental" in r;
}
function Ec(r) {
  return "hasNext" in r && "data" in r;
}
function wc(r) {
  return Re(r) || Ec(r);
}
function Oc(r) {
  return q(r) && "payload" in r;
}
function ks(r, e) {
  var t = r, n = new ye();
  return Re(e) && ee(e.incremental) && e.incremental.forEach(function(i) {
    for (var s = i.data, o = i.path, a = o.length - 1; a >= 0; --a) {
      var c = o[a], u = !isNaN(+c), f = u ? [] : {};
      f[c] = s, s = f;
    }
    t = n.merge(t, s);
  }), t;
}
function St(r) {
  var e = xr(r);
  return ee(e);
}
function xr(r) {
  var e = ee(r.errors) ? r.errors.slice(0) : [];
  return Re(r) && ee(r.incremental) && r.incremental.forEach(function(t) {
    t.errors && e.push.apply(e, t.errors);
  }), e;
}
function qe() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r[e] = arguments[e];
  var t = /* @__PURE__ */ Object.create(null);
  return r.forEach(function(n) {
    n && Object.keys(n).forEach(function(i) {
      var s = n[i];
      s !== void 0 && (t[i] = s);
    });
  }), t;
}
function rr(r, e) {
  return qe(r, e, e.variables && {
    variables: qe(d(d({}, r && r.variables), e.variables))
  });
}
function nr(r) {
  return new P(function(e) {
    e.error(r);
  });
}
var Ds = function(r, e, t) {
  var n = new Error(t);
  throw n.name = "ServerError", n.response = r, n.statusCode = r.status, n.result = e, n;
};
function _c(r) {
  for (var e = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], t = 0, n = Object.keys(r); t < n.length; t++) {
    var i = n[t];
    if (e.indexOf(i) < 0)
      throw $(43, i);
  }
  return r;
}
function Tc(r, e) {
  var t = d({}, r), n = function(s) {
    typeof s == "function" ? t = d(d({}, t), s(t)) : t = d(d({}, t), s);
  }, i = function() {
    return d({}, t);
  };
  return Object.defineProperty(e, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(e, "getContext", {
    enumerable: !1,
    value: i
  }), e;
}
function Sc(r) {
  var e = {
    variables: r.variables || {},
    extensions: r.extensions || {},
    operationName: r.operationName,
    query: r.query
  };
  return e.operationName || (e.operationName = typeof e.query != "string" ? _r(e.query) || void 0 : ""), e;
}
function kc(r, e) {
  var t = d({}, r), n = new Set(Object.keys(r));
  return ie(e, {
    Variable: function(i, s, o) {
      o && o.kind !== "VariableDefinition" && n.delete(i.name.value);
    }
  }), n.forEach(function(i) {
    delete t[i];
  }), t;
}
function Hn(r, e) {
  return e ? e(r) : P.of();
}
function $e(r) {
  return typeof r == "function" ? new pt(r) : r;
}
function mt(r) {
  return r.request.length <= 1;
}
var pt = (
  /** @class */
  function() {
    function r(e) {
      e && (this.request = e);
    }
    return r.empty = function() {
      return new r(function() {
        return P.of();
      });
    }, r.from = function(e) {
      return e.length === 0 ? r.empty() : e.map($e).reduce(function(t, n) {
        return t.concat(n);
      });
    }, r.split = function(e, t, n) {
      var i = $e(t), s = $e(n || new r(Hn)), o;
      return mt(i) && mt(s) ? o = new r(function(a) {
        return e(a) ? i.request(a) || P.of() : s.request(a) || P.of();
      }) : o = new r(function(a, c) {
        return e(a) ? i.request(a, c) || P.of() : s.request(a, c) || P.of();
      }), Object.assign(o, { left: i, right: s });
    }, r.execute = function(e, t) {
      return e.request(Tc(t.context, Sc(_c(t)))) || P.of();
    }, r.concat = function(e, t) {
      var n = $e(e);
      if (mt(n))
        return globalThis.__DEV__ !== !1 && D.warn(35, n), n;
      var i = $e(t), s;
      return mt(i) ? s = new r(function(o) {
        return n.request(o, function(a) {
          return i.request(a) || P.of();
        }) || P.of();
      }) : s = new r(function(o, a) {
        return n.request(o, function(c) {
          return i.request(c, a) || P.of();
        }) || P.of();
      }), Object.assign(s, { left: n, right: i });
    }, r.prototype.split = function(e, t, n) {
      return this.concat(r.split(e, t, n || new r(Hn)));
    }, r.prototype.concat = function(e) {
      return r.concat(this, e);
    }, r.prototype.request = function(e, t) {
      throw $(36);
    }, r.prototype.onError = function(e, t) {
      if (t && t.error)
        return t.error(e), !1;
      throw e;
    }, r.prototype.setOnError = function(e) {
      return this.onError = e, this;
    }, r;
  }()
), Nr = pt.execute;
function Dc(r) {
  var e, t = r[Symbol.asyncIterator]();
  return e = {
    next: function() {
      return t.next();
    }
  }, e[Symbol.asyncIterator] = function() {
    return this;
  }, e;
}
function xc(r) {
  var e = null, t = null, n = !1, i = [], s = [];
  function o(h) {
    if (!t) {
      if (s.length) {
        var l = s.shift();
        if (Array.isArray(l) && l[0])
          return l[0]({ value: h, done: !1 });
      }
      i.push(h);
    }
  }
  function a(h) {
    t = h;
    var l = s.slice();
    l.forEach(function(p) {
      p[1](h);
    }), !e || e();
  }
  function c() {
    n = !0;
    var h = s.slice();
    h.forEach(function(l) {
      l[0]({ value: void 0, done: !0 });
    }), !e || e();
  }
  e = function() {
    e = null, r.removeListener("data", o), r.removeListener("error", a), r.removeListener("end", c), r.removeListener("finish", c), r.removeListener("close", c);
  }, r.on("data", o), r.on("error", a), r.on("end", c), r.on("finish", c), r.on("close", c);
  function u() {
    return new Promise(function(h, l) {
      if (t)
        return l(t);
      if (i.length)
        return h({ value: i.shift(), done: !1 });
      if (n)
        return h({ value: void 0, done: !0 });
      s.push([h, l]);
    });
  }
  var f = {
    next: function() {
      return u();
    }
  };
  return Mt && (f[Symbol.asyncIterator] = function() {
    return this;
  }), f;
}
function Nc(r) {
  var e = !1, t = {
    next: function() {
      return e ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (e = !0, new Promise(function(n, i) {
        r.then(function(s) {
          n({ value: s, done: !1 });
        }).catch(i);
      }));
    }
  };
  return Mt && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function Yn(r) {
  var e = {
    next: function() {
      return r.read();
    }
  };
  return Mt && (e[Symbol.asyncIterator] = function() {
    return this;
  }), e;
}
function Ic(r) {
  return !!r.body;
}
function Cc(r) {
  return !!r.getReader;
}
function Ac(r) {
  return !!(Mt && r[Symbol.asyncIterator]);
}
function Rc(r) {
  return !!r.stream;
}
function Fc(r) {
  return !!r.arrayBuffer;
}
function Pc(r) {
  return !!r.pipe;
}
function Lc(r) {
  var e = r;
  if (Ic(r) && (e = r.body), Ac(e))
    return Dc(e);
  if (Cc(e))
    return Yn(e.getReader());
  if (Rc(e))
    return Yn(e.stream().getReader());
  if (Fc(e))
    return Nc(e.arrayBuffer());
  if (Pc(e))
    return xc(e);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var cn = Symbol();
function Mc(r) {
  return r.extensions ? Array.isArray(r.extensions[cn]) : !1;
}
function qc(r) {
  return r.hasOwnProperty("graphQLErrors");
}
var Vc = function(r) {
  var e = G(G(G([], r.graphQLErrors, !0), r.clientErrors, !0), r.protocolErrors, !0);
  return r.networkError && e.push(r.networkError), e.map(function(t) {
    return q(t) && t.message || "Error message not found.";
  }).join(`
`);
}, Te = (
  /** @class */
  function(r) {
    re(e, r);
    function e(t) {
      var n = t.graphQLErrors, i = t.protocolErrors, s = t.clientErrors, o = t.networkError, a = t.errorMessage, c = t.extraInfo, u = r.call(this, a) || this;
      return u.name = "ApolloError", u.graphQLErrors = n || [], u.protocolErrors = i || [], u.clientErrors = s || [], u.networkError = o || null, u.message = a || Vc(u), u.extraInfo = c, u.cause = G(G(G([
        o
      ], n || [], !0), i || [], !0), s || [], !0).find(function(f) {
        return !!f;
      }) || null, u.__proto__ = e.prototype, u;
    }
    return e;
  }(Error)
), Jn = Object.prototype.hasOwnProperty;
function Bc(r, e) {
  return ce(this, void 0, void 0, function() {
    var t, n, i, s, o, a, c, u, f, h, l, p, v, m, E, y, w, g, _, O, k, x, N, F;
    return ue(this, function(M) {
      switch (M.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          t = new TextDecoder("utf-8"), n = (F = r.headers) === null || F === void 0 ? void 0 : F.get("content-type"), i = "boundary=", s = n != null && n.includes(i) ? n == null ? void 0 : n.substring((n == null ? void 0 : n.indexOf(i)) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", o = `\r
--`.concat(s), a = "", c = Lc(r), u = !0, M.label = 1;
        case 1:
          return u ? [4, c.next()] : [3, 3];
        case 2:
          for (f = M.sent(), h = f.value, l = f.done, p = typeof h == "string" ? h : t.decode(h), v = a.length - o.length + 1, u = !l, a += p, m = a.indexOf(o, v); m > -1; ) {
            if (E = void 0, x = [
              a.slice(0, m),
              a.slice(m + o.length)
            ], E = x[0], a = x[1], y = E.indexOf(`\r
\r
`), w = jc(E.slice(0, y)), g = w["content-type"], g && g.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (_ = E.slice(y), _) {
              if (O = xs(r, _), Object.keys(O).length > 1 || "data" in O || "incremental" in O || "errors" in O || "payload" in O)
                if (Oc(O)) {
                  if (k = {}, "payload" in O) {
                    if (Object.keys(O).length === 1 && O.payload === null)
                      return [
                        2
                        /*return*/
                      ];
                    k = d({}, O.payload);
                  }
                  "errors" in O && (k = d(d({}, k), { extensions: d(d({}, "extensions" in k ? k.extensions : null), (N = {}, N[cn] = O.errors, N)) })), e(k);
                } else
                  e(O);
              else if (
                // If the chunk contains only a "hasNext: false", we can call
                // observer.complete() immediately.
                Object.keys(O).length === 1 && "hasNext" in O && !O.hasNext
              )
                return [
                  2
                  /*return*/
                ];
            }
            m = a.indexOf(o);
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
function jc(r) {
  var e = {};
  return r.split(`
`).forEach(function(t) {
    var n = t.indexOf(":");
    if (n > -1) {
      var i = t.slice(0, n).trim().toLowerCase(), s = t.slice(n + 1).trim();
      e[i] = s;
    }
  }), e;
}
function xs(r, e) {
  if (r.status >= 300) {
    var t = function() {
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    };
    Ds(r, t(), "Response not successful: Received status code ".concat(r.status));
  }
  try {
    return JSON.parse(e);
  } catch (i) {
    var n = i;
    throw n.name = "ServerParseError", n.response = r, n.statusCode = r.status, n.bodyText = e, n;
  }
}
function Qc(r, e) {
  r.result && r.result.errors && r.result.data && e.next(r.result), e.error(r);
}
function Uc(r) {
  return function(e) {
    return e.text().then(function(t) {
      return xs(e, t);
    }).then(function(t) {
      return !Array.isArray(t) && !Jn.call(t, "data") && !Jn.call(t, "errors") && Ds(e, t, "Server response was missing for query '".concat(Array.isArray(r) ? r.map(function(n) {
        return n.operationName;
      }) : r.operationName, "'.")), t;
    });
  };
}
var Ir = function(r, e) {
  var t;
  try {
    t = JSON.stringify(r);
  } catch (i) {
    var n = $(39, e, i.message);
    throw n.parseError = i, n;
  }
  return t;
}, zc = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, Wc = {
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
}, $c = {
  method: "POST"
}, Gc = {
  http: zc,
  headers: Wc,
  options: $c
}, Hc = function(r, e) {
  return e(r);
};
function Yc(r, e) {
  for (var t = [], n = 2; n < arguments.length; n++)
    t[n - 2] = arguments[n];
  var i = {}, s = {};
  t.forEach(function(h) {
    i = d(d(d({}, i), h.options), { headers: d(d({}, i.headers), h.headers) }), h.credentials && (i.credentials = h.credentials), s = d(d({}, s), h.http);
  }), i.headers && (i.headers = Jc(i.headers, s.preserveHeaderCase));
  var o = r.operationName, a = r.extensions, c = r.variables, u = r.query, f = { operationName: o, variables: c };
  return s.includeExtensions && (f.extensions = a), s.includeQuery && (f.query = e(u, zt)), {
    options: i,
    body: f
  };
}
function Jc(r, e) {
  if (!e) {
    var t = /* @__PURE__ */ Object.create(null);
    return Object.keys(Object(r)).forEach(function(s) {
      t[s.toLowerCase()] = r[s];
    }), t;
  }
  var n = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(r)).forEach(function(s) {
    n[s.toLowerCase()] = {
      originalName: s,
      value: r[s]
    };
  });
  var i = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach(function(s) {
    i[n[s].originalName] = n[s].value;
  }), i;
}
var Kc = function(r) {
  if (!r && typeof fetch > "u")
    throw $(37);
}, Xc = function(r, e) {
  var t = r.getContext(), n = t.uri;
  return n || (typeof e == "function" ? e(r) : e || "/graphql");
};
function Zc(r, e) {
  var t = [], n = function(h, l) {
    t.push("".concat(h, "=").concat(encodeURIComponent(l)));
  };
  if ("query" in e && n("query", e.query), e.operationName && n("operationName", e.operationName), e.variables) {
    var i = void 0;
    try {
      i = Ir(e.variables, "Variables map");
    } catch (h) {
      return { parseError: h };
    }
    n("variables", i);
  }
  if (e.extensions) {
    var s = void 0;
    try {
      s = Ir(e.extensions, "Extensions map");
    } catch (h) {
      return { parseError: h };
    }
    n("extensions", s);
  }
  var o = "", a = r, c = r.indexOf("#");
  c !== -1 && (o = r.substr(c), a = r.substr(0, c));
  var u = a.indexOf("?") === -1 ? "?" : "&", f = a + u + t.join("&") + o;
  return { newURI: f };
}
var Kn = X(function() {
  return fetch;
}), eu = function(r) {
  r === void 0 && (r = {});
  var e = r.uri, t = e === void 0 ? "/graphql" : e, n = r.fetch, i = r.print, s = i === void 0 ? Hc : i, o = r.includeExtensions, a = r.preserveHeaderCase, c = r.useGETForQueries, u = r.includeUnusedVariables, f = u === void 0 ? !1 : u, h = ne(r, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && Kc(n || Kn);
  var l = {
    http: { includeExtensions: o, preserveHeaderCase: a },
    options: h.fetchOptions,
    credentials: h.credentials,
    headers: h.headers
  };
  return new pt(function(p) {
    var v = Xc(p, t), m = p.getContext(), E = {};
    if (m.clientAwareness) {
      var y = m.clientAwareness, w = y.name, g = y.version;
      w && (E["apollographql-client-name"] = w), g && (E["apollographql-client-version"] = g);
    }
    var _ = d(d({}, E), m.headers), O = {
      http: m.http,
      options: m.fetchOptions,
      credentials: m.credentials,
      headers: _
    };
    if (it(["client"], p.query)) {
      var k = Es(p.query);
      if (!k)
        return nr(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      p.query = k;
    }
    var x = Yc(p, s, Gc, l, O), N = x.options, F = x.body;
    F.variables && !f && (F.variables = kc(F.variables, p.query));
    var M;
    !N.signal && typeof AbortController < "u" && (M = new AbortController(), N.signal = M.signal);
    var we = function(H) {
      return H.kind === "OperationDefinition" && H.operation === "mutation";
    }, Oe = function(H) {
      return H.kind === "OperationDefinition" && H.operation === "subscription";
    }, W = Oe(ht(p.query)), oe = it(["defer"], p.query);
    if (c && !p.query.definitions.some(we) && (N.method = "GET"), oe || W) {
      N.headers = N.headers || {};
      var Gt = "multipart/mixed;";
      W && oe && globalThis.__DEV__ !== !1 && D.warn(38), W ? Gt += "boundary=graphql;subscriptionSpec=1.0,application/json" : oe && (Gt += "deferSpec=20220824,application/json"), N.headers.accept = Gt;
    }
    if (N.method === "GET") {
      var En = Zc(v, F), co = En.newURI, wn = En.parseError;
      if (wn)
        return nr(wn);
      v = co;
    } else
      try {
        N.body = Ir(F, "Payload");
      } catch (H) {
        return nr(H);
      }
    return new P(function(H) {
      var uo = n || X(function() {
        return fetch;
      }) || Kn, On = H.next.bind(H);
      return uo(v, N).then(function(_e) {
        var Ht;
        p.setContext({ response: _e });
        var _n = (Ht = _e.headers) === null || Ht === void 0 ? void 0 : Ht.get("content-type");
        return _n !== null && /^multipart\/mixed/i.test(_n) ? Bc(_e, On) : Uc(p)(_e).then(On);
      }).then(function() {
        M = void 0, H.complete();
      }).catch(function(_e) {
        M = void 0, Qc(_e, H);
      }), function() {
        M && M.abort();
      };
    });
  });
}, tu = (
  /** @class */
  function(r) {
    re(e, r);
    function e(t) {
      t === void 0 && (t = {});
      var n = r.call(this, eu(t).request) || this;
      return n.options = t, n;
    }
    return e;
  }(pt)
);
const { toString: Xn, hasOwnProperty: ru } = Object.prototype, Zn = Function.prototype.toString, Cr = /* @__PURE__ */ new Map();
function L(r, e) {
  try {
    return Ar(r, e);
  } finally {
    Cr.clear();
  }
}
function Ar(r, e) {
  if (r === e)
    return !0;
  const t = Xn.call(r), n = Xn.call(e);
  if (t !== n)
    return !1;
  switch (t) {
    case "[object Array]":
      if (r.length !== e.length)
        return !1;
    case "[object Object]": {
      if (ti(r, e))
        return !0;
      const i = ei(r), s = ei(e), o = i.length;
      if (o !== s.length)
        return !1;
      for (let a = 0; a < o; ++a)
        if (!ru.call(e, i[a]))
          return !1;
      for (let a = 0; a < o; ++a) {
        const c = i[a];
        if (!Ar(r[c], e[c]))
          return !1;
      }
      return !0;
    }
    case "[object Error]":
      return r.name === e.name && r.message === e.message;
    case "[object Number]":
      if (r !== r)
        return e !== e;
    case "[object Boolean]":
    case "[object Date]":
      return +r == +e;
    case "[object RegExp]":
    case "[object String]":
      return r == `${e}`;
    case "[object Map]":
    case "[object Set]": {
      if (r.size !== e.size)
        return !1;
      if (ti(r, e))
        return !0;
      const i = r.entries(), s = t === "[object Map]";
      for (; ; ) {
        const o = i.next();
        if (o.done)
          break;
        const [a, c] = o.value;
        if (!e.has(a) || s && !Ar(c, e.get(a)))
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
      r = new Uint8Array(r), e = new Uint8Array(e);
    case "[object DataView]": {
      let i = r.byteLength;
      if (i === e.byteLength)
        for (; i-- && r[i] === e[i]; )
          ;
      return i === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const i = Zn.call(r);
      return i !== Zn.call(e) ? !1 : !su(i, iu);
    }
  }
  return !1;
}
function ei(r) {
  return Object.keys(r).filter(nu, r);
}
function nu(r) {
  return this[r] !== void 0;
}
const iu = "{ [native code] }";
function su(r, e) {
  const t = r.length - e.length;
  return t >= 0 && r.indexOf(e, t) === t;
}
function ti(r, e) {
  let t = Cr.get(r);
  if (t) {
    if (t.has(e))
      return !0;
  } else
    Cr.set(r, t = /* @__PURE__ */ new Set());
  return t.add(e), !1;
}
function Ns(r, e, t, n) {
  var i = e.data, s = ne(e, ["data"]), o = t.data, a = ne(t, ["data"]);
  return L(s, a) && kt(ht(r).selectionSet, i, o, {
    fragmentMap: qt(jt(r)),
    variables: n
  });
}
function kt(r, e, t, n) {
  if (e === t)
    return !0;
  var i = /* @__PURE__ */ new Set();
  return r.selections.every(function(s) {
    if (i.has(s) || (i.add(s), !ut(s, n.variables)) || ri(s))
      return !0;
    if (pe(s)) {
      var o = he(s), a = e && e[o], c = t && t[o], u = s.selectionSet;
      if (!u)
        return L(a, c);
      var f = Array.isArray(a), h = Array.isArray(c);
      if (f !== h)
        return !1;
      if (f && h) {
        var l = a.length;
        if (c.length !== l)
          return !1;
        for (var p = 0; p < l; ++p)
          if (!kt(u, a[p], c[p], n))
            return !1;
        return !0;
      }
      return kt(u, a, c, n);
    } else {
      var v = Vt(s, n.fragmentMap);
      if (v)
        return ri(v) ? !0 : kt(
          v.selectionSet,
          // Notice that we reuse the same aResult and bResult values here,
          // since the fragment ...spread does not specify a field name, but
          // consists of multiple fields (within the fragment's selection set)
          // that should be applied to the current result value(s).
          e,
          t,
          n
        );
    }
  });
}
function ri(r) {
  return !!r.directives && r.directives.some(ou);
}
function ou(r) {
  return r.name.value === "nonreactive";
}
var Is = (
  /** @class */
  function() {
    function r() {
      this.assumeImmutableResults = !1, this.getFragmentDoc = ot(fa, {
        max: se["cache.fragmentQueryDocuments"] || 1e3,
        cache: Ct
      });
    }
    return r.prototype.batch = function(e) {
      var t = this, n = typeof e.optimistic == "string" ? e.optimistic : e.optimistic === !1 ? null : void 0, i;
      return this.performTransaction(function() {
        return i = e.update(t);
      }, n), i;
    }, r.prototype.recordOptimisticTransaction = function(e, t) {
      this.performTransaction(e, t);
    }, r.prototype.transformDocument = function(e) {
      return e;
    }, r.prototype.transformForLink = function(e) {
      return e;
    }, r.prototype.identify = function(e) {
    }, r.prototype.gc = function() {
      return [];
    }, r.prototype.modify = function(e) {
      return !1;
    }, r.prototype.readQuery = function(e, t) {
      return t === void 0 && (t = !!e.optimistic), this.read(d(d({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: t }));
    }, r.prototype.watchFragment = function(e) {
      var t = this, n = e.fragment, i = e.fragmentName, s = e.from, o = e.optimistic, a = o === void 0 ? !0 : o, c = ne(e, ["fragment", "fragmentName", "from", "optimistic"]), u = this.getFragmentDoc(n, i), f = d(d({}, c), { returnPartialData: !0, id: typeof s == "string" ? s : this.identify(s), query: u, optimistic: a }), h;
      return new P(function(l) {
        return t.watch(d(d({}, f), { immediate: !0, callback: function(p) {
          if (
            // Always ensure we deliver the first result
            !(h && Ns(u, { data: h == null ? void 0 : h.result }, { data: p.result }))
          ) {
            var v = {
              data: p.result,
              complete: !!p.complete
            };
            p.missing && (v.missing = Wt(p.missing.map(function(m) {
              return m.missing;
            }))), h = p, l.next(v);
          }
        } }));
      });
    }, r.prototype.readFragment = function(e, t) {
      return t === void 0 && (t = !!e.optimistic), this.read(d(d({}, e), { query: this.getFragmentDoc(e.fragment, e.fragmentName), rootId: e.id, optimistic: t }));
    }, r.prototype.writeQuery = function(e) {
      var t = e.id, n = e.data, i = ne(e, ["id", "data"]);
      return this.write(Object.assign(i, {
        dataId: t || "ROOT_QUERY",
        result: n
      }));
    }, r.prototype.writeFragment = function(e) {
      var t = e.id, n = e.data, i = e.fragment, s = e.fragmentName, o = ne(e, ["id", "data", "fragment", "fragmentName"]);
      return this.write(Object.assign(o, {
        query: this.getFragmentDoc(i, s),
        dataId: t,
        result: n
      }));
    }, r.prototype.updateQuery = function(e, t) {
      return this.batch({
        update: function(n) {
          var i = n.readQuery(e), s = t(i);
          return s == null ? i : (n.writeQuery(d(d({}, e), { data: s })), s);
        }
      });
    }, r.prototype.updateFragment = function(e, t) {
      return this.batch({
        update: function(n) {
          var i = n.readFragment(e), s = t(i);
          return s == null ? i : (n.writeFragment(d(d({}, e), { data: s })), s);
        }
      });
    }, r;
  }()
);
globalThis.__DEV__ !== !1 && (Is.prototype.getMemoryInternals = wa);
var Cs = (
  /** @class */
  function(r) {
    re(e, r);
    function e(t, n, i, s) {
      var o, a = r.call(this, t) || this;
      if (a.message = t, a.path = n, a.query = i, a.variables = s, Array.isArray(a.path)) {
        a.missing = a.message;
        for (var c = a.path.length - 1; c >= 0; --c)
          a.missing = (o = {}, o[a.path[c]] = a.missing, o);
      } else
        a.missing = a.path;
      return a.__proto__ = e.prototype, a;
    }
    return e;
  }(Error)
), Q = Object.prototype.hasOwnProperty;
function Ge(r) {
  return r == null;
}
function As(r, e) {
  var t = r.__typename, n = r.id, i = r._id;
  if (typeof t == "string" && (e && (e.keyObject = Ge(n) ? Ge(i) ? void 0 : { _id: i } : { id: n }), Ge(n) && !Ge(i) && (n = i), !Ge(n)))
    return "".concat(t, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var Rs = {
  dataIdFromObject: As,
  addTypename: !0,
  resultCaching: !0,
  // Thanks to the shouldCanonizeResults helper, this should be the only line
  // you have to change to reenable canonization by default in the future.
  canonizeResults: !1
};
function au(r) {
  return qe(Rs, r);
}
function Fs(r) {
  var e = r.canonizeResults;
  return e === void 0 ? Rs.canonizeResults : e;
}
function cu(r, e) {
  return A(e) ? r.get(e.__ref, "__typename") : e && e.__typename;
}
var Ps = /^[_a-z][_0-9a-z]*/i;
function ve(r) {
  var e = r.match(Ps);
  return e ? e[0] : r;
}
function Rr(r, e, t) {
  return q(e) ? V(e) ? e.every(function(n) {
    return Rr(r, n, t);
  }) : r.selections.every(function(n) {
    if (pe(n) && ut(n, t)) {
      var i = he(n);
      return Q.call(e, i) && (!n.selectionSet || Rr(n.selectionSet, e[i], t));
    }
    return !0;
  }) : !1;
}
function Ie(r) {
  return q(r) && !A(r) && !V(r);
}
function uu() {
  return new ye();
}
function Ls(r, e) {
  var t = qt(jt(r));
  return {
    fragmentMap: t,
    lookupFragment: function(n) {
      var i = t[n];
      return !i && e && (i = e.lookup(n)), i || null;
    }
  };
}
var Dt = /* @__PURE__ */ Object.create(null), ir = function() {
  return Dt;
}, ni = /* @__PURE__ */ Object.create(null), at = (
  /** @class */
  function() {
    function r(e, t) {
      var n = this;
      this.policies = e, this.group = t, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(i, s) {
        return Dr(A(i) ? n.get(i.__ref, s) : i && i[s]);
      }, this.canRead = function(i) {
        return A(i) ? n.has(i.__ref) : typeof i == "object";
      }, this.toReference = function(i, s) {
        if (typeof i == "string")
          return Ae(i);
        if (A(i))
          return i;
        var o = n.policies.identify(i)[0];
        if (o) {
          var a = Ae(o);
          return s && n.merge(o, i), a;
        }
      };
    }
    return r.prototype.toObject = function() {
      return d({}, this.data);
    }, r.prototype.has = function(e) {
      return this.lookup(e, !0) !== void 0;
    }, r.prototype.get = function(e, t) {
      if (this.group.depend(e, t), Q.call(this.data, e)) {
        var n = this.data[e];
        if (n && Q.call(n, t))
          return n[t];
      }
      if (t === "__typename" && Q.call(this.policies.rootTypenamesById, e))
        return this.policies.rootTypenamesById[e];
      if (this instanceof ae)
        return this.parent.get(e, t);
    }, r.prototype.lookup = function(e, t) {
      if (t && this.group.depend(e, "__exists"), Q.call(this.data, e))
        return this.data[e];
      if (this instanceof ae)
        return this.parent.lookup(e, t);
      if (this.policies.rootTypenamesById[e])
        return /* @__PURE__ */ Object.create(null);
    }, r.prototype.merge = function(e, t) {
      var n = this, i;
      A(e) && (e = e.__ref), A(t) && (t = t.__ref);
      var s = typeof e == "string" ? this.lookup(i = e) : e, o = typeof t == "string" ? this.lookup(i = t) : t;
      if (o) {
        D(typeof i == "string", 1);
        var a = new ye(lu).merge(s, o);
        if (this.data[i] = a, a !== s && (delete this.refs[i], this.group.caching)) {
          var c = /* @__PURE__ */ Object.create(null);
          s || (c.__exists = 1), Object.keys(o).forEach(function(u) {
            if (!s || s[u] !== a[u]) {
              c[u] = 1;
              var f = ve(u);
              f !== u && !n.policies.hasKeyArgs(a.__typename, f) && (c[f] = 1), a[u] === void 0 && !(n instanceof ae) && delete a[u];
            }
          }), c.__typename && !(s && s.__typename) && // Since we return default root __typename strings
          // automatically from store.get, we don't need to dirty the
          // ROOT_QUERY.__typename field if merged.__typename is equal
          // to the default string (usually "Query").
          this.policies.rootTypenamesById[i] === a.__typename && delete c.__typename, Object.keys(c).forEach(function(u) {
            return n.group.dirty(i, u);
          });
        }
      }
    }, r.prototype.modify = function(e, t) {
      var n = this, i = this.lookup(e);
      if (i) {
        var s = /* @__PURE__ */ Object.create(null), o = !1, a = !0, c = {
          DELETE: Dt,
          INVALIDATE: ni,
          isReference: A,
          toReference: this.toReference,
          canRead: this.canRead,
          readField: function(u, f) {
            return n.policies.readField(typeof u == "string" ? {
              fieldName: u,
              from: f || Ae(e)
            } : u, { store: n });
          }
        };
        if (Object.keys(i).forEach(function(u) {
          var f = ve(u), h = i[u];
          if (h !== void 0) {
            var l = typeof t == "function" ? t : t[u] || t[f];
            if (l) {
              var p = l === ir ? Dt : l(Dr(h), d(d({}, c), { fieldName: f, storeFieldName: u, storage: n.getStorage(e, u) }));
              if (p === ni)
                n.group.dirty(e, u);
              else if (p === Dt && (p = void 0), p !== h && (s[u] = p, o = !0, h = p, globalThis.__DEV__ !== !1)) {
                var v = function(O) {
                  if (n.lookup(O.__ref) === void 0)
                    return globalThis.__DEV__ !== !1 && D.warn(2, O), !0;
                };
                if (A(p))
                  v(p);
                else if (Array.isArray(p))
                  for (var m = !1, E = void 0, y = 0, w = p; y < w.length; y++) {
                    var g = w[y];
                    if (A(g)) {
                      if (m = !0, v(g))
                        break;
                    } else if (typeof g == "object" && g) {
                      var _ = n.policies.identify(g)[0];
                      _ && (E = g);
                    }
                    if (m && E !== void 0) {
                      globalThis.__DEV__ !== !1 && D.warn(3, E);
                      break;
                    }
                  }
              }
            }
            h !== void 0 && (a = !1);
          }
        }), o)
          return this.merge(e, s), a && (this instanceof ae ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
      }
      return !1;
    }, r.prototype.delete = function(e, t, n) {
      var i, s = this.lookup(e);
      if (s) {
        var o = this.getFieldValue(s, "__typename"), a = t && n ? this.policies.getStoreFieldName({ typename: o, fieldName: t, args: n }) : t;
        return this.modify(e, a ? (i = {}, i[a] = ir, i) : ir);
      }
      return !1;
    }, r.prototype.evict = function(e, t) {
      var n = !1;
      return e.id && (Q.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)), this instanceof ae && this !== t && (n = this.parent.evict(e, t) || n), (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || "__exists")), n;
    }, r.prototype.clear = function() {
      this.replace(null);
    }, r.prototype.extract = function() {
      var e = this, t = this.toObject(), n = [];
      return this.getRootIdSet().forEach(function(i) {
        Q.call(e.policies.rootTypenamesById, i) || n.push(i);
      }), n.length && (t.__META = { extraRootIds: n.sort() }), t;
    }, r.prototype.replace = function(e) {
      var t = this;
      if (Object.keys(this.data).forEach(function(s) {
        e && Q.call(e, s) || t.delete(s);
      }), e) {
        var n = e.__META, i = ne(e, ["__META"]);
        Object.keys(i).forEach(function(s) {
          t.merge(s, i[s]);
        }), n && n.extraRootIds.forEach(this.retain, this);
      }
    }, r.prototype.retain = function(e) {
      return this.rootIds[e] = (this.rootIds[e] || 0) + 1;
    }, r.prototype.release = function(e) {
      if (this.rootIds[e] > 0) {
        var t = --this.rootIds[e];
        return t || delete this.rootIds[e], t;
      }
      return 0;
    }, r.prototype.getRootIdSet = function(e) {
      return e === void 0 && (e = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(e.add, e), this instanceof ae ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
    }, r.prototype.gc = function() {
      var e = this, t = this.getRootIdSet(), n = this.toObject();
      t.forEach(function(o) {
        Q.call(n, o) && (Object.keys(e.findChildRefIds(o)).forEach(t.add, t), delete n[o]);
      });
      var i = Object.keys(n);
      if (i.length) {
        for (var s = this; s instanceof ae; )
          s = s.parent;
        i.forEach(function(o) {
          return s.delete(o);
        });
      }
      return i;
    }, r.prototype.findChildRefIds = function(e) {
      if (!Q.call(this.refs, e)) {
        var t = this.refs[e] = /* @__PURE__ */ Object.create(null), n = this.data[e];
        if (!n)
          return t;
        var i = /* @__PURE__ */ new Set([n]);
        i.forEach(function(s) {
          A(s) && (t[s.__ref] = !0), q(s) && Object.keys(s).forEach(function(o) {
            var a = s[o];
            q(a) && i.add(a);
          });
        });
      }
      return this.refs[e];
    }, r.prototype.makeCacheKey = function() {
      return this.group.keyMaker.lookupArray(arguments);
    }, r;
  }()
), Ms = (
  /** @class */
  function() {
    function r(e, t) {
      t === void 0 && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching();
    }
    return r.prototype.resetCaching = function() {
      this.d = this.caching ? vs() : null, this.keyMaker = new Be(je);
    }, r.prototype.depend = function(e, t) {
      if (this.d) {
        this.d(sr(e, t));
        var n = ve(t);
        n !== t && this.d(sr(e, n)), this.parent && this.parent.depend(e, t);
      }
    }, r.prototype.dirty = function(e, t) {
      this.d && this.d.dirty(
        sr(e, t),
        // When storeFieldName === "__exists", that means the entity identified
        // by dataId has either disappeared from the cache or was newly added,
        // so the result caching system would do well to "forget everything it
        // knows" about that object. To achieve that kind of invalidation, we
        // not only dirty the associated result cache entry, but also remove it
        // completely from the dependency graph. For the optimism implementation
        // details, see https://github.com/benjamn/optimism/pull/195.
        t === "__exists" ? "forget" : "setDirty"
      );
    }, r;
  }()
);
function sr(r, e) {
  return e + "#" + r;
}
function ii(r, e) {
  et(r) && r.group.depend(e, "__exists");
}
(function(r) {
  var e = (
    /** @class */
    function(t) {
      re(n, t);
      function n(i) {
        var s = i.policies, o = i.resultCaching, a = o === void 0 ? !0 : o, c = i.seed, u = t.call(this, s, new Ms(a)) || this;
        return u.stump = new fu(u), u.storageTrie = new Be(je), c && u.replace(c), u;
      }
      return n.prototype.addLayer = function(i, s) {
        return this.stump.addLayer(i, s);
      }, n.prototype.removeLayer = function() {
        return this;
      }, n.prototype.getStorage = function() {
        return this.storageTrie.lookupArray(arguments);
      }, n;
    }(r)
  );
  r.Root = e;
})(at || (at = {}));
var ae = (
  /** @class */
  function(r) {
    re(e, r);
    function e(t, n, i, s) {
      var o = r.call(this, n.policies, s) || this;
      return o.id = t, o.parent = n, o.replay = i, o.group = s, i(o), o;
    }
    return e.prototype.addLayer = function(t, n) {
      return new e(t, this, n, this.group);
    }, e.prototype.removeLayer = function(t) {
      var n = this, i = this.parent.removeLayer(t);
      return t === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(s) {
        var o = n.data[s], a = i.lookup(s);
        a ? o ? o !== a && Object.keys(o).forEach(function(c) {
          L(o[c], a[c]) || n.group.dirty(s, c);
        }) : (n.group.dirty(s, "__exists"), Object.keys(a).forEach(function(c) {
          n.group.dirty(s, c);
        })) : n.delete(s);
      }), i) : i === this.parent ? this : i.addLayer(this.id, this.replay);
    }, e.prototype.toObject = function() {
      return d(d({}, this.parent.toObject()), this.data);
    }, e.prototype.findChildRefIds = function(t) {
      var n = this.parent.findChildRefIds(t);
      return Q.call(this.data, t) ? d(d({}, n), r.prototype.findChildRefIds.call(this, t)) : n;
    }, e.prototype.getStorage = function() {
      for (var t = this.parent; t.parent; )
        t = t.parent;
      return t.getStorage.apply(
        t,
        // @ts-expect-error
        arguments
      );
    }, e;
  }(at)
), fu = (
  /** @class */
  function(r) {
    re(e, r);
    function e(t) {
      return r.call(this, "EntityStore.Stump", t, function() {
      }, new Ms(t.group.caching, t.group)) || this;
    }
    return e.prototype.removeLayer = function() {
      return this;
    }, e.prototype.merge = function(t, n) {
      return this.parent.merge(t, n);
    }, e;
  }(ae)
);
function lu(r, e, t) {
  var n = r[t], i = e[t];
  return L(n, i) ? n : i;
}
function et(r) {
  return !!(r instanceof at && r.group.caching);
}
function hu(r) {
  return q(r) ? V(r) ? r.slice(0) : d({ __proto__: Object.getPrototypeOf(r) }, r) : r;
}
var si = (
  /** @class */
  function() {
    function r() {
      this.known = new (Yi ? WeakSet : Set)(), this.pool = new Be(je), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
    }
    return r.prototype.isKnown = function(e) {
      return q(e) && this.known.has(e);
    }, r.prototype.pass = function(e) {
      if (q(e)) {
        var t = hu(e);
        return this.passes.set(t, e), t;
      }
      return e;
    }, r.prototype.admit = function(e) {
      var t = this;
      if (q(e)) {
        var n = this.passes.get(e);
        if (n)
          return n;
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
            var f = c.length;
            u.sorted.forEach(function(p) {
              c.push(t.admit(e[p]));
            });
            var o = this.pool.lookupArray(c);
            if (!o.object) {
              var h = o.object = Object.create(a);
              this.known.add(h), u.sorted.forEach(function(p, v) {
                h[p] = c[f + v];
              }), globalThis.__DEV__ !== !1 && Object.freeze(h);
            }
            return o.object;
          }
        }
      }
      return e;
    }, r.prototype.sortedKeys = function(e) {
      var t = Object.keys(e), n = this.pool.lookupArray(t);
      if (!n.keys) {
        t.sort();
        var i = JSON.stringify(t);
        (n.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, n.keys = { sorted: t, json: i });
      }
      return n.keys;
    }, r;
  }()
);
function oi(r) {
  return [
    r.selectionSet,
    r.objectOrReference,
    r.context,
    // We split out this property so we can pass different values
    // independently without modifying options.context itself.
    r.context.canonizeResults
  ];
}
var pu = (
  /** @class */
  function() {
    function r(e) {
      var t = this;
      this.knownResults = new (je ? WeakMap : Map)(), this.config = qe(e, {
        addTypename: e.addTypename !== !1,
        canonizeResults: Fs(e)
      }), this.canon = e.canon || new si(), this.executeSelectionSet = ot(function(n) {
        var i, s = n.context.canonizeResults, o = oi(n);
        o[3] = !s;
        var a = (i = t.executeSelectionSet).peek.apply(i, o);
        return a ? s ? d(d({}, a), {
          // If we previously read this result without canonizing it, we can
          // reuse that result simply by canonizing it now.
          result: t.canon.admit(a.result)
        }) : a : (ii(n.context.store, n.enclosingRef.__ref), t.execSelectionSetImpl(n));
      }, {
        max: this.config.resultCacheMaxSize || se["inMemoryCache.executeSelectionSet"] || 5e4,
        keyArgs: oi,
        // Note that the parameters of makeCacheKey are determined by the
        // array returned by keyArgs.
        makeCacheKey: function(n, i, s, o) {
          if (et(s.store))
            return s.store.makeCacheKey(n, A(i) ? i.__ref : i, s.varString, o);
        }
      }), this.executeSubSelectedArray = ot(function(n) {
        return ii(n.context.store, n.enclosingRef.__ref), t.execSubSelectedArrayImpl(n);
      }, {
        max: this.config.resultCacheMaxSize || se["inMemoryCache.executeSubSelectedArray"] || 1e4,
        makeCacheKey: function(n) {
          var i = n.field, s = n.array, o = n.context;
          if (et(o.store))
            return o.store.makeCacheKey(i, s, o.varString);
        }
      });
    }
    return r.prototype.resetCanon = function() {
      this.canon = new si();
    }, r.prototype.diffQueryAgainstStore = function(e) {
      var t = e.store, n = e.query, i = e.rootId, s = i === void 0 ? "ROOT_QUERY" : i, o = e.variables, a = e.returnPartialData, c = a === void 0 ? !0 : a, u = e.canonizeResults, f = u === void 0 ? this.config.canonizeResults : u, h = this.config.cache.policies;
      o = d(d({}, Kr(is(n))), o);
      var l = Ae(s), p = this.executeSelectionSet({
        selectionSet: ht(n).selectionSet,
        objectOrReference: l,
        enclosingRef: l,
        context: d({ store: t, query: n, policies: h, variables: o, varString: le(o), canonizeResults: f }, Ls(n, this.config.fragments))
      }), v;
      if (p.missing && (v = [
        new Cs(du(p.missing), p.missing, n, o)
      ], !c))
        throw v[0];
      return {
        result: p.result,
        complete: !v,
        missing: v
      };
    }, r.prototype.isFresh = function(e, t, n, i) {
      if (et(i.store) && this.knownResults.get(e) === n) {
        var s = this.executeSelectionSet.peek(
          n,
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
    }, r.prototype.execSelectionSetImpl = function(e) {
      var t = this, n = e.selectionSet, i = e.objectOrReference, s = e.enclosingRef, o = e.context;
      if (A(i) && !o.policies.rootTypenamesById[i.__ref] && !o.store.has(i.__ref))
        return {
          result: this.canon.empty,
          missing: "Dangling reference to missing ".concat(i.__ref, " object")
        };
      var a = o.variables, c = o.policies, u = o.store, f = u.getFieldValue(i, "__typename"), h = [], l, p = new ye();
      this.config.addTypename && typeof f == "string" && !c.rootIdsByTypename[f] && h.push({ __typename: f });
      function v(g, _) {
        var O;
        return g.missing && (l = p.merge(l, (O = {}, O[_] = g.missing, O))), g.result;
      }
      var m = new Set(n.selections);
      m.forEach(function(g) {
        var _, O;
        if (ut(g, a))
          if (pe(g)) {
            var k = c.readField({
              fieldName: g.name.value,
              field: g,
              variables: o.variables,
              from: i
            }, o), x = he(g);
            k === void 0 ? rn.added(g) || (l = p.merge(l, (_ = {}, _[x] = "Can't find field '".concat(g.name.value, "' on ").concat(A(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), _))) : V(k) ? k.length > 0 && (k = v(t.executeSubSelectedArray({
              field: g,
              array: k,
              enclosingRef: s,
              context: o
            }), x)) : g.selectionSet ? k != null && (k = v(t.executeSelectionSet({
              selectionSet: g.selectionSet,
              objectOrReference: k,
              enclosingRef: A(k) ? k : s,
              context: o
            }), x)) : o.canonizeResults && (k = t.canon.pass(k)), k !== void 0 && h.push((O = {}, O[x] = k, O));
          } else {
            var N = Vt(g, o.lookupFragment);
            if (!N && g.kind === T.FRAGMENT_SPREAD)
              throw $(9, g.name.value);
            N && c.fragmentMatches(N, f) && N.selectionSet.selections.forEach(m.add, m);
          }
      });
      var E = Wt(h), y = { result: E, missing: l }, w = o.canonizeResults ? this.canon.admit(y) : Dr(y);
      return w.result && this.knownResults.set(w.result, n), w;
    }, r.prototype.execSubSelectedArrayImpl = function(e) {
      var t = this, n = e.field, i = e.array, s = e.enclosingRef, o = e.context, a, c = new ye();
      function u(f, h) {
        var l;
        return f.missing && (a = c.merge(a, (l = {}, l[h] = f.missing, l))), f.result;
      }
      return n.selectionSet && (i = i.filter(o.store.canRead)), i = i.map(function(f, h) {
        return f === null ? null : V(f) ? u(t.executeSubSelectedArray({
          field: n,
          array: f,
          enclosingRef: s,
          context: o
        }), h) : n.selectionSet ? u(t.executeSelectionSet({
          selectionSet: n.selectionSet,
          objectOrReference: f,
          enclosingRef: A(f) ? f : s,
          context: o
        }), h) : (globalThis.__DEV__ !== !1 && yu(o.store, n, f), f);
      }), {
        result: o.canonizeResults ? this.canon.admit(i) : i,
        missing: a
      };
    }, r;
  }()
);
function du(r) {
  try {
    JSON.stringify(r, function(e, t) {
      if (typeof t == "string")
        throw t;
      return t;
    });
  } catch (e) {
    return e;
  }
}
function yu(r, e, t) {
  if (!e.selectionSet) {
    var n = /* @__PURE__ */ new Set([t]);
    n.forEach(function(i) {
      q(i) && (D(
        !A(i),
        10,
        cu(r, i),
        e.name.value
      ), Object.values(i).forEach(n.add, n));
    });
  }
}
var un = new ss(), ai = /* @__PURE__ */ new WeakMap();
function tt(r) {
  var e = ai.get(r);
  return e || ai.set(r, e = {
    vars: /* @__PURE__ */ new Set(),
    dep: vs()
  }), e;
}
function ci(r) {
  tt(r).vars.forEach(function(e) {
    return e.forgetCache(r);
  });
}
function vu(r) {
  tt(r).vars.forEach(function(e) {
    return e.attachCache(r);
  });
}
function mu(r) {
  var e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), n = function(s) {
    if (arguments.length > 0) {
      if (r !== s) {
        r = s, e.forEach(function(c) {
          tt(c).dep.dirty(n), gu(c);
        });
        var o = Array.from(t);
        t.clear(), o.forEach(function(c) {
          return c(r);
        });
      }
    } else {
      var a = un.getValue();
      a && (i(a), tt(a).dep(n));
    }
    return r;
  };
  n.onNextChange = function(s) {
    return t.add(s), function() {
      t.delete(s);
    };
  };
  var i = n.attachCache = function(s) {
    return e.add(s), tt(s).vars.add(n), n;
  };
  return n.forgetCache = function(s) {
    return e.delete(s);
  }, n;
}
function gu(r) {
  r.broadcastWatches && r.broadcastWatches();
}
var ui = /* @__PURE__ */ Object.create(null);
function fn(r) {
  var e = JSON.stringify(r);
  return ui[e] || (ui[e] = /* @__PURE__ */ Object.create(null));
}
function fi(r) {
  var e = fn(r);
  return e.keyFieldsFn || (e.keyFieldsFn = function(t, n) {
    var i = function(o, a) {
      return n.readField(a, o);
    }, s = n.keyObject = ln(r, function(o) {
      var a = Fe(
        n.storeObject,
        o,
        // Using context.readField to extract paths from context.storeObject
        // allows the extraction to see through Reference objects and respect
        // custom read functions.
        i
      );
      return a === void 0 && t !== n.storeObject && Q.call(t, o[0]) && (a = Fe(t, o, Vs)), D(a !== void 0, 4, o.join("."), t), a;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(s));
  });
}
function li(r) {
  var e = fn(r);
  return e.keyArgsFn || (e.keyArgsFn = function(t, n) {
    var i = n.field, s = n.variables, o = n.fieldName, a = ln(r, function(u) {
      var f = u[0], h = f.charAt(0);
      if (h === "@") {
        if (i && ee(i.directives)) {
          var l = f.slice(1), p = i.directives.find(function(y) {
            return y.name.value === l;
          }), v = p && Bt(p, s);
          return v && Fe(
            v,
            // If keyPath.length === 1, this code calls extractKeyPath with an
            // empty path, which works because it uses directiveArgs as the
            // extracted value.
            u.slice(1)
          );
        }
        return;
      }
      if (h === "$") {
        var m = f.slice(1);
        if (s && Q.call(s, m)) {
          var E = u.slice(0);
          return E[0] = m, Fe(s, E);
        }
        return;
      }
      if (t)
        return Fe(t, u);
    }), c = JSON.stringify(a);
    return (t || c !== "{}") && (o += ":" + c), o;
  });
}
function ln(r, e) {
  var t = new ye();
  return qs(r).reduce(function(n, i) {
    var s, o = e(i);
    if (o !== void 0) {
      for (var a = i.length - 1; a >= 0; --a)
        o = (s = {}, s[i[a]] = o, s);
      n = t.merge(n, o);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function qs(r) {
  var e = fn(r);
  if (!e.paths) {
    var t = e.paths = [], n = [];
    r.forEach(function(i, s) {
      V(i) ? (qs(i).forEach(function(o) {
        return t.push(n.concat(o));
      }), n.length = 0) : (n.push(i), V(r[s + 1]) || (t.push(n.slice(0)), n.length = 0));
    });
  }
  return e.paths;
}
function Vs(r, e) {
  return r[e];
}
function Fe(r, e, t) {
  return t = t || Vs, Bs(e.reduce(function n(i, s) {
    return V(i) ? i.map(function(o) {
      return n(o, s);
    }) : i && t(i, s);
  }, r));
}
function Bs(r) {
  return q(r) ? V(r) ? r.map(Bs) : ln(Object.keys(r).sort(), function(e) {
    return Fe(r, e);
  }) : r;
}
function Fr(r) {
  return r.args !== void 0 ? r.args : r.field ? Bt(r.field, r.variables) : null;
}
var bu = function() {
}, hi = function(r, e) {
  return e.fieldName;
}, pi = function(r, e, t) {
  var n = t.mergeObjects;
  return n(r, e);
}, di = function(r, e) {
  return e;
}, Eu = (
  /** @class */
  function() {
    function r(e) {
      this.config = e, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = d({ dataIdFromObject: As }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
    }
    return r.prototype.identify = function(e, t) {
      var n, i = this, s = t && (t.typename || ((n = t.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || e.__typename;
      if (s === this.rootTypenamesById.ROOT_QUERY)
        return ["ROOT_QUERY"];
      for (var o = t && t.storeObject || e, a = d(d({}, t), { typename: s, storeObject: o, readField: t && t.readField || function() {
        var l = hn(arguments, o);
        return i.readField(l, {
          store: i.cache.data,
          variables: l.variables
        });
      } }), c, u = s && this.getTypePolicy(s), f = u && u.keyFn || this.config.dataIdFromObject; f; ) {
        var h = f(d(d({}, e), o), a);
        if (V(h))
          f = fi(h);
        else {
          c = h;
          break;
        }
      }
      return c = c ? String(c) : void 0, a.keyObject ? [c, a.keyObject] : [c];
    }, r.prototype.addTypePolicies = function(e) {
      var t = this;
      Object.keys(e).forEach(function(n) {
        var i = e[n], s = i.queryType, o = i.mutationType, a = i.subscriptionType, c = ne(i, ["queryType", "mutationType", "subscriptionType"]);
        s && t.setRootTypename("Query", n), o && t.setRootTypename("Mutation", n), a && t.setRootTypename("Subscription", n), Q.call(t.toBeAdded, n) ? t.toBeAdded[n].push(c) : t.toBeAdded[n] = [c];
      });
    }, r.prototype.updateTypePolicy = function(e, t) {
      var n = this, i = this.getTypePolicy(e), s = t.keyFields, o = t.fields;
      function a(c, u) {
        c.merge = typeof u == "function" ? u : u === !0 ? pi : u === !1 ? di : c.merge;
      }
      a(i, t.merge), i.keyFn = // Pass false to disable normalization for this typename.
      s === !1 ? bu : V(s) ? fi(s) : typeof s == "function" ? s : i.keyFn, o && Object.keys(o).forEach(function(c) {
        var u = n.getFieldPolicy(e, c, !0), f = o[c];
        if (typeof f == "function")
          u.read = f;
        else {
          var h = f.keyArgs, l = f.read, p = f.merge;
          u.keyFn = // Pass false to disable argument-based differentiation of
          // field identities.
          h === !1 ? hi : V(h) ? li(h) : typeof h == "function" ? h : u.keyFn, typeof l == "function" && (u.read = l), a(u, p);
        }
        u.read && u.merge && (u.keyFn = u.keyFn || hi);
      });
    }, r.prototype.setRootTypename = function(e, t) {
      t === void 0 && (t = e);
      var n = "ROOT_" + e.toUpperCase(), i = this.rootTypenamesById[n];
      t !== i && (D(!i || i === e, 5, e), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[t] = n, this.rootTypenamesById[n] = t);
    }, r.prototype.addPossibleTypes = function(e) {
      var t = this;
      this.usingPossibleTypes = !0, Object.keys(e).forEach(function(n) {
        t.getSupertypeSet(n, !0), e[n].forEach(function(i) {
          t.getSupertypeSet(i, !0).add(n);
          var s = i.match(Ps);
          (!s || s[0] !== i) && t.fuzzySubtypes.set(i, new RegExp(i));
        });
      });
    }, r.prototype.getTypePolicy = function(e) {
      var t = this;
      if (!Q.call(this.typePolicies, e)) {
        var n = this.typePolicies[e] = /* @__PURE__ */ Object.create(null);
        n.fields = /* @__PURE__ */ Object.create(null);
        var i = this.supertypeMap.get(e);
        !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(e, !0), this.fuzzySubtypes.forEach(function(o, a) {
          if (o.test(e)) {
            var c = t.supertypeMap.get(a);
            c && c.forEach(function(u) {
              return i.add(u);
            });
          }
        })), i && i.size && i.forEach(function(o) {
          var a = t.getTypePolicy(o), c = a.fields, u = ne(a, ["fields"]);
          Object.assign(n, u), Object.assign(n.fields, c);
        });
      }
      var s = this.toBeAdded[e];
      return s && s.length && s.splice(0).forEach(function(o) {
        t.updateTypePolicy(e, o);
      }), this.typePolicies[e];
    }, r.prototype.getFieldPolicy = function(e, t, n) {
      if (e) {
        var i = this.getTypePolicy(e).fields;
        return i[t] || n && (i[t] = /* @__PURE__ */ Object.create(null));
      }
    }, r.prototype.getSupertypeSet = function(e, t) {
      var n = this.supertypeMap.get(e);
      return !n && t && this.supertypeMap.set(e, n = /* @__PURE__ */ new Set()), n;
    }, r.prototype.fragmentMatches = function(e, t, n, i) {
      var s = this;
      if (!e.typeCondition)
        return !0;
      if (!t)
        return !1;
      var o = e.typeCondition.name.value;
      if (t === o)
        return !0;
      if (this.usingPossibleTypes && this.supertypeMap.has(o))
        for (var a = this.getSupertypeSet(t, !0), c = [a], u = function(v) {
          var m = s.getSupertypeSet(v, !1);
          m && m.size && c.indexOf(m) < 0 && c.push(m);
        }, f = !!(n && this.fuzzySubtypes.size), h = !1, l = 0; l < c.length; ++l) {
          var p = c[l];
          if (p.has(o))
            return a.has(o) || (h && globalThis.__DEV__ !== !1 && D.warn(6, t, o), a.add(o)), !0;
          p.forEach(u), f && // Start checking fuzzy subtypes only after exhausting all
          // non-fuzzy subtypes (after the final iteration of the loop).
          l === c.length - 1 && // We could wait to compare fragment.selectionSet to result
          // after we verify the supertype, but this check is often less
          // expensive than that search, and we will have to do the
          // comparison anyway whenever we find a potential match.
          Rr(e.selectionSet, n, i) && (f = !1, h = !0, this.fuzzySubtypes.forEach(function(v, m) {
            var E = t.match(v);
            E && E[0] === t && u(m);
          }));
        }
      return !1;
    }, r.prototype.hasKeyArgs = function(e, t) {
      var n = this.getFieldPolicy(e, t, !1);
      return !!(n && n.keyFn);
    }, r.prototype.getStoreFieldName = function(e) {
      var t = e.typename, n = e.fieldName, i = this.getFieldPolicy(t, n, !1), s, o = i && i.keyFn;
      if (o && t)
        for (var a = {
          typename: t,
          fieldName: n,
          field: e.field || null,
          variables: e.variables
        }, c = Fr(e); o; ) {
          var u = o(c, a);
          if (V(u))
            o = li(u);
          else {
            s = u || n;
            break;
          }
        }
      return s === void 0 && (s = e.field ? qa(e.field, e.variables) : ns(n, Fr(e))), s === !1 ? n : n === ve(s) ? s : n + ":" + s;
    }, r.prototype.readField = function(e, t) {
      var n = e.from;
      if (n) {
        var i = e.field || e.fieldName;
        if (i) {
          if (e.typename === void 0) {
            var s = t.store.getFieldValue(n, "__typename");
            s && (e.typename = s);
          }
          var o = this.getStoreFieldName(e), a = ve(o), c = t.store.getFieldValue(n, o), u = this.getFieldPolicy(e.typename, a, !1), f = u && u.read;
          if (f) {
            var h = yi(this, n, e, t, t.store.getStorage(A(n) ? n.__ref : n, o));
            return un.withValue(this.cache, f, [
              c,
              h
            ]);
          }
          return c;
        }
      }
    }, r.prototype.getReadFunction = function(e, t) {
      var n = this.getFieldPolicy(e, t, !1);
      return n && n.read;
    }, r.prototype.getMergeFunction = function(e, t, n) {
      var i = this.getFieldPolicy(e, t, !1), s = i && i.merge;
      return !s && n && (i = this.getTypePolicy(n), s = i && i.merge), s;
    }, r.prototype.runMergeFunction = function(e, t, n, i, s) {
      var o = n.field, a = n.typename, c = n.merge;
      return c === pi ? js(i.store)(e, t) : c === di ? t : (i.overwrite && (e = void 0), c(e, t, yi(
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
    }, r;
  }()
);
function yi(r, e, t, n, i) {
  var s = r.getStoreFieldName(t), o = ve(s), a = t.variables || n.variables, c = n.store, u = c.toReference, f = c.canRead;
  return {
    args: Fr(t),
    field: t.field || null,
    fieldName: o,
    storeFieldName: s,
    variables: a,
    isReference: A,
    toReference: u,
    storage: i,
    cache: r.cache,
    canRead: f,
    readField: function() {
      return r.readField(hn(arguments, e, a), n);
    },
    mergeObjects: js(n.store)
  };
}
function hn(r, e, t) {
  var n = r[0], i = r[1], s = r.length, o;
  return typeof n == "string" ? o = {
    fieldName: n,
    // Default to objectOrReference only when no second argument was
    // passed for the from parameter, not when undefined is explicitly
    // passed as the second argument.
    from: s > 1 ? i : e
  } : (o = d({}, n), Q.call(o, "from") || (o.from = e)), globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && D.warn(7, Li(Array.from(r))), o.variables === void 0 && (o.variables = t), o;
}
function js(r) {
  return function(t, n) {
    if (V(t) || V(n))
      throw $(8);
    if (q(t) && q(n)) {
      var i = r.getFieldValue(t, "__typename"), s = r.getFieldValue(n, "__typename"), o = i && s && i !== s;
      if (o)
        return n;
      if (A(t) && Ie(n))
        return r.merge(t.__ref, n), t;
      if (Ie(t) && A(n))
        return r.merge(t, n.__ref), n;
      if (Ie(t) && Ie(n))
        return d(d({}, t), n);
    }
    return n;
  };
}
function or(r, e, t) {
  var n = "".concat(e).concat(t), i = r.flavors.get(n);
  return i || r.flavors.set(n, i = r.clientOnly === e && r.deferred === t ? r : d(d({}, r), { clientOnly: e, deferred: t })), i;
}
var wu = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.cache = e, this.reader = t, this.fragments = n;
    }
    return r.prototype.writeToStore = function(e, t) {
      var n = this, i = t.query, s = t.result, o = t.dataId, a = t.variables, c = t.overwrite, u = lt(i), f = uu();
      a = d(d({}, Kr(u)), a);
      var h = d(d({ store: e, written: /* @__PURE__ */ Object.create(null), merge: function(p, v) {
        return f.merge(p, v);
      }, variables: a, varString: le(a) }, Ls(i, this.fragments)), { overwrite: !!c, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), l = this.processSelectionSet({
        result: s || /* @__PURE__ */ Object.create(null),
        dataId: o,
        selectionSet: u.selectionSet,
        mergeTree: { map: /* @__PURE__ */ new Map() },
        context: h
      });
      if (!A(l))
        throw $(11, s);
      return h.incomingById.forEach(function(p, v) {
        var m = p.storeObject, E = p.mergeTree, y = p.fieldNodeSet, w = Ae(v);
        if (E && E.map.size) {
          var g = n.applyMerges(E, w, m, h);
          if (A(g))
            return;
          m = g;
        }
        if (globalThis.__DEV__ !== !1 && !h.overwrite) {
          var _ = /* @__PURE__ */ Object.create(null);
          y.forEach(function(x) {
            x.selectionSet && (_[x.name.value] = !0);
          });
          var O = function(x) {
            return _[ve(x)] === !0;
          }, k = function(x) {
            var N = E && E.map.get(x);
            return !!(N && N.info && N.info.merge);
          };
          Object.keys(m).forEach(function(x) {
            O(x) && !k(x) && Ou(w, m, x, h.store);
          });
        }
        e.merge(v, m);
      }), e.retain(l.__ref), l;
    }, r.prototype.processSelectionSet = function(e) {
      var t = this, n = e.dataId, i = e.result, s = e.selectionSet, o = e.context, a = e.mergeTree, c = this.cache.policies, u = /* @__PURE__ */ Object.create(null), f = n && c.rootTypenamesById[n] || Or(i, s, o.fragmentMap) || n && o.store.get(n, "__typename");
      typeof f == "string" && (u.__typename = f);
      var h = function() {
        var g = hn(arguments, u, o.variables);
        if (A(g.from)) {
          var _ = o.incomingById.get(g.from.__ref);
          if (_) {
            var O = c.readField(d(d({}, g), { from: _.storeObject }), o);
            if (O !== void 0)
              return O;
          }
        }
        return c.readField(g, o);
      }, l = /* @__PURE__ */ new Set();
      this.flattenFields(
        s,
        i,
        // This WriteContext will be the default context value for fields returned
        // by the flattenFields method, but some fields may be assigned a modified
        // context, depending on the presence of @client and other directives.
        o,
        f
      ).forEach(function(g, _) {
        var O, k = he(_), x = i[k];
        if (l.add(_), x !== void 0) {
          var N = c.getStoreFieldName({
            typename: f,
            fieldName: _.name.value,
            field: _,
            variables: g.variables
          }), F = vi(a, N), M = t.processFieldValue(
            x,
            _,
            // Reset context.clientOnly and context.deferred to their default
            // values before processing nested selection sets.
            _.selectionSet ? or(g, !1, !1) : g,
            F
          ), we = void 0;
          _.selectionSet && (A(M) || Ie(M)) && (we = h("__typename", M));
          var Oe = c.getMergeFunction(f, _.name.value, we);
          Oe ? F.info = {
            // TODO Check compatibility against any existing childTree.field?
            field: _,
            typename: f,
            merge: Oe
          } : mi(a, N), u = g.merge(u, (O = {}, O[N] = M, O));
        } else globalThis.__DEV__ !== !1 && !g.clientOnly && !g.deferred && !rn.added(_) && // If the field has a read function, it may be a synthetic field or
        // provide a default value, so its absence from the written data should
        // not be cause for alarm.
        !c.getReadFunction(f, _.name.value) && globalThis.__DEV__ !== !1 && D.error(12, he(_), i);
      });
      try {
        var p = c.identify(i, {
          typename: f,
          selectionSet: s,
          fragmentMap: o.fragmentMap,
          storeObject: u,
          readField: h
        }), v = p[0], m = p[1];
        n = n || v, m && (u = o.merge(u, m));
      } catch (g) {
        if (!n)
          throw g;
      }
      if (typeof n == "string") {
        var E = Ae(n), y = o.written[n] || (o.written[n] = []);
        if (y.indexOf(s) >= 0 || (y.push(s), this.reader && this.reader.isFresh(i, E, s, o)))
          return E;
        var w = o.incomingById.get(n);
        return w ? (w.storeObject = o.merge(w.storeObject, u), w.mergeTree = Pr(w.mergeTree, a), l.forEach(function(g) {
          return w.fieldNodeSet.add(g);
        })) : o.incomingById.set(n, {
          storeObject: u,
          // Save a reference to mergeTree only if it is not empty, because
          // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
          // reused for entirely different parts of the result tree.
          mergeTree: Rt(a) ? void 0 : a,
          fieldNodeSet: l
        }), E;
      }
      return u;
    }, r.prototype.processFieldValue = function(e, t, n, i) {
      var s = this;
      return !t.selectionSet || e === null ? globalThis.__DEV__ !== !1 ? Ts(e) : e : V(e) ? e.map(function(o, a) {
        var c = s.processFieldValue(o, t, n, vi(i, a));
        return mi(i, a), c;
      }) : this.processSelectionSet({
        result: e,
        selectionSet: t.selectionSet,
        context: n,
        mergeTree: i
      });
    }, r.prototype.flattenFields = function(e, t, n, i) {
      i === void 0 && (i = Or(t, e, n.fragmentMap));
      var s = /* @__PURE__ */ new Map(), o = this.cache.policies, a = new Be(!1);
      return function c(u, f) {
        var h = a.lookup(
          u,
          // Because we take inheritedClientOnly and inheritedDeferred into
          // consideration here (in addition to selectionSet), it's possible for
          // the same selection set to be flattened more than once, if it appears
          // in the query with different @client and/or @directive configurations.
          f.clientOnly,
          f.deferred
        );
        h.visited || (h.visited = !0, u.selections.forEach(function(l) {
          if (ut(l, n.variables)) {
            var p = f.clientOnly, v = f.deferred;
            if (
              // Since the presence of @client or @defer on this field can only
              // cause clientOnly or deferred to become true, we can skip the
              // forEach loop if both clientOnly and deferred are already true.
              !(p && v) && ee(l.directives) && l.directives.forEach(function(y) {
                var w = y.name.value;
                if (w === "client" && (p = !0), w === "defer") {
                  var g = Bt(y, n.variables);
                  (!g || g.if !== !1) && (v = !0);
                }
              }), pe(l)
            ) {
              var m = s.get(l);
              m && (p = p && m.clientOnly, v = v && m.deferred), s.set(l, or(n, p, v));
            } else {
              var E = Vt(l, n.lookupFragment);
              if (!E && l.kind === T.FRAGMENT_SPREAD)
                throw $(13, l.name.value);
              E && o.fragmentMatches(E, i, t, n.variables) && c(E.selectionSet, or(n, p, v));
            }
          }
        }));
      }(e, n), s;
    }, r.prototype.applyMerges = function(e, t, n, i, s) {
      var o, a = this;
      if (e.map.size && !A(n)) {
        var c = (
          // Items in the same position in different arrays are not
          // necessarily related to each other, so when incoming is an array
          // we process its elements as if there was no existing data.
          !V(n) && // Likewise, existing must be either a Reference or a StoreObject
          // in order for its fields to be safe to merge with the fields of
          // the incoming object.
          (A(t) || Ie(t)) ? t : void 0
        ), u = n;
        c && !s && (s = [A(c) ? c.__ref : c]);
        var f, h = function(l, p) {
          return V(l) ? typeof p == "number" ? l[p] : void 0 : i.store.getFieldValue(l, String(p));
        };
        e.map.forEach(function(l, p) {
          var v = h(c, p), m = h(u, p);
          if (m !== void 0) {
            s && s.push(p);
            var E = a.applyMerges(l, v, m, i, s);
            E !== m && (f = f || /* @__PURE__ */ new Map(), f.set(p, E)), s && D(s.pop() === p);
          }
        }), f && (n = V(u) ? u.slice(0) : d({}, u), f.forEach(function(l, p) {
          n[p] = l;
        }));
      }
      return e.info ? this.cache.policies.runMergeFunction(t, n, e.info, i, s && (o = i.store).getStorage.apply(o, s)) : n;
    }, r;
  }()
), Qs = [];
function vi(r, e) {
  var t = r.map;
  return t.has(e) || t.set(e, Qs.pop() || { map: /* @__PURE__ */ new Map() }), t.get(e);
}
function Pr(r, e) {
  if (r === e || !e || Rt(e))
    return r;
  if (!r || Rt(r))
    return e;
  var t = r.info && e.info ? d(d({}, r.info), e.info) : r.info || e.info, n = r.map.size && e.map.size, i = n ? /* @__PURE__ */ new Map() : r.map.size ? r.map : e.map, s = { info: t, map: i };
  if (n) {
    var o = new Set(e.map.keys());
    r.map.forEach(function(a, c) {
      s.map.set(c, Pr(a, e.map.get(c))), o.delete(c);
    }), o.forEach(function(a) {
      s.map.set(a, Pr(e.map.get(a), r.map.get(a)));
    });
  }
  return s;
}
function Rt(r) {
  return !r || !(r.info || r.map.size);
}
function mi(r, e) {
  var t = r.map, n = t.get(e);
  n && Rt(n) && (Qs.push(n), t.delete(e));
}
var gi = /* @__PURE__ */ new Set();
function Ou(r, e, t, n) {
  var i = function(h) {
    var l = n.getFieldValue(h, t);
    return typeof l == "object" && l;
  }, s = i(r);
  if (s) {
    var o = i(e);
    if (o && !A(s) && !L(s, o) && !Object.keys(s).every(function(h) {
      return n.getFieldValue(o, h) !== void 0;
    })) {
      var a = n.getFieldValue(r, "__typename") || n.getFieldValue(e, "__typename"), c = ve(t), u = "".concat(a, ".").concat(c);
      if (!gi.has(u)) {
        gi.add(u);
        var f = [];
        !V(s) && !V(o) && [s, o].forEach(function(h) {
          var l = n.getFieldValue(h, "__typename");
          typeof l == "string" && !f.includes(l) && f.push(l);
        }), globalThis.__DEV__ !== !1 && D.warn(14, c, a, f.length ? "either ensure all objects of type " + f.join(" and ") + " have an ID or a custom merge function, or " : "", u, d({}, s), d({}, o));
      }
    }
  }
}
var pn = (
  /** @class */
  function(r) {
    re(e, r);
    function e(t) {
      t === void 0 && (t = {});
      var n = r.call(this) || this;
      return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new ms(rn), n.assumeImmutableResults = !0, n.makeVar = mu, n.txCount = 0, n.config = au(t), n.addTypename = !!n.config.addTypename, n.policies = new Eu({
        cache: n,
        dataIdFromObject: n.config.dataIdFromObject,
        possibleTypes: n.config.possibleTypes,
        typePolicies: n.config.typePolicies
      }), n.init(), n;
    }
    return e.prototype.init = function() {
      var t = this.data = new at.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching
      });
      this.optimisticData = t.stump, this.resetResultCache();
    }, e.prototype.resetResultCache = function(t) {
      var n = this, i = this.storeReader, s = this.config.fragments;
      this.storeWriter = new wu(this, this.storeReader = new pu({
        cache: this,
        addTypename: this.addTypename,
        resultCacheMaxSize: this.config.resultCacheMaxSize,
        canonizeResults: Fs(this.config),
        canon: t ? void 0 : i && i.canon,
        fragments: s
      }), s), this.maybeBroadcastWatch = ot(function(o, a) {
        return n.broadcastWatch(o, a);
      }, {
        max: this.config.resultCacheMaxSize || se["inMemoryCache.maybeBroadcastWatch"] || 5e3,
        makeCacheKey: function(o) {
          var a = o.optimistic ? n.optimisticData : n.data;
          if (et(a)) {
            var c = o.optimistic, u = o.id, f = o.variables;
            return a.makeCacheKey(
              o.query,
              // Different watches can have the same query, optimistic
              // status, rootId, and variables, but if their callbacks are
              // different, the (identical) result needs to be delivered to
              // each distinct callback. The easiest way to achieve that
              // separation is to include c.callback in the cache key for
              // maybeBroadcastWatch calls. See issue #5733.
              o.callback,
              le({ optimistic: c, id: u, variables: f })
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
      var n = t.returnPartialData, i = n === void 0 ? !1 : n;
      try {
        return this.storeReader.diffQueryAgainstStore(d(d({}, t), { store: t.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: i })).result || null;
      } catch (s) {
        if (s instanceof Cs)
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
      if (Q.call(t, "id") && !t.id)
        return !1;
      var n = t.optimistic ? this.optimisticData : this.data;
      try {
        return ++this.txCount, n.modify(t.id || "ROOT_QUERY", t.fields);
      } finally {
        !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.diff = function(t) {
      return this.storeReader.diffQueryAgainstStore(d(d({}, t), { store: t.optimistic ? this.optimisticData : this.data, rootId: t.id || "ROOT_QUERY", config: this.config }));
    }, e.prototype.watch = function(t) {
      var n = this;
      return this.watches.size || vu(this), this.watches.add(t), t.immediate && this.maybeBroadcastWatch(t), function() {
        n.watches.delete(t) && !n.watches.size && ci(n), n.maybeBroadcastWatch.forget(t);
      };
    }, e.prototype.gc = function(t) {
      var n;
      le.reset(), zt.reset(), this.addTypenameTransform.resetCache(), (n = this.config.fragments) === null || n === void 0 || n.resetCaches();
      var i = this.optimisticData.gc();
      return t && !this.txCount && (t.resetResultCache ? this.resetResultCache(t.resetResultIdentities) : t.resetResultIdentities && this.storeReader.resetCanon()), i;
    }, e.prototype.retain = function(t, n) {
      return (n ? this.optimisticData : this.data).retain(t);
    }, e.prototype.release = function(t, n) {
      return (n ? this.optimisticData : this.data).release(t);
    }, e.prototype.identify = function(t) {
      if (A(t))
        return t.__ref;
      try {
        return this.policies.identify(t)[0];
      } catch (n) {
        globalThis.__DEV__ !== !1 && D.warn(n);
      }
    }, e.prototype.evict = function(t) {
      if (!t.id) {
        if (Q.call(t, "id"))
          return !1;
        t = d(d({}, t), { id: "ROOT_QUERY" });
      }
      try {
        return ++this.txCount, this.optimisticData.evict(t, this.data);
      } finally {
        !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.reset = function(t) {
      var n = this;
      return this.init(), le.reset(), t && t.discardWatches ? (this.watches.forEach(function(i) {
        return n.maybeBroadcastWatch.forget(i);
      }), this.watches.clear(), ci(this)) : this.broadcastWatches(), Promise.resolve();
    }, e.prototype.removeOptimistic = function(t) {
      var n = this.optimisticData.removeLayer(t);
      n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
    }, e.prototype.batch = function(t) {
      var n = this, i = t.update, s = t.optimistic, o = s === void 0 ? !0 : s, a = t.removeOptimistic, c = t.onWatchUpdated, u, f = function(l) {
        var p = n, v = p.data, m = p.optimisticData;
        ++n.txCount, l && (n.data = n.optimisticData = l);
        try {
          return u = i(n);
        } finally {
          --n.txCount, n.data = v, n.optimisticData = m;
        }
      }, h = /* @__PURE__ */ new Set();
      return c && !this.txCount && this.broadcastWatches(d(d({}, t), { onWatchUpdated: function(l) {
        return h.add(l), !1;
      } })), typeof o == "string" ? this.optimisticData = this.optimisticData.addLayer(o, f) : o === !1 ? f(this.data) : f(), typeof a == "string" && (this.optimisticData = this.optimisticData.removeLayer(a)), c && h.size ? (this.broadcastWatches(d(d({}, t), { onWatchUpdated: function(l, p) {
        var v = c.call(this, l, p);
        return v !== !1 && h.delete(l), v;
      } })), h.size && h.forEach(function(l) {
        return n.maybeBroadcastWatch.dirty(l);
      })) : this.broadcastWatches(t), u;
    }, e.prototype.performTransaction = function(t, n) {
      return this.batch({
        update: t,
        optimistic: n || n !== null
      });
    }, e.prototype.transformDocument = function(t) {
      return this.addTypenameToDocument(this.addFragmentsToDocument(t));
    }, e.prototype.broadcastWatches = function(t) {
      var n = this;
      this.txCount || this.watches.forEach(function(i) {
        return n.maybeBroadcastWatch(i, t);
      });
    }, e.prototype.addFragmentsToDocument = function(t) {
      var n = this.config.fragments;
      return n ? n.transform(t) : t;
    }, e.prototype.addTypenameToDocument = function(t) {
      return this.addTypename ? this.addTypenameTransform.transformDocument(t) : t;
    }, e.prototype.broadcastWatch = function(t, n) {
      var i = t.lastDiff, s = this.diff(t);
      n && (t.optimistic && typeof n.optimistic == "string" && (s.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, t, s, i) === !1) || (!i || !L(i.result, s.result)) && t.callback(t.lastDiff = s, i);
    }, e;
  }(Is)
);
globalThis.__DEV__ !== !1 && (pn.prototype.getMemoryInternals = Ea);
var R;
(function(r) {
  r[r.loading = 1] = "loading", r[r.setVariables = 2] = "setVariables", r[r.fetchMore = 3] = "fetchMore", r[r.refetch = 4] = "refetch", r[r.poll = 6] = "poll", r[r.ready = 7] = "ready", r[r.error = 8] = "error";
})(R || (R = {}));
function ct(r) {
  return r ? r < 7 : !1;
}
var bi = Object.assign, _u = Object.hasOwnProperty, Lr = (
  /** @class */
  function(r) {
    re(e, r);
    function e(t) {
      var n = t.queryManager, i = t.queryInfo, s = t.options, o = r.call(this, function(E) {
        try {
          var y = E._subscription._observer;
          y && !y.error && (y.error = Tu);
        } catch {
        }
        var w = !o.observers.size;
        o.observers.add(E);
        var g = o.last;
        return g && g.error ? E.error && E.error(g.error) : g && g.result && E.next && E.next(g.result), w && o.reobserve().catch(function() {
        }), function() {
          o.observers.delete(E) && !o.observers.size && o.tearDownQuery();
        };
      }) || this;
      o.observers = /* @__PURE__ */ new Set(), o.subscriptions = /* @__PURE__ */ new Set(), o.queryInfo = i, o.queryManager = n, o.waitForOwnResult = ar(s.fetchPolicy), o.isTornDown = !1, o.subscribeToMore = o.subscribeToMore.bind(o);
      var a = n.defaultOptions.watchQuery, c = a === void 0 ? {} : a, u = c.fetchPolicy, f = u === void 0 ? "cache-first" : u, h = s.fetchPolicy, l = h === void 0 ? f : h, p = s.initialFetchPolicy, v = p === void 0 ? l === "standby" ? f : l : p;
      o.options = d(d({}, s), {
        // Remember the initial options.fetchPolicy so we can revert back to this
        // policy when variables change. This information can also be specified
        // (or overridden) by providing options.initialFetchPolicy explicitly.
        initialFetchPolicy: v,
        // This ensures this.options.fetchPolicy always has a string value, in
        // case options.fetchPolicy was not provided.
        fetchPolicy: l
      }), o.queryId = i.queryId || n.generateQueryId();
      var m = lt(o.query);
      return o.queryName = m && m.name && m.name.value, o;
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
      return new Promise(function(n, i) {
        var s = {
          next: function(a) {
            n(a), t.observers.delete(s), t.observers.size || t.queryManager.removeQuery(t.queryId), setTimeout(function() {
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
      var n = this.getLastResult(!0), i = this.queryInfo.networkStatus || n && n.networkStatus || R.ready, s = d(d({}, n), { loading: ct(i), networkStatus: i }), o = this.options.fetchPolicy, a = o === void 0 ? "cache-first" : o;
      if (
        // These fetch policies should never deliver data from the cache, unless
        // redelivering a previously delivered result.
        !(ar(a) || // If this.options.query has @client(always: true) fields, we cannot
        // trust diff.result, since it was read from the cache without running
        // local resolvers (and it's too late to run resolvers now, since we must
        // return a result synchronously).
        this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)
      ) if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var c = this.queryInfo.getDiff();
        (c.complete || this.options.returnPartialData) && (s.data = c.result), L(s.data, {}) && (s.data = void 0), c.complete ? (delete s.partial, c.complete && s.networkStatus === R.loading && (a === "cache-first" || a === "cache-only") && (s.networkStatus = R.ready, s.loading = !1)) : s.partial = !0, globalThis.__DEV__ !== !1 && !c.complete && !this.options.partialRefetch && !s.loading && !s.data && !s.error && zs(c.missing);
      }
      return t && this.updateLastResult(s), s;
    }, e.prototype.isDifferentFromLastResult = function(t, n) {
      if (!this.last)
        return !0;
      var i = this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective ? !Ns(this.query, this.last.result, t, this.variables) : !L(this.last.result, t);
      return i || n && !L(this.last.variables, n);
    }, e.prototype.getLast = function(t, n) {
      var i = this.last;
      if (i && i[t] && (!n || L(i.variables, this.variables)))
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
      var n, i = {
        // Always disable polling for refetches.
        pollInterval: 0
      }, s = this.options.fetchPolicy;
      if (s === "cache-and-network" ? i.fetchPolicy = s : s === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && t && _u.call(t, "variables")) {
        var o = is(this.query), a = o.variableDefinitions;
        (!a || !a.some(function(c) {
          return c.variable.name.value === "variables";
        })) && globalThis.__DEV__ !== !1 && D.warn(
          20,
          t,
          ((n = o.name) === null || n === void 0 ? void 0 : n.value) || o
        );
      }
      return t && !L(this.options.variables, t) && (i.variables = this.options.variables = d(d({}, this.options.variables), t)), this.queryInfo.resetLastWrite(), this.reobserve(i, R.refetch);
    }, e.prototype.fetchMore = function(t) {
      var n = this, i = d(d({}, t.query ? t : d(d(d(d({}, this.options), { query: this.options.query }), t), { variables: d(d({}, this.options.variables), t.variables) })), {
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
      o.networkStatus = R.fetchMore, i.notifyOnNetworkStatusChange && this.observe();
      var c = /* @__PURE__ */ new Set();
      return this.queryManager.fetchQuery(s, i, R.fetchMore).then(function(u) {
        return n.queryManager.removeQuery(s), o.networkStatus === R.fetchMore && (o.networkStatus = a), n.queryManager.cache.batch({
          update: function(f) {
            var h = t.updateQuery;
            h ? f.updateQuery({
              query: n.query,
              variables: n.variables,
              returnPartialData: !0,
              optimistic: !1
            }, function(l) {
              return h(l, {
                fetchMoreResult: u.data,
                variables: i.variables
              });
            }) : f.writeQuery({
              query: i.query,
              variables: i.variables,
              data: u.data
            });
          },
          onWatchUpdated: function(f) {
            c.add(f.query);
          }
        }), u;
      }).finally(function() {
        c.has(n.query) || Us(n);
      });
    }, e.prototype.subscribeToMore = function(t) {
      var n = this, i = this.queryManager.startGraphQLSubscription({
        query: t.document,
        variables: t.variables,
        context: t.context
      }).subscribe({
        next: function(s) {
          var o = t.updateQuery;
          o && n.updateQuery(function(a, c) {
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
          globalThis.__DEV__ !== !1 && D.error(21, s);
        }
      });
      return this.subscriptions.add(i), function() {
        n.subscriptions.delete(i) && i.unsubscribe();
      };
    }, e.prototype.setOptions = function(t) {
      return this.reobserve(t);
    }, e.prototype.silentSetOptions = function(t) {
      var n = qe(this.options, t || {});
      bi(this.options, n);
    }, e.prototype.setVariables = function(t) {
      return L(this.variables, t) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = t, this.observers.size ? this.reobserve({
        // Reset options.fetchPolicy to its original value.
        fetchPolicy: this.options.initialFetchPolicy,
        variables: t
      }, R.setVariables) : Promise.resolve());
    }, e.prototype.updateQuery = function(t) {
      var n = this.queryManager, i = n.cache.diff({
        query: this.options.query,
        variables: this.variables,
        returnPartialData: !0,
        optimistic: !1
      }).result, s = t(i, {
        variables: this.variables
      });
      s && (n.cache.writeQuery({
        query: this.options.query,
        data: s,
        variables: this.variables
      }), n.broadcastQueries());
    }, e.prototype.startPolling = function(t) {
      this.options.pollInterval = t, this.updatePolling();
    }, e.prototype.stopPolling = function() {
      this.options.pollInterval = 0, this.updatePolling();
    }, e.prototype.applyNextFetchPolicy = function(t, n) {
      if (n.nextFetchPolicy) {
        var i = n.fetchPolicy, s = i === void 0 ? "cache-first" : i, o = n.initialFetchPolicy, a = o === void 0 ? s : o;
        s === "standby" || (typeof n.nextFetchPolicy == "function" ? n.fetchPolicy = n.nextFetchPolicy(s, {
          reason: t,
          options: n,
          observable: this,
          initialFetchPolicy: a
        }) : t === "variables-changed" ? n.fetchPolicy = a : n.fetchPolicy = n.nextFetchPolicy);
      }
      return n.fetchPolicy;
    }, e.prototype.fetch = function(t, n, i) {
      return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, t, n, i);
    }, e.prototype.updatePolling = function() {
      var t = this;
      if (!this.queryManager.ssrMode) {
        var n = this, i = n.pollingInfo, s = n.options.pollInterval;
        if (!s || !this.hasObservers()) {
          i && (clearTimeout(i.timeout), delete this.pollingInfo);
          return;
        }
        if (!(i && i.interval === s)) {
          D(s, 22);
          var o = i || (this.pollingInfo = {});
          o.interval = s;
          var a = function() {
            var u, f;
            t.pollingInfo && (!ct(t.queryInfo.networkStatus) && !(!((f = (u = t.options).skipPollAttempt) === null || f === void 0) && f.call(u)) ? t.reobserve({
              // Most fetchPolicy options don't make sense to use in a polling context, as
              // users wouldn't want to be polling the cache directly. However, network-only and
              // no-cache are both useful for when the user wants to control whether or not the
              // polled results are written to the cache.
              fetchPolicy: t.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
            }, R.poll).then(c, c) : c());
          }, c = function() {
            var u = t.pollingInfo;
            u && (clearTimeout(u.timeout), u.timeout = setTimeout(a, u.interval));
          };
          c();
        }
      }
    }, e.prototype.updateLastResult = function(t, n) {
      n === void 0 && (n = this.variables);
      var i = this.getLastError();
      return i && this.last && !L(n, this.last.variables) && (i = void 0), this.last = d({ result: this.queryManager.assumeImmutableResults ? t : Ts(t), variables: n }, i ? { error: i } : null);
    }, e.prototype.reobserveAsConcast = function(t, n) {
      var i = this;
      this.isTornDown = !1;
      var s = (
        // Refetching uses a disposable Concast to allow refetches using different
        // options/variables, without permanently altering the options of the
        // original ObservableQuery.
        n === R.refetch || // The fetchMore method does not actually call the reobserve method, but,
        // if it did, it would definitely use a disposable Concast.
        n === R.fetchMore || // Polling uses a disposable Concast so the polling options (which force
        // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
        n === R.poll
      ), o = this.options.variables, a = this.options.fetchPolicy, c = qe(this.options, t || {}), u = s ? (
        // Disposable Concast fetches receive a shallow copy of this.options
        // (merged with newOptions), leaving this.options unmodified.
        c
      ) : bi(this.options, c), f = this.transformDocument(u.query);
      this.lastQuery = f, s || (this.updatePolling(), t && t.variables && !L(t.variables, o) && // Don't mess with the fetchPolicy if it's currently "standby".
      u.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
      // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
      (u.fetchPolicy === a || // A `nextFetchPolicy` function has even higher priority, though,
      // so in that case `applyNextFetchPolicy` must be called.
      typeof u.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", u), n === void 0 && (n = R.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = ar(u.fetchPolicy));
      var h = function() {
        i.concast === v && (i.waitForOwnResult = !1);
      }, l = u.variables && d({}, u.variables), p = this.fetch(u, n, f), v = p.concast, m = p.fromLink, E = {
        next: function(y) {
          L(i.variables, l) && (h(), i.reportResult(y, l));
        },
        error: function(y) {
          L(i.variables, l) && (h(), i.reportError(y, l));
        }
      };
      return !s && (m || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = v, this.observer = E), v.addObserver(E), v;
    }, e.prototype.reobserve = function(t, n) {
      return this.reobserveAsConcast(t, n).promise;
    }, e.prototype.resubscribeAfterError = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
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
    }, e.prototype.reportResult = function(t, n) {
      var i = this.getLastError(), s = this.isDifferentFromLastResult(t, n);
      (i || !t.partial || this.options.returnPartialData) && this.updateLastResult(t, n), (i || s) && Ze(this.observers, "next", t);
    }, e.prototype.reportError = function(t, n) {
      var i = d(d({}, this.getLastResult()), { error: t, errors: t.graphQLErrors, networkStatus: R.error, loading: !1 });
      this.updateLastResult(i, n), Ze(this.observers, "error", this.last.error = t);
    }, e.prototype.hasObservers = function() {
      return this.observers.size > 0;
    }, e.prototype.tearDownQuery = function() {
      this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(t) {
        return t.unsubscribe();
      }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
    }, e.prototype.transformDocument = function(t) {
      return this.queryManager.transform(t);
    }, e;
  }(P)
);
Ss(Lr);
function Us(r) {
  var e = r.options, t = e.fetchPolicy, n = e.nextFetchPolicy;
  return t === "cache-and-network" || t === "network-only" ? r.reobserve({
    fetchPolicy: "cache-first",
    // Use a temporary nextFetchPolicy function that replaces itself with the
    // previous nextFetchPolicy value and returns the original fetchPolicy.
    nextFetchPolicy: function(i, s) {
      return this.nextFetchPolicy = n, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(i, s) : t;
    }
  }) : r.reobserve();
}
function Tu(r) {
  globalThis.__DEV__ !== !1 && D.error(23, r.message, r.stack);
}
function zs(r) {
  globalThis.__DEV__ !== !1 && r && globalThis.__DEV__ !== !1 && D.debug(24, r);
}
function ar(r) {
  return r === "network-only" || r === "no-cache" || r === "standby";
}
var Ce = new (je ? WeakMap : Map)();
function cr(r, e) {
  var t = r[e];
  typeof t == "function" && (r[e] = function() {
    return Ce.set(
      r,
      // The %1e15 allows the count to wrap around to 0 safely every
      // quadrillion evictions, so there's no risk of overflow. To be
      // clear, this is more of a pedantic principle than something
      // that matters in any conceivable practical scenario.
      (Ce.get(r) + 1) % 1e15
    ), t.apply(this, arguments);
  });
}
function Ei(r) {
  r.notifyTimeout && (clearTimeout(r.notifyTimeout), r.notifyTimeout = void 0);
}
var ur = (
  /** @class */
  function() {
    function r(e, t) {
      t === void 0 && (t = e.generateQueryId()), this.queryId = t, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.stopped = !1, this.dirty = !1, this.observableQuery = null;
      var n = this.cache = e.cache;
      Ce.has(n) || (Ce.set(n, 0), cr(n, "evict"), cr(n, "modify"), cr(n, "reset"));
    }
    return r.prototype.init = function(e) {
      var t = e.networkStatus || R.loading;
      return this.variables && this.networkStatus !== R.loading && !L(this.variables, e.variables) && (t = R.setVariables), L(e.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
        document: e.document,
        variables: e.variables,
        networkError: null,
        graphQLErrors: this.graphQLErrors || [],
        networkStatus: t
      }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this;
    }, r.prototype.reset = function() {
      Ei(this), this.dirty = !1;
    }, r.prototype.resetDiff = function() {
      this.lastDiff = void 0;
    }, r.prototype.getDiff = function() {
      var e = this.getDiffOptions();
      if (this.lastDiff && L(e, this.lastDiff.options))
        return this.lastDiff.diff;
      this.updateWatch(this.variables);
      var t = this.observableQuery;
      if (t && t.options.fetchPolicy === "no-cache")
        return { complete: !1 };
      var n = this.cache.diff(e);
      return this.updateLastDiff(n, e), n;
    }, r.prototype.updateLastDiff = function(e, t) {
      this.lastDiff = e ? {
        diff: e,
        options: t || this.getDiffOptions()
      } : void 0;
    }, r.prototype.getDiffOptions = function(e) {
      var t;
      return e === void 0 && (e = this.variables), {
        query: this.document,
        variables: e,
        returnPartialData: !0,
        optimistic: !0,
        canonizeResults: (t = this.observableQuery) === null || t === void 0 ? void 0 : t.options.canonizeResults
      };
    }, r.prototype.setDiff = function(e) {
      var t = this, n, i = this.lastDiff && this.lastDiff.diff;
      e && !e.complete && (!((n = this.observableQuery) === null || n === void 0) && n.getLastError()) || (this.updateLastDiff(e), !this.dirty && !L(i && i.result, e && e.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
        return t.notify();
      }, 0))));
    }, r.prototype.setObservableQuery = function(e) {
      var t = this;
      e !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = e, e ? (e.queryInfo = this, this.listeners.add(this.oqListener = function() {
        var n = t.getDiff();
        n.fromOptimisticTransaction ? e.observe() : Us(e);
      })) : delete this.oqListener);
    }, r.prototype.notify = function() {
      var e = this;
      Ei(this), this.shouldNotify() && this.listeners.forEach(function(t) {
        return t(e);
      }), this.dirty = !1;
    }, r.prototype.shouldNotify = function() {
      if (!this.dirty || !this.listeners.size)
        return !1;
      if (ct(this.networkStatus) && this.observableQuery) {
        var e = this.observableQuery.options.fetchPolicy;
        if (e !== "cache-only" && e !== "cache-and-network")
          return !1;
      }
      return !0;
    }, r.prototype.stop = function() {
      if (!this.stopped) {
        this.stopped = !0, this.reset(), this.cancel(), this.cancel = r.prototype.cancel;
        var e = this.observableQuery;
        e && e.stopPolling();
      }
    }, r.prototype.cancel = function() {
    }, r.prototype.updateWatch = function(e) {
      var t = this;
      e === void 0 && (e = this.variables);
      var n = this.observableQuery;
      if (!(n && n.options.fetchPolicy === "no-cache")) {
        var i = d(d({}, this.getDiffOptions(e)), { watcher: this, callback: function(s) {
          return t.setDiff(s);
        } });
        (!this.lastWatch || !L(i, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = i));
      }
    }, r.prototype.resetLastWrite = function() {
      this.lastWrite = void 0;
    }, r.prototype.shouldWrite = function(e, t) {
      var n = this.lastWrite;
      return !(n && // If cache.evict has been called since the last time we wrote this
      // data into the cache, there's a chance writing this result into
      // the cache will repair what was evicted.
      n.dmCount === Ce.get(this.cache) && L(t, n.variables) && L(e.data, n.result.data));
    }, r.prototype.markResult = function(e, t, n, i) {
      var s = this, o = new ye(), a = ee(e.errors) ? e.errors.slice(0) : [];
      if (this.reset(), "incremental" in e && ee(e.incremental)) {
        var c = ks(this.getDiff().result, e);
        e.data = c;
      } else if ("hasNext" in e && e.hasNext) {
        var u = this.getDiff();
        e.data = o.merge(u.result, e.data);
      }
      this.graphQLErrors = a, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: e.data, complete: !0 }, this.getDiffOptions(n.variables)) : i !== 0 && (Mr(e, n.errorPolicy) ? this.cache.performTransaction(function(f) {
        if (s.shouldWrite(e, n.variables))
          f.writeQuery({
            query: t,
            data: e.data,
            variables: n.variables,
            overwrite: i === 1
          }), s.lastWrite = {
            result: e,
            variables: n.variables,
            dmCount: Ce.get(s.cache)
          };
        else if (s.lastDiff && s.lastDiff.diff.complete) {
          e.data = s.lastDiff.diff.result;
          return;
        }
        var h = s.getDiffOptions(n.variables), l = f.diff(h);
        !s.stopped && L(s.variables, n.variables) && s.updateWatch(n.variables), s.updateLastDiff(l, h), l.complete && (e.data = l.result);
      }) : this.lastWrite = void 0);
    }, r.prototype.markReady = function() {
      return this.networkError = null, this.networkStatus = R.ready;
    }, r.prototype.markError = function(e) {
      return this.networkStatus = R.error, this.lastWrite = void 0, this.reset(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e;
    }, r;
  }()
);
function Mr(r, e) {
  e === void 0 && (e = "none");
  var t = e === "ignore" || e === "all", n = !St(r);
  return !n && t && r.data && (n = !0), n;
}
var Su = Object.prototype.hasOwnProperty, wi = /* @__PURE__ */ Object.create(null), ku = (
  /** @class */
  function() {
    function r(e) {
      var t = this;
      this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new Xi(
        se["queryManager.getDocumentInfo"] || 2e3
        /* defaultCacheSizes["queryManager.getDocumentInfo"] */
      ), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new Be(!1);
      var n = new ms(
        function(s) {
          return t.cache.transformDocument(s);
        },
        // Allow the apollo cache to manage its own transform caches
        { cache: !1 }
      );
      this.cache = e.cache, this.link = e.link, this.defaultOptions = e.defaultOptions, this.queryDeduplication = e.queryDeduplication, this.clientAwareness = e.clientAwareness, this.localState = e.localState, this.ssrMode = e.ssrMode, this.assumeImmutableResults = e.assumeImmutableResults;
      var i = e.documentTransform;
      this.documentTransform = i ? n.concat(i).concat(n) : n, this.defaultContext = e.defaultContext || /* @__PURE__ */ Object.create(null), (this.onBroadcast = e.onBroadcast) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
    }
    return r.prototype.stop = function() {
      var e = this;
      this.queries.forEach(function(t, n) {
        e.stopQueryNoBroadcast(n);
      }), this.cancelPendingFetches($(25));
    }, r.prototype.cancelPendingFetches = function(e) {
      this.fetchCancelFns.forEach(function(t) {
        return t(e);
      }), this.fetchCancelFns.clear();
    }, r.prototype.mutate = function(e) {
      return ce(this, arguments, void 0, function(t) {
        var n, i, s, o, a, c, u, f = t.mutation, h = t.variables, l = t.optimisticResponse, p = t.updateQueries, v = t.refetchQueries, m = v === void 0 ? [] : v, E = t.awaitRefetchQueries, y = E === void 0 ? !1 : E, w = t.update, g = t.onQueryUpdated, _ = t.fetchPolicy, O = _ === void 0 ? ((c = this.defaultOptions.mutate) === null || c === void 0 ? void 0 : c.fetchPolicy) || "network-only" : _, k = t.errorPolicy, x = k === void 0 ? ((u = this.defaultOptions.mutate) === null || u === void 0 ? void 0 : u.errorPolicy) || "none" : k, N = t.keepRootFields, F = t.context;
        return ue(this, function(M) {
          switch (M.label) {
            case 0:
              return D(f, 26), D(O === "network-only" || O === "no-cache", 27), n = this.generateMutationId(), f = this.cache.transformForLink(this.transform(f)), i = this.getDocumentInfo(f).hasClientExports, h = this.getVariables(f, h), i ? [4, this.localState.addExportedVariables(f, h, F)] : [3, 2];
            case 1:
              h = M.sent(), M.label = 2;
            case 2:
              return s = this.mutationStore && (this.mutationStore[n] = {
                mutation: f,
                variables: h,
                loading: !0,
                error: null
              }), o = l && this.markMutationOptimistic(l, {
                mutationId: n,
                document: f,
                variables: h,
                fetchPolicy: O,
                errorPolicy: x,
                context: F,
                updateQueries: p,
                update: w,
                keepRootFields: N
              }), this.broadcastQueries(), a = this, [2, new Promise(function(we, Oe) {
                return tr(a.getObservableFromLink(f, d(d({}, F), { optimisticResponse: o ? l : void 0 }), h, {}, !1), function(W) {
                  if (St(W) && x === "none")
                    throw new Te({
                      graphQLErrors: xr(W)
                    });
                  s && (s.loading = !1, s.error = null);
                  var oe = d({}, W);
                  return typeof m == "function" && (m = m(oe)), x === "ignore" && St(oe) && delete oe.errors, a.markMutationResult({
                    mutationId: n,
                    result: oe,
                    document: f,
                    variables: h,
                    fetchPolicy: O,
                    errorPolicy: x,
                    context: F,
                    update: w,
                    updateQueries: p,
                    awaitRefetchQueries: y,
                    refetchQueries: m,
                    removeOptimistic: o ? n : void 0,
                    onQueryUpdated: g,
                    keepRootFields: N
                  });
                }).subscribe({
                  next: function(W) {
                    a.broadcastQueries(), (!("hasNext" in W) || W.hasNext === !1) && we(W);
                  },
                  error: function(W) {
                    s && (s.loading = !1, s.error = W), o && a.cache.removeOptimistic(n), a.broadcastQueries(), Oe(W instanceof Te ? W : new Te({
                      networkError: W
                    }));
                  }
                });
              })];
          }
        });
      });
    }, r.prototype.markMutationResult = function(e, t) {
      var n = this;
      t === void 0 && (t = this.cache);
      var i = e.result, s = [], o = e.fetchPolicy === "no-cache";
      if (!o && Mr(i, e.errorPolicy)) {
        if (Re(i) || s.push({
          result: i.data,
          dataId: "ROOT_MUTATION",
          query: e.document,
          variables: e.variables
        }), Re(i) && ee(i.incremental)) {
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
          a.result && (c = ks(a.result, i)), typeof c < "u" && (i.data = c, s.push({
            result: c,
            dataId: "ROOT_MUTATION",
            query: e.document,
            variables: e.variables
          }));
        }
        var u = e.updateQueries;
        u && this.queries.forEach(function(h, l) {
          var p = h.observableQuery, v = p && p.queryName;
          if (!(!v || !Su.call(u, v))) {
            var m = u[v], E = n.queries.get(l), y = E.document, w = E.variables, g = t.diff({
              query: y,
              variables: w,
              returnPartialData: !0,
              optimistic: !1
            }), _ = g.result, O = g.complete;
            if (O && _) {
              var k = m(_, {
                mutationResult: i,
                queryName: y && _r(y) || void 0,
                queryVariables: w
              });
              k && s.push({
                result: k,
                dataId: "ROOT_QUERY",
                query: y,
                variables: w
              });
            }
          }
        });
      }
      if (s.length > 0 || (e.refetchQueries || "").length > 0 || e.update || e.onQueryUpdated || e.removeOptimistic) {
        var f = [];
        if (this.refetchQueries({
          updateCache: function(h) {
            o || s.forEach(function(m) {
              return h.write(m);
            });
            var l = e.update, p = !wc(i) || Re(i) && !i.hasNext;
            if (l) {
              if (!o) {
                var v = h.diff({
                  id: "ROOT_MUTATION",
                  // The cache complains if passed a mutation where it expects a
                  // query, so we transform mutations and subscriptions to queries
                  // (only once, thanks to this.transformCache).
                  query: n.getDocumentInfo(e.document).asQuery,
                  variables: e.variables,
                  optimistic: !1,
                  returnPartialData: !0
                });
                v.complete && (i = d(d({}, i), { data: v.result }), "incremental" in i && delete i.incremental, "hasNext" in i && delete i.hasNext);
              }
              p && l(h, i, {
                context: e.context,
                variables: e.variables
              });
            }
            !o && !e.keepRootFields && p && h.modify({
              id: "ROOT_MUTATION",
              fields: function(m, E) {
                var y = E.fieldName, w = E.DELETE;
                return y === "__typename" ? m : w;
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
          return f.push(h);
        }), e.awaitRefetchQueries || e.onQueryUpdated)
          return Promise.all(f).then(function() {
            return i;
          });
      }
      return Promise.resolve(i);
    }, r.prototype.markMutationOptimistic = function(e, t) {
      var n = this, i = typeof e == "function" ? e(t.variables, { IGNORE: wi }) : e;
      return i === wi ? !1 : (this.cache.recordOptimisticTransaction(function(s) {
        try {
          n.markMutationResult(d(d({}, t), { result: { data: i } }), s);
        } catch (o) {
          globalThis.__DEV__ !== !1 && D.error(o);
        }
      }, t.mutationId), !0);
    }, r.prototype.fetchQuery = function(e, t, n) {
      return this.fetchConcastWithInfo(e, t, n).concast.promise;
    }, r.prototype.getQueryStore = function() {
      var e = /* @__PURE__ */ Object.create(null);
      return this.queries.forEach(function(t, n) {
        e[n] = {
          variables: t.variables,
          networkStatus: t.networkStatus,
          networkError: t.networkError,
          graphQLErrors: t.graphQLErrors
        };
      }), e;
    }, r.prototype.resetErrors = function(e) {
      var t = this.queries.get(e);
      t && (t.networkError = void 0, t.graphQLErrors = []);
    }, r.prototype.transform = function(e) {
      return this.documentTransform.transformDocument(e);
    }, r.prototype.getDocumentInfo = function(e) {
      var t = this.transformCache;
      if (!t.has(e)) {
        var n = {
          // TODO These three calls (hasClientExports, shouldForceResolvers, and
          // usesNonreactiveDirective) are performing independent full traversals
          // of the transformed document. We should consider merging these
          // traversals into a single pass in the future, though the work is
          // cached after the first time.
          hasClientExports: ra(e),
          hasForcedResolvers: this.localState.shouldForceResolvers(e),
          hasNonreactiveDirective: it(["nonreactive"], e),
          clientQuery: this.localState.clientQuery(e),
          serverQuery: bs([
            { name: "client", remove: !0 },
            { name: "connection" },
            { name: "nonreactive" }
          ], e),
          defaultVars: Kr(lt(e)),
          // Transform any mutation or subscription operations to query operations
          // so we can read/write them from/to the cache.
          asQuery: d(d({}, e), { definitions: e.definitions.map(function(i) {
            return i.kind === "OperationDefinition" && i.operation !== "query" ? d(d({}, i), { operation: "query" }) : i;
          }) })
        };
        t.set(e, n);
      }
      return t.get(e);
    }, r.prototype.getVariables = function(e, t) {
      return d(d({}, this.getDocumentInfo(e).defaultVars), t);
    }, r.prototype.watchQuery = function(e) {
      var t = this.transform(e.query);
      e = d(d({}, e), { variables: this.getVariables(t, e.variables) }), typeof e.notifyOnNetworkStatusChange > "u" && (e.notifyOnNetworkStatusChange = !1);
      var n = new ur(this), i = new Lr({
        queryManager: this,
        queryInfo: n,
        options: e
      });
      return i.lastQuery = t, this.queries.set(i.queryId, n), n.init({
        document: t,
        observableQuery: i,
        variables: i.variables
      }), i;
    }, r.prototype.query = function(e, t) {
      var n = this;
      return t === void 0 && (t = this.generateQueryId()), D(e.query, 28), D(e.query.kind === "Document", 29), D(!e.returnPartialData, 30), D(!e.pollInterval, 31), this.fetchQuery(t, d(d({}, e), { query: this.transform(e.query) })).finally(function() {
        return n.stopQuery(t);
      });
    }, r.prototype.generateQueryId = function() {
      return String(this.queryIdCounter++);
    }, r.prototype.generateRequestId = function() {
      return this.requestIdCounter++;
    }, r.prototype.generateMutationId = function() {
      return String(this.mutationIdCounter++);
    }, r.prototype.stopQueryInStore = function(e) {
      this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
    }, r.prototype.stopQueryInStoreNoBroadcast = function(e) {
      var t = this.queries.get(e);
      t && t.stop();
    }, r.prototype.clearStore = function(e) {
      return e === void 0 && (e = {
        discardWatches: !0
      }), this.cancelPendingFetches($(32)), this.queries.forEach(function(t) {
        t.observableQuery ? t.networkStatus = R.loading : t.stop();
      }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(e);
    }, r.prototype.getObservableQueries = function(e) {
      var t = this;
      e === void 0 && (e = "active");
      var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
      return Array.isArray(e) && e.forEach(function(o) {
        typeof o == "string" ? i.set(o, !1) : xa(o) ? i.set(t.transform(o), !1) : q(o) && o.query && s.add(o);
      }), this.queries.forEach(function(o, a) {
        var c = o.observableQuery, u = o.document;
        if (c) {
          if (e === "all") {
            n.set(a, c);
            return;
          }
          var f = c.queryName, h = c.options.fetchPolicy;
          if (h === "standby" || e === "active" && !c.hasObservers())
            return;
          (e === "active" || f && i.has(f) || u && i.has(u)) && (n.set(a, c), f && i.set(f, !0), u && i.set(u, !0));
        }
      }), s.size && s.forEach(function(o) {
        var a = dr("legacyOneTimeQuery"), c = t.getQuery(a).init({
          document: o.query,
          variables: o.variables
        }), u = new Lr({
          queryManager: t,
          queryInfo: c,
          options: d(d({}, o), { fetchPolicy: "network-only" })
        });
        D(u.queryId === a), c.setObservableQuery(u), n.set(a, u);
      }), globalThis.__DEV__ !== !1 && i.size && i.forEach(function(o, a) {
        o || globalThis.__DEV__ !== !1 && D.warn(typeof a == "string" ? 33 : 34, a);
      }), n;
    }, r.prototype.reFetchObservableQueries = function(e) {
      var t = this;
      e === void 0 && (e = !1);
      var n = [];
      return this.getObservableQueries(e ? "all" : "active").forEach(function(i, s) {
        var o = i.options.fetchPolicy;
        i.resetLastResults(), (e || o !== "standby" && o !== "cache-only") && n.push(i.refetch()), t.getQuery(s).setDiff(null);
      }), this.broadcastQueries(), Promise.all(n);
    }, r.prototype.setObservableQuery = function(e) {
      this.getQuery(e.queryId).setObservableQuery(e);
    }, r.prototype.startGraphQLSubscription = function(e) {
      var t = this, n = e.query, i = e.fetchPolicy, s = e.errorPolicy, o = s === void 0 ? "none" : s, a = e.variables, c = e.context, u = c === void 0 ? {} : c, f = e.extensions, h = f === void 0 ? {} : f;
      n = this.transform(n), a = this.getVariables(n, a);
      var l = function(v) {
        return t.getObservableFromLink(n, u, v, h).map(function(m) {
          i !== "no-cache" && (Mr(m, o) && t.cache.write({
            query: n,
            result: m.data,
            dataId: "ROOT_SUBSCRIPTION",
            variables: v
          }), t.broadcastQueries());
          var E = St(m), y = Mc(m);
          if (E || y) {
            var w = {};
            if (E && (w.graphQLErrors = m.errors), y && (w.protocolErrors = m.extensions[cn]), o === "none" || y)
              throw new Te(w);
          }
          return o === "ignore" && delete m.errors, m;
        });
      };
      if (this.getDocumentInfo(n).hasClientExports) {
        var p = this.localState.addExportedVariables(n, a, u).then(l);
        return new P(function(v) {
          var m = null;
          return p.then(function(E) {
            return m = E.subscribe(v);
          }, v.error), function() {
            return m && m.unsubscribe();
          };
        });
      }
      return l(a);
    }, r.prototype.stopQuery = function(e) {
      this.stopQueryNoBroadcast(e), this.broadcastQueries();
    }, r.prototype.stopQueryNoBroadcast = function(e) {
      this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
    }, r.prototype.removeQuery = function(e) {
      this.fetchCancelFns.delete(e), this.queries.has(e) && (this.getQuery(e).stop(), this.queries.delete(e));
    }, r.prototype.broadcastQueries = function() {
      this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(e) {
        return e.notify();
      });
    }, r.prototype.getLocalState = function() {
      return this.localState;
    }, r.prototype.getObservableFromLink = function(e, t, n, i, s) {
      var o = this, a;
      s === void 0 && (s = (a = t == null ? void 0 : t.queryDeduplication) !== null && a !== void 0 ? a : this.queryDeduplication);
      var c, u = this.getDocumentInfo(e), f = u.serverQuery, h = u.clientQuery;
      if (f) {
        var l = this, p = l.inFlightLinkObservables, v = l.link, m = {
          query: f,
          variables: n,
          operationName: _r(f) || void 0,
          context: this.prepareContext(d(d({}, t), { forceFetch: !s })),
          extensions: i
        };
        if (t = m.context, s) {
          var E = zt(f), y = le(n), w = p.lookup(E, y);
          if (c = w.observable, !c) {
            var g = new ke([
              Nr(v, m)
            ]);
            c = w.observable = g, g.beforeNext(function() {
              p.remove(E, y);
            });
          }
        } else
          c = new ke([
            Nr(v, m)
          ]);
      } else
        c = new ke([P.of({ data: {} })]), t = this.prepareContext(t);
      return h && (c = tr(c, function(_) {
        return o.localState.runResolvers({
          document: h,
          remoteResult: _,
          context: t,
          variables: n
        });
      })), c;
    }, r.prototype.getResultsFromLink = function(e, t, n) {
      var i = e.lastRequestId = this.generateRequestId(), s = this.cache.transformForLink(n.query);
      return tr(this.getObservableFromLink(s, n.context, n.variables), function(o) {
        var a = xr(o), c = a.length > 0;
        if (i >= e.lastRequestId) {
          if (c && n.errorPolicy === "none")
            throw e.markError(new Te({
              graphQLErrors: a
            }));
          e.markResult(o, s, n, t), e.markReady();
        }
        var u = {
          data: o.data,
          loading: !1,
          networkStatus: R.ready
        };
        return c && n.errorPolicy !== "ignore" && (u.errors = a, u.networkStatus = R.error), u;
      }, function(o) {
        var a = qc(o) ? o : new Te({ networkError: o });
        throw i >= e.lastRequestId && e.markError(a), a;
      });
    }, r.prototype.fetchConcastWithInfo = function(e, t, n, i) {
      var s = this;
      n === void 0 && (n = R.loading), i === void 0 && (i = t.query);
      var o = this.getVariables(i, t.variables), a = this.getQuery(e), c = this.defaultOptions.watchQuery, u = t.fetchPolicy, f = u === void 0 ? c && c.fetchPolicy || "cache-first" : u, h = t.errorPolicy, l = h === void 0 ? c && c.errorPolicy || "none" : h, p = t.returnPartialData, v = p === void 0 ? !1 : p, m = t.notifyOnNetworkStatusChange, E = m === void 0 ? !1 : m, y = t.context, w = y === void 0 ? {} : y, g = Object.assign({}, t, {
        query: i,
        variables: o,
        fetchPolicy: f,
        errorPolicy: l,
        returnPartialData: v,
        notifyOnNetworkStatusChange: E,
        context: w
      }), _ = function(F) {
        g.variables = F;
        var M = s.fetchQueryByPolicy(a, g, n);
        return (
          // If we're in standby, postpone advancing options.fetchPolicy using
          // applyNextFetchPolicy.
          g.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
          // this is another way to detect when nothing was done/fetched.
          M.sources.length > 0 && a.observableQuery && a.observableQuery.applyNextFetchPolicy("after-fetch", t), M
        );
      }, O = function() {
        return s.fetchCancelFns.delete(e);
      };
      this.fetchCancelFns.set(e, function(F) {
        O(), setTimeout(function() {
          return k.cancel(F);
        });
      });
      var k, x;
      if (this.getDocumentInfo(g.query).hasClientExports)
        k = new ke(this.localState.addExportedVariables(g.query, g.variables, g.context).then(_).then(function(F) {
          return F.sources;
        })), x = !0;
      else {
        var N = _(g.variables);
        x = N.fromLink, k = new ke(N.sources);
      }
      return k.promise.then(O, O), {
        concast: k,
        fromLink: x
      };
    }, r.prototype.refetchQueries = function(e) {
      var t = this, n = e.updateCache, i = e.include, s = e.optimistic, o = s === void 0 ? !1 : s, a = e.removeOptimistic, c = a === void 0 ? o ? dr("refetchQueries") : void 0 : a, u = e.onQueryUpdated, f = /* @__PURE__ */ new Map();
      i && this.getObservableQueries(i).forEach(function(l, p) {
        f.set(p, {
          oq: l,
          lastDiff: t.getQuery(p).getDiff()
        });
      });
      var h = /* @__PURE__ */ new Map();
      return n && this.cache.batch({
        update: n,
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
        onWatchUpdated: function(l, p, v) {
          var m = l.watcher instanceof ur && l.watcher.observableQuery;
          if (m) {
            if (u) {
              f.delete(m.queryId);
              var E = u(m, p, v);
              return E === !0 && (E = m.refetch()), E !== !1 && h.set(m, E), E;
            }
            u !== null && f.set(m.queryId, { oq: m, lastDiff: v, diff: p });
          }
        }
      }), f.size && f.forEach(function(l, p) {
        var v = l.oq, m = l.lastDiff, E = l.diff, y;
        if (u) {
          if (!E) {
            var w = v.queryInfo;
            w.reset(), E = w.getDiff();
          }
          y = u(v, E, m);
        }
        (!u || y === !0) && (y = v.refetch()), y !== !1 && h.set(v, y), p.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(p);
      }), c && this.cache.removeOptimistic(c), h;
    }, r.prototype.fetchQueryByPolicy = function(e, t, n) {
      var i = this, s = t.query, o = t.variables, a = t.fetchPolicy, c = t.refetchWritePolicy, u = t.errorPolicy, f = t.returnPartialData, h = t.context, l = t.notifyOnNetworkStatusChange, p = e.networkStatus;
      e.init({
        document: s,
        variables: o,
        networkStatus: n
      });
      var v = function() {
        return e.getDiff();
      }, m = function(_, O) {
        O === void 0 && (O = e.networkStatus || R.loading);
        var k = _.result;
        globalThis.__DEV__ !== !1 && !f && !L(k, {}) && zs(_.missing);
        var x = function(N) {
          return P.of(d({ data: N, loading: ct(O), networkStatus: O }, _.complete ? null : { partial: !0 }));
        };
        return k && i.getDocumentInfo(s).hasForcedResolvers ? i.localState.runResolvers({
          document: s,
          remoteResult: { data: k },
          context: h,
          variables: o,
          onlyRunForcedResolvers: !0
        }).then(function(N) {
          return x(N.data || void 0);
        }) : u === "none" && O === R.refetch && Array.isArray(_.missing) ? x(void 0) : x(k);
      }, E = a === "no-cache" ? 0 : n === R.refetch && c !== "merge" ? 1 : 2, y = function() {
        return i.getResultsFromLink(e, E, {
          query: s,
          variables: o,
          context: h,
          fetchPolicy: a,
          errorPolicy: u
        });
      }, w = l && typeof p == "number" && p !== n && ct(n);
      switch (a) {
        default:
        case "cache-first": {
          var g = v();
          return g.complete ? {
            fromLink: !1,
            sources: [m(g, e.markReady())]
          } : f || w ? {
            fromLink: !0,
            sources: [m(g), y()]
          } : { fromLink: !0, sources: [y()] };
        }
        case "cache-and-network": {
          var g = v();
          return g.complete || f || w ? {
            fromLink: !0,
            sources: [m(g), y()]
          } : { fromLink: !0, sources: [y()] };
        }
        case "cache-only":
          return {
            fromLink: !1,
            sources: [m(v(), e.markReady())]
          };
        case "network-only":
          return w ? {
            fromLink: !0,
            sources: [m(v()), y()]
          } : { fromLink: !0, sources: [y()] };
        case "no-cache":
          return w ? {
            fromLink: !0,
            // Note that queryInfo.getDiff() for no-cache queries does not call
            // cache.diff, but instead returns a { complete: false } stub result
            // when there is no queryInfo.diff already defined.
            sources: [m(e.getDiff()), y()]
          } : { fromLink: !0, sources: [y()] };
        case "standby":
          return { fromLink: !1, sources: [] };
      }
    }, r.prototype.getQuery = function(e) {
      return e && !this.queries.has(e) && this.queries.set(e, new ur(this, e)), this.queries.get(e);
    }, r.prototype.prepareContext = function(e) {
      e === void 0 && (e = {});
      var t = this.localState.prepareContext(e);
      return d(d(d({}, this.defaultContext), t), { clientAwareness: this.clientAwareness });
    }, r;
  }()
), Du = (
  /** @class */
  function() {
    function r(e) {
      var t = e.cache, n = e.client, i = e.resolvers, s = e.fragmentMatcher;
      this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = t, n && (this.client = n), i && this.addResolvers(i), s && this.setFragmentMatcher(s);
    }
    return r.prototype.addResolvers = function(e) {
      var t = this;
      this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(n) {
        t.resolvers = Qn(t.resolvers, n);
      }) : this.resolvers = Qn(this.resolvers, e);
    }, r.prototype.setResolvers = function(e) {
      this.resolvers = {}, this.addResolvers(e);
    }, r.prototype.getResolvers = function() {
      return this.resolvers || {};
    }, r.prototype.runResolvers = function(e) {
      return ce(this, arguments, void 0, function(t) {
        var n = t.document, i = t.remoteResult, s = t.context, o = t.variables, a = t.onlyRunForcedResolvers, c = a === void 0 ? !1 : a;
        return ue(this, function(u) {
          return n ? [2, this.resolveDocument(n, i.data, s, o, this.fragmentMatcher, c).then(function(f) {
            return d(d({}, i), { data: f.result });
          })] : [2, i];
        });
      });
    }, r.prototype.setFragmentMatcher = function(e) {
      this.fragmentMatcher = e;
    }, r.prototype.getFragmentMatcher = function() {
      return this.fragmentMatcher;
    }, r.prototype.clientQuery = function(e) {
      return it(["client"], e) && this.resolvers ? e : null;
    }, r.prototype.serverQuery = function(e) {
      return Es(e);
    }, r.prototype.prepareContext = function(e) {
      var t = this.cache;
      return d(d({}, e), {
        cache: t,
        // Getting an entry's cache key is useful for local state resolvers.
        getCacheKey: function(n) {
          return t.identify(n);
        }
      });
    }, r.prototype.addExportedVariables = function(e) {
      return ce(this, arguments, void 0, function(t, n, i) {
        return n === void 0 && (n = {}), i === void 0 && (i = {}), ue(this, function(s) {
          return t ? [2, this.resolveDocument(t, this.buildRootValueFromCache(t, n) || {}, this.prepareContext(i), n).then(function(o) {
            return d(d({}, n), o.exportedVariables);
          })] : [2, d({}, n)];
        });
      });
    }, r.prototype.shouldForceResolvers = function(e) {
      var t = !1;
      return ie(e, {
        Directive: {
          enter: function(n) {
            if (n.name.value === "client" && n.arguments && (t = n.arguments.some(function(i) {
              return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
            }), t))
              return Jr;
          }
        }
      }), t;
    }, r.prototype.buildRootValueFromCache = function(e, t) {
      return this.cache.diff({
        query: oc(e),
        variables: t,
        returnPartialData: !0,
        optimistic: !1
      }).result;
    }, r.prototype.resolveDocument = function(e, t) {
      return ce(this, arguments, void 0, function(n, i, s, o, a, c) {
        var u, f, h, l, p, v, m, E, y, w, g;
        return s === void 0 && (s = {}), o === void 0 && (o = {}), a === void 0 && (a = function() {
          return !0;
        }), c === void 0 && (c = !1), ue(this, function(_) {
          return u = ht(n), f = jt(n), h = qt(f), l = this.collectSelectionsToResolve(u, h), p = u.operation, v = p ? p.charAt(0).toUpperCase() + p.slice(1) : "Query", m = this, E = m.cache, y = m.client, w = {
            fragmentMap: h,
            context: d(d({}, s), { cache: E, client: y }),
            variables: o,
            fragmentMatcher: a,
            defaultOperationType: v,
            exportedVariables: {},
            selectionsToResolve: l,
            onlyRunForcedResolvers: c
          }, g = !1, [2, this.resolveSelectionSet(u.selectionSet, g, i, w).then(function(O) {
            return {
              result: O,
              exportedVariables: w.exportedVariables
            };
          })];
        });
      });
    }, r.prototype.resolveSelectionSet = function(e, t, n, i) {
      return ce(this, void 0, void 0, function() {
        var s, o, a, c, u, f = this;
        return ue(this, function(h) {
          return s = i.fragmentMap, o = i.context, a = i.variables, c = [n], u = function(l) {
            return ce(f, void 0, void 0, function() {
              var p, v;
              return ue(this, function(m) {
                return !t && !i.selectionsToResolve.has(l) ? [
                  2
                  /*return*/
                ] : ut(l, a) ? pe(l) ? [2, this.resolveField(l, t, n, i).then(function(E) {
                  var y;
                  typeof E < "u" && c.push((y = {}, y[he(l)] = E, y));
                })] : (Ba(l) ? p = l : (p = s[l.name.value], D(p, 18, l.name.value)), p && p.typeCondition && (v = p.typeCondition.name.value, i.fragmentMatcher(n, v, o)) ? [2, this.resolveSelectionSet(p.selectionSet, t, n, i).then(function(E) {
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
            return Wt(c);
          })];
        });
      });
    }, r.prototype.resolveField = function(e, t, n, i) {
      return ce(this, void 0, void 0, function() {
        var s, o, a, c, u, f, h, l, p, v = this;
        return ue(this, function(m) {
          return n ? (s = i.variables, o = e.name.value, a = he(e), c = o !== a, u = n[a] || n[o], f = Promise.resolve(u), (!i.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (h = n.__typename || i.defaultOperationType, l = this.resolvers && this.resolvers[h], l && (p = l[c ? o : a], p && (f = Promise.resolve(
            // In case the resolve function accesses reactive variables,
            // set cacheSlot to the current cache instance.
            un.withValue(this.cache, p, [
              n,
              Bt(e, s),
              i.context,
              { field: e, fragmentMap: i.fragmentMap }
            ])
          )))), [2, f.then(function(E) {
            var y, w;
            if (E === void 0 && (E = u), e.directives && e.directives.forEach(function(_) {
              _.name.value === "export" && _.arguments && _.arguments.forEach(function(O) {
                O.name.value === "as" && O.value.kind === "StringValue" && (i.exportedVariables[O.value.value] = E);
              });
            }), !e.selectionSet || E == null)
              return E;
            var g = (w = (y = e.directives) === null || y === void 0 ? void 0 : y.some(function(_) {
              return _.name.value === "client";
            })) !== null && w !== void 0 ? w : !1;
            if (Array.isArray(E))
              return v.resolveSubSelectedArray(e, t || g, E, i);
            if (e.selectionSet)
              return v.resolveSelectionSet(e.selectionSet, t || g, E, i);
          })]) : [2, null];
        });
      });
    }, r.prototype.resolveSubSelectedArray = function(e, t, n, i) {
      var s = this;
      return Promise.all(n.map(function(o) {
        if (o === null)
          return null;
        if (Array.isArray(o))
          return s.resolveSubSelectedArray(e, t, o, i);
        if (e.selectionSet)
          return s.resolveSelectionSet(e.selectionSet, t, o, i);
      }));
    }, r.prototype.collectSelectionsToResolve = function(e, t) {
      var n = function(o) {
        return !Array.isArray(o);
      }, i = this.selectionsToResolveCache;
      function s(o) {
        if (!i.has(o)) {
          var a = /* @__PURE__ */ new Set();
          i.set(o, a), ie(o, {
            Directive: function(c, u, f, h, l) {
              c.name.value === "client" && l.forEach(function(p) {
                n(p) && An(p) && a.add(p);
              });
            },
            FragmentSpread: function(c, u, f, h, l) {
              var p = t[c.name.value];
              D(p, 19, c.name.value);
              var v = s(p);
              v.size > 0 && (l.forEach(function(m) {
                n(m) && An(m) && a.add(m);
              }), a.add(c), v.forEach(function(m) {
                a.add(m);
              }));
            }
          });
        }
        return i.get(o);
      }
      return s(e);
    }, r;
  }()
), Oi = !1, Ws = (
  /** @class */
  function() {
    function r(e) {
      var t = this;
      if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache)
        throw $(15);
      var n = e.uri, i = e.credentials, s = e.headers, o = e.cache, a = e.documentTransform, c = e.ssrMode, u = c === void 0 ? !1 : c, f = e.ssrForceFetchDelay, h = f === void 0 ? 0 : f, l = e.connectToDevTools, p = e.queryDeduplication, v = p === void 0 ? !0 : p, m = e.defaultOptions, E = e.defaultContext, y = e.assumeImmutableResults, w = y === void 0 ? o.assumeImmutableResults : y, g = e.resolvers, _ = e.typeDefs, O = e.fragmentMatcher, k = e.name, x = e.version, N = e.devtools, F = e.link;
      F || (F = n ? new tu({ uri: n, credentials: i, headers: s }) : pt.empty()), this.link = F, this.cache = o, this.disableNetworkFetches = u || h > 0, this.queryDeduplication = v, this.defaultOptions = m || /* @__PURE__ */ Object.create(null), this.typeDefs = _, this.devtoolsConfig = d(d({}, N), { enabled: (N == null ? void 0 : N.enabled) || l }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), h && setTimeout(function() {
        return t.disableNetworkFetches = !1;
      }, h), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = Wr, this.localState = new Du({
        cache: o,
        client: this,
        resolvers: g,
        fragmentMatcher: O
      }), this.queryManager = new ku({
        cache: this.cache,
        link: this.link,
        defaultOptions: this.defaultOptions,
        defaultContext: E,
        documentTransform: a,
        queryDeduplication: v,
        ssrMode: u,
        clientAwareness: {
          name: k,
          version: x
        },
        localState: this.localState,
        assumeImmutableResults: w,
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
    return r.prototype.connectToDevTools = function() {
      if (!(typeof window > "u")) {
        var e = window, t = Symbol.for("apollo.devtools");
        (e[t] = e[t] || []).push(this), e.__APOLLO_CLIENT__ = this, !Oi && globalThis.__DEV__ !== !1 && (Oi = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
          if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
            var n = window.navigator, i = n && n.userAgent, s = void 0;
            typeof i == "string" && (i.indexOf("Chrome/") > -1 ? s = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : i.indexOf("Firefox/") > -1 && (s = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), s && globalThis.__DEV__ !== !1 && D.log("Download the Apollo DevTools for a better development experience: %s", s);
          }
        }, 1e4));
      }
    }, Object.defineProperty(r.prototype, "documentTransform", {
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
    }), r.prototype.stop = function() {
      this.queryManager.stop();
    }, r.prototype.watchQuery = function(e) {
      return this.defaultOptions.watchQuery && (e = rr(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = d(d({}, e), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(e);
    }, r.prototype.query = function(e) {
      return this.defaultOptions.query && (e = rr(this.defaultOptions.query, e)), D(e.fetchPolicy !== "cache-and-network", 16), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = d(d({}, e), { fetchPolicy: "cache-first" })), this.queryManager.query(e);
    }, r.prototype.mutate = function(e) {
      return this.defaultOptions.mutate && (e = rr(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
    }, r.prototype.subscribe = function(e) {
      return this.queryManager.startGraphQLSubscription(e);
    }, r.prototype.readQuery = function(e, t) {
      return t === void 0 && (t = !1), this.cache.readQuery(e, t);
    }, r.prototype.watchFragment = function(e) {
      return this.cache.watchFragment(e);
    }, r.prototype.readFragment = function(e, t) {
      return t === void 0 && (t = !1), this.cache.readFragment(e, t);
    }, r.prototype.writeQuery = function(e) {
      var t = this.cache.writeQuery(e);
      return e.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
    }, r.prototype.writeFragment = function(e) {
      var t = this.cache.writeFragment(e);
      return e.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
    }, r.prototype.__actionHookForDevTools = function(e) {
      this.devToolsHookCb = e;
    }, r.prototype.__requestRaw = function(e) {
      return Nr(this.link, e);
    }, r.prototype.resetStore = function() {
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
    }, r.prototype.clearStore = function() {
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
    }, r.prototype.onResetStore = function(e) {
      var t = this;
      return this.resetStoreCallbacks.push(e), function() {
        t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function(n) {
          return n !== e;
        });
      };
    }, r.prototype.onClearStore = function(e) {
      var t = this;
      return this.clearStoreCallbacks.push(e), function() {
        t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function(n) {
          return n !== e;
        });
      };
    }, r.prototype.reFetchObservableQueries = function(e) {
      return this.queryManager.reFetchObservableQueries(e);
    }, r.prototype.refetchQueries = function(e) {
      var t = this.queryManager.refetchQueries(e), n = [], i = [];
      t.forEach(function(o, a) {
        n.push(a), i.push(o);
      });
      var s = Promise.all(i);
      return s.queries = n, s.results = i, s.catch(function(o) {
        globalThis.__DEV__ !== !1 && D.debug(17, o);
      }), s;
    }, r.prototype.getObservableQueries = function(e) {
      return e === void 0 && (e = "active"), this.queryManager.getObservableQueries(e);
    }, r.prototype.extract = function(e) {
      return this.cache.extract(e);
    }, r.prototype.restore = function(e) {
      return this.cache.restore(e);
    }, r.prototype.addResolvers = function(e) {
      this.localState.addResolvers(e);
    }, r.prototype.setResolvers = function(e) {
      this.localState.setResolvers(e);
    }, r.prototype.getResolvers = function() {
      return this.localState.getResolvers();
    }, r.prototype.setLocalStateFragmentMatcher = function(e) {
      this.localState.setFragmentMatcher(e);
    }, r.prototype.setLink = function(e) {
      this.link = this.queryManager.link = e;
    }, Object.defineProperty(r.prototype, "defaultContext", {
      get: function() {
        return this.queryManager.defaultContext;
      },
      enumerable: !1,
      configurable: !0
    }), r;
  }()
);
globalThis.__DEV__ !== !1 && (Ws.prototype.getMemoryInternals = ba);
var xt = /* @__PURE__ */ new Map(), qr = /* @__PURE__ */ new Map(), $s = !0, Ft = !1;
function Gs(r) {
  return r.replace(/[\s,]+/g, " ").trim();
}
function xu(r) {
  return Gs(r.source.body.substring(r.start, r.end));
}
function Nu(r) {
  var e = /* @__PURE__ */ new Set(), t = [];
  return r.definitions.forEach(function(n) {
    if (n.kind === "FragmentDefinition") {
      var i = n.name.value, s = xu(n.loc), o = qr.get(i);
      o && !o.has(s) ? $s && console.warn("Warning: fragment with name " + i + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : o || qr.set(i, o = /* @__PURE__ */ new Set()), o.add(s), e.has(s) || (e.add(s), t.push(n));
    } else
      t.push(n);
  }), d(d({}, r), { definitions: t });
}
function Iu(r) {
  var e = new Set(r.definitions);
  e.forEach(function(n) {
    n.loc && delete n.loc, Object.keys(n).forEach(function(i) {
      var s = n[i];
      s && typeof s == "object" && e.add(s);
    });
  });
  var t = r.loc;
  return t && (delete t.startToken, delete t.endToken), r;
}
function Cu(r) {
  var e = Gs(r);
  if (!xt.has(e)) {
    var t = $o(r, {
      experimentalFragmentVariables: Ft,
      allowLegacyFragmentVariables: Ft
    });
    if (!t || t.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    xt.set(e, Iu(Nu(t)));
  }
  return xt.get(e);
}
function Ee(r) {
  for (var e = [], t = 1; t < arguments.length; t++)
    e[t - 1] = arguments[t];
  typeof r == "string" && (r = [r]);
  var n = r[0];
  return e.forEach(function(i, s) {
    i && i.kind === "Document" ? n += i.loc.source.body : n += i, n += r[s + 1];
  }), Cu(n);
}
function Au() {
  xt.clear(), qr.clear();
}
function Ru() {
  $s = !1;
}
function Fu() {
  Ft = !0;
}
function Pu() {
  Ft = !1;
}
var He = {
  gql: Ee,
  resetCaches: Au,
  disableFragmentWarnings: Ru,
  enableExperimentalFragmentVariables: Fu,
  disableExperimentalFragmentVariables: Pu
};
(function(r) {
  r.gql = He.gql, r.resetCaches = He.resetCaches, r.disableFragmentWarnings = He.disableFragmentWarnings, r.enableExperimentalFragmentVariables = He.enableExperimentalFragmentVariables, r.disableExperimentalFragmentVariables = He.disableExperimentalFragmentVariables;
})(Ee || (Ee = {}));
Ee.default = Ee;
const Lu = (r) => new Ws({
  // uri: "https://countries.trevorblades.com",
  // cache: new InMemoryCache(),
  uri: r.uri || "https://countries.trevorblades.com",
  cache: r.cache || new pn()
});
Ee`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;
const _i = async (r, e = {}) => {
  const { method: t = "GET", headers: n = {}, body: i } = e, s = {
    method: t,
    headers: n
  };
  i && (s.body = JSON.stringify(i));
  const o = await fetch(r, s);
  if (!o.ok)
    throw new Error(`HTTP error! status: ${o.status}`);
  return o.json();
}, te = /* @__PURE__ */ Object.create(null);
te.open = "0";
te.close = "1";
te.ping = "2";
te.pong = "3";
te.message = "4";
te.upgrade = "5";
te.noop = "6";
const Nt = /* @__PURE__ */ Object.create(null);
Object.keys(te).forEach((r) => {
  Nt[te[r]] = r;
});
const Vr = { type: "error", data: "parser error" }, Hs = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Ys = typeof ArrayBuffer == "function", Js = (r) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r && r.buffer instanceof ArrayBuffer, dn = ({ type: r, data: e }, t, n) => Hs && e instanceof Blob ? t ? n(e) : Ti(e, n) : Ys && (e instanceof ArrayBuffer || Js(e)) ? t ? n(e) : Ti(new Blob([e]), n) : n(te[r] + (e || "")), Ti = (r, e) => {
  const t = new FileReader();
  return t.onload = function() {
    const n = t.result.split(",")[1];
    e("b" + (n || ""));
  }, t.readAsDataURL(r);
};
function Si(r) {
  return r instanceof Uint8Array ? r : r instanceof ArrayBuffer ? new Uint8Array(r) : new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
}
let fr;
function Mu(r, e) {
  if (Hs && r.data instanceof Blob)
    return r.data.arrayBuffer().then(Si).then(e);
  if (Ys && (r.data instanceof ArrayBuffer || Js(r.data)))
    return e(Si(r.data));
  dn(r, !1, (t) => {
    fr || (fr = new TextEncoder()), e(fr.encode(t));
  });
}
const ki = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ke = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let r = 0; r < ki.length; r++)
  Ke[ki.charCodeAt(r)] = r;
const qu = (r) => {
  let e = r.length * 0.75, t = r.length, n, i = 0, s, o, a, c;
  r[r.length - 1] === "=" && (e--, r[r.length - 2] === "=" && e--);
  const u = new ArrayBuffer(e), f = new Uint8Array(u);
  for (n = 0; n < t; n += 4)
    s = Ke[r.charCodeAt(n)], o = Ke[r.charCodeAt(n + 1)], a = Ke[r.charCodeAt(n + 2)], c = Ke[r.charCodeAt(n + 3)], f[i++] = s << 2 | o >> 4, f[i++] = (o & 15) << 4 | a >> 2, f[i++] = (a & 3) << 6 | c & 63;
  return u;
}, Vu = typeof ArrayBuffer == "function", yn = (r, e) => {
  if (typeof r != "string")
    return {
      type: "message",
      data: Ks(r, e)
    };
  const t = r.charAt(0);
  return t === "b" ? {
    type: "message",
    data: Bu(r.substring(1), e)
  } : Nt[t] ? r.length > 1 ? {
    type: Nt[t],
    data: r.substring(1)
  } : {
    type: Nt[t]
  } : Vr;
}, Bu = (r, e) => {
  if (Vu) {
    const t = qu(r);
    return Ks(t, e);
  } else
    return { base64: !0, data: r };
}, Ks = (r, e) => {
  switch (e) {
    case "blob":
      return r instanceof Blob ? r : new Blob([r]);
    case "arraybuffer":
    default:
      return r instanceof ArrayBuffer ? r : r.buffer;
  }
}, Xs = "", ju = (r, e) => {
  const t = r.length, n = new Array(t);
  let i = 0;
  r.forEach((s, o) => {
    dn(s, !1, (a) => {
      n[o] = a, ++i === t && e(n.join(Xs));
    });
  });
}, Qu = (r, e) => {
  const t = r.split(Xs), n = [];
  for (let i = 0; i < t.length; i++) {
    const s = yn(t[i], e);
    if (n.push(s), s.type === "error")
      break;
  }
  return n;
};
function Uu() {
  return new TransformStream({
    transform(r, e) {
      Mu(r, (t) => {
        const n = t.length;
        let i;
        if (n < 126)
          i = new Uint8Array(1), new DataView(i.buffer).setUint8(0, n);
        else if (n < 65536) {
          i = new Uint8Array(3);
          const s = new DataView(i.buffer);
          s.setUint8(0, 126), s.setUint16(1, n);
        } else {
          i = new Uint8Array(9);
          const s = new DataView(i.buffer);
          s.setUint8(0, 127), s.setBigUint64(1, BigInt(n));
        }
        r.data && typeof r.data != "string" && (i[0] |= 128), e.enqueue(i), e.enqueue(t);
      });
    }
  });
}
let lr;
function gt(r) {
  return r.reduce((e, t) => e + t.length, 0);
}
function bt(r, e) {
  if (r[0].length === e)
    return r.shift();
  const t = new Uint8Array(e);
  let n = 0;
  for (let i = 0; i < e; i++)
    t[i] = r[0][n++], n === r[0].length && (r.shift(), n = 0);
  return r.length && n < r[0].length && (r[0] = r[0].slice(n)), t;
}
function zu(r, e) {
  lr || (lr = new TextDecoder());
  const t = [];
  let n = 0, i = -1, s = !1;
  return new TransformStream({
    transform(o, a) {
      for (t.push(o); ; ) {
        if (n === 0) {
          if (gt(t) < 1)
            break;
          const c = bt(t, 1);
          s = (c[0] & 128) === 128, i = c[0] & 127, i < 126 ? n = 3 : i === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (gt(t) < 2)
            break;
          const c = bt(t, 2);
          i = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (gt(t) < 8)
            break;
          const c = bt(t, 8), u = new DataView(c.buffer, c.byteOffset, c.length), f = u.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(Vr);
            break;
          }
          i = f * Math.pow(2, 32) + u.getUint32(4), n = 3;
        } else {
          if (gt(t) < i)
            break;
          const c = bt(t, i);
          a.enqueue(yn(s ? c : lr.decode(c), e)), n = 0;
        }
        if (i === 0 || i > r) {
          a.enqueue(Vr);
          break;
        }
      }
    }
  });
}
const Zs = 4;
function j(r) {
  if (r) return Wu(r);
}
function Wu(r) {
  for (var e in j.prototype)
    r[e] = j.prototype[e];
  return r;
}
j.prototype.on = j.prototype.addEventListener = function(r, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(e), this;
};
j.prototype.once = function(r, e) {
  function t() {
    this.off(r, t), e.apply(this, arguments);
  }
  return t.fn = e, this.on(r, t), this;
};
j.prototype.off = j.prototype.removeListener = j.prototype.removeAllListeners = j.prototype.removeEventListener = function(r, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var t = this._callbacks["$" + r];
  if (!t) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + r], this;
  for (var n, i = 0; i < t.length; i++)
    if (n = t[i], n === e || n.fn === e) {
      t.splice(i, 1);
      break;
    }
  return t.length === 0 && delete this._callbacks["$" + r], this;
};
j.prototype.emit = function(r) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), t = this._callbacks["$" + r], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  if (t) {
    t = t.slice(0);
    for (var n = 0, i = t.length; n < i; ++n)
      t[n].apply(this, e);
  }
  return this;
};
j.prototype.emitReserved = j.prototype.emit;
j.prototype.listeners = function(r) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + r] || [];
};
j.prototype.hasListeners = function(r) {
  return !!this.listeners(r).length;
};
const Y = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function eo(r, ...e) {
  return e.reduce((t, n) => (r.hasOwnProperty(n) && (t[n] = r[n]), t), {});
}
const $u = Y.setTimeout, Gu = Y.clearTimeout;
function $t(r, e) {
  e.useNativeTimers ? (r.setTimeoutFn = $u.bind(Y), r.clearTimeoutFn = Gu.bind(Y)) : (r.setTimeoutFn = Y.setTimeout.bind(Y), r.clearTimeoutFn = Y.clearTimeout.bind(Y));
}
const Hu = 1.33;
function Yu(r) {
  return typeof r == "string" ? Ju(r) : Math.ceil((r.byteLength || r.size) * Hu);
}
function Ju(r) {
  let e = 0, t = 0;
  for (let n = 0, i = r.length; n < i; n++)
    e = r.charCodeAt(n), e < 128 ? t += 1 : e < 2048 ? t += 2 : e < 55296 || e >= 57344 ? t += 3 : (n++, t += 4);
  return t;
}
function Ku(r) {
  let e = "";
  for (let t in r)
    r.hasOwnProperty(t) && (e.length && (e += "&"), e += encodeURIComponent(t) + "=" + encodeURIComponent(r[t]));
  return e;
}
function Xu(r) {
  let e = {}, t = r.split("&");
  for (let n = 0, i = t.length; n < i; n++) {
    let s = t[n].split("=");
    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return e;
}
class Zu extends Error {
  constructor(e, t, n) {
    super(e), this.description = t, this.context = n, this.type = "TransportError";
  }
}
class vn extends j {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, $t(this, e), this.opts = e, this.query = e.query, this.socket = e.socket;
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
  onError(e, t, n) {
    return super.emitReserved("error", new Zu(e, t, n)), this;
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
    const t = yn(e, this.socket.binaryType);
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
    const t = Ku(e);
    return t.length ? "?" + t : "";
  }
}
const to = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Br = 64, ef = {};
let Di = 0, Et = 0, xi;
function Ni(r) {
  let e = "";
  do
    e = to[r % Br] + e, r = Math.floor(r / Br);
  while (r > 0);
  return e;
}
function ro() {
  const r = Ni(+/* @__PURE__ */ new Date());
  return r !== xi ? (Di = 0, xi = r) : r + "." + Ni(Di++);
}
for (; Et < Br; Et++)
  ef[to[Et]] = Et;
let no = !1;
try {
  no = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const tf = no;
function io(r) {
  const e = r.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || tf))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new Y[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function rf() {
}
const nf = function() {
  return new io({
    xdomain: !1
  }).responseType != null;
}();
class sf extends vn {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), this.polling = !1, typeof location < "u") {
      const n = location.protocol === "https:";
      let i = location.port;
      i || (i = n ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || i !== e.port;
    }
    const t = e && e.forceBase64;
    this.supportsBinary = nf && !t, this.opts.withCredentials && (this.cookieJar = void 0);
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
      let n = 0;
      this.polling && (n++, this.once("pollComplete", function() {
        --n || t();
      })), this.writable || (n++, this.once("drain", function() {
        --n || t();
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
    const t = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    Qu(e, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.writable = !1, ju(e, (t) => {
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
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = ro()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(e, t);
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(e = {}) {
    return Object.assign(e, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new Z(this.uri(), e);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, t) {
    const n = this.request({
      method: "POST",
      data: e
    });
    n.on("success", t), n.on("error", (i, s) => {
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
    e.on("data", this.onData.bind(this)), e.on("error", (t, n) => {
      this.onError("xhr poll error", t, n);
    }), this.pollXhr = e;
  }
}
class Z extends j {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, t) {
    super(), $t(this, t), this.opts = t, this.method = t.method || "GET", this.uri = e, this.data = t.data !== void 0 ? t.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var e;
    const t = eo(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    t.xdomain = !!this.opts.xd;
    const n = this.xhr = new io(t);
    try {
      n.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let i in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(i) && n.setRequestHeader(i, this.opts.extraHeaders[i]);
        }
      } catch {
      }
      if (this.method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this.opts.cookieJar) === null || e === void 0 || e.addCookies(n), "withCredentials" in n && (n.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (n.timeout = this.opts.requestTimeout), n.onreadystatechange = () => {
        var i;
        n.readyState === 3 && ((i = this.opts.cookieJar) === null || i === void 0 || i.parseCookies(n)), n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof n.status == "number" ? n.status : 0);
        }, 0));
      }, n.send(this.data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this.onError(i);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = Z.requestsCount++, Z.requests[this.index] = this);
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
      if (this.xhr.onreadystatechange = rf, e)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Z.requests[this.index], this.xhr = null;
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
Z.requestsCount = 0;
Z.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Ii);
  else if (typeof addEventListener == "function") {
    const r = "onpagehide" in Y ? "pagehide" : "unload";
    addEventListener(r, Ii, !1);
  }
}
function Ii() {
  for (let r in Z.requests)
    Z.requests.hasOwnProperty(r) && Z.requests[r].abort();
}
const mn = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, t) => t(e, 0), wt = Y.WebSocket || Y.MozWebSocket, Ci = !0, of = "arraybuffer", Ai = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class af extends vn {
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
    const e = this.uri(), t = this.opts.protocols, n = Ai ? {} : eo(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = Ci && !Ai ? t ? new wt(e, t) : new wt(e) : new wt(e, t, n);
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
      const n = e[t], i = t === e.length - 1;
      dn(n, this.supportsBinary, (s) => {
        const o = {};
        try {
          Ci && this.ws.send(s);
        } catch {
        }
        i && mn(() => {
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
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = ro()), this.supportsBinary || (t.b64 = 1), this.createUri(e, t);
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!wt;
  }
}
class cf extends vn {
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
        const t = zu(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = e.readable.pipeThrough(t).getReader(), i = Uu();
        i.readable.pipeTo(e.writable), this.writer = i.writable.getWriter();
        const s = () => {
          n.read().then(({ done: a, value: c }) => {
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
      const n = e[t], i = t === e.length - 1;
      this.writer.write(n).then(() => {
        i && mn(() => {
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
const uf = {
  websocket: af,
  webtransport: cf,
  polling: sf
}, ff = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, lf = [
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
function jr(r) {
  if (r.length > 2e3)
    throw "URI too long";
  const e = r, t = r.indexOf("["), n = r.indexOf("]");
  t != -1 && n != -1 && (r = r.substring(0, t) + r.substring(t, n).replace(/:/g, ";") + r.substring(n, r.length));
  let i = ff.exec(r || ""), s = {}, o = 14;
  for (; o--; )
    s[lf[o]] = i[o] || "";
  return t != -1 && n != -1 && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = hf(s, s.path), s.queryKey = pf(s, s.query), s;
}
function hf(r, e) {
  const t = /\/{2,9}/g, n = e.replace(t, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && n.splice(0, 1), e.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function pf(r, e) {
  const t = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, s) {
    i && (t[i] = s);
  }), t;
}
let so = class De extends j {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, t = {}) {
    super(), this.binaryType = of, this.writeBuffer = [], e && typeof e == "object" && (t = e, e = null), e ? (e = jr(e), t.hostname = e.host, t.secure = e.protocol === "https" || e.protocol === "wss", t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = jr(t.host).host), $t(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = t.transports || [
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Xu(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    t.EIO = Zs, t.transport = e, this.id && (t.sid = this.id);
    const n = Object.assign({}, this.opts, {
      query: t,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new uf[e](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let e;
    if (this.opts.rememberUpgrade && De.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
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
    let t = this.createTransport(e), n = !1;
    De.priorWebsocketSuccess = !1;
    const i = () => {
      n || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (h) => {
        if (!n)
          if (h.type === "pong" && h.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            De.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (f(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const l = new Error("probe error");
            l.transport = t.name, this.emitReserved("upgradeError", l);
          }
      }));
    };
    function s() {
      n || (n = !0, f(), t.close(), t = null);
    }
    const o = (h) => {
      const l = new Error("probe error: " + h);
      l.transport = t.name, s(), this.emitReserved("upgradeError", l);
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
    const f = () => {
      t.removeListener("open", i), t.removeListener("error", o), t.removeListener("close", a), this.off("close", c), this.off("upgrading", u);
    };
    t.once("open", i), t.once("error", o), t.once("close", a), this.once("close", c), this.once("upgrading", u), this.upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      n || t.open();
    }, 200) : t.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", De.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
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
    let t = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const i = this.writeBuffer[n].data;
      if (i && (t += Yu(i)), n > 0 && t > this.maxPayload)
        return this.writeBuffer.slice(0, n);
      t += 2;
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
  write(e, t, n) {
    return this.sendPacket("message", e, t, n), this;
  }
  send(e, t, n) {
    return this.sendPacket("message", e, t, n), this;
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
  sendPacket(e, t, n, i) {
    if (typeof t == "function" && (i = t, t = void 0), typeof n == "function" && (i = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const s = {
      type: e,
      data: t,
      options: n
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
    }, n = () => {
      this.once("upgrade", t), this.once("upgradeError", t);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : e();
    }) : this.upgrading ? n() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(e) {
    De.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e);
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
    let n = 0;
    const i = e.length;
    for (; n < i; n++)
      ~this.transports.indexOf(e[n]) && t.push(e[n]);
    return t;
  }
};
so.protocol = Zs;
function df(r, e = "", t) {
  let n = r;
  t = t || typeof location < "u" && location, r == null && (r = t.protocol + "//" + t.host), typeof r == "string" && (r.charAt(0) === "/" && (r.charAt(1) === "/" ? r = t.protocol + r : r = t.host + r), /^(https?|wss?):\/\//.test(r) || (typeof t < "u" ? r = t.protocol + "//" + r : r = "https://" + r), n = jr(r)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const s = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + s + ":" + n.port + e, n.href = n.protocol + "://" + s + (t && t.port === n.port ? "" : ":" + n.port), n;
}
const yf = typeof ArrayBuffer == "function", vf = (r) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r.buffer instanceof ArrayBuffer, oo = Object.prototype.toString, mf = typeof Blob == "function" || typeof Blob < "u" && oo.call(Blob) === "[object BlobConstructor]", gf = typeof File == "function" || typeof File < "u" && oo.call(File) === "[object FileConstructor]";
function gn(r) {
  return yf && (r instanceof ArrayBuffer || vf(r)) || mf && r instanceof Blob || gf && r instanceof File;
}
function It(r, e) {
  if (!r || typeof r != "object")
    return !1;
  if (Array.isArray(r)) {
    for (let t = 0, n = r.length; t < n; t++)
      if (It(r[t]))
        return !0;
    return !1;
  }
  if (gn(r))
    return !0;
  if (r.toJSON && typeof r.toJSON == "function" && arguments.length === 1)
    return It(r.toJSON(), !0);
  for (const t in r)
    if (Object.prototype.hasOwnProperty.call(r, t) && It(r[t]))
      return !0;
  return !1;
}
function bf(r) {
  const e = [], t = r.data, n = r;
  return n.data = Qr(t, e), n.attachments = e.length, { packet: n, buffers: e };
}
function Qr(r, e) {
  if (!r)
    return r;
  if (gn(r)) {
    const t = { _placeholder: !0, num: e.length };
    return e.push(r), t;
  } else if (Array.isArray(r)) {
    const t = new Array(r.length);
    for (let n = 0; n < r.length; n++)
      t[n] = Qr(r[n], e);
    return t;
  } else if (typeof r == "object" && !(r instanceof Date)) {
    const t = {};
    for (const n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = Qr(r[n], e));
    return t;
  }
  return r;
}
function Ef(r, e) {
  return r.data = Ur(r.data, e), delete r.attachments, r;
}
function Ur(r, e) {
  if (!r)
    return r;
  if (r && r._placeholder === !0) {
    if (typeof r.num == "number" && r.num >= 0 && r.num < e.length)
      return e[r.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(r))
    for (let t = 0; t < r.length; t++)
      r[t] = Ur(r[t], e);
  else if (typeof r == "object")
    for (const t in r)
      Object.prototype.hasOwnProperty.call(r, t) && (r[t] = Ur(r[t], e));
  return r;
}
const wf = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Of = 5;
var C;
(function(r) {
  r[r.CONNECT = 0] = "CONNECT", r[r.DISCONNECT = 1] = "DISCONNECT", r[r.EVENT = 2] = "EVENT", r[r.ACK = 3] = "ACK", r[r.CONNECT_ERROR = 4] = "CONNECT_ERROR", r[r.BINARY_EVENT = 5] = "BINARY_EVENT", r[r.BINARY_ACK = 6] = "BINARY_ACK";
})(C || (C = {}));
class _f {
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
    return (e.type === C.EVENT || e.type === C.ACK) && It(e) ? this.encodeAsBinary({
      type: e.type === C.EVENT ? C.BINARY_EVENT : C.BINARY_ACK,
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
    return (e.type === C.BINARY_EVENT || e.type === C.BINARY_ACK) && (t += e.attachments + "-"), e.nsp && e.nsp !== "/" && (t += e.nsp + ","), e.id != null && (t += e.id), e.data != null && (t += JSON.stringify(e.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const t = bf(e), n = this.encodeAsString(t.packet), i = t.buffers;
    return i.unshift(n), i;
  }
}
function Ri(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
class bn extends j {
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
      const n = t.type === C.BINARY_EVENT;
      n || t.type === C.BINARY_ACK ? (t.type = n ? C.EVENT : C.ACK, this.reconstructor = new Tf(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (gn(e) || e.base64)
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
    const n = {
      type: Number(e.charAt(0))
    };
    if (C[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === C.BINARY_EVENT || n.type === C.BINARY_ACK) {
      const s = t + 1;
      for (; e.charAt(++t) !== "-" && t != e.length; )
        ;
      const o = e.substring(s, t);
      if (o != Number(o) || e.charAt(t) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(o);
    }
    if (e.charAt(t + 1) === "/") {
      const s = t + 1;
      for (; ++t && !(e.charAt(t) === "," || t === e.length); )
        ;
      n.nsp = e.substring(s, t);
    } else
      n.nsp = "/";
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
      n.id = Number(e.substring(s, t + 1));
    }
    if (e.charAt(++t)) {
      const s = this.tryParse(e.substr(t));
      if (bn.isPayloadValid(n.type, s))
        n.data = s;
      else
        throw new Error("invalid payload");
    }
    return n;
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
      case C.CONNECT:
        return Ri(t);
      case C.DISCONNECT:
        return t === void 0;
      case C.CONNECT_ERROR:
        return typeof t == "string" || Ri(t);
      case C.EVENT:
      case C.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && wf.indexOf(t[0]) === -1);
      case C.ACK:
      case C.BINARY_ACK:
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
class Tf {
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
      const t = Ef(this.reconPack, this.buffers);
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
const Sf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: bn,
  Encoder: _f,
  get PacketType() {
    return C;
  },
  protocol: Of
}, Symbol.toStringTag, { value: "Module" }));
function K(r, e, t) {
  return r.on(e, t), function() {
    r.off(e, t);
  };
}
const kf = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class ao extends j {
  /**
   * `Socket` constructor.
   */
  constructor(e, t, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
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
      K(e, "open", this.onopen.bind(this)),
      K(e, "packet", this.onpacket.bind(this)),
      K(e, "error", this.onerror.bind(this)),
      K(e, "close", this.onclose.bind(this))
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
    if (kf.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (t.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const n = {
      type: C.EVENT,
      data: t
    };
    if (n.options = {}, n.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const o = this.ids++, a = t.pop();
      this._registerAckCallback(o, a), n.id = o;
    }
    const i = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!i || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(n), this.packet(n)) : this.sendBuffer.push(n)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, t) {
    var n;
    const i = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
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
    return new Promise((n, i) => {
      const s = (o, a) => o ? i(o) : n(a);
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
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((i, ...s) => n !== this._queue[0] ? void 0 : (i !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), t && t(i)) : (this._queue.shift(), t && t(null, ...s)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
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
      type: C.CONNECT,
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
      if (!this.sendBuffer.some((n) => String(n.id) === e)) {
        const n = this.acks[e];
        delete this.acks[e], n.withError && n.call(this, new Error("socket has been disconnected"));
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
        case C.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case C.EVENT:
        case C.BINARY_EVENT:
          this.onevent(e);
          break;
        case C.ACK:
        case C.BINARY_ACK:
          this.onack(e);
          break;
        case C.DISCONNECT:
          this.ondisconnect();
          break;
        case C.CONNECT_ERROR:
          this.destroy();
          const n = new Error(e.data.message);
          n.data = e.data.data, this.emitReserved("connect_error", n);
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
      for (const n of t)
        n.apply(this, e);
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
    let n = !1;
    return function(...i) {
      n || (n = !0, t.packet({
        type: C.ACK,
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
    return this.connected && this.packet({ type: C.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
      for (let n = 0; n < t.length; n++)
        if (e === t[n])
          return t.splice(n, 1), this;
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
      for (let n = 0; n < t.length; n++)
        if (e === t[n])
          return t.splice(n, 1), this;
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
      for (const n of t)
        n.apply(this, e.data);
    }
  }
}
function Qe(r) {
  r = r || {}, this.ms = r.min || 100, this.max = r.max || 1e4, this.factor = r.factor || 2, this.jitter = r.jitter > 0 && r.jitter <= 1 ? r.jitter : 0, this.attempts = 0;
}
Qe.prototype.duration = function() {
  var r = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), t = Math.floor(e * this.jitter * r);
    r = Math.floor(e * 10) & 1 ? r + t : r - t;
  }
  return Math.min(r, this.max) | 0;
};
Qe.prototype.reset = function() {
  this.attempts = 0;
};
Qe.prototype.setMin = function(r) {
  this.ms = r;
};
Qe.prototype.setMax = function(r) {
  this.max = r;
};
Qe.prototype.setJitter = function(r) {
  this.jitter = r;
};
class zr extends j {
  constructor(e, t) {
    var n;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, $t(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((n = t.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Qe({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
    const i = t.parser || Sf;
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
    this.engine = new so(this.uri, this.opts);
    const t = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = K(t, "open", function() {
      n.onopen(), e && e();
    }), s = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, o = K(t, "error", s);
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
    this.subs.push(K(e, "ping", this.onping.bind(this)), K(e, "data", this.ondata.bind(this)), K(e, "error", this.onerror.bind(this)), K(e, "close", this.onclose.bind(this)), K(this.decoder, "decoded", this.ondecoded.bind(this)));
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
    mn(() => {
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
    let n = this.nsps[e];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new ao(this, e, t), this.nsps[e] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const t = Object.keys(this.nsps);
    for (const n of t)
      if (this.nsps[n].active)
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
    for (let n = 0; n < t.length; n++)
      this.engine.write(t[n], e.options);
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
      const n = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((i) => {
          i ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", i)) : e.onreconnect();
        }));
      }, t);
      this.opts.autoUnref && n.unref(), this.subs.push(() => {
        this.clearTimeoutFn(n);
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
const Ye = {};
function rt(r, e) {
  typeof r == "object" && (e = r, r = void 0), e = e || {};
  const t = df(r, e.path || "/socket.io"), n = t.source, i = t.id, s = t.path, o = Ye[i] && s in Ye[i].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let c;
  return a ? c = new zr(n, e) : (Ye[i] || (Ye[i] = new zr(n, e)), c = Ye[i]), t.query && !e.query && (e.query = t.queryKey), c.socket(t.path, e);
}
Object.assign(rt, {
  Manager: zr,
  Socket: ao,
  io: rt,
  connect: rt
});
const Df = {
  "Content-Type": "application/json"
};
class If {
  constructor(e) {
    Ue(this, "headers");
    // private readonly apolloConfig: any;
    Ue(this, "apolloClient");
    // TCacheShape
    Ue(this, "socketClient");
    Ue(this, "options");
    this.options = e || {}, this.headers = e.headers || Df, this.initSocketIo(e), this.initApollo(e.apolloConfig);
  }
  initSocketIo(e) {
    !e || !e.socketPath || (this.socketClient = rt({
      path: e.socketPath
    }));
  }
  initApollo(e) {
    e && (this.apolloClient = Lu(e));
  }
  async get(e) {
    return _i(e, { headers: this.headers });
  }
  async post(e, t = {}) {
    return _i(e, {
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
      cache: new pn()
    })), !this.apolloClient)
      throw console.log("url: ", e), Error("No apollo client found");
    const { data: n } = await this.apolloClient.query({
      query: Ee`${t.query}`
    });
    return n;
  }
  socket(e, t) {
    let n = this.socketClient;
    (this.options.socketPath !== e || !n) && (n = rt({
      path: t.socketPath
    })), t.type === "on" ? n.on(t.event, (i) => {
      console.log(t.event, i), t.callback && t.callback(i);
    }) : n.emit(t.event, t.value, (i) => {
      console.log(i), t.callback && t.callback(i);
    });
  }
}
export {
  If as RequestAllInOne
};
