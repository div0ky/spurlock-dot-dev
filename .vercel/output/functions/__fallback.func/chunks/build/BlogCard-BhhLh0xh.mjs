import { _ as __nuxt_component_0 } from './nuxt-link-BSMnoMH3.mjs';
import { _ as __nuxt_component_1 } from './index-xta5yI5c.mjs';
import { _ as __nuxt_component_2 } from './client-BHbYJHlS.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createBlock, createCommentVNode, createVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BlogCard",
  __ssrInlineRender: true,
  props: {
    post: {}
  },
  setup(__props) {
    function formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_M3Badge = __nuxt_component_2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.post.path,
        class: "group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-mint-500/30 hover:shadow-lg dark:border-slate-800 dark:bg-surface-elevated"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.post.image) {
              _push2(`<div class="aspect-video overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", __props.post.image)}${ssrRenderAttr("alt", __props.post.title)} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="p-6"${_scopeId}><div class="mb-3 flex items-center gap-3 text-body-sm text-slate-500"${_scopeId}><time${ssrRenderAttr("datetime", __props.post.date)}${_scopeId}>${ssrInterpolate(formatDate(__props.post.date))}</time>`);
            if (__props.post.readingTime) {
              _push2(`<span class="flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:clock",
                class: "h-3.5 w-3.5"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(__props.post.readingTime)} min read </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><h3 class="mb-2 text-headline-sm text-slate-900 transition-colors group-hover:text-mint-600 dark:text-white dark:group-hover:text-mint-400"${_scopeId}>${ssrInterpolate(__props.post.title)}</h3><p class="mb-4 line-clamp-2 text-body-md text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.post.description)}</p>`);
            if (__props.post.tags?.length) {
              _push2(`<div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(__props.post.tags.slice(0, 3), (tag) => {
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
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-4 flex items-center gap-2 text-label-lg font-medium text-mint-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-mint-400"${_scopeId}> Read Article `);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "h-4 w-4 transition-transform group-hover:translate-x-1"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              __props.post.image ? (openBlock(), createBlock("div", {
                key: 0,
                class: "aspect-video overflow-hidden"
              }, [
                createVNode("img", {
                  src: __props.post.image,
                  alt: __props.post.title,
                  class: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                }, null, 8, ["src", "alt"])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "p-6" }, [
                createVNode("div", { class: "mb-3 flex items-center gap-3 text-body-sm text-slate-500" }, [
                  createVNode("time", {
                    datetime: __props.post.date
                  }, toDisplayString(formatDate(__props.post.date)), 9, ["datetime"]),
                  __props.post.readingTime ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "flex items-center gap-1"
                  }, [
                    createVNode(_component_Icon, {
                      name: "lucide:clock",
                      class: "h-3.5 w-3.5"
                    }),
                    createTextVNode(" " + toDisplayString(__props.post.readingTime) + " min read ", 1)
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("h3", { class: "mb-2 text-headline-sm text-slate-900 transition-colors group-hover:text-mint-600 dark:text-white dark:group-hover:text-mint-400" }, toDisplayString(__props.post.title), 1),
                createVNode("p", { class: "mb-4 line-clamp-2 text-body-md text-slate-600 dark:text-slate-400" }, toDisplayString(__props.post.description), 1),
                __props.post.tags?.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-wrap gap-2"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.post.tags.slice(0, 3), (tag) => {
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
                  }), 128))
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "mt-4 flex items-center gap-2 text-label-lg font-medium text-mint-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-mint-400" }, [
                  createTextVNode(" Read Article "),
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "h-4 w-4 transition-transform group-hover:translate-x-1"
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "BlogCard" });

export { __nuxt_component_4 as _ };
//# sourceMappingURL=BlogCard-BhhLh0xh.mjs.map
