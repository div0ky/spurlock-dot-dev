import { _ as __nuxt_component_1 } from './index-xta5yI5c.mjs';
import { defineComponent, createVNode, resolveDynamicComponent, mergeProps, withCtx, createBlock, createCommentVNode, renderSlot, openBlock, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "M3Button",
  __ssrInlineRender: true,
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    icon: { default: void 0 },
    iconPosition: { default: "right" },
    as: { default: "button" },
    to: { default: void 0 },
    href: { default: void 0 }
  },
  setup(__props) {
    const variantClasses = {
      primary: "bg-mint-500 text-slate-900 hover:bg-mint-600 hover:shadow-glow-mint",
      secondary: "border border-slate-300 text-slate-900 hover:border-mint-500/50 hover:bg-mint-500/10 dark:border-slate-700 dark:text-white",
      ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-surface-elevated dark:hover:text-white"
    };
    const sizeClasses = {
      sm: "px-4 py-2 text-label-md gap-1.5",
      md: "px-6 py-3 text-label-lg gap-2",
      lg: "px-8 py-4 text-label-lg gap-2"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({
        to: __props.to,
        href: __props.href,
        class: ["group inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300", [variantClasses[__props.variant], sizeClasses[__props.size]]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.icon && __props.iconPosition === "left") {
              _push2(ssrRenderComponent(_component_Icon, {
                name: __props.icon,
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (__props.icon && __props.iconPosition === "right") {
              _push2(ssrRenderComponent(_component_Icon, {
                name: __props.icon,
                class: "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.icon && __props.iconPosition === "left" ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: __props.icon,
                class: "h-5 w-5"
              }, null, 8, ["name"])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default"),
              __props.icon && __props.iconPosition === "right" ? (openBlock(), createBlock(_component_Icon, {
                key: 1,
                name: __props.icon,
                class: "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              }, null, 8, ["name"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/m3/M3Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "M3Button" });

export { __nuxt_component_2 as _ };
//# sourceMappingURL=M3Button-sHazR-bL.mjs.map
