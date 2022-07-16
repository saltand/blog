import{_ as e,c as t,o as l,a as i}from"./app.97fcb142.js";const f=JSON.parse('{"title":"2022-07-15","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. Vue \u4E2D\u7EC4\u4EF6\u548C\u63D2\u4EF6\u7684\u533A\u522B","slug":"_1-vue-\u4E2D\u7EC4\u4EF6\u548C\u63D2\u4EF6\u7684\u533A\u522B"},{"level":2,"title":"2. Vue \u7684\u751F\u547D\u5468\u671F\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF1F \u4E00\u822C\u5728\u54EA\u4E00\u6B65\u53D1\u5F02\u6B65\u8BF7\u6C42\uFF1F\u4E3A\u4EC0\u4E48\uFF1F","slug":"_2-vue-\u7684\u751F\u547D\u5468\u671F\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF1F-\u4E00\u822C\u5728\u54EA\u4E00\u6B65\u53D1\u5F02\u6B65\u8BF7\u6C42\uFF1F\u4E3A\u4EC0\u4E48\uFF1F"},{"level":2,"title":"3. Vue \u7684\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u6267\u884C\u987A\u5E8F","slug":"_3-vue-\u7684\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u6267\u884C\u987A\u5E8F"},{"level":2,"title":"4. \u4EC0\u4E48\u662F Vue SSR\uFF1F\u4F18\u7F3A\u70B9","slug":"_4-\u4EC0\u4E48\u662F-vue-ssr\uFF1F\u4F18\u7F3A\u70B9"},{"level":2,"title":"5. Vue \u5E38\u89C1\u7684\u4FEE\u9970\u7B26\u6709\u54EA\u4E9B","slug":"_5-vue-\u5E38\u89C1\u7684\u4FEE\u9970\u7B26\u6709\u54EA\u4E9B"}],"relativePath":"\u6BCF\u65E5/2022-07-15.md","lastUpdated":null}'),a={name:"\u6BCF\u65E5/2022-07-15.md"},d=i('<h1 id="_2022-07-15" tabindex="-1">2022-07-15 <a class="header-anchor" href="#_2022-07-15" aria-hidden="true">#</a></h1><h2 id="_1-vue-\u4E2D\u7EC4\u4EF6\u548C\u63D2\u4EF6\u7684\u533A\u522B" tabindex="-1">1. Vue \u4E2D\u7EC4\u4EF6\u548C\u63D2\u4EF6\u7684\u533A\u522B <a class="header-anchor" href="#_1-vue-\u4E2D\u7EC4\u4EF6\u548C\u63D2\u4EF6\u7684\u533A\u522B" aria-hidden="true">#</a></h2><ul><li>Vue.use()\u662F\u5168\u5C40\u6CE8\u518C\u63D2\u4EF6</li><li>Vue.component()\u662F\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6</li><li>Vue \u7EC4\u4EF6\uFF08component\uFF09\u7528\u6765\u6784\u6210\u4F60\u7684 App \u7684\u4E1A\u52A1\u6A21\u5757\uFF0C\u5B83\u7684\u76EE\u6807\u662F App.vue\u3002</li><li>Vue \u63D2\u4EF6(plugin) \u7528\u6765\u589E\u5F3A\u4F60\u7684\u6280\u672F\u6808\u7684\u529F\u80FD\u6A21\u5757\uFF0C \u5B83\u7684\u76EE\u6807\u662F Vue \u672C\u8EAB\u3002\uFF08\u63D2\u4EF6\u662F\u5BF9 Vue \u7684\u529F\u80FD\u7684\u589E\u5F3A\u548C\u8865\u5145\uFF09</li></ul><h2 id="_2-vue-\u7684\u751F\u547D\u5468\u671F\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF1F-\u4E00\u822C\u5728\u54EA\u4E00\u6B65\u53D1\u5F02\u6B65\u8BF7\u6C42\uFF1F\u4E3A\u4EC0\u4E48\uFF1F" tabindex="-1">2. Vue \u7684\u751F\u547D\u5468\u671F\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF1F \u4E00\u822C\u5728\u54EA\u4E00\u6B65\u53D1\u5F02\u6B65\u8BF7\u6C42\uFF1F\u4E3A\u4EC0\u4E48\uFF1F <a class="header-anchor" href="#_2-vue-\u7684\u751F\u547D\u5468\u671F\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF1F-\u4E00\u822C\u5728\u54EA\u4E00\u6B65\u53D1\u5F02\u6B65\u8BF7\u6C42\uFF1F\u4E3A\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h2><ul><li>\u521D\u59CB\u5316\uFF1AbeforeCreate\uFF0Ccreated</li><li>\u6302\u8F7D\uFF1AbeforeMount\uFF0Cmounted</li><li>\u66F4\u65B0\uFF1AbeforeUpdate\uFF0Cupdated</li><li>\u9500\u6BC1\uFF1AbeforeDestroy\uFF0Cdestroyed</li><li>\u901A\u5E38\u6765\u8BB2\uFF0C\u80FD\u591F\u5728\uFF0Ccreated\uFF0Cmounted \u4E2D\u5747\u53EF\u4EE5\u53D1\u9001\u6570\u636E\u8BF7\u6C42\uFF0C\u53EF\u662F\uFF0C\u5927\u90E8\u5206\u65F6\u5019\uFF0C\u4F1A\u5728 created \u53D1\u9001\u8BF7\u6C42\u3002\u5728 created \u94A9\u5B50\u51FD\u6570\u4E2D\u8C03\u7528\u5F02\u6B65\u8BF7 vue \u6709\u4E24\u4E2A\u4F18\u52BF\uFF1A <ol><li>\u80FD\u66F4\u5FEB\u83B7\u53D6\u5230\u670D\u52A1\u7AEF\u6570\u636E\uFF0C\u51CF\u5C0F\u9875\u9762 loading \u65F6\u95F4\uFF1B</li><li>\u653E\u5728 created \u4E2D\u6709\u52A9\u4E8E\u4E00\u81F4\u6027\uFF0C\u7531\u4E8E ssr \u4E0D\u652F\u6301 beforeMount \u3001mounted \u94A9\u5B50\u51FD\u6570\u3002</li></ol></li></ul><h2 id="_3-vue-\u7684\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u6267\u884C\u987A\u5E8F" tabindex="-1">3. Vue \u7684\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u6267\u884C\u987A\u5E8F <a class="header-anchor" href="#_3-vue-\u7684\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a></h2><ol><li>\u9996\u5148\u662F\u6570\u636E\u52A0\u8F7D\u6E32\u67D3\u5230\u9875\u9762\uFF0C\u5305\u62EC\u521D\u59CB\u5316\u9636\u6BB5\u548C\u6302\u8F7D\u9636\u6BB5 Vue \u5B9E\u4F8B\u5316\uFF08new Vue()\uFF09-&gt; \u7236\u7EC4\u4EF6 beforeCreate -&gt; \u7236\u7EC4\u4EF6 created -&gt; \u7236\u7EC4\u4EF6 beforeMount -&gt; \u5B50\u7EC4\u4EF6 beforeCreate -&gt; \u5B50\u7EC4\u4EF6 created -&gt; \u5B50\u7EC4\u4EF6 beforeMount -&gt; \u771F\u5B9E DOM \u6302\u8F7D\u5B8C\u6BD5 -&gt; \u5B50\u7EC4\u4EF6 mounted -&gt; \u7236\u7EC4\u4EF6 mounted</li><li>\u5176\u6B21\u5F53 data \u91CC\u7684\u6570\u636E\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u8FDB\u5165\u66F4\u65B0\u9636\u6BB5 \u7236\u7EC4\u4EF6 beforeUpdate -&gt; \u5B50\u7EC4\u4EF6 beforeUpdate -&gt; \u5B50\u7EC4\u4EF6 updated -&gt; \u7236\u7EC4\u4EF6 updated -&gt; \u83B7\u53D6\u66F4\u65B0\u540E\u7684\u771F\u5B9E DOM</li><li>\u6700\u540E\u5F53$destroy()\u88AB\u8C03\u7528\u8FDB\u5165\u9500\u6BC1\u9636\u6BB5 \u7236\u7EC4\u4EF6 beforeDestroy -&gt; \u5B50\u7EC4\u4EF6 beforeDestroy -&gt; \u5B9E\u4F8B\u9500\u6BC1\u540E -&gt; \u5B50\u7EC4\u4EF6 destroyed -&gt; \u7236\u7EC4\u4EF6 destroyed</li></ol><h2 id="_4-\u4EC0\u4E48\u662F-vue-ssr\uFF1F\u4F18\u7F3A\u70B9" tabindex="-1">4. \u4EC0\u4E48\u662F Vue SSR\uFF1F\u4F18\u7F3A\u70B9 <a class="header-anchor" href="#_4-\u4EC0\u4E48\u662F-vue-ssr\uFF1F\u4F18\u7F3A\u70B9" aria-hidden="true">#</a></h2><ul><li>SSR\uFF1A\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u7528\u6237\u4F7F\u7528\u7684\u6D4F\u89C8\u5668\u6D4F\u89C8\u7684\u90FD\u662F\u4E00\u4E9B\u6CA1\u6709\u590D\u6742\u903B\u8F91\u7684\u3001\u7B80\u5355\u7684\u9875\u9762\uFF0C\u8FD9\u4E9B\u9875\u9762\u90FD\u662F\u5728\u540E\u7AEF\u5C06 html \u62FC\u63A5\u597D\u7684\uFF0C\u7136\u540E\u8FD4\u56DE\u7ED9\u524D\u7AEF\u5B8C\u6574\u7684 html \u6587\u4EF6\uFF0C\u6D4F\u89C8\u5668\u62FF\u5230\u8FD9\u4E2A html \u6587\u4EF6\u4E4B\u540E\u5C31\u53EF\u4EE5\u76F4\u63A5\u89E3\u6790\u5C55\u793A\u4E86\uFF0C\u8FD9\u4E5F\u5C31\u662F\u6240\u8C13\u7684\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\u3002</li><li>\u4F18\u52BF <ul><li>\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\u7684\u4F18\u52BF\u5C31\u662F\u5BB9\u6613 SEO\uFF0C\u9996\u5C4F\u52A0\u8F7D\u5FEB\uFF0C\u56E0\u4E3A\u5BA2\u6237\u7AEF\u63A5\u6536\u5230\u7684\u662F\u5B8C\u6574\u7684 HTML \u9875\u9762\u3002</li></ul></li><li>\u5C40\u9650\u6027 <ul><li>\u6E32\u67D3\u8FC7\u7A0B\u7531\u540E\u7AEF\u5B8C\u6210\uFF0C\u4F1A\u9020\u6210\u670D\u52A1\u5668\u538B\u529B\u8F83\u5927\u3001\u5F00\u53D1\u73AF\u5883\u53D7\u9650\uFF0C\u670D\u52A1\u7AEF\u6E32\u67D3\u4E2D\uFF0C\u53EA\u4F1A\u6267\u884C\u5230 componentDidMount \u4E4B\u524D\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u4E0D\u5229\u4E8E\u524D\u540E\u7AEF\u5206\u79BB\uFF0C\u5F00\u53D1\u6548\u7387\u4F4E\u3002</li></ul></li></ul><h2 id="_5-vue-\u5E38\u89C1\u7684\u4FEE\u9970\u7B26\u6709\u54EA\u4E9B" tabindex="-1">5. Vue \u5E38\u89C1\u7684\u4FEE\u9970\u7B26\u6709\u54EA\u4E9B <a class="header-anchor" href="#_5-vue-\u5E38\u89C1\u7684\u4FEE\u9970\u7B26\u6709\u54EA\u4E9B" aria-hidden="true">#</a></h2><ul><li><code>.stop</code>\uFF1A\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1</li><li><code>.native</code>\uFF1A\u7ED1\u5B9A\u539F\u751F\u4E8B\u4EF6</li><li><code>.once</code>\uFF1A\u4E8B\u4EF6\u53EA\u6267\u884C\u4E00\u6B21</li><li><code>.self</code> \uFF1A\u5C06\u4E8B\u4EF6\u7ED1\u5B9A\u5728\u81EA\u8EAB\u8EAB\u4E0A\uFF0C\u76F8\u5F53\u4E8E\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1</li><li><code>.prevent</code>\uFF1A\u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6</li><li><code>.caption</code>\uFF1A\u7528\u4E8E\u4E8B\u4EF6\u6355\u83B7</li><li><code>.keyCode</code>\uFF1A\u76D1\u542C\u7279\u5B9A\u952E\u76D8\u6309\u4E0B</li><li><code>.right</code>\uFF1A\u53F3\u952E</li></ul>',11),o=[d];function r(u,n,c,s,h,_){return l(),t("div",null,o)}var v=e(a,[["render",r]]);export{f as __pageData,v as default};
