import{_ as l,c as s,o as e,a as o}from"./app.7f284f84.js";const h=JSON.parse('{"title":"2022-07-19","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. vue \u9879\u76EE\u6700\u540E\u9636\u6BB5\u5982\u4F55\u6253\u5305\uFF1F","slug":"_1-vue-\u9879\u76EE\u6700\u540E\u9636\u6BB5\u5982\u4F55\u6253\u5305\uFF1F"},{"level":2,"title":"2. \u5982\u4F55\u89E3\u51B3 token \u8FC7\u671F\u95EE\u9898\uFF1F","slug":"_2-\u5982\u4F55\u89E3\u51B3-token-\u8FC7\u671F\u95EE\u9898\uFF1F"},{"level":2,"title":"3. vue \u4E2D slot \u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u4EE5\u53CA slot \u4F5C\u7528\u57DF\u63D2\u69FD\u7684\u7528\u6CD5\uFF1F","slug":"_3-vue-\u4E2D-slot-\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u4EE5\u53CA-slot-\u4F5C\u7528\u57DF\u63D2\u69FD\u7684\u7528\u6CD5\uFF1F"},{"level":2,"title":"4. vue-router \u4E2D\u94A9\u5B50\u51FD\u6570\u90FD\u6709\u54EA\u4E9B\uFF1F","slug":"_4-vue-router-\u4E2D\u94A9\u5B50\u51FD\u6570\u90FD\u6709\u54EA\u4E9B\uFF1F"},{"level":2,"title":"5. \u8DEF\u7531\u914D\u7F6E\u9879\u5E38\u7528\u7684\u5C5E\u6027\u53CA\u5176\u4F5C\u7528\uFF1F","slug":"_5-\u8DEF\u7531\u914D\u7F6E\u9879\u5E38\u7528\u7684\u5C5E\u6027\u53CA\u5176\u4F5C\u7528\uFF1F"}],"relativePath":"\u6BCF\u65E5/2022-07-19.md","lastUpdated":null}'),a={name:"\u6BCF\u65E5/2022-07-19.md"},n=o(`<h1 id="_2022-07-19" tabindex="-1">2022-07-19 <a class="header-anchor" href="#_2022-07-19" aria-hidden="true">#</a></h1><h2 id="_1-vue-\u9879\u76EE\u6700\u540E\u9636\u6BB5\u5982\u4F55\u6253\u5305\uFF1F" tabindex="-1">1. vue \u9879\u76EE\u6700\u540E\u9636\u6BB5\u5982\u4F55\u6253\u5305\uFF1F <a class="header-anchor" href="#_1-vue-\u9879\u76EE\u6700\u540E\u9636\u6BB5\u5982\u4F55\u6253\u5305\uFF1F" aria-hidden="true">#</a></h2><ul><li>\u601D\u8003\u662F\u5426\u8981\u66F4\u6362\u4E3A\u7EBF\u4E0A\u7684\u63A5\u53E3\u5730\u5740\uFF0C\u5176\u5B9E\u65E9\u671F\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u6765\u5B9A\u4E49\u63A5\u53E3\u5730\u5740</li><li><code>vue.config.js</code> \u4E2D \u914D\u7F6E\u4E00\u4E9B\u57FA\u7840\u5185\u5BB9</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isPord </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">publicPath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> isPord </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u5904\u7406 \u76F8\u5BF9\u8DEF\u5F84\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">productionSourceMap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u4F18\u5316\u4E0D\u8981 map \u6587\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6267\u884C npm run build \uFF0C\u4EA4\u51FA dist \u76EE\u5F55\uFF0C\u8DD1\u8DEF</li><li>\u8981\u4E0D\u8981\u8003\u8651\u4F18\u5316\uFF0C\u90A3\u662F\u770B\u5FC3\u60C5\u548C\u9700\u6C42\uFF01\uFF08\u4E00\u5B9A\u8981\u4F18\u5316\u7684\u8BDD\uFF0C\u505A\u597D\u4EE3\u7801\u5907\u4EFD\uFF01\uFF09</li></ul><h2 id="_2-\u5982\u4F55\u89E3\u51B3-token-\u8FC7\u671F\u95EE\u9898\uFF1F" tabindex="-1">2. \u5982\u4F55\u89E3\u51B3 token \u8FC7\u671F\u95EE\u9898\uFF1F <a class="header-anchor" href="#_2-\u5982\u4F55\u89E3\u51B3-token-\u8FC7\u671F\u95EE\u9898\uFF1F" aria-hidden="true">#</a></h2><ul><li><p>\u5982\u679C\u54CD\u5E94\u7801\u662F 401 \uFF0C\u5219\u8BF7\u6C42\u83B7\u53D6\u65B0\u7684 token</p></li><li><p>\u6821\u9A8C\u662F\u5426\u6709 refresh_token</p></li><li><p>\u5982\u679C\u6709 refresh_token\uFF0C\u5219\u8BF7\u6C42\u83B7\u53D6\u65B0\u7684 token</p></li><li><p>\u5982\u679C\u83B7\u53D6\u6210\u529F\uFF0C\u5219\u628A\u65B0\u7684 token \u66F4\u65B0\u5230\u5BB9\u5668\u4E2D</p></li><li><p>\u5982\u679C\u83B7\u53D6\u5931\u8D25\uFF0C\u76F4\u63A5\u8DF3\u8F6C \u767B\u5F55\u9875\u9762</p></li><li><p>\u5904\u7406\u6D41\u7A0B\uFF1A</p></li></ul><ol><li>\u5728 axios \u7684\u62E6\u622A\u5668\u4E2D\u52A0\u5165 token \u5237\u65B0\u903B\u8F91</li><li>\u5F53\u7528\u6237 token \u8FC7\u671F\u65F6\uFF0C\u53BB\u5411\u670D\u52A1\u5668\u8BF7\u6C42\u65B0\u7684 token</li><li>\u628A\u65E7\u7684 token \u66FF\u6362\u4E3A\u65B0\u7684 token</li><li>\u7136\u540E\u7EE7\u7EED\u7528\u6237\u5F53\u524D\u7684\u8BF7\u6C42</li><li>\u6B64\u64CD\u4F5C\uFF0C\u6211\u4EEC\u7B49\u5230\u9879\u76EE\u540E\u671F\u5B8C\u6210\u6240\u6709\u529F\u80FD\u540E\uFF0C\u518D\u53BB\u5B9E\u73B0\u3011\u5728\u8BF7\u6C42\u7684\u54CD\u5E94\u62E6\u622A\u5668\u4E2D\u7EDF\u4E00\u5904\u7406 token \u8FC7\u671F\uFF1A</li></ol><h2 id="_3-vue-\u4E2D-slot-\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u4EE5\u53CA-slot-\u4F5C\u7528\u57DF\u63D2\u69FD\u7684\u7528\u6CD5\uFF1F" tabindex="-1">3. vue \u4E2D slot \u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u4EE5\u53CA slot \u4F5C\u7528\u57DF\u63D2\u69FD\u7684\u7528\u6CD5\uFF1F <a class="header-anchor" href="#_3-vue-\u4E2D-slot-\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u4EE5\u53CA-slot-\u4F5C\u7528\u57DF\u63D2\u69FD\u7684\u7528\u6CD5\uFF1F" aria-hidden="true">#</a></h2><blockquote><p>\u5F53\u7EC4\u4EF6\u5F53\u505A\u6807\u7B7E\u8FDB\u884C\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u7528 slot \u53EF\u4EE5\u7528\u6765\u63A5\u53D7\u7EC4\u4EF6\u6807\u7B7E\u5305\u88F9\u7684\u5185\u5BB9\uFF1B\u63D2\u69FD\u4E2D\u53EF\u4EE5\u8BBE\u7F6E\u9ED8\u8BA4\u5185\u5BB9\uFF0C \u7236\u7EC4\u4EF6\u672A\u586B\u5751\u65F6\uFF0C\u5219\u663E\u793A\u9ED8\u8BA4\u63D2\u69FD\u91CC\u9762\u7684\u4E1C\u897F\uFF1B</p></blockquote><ul><li>\u65E0\u540D\u63D2\u69FD</li></ul><ol><li>\u5B50\u7EC4\u4EF6\u4E2D\u8BBE\u7F6E <code>&lt;slot&gt; &lt;/slot&gt;</code></li><li>\u7236\u7EC4\u4EF6\u4E2D\u5728\u5B50\u7EC4\u4EF6\u6807\u7B7E\u4E2D\u586B\u5165\u9700\u8981\u7684\u5185\u5BB9</li></ol><ul><li><p>\u5177\u540D\u63D2\u69FD</p><ol><li><code>&lt;slot name=&quot;\u5751\u540D&quot;&gt;</code></li><li>\u7236\u4E2D\u5B50\u7EC4\u4EF6\u6807\u7B7E\u91CC <code>&lt;template v-slot:\u5751\u540D \u7B80\u5199\uFF1A#\u5751\u540D&gt;</code></li></ol></li><li><p>\u4F5C\u7528\u57DF\u63D2\u69FD</p><ol><li>\u5B50\u7EC4\u4EF6\u629B\u51FA\u6570\u636E \uFF1A:\u81EA\u5B9A\u4E49\u5C5E\u6027=\u201D\u6570\u636E\u201D <code>&lt;slot :row=&quot;\u6570\u636E&quot;&gt;&lt;/slot&gt;</code></li><li>\u7236\u7EC4\u4EF6\u4E2D\u63A5\u6536\u6570\u636E \uFF1A v-slot=\u201C\u81EA\u5B9A\u4E49\u53D8\u91CF scope \u201C</li><li>\u4F7F\u7528\uFF1A scope.row \u5C31\u662F\u63A5\u6536\u5230\u7684\u6570\u636E</li></ol></li></ul><h2 id="_4-vue-router-\u4E2D\u94A9\u5B50\u51FD\u6570\u90FD\u6709\u54EA\u4E9B\uFF1F" tabindex="-1">4. vue-router \u4E2D\u94A9\u5B50\u51FD\u6570\u90FD\u6709\u54EA\u4E9B\uFF1F <a class="header-anchor" href="#_4-vue-router-\u4E2D\u94A9\u5B50\u51FD\u6570\u90FD\u6709\u54EA\u4E9B\uFF1F" aria-hidden="true">#</a></h2><blockquote><p>vue-router \u4E2D\u7684\u94A9\u5B50\u51FD\u6570\u4E3B\u8981\u5206\u4E3A 3 \u7C7B</p></blockquote><ul><li>\u5168\u5C40\u94A9\u5B50\u51FD\u6570 <ul><li>beforeEach</li></ul></li><li>\u5355\u72EC\u8DEF\u7531\u72EC\u4EAB\u7EC4\u4EF6 <ul><li>beforeEnter</li></ul></li><li>\u7EC4\u4EF6\u5185\u94A9\u5B50</li><li>beforeRouterEnter</li><li>beforeRouterUpdate</li><li>beforeRouterLeave</li></ul><h2 id="_5-\u8DEF\u7531\u914D\u7F6E\u9879\u5E38\u7528\u7684\u5C5E\u6027\u53CA\u5176\u4F5C\u7528\uFF1F" tabindex="-1">5. \u8DEF\u7531\u914D\u7F6E\u9879\u5E38\u7528\u7684\u5C5E\u6027\u53CA\u5176\u4F5C\u7528\uFF1F <a class="header-anchor" href="#_5-\u8DEF\u7531\u914D\u7F6E\u9879\u5E38\u7528\u7684\u5C5E\u6027\u53CA\u5176\u4F5C\u7528\uFF1F" aria-hidden="true">#</a></h2><ul><li>path : \u8DF3\u8F6C\u8DEF\u5F84</li><li>component : \u8DEF\u5F84\u76F8\u5BF9\u4E8E\u7684\u7EC4\u4EF6</li><li>name:\u547D\u540D\u8DEF\u7531</li><li>children:\u5B50\u8DEF\u7531\u7684\u914D\u7F6E\u53C2\u6570(\u8DEF\u7531\u5D4C\u5957)</li><li>props:\u8DEF\u7531\u89E3\u8026</li><li>redirect : \u91CD\u5B9A\u5411\u8DEF\u7531</li></ul>`,18),t=[n];function p(i,r,c,u,d,D){return e(),s("div",null,t)}var y=l(a,[["render",p]]);export{h as __pageData,y as default};
