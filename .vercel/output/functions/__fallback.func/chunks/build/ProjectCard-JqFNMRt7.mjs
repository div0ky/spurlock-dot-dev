import { _ as __nuxt_component_0 } from './nuxt-link-BSMnoMH3.mjs';
import { I as ImageComponent } from './NuxtImg-CTt6Qlu9.mjs';
import { _ as __nuxt_component_1 } from './index-xta5yI5c.mjs';
import { _ as __nuxt_component_2 } from './client-BHbYJHlS.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = ImageComponent;
      const _component_Icon = __nuxt_component_1;
      const _component_M3Badge = __nuxt_component_2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/projects/${__props.project.slug}`,
        class: "group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-500 hover:border-mint-500/30 hover:shadow-xl hover:shadow-mint-500/5 dark:border-slate-800 dark:bg-surface-elevated"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative aspect-video overflow-hidden bg-slate-100 dark:bg-surface-overlay"${_scopeId}>`);
            if (__props.project.image) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: __props.project.image,
                alt: __props.project.title,
                width: "640",
                height: "360",
                class: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
                loading: "lazy"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-mint-500/10 to-white dark:to-surface-elevated"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:code-2",
                class: "h-16 w-16 text-mint-500/30"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            if (__props.project.featured) {
              _push2(`<div class="absolute left-4 top-4"${_scopeId}><span class="inline-flex items-center gap-1.5 rounded-full bg-mint-500 px-3 py-1 text-label-md font-medium text-slate-900"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:star",
                class: "h-3.5 w-3.5"
              }, null, _parent2, _scopeId));
              _push2(` Featured </span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="absolute inset-0 flex items-center justify-center bg-white/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 dark:bg-surface/80"${_scopeId}><span class="flex items-center gap-2 rounded-full bg-mint-500 px-6 py-3 text-label-lg font-semibold text-slate-900"${_scopeId}> View Project `);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</span></div></div><div class="p-6"${_scopeId}><h3 class="mb-2 text-headline-sm text-slate-900 transition-colors group-hover:text-mint-600 dark:text-white dark:group-hover:text-mint-400"${_scopeId}>${ssrInterpolate(__props.project.title)}</h3><p class="mb-4 line-clamp-2 text-body-md text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.project.description)}</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(__props.project.tags.slice(0, 4), (tag) => {
              _push2(ssrRenderComponent(_component_M3Badge, {
                key: tag,
                variant: "muted",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(tag)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(tag), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            if (__props.project.tags.length > 4) {
              _push2(ssrRenderComponent(_component_M3Badge, {
                variant: "muted",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` +${ssrInterpolate(__props.project.tags.length - 4)}`);
                  } else {
                    return [
                      createTextVNode(" +" + toDisplayString(__props.project.tags.length - 4), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative aspect-video overflow-hidden bg-slate-100 dark:bg-surface-overlay" }, [
                __props.project.image ? (openBlock(), createBlock(_component_NuxtImg, {
                  key: 0,
                  src: __props.project.image,
                  alt: __props.project.title,
                  width: "640",
                  height: "360",
                  class: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
                  loading: "lazy"
                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "flex h-full w-full items-center justify-center bg-gradient-to-br from-mint-500/10 to-white dark:to-surface-elevated"
                }, [
                  createVNode(_component_Icon, {
                    name: "lucide:code-2",
                    class: "h-16 w-16 text-mint-500/30"
                  })
                ])),
                __props.project.featured ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute left-4 top-4"
                }, [
                  createVNode("span", { class: "inline-flex items-center gap-1.5 rounded-full bg-mint-500 px-3 py-1 text-label-md font-medium text-slate-900" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:star",
                      class: "h-3.5 w-3.5"
                    }),
                    createTextVNode(" Featured ")
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "absolute inset-0 flex items-center justify-center bg-white/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 dark:bg-surface/80" }, [
                  createVNode("span", { class: "flex items-center gap-2 rounded-full bg-mint-500 px-6 py-3 text-label-lg font-semibold text-slate-900" }, [
                    createTextVNode(" View Project "),
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "h-5 w-5"
                    })
                  ])
                ])
              ]),
              createVNode("div", { class: "p-6" }, [
                createVNode("h3", { class: "mb-2 text-headline-sm text-slate-900 transition-colors group-hover:text-mint-600 dark:text-white dark:group-hover:text-mint-400" }, toDisplayString(__props.project.title), 1),
                createVNode("p", { class: "mb-4 line-clamp-2 text-body-md text-slate-600 dark:text-slate-400" }, toDisplayString(__props.project.description), 1),
                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.project.tags.slice(0, 4), (tag) => {
                    return openBlock(), createBlock(_component_M3Badge, {
                      key: tag,
                      variant: "muted",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tag), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128)),
                  __props.project.tags.length > 4 ? (openBlock(), createBlock(_component_M3Badge, {
                    key: 0,
                    variant: "muted",
                    size: "sm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" +" + toDisplayString(__props.project.tags.length - 4), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "ProjectCard" });

export { __nuxt_component_6 as _ };
//# sourceMappingURL=ProjectCard-JqFNMRt7.mjs.map
