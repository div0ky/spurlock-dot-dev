import { defineComponent, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "M3Card",
  __ssrInlineRender: true,
  props: {
    variant: { default: "elevated" },
    hoverable: { type: Boolean, default: false },
    as: { default: "div" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({
        class: ["rounded-2xl transition-all duration-300", [
          __props.variant === "elevated" ? "border border-slate-200 bg-white dark:border-slate-800 dark:bg-surface-elevated" : "border border-slate-200 bg-transparent dark:border-slate-800",
          __props.hoverable && "hover:border-mint-500/30 hover:shadow-lg dark:hover:shadow-mint-500/5"
        ]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/m3/M3Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "M3Card" });

export { __nuxt_component_3 as _ };
//# sourceMappingURL=M3Card-DwCoAb76.mjs.map
