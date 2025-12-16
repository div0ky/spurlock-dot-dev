import { _ as __nuxt_component_0$1 } from './nuxt-link-BSMnoMH3.mjs';
import { _ as __nuxt_component_1$1 } from './M3IconButton-BPlsMaen.mjs';
import { _ as __nuxt_component_2 } from './M3Button-sHazR-bL.mjs';
import { _ as __nuxt_component_1$2 } from './index-xta5yI5c.mjs';
import { mergeProps, defineComponent, ref, withCtx, createVNode, createTextVNode, toDisplayString, unref, readonly, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import './composables-DHoLfr1f.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'perfect-debounce';
import 'vue-router';

function useTheme() {
  const isDark = ref(true);
  function applyTheme(dark) {
    return;
  }
  function toggleTheme() {
    isDark.value = !isDark.value;
    applyTheme(isDark.value);
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  }
  function setTheme(theme) {
    isDark.value = theme === "dark";
    applyTheme(isDark.value);
    localStorage.setItem("theme", theme);
  }
  return {
    isDark: readonly(isDark),
    toggleTheme,
    setTheme
  };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const navLinks = [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/#projects" },
      { label: "Experience", href: "/#experience" },
      { label: "Blog", href: "/blog" }
    ];
    const isMobileMenuOpen = ref(false);
    const { isDark, toggleTheme } = useTheme();
    function toggleMobileMenu() {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    }
    function closeMobileMenu() {
      isMobileMenuOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_M3IconButton = __nuxt_component_1$1;
      const _component_M3Button = __nuxt_component_2;
      const _component_Icon = __nuxt_component_1$2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 right-0 z-50 glass" }, _attrs))}><nav class="mx-auto max-w-6xl px-6 py-4"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "group flex items-center gap-2",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex h-10 w-10 items-center justify-center rounded-xl bg-mint-500/10 transition-all duration-300 group-hover:bg-mint-500/20 group-hover:shadow-glow-mint"${_scopeId}><span class="text-xl font-bold text-mint-600 dark:text-mint-400"${_scopeId}>S</span></div><span class="text-title-lg font-semibold text-slate-900 dark:text-white"${_scopeId}> Spurlock<span class="text-mint-600 dark:text-mint-400"${_scopeId}>.dev</span></span>`);
          } else {
            return [
              createVNode("div", { class: "relative flex h-10 w-10 items-center justify-center rounded-xl bg-mint-500/10 transition-all duration-300 group-hover:bg-mint-500/20 group-hover:shadow-glow-mint" }, [
                createVNode("span", { class: "text-xl font-bold text-mint-600 dark:text-mint-400" }, "S")
              ]),
              createVNode("span", { class: "text-title-lg font-semibold text-slate-900 dark:text-white" }, [
                createTextVNode(" Spurlock"),
                createVNode("span", { class: "text-mint-600 dark:text-mint-400" }, ".dev")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden items-center gap-6 md:flex"><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.href,
          to: link.href,
          class: "relative text-body-md text-slate-600 transition-colors duration-200 hover:text-mint-600 dark:text-slate-300 dark:hover:text-mint-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)} <span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-mint-500 transition-all duration-300 hover:w-full"${_scopeId}></span>`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label) + " ", 1),
                createVNode("span", { class: "absolute -bottom-1 left-0 h-0.5 w-0 bg-mint-500 transition-all duration-300 hover:w-full" })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_M3IconButton, {
        icon: unref(isDark) ? "lucide:sun" : "lucide:moon",
        label: "Toggle theme",
        onClick: unref(toggleTheme)
      }, null, _parent));
      _push(ssrRenderComponent(_component_M3Button, {
        as: "a",
        href: "mailto:aj@spurlock.dev",
        variant: "primary",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_M3IconButton, {
        icon: unref(isMobileMenuOpen) ? "lucide:x" : "lucide:menu",
        label: "Toggle menu",
        size: "lg",
        class: "md:hidden",
        onClick: toggleMobileMenu
      }, null, _parent));
      _push(`</div>`);
      if (unref(isMobileMenuOpen)) {
        _push(`<div class="mt-4 flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-surface-elevated md:hidden"><!--[-->`);
        ssrRenderList(navLinks, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.href,
            to: link.href,
            class: "rounded-lg px-4 py-3 text-body-md text-slate-600 transition-colors hover:bg-slate-100 hover:text-mint-600 dark:text-slate-300 dark:hover:bg-surface-overlay dark:hover:text-mint-400",
            onClick: closeMobileMenu
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><button class="flex h-12 w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-body-md text-slate-600 transition-colors hover:bg-slate-100 hover:text-mint-600 dark:text-slate-300 dark:hover:bg-surface-overlay dark:hover:text-mint-400" aria-label="Toggle theme">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: unref(isDark) ? "lucide:sun" : "lucide:moon",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(unref(isDark) ? "Light Mode" : "Dark Mode")}</span></button><a href="mailto:aj@spurlock.dev" class="mt-2 rounded-lg bg-mint-500 px-4 py-3 text-center text-label-lg font-medium text-slate-900 transition-colors hover:bg-mint-600"> Contact </a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "AppHeader" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const socialLinks = [
      { icon: "lucide:github", href: "https://github.com/div0ky", label: "GitHub" },
      { icon: "lucide:linkedin", href: "https://linkedin.com/in/ajspurlock", label: "LinkedIn" },
      { icon: "lucide:mail", href: "mailto:aaron.j.spurlock@gmail.com", label: "Email" }
    ];
    const footerLinks = [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/#projects" },
      { label: "Experience", href: "/#experience" },
      { label: "Blog", href: "/blog" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1$2;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-surface-dim" }, _attrs))}><div class="mx-auto max-w-6xl px-6 py-12"><div class="grid gap-8 md:grid-cols-3"><div class="space-y-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-mint-500/10"${_scopeId}><span class="text-xl font-bold text-mint-600 dark:text-mint-400"${_scopeId}>S</span></div><span class="text-title-lg font-semibold text-slate-900 dark:text-white"${_scopeId}> Spurlock<span class="text-mint-600 dark:text-mint-400"${_scopeId}>.dev</span></span>`);
          } else {
            return [
              createVNode("div", { class: "flex h-10 w-10 items-center justify-center rounded-xl bg-mint-500/10" }, [
                createVNode("span", { class: "text-xl font-bold text-mint-600 dark:text-mint-400" }, "S")
              ]),
              createVNode("span", { class: "text-title-lg font-semibold text-slate-900 dark:text-white" }, [
                createTextVNode(" Spurlock"),
                createVNode("span", { class: "text-mint-600 dark:text-mint-400" }, ".dev")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="max-w-xs text-body-sm text-slate-600 dark:text-slate-400"> Vue Certified Developer, Head of Technology, and System Architect building enterprise-grade solutions. </p></div><div><h3 class="mb-4 text-label-lg font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"> Navigation </h3><ul class="space-y-2"><!--[-->`);
      ssrRenderList(footerLinks, (link) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.href,
          class: "text-body-sm text-slate-600 transition-colors hover:text-mint-600 dark:text-slate-400 dark:hover:text-mint-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div><h3 class="mb-4 text-label-lg font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"> Connect </h3><div class="flex gap-3"><!--[-->`);
      ssrRenderList(socialLinks, (social) => {
        _push(`<a${ssrRenderAttr("href", social.href)}${ssrRenderAttr("aria-label", social.label)} target="_blank" rel="noopener noreferrer" class="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition-all duration-200 hover:bg-mint-500/10 hover:text-mint-600 dark:bg-surface-elevated dark:text-slate-400 dark:shadow-none dark:hover:text-mint-400">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: social.icon,
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div></div></div><div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 md:flex-row"><p class="text-body-sm text-slate-500"> © ${ssrInterpolate(unref(currentYear))} Aaron J. Spurlock. All rights reserved. </p><p class="flex items-center gap-1 text-body-sm text-slate-500"> Built with `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:heart",
        class: "h-4 w-4 text-red-500"
      }, null, _parent));
      _push(` using Nuxt 4 &amp; Tailwind </p></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "AppFooter" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_AppFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen flex-col bg-surface" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<main class="flex-1 pt-20">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-R6XxI1Mo.mjs.map
