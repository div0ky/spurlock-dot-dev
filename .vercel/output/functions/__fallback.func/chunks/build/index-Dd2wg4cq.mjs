import { _ as __nuxt_component_2$1, q as queryCollection } from './client-BHbYJHlS.mjs';
import { _ as __nuxt_component_2$2 } from './M3Button-sHazR-bL.mjs';
import { I as ImageComponent } from './NuxtImg-CTt6Qlu9.mjs';
import { _ as __nuxt_component_1$2, u as useAsyncData } from './index-xta5yI5c.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, computed, createBlock, openBlock, Fragment, renderList, createCommentVNode, withAsyncContext, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_0$2 } from './nuxt-link-BSMnoMH3.mjs';
import { _ as __nuxt_component_6 } from './ProjectCard-JqFNMRt7.mjs';
import { _ as __nuxt_component_3$1 } from './M3Card-DwCoAb76.mjs';
import { _ as __nuxt_component_4 } from './BlogCard-BhhLh0xh.mjs';
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AppHero",
  __ssrInlineRender: true,
  setup(__props) {
    const titles = [
      "Head of Technology",
      "Vue Certified Developer",
      "Full-Stack Developer",
      "System Architect"
    ];
    const currentTitleIndex = ref(0);
    const techStack = ["Vue", "Nuxt", "TypeScript", "Python", "Node.js", "Bun", "Redis", "BullMQ", "Prisma", "PostgreSQL", "Docker"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_M3Badge = __nuxt_component_2$1;
      const _component_M3Button = __nuxt_component_2$2;
      const _component_NuxtImg = ImageComponent;
      const _component_Icon = __nuxt_component_1$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative min-h-[90vh] overflow-hidden" }, _attrs))}><div class="absolute inset-0 bg-mesh"></div><div class="absolute inset-0 bg-grid opacity-50 dark:opacity-50"></div><div class="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-mint-500/10 blur-3xl"></div><div class="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-mint-500/5 blur-3xl"></div><div class="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 lg:min-h-[90vh] lg:flex-row lg:gap-16 lg:py-0"><div class="flex-1 text-center lg:text-left">`);
      _push(ssrRenderComponent(_component_M3Badge, {
        variant: "primary",
        class: "mb-4 animate-fade-in"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="relative mr-2 flex h-2 w-2"${_scopeId}><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-500 opacity-75"${_scopeId}></span><span class="relative inline-flex h-2 w-2 rounded-full bg-mint-500"${_scopeId}></span></span> Available for opportunities `);
          } else {
            return [
              createVNode("span", { class: "relative mr-2 flex h-2 w-2" }, [
                createVNode("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-500 opacity-75" }),
                createVNode("span", { class: "relative inline-flex h-2 w-2 rounded-full bg-mint-500" })
              ]),
              createTextVNode(" Available for opportunities ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="mb-6 text-display-md text-slate-900 animate-fade-in-up dark:text-white lg:text-display-lg stagger-1"> Hi, I&#39;m <span class="text-gradient">Spurlock</span></h1><div class="mb-8 h-12 animate-fade-in-up stagger-2"><p class="text-headline-md text-slate-500 dark:text-slate-400 lg:text-headline-lg">${ssrInterpolate(titles[unref(currentTitleIndex)])}</p></div><p class="mx-auto mb-10 max-w-xl text-body-lg text-slate-600 animate-fade-in-up dark:text-slate-400 lg:mx-0 stagger-3"> 20+ years in IT and development. Creator of <span class="font-semibold text-mint-600 dark:text-mint-400">Evergreen</span> — an enterprise platform powering all operations across 5 branches at Midtown Home Improvements. </p><div class="flex flex-col items-center gap-4 animate-fade-in-up sm:flex-row lg:justify-start stagger-4">`);
      _push(ssrRenderComponent(_component_M3Button, {
        as: "NuxtLink",
        to: "/#projects",
        variant: "primary",
        size: "lg",
        icon: "lucide:arrow-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View My Work `);
          } else {
            return [
              createTextVNode(" View My Work ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_M3Button, {
        as: "a",
        href: "mailto:aj@spurlock.dev",
        variant: "secondary",
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
      _push(`</div><div class="mt-12 animate-fade-in-up stagger-5"><p class="mb-4 text-label-md uppercase tracking-wider text-slate-500"> Tech I Work With </p><div class="flex flex-wrap items-center justify-center gap-3 lg:justify-start"><!--[-->`);
      ssrRenderList(techStack, (tech) => {
        _push(ssrRenderComponent(_component_M3Badge, {
          key: tech,
          variant: "muted",
          size: "sm",
          class: "hover:text-mint-600 dark:hover:text-mint-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tech)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tech), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div><div class="mt-12 flex-shrink-0 lg:mt-0"><div class="relative animate-scale-in"><div class="absolute -inset-4 rounded-full bg-gradient-to-br from-mint-500/20 to-transparent blur-2xl"></div><div class="relative h-72 w-72 overflow-hidden rounded-3xl border-2 border-mint-500/20 bg-white shadow-lg dark:bg-surface-elevated dark:shadow-none lg:h-96 lg:w-96">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/headshot_v2.png",
        alt: "Aaron J. Spurlock",
        width: "384",
        height: "384",
        class: "h-full w-full object-cover object-top",
        loading: "eager"
      }, null, _parent));
      _push(`<div class="absolute -bottom-2 -right-2 h-20 w-20 rounded-tl-3xl border-l-2 border-t-2 border-mint-500/30"></div></div><div class="absolute -bottom-4 -left-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-800 dark:bg-surface-elevated dark:shadow-none"><div class="flex items-center gap-3"><div class="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-500/10">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:briefcase",
        class: "h-6 w-6 text-mint-600 dark:text-mint-400"
      }, null, _parent));
      _push(`</div><div><p class="text-label-md text-slate-500 dark:text-slate-400">Experience</p><p class="text-title-md font-semibold text-slate-900 dark:text-white">20+ Years</p></div></div></div></div></div></div><div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-down",
        class: "h-8 w-8 text-mint-500/50"
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$6, { __name: "AppHero" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "M3Section",
  __ssrInlineRender: true,
  props: {
    id: { default: void 0 },
    background: { default: "default" },
    padding: { default: "lg" }
  },
  setup(__props) {
    const paddingClasses = {
      sm: "py-12",
      md: "py-16",
      lg: "py-24"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: __props.id,
        class: ["relative overflow-hidden", [
          paddingClasses[__props.padding],
          __props.background === "dim" && "bg-slate-50 dark:bg-surface-dim"
        ]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "background", {}, null, _push, _parent);
      _push(`<div class="relative mx-auto max-w-6xl px-6">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/m3/M3Section.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$5, { __name: "M3Section" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "M3SectionHeader",
  __ssrInlineRender: true,
  props: {
    label: { default: void 0 },
    title: {},
    description: { default: void 0 },
    align: { default: "center" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["mb-16", __props.align === "center" ? "text-center" : "text-left"]
      }, _attrs))}>`);
      if (__props.label) {
        _push(`<p class="mb-4 text-label-lg uppercase tracking-wider text-mint-600 dark:text-mint-400">${ssrInterpolate(__props.label)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="mb-6 text-display-sm text-slate-900 dark:text-white">${ssrInterpolate(__props.title)}</h2>`);
      if (__props.description) {
        _push(`<p class="${ssrRenderClass([__props.align === "left" && "mx-0", "mx-auto max-w-2xl text-body-lg text-slate-600 dark:text-slate-400"])}">${ssrInterpolate(__props.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/m3/M3SectionHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$4, { __name: "M3SectionHeader" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProjectsShowcase",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        slug: "evergreen",
        title: "Evergreen",
        description: "Enterprise platform powering all operations across 5 branches. Prototyped in 2 weeks, evolved over 4+ years into a comprehensive business system with CRM, Call Center, BI, and Client Portal.",
        image: "/images/evergreen_featured.png",
        tags: ["Nuxt", "Nest.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "Twilio", "Prisma"],
        featured: true
      },
      {
        slug: "evergreen-crm",
        title: "Evergreen CRM Module",
        description: "Contact management, lead aggregation from external sources, SMS messaging, and automated workflows powering sales operations.",
        image: "/images/evergreen_crm.png",
        tags: ["Nuxt", "Prisma", "PostgreSQL", "BullMQ"]
      },
      {
        slug: "evergreen-bi",
        title: "Business Intelligence Dashboard",
        description: "Real-time analytics and reporting with customizable dashboards, KPI tracking, and data visualization across all business operations.",
        image: "/images/evergreen_bi.png",
        tags: ["WebSockets", "Redis", "PostgreSQL", "Read Replicas"]
      },
      {
        slug: "evergreen-call-center",
        title: "Call Center Platform",
        description: "Full Twilio-powered call center used by telemarketers daily. Features call recording, real-time monitoring, and performance tracking.",
        image: "/images/evergreen_call-center.png",
        tags: ["Twilio", "WebSockets", "Redis", "BullMQ"]
      },
      {
        slug: "evergreen-client-portal",
        title: "Client Portal",
        description: "Self-service portal for customers to track production jobs, view documents, service tickets, and communicate with their project team.",
        image: "/images/evergreen_portal.png",
        tags: ["Nuxt", "File Uploads", "Real-time Updates"]
      }
    ];
    const featuredProject = computed(() => projects.find((p) => p.featured));
    const otherProjects = computed(() => projects.filter((p) => !p.featured));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_M3Section = __nuxt_component_0;
      const _component_M3SectionHeader = __nuxt_component_1$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_1$2;
      const _component_M3Badge = __nuxt_component_2$1;
      const _component_NuxtImg = ImageComponent;
      const _component_ProjectCard = __nuxt_component_6;
      const _component_M3Button = __nuxt_component_2$2;
      _push(ssrRenderComponent(_component_M3Section, mergeProps({ id: "projects" }, _attrs), {
        background: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-0 bg-mesh opacity-50"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute inset-0 bg-mesh opacity-50" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_M3SectionHeader, {
              label: "Portfolio",
              title: "Featured Projects",
              description: "Explore the systems I've built, from the comprehensive Evergreen platform to its individual modules and features."
            }, null, _parent2, _scopeId));
            if (unref(featuredProject)) {
              _push2(`<div class="mb-12"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/projects/${unref(featuredProject).slug}`,
                class: "group relative block rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:border-mint-500/30 hover:shadow-2xl hover:shadow-mint-500/10 dark:border-slate-800 dark:bg-surface-elevated"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid gap-8 p-8 lg:grid-cols-2 lg:p-12"${_scopeId2}><div class="flex flex-col justify-center"${_scopeId2}><div class="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-mint-500 px-4 py-1.5 text-label-lg font-medium text-slate-900"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:star",
                      class: "h-4 w-4"
                    }, null, _parent3, _scopeId2));
                    _push3(` Featured Project </div><h3 class="mb-4 text-display-sm text-slate-900 transition-colors group-hover:text-mint-600 dark:text-white dark:group-hover:text-mint-400"${_scopeId2}>${ssrInterpolate(unref(featuredProject).title)}</h3><p class="mb-6 text-body-lg text-slate-600 dark:text-slate-400"${_scopeId2}>${ssrInterpolate(unref(featuredProject).description)}</p><div class="mb-8 flex flex-wrap gap-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(featuredProject).tags, (tag) => {
                      _push3(ssrRenderComponent(_component_M3Badge, {
                        key: tag,
                        variant: "muted"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(tag)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(tag), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div><div class="flex items-center gap-2 text-title-lg font-semibold text-mint-600 dark:text-mint-400"${_scopeId2}> Explore Project `);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="relative self-start"${_scopeId2}><div class="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-surface-overlay"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtImg, {
                      src: "/images/evergreen_featured.png",
                      alt: "Evergreen Dashboard showing branch scorecards and analytics",
                      width: "640",
                      height: "360",
                      class: "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105",
                      loading: "lazy"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl border-2 border-mint-500/20"${_scopeId2}></div><div class="absolute -left-4 -top-4 h-16 w-16 rounded-xl bg-mint-500/10"${_scopeId2}></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "grid gap-8 p-8 lg:grid-cols-2 lg:p-12" }, [
                        createVNode("div", { class: "flex flex-col justify-center" }, [
                          createVNode("div", { class: "mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-mint-500 px-4 py-1.5 text-label-lg font-medium text-slate-900" }, [
                            createVNode(_component_Icon, {
                              name: "lucide:star",
                              class: "h-4 w-4"
                            }),
                            createTextVNode(" Featured Project ")
                          ]),
                          createVNode("h3", { class: "mb-4 text-display-sm text-slate-900 transition-colors group-hover:text-mint-600 dark:text-white dark:group-hover:text-mint-400" }, toDisplayString(unref(featuredProject).title), 1),
                          createVNode("p", { class: "mb-6 text-body-lg text-slate-600 dark:text-slate-400" }, toDisplayString(unref(featuredProject).description), 1),
                          createVNode("div", { class: "mb-8 flex flex-wrap gap-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(featuredProject).tags, (tag) => {
                              return openBlock(), createBlock(_component_M3Badge, {
                                key: tag,
                                variant: "muted"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(tag), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          createVNode("div", { class: "flex items-center gap-2 text-title-lg font-semibold text-mint-600 dark:text-mint-400" }, [
                            createTextVNode(" Explore Project "),
                            createVNode(_component_Icon, {
                              name: "lucide:arrow-right",
                              class: "h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "relative self-start" }, [
                          createVNode("div", { class: "aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-surface-overlay" }, [
                            createVNode(_component_NuxtImg, {
                              src: "/images/evergreen_featured.png",
                              alt: "Evergreen Dashboard showing branch scorecards and analytics",
                              width: "640",
                              height: "360",
                              class: "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105",
                              loading: "lazy"
                            })
                          ]),
                          createVNode("div", { class: "absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl border-2 border-mint-500/20" }),
                          createVNode("div", { class: "absolute -left-4 -top-4 h-16 w-16 rounded-xl bg-mint-500/10" })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(otherProjects), (project) => {
              _push2(ssrRenderComponent(_component_ProjectCard, {
                key: project.slug,
                project
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="mt-12 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_M3Button, {
              as: "NuxtLink",
              to: "/projects",
              variant: "secondary",
              size: "lg",
              icon: "lucide:arrow-right"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All Projects `);
                } else {
                  return [
                    createTextVNode(" View All Projects ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_M3SectionHeader, {
                label: "Portfolio",
                title: "Featured Projects",
                description: "Explore the systems I've built, from the comprehensive Evergreen platform to its individual modules and features."
              }),
              unref(featuredProject) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-12"
              }, [
                createVNode(_component_NuxtLink, {
                  to: `/projects/${unref(featuredProject).slug}`,
                  class: "group relative block rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:border-mint-500/30 hover:shadow-2xl hover:shadow-mint-500/10 dark:border-slate-800 dark:bg-surface-elevated"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "grid gap-8 p-8 lg:grid-cols-2 lg:p-12" }, [
                      createVNode("div", { class: "flex flex-col justify-center" }, [
                        createVNode("div", { class: "mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-mint-500 px-4 py-1.5 text-label-lg font-medium text-slate-900" }, [
                          createVNode(_component_Icon, {
                            name: "lucide:star",
                            class: "h-4 w-4"
                          }),
                          createTextVNode(" Featured Project ")
                        ]),
                        createVNode("h3", { class: "mb-4 text-display-sm text-slate-900 transition-colors group-hover:text-mint-600 dark:text-white dark:group-hover:text-mint-400" }, toDisplayString(unref(featuredProject).title), 1),
                        createVNode("p", { class: "mb-6 text-body-lg text-slate-600 dark:text-slate-400" }, toDisplayString(unref(featuredProject).description), 1),
                        createVNode("div", { class: "mb-8 flex flex-wrap gap-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(featuredProject).tags, (tag) => {
                            return openBlock(), createBlock(_component_M3Badge, {
                              key: tag,
                              variant: "muted"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(tag), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        createVNode("div", { class: "flex items-center gap-2 text-title-lg font-semibold text-mint-600 dark:text-mint-400" }, [
                          createTextVNode(" Explore Project "),
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "relative self-start" }, [
                        createVNode("div", { class: "aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-surface-overlay" }, [
                          createVNode(_component_NuxtImg, {
                            src: "/images/evergreen_featured.png",
                            alt: "Evergreen Dashboard showing branch scorecards and analytics",
                            width: "640",
                            height: "360",
                            class: "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105",
                            loading: "lazy"
                          })
                        ]),
                        createVNode("div", { class: "absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl border-2 border-mint-500/20" }),
                        createVNode("div", { class: "absolute -left-4 -top-4 h-16 w-16 rounded-xl bg-mint-500/10" })
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["to"])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "grid gap-6 sm:grid-cols-2 lg:grid-cols-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(otherProjects), (project) => {
                  return openBlock(), createBlock(_component_ProjectCard, {
                    key: project.slug,
                    project
                  }, null, 8, ["project"]);
                }), 128))
              ]),
              createVNode("div", { class: "mt-12 text-center" }, [
                createVNode(_component_M3Button, {
                  as: "NuxtLink",
                  to: "/projects",
                  variant: "secondary",
                  size: "lg",
                  icon: "lucide:arrow-right"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All Projects ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectsShowcase.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "ProjectsShowcase" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WorkHistory",
  __ssrInlineRender: true,
  setup(__props) {
    const jobs = [
      {
        title: "Head of Technology",
        company: "Midtown Home Improvements",
        period: "2020 - Present",
        duration: "4+ years",
        description: "Founded and lead the Technology department. Prototyped Evergreen in two weeks, which has evolved into an enterprise-grade platform powering all 5 branches. Built the development team from scratch and oversee all technology operations.",
        highlights: [
          "Invented and architected Evergreen — now powers the entire company across 5 branches",
          "Built full Call Center with Twilio integration for telemarketing operations",
          "Implemented BI dashboard, Client Portal, lead aggregation, and mobile app",
          "Tech stack: Nuxt, Nest.js, PostgreSQL, Redis, BullMQ, Prisma, Docker",
          "Lead development team, DevOps, IT helpdesk, and network infrastructure"
        ],
        technologies: ["Nuxt", "Nest.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "Twilio", "Prisma"],
        isCurrent: true
      },
      {
        title: "Founder & CEO",
        company: "MightStream",
        period: "2020 - 2021",
        duration: "1 year",
        description: "Founded a live-streaming startup during COVID that offered live-stream embedding for mobile apps and websites. Grew to 1,000 daily active users and achieved profitability before sunset.",
        highlights: [
          "Built product from concept to 1,000 daily active users",
          "Achieved profitability as a solo founder",
          "Full-stack development and infrastructure management"
        ],
        technologies: ["Python", "Django", "PostgreSQL", "TypeScript", "Tailwind CSS", "WebRTC", "WebSockets", "Docker"]
      },
      {
        title: "Technical Support Engineer",
        company: "Restream",
        period: "2019 - 2020",
        duration: "1 year",
        description: "Technical support for the leading multistreaming platform. Helped customers configure and troubleshoot their streaming setups while building internal tools to improve team efficiency.",
        highlights: [
          "Supported customers with stream setup, configuration, and troubleshooting",
          "Developed JavaScript tools for support team automation",
          "Built internal tools to streamline operations",
          "Deep expertise in live streaming technology and APIs"
        ],
        technologies: ["JavaScript", "Node.js", "APIs", "Live Streaming", "WebRTC"]
      },
      {
        title: "AppleCare Advisor & Special Projects",
        company: "Apple",
        period: "2016 - 2019",
        duration: "3 years",
        description: "Started in AppleCare support and advanced to special projects involving engineering work. Gained deep understanding of Apple ecosystem and enterprise-level support operations.",
        highlights: [
          "Selected for special engineering projects",
          "Advanced technical troubleshooting and diagnostics",
          "Enterprise-level customer support experience"
        ],
        technologies: ["macOS", "iOS", "Diagnostics", "Engineering Tools"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_M3Section = __nuxt_component_0;
      const _component_M3SectionHeader = __nuxt_component_1$1;
      const _component_M3Card = __nuxt_component_3$1;
      const _component_M3Badge = __nuxt_component_2$1;
      const _component_Icon = __nuxt_component_1$2;
      _push(ssrRenderComponent(_component_M3Section, mergeProps({
        id: "experience",
        background: "dim"
      }, _attrs), {
        background: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-0 bg-grid opacity-30"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute inset-0 bg-grid opacity-30" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_M3SectionHeader, {
              label: "Career Journey",
              title: "Work Experience",
              description: "Two decades of experience from QBASIC and dial-up modems to building enterprise platforms that power entire companies."
            }, null, _parent2, _scopeId));
            _push2(`<div class="relative"${_scopeId}><div class="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-mint-500 via-mint-500/50 to-transparent md:left-1/2 md:block"${_scopeId}></div><div class="space-y-12"${_scopeId}><!--[-->`);
            ssrRenderList(jobs, (job, index) => {
              _push2(`<div class="relative"${_scopeId}><div class="absolute left-0 top-8 hidden h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2 md:flex"${_scopeId}><div class="${ssrRenderClass([job.isCurrent ? "border-mint-500 bg-mint-500" : "border-mint-500/50 bg-white dark:bg-surface", "h-4 w-4 rounded-full border-2"])}"${_scopeId}>`);
              if (job.isCurrent) {
                _push2(`<div class="absolute h-4 w-4 animate-ping rounded-full bg-mint-500/50"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="${ssrRenderClass([index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8", "md:w-[calc(50%-2rem)]"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_M3Card, {
                hoverable: "",
                class: "p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4"${_scopeId2}><div class="min-w-0 flex-1"${_scopeId2}><div class="flex flex-wrap items-center gap-2"${_scopeId2}><h3 class="text-headline-sm text-slate-900 dark:text-white"${_scopeId2}>${ssrInterpolate(job.title)}</h3>`);
                    if (job.isCurrent) {
                      _push3(ssrRenderComponent(_component_M3Badge, {
                        variant: "primary",
                        size: "sm"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Current `);
                          } else {
                            return [
                              createTextVNode(" Current ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><p class="mt-1 text-title-md text-mint-600 dark:text-mint-400"${_scopeId2}>${ssrInterpolate(job.company)}</p></div><div class="flex-shrink-0 sm:text-right"${_scopeId2}><p class="text-body-md text-slate-500 dark:text-slate-400"${_scopeId2}>${ssrInterpolate(job.period)}</p><p class="text-body-sm text-slate-400 dark:text-slate-500"${_scopeId2}>${ssrInterpolate(job.duration)}</p></div></div><p class="mb-4 text-body-md text-slate-600 dark:text-slate-400"${_scopeId2}>${ssrInterpolate(job.description)}</p><ul class="mb-4 space-y-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(job.highlights, (highlight) => {
                      _push3(`<li class="flex items-start gap-2 text-body-sm text-slate-600 dark:text-slate-400"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:check",
                        class: "mt-0.5 h-4 w-4 flex-shrink-0 text-mint-500"
                      }, null, _parent3, _scopeId2));
                      _push3(` ${ssrInterpolate(highlight)}</li>`);
                    });
                    _push3(`<!--]--></ul><div class="flex flex-wrap gap-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(job.technologies, (tech) => {
                      _push3(ssrRenderComponent(_component_M3Badge, {
                        key: tech,
                        variant: "muted",
                        size: "sm"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(tech)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(tech), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4" }, [
                        createVNode("div", { class: "min-w-0 flex-1" }, [
                          createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                            createVNode("h3", { class: "text-headline-sm text-slate-900 dark:text-white" }, toDisplayString(job.title), 1),
                            job.isCurrent ? (openBlock(), createBlock(_component_M3Badge, {
                              key: 0,
                              variant: "primary",
                              size: "sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Current ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode("p", { class: "mt-1 text-title-md text-mint-600 dark:text-mint-400" }, toDisplayString(job.company), 1)
                        ]),
                        createVNode("div", { class: "flex-shrink-0 sm:text-right" }, [
                          createVNode("p", { class: "text-body-md text-slate-500 dark:text-slate-400" }, toDisplayString(job.period), 1),
                          createVNode("p", { class: "text-body-sm text-slate-400 dark:text-slate-500" }, toDisplayString(job.duration), 1)
                        ])
                      ]),
                      createVNode("p", { class: "mb-4 text-body-md text-slate-600 dark:text-slate-400" }, toDisplayString(job.description), 1),
                      createVNode("ul", { class: "mb-4 space-y-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(job.highlights, (highlight) => {
                          return openBlock(), createBlock("li", {
                            key: highlight,
                            class: "flex items-start gap-2 text-body-sm text-slate-600 dark:text-slate-400"
                          }, [
                            createVNode(_component_Icon, {
                              name: "lucide:check",
                              class: "mt-0.5 h-4 w-4 flex-shrink-0 text-mint-500"
                            }),
                            createTextVNode(" " + toDisplayString(highlight), 1)
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "flex flex-wrap gap-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(job.technologies, (tech) => {
                          return openBlock(), createBlock(_component_M3Badge, {
                            key: tech,
                            variant: "muted",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(tech), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode(_component_M3SectionHeader, {
                label: "Career Journey",
                title: "Work Experience",
                description: "Two decades of experience from QBASIC and dial-up modems to building enterprise platforms that power entire companies."
              }),
              createVNode("div", { class: "relative" }, [
                createVNode("div", { class: "absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-mint-500 via-mint-500/50 to-transparent md:left-1/2 md:block" }),
                createVNode("div", { class: "space-y-12" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(jobs, (job, index) => {
                    return createVNode("div", {
                      key: job.company,
                      class: "relative"
                    }, [
                      createVNode("div", { class: "absolute left-0 top-8 hidden h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2 md:flex" }, [
                        createVNode("div", {
                          class: ["h-4 w-4 rounded-full border-2", job.isCurrent ? "border-mint-500 bg-mint-500" : "border-mint-500/50 bg-white dark:bg-surface"]
                        }, [
                          job.isCurrent ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "absolute h-4 w-4 animate-ping rounded-full bg-mint-500/50"
                          })) : createCommentVNode("", true)
                        ], 2)
                      ]),
                      createVNode("div", {
                        class: ["md:w-[calc(50%-2rem)]", index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"]
                      }, [
                        createVNode(_component_M3Card, {
                          hoverable: "",
                          class: "p-6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4" }, [
                              createVNode("div", { class: "min-w-0 flex-1" }, [
                                createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                                  createVNode("h3", { class: "text-headline-sm text-slate-900 dark:text-white" }, toDisplayString(job.title), 1),
                                  job.isCurrent ? (openBlock(), createBlock(_component_M3Badge, {
                                    key: 0,
                                    variant: "primary",
                                    size: "sm"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Current ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                createVNode("p", { class: "mt-1 text-title-md text-mint-600 dark:text-mint-400" }, toDisplayString(job.company), 1)
                              ]),
                              createVNode("div", { class: "flex-shrink-0 sm:text-right" }, [
                                createVNode("p", { class: "text-body-md text-slate-500 dark:text-slate-400" }, toDisplayString(job.period), 1),
                                createVNode("p", { class: "text-body-sm text-slate-400 dark:text-slate-500" }, toDisplayString(job.duration), 1)
                              ])
                            ]),
                            createVNode("p", { class: "mb-4 text-body-md text-slate-600 dark:text-slate-400" }, toDisplayString(job.description), 1),
                            createVNode("ul", { class: "mb-4 space-y-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(job.highlights, (highlight) => {
                                return openBlock(), createBlock("li", {
                                  key: highlight,
                                  class: "flex items-start gap-2 text-body-sm text-slate-600 dark:text-slate-400"
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "lucide:check",
                                    class: "mt-0.5 h-4 w-4 flex-shrink-0 text-mint-500"
                                  }),
                                  createTextVNode(" " + toDisplayString(highlight), 1)
                                ]);
                              }), 128))
                            ]),
                            createVNode("div", { class: "flex flex-wrap gap-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(job.technologies, (tech) => {
                                return openBlock(), createBlock(_component_M3Badge, {
                                  key: tech,
                                  variant: "muted",
                                  size: "sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(tech), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ], 2)
                    ]);
                  }), 64))
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WorkHistory.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "WorkHistory" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BlogPreview",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "latest-posts",
      async () => {
        const all = await queryCollection("blog").all();
        return all.slice(0, 3);
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_M3Section = __nuxt_component_0;
      const _component_M3Button = __nuxt_component_2$2;
      const _component_BlogCard = __nuxt_component_4;
      const _component_Icon = __nuxt_component_1$2;
      _push(ssrRenderComponent(_component_M3Section, mergeProps({ background: "dim" }, _attrs), {
        background: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-0 bg-grid opacity-30"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute inset-0 bg-grid opacity-30" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-16 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left"${_scopeId}><div${_scopeId}><p class="mb-4 text-label-lg uppercase tracking-wider text-mint-600 dark:text-mint-400"${_scopeId}> Blog </p><h2 class="mb-4 text-display-sm text-slate-900 dark:text-white"${_scopeId}> Latest Articles </h2><p class="max-w-xl text-body-lg text-slate-600 dark:text-slate-400"${_scopeId}> Thoughts on development, architecture, and building enterprise software. </p></div>`);
            _push2(ssrRenderComponent(_component_M3Button, {
              as: "NuxtLink",
              to: "/blog",
              variant: "secondary",
              icon: "lucide:arrow-right"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All Posts `);
                } else {
                  return [
                    createTextVNode(" View All Posts ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(posts)?.length) {
              _push2(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
              ssrRenderList(unref(posts), (post) => {
                _push2(ssrRenderComponent(_component_BlogCard, {
                  key: post.path,
                  post
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="rounded-2xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:file-text",
                class: "mx-auto mb-4 h-12 w-12 text-slate-400 dark:text-slate-600"
              }, null, _parent2, _scopeId));
              _push2(`<h3 class="mb-2 text-headline-sm text-slate-500 dark:text-slate-400"${_scopeId}> No Posts Yet </h3><p class="text-body-md text-slate-400 dark:text-slate-500"${_scopeId}> Blog posts coming soon. Stay tuned! </p></div>`);
            }
          } else {
            return [
              createVNode("div", { class: "mb-16 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left" }, [
                createVNode("div", null, [
                  createVNode("p", { class: "mb-4 text-label-lg uppercase tracking-wider text-mint-600 dark:text-mint-400" }, " Blog "),
                  createVNode("h2", { class: "mb-4 text-display-sm text-slate-900 dark:text-white" }, " Latest Articles "),
                  createVNode("p", { class: "max-w-xl text-body-lg text-slate-600 dark:text-slate-400" }, " Thoughts on development, architecture, and building enterprise software. ")
                ]),
                createVNode(_component_M3Button, {
                  as: "NuxtLink",
                  to: "/blog",
                  variant: "secondary",
                  icon: "lucide:arrow-right"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All Posts ")
                  ]),
                  _: 1
                })
              ]),
              unref(posts)?.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(posts), (post) => {
                  return openBlock(), createBlock(_component_BlogCard, {
                    key: post.path,
                    post
                  }, null, 8, ["post"]);
                }), 128))
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "rounded-2xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700"
              }, [
                createVNode(_component_Icon, {
                  name: "lucide:file-text",
                  class: "mx-auto mb-4 h-12 w-12 text-slate-400 dark:text-slate-600"
                }),
                createVNode("h3", { class: "mb-2 text-headline-sm text-slate-500 dark:text-slate-400" }, " No Posts Yet "),
                createVNode("p", { class: "text-body-md text-slate-400 dark:text-slate-500" }, " Blog posts coming soon. Stay tuned! ")
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogPreview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "BlogPreview" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Aaron J. Spurlock | Developer Portfolio",
      description: "Head of Technology, Full-Stack Developer, and System Architect. Creator of Evergreen - an enterprise-grade CRM and business platform.",
      ogTitle: "Aaron J. Spurlock | Developer Portfolio",
      ogDescription: "Head of Technology, Full-Stack Developer, and System Architect building enterprise-grade solutions.",
      ogType: "website",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHero = __nuxt_component_0$1;
      const _component_ProjectsShowcase = __nuxt_component_1;
      const _component_WorkHistory = __nuxt_component_2;
      const _component_BlogPreview = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHero, null, null, _parent));
      _push(ssrRenderComponent(_component_ProjectsShowcase, null, null, _parent));
      _push(ssrRenderComponent(_component_WorkHistory, null, null, _parent));
      _push(ssrRenderComponent(_component_BlogPreview, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dd2wg4cq.mjs.map
