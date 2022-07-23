import{_ as e,o as t,c as o,d as l}from"./app.cf111618.js";const v=JSON.parse('{"title":"2022-07-13","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. Vue \u7EC4\u4EF6\u91CC\u7684\u5B9A\u65F6\u5668\u8981\u600E\u4E48\u9500\u6BC1","slug":"_1-vue-\u7EC4\u4EF6\u91CC\u7684\u5B9A\u65F6\u5668\u8981\u600E\u4E48\u9500\u6BC1"},{"level":2,"title":"2. vue \u7EC4\u4EF6 style \u4E2D scoped \u5C5E\u6027\u7684\u4F5C\u7528\u548C\u539F\u7406","slug":"_2-vue-\u7EC4\u4EF6-style-\u4E2D-scoped-\u5C5E\u6027\u7684\u4F5C\u7528\u548C\u539F\u7406"},{"level":2,"title":"3. \u4E00\u4E2A\u9875\u9762\u4E0A\u6709\u5927\u91CF\u7684\u56FE\u7247\uFF08\u5927\u578B\u7535\u5546\u7F51\u7AD9\uFF09\uFF0C\u52A0\u8F7D\u5F88\u6162\uFF0C\u4F60\u6709\u54EA\u4E9B \u65B9\u6CD5\u4F18\u5316\u8FD9\u4E9B\u56FE\u7247\u7684\u52A0\u8F7D\uFF0C\u7ED9\u7528\u6237\u66F4\u597D\u7684\u4F53\u9A8C","slug":"_3-\u4E00\u4E2A\u9875\u9762\u4E0A\u6709\u5927\u91CF\u7684\u56FE\u7247\uFF08\u5927\u578B\u7535\u5546\u7F51\u7AD9\uFF09\uFF0C\u52A0\u8F7D\u5F88\u6162\uFF0C\u4F60\u6709\u54EA\u4E9B-\u65B9\u6CD5\u4F18\u5316\u8FD9\u4E9B\u56FE\u7247\u7684\u52A0\u8F7D\uFF0C\u7ED9\u7528\u6237\u66F4\u597D\u7684\u4F53\u9A8C"},{"level":2,"title":"4. Vuex \u7684 5 \u4E2A\u6838\u5FC3\u5C5E\u6027\u662F\u4EC0\u4E48?\u8BF4\u4E0B\u5206\u522B\u7684\u4F5C\u7528","slug":"_4-vuex-\u7684-5-\u4E2A\u6838\u5FC3\u5C5E\u6027\u662F\u4EC0\u4E48-\u8BF4\u4E0B\u5206\u522B\u7684\u4F5C\u7528"},{"level":2,"title":"5. vue-router \u600E\u4E48\u914D\u7F6E\u8DEF\u7531(\u8FC7\u7A0B)","slug":"_5-vue-router-\u600E\u4E48\u914D\u7F6E\u8DEF\u7531-\u8FC7\u7A0B"}],"relativePath":"\u6BCF\u65E5/2022-07-13.md","lastUpdated":null}'),i={name:"\u6BCF\u65E5/2022-07-13.md"},a=l('<h1 id="_2022-07-13" tabindex="-1">2022-07-13 <a class="header-anchor" href="#_2022-07-13" aria-hidden="true">#</a></h1><h2 id="_1-vue-\u7EC4\u4EF6\u91CC\u7684\u5B9A\u65F6\u5668\u8981\u600E\u4E48\u9500\u6BC1" tabindex="-1">1. Vue \u7EC4\u4EF6\u91CC\u7684\u5B9A\u65F6\u5668\u8981\u600E\u4E48\u9500\u6BC1 <a class="header-anchor" href="#_1-vue-\u7EC4\u4EF6\u91CC\u7684\u5B9A\u65F6\u5668\u8981\u600E\u4E48\u9500\u6BC1" aria-hidden="true">#</a></h2><ol><li>\u5982\u679C\u9875\u9762\u4E0A\u6709\u5F88\u591A\u5B9A\u65F6\u5668\uFF0C\u53EF\u4EE5\u5728 data \u9009\u9879\u4E2D\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61 timer\uFF0C\u7ED9 \u6BCF\u4E2A\u5B9A\u65F6\u5668\u53D6\u4E2A\u540D\u5B57\u4E00\u4E00\u6620\u5C04\u5728\u5BF9\u8C61 timer \u4E2D\uFF0C \u5728 beforeDestroy \u6784\u9020\u51FD\u6570\u4E2D for(let k in this.timer){clearInterval(k)}\uFF1B \u2022</li><li>\u5982\u679C\u9875\u9762\u53EA\u6709\u5355\u4E2A\u5B9A\u65F6\u5668\uFF0C\u53EF\u4EE5\u8FD9\u4E48\u505A\u3002 const timer = setInterval(() =&gt;{}, 500); this.$once(&#39;hook:beforeDestroy&#39;, () =&gt; { clearInterval(timer); })</li></ol><h2 id="_2-vue-\u7EC4\u4EF6-style-\u4E2D-scoped-\u5C5E\u6027\u7684\u4F5C\u7528\u548C\u539F\u7406" tabindex="-1">2. vue \u7EC4\u4EF6 style \u4E2D scoped \u5C5E\u6027\u7684\u4F5C\u7528\u548C\u539F\u7406 <a class="header-anchor" href="#_2-vue-\u7EC4\u4EF6-style-\u4E2D-scoped-\u5C5E\u6027\u7684\u4F5C\u7528\u548C\u539F\u7406" aria-hidden="true">#</a></h2><ol><li>\u4EC0\u4E48\u662F scoped \u5728 Vue \u7EC4\u4EF6\u4E2D\uFF0C\u4E3A\u4E86\u4F7F\u6837\u5F0F\u79C1\u6709\u5316\uFF08\u6A21\u5757\u5316\uFF09\uFF0C\u4E0D\u5BF9\u5168\u5C40\u9020\u6210\u6C61\u67D3\uFF0C\u53EF\u4EE5\u5728 style \u6807\u7B7E\u4E0A\u6DFB\u52A0 scoped \u5C5E\u6027\u4EE5\u8868\u793A\u5B83\u7684\u53EA\u5C5E\u4E8E\u5F53\u4E0B\u7684\u6A21\u5757\uFF0C\u5C40\u90E8\u6709\u6548\u3002\u5982\u679C\u4E00 \u4E2A\u9879\u76EE\u4E2D\u7684\u6240\u6709 Vue \u7EC4\u4EF6 style \u6807\u7B7E\u5168\u90E8\u52A0\u4E0A\u4E86 scoped\uFF0C\u76F8\u5F53\u4E8E\u5B9E\u73B0\u4E86\u6837\u5F0F\u7684\u79C1 \u6709\u5316\u3002\u5982\u679C\u5F15\u7528\u4E86\u7B2C\u4E09\u65B9\u7EC4\u4EF6\uFF0C\u9700\u8981\u5728\u5F53\u524D\u7EC4\u4EF6\u4E2D\u5C40\u90E8\u4FEE\u6539\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u7684\u6837\u5F0F\uFF0C \u800C\u53C8\u4E0D\u60F3\u53BB\u9664 scoped \u5C5E\u6027\u9020\u6210\u7EC4\u4EF6\u4E4B\u95F4\u7684\u6837\u5F0F\u6C61\u67D3\u3002\u6B64\u65F6\u53EA\u80FD\u901A\u8FC7\u7A7F\u900F /deep/scoped \u7684\u65B9\u5F0F\u6765\u89E3\u51B3</li><li>scoped \u7684\u5B9E\u73B0\u539F\u7406\uFF1A Vue \u4E2D\u7684 scoped \u5C5E\u6027\u7684\u6548\u679C\u4E3B\u8981\u901A\u8FC7 PostCSS \u8F6C\u8BD1\u5B9E\u73B0\uFF0C\u5373 PostCSS \u7ED9\u6240\u6709 dom \u6DFB\u52A0\u4E86\u4E00\u4E2A\u552F\u4E00\u4E0D\u91CD\u590D\u7684\u52A8\u6001\u5C5E\u6027\uFF0C\u7136\u540E\uFF0C\u7ED9 CSS \u9009\u62E9 \u5668\u989D\u5916\u6DFB\u52A0\u4E00\u4E2A\u5BF9\u5E94\u7684\u5C5E\u6027\u9009\u62E9\u5668\u6765\u9009\u62E9\u8BE5\u7EC4\u4EF6\u4E2D dom\uFF0C\u8FD9\u79CD\u505A\u6CD5\u4F7F\u5F97\u6837\u5F0F\u79C1\u6709\u5316</li></ol><h2 id="_3-\u4E00\u4E2A\u9875\u9762\u4E0A\u6709\u5927\u91CF\u7684\u56FE\u7247\uFF08\u5927\u578B\u7535\u5546\u7F51\u7AD9\uFF09\uFF0C\u52A0\u8F7D\u5F88\u6162\uFF0C\u4F60\u6709\u54EA\u4E9B-\u65B9\u6CD5\u4F18\u5316\u8FD9\u4E9B\u56FE\u7247\u7684\u52A0\u8F7D\uFF0C\u7ED9\u7528\u6237\u66F4\u597D\u7684\u4F53\u9A8C" tabindex="-1">3. \u4E00\u4E2A\u9875\u9762\u4E0A\u6709\u5927\u91CF\u7684\u56FE\u7247\uFF08\u5927\u578B\u7535\u5546\u7F51\u7AD9\uFF09\uFF0C\u52A0\u8F7D\u5F88\u6162\uFF0C\u4F60\u6709\u54EA\u4E9B \u65B9\u6CD5\u4F18\u5316\u8FD9\u4E9B\u56FE\u7247\u7684\u52A0\u8F7D\uFF0C\u7ED9\u7528\u6237\u66F4\u597D\u7684\u4F53\u9A8C <a class="header-anchor" href="#_3-\u4E00\u4E2A\u9875\u9762\u4E0A\u6709\u5927\u91CF\u7684\u56FE\u7247\uFF08\u5927\u578B\u7535\u5546\u7F51\u7AD9\uFF09\uFF0C\u52A0\u8F7D\u5F88\u6162\uFF0C\u4F60\u6709\u54EA\u4E9B-\u65B9\u6CD5\u4F18\u5316\u8FD9\u4E9B\u56FE\u7247\u7684\u52A0\u8F7D\uFF0C\u7ED9\u7528\u6237\u66F4\u597D\u7684\u4F53\u9A8C" aria-hidden="true">#</a></h2><ol><li>\u56FE\u7247\u61D2\u52A0\u8F7D\uFF0C\u5728\u9875\u9762\u4E0A\u7684\u672A\u53EF\u89C6\u533A\u57DF\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E2A\u6EDA\u52A8\u6761\u4E8B\u4EF6\uFF0C\u5224\u65AD\u56FE\u7247\u4F4D\u7F6E\u4E0E\u6D4F\u89C8\u5668\u9876\u7AEF\u7684\u8DDD \u79BB\u4E0E\u9875\u9762\u7684\u8DDD\u79BB\uFF0C2. \u5982\u679C\u524D\u8005\u5C0F\u4E8E\u540E\u8005\uFF0C\u4F18\u5148\u52A0\u8F7D\u3002</li><li>\u5982\u679C\u4E3A\u5E7B\u706F\u7247\u3001\u76F8\u518C\u7B49\uFF0C\u53EF\u4EE5\u4F7F\u7528\u56FE\u7247\u9884\u52A0\u8F7D\u6280\u672F\uFF0C\u5C06\u5F53\u524D\u5C55\u793A\u56FE\u7247\u7684\u524D\u4E00\u5F20\u548C\u540E\u4E00\u5F20\u4F18\u5148\u4E0B\u8F7D\u3002</li><li>\u5982\u679C\u56FE\u7247\u4E3A css \u56FE\u7247\uFF0C\u53EF\u4EE5\u4F7F\u7528 CSSsprite\uFF0CSVGsprite\uFF0CIconfont\u3001Base64 \u7B49\u6280\u672F\u3002</li><li>\u5982\u679C\u56FE\u7247\u8FC7\u5927\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7279\u6B8A\u7F16\u7801\u7684\u56FE\u7247\uFF0C\u52A0\u8F7D\u65F6\u4F1A\u5148\u52A0\u8F7D\u4E00\u5F20\u538B\u7F29\u7684\u7279\u522B\u5389\u5BB3\u7684\u7F29\u7565\u56FE\uFF0C\u4EE5\u63D0 \u9AD8\u7528\u6237\u4F53\u9A8C\u3002</li><li>\u5982\u679C\u56FE\u7247\u5C55\u793A\u533A\u57DF\u5C0F\u4E8E\u56FE\u7247\u7684\u771F\u5B9E\u5927\u5C0F\uFF0C\u5219\u56E0\u5728\u670D\u52A1\u5668\u7AEF\u6839\u636E\u4E1A\u52A1\u9700\u8981\u5148\u884C\u8FDB\u884C\u56FE\u7247\u538B\u7F29\uFF0C\u56FE\u7247 \u538B\u7F29\u540E\u5927\u5C0F\u4E0E\u5C55\u793A\u4E00\u81F4\u3002</li></ol><h2 id="_4-vuex-\u7684-5-\u4E2A\u6838\u5FC3\u5C5E\u6027\u662F\u4EC0\u4E48-\u8BF4\u4E0B\u5206\u522B\u7684\u4F5C\u7528" tabindex="-1">4. Vuex \u7684 5 \u4E2A\u6838\u5FC3\u5C5E\u6027\u662F\u4EC0\u4E48?\u8BF4\u4E0B\u5206\u522B\u7684\u4F5C\u7528 <a class="header-anchor" href="#_4-vuex-\u7684-5-\u4E2A\u6838\u5FC3\u5C5E\u6027\u662F\u4EC0\u4E48-\u8BF4\u4E0B\u5206\u522B\u7684\u4F5C\u7528" aria-hidden="true">#</a></h2><blockquote><p>\u5206\u522B\u662F State\u3001 Getter\u3001Mutation \u3001Action\u3001 Module</p></blockquote><ol><li>state state \u4E3A\u5355\u4E00\u72B6\u6001\u6811\uFF0C\u5728 state \u4E2D\u9700\u8981\u5B9A\u4E49\u6211\u4EEC\u6240\u9700\u8981\u7BA1\u7406\u7684\u6570\u7EC4\u3001\u5BF9\u8C61\u3001\u5B57\u7B26 \u4E32\u7B49\u7B49\uFF0C\u53EA\u6709\u5728\u8FD9\u91CC\u5B9A\u4E49\u4E86\uFF0C\u5728 Vue.js \u7684\u7EC4\u4EF6\u4E2D\u624D\u80FD\u83B7\u53D6\u4F60\u5B9A\u4E49\u7684\u8FD9\u4E2A\u5BF9\u8C61\u7684\u72B6 \u6001\u3002</li><li>getter getter \u6709\u70B9\u7C7B\u4F3C Vue.js \u7684\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u4ECE store \u7684 state \u4E2D\u6D3E\u751F\u51FA\u4E00\u4E9B \u72B6\u6001\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u9700\u8981\u4F7F\u7528 getter\uFF0C getter \u4F1A\u63A5\u6536 state \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u800C\u4E14 getter \u7684\u8FD4\u56DE\u503C\u4F1A\u6839\u636E\u5B83\u7684\u4F9D\u8D56\u88AB\u7F13\u5B58\u8D77\u6765\uFF0C\u53EA\u6709 getter \u4E2D\u7684\u4F9D\u8D56\u503C\uFF08state \u4E2D\u7684\u67D0\u4E2A\u9700 \u8981\u6D3E\u751F\u72B6\u6001\u7684\u503C\uFF09\u53D1\u751F\u6539\u53D8\u7684\u65F6\u5019\u624D\u4F1A\u88AB\u91CD\u65B0\u8BA1\u7B97\u3002</li><li>mutation \u66F4\u6539 store \u4E2D state \u72B6\u6001\u7684\u552F\u4E00\u65B9\u6CD5\u5C31\u662F\u63D0\u4EA4 mutation\uFF0C\u5C31\u5F88\u7C7B\u4F3C\u4E8B\u4EF6\u3002\u6BCF\u4E2A mutation \u90FD\u6709\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u4E8B\u4EF6\u7C7B\u578B\u548C\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u6211\u4EEC\u9700\u8981\u6539\u53D8 state \u7684\u503C\u5C31\u8981\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u6539\u53D8\u3002\u6211\u4EEC\u8981\u6267\u884C\u8FD9\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u90A3\u4E48\u6211\u4EEC\u9700\u8981\u6267\u884C\u4E00\u4E2A \u76F8\u5E94\u7684\u8C03\u7528\u65B9\u6CD5\uFF1Astore.commit\u3002</li><li>action action \u53EF\u4EE5\u63D0\u4EA4 mutation\uFF0C\u5728 action \u4E2D\u53EF\u4EE5\u6267\u884C store.commit\uFF0C\u800C\u4E14 action \u4E2D\u53EF \u4EE5\u6709\u4EFB\u4F55\u7684\u5F02\u6B65\u64CD\u4F5C\u3002\u5728\u9875\u9762\u4E2D\u5982\u679C\u6211\u4EEC\u8981\u7528\u8FD9\u4E2A action\uFF0C\u5219\u9700\u8981\u6267\u884C store.dispatch</li><li>module module \u5176\u5B9E\u53EA\u662F\u89E3\u51B3\u4E86\u5F53 state \u4E2D\u5F88\u590D\u6742\u81C3\u80BF\u7684\u65F6\u5019\uFF0C module \u53EF\u4EE5\u5C06 store \u5206\u5272\u6210\u6A21\u5757\uFF0C\u6BCF\u4E2A\u6A21\u5757\u4E2D\u62E5\u6709\u81EA\u5DF1\u7684 state\u3001mutation\u3001action \u548C getter</li></ol><h2 id="_5-vue-router-\u600E\u4E48\u914D\u7F6E\u8DEF\u7531-\u8FC7\u7A0B" tabindex="-1">5. vue-router \u600E\u4E48\u914D\u7F6E\u8DEF\u7531(\u8FC7\u7A0B) <a class="header-anchor" href="#_5-vue-router-\u600E\u4E48\u914D\u7F6E\u8DEF\u7531-\u8FC7\u7A0B" aria-hidden="true">#</a></h2><ol><li>\u5F15\u5165 vue-router.js</li><li>\u914D\u7F6E\u8DEF\u7531 path \u548C\u7EC4\u4EF6, \u548C\u751F\u6210\u8DEF\u7531\u5BF9\u8C61</li><li>\u628A\u8DEF\u7531\u5BF9\u8C61\u914D\u7F6E\u5230 new Vue \u4E2D router \u9009\u9879\u4E0B</li><li>\u9875\u9762\u4F7F\u7528<code>&lt;router-view&gt;&lt;/router-view&gt;</code>\u627F\u8F7D\u8DEF\u7531</li><li><code>&lt;router-link to=&quot;\u8981\u8DF3\u8F6C\u7684\u8DEF\u5F84&quot;&gt;&lt;/router-link&gt;</code> \u8BBE\u7F6E\u8DEF\u7531\u5BFC\u822A(\u58F0\u660E\u5F0F\u5BFC\u822A\u65B9\u5F0F/\u7F16\u7A0B\u5F0F\u8DF3\u8F6C)</li></ol>',12),r=[a];function s(d,u,c,n,h,_){return t(),o("div",null,r)}var m=e(i,[["render",s]]);export{v as __pageData,m as default};
