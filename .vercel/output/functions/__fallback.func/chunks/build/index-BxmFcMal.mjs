import { _ as __nuxt_component_4 } from './BlogCard-BhhLh0xh.mjs';
import { u as useAsyncData, _ as __nuxt_component_1 } from './index-xta5yI5c.mjs';
import { defineComponent, withAsyncContext, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-DHoLfr1f.mjs';
import { q as queryCollection } from './client-BHbYJHlS.mjs';
import './nuxt-link-BSMnoMH3.mjs';
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
      title: "Blog | Aaron J. Spurlock",
      description: "Thoughts on development, architecture, and building enterprise software."
    });
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "blog-posts",
      () => queryCollection("blog").all()
    )), __temp = await __temp, __restore(), __temp);
    const allTags = computed(() => {
      if (!posts.value) return [];
      const tags = posts.value.flatMap((post) => post.tags || []);
      return [...new Set(tags)];
    });
    const selectedTag = ref(null);
    const filteredPosts = computed(() => {
      if (!posts.value) return [];
      if (!selectedTag.value) return posts.value;
      const tag = selectedTag.value;
      return posts.value.filter((post) => post.tags?.includes(tag));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogCard = __nuxt_component_4;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><section class="relative overflow-hidden py-24"><div class="absolute inset-0 bg-mesh"></div><div class="absolute inset-0 bg-grid opacity-50"></div><div class="relative mx-auto max-w-6xl px-6 text-center"><p class="mb-4 text-label-lg uppercase tracking-wider text-mint-600 dark:text-mint-400"> Blog </p><h1 class="mb-6 text-display-md text-slate-900 dark:text-white"> Articles &amp; Thoughts </h1><p class="mx-auto max-w-2xl text-body-lg text-slate-600 dark:text-slate-400"> Exploring development patterns, system architecture, and lessons learned from building enterprise software. </p></div></section><section class="py-12"><div class="mx-auto max-w-6xl px-6">`);
      if (unref(allTags).length) {
        _push(`<div class="mb-12"><p class="mb-4 text-label-md uppercase tracking-wider text-slate-500"> Filter by Topic </p><div class="flex flex-wrap gap-2"><button class="${ssrRenderClass([
          "rounded-full px-4 py-2 text-label-lg transition-all duration-200",
          !unref(selectedTag) ? "bg-mint-500 text-slate-900" : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:bg-surface-elevated dark:text-slate-400 dark:hover:bg-surface-overlay dark:hover:text-white"
        ])}"> All Posts </button><!--[-->`);
        ssrRenderList(unref(allTags), (tag) => {
          _push(`<button class="${ssrRenderClass([
            "rounded-full px-4 py-2 text-label-lg transition-all duration-200",
            unref(selectedTag) === tag ? "bg-mint-500 text-slate-900" : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:bg-surface-elevated dark:text-slate-400 dark:hover:bg-surface-overlay dark:hover:text-white"
          ])}">${ssrInterpolate(tag)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(filteredPosts)?.length) {
        _push(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(filteredPosts), (post) => {
          _push(ssrRenderComponent(_component_BlogCard, {
            key: post.path,
            post
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="rounded-2xl border border-dashed border-slate-300 p-16 text-center dark:border-slate-700">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:file-text",
          class: "mx-auto mb-4 h-16 w-16 text-slate-400 dark:text-slate-600"
        }, null, _parent));
        _push(`<h2 class="mb-2 text-headline-md text-slate-500 dark:text-slate-400"> No Posts Yet </h2><p class="text-body-lg text-slate-400 dark:text-slate-500"> Blog posts are coming soon. Check back later! </p></div>`);
      }
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BxmFcMal.mjs.map
