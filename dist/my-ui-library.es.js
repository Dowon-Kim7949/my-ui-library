import { defineComponent as r, createElementBlock as _, openBlock as n, toDisplayString as c } from "vue";
const p = { class: "r-badge p-4 border border-gray-300 rounded" }, u = /* @__PURE__ */ r({
  __name: "RBadge",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", p, c(e.text || "RBadge"), 1));
  }
}), s = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [a, d] of e)
    o[a] = d;
  return o;
}, l = /* @__PURE__ */ s(u, [["__scopeId", "data-v-2eb0b662"]]), i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: l
}, Symbol.toStringTag, { value: "Module" })), b = { class: "r-breadcrum p-4 border border-gray-300 rounded" }, v = /* @__PURE__ */ r({
  __name: "RBreadcrum",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", b, c(e.text || "RBreadcrum"), 1));
  }
}), m = /* @__PURE__ */ s(v, [["__scopeId", "data-v-c03ac843"]]), g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: m
}, Symbol.toStringTag, { value: "Module" })), f = { class: "r-button p-4 border border-gray-300 rounded" }, R = /* @__PURE__ */ r({
  __name: "RButton",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", f, c(e.text || "RButton"), 1));
  }
}), y = /* @__PURE__ */ s(R, [["__scopeId", "data-v-05c13847"]]), h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: y
}, Symbol.toStringTag, { value: "Module" })), S = { class: "r-card p-4 border border-gray-300 rounded" }, x = /* @__PURE__ */ r({
  __name: "RCard",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", S, c(e.text || "RCard"), 1));
  }
}), j = /* @__PURE__ */ s(x, [["__scopeId", "data-v-95ea7338"]]), O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: j
}, Symbol.toStringTag, { value: "Module" })), $ = { class: "r-checkbox p-4 border border-gray-300 rounded" }, T = /* @__PURE__ */ r({
  __name: "RCheckbox",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", $, c(e.text || "RCheckbox"), 1));
  }
}), I = /* @__PURE__ */ s(T, [["__scopeId", "data-v-88de319e"]]), M = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: I
}, Symbol.toStringTag, { value: "Module" })), P = { class: "r-dark p-4 border border-gray-300 rounded" }, z = /* @__PURE__ */ r({
  __name: "RDark",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", P, c(e.text || "RDark"), 1));
  }
}), D = /* @__PURE__ */ s(z, [["__scopeId", "data-v-7d5264d9"]]), k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D
}, Symbol.toStringTag, { value: "Module" })), B = { class: "r-dialog p-4 border border-gray-300 rounded" }, C = /* @__PURE__ */ r({
  __name: "RDialog",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", B, c(e.text || "RDialog"), 1));
  }
}), F = /* @__PURE__ */ s(C, [["__scopeId", "data-v-1e0ff80c"]]), w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: F
}, Symbol.toStringTag, { value: "Module" })), H = { class: "r-disclosure p-4 border border-gray-300 rounded" }, U = /* @__PURE__ */ r({
  __name: "RDisclosure",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", H, c(e.text || "RDisclosure"), 1));
  }
}), E = /* @__PURE__ */ s(U, [["__scopeId", "data-v-df97b434"]]), N = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: E
}, Symbol.toStringTag, { value: "Module" })), q = { class: "r-dropdown p-4 border border-gray-300 rounded" }, A = /* @__PURE__ */ r({
  __name: "RDropDown",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", q, c(e.text || "RDropDown"), 1));
  }
}), G = /* @__PURE__ */ s(A, [["__scopeId", "data-v-1007048b"]]), J = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: G
}, Symbol.toStringTag, { value: "Module" })), K = { class: "r-fileupload p-4 border border-gray-300 rounded" }, L = /* @__PURE__ */ r({
  __name: "RFileUpload",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", K, c(e.text || "RFileUpload"), 1));
  }
}), Q = /* @__PURE__ */ s(L, [["__scopeId", "data-v-f9bb0764"]]), V = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Q
}, Symbol.toStringTag, { value: "Module" })), W = { class: "r-footer p-4 border border-gray-300 rounded" }, X = /* @__PURE__ */ r({
  __name: "RFooter",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", W, c(e.text || "RFooter"), 1));
  }
}), Y = /* @__PURE__ */ s(X, [["__scopeId", "data-v-59ae4cfd"]]), Z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Y
}, Symbol.toStringTag, { value: "Module" })), ee = { class: "r-header p-4 border border-gray-300 rounded" }, te = /* @__PURE__ */ r({
  __name: "RHeader",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", ee, c(e.text || "RHeader"), 1));
  }
}), oe = /* @__PURE__ */ s(te, [["__scopeId", "data-v-46b801a7"]]), re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oe
}, Symbol.toStringTag, { value: "Module" })), _e = { class: "r-icon p-4 border border-gray-300 rounded" }, ne = /* @__PURE__ */ r({
  __name: "RIcon",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", _e, c(e.text || "RIcon"), 1));
  }
}), ce = /* @__PURE__ */ s(ne, [["__scopeId", "data-v-2f947394"]]), se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ce
}, Symbol.toStringTag, { value: "Module" })), ae = { class: "r-image p-4 border border-gray-300 rounded" }, de = /* @__PURE__ */ r({
  __name: "RImage",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", ae, c(e.text || "RImage"), 1));
  }
}), pe = /* @__PURE__ */ s(de, [["__scopeId", "data-v-419ad4d5"]]), ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pe
}, Symbol.toStringTag, { value: "Module" })), le = { class: "r-input p-4 border border-gray-300 rounded" }, ie = /* @__PURE__ */ r({
  __name: "RInput",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", le, c(e.text || "RInput"), 1));
  }
}), be = /* @__PURE__ */ s(ie, [["__scopeId", "data-v-b9d70329"]]), ve = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: be
}, Symbol.toStringTag, { value: "Module" })), me = { class: "r-map p-4 border border-gray-300 rounded" }, ge = /* @__PURE__ */ r({
  __name: "RMap",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", me, c(e.text || "RMap"), 1));
  }
}), fe = /* @__PURE__ */ s(ge, [["__scopeId", "data-v-0888f8d9"]]), Re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fe
}, Symbol.toStringTag, { value: "Module" })), ye = { class: "r-pagination p-4 border border-gray-300 rounded" }, he = /* @__PURE__ */ r({
  __name: "RPagination",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", ye, c(e.text || "RPagination"), 1));
  }
}), Se = /* @__PURE__ */ s(he, [["__scopeId", "data-v-34e603ef"]]), xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Se
}, Symbol.toStringTag, { value: "Module" })), je = { class: "r-radio p-4 border border-gray-300 rounded" }, Oe = /* @__PURE__ */ r({
  __name: "RRadio",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", je, c(e.text || "RRadio"), 1));
  }
}), $e = /* @__PURE__ */ s(Oe, [["__scopeId", "data-v-91c6679f"]]), Te = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $e
}, Symbol.toStringTag, { value: "Module" })), Ie = { class: "r-select p-4 border border-gray-300 rounded" }, Me = /* @__PURE__ */ r({
  __name: "RSelect",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", Ie, c(e.text || "RSelect"), 1));
  }
}), Pe = /* @__PURE__ */ s(Me, [["__scopeId", "data-v-e4578346"]]), ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pe
}, Symbol.toStringTag, { value: "Module" })), De = { class: "r-spider p-4 border border-gray-300 rounded" }, ke = /* @__PURE__ */ r({
  __name: "RSpider",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", De, c(e.text || "RSpider"), 1));
  }
}), Be = /* @__PURE__ */ s(ke, [["__scopeId", "data-v-384c6264"]]), Ce = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Be
}, Symbol.toStringTag, { value: "Module" })), Fe = { class: "r-step p-4 border border-gray-300 rounded" }, we = /* @__PURE__ */ r({
  __name: "RStep",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", Fe, c(e.text || "RStep"), 1));
  }
}), He = /* @__PURE__ */ s(we, [["__scopeId", "data-v-1b0e54e7"]]), Ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: He
}, Symbol.toStringTag, { value: "Module" })), Ee = { class: "r-table p-4 border border-gray-300 rounded" }, Ne = /* @__PURE__ */ r({
  __name: "RTable",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", Ee, c(e.text || "RTable"), 1));
  }
}), qe = /* @__PURE__ */ s(Ne, [["__scopeId", "data-v-bae66669"]]), Ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qe
}, Symbol.toStringTag, { value: "Module" })), Ge = { class: "r-tap p-4 border border-gray-300 rounded" }, Je = /* @__PURE__ */ r({
  __name: "RTap",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", Ge, c(e.text || "RTap"), 1));
  }
}), Ke = /* @__PURE__ */ s(Je, [["__scopeId", "data-v-e4ba5911"]]), Le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ke
}, Symbol.toStringTag, { value: "Module" })), Qe = { class: "r-theme p-4 border border-gray-300 rounded" }, Ve = /* @__PURE__ */ r({
  __name: "RTheme",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", Qe, c(e.text || "RTheme"), 1));
  }
}), We = /* @__PURE__ */ s(Ve, [["__scopeId", "data-v-498a1847"]]), Xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: We
}, Symbol.toStringTag, { value: "Module" })), Ye = { class: "r-tooltip p-4 border border-gray-300 rounded" }, Ze = /* @__PURE__ */ r({
  __name: "RTooltip",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", Ye, c(e.text || "RTooltip"), 1));
  }
}), et = /* @__PURE__ */ s(Ze, [["__scopeId", "data-v-c119abe4"]]), tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: et
}, Symbol.toStringTag, { value: "Module" })), ot = { class: "r-tree p-4 border border-gray-300 rounded" }, rt = /* @__PURE__ */ r({
  __name: "RTree",
  props: {
    text: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", ot, c(e.text || "RTree"), 1));
  }
}), _t = /* @__PURE__ */ s(rt, [["__scopeId", "data-v-3508ce93"]]), nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _t
}, Symbol.toStringTag, { value: "Module" })), ct = /* @__PURE__ */ Object.assign({ "./components/RBadge.vue": i, "./components/RBreadcrum.vue": g, "./components/RButton.vue": h, "./components/RCard.vue": O, "./components/RCheckbox.vue": M, "./components/RDark.vue": k, "./components/RDialog.vue": w, "./components/RDisclosure.vue": N, "./components/RDropDown.vue": J, "./components/RFileUpload.vue": V, "./components/RFooter.vue": Z, "./components/RHeader.vue": re, "./components/RIcon.vue": se, "./components/RImage.vue": ue, "./components/RInput.vue": ve, "./components/RMap.vue": Re, "./components/RPagination.vue": xe, "./components/RRadio.vue": Te, "./components/RSelect.vue": ze, "./components/RSpider.vue": Ce, "./components/RStep.vue": Ue, "./components/RTable.vue": Ae, "./components/RTap.vue": Le, "./components/RTheme.vue": Xe, "./components/RTooltip.vue": tt, "./components/RTree.vue": nt }), at = {
  install(t) {
    Object.entries(ct).forEach(([e, o]) => {
      var d;
      const a = ((d = e.split("/").pop()) == null ? void 0 : d.replace(".vue", "")) || "";
      a && t.component(a, o.default);
    });
  }
};
export {
  at as default
};
