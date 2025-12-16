import { _ as __nuxt_component_1$1 } from './index-xta5yI5c.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "M3IconButton",
  __ssrInlineRender: true,
  props: {
    icon: {},
    variant: { default: "default" },
    size: { default: "md" },
    label: {}
  },
  setup(__props) {
    const variantClasses = {
      default: "text-slate-600 hover:bg-slate-100 hover:text-mint-600 dark:text-slate-300 dark:hover:bg-surface-elevated dark:hover:text-mint-400",
      ghost: "text-slate-500 hover:text-mint-600 dark:text-slate-400 dark:hover:text-mint-400",
      elevated: "bg-white text-slate-600 shadow-sm hover:bg-slate-50 hover:text-mint-600 dark:bg-surface-elevated dark:text-slate-400 dark:hover:bg-surface-overlay dark:hover:text-white"
    };
    const sizeClasses = {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12"
    };
    const iconSizes = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["flex items-center justify-center rounded-lg transition-colors", [variantClasses[__props.variant], sizeClasses[__props.size]]],
        "aria-label": __props.label
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: __props.icon,
        class: iconSizes[__props.size]
      }, null, _parent));
      _push(`</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/m3/M3IconButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "M3IconButton" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=M3IconButton-BPlsMaen.mjs.map
