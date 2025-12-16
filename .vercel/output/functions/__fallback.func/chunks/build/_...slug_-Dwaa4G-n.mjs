import { _ as __nuxt_component_0 } from './nuxt-link-BSMnoMH3.mjs';
import { u as useAsyncData, _ as __nuxt_component_1 } from './index-xta5yI5c.mjs';
import { _ as __nuxt_component_2, q as queryCollection } from './client-BHbYJHlS.mjs';
import { _ as __nuxt_component_4 } from './ContentRenderer-kkF5mAj0.mjs';
import { _ as __nuxt_component_4$1 } from './BlogCard-BhhLh0xh.mjs';
import { _ as __nuxt_component_3 } from './M3Card-DwCoAb76.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = Array.isArray(route.params.slug) ? route.params.slug.join("/") : route.params.slug;
    const fullPath = `/blog/${slug}`;
    const { data: post } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`blog-${slug}`, async () => {
      const all = await queryCollection("blog").all();
      return all.find((p) => p.path === fullPath);
    })), __temp = await __temp, __restore(), __temp);
    if (!post.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Post not found"
      });
    }
    useSeoMeta({
      title: () => `${post.value?.title} | Aaron J. Spurlock`,
      description: () => post.value?.description,
      ogTitle: () => post.value?.title,
      ogDescription: () => post.value?.description,
      ogType: "article",
      articlePublishedTime: () => post.value?.date
    });
    function formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
    const { data: relatedPosts } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`related-${slug}`, async () => {
      if (!post.value?.tags?.length) return [];
      const all = await queryCollection("blog").all();
      return all.filter((p) => p.path !== fullPath).slice(0, 3);
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_M3Badge = __nuxt_component_2;
      const _component_ContentRenderer = __nuxt_component_4;
      const _component_BlogCard = __nuxt_component_4$1;
      const _component_M3Card = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><header class="relative overflow-hidden py-24"><div class="absolute inset-0 bg-mesh"></div><div class="absolute inset-0 bg-grid opacity-50"></div><div class="relative mx-auto max-w-3xl px-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "group mb-8 inline-flex items-center gap-2 text-label-lg text-slate-500 transition-colors hover:text-mint-600 dark:text-slate-400 dark:hover:text-mint-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-left",
              class: "h-4 w-4 transition-transform group-hover:-translate-x-1"
            }, null, _parent2, _scopeId));
            _push2(` Back to Blog `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:arrow-left",
                class: "h-4 w-4 transition-transform group-hover:-translate-x-1"
              }),
              createTextVNode(" Back to Blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(post)?.tags?.length) {
        _push(`<div class="mb-4 flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(unref(post).tags, (tag) => {
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
      _push(`<h1 class="mb-6 text-display-sm text-slate-900 dark:text-white md:text-display-md">${ssrInterpolate(unref(post)?.title)}</h1><div class="flex flex-wrap items-center gap-4 text-body-md text-slate-500 dark:text-slate-400"><div class="flex items-center gap-2"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-mint-500/10"><span class="text-title-md font-semibold text-mint-600 dark:text-mint-400">AJ</span></div><span>Aaron J. Spurlock</span></div><span class="text-slate-400 dark:text-slate-600">•</span>`);
      if (unref(post)?.date) {
        _push(`<time${ssrRenderAttr("datetime", unref(post).date)}>${ssrInterpolate(formatDate(unref(post).date))}</time>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(post)?.readingTime) {
        _push(`<span class="flex items-center gap-1"><span class="text-slate-400 dark:text-slate-600">•</span>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:clock",
          class: "h-4 w-4"
        }, null, _parent));
        _push(` ${ssrInterpolate(unref(post).readingTime)} min read </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></header><article class="py-12"><div class="mx-auto max-w-3xl px-6">`);
      if (unref(post)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(post),
          class: "prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-slate-900 dark:prose-headings:text-white prose-h2:mt-10 prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-a:text-mint-600 dark:prose-a:text-mint-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 dark:prose-strong:text-white prose-code:text-mint-600 dark:prose-code:text-mint-400 prose-pre:bg-slate-100 dark:prose-pre:bg-surface-elevated prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-slate-800 prose-blockquote:border-mint-500 prose-blockquote:text-slate-500 dark:prose-blockquote:text-slate-400 prose-li:text-slate-600 dark:prose-li:text-slate-300"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></article>`);
      if (unref(relatedPosts)?.length) {
        _push(`<section class="border-t border-slate-200 py-24 dark:border-slate-800"><div class="mx-auto max-w-6xl px-6"><h2 class="mb-8 text-center text-headline-lg text-slate-900 dark:text-white"> Related Articles </h2><div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(relatedPosts), (relatedPost) => {
          _push(ssrRenderComponent(_component_BlogCard, {
            key: relatedPost.path,
            post: relatedPost
          }, null, _parent));
        });
        _push(`<!--]--></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-surface-dim"><div class="mx-auto max-w-3xl px-6">`);
      _push(ssrRenderComponent(_component_M3Card, { class: "p-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center gap-6 text-center md:flex-row md:text-left"${_scopeId}><div class="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-mint-500/10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:user",
              class: "h-10 w-10 text-mint-600 dark:text-mint-400"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="mb-2 text-headline-sm text-slate-900 dark:text-white"${_scopeId}> Written by Aaron J. Spurlock </h3><p class="mb-4 text-body-md text-slate-600 dark:text-slate-400"${_scopeId}> Head of Technology at Midtown Home Improvements. Building enterprise-grade software and writing about the journey. </p><div class="flex justify-center gap-3 md:justify-start"${_scopeId}><a href="https://github.com/div0ky" target="_blank" rel="noopener noreferrer" class="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-mint-500/10 hover:text-mint-600 dark:bg-surface-overlay dark:text-slate-400 dark:hover:text-mint-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:github",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</a><a href="https://linkedin.com/in/ajspurlock" target="_blank" rel="noopener noreferrer" class="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-mint-500/10 hover:text-mint-600 dark:bg-surface-overlay dark:text-slate-400 dark:hover:text-mint-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:linkedin",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</a></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center gap-6 text-center md:flex-row md:text-left" }, [
                createVNode("div", { class: "flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-mint-500/10" }, [
                  createVNode(_component_Icon, {
                    name: "lucide:user",
                    class: "h-10 w-10 text-mint-600 dark:text-mint-400"
                  })
                ]),
                createVNode("div", null, [
                  createVNode("h3", { class: "mb-2 text-headline-sm text-slate-900 dark:text-white" }, " Written by Aaron J. Spurlock "),
                  createVNode("p", { class: "mb-4 text-body-md text-slate-600 dark:text-slate-400" }, " Head of Technology at Midtown Home Improvements. Building enterprise-grade software and writing about the journey. "),
                  createVNode("div", { class: "flex justify-center gap-3 md:justify-start" }, [
                    createVNode("a", {
                      href: "https://github.com/div0ky",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      class: "flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-mint-500/10 hover:text-mint-600 dark:bg-surface-overlay dark:text-slate-400 dark:hover:text-mint-400"
                    }, [
                      createVNode(_component_Icon, {
                        name: "lucide:github",
                        class: "h-5 w-5"
                      })
                    ]),
                    createVNode("a", {
                      href: "https://linkedin.com/in/ajspurlock",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      class: "flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-mint-500/10 hover:text-mint-600 dark:bg-surface-overlay dark:text-slate-400 dark:hover:text-mint-400"
                    }, [
                      createVNode(_component_Icon, {
                        name: "lucide:linkedin",
                        class: "h-5 w-5"
                      })
                    ])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-Dwaa4G-n.mjs.map
