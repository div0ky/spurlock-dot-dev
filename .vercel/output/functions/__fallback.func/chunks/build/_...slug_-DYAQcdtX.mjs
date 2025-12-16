import { _ as __nuxt_component_0 } from './nuxt-link-BSMnoMH3.mjs';
import { u as useAsyncData, _ as __nuxt_component_1 } from './index-xta5yI5c.mjs';
import { _ as __nuxt_component_2, q as queryCollection } from './client-BHbYJHlS.mjs';
import { _ as __nuxt_component_3 } from './M3Card-DwCoAb76.mjs';
import { _ as __nuxt_component_4 } from './ContentRenderer-kkF5mAj0.mjs';
import { _ as __nuxt_component_1$1 } from './M3IconButton-BPlsMaen.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, createBlock, openBlock, Fragment, renderList, ref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderTeleport } from 'vue/server-renderer';
import { _ as __nuxt_component_6 } from './ProjectCard-JqFNMRt7.mjs';
import { _ as __nuxt_component_2$1 } from './M3Button-sHazR-bL.mjs';
import { u as useRoute, c as createError } from './server.mjs';
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
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'property-information';
import 'minimark/hast';
import './NuxtImg-CTt6Qlu9.mjs';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ScreenshotGallery",
  __ssrInlineRender: true,
  props: {
    screenshots: {},
    title: {}
  },
  setup(__props) {
    const props = __props;
    const selectedIndex = ref(null);
    const selectedScreenshot = computed(() => {
      if (selectedIndex.value === null) return null;
      return props.screenshots[selectedIndex.value];
    });
    function closeLightbox() {
      selectedIndex.value = null;
      (void 0).body.style.overflow = "";
    }
    function nextImage() {
      if (selectedIndex.value === null) return;
      selectedIndex.value = (selectedIndex.value + 1) % props.screenshots.length;
    }
    function prevImage() {
      if (selectedIndex.value === null) return;
      selectedIndex.value = (selectedIndex.value - 1 + props.screenshots.length) % props.screenshots.length;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_M3IconButton = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.title) {
        _push(`<div class="mb-6"><h3 class="text-headline-sm text-slate-900 dark:text-white">${ssrInterpolate(__props.title)}</h3></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(__props.screenshots, (screenshot, index) => {
        _push(`<button class="group relative aspect-video overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-mint-500/30 hover:shadow-lg dark:border-slate-800 dark:bg-surface-elevated"><img${ssrRenderAttr("src", screenshot.src)}${ssrRenderAttr("alt", screenshot.alt)} class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"><div class="absolute inset-0 flex items-center justify-center bg-white/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-surface/60">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:maximize-2",
          class: "h-8 w-8 text-slate-900 dark:text-white"
        }, null, _parent));
        _push(`</div>`);
        if (screenshot.caption) {
          _push(`<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3 dark:from-surface"><p class="text-body-sm text-white dark:text-slate-300">${ssrInterpolate(screenshot.caption)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(selectedIndex) !== null) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm dark:bg-surface-dim/95">`);
          _push2(ssrRenderComponent(_component_M3IconButton, {
            icon: "lucide:x",
            label: "Close",
            variant: "elevated",
            size: "lg",
            class: "absolute right-4 top-4",
            onClick: closeLightbox
          }, null, _parent));
          _push2(ssrRenderComponent(_component_M3IconButton, {
            icon: "lucide:chevron-left",
            label: "Previous",
            variant: "elevated",
            size: "lg",
            class: "absolute left-4",
            onClick: prevImage
          }, null, _parent));
          _push2(ssrRenderComponent(_component_M3IconButton, {
            icon: "lucide:chevron-right",
            label: "Next",
            variant: "elevated",
            size: "lg",
            class: "absolute right-4",
            onClick: nextImage
          }, null, _parent));
          if (unref(selectedScreenshot)) {
            _push2(`<div class="max-h-[85vh] max-w-[90vw]"><img${ssrRenderAttr("src", unref(selectedScreenshot).src)}${ssrRenderAttr("alt", unref(selectedScreenshot).alt)} class="max-h-[85vh] max-w-full rounded-lg object-contain">`);
            if (unref(selectedScreenshot).caption) {
              _push2(`<p class="mt-4 text-center text-body-md text-slate-300">${ssrInterpolate(unref(selectedScreenshot).caption)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-2 text-body-sm text-slate-600 shadow-lg dark:bg-surface-elevated dark:text-slate-400 dark:shadow-none">${ssrInterpolate(unref(selectedIndex) + 1)} / ${ssrInterpolate(__props.screenshots.length)}</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScreenshotGallery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$1, { __name: "ScreenshotGallery" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = Array.isArray(route.params.slug) ? route.params.slug.join("/") : route.params.slug;
    const fullPath = `/projects/${slug}`;
    const { data: project } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`project-${slug}`, async () => {
      const all = await queryCollection("projects").all();
      return all.find((p) => p.path === fullPath);
    })), __temp = await __temp, __restore(), __temp);
    if (!project.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Project not found"
      });
    }
    useSeoMeta({
      title: () => `${project.value?.title} | Aaron J. Spurlock`,
      description: () => project.value?.description,
      ogTitle: () => project.value?.title,
      ogDescription: () => project.value?.description,
      ogType: "article"
    });
    const { data: relatedProjects } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`related-project-${slug}`, async () => {
      if (!project.value?.tags?.length) return [];
      const all = await queryCollection("projects").all();
      return all.filter((p) => p.path !== fullPath).slice(0, 3);
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_M3Badge = __nuxt_component_2;
      const _component_M3Card = __nuxt_component_3;
      const _component_ContentRenderer = __nuxt_component_4;
      const _component_ScreenshotGallery = __nuxt_component_5;
      const _component_ProjectCard = __nuxt_component_6;
      const _component_M3Button = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><header class="relative overflow-hidden py-24"><div class="absolute inset-0 bg-mesh"></div><div class="absolute inset-0 bg-grid opacity-50"></div><div class="relative mx-auto max-w-6xl px-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "group mb-8 inline-flex items-center gap-2 text-label-lg text-slate-500 transition-colors hover:text-mint-600 dark:text-slate-400 dark:hover:text-mint-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-left",
              class: "h-4 w-4 transition-transform group-hover:-translate-x-1"
            }, null, _parent2, _scopeId));
            _push2(` Back to Projects `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:arrow-left",
                class: "h-4 w-4 transition-transform group-hover:-translate-x-1"
              }),
              createTextVNode(" Back to Projects ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid gap-12 lg:grid-cols-2"><div>`);
      if (unref(project)?.tags?.length) {
        _push(`<div class="mb-4 flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(unref(project).tags, (tag) => {
          _push(ssrRenderComponent(_component_M3Badge, {
            key: tag,
            variant: "primary",
            size: "sm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(tag)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(tag), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="mb-6 text-display-sm text-slate-900 dark:text-white md:text-display-md">${ssrInterpolate(unref(project)?.title)}</h1><p class="mb-8 text-body-lg text-slate-600 dark:text-slate-400">${ssrInterpolate(unref(project)?.description)}</p>`);
      if (unref(project)?.stats) {
        _push(`<div class="grid grid-cols-2 gap-4 sm:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(project).stats, (value, key) => {
          _push(ssrRenderComponent(_component_M3Card, {
            key,
            class: "p-4"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<p class="text-display-sm text-mint-600 dark:text-mint-400"${_scopeId}>${ssrInterpolate(value)}</p><p class="text-label-md uppercase tracking-wider text-slate-500"${_scopeId}>${ssrInterpolate(key)}</p>`);
              } else {
                return [
                  createVNode("p", { class: "text-display-sm text-mint-600 dark:text-mint-400" }, toDisplayString(value), 1),
                  createVNode("p", { class: "text-label-md uppercase tracking-wider text-slate-500" }, toDisplayString(key), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative"><div class="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-surface-elevated">`);
      if (unref(project)?.image) {
        _push(`<img${ssrRenderAttr("src", unref(project).image)}${ssrRenderAttr("alt", unref(project).title)} class="h-full w-full object-cover">`);
      } else {
        _push(`<div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-mint-500/10 to-white dark:to-surface-elevated">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: unref(project)?.icon || "lucide:layout-dashboard",
          class: "h-24 w-24 text-mint-500/30"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div><div class="absolute -bottom-4 -right-4 h-20 w-20 rounded-2xl border-2 border-mint-500/20"></div></div></div></div></header><article class="py-16"><div class="mx-auto max-w-4xl px-6">`);
      if (unref(project)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(project),
          class: "prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-slate-900 dark:prose-headings:text-white prose-h2:mt-12 prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-a:text-mint-600 dark:prose-a:text-mint-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 dark:prose-strong:text-white prose-code:text-mint-600 dark:prose-code:text-mint-400 prose-pre:bg-slate-100 dark:prose-pre:bg-surface-elevated prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-slate-800 prose-blockquote:border-mint-500 prose-blockquote:text-slate-500 dark:prose-blockquote:text-slate-400 prose-li:text-slate-600 dark:prose-li:text-slate-300 prose-img:rounded-xl prose-img:border prose-img:border-slate-200 dark:prose-img:border-slate-800"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></article>`);
      if (unref(project)?.screenshots?.length) {
        _push(`<section class="border-t border-slate-200 py-16 dark:border-slate-800"><div class="mx-auto max-w-6xl px-6">`);
        _push(ssrRenderComponent(_component_ScreenshotGallery, {
          screenshots: unref(project).screenshots,
          title: "Screenshots"
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(project)?.techStack) {
        _push(`<section class="border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-surface-dim"><div class="mx-auto max-w-6xl px-6"><h2 class="mb-8 text-center text-headline-lg text-slate-900 dark:text-white"> Technology Stack </h2><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
        ssrRenderList(unref(project).techStack, (techs, category) => {
          _push(ssrRenderComponent(_component_M3Card, {
            key: category,
            class: "p-6"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h3 class="mb-4 text-title-lg font-semibold capitalize text-mint-600 dark:text-mint-400"${_scopeId}>${ssrInterpolate(category)}</h3><ul class="space-y-2"${_scopeId}><!--[-->`);
                ssrRenderList(techs, (tech) => {
                  _push2(`<li class="flex items-center gap-2 text-body-md text-slate-600 dark:text-slate-400"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "lucide:check",
                    class: "h-4 w-4 text-mint-500"
                  }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(tech)}</li>`);
                });
                _push2(`<!--]--></ul>`);
              } else {
                return [
                  createVNode("h3", { class: "mb-4 text-title-lg font-semibold capitalize text-mint-600 dark:text-mint-400" }, toDisplayString(category), 1),
                  createVNode("ul", { class: "space-y-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(techs, (tech) => {
                      return openBlock(), createBlock("li", {
                        key: tech,
                        class: "flex items-center gap-2 text-body-md text-slate-600 dark:text-slate-400"
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:check",
                          class: "h-4 w-4 text-mint-500"
                        }),
                        createTextVNode(" " + toDisplayString(tech), 1)
                      ]);
                    }), 128))
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(relatedProjects)?.length) {
        _push(`<section class="border-t border-slate-200 py-16 dark:border-slate-800"><div class="mx-auto max-w-6xl px-6"><h2 class="mb-8 text-center text-headline-lg text-slate-900 dark:text-white"> Related Projects </h2><div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(relatedProjects), (related) => {
          _push(ssrRenderComponent(_component_ProjectCard, {
            key: related.path,
            project: {
              slug: related.path?.replace("/projects/", "") || "",
              title: related.title,
              description: related.description,
              image: related.image,
              tags: related.tags || [],
              featured: related.featured
            }
          }, null, _parent));
        });
        _push(`<!--]--></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-surface-dim"><div class="mx-auto max-w-3xl px-6 text-center"><h2 class="mb-4 text-headline-lg text-slate-900 dark:text-white"> Interested in working together? </h2><p class="mb-8 text-body-lg text-slate-600 dark:text-slate-400"> I&#39;m always open to discussing new projects and opportunities. </p>`);
      _push(ssrRenderComponent(_component_M3Button, {
        as: "a",
        href: "mailto:aj@spurlock.dev",
        variant: "primary",
        size: "lg",
        icon: "lucide:mail",
        "icon-position": "left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get in Touch `);
          } else {
            return [
              createTextVNode(" Get in Touch ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-DYAQcdtX.mjs.map
