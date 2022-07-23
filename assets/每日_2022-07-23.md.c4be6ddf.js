import{_ as l,o as e,c as i,d as a}from"./app.cf111618.js";const f=JSON.parse('{"title":"2022-07-23","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. webpack \u6253\u5305\u6D41\u7A0B","slug":"_1-webpack-\u6253\u5305\u6D41\u7A0B"},{"level":2,"title":"2. \u539F\u751F ajax \u600E\u4E48\u53D1\u9001 get \u548C post \u8BF7\u6C42\uFF1F","slug":"_2-\u539F\u751F-ajax-\u600E\u4E48\u53D1\u9001-get-\u548C-post-\u8BF7\u6C42\uFF1F"},{"level":2,"title":"3. mvvm \u548C mvc \u533A\u522B\u662F\u4EC0\u4E48\uFF1F","slug":"_3-mvvm-\u548C-mvc-\u533A\u522B\u662F\u4EC0\u4E48\uFF1F"},{"level":2,"title":"4. \u4EC0\u4E48\u907F\u514D v-if \u548C v-for \u7528\u5728\u4E00\u8D77\u4F7F\u7528\uFF1F","slug":"_4-\u4EC0\u4E48\u907F\u514D-v-if-\u548C-v-for-\u7528\u5728\u4E00\u8D77\u4F7F\u7528\uFF1F"},{"level":2,"title":"5. Vuex \u7684 Mutation \u548C Action \u4E4B\u95F4\u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F","slug":"_5-vuex-\u7684-mutation-\u548C-action-\u4E4B\u95F4\u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F"}],"relativePath":"\u6BCF\u65E5/2022-07-23.md","lastUpdated":null}'),t={name:"\u6BCF\u65E5/2022-07-23.md"},o=a('<h1 id="_2022-07-23" tabindex="-1">2022-07-23 <a class="header-anchor" href="#_2022-07-23" aria-hidden="true">#</a></h1><h2 id="_1-webpack-\u6253\u5305\u6D41\u7A0B" tabindex="-1">1. webpack \u6253\u5305\u6D41\u7A0B <a class="header-anchor" href="#_1-webpack-\u6253\u5305\u6D41\u7A0B" aria-hidden="true">#</a></h2><ol><li>\u8BFB\u53D6\u5165\u53E3\u6587\u4EF6</li><li>\u5206\u6790\u5165\u53E3\u6587\u4EF6\uFF0C\u5F97\u5230\u5176\u6240\u4F9D\u8D56\u7684\u6587\u4EF6\u4FE1\u606F</li><li>\u9012\u5F52\u8BFB\u53D6\u6BCF\u4E2A\u6587\u4EF6\u7684\u4F9D\u8D56\u4FE1\u606F\uFF0C\u751F\u6210 AST \u6811\uFF0C\u5F97\u5230\u5173\u7CFB\u4F9D\u8D56\u56FE</li><li>\u4EE3\u7801\u8F6C\u5316\uFF0C\u751F\u6210 ES5 \u4EE3\u7801</li></ol><h2 id="_2-\u539F\u751F-ajax-\u600E\u4E48\u53D1\u9001-get-\u548C-post-\u8BF7\u6C42\uFF1F" tabindex="-1">2. \u539F\u751F ajax \u600E\u4E48\u53D1\u9001 get \u548C post \u8BF7\u6C42\uFF1F <a class="header-anchor" href="#_2-\u539F\u751F-ajax-\u600E\u4E48\u53D1\u9001-get-\u548C-post-\u8BF7\u6C42\uFF1F" aria-hidden="true">#</a></h2><ol><li>\u521B\u5EFA XMLHttpRequest \u5BF9\u8C61</li><li><code>ajax.open(\u2018\u8BF7\u6C42\u65B9\u5F0F\u2019\uFF0Curl\uFF0Ctrue)</code>\u65B9\u6CD5\u521B\u5EFA\u7F51\u7EDC\u8BF7\u6C42\u5BF9\u8C61\uFF0C\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F true \u65F6\u662F\u5F02\u6B65\u8BF7\u6C42\uFF0Cfalse \u662F\u540C\u6B65\u8BF7\u6C42\uFF0Cpost \u8BF7\u6C42\u9700\u8981\u5728\u53D1\u9001\u8BF7\u6C42\u4E4B\u524D\u8BBE\u7F6E post \u7684\u8BF7\u6C42\u5934\u3002</li><li>ajax.send()\u53D1\u9001\u8BF7\u6C42</li><li>ajax.onreadStateChange==function(){}\u76D1\u542C\u8BF7\u6C42\u72B6\u6001</li></ol><h2 id="_3-mvvm-\u548C-mvc-\u533A\u522B\u662F\u4EC0\u4E48\uFF1F" tabindex="-1">3. mvvm \u548C mvc \u533A\u522B\u662F\u4EC0\u4E48\uFF1F <a class="header-anchor" href="#_3-mvvm-\u548C-mvc-\u533A\u522B\u662F\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h2><ul><li>MVC \u662F Model View Controller \u7684\u7F29\u5199 <ul><li>\u6A21\u578B\u5C42-\u89C6\u56FE\u5C42-\u63A7\u5236\u5668</li></ul></li><li>MVVM \u662F Model-View-ViewModel \u7684\u7B80\u5199, <ul><li>\u6A21\u578B-\u89C6\u56FE-\u89C6\u56FE\u6A21\u578B</li></ul></li><li>\u5728 MVVM \u67B6\u6784\u4E0B,\u89C6\u56FE\u548C\u6A21\u578B\u662F\u4E0D\u80FD\u76F4\u63A5\u901A\u4FE1\u7684,\u5B83\u4EEC\u901A\u8FC7 viewmodel \u6765\u540C\u6B65\u6216\u8005\u53CD\u5E94\u6570\u636E\u53D8\u5316,\u5B9E\u73B0\u4E86\u6570\u636E\u7684\u4E92\u76F8\u7ED1\u5B9A <ul><li>\u573A\u666F:\u9002\u5408\u6570\u636E\u9A71\u52A8,\u6570\u636E\u64CD\u4F5C\u6BD4\u8F83\u591A\u7684\u573A\u666F</li></ul></li><li>\u5728 MVC \u4E2D,Model \u548C View \u5C31\u662F\u76F8\u4E92\u72EC\u7ACB\u7684,View \u53EA\u8D1F\u8D23\u9875\u9762\u7684\u5C55\u793A,Model \u53EA\u662F\u6570\u636E\u5B58\u50A8,\u5C31\u662F\u5C06\u6A21\u578B\u548C\u89C6\u56FE\u4E4B\u95F4\u5B9E\u73B0\u4EE3\u7801\u5206\u79BB,\u677E\u6563\u8026\u5408\u7684\u76EE\u7684 <ul><li>\u573A\u666F: \u4E3B\u8981\u7528\u4E8E\u4E2D\u5927\u578B\u9879\u76EE\u7684\u5206\u5C42\u5F00\u53D1</li></ul></li></ul><h2 id="_4-\u4EC0\u4E48\u907F\u514D-v-if-\u548C-v-for-\u7528\u5728\u4E00\u8D77\u4F7F\u7528\uFF1F" tabindex="-1">4. \u4EC0\u4E48\u907F\u514D v-if \u548C v-for \u7528\u5728\u4E00\u8D77\u4F7F\u7528\uFF1F <a class="header-anchor" href="#_4-\u4EC0\u4E48\u907F\u514D-v-if-\u548C-v-for-\u7528\u5728\u4E00\u8D77\u4F7F\u7528\uFF1F" aria-hidden="true">#</a></h2><p>Vue \u5904\u7406\u6307\u4EE4\u65F6\uFF0Cv-for \u6BD4 v-if \u5177\u6709\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7, \u6BCF\u6B21\u6E32\u67D3\u90FD\u4F1A\u505A v-if \u5224\u65AD, \u4F1A\u9020\u6210\u6027\u80FD\u6D6A\u8D39, \u5982\u679C\u4F60\u6709 5 \u4E2A\u5143\u7D20\u88AB v-for \u5FAA\u73AF, v-if \u4E5F\u4F1A\u5206\u522B\u6267\u884C 5 \u6B21.</p><h2 id="_5-vuex-\u7684-mutation-\u548C-action-\u4E4B\u95F4\u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F" tabindex="-1">5. Vuex \u7684 Mutation \u548C Action \u4E4B\u95F4\u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F <a class="header-anchor" href="#_5-vuex-\u7684-mutation-\u548C-action-\u4E4B\u95F4\u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h2><ol><li>\u6D41\u7A0B\u987A\u5E8F</li></ol><ul><li>\u201C\u76F8\u5E94\u89C6\u56FE\u2014&gt;\u4FEE\u6539 State\u201D\u62C6\u5206\u6210\u4E24\u90E8\u5206: <ul><li>\u89C6\u56FE\u89E6\u53D1 Action\uFF0CAction \u518D\u89E6\u53D1 Mutation\u3002</li></ul></li></ul><ol start="2"><li>\u89D2\u8272\u5B9A\u4F4D</li></ol><ul><li>\u57FA\u4E8E\u6D41\u7A0B\u987A\u5E8F\uFF0C\u4E8C\u8005\u626E\u6F14\u4E0D\u540C\u7684\u89D2\u8272\u3002 <ul><li>Mutation\uFF1A\u4E13\u6CE8\u4E8E\u4FEE\u6539 State\uFF0C\u7406\u8BBA\u4E0A\u662F\u4FEE\u6539 State \u7684\u552F\u4E00\u9014\u5F84\u3002</li><li>Action\uFF1A\u4E1A\u52A1\u4EE3\u7801\u3001\u5F02\u6B65\u8BF7\u6C42\u3002</li></ul></li></ul><ol start="3"><li>\u9650\u5236</li></ol><ul><li>\u89D2\u8272\u4E0D\u540C\uFF0C\u4E8C\u8005\u6709\u4E0D\u540C\u7684\u9650\u5236\u3002 <ul><li>Mutation\uFF1A\u5FC5\u987B\u540C\u6B65\u6267\u884C\u3002</li><li>Action\uFF1A\u53EF\u4EE5\u5F02\u6B65\uFF0C\u4F46\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5C State\u3002</li></ul></li></ul>',16),r=[o];function n(u,d,c,s,_,h){return e(),i("div",null,r)}var p=l(t,[["render",n]]);export{f as __pageData,p as default};
