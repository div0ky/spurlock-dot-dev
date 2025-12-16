import { _ as __nuxt_component_0 } from './nuxt-link-BSMnoMH3.mjs';
import { u as useAsyncData, _ as __nuxt_component_1 } from './index-xta5yI5c.mjs';
import { _ as __nuxt_component_2, q as queryCollection } from './client-BHbYJHlS.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-DHoLfr1f.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'consola';
import 'better-sqlite3';
import 'node:url';
import 'ipx';
import './server.mjs';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Projects | Aaron J. Spurlock",
      description: "Explore my portfolio of enterprise software projects, including the Evergreen platform."
    });
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "projects",
      () => queryCollection("projects").all()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_M3Badge = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><section class="relative overflow-hidden py-24"><div class="absolute inset-0 bg-mesh"></div><div class="absolute inset-0 bg-grid opacity-50"></div><div class="relative mx-auto max-w-6xl px-6 text-center"><p class="mb-4 text-label-lg uppercase tracking-wider text-mint-600 dark:text-mint-400"> Portfolio </p><h1 class="mb-6 text-display-md text-slate-900 dark:text-white"> Projects </h1><p class="mx-auto max-w-2xl text-body-lg text-slate-600 dark:text-slate-400"> A collection of enterprise software solutions I&#39;ve designed and built, featuring the comprehensive Evergreen platform. </p></div></section><section class="py-12"><div class="mx-auto max-w-6xl px-6">`);
      if (unref(projects)?.length) {
        _push(`<div class="space-y-8"><!--[-->`);
        ssrRenderList(unref(projects), (project) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: project.path,
            to: project.path,
            class: "group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-500 hover:border-mint-500/30 hover:shadow-xl dark:border-slate-800 dark:bg-surface-elevated"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="grid gap-6 p-6 md:grid-cols-3 md:p-8"${_scopeId}><div class="aspect-video overflow-hidden rounded-xl bg-slate-100 dark:bg-surface-overlay md:aspect-[4/3]"${_scopeId}>`);
                if (project.image) {
                  _push2(`<img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"${_scopeId}>`);
                } else {
                  _push2(`<div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-mint-500/10 to-white dark:to-surface-elevated"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: project.icon || "lucide:code-2",
                    class: "h-16 w-16 text-mint-500/30"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                }
                _push2(`</div><div class="flex flex-col justify-center md:col-span-2"${_scopeId}><div class="mb-2 flex items-center gap-3"${_scopeId}><h2 class="text-headline-md text-slate-900 transition-colors group-hover:text-mint-600 dark:text-white dark:group-hover:text-mint-400"${_scopeId}>${ssrInterpolate(project.title)}</h2>`);
                if (project.featured) {
                  _push2(ssrRenderComponent(_component_M3Badge, {
                    variant: "primary",
                    size: "sm"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` Featured `);
                      } else {
                        return [
                          createTextVNode(" Featured ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><p class="mb-4 text-body-lg text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(project.description)}</p>`);
                if (project.tags?.length) {
                  _push2(`<div class="mb-4 flex flex-wrap gap-2"${_scopeId}><!--[-->`);
                  ssrRenderList(project.tags.slice(0, 6), (tag) => {
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
                _push2(`<div class="flex items-center gap-2 text-label-lg font-medium text-mint-600 dark:text-mint-400"${_scopeId}> View Details `);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:arrow-right",
                  class: "h-4 w-4 transition-transform group-hover:translate-x-1"
                }, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "grid gap-6 p-6 md:grid-cols-3 md:p-8" }, [
                    createVNode("div", { class: "aspect-video overflow-hidden rounded-xl bg-slate-100 dark:bg-surface-overlay md:aspect-[4/3]" }, [
                      project.image ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: project.image,
                        alt: project.title,
                        class: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex h-full w-full items-center justify-center bg-gradient-to-br from-mint-500/10 to-white dark:to-surface-elevated"
                      }, [
                        createVNode(_component_Icon, {
                          name: project.icon || "lucide:code-2",
                          class: "h-16 w-16 text-mint-500/30"
                        }, null, 8, ["name"])
                      ]))
                    ]),
                    createVNode("div", { class: "flex flex-col justify-center md:col-span-2" }, [
                      createVNode("div", { class: "mb-2 flex items-center gap-3" }, [
                        createVNode("h2", { class: "text-headline-md text-slate-900 transition-colors group-hover:text-mint-600 dark:text-white dark:group-hover:text-mint-400" }, toDisplayString(project.title), 1),
                        project.featured ? (openBlock(), createBlock(_component_M3Badge, {
                          key: 0,
                          variant: "primary",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Featured ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("p", { class: "mb-4 text-body-lg text-slate-600 dark:text-slate-400" }, toDisplayString(project.description), 1),
                      project.tags?.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mb-4 flex flex-wrap gap-2"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(project.tags.slice(0, 6), (tag) => {
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
                      createVNode("div", { class: "flex items-center gap-2 text-label-lg font-medium text-mint-600 dark:text-mint-400" }, [
                        createTextVNode(" View Details "),
                        createVNode(_component_Icon, {
                          name: "lucide:arrow-right",
                          class: "h-4 w-4 transition-transform group-hover:translate-x-1"
                        })
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="rounded-2xl border border-dashed border-slate-300 p-16 text-center dark:border-slate-700">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:folder",
          class: "mx-auto mb-4 h-16 w-16 text-slate-400 dark:text-slate-600"
        }, null, _parent));
        _push(`<h2 class="mb-2 text-headline-md text-slate-500 dark:text-slate-400"> Projects Coming Soon </h2><p class="text-body-lg text-slate-400 dark:text-slate-500"> Detailed project breakdowns are being prepared. Check back soon! </p></div>`);
      }
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cs8_f525.mjs.map
