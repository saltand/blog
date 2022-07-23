import{_ as e,o as t,c as r,d as a}from"./app.cf111618.js";const p=JSON.parse('{"title":"2022-07-10","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. $route \u548C $router \u7684\u533A\u522B","slug":"_1-route-\u548C-router-\u7684\u533A\u522B"},{"level":2,"title":"2. vue \u4E2D\u64CD\u4F5C data \u7684\u6570\u7EC4\u65B9\u6CD5\u54EA\u4E9B\u53EF\u4EE5\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0","slug":"_2-vue-\u4E2D\u64CD\u4F5C-data-\u7684\u6570\u7EC4\u65B9\u6CD5\u54EA\u4E9B\u53EF\u4EE5\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0"},{"level":2,"title":"3. \u4EC0\u4E48\u662F vue \u751F\u547D\u5468\u671F\uFF1F","slug":"_3-\u4EC0\u4E48\u662F-vue-\u751F\u547D\u5468\u671F\uFF1F"},{"level":2,"title":"4. Vue \u7EC4\u4EF6\u5982\u4F55\u8FDB\u884C\u4F20\u503C\u7684","slug":"_4-vue-\u7EC4\u4EF6\u5982\u4F55\u8FDB\u884C\u4F20\u503C\u7684"},{"level":2,"title":"5. \u7F16\u7A0B\u5F0F\u5BFC\u822A\u4F7F\u7528\u7684\u65B9\u6CD5\u4EE5\u53CA\u5E38\u7528\u7684\u65B9\u6CD5","slug":"_5-\u7F16\u7A0B\u5F0F\u5BFC\u822A\u4F7F\u7528\u7684\u65B9\u6CD5\u4EE5\u53CA\u5E38\u7528\u7684\u65B9\u6CD5"}],"relativePath":"\u6BCF\u65E5/2022-07-10.md","lastUpdated":null}'),d={name:"\u6BCF\u65E5/2022-07-10.md"},l=a('<h1 id="_2022-07-10" tabindex="-1">2022-07-10 <a class="header-anchor" href="#_2022-07-10" aria-hidden="true">#</a></h1><h2 id="_1-route-\u548C-router-\u7684\u533A\u522B" tabindex="-1">1. $route \u548C $router \u7684\u533A\u522B <a class="header-anchor" href="#_1-route-\u548C-router-\u7684\u533A\u522B" aria-hidden="true">#</a></h2><p>$route \u662F\u8DEF\u7531\u4FE1\u606F\u5BF9\u8C61\uFF0C\u5305\u62EC <code>path\uFF0Chash\uFF0Cquery\uFF0CfullPath\uFF0Cmatched\uFF0Cname</code> \u7B49\u8DEF\u7531\u4FE1\u606F\u53C2\u6570\uFF1B $router \u662F\u8DEF\u7531\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u5305\u62EC\u4E86\u8DEF\u7531\u7684\u8DF3\u8F6C\u65B9\u6CD5\uFF0C\u5B9E\u4F8B\u5BF9\u8C61\u7B49</p><h2 id="_2-vue-\u4E2D\u64CD\u4F5C-data-\u7684\u6570\u7EC4\u65B9\u6CD5\u54EA\u4E9B\u53EF\u4EE5\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0" tabindex="-1">2. vue \u4E2D\u64CD\u4F5C data \u7684\u6570\u7EC4\u65B9\u6CD5\u54EA\u4E9B\u53EF\u4EE5\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0 <a class="header-anchor" href="#_2-vue-\u4E2D\u64CD\u4F5C-data-\u7684\u6570\u7EC4\u65B9\u6CD5\u54EA\u4E9B\u53EF\u4EE5\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0" aria-hidden="true">#</a></h2><ul><li>push()</li><li>pop()</li><li>shift()</li><li>unshift()</li><li>splice()</li><li>sort()</li><li>reverse()</li></ul><h2 id="_3-\u4EC0\u4E48\u662F-vue-\u751F\u547D\u5468\u671F\uFF1F" tabindex="-1">3. \u4EC0\u4E48\u662F vue \u751F\u547D\u5468\u671F\uFF1F <a class="header-anchor" href="#_3-\u4EC0\u4E48\u662F-vue-\u751F\u547D\u5468\u671F\uFF1F" aria-hidden="true">#</a></h2><table><thead><tr><th>\u9636\u6BB5</th><th>\u65B9\u6CD5\u540D</th><th>\u65B9\u6CD5\u540D</th></tr></thead><tbody><tr><td>\u521D\u59CB\u5316</td><td>beforeCreate</td><td>created</td></tr><tr><td>\u6302\u8F7D</td><td>beforeMount</td><td>mounted</td></tr><tr><td>\u66F4\u65B0</td><td>beforeUpdate</td><td>updated</td></tr><tr><td>\u9500\u6BC1</td><td>beforeDestroy</td><td>destroyed</td></tr></tbody></table><ol><li>beforeCreate<br> \u5B9E\u4F8B\u521B\u5EFA\u5B8C\u6BD5\uFF0Cdata \u548C methods \u5C1A\u672A\u88AB\u521D\u59CB\u5316</li><li>created<br> \u6700\u65E9\u80FD\u591F\u8BBF\u95EE Vue \u5B9E\u4F8B\u4E2D\u4FDD\u5B58\u7684\u6570\u636E\u548C\u65B9\u6CD5\u7684\u5730\u65B9</li><li>beforeMount<br> \u8868\u793A Vue \u5DF2\u7ECF\u7F16\u8BD1\u597D\u4E86\u6700\u7EC8\u6A21\u677F\uFF0C\u4F46\u662F\u8FD8\u6CA1\u6709\u5C06\u6700\u7EC8\u6A21\u677F\u6E32\u67D3\u5230\u754C\u9762\u4E0A\u3002</li><li>mounted<br> Vue \u5DF2\u7ECF\u5B8C\u6210\u4E86\u6A21\u677F\u7684\u6E32\u67D3\uFF0C\u8868\u793A\u6211\u4EEC\u5DF2\u7ECF\u53EF\u4EE5\u62FF\u5230\u754C\u9762\u4E0A\u6E32\u67D3\u4E4B\u540E\u7684\u5185\u5BB9\u4E86\u3002</li><li>beforeUpdate<br> \u8868\u793A Vue \u5B9E\u4F8B\u4E2D\u4FDD\u5B58\u7684\u6570\u636E\u88AB\u4FEE\u6539\u4E86\u3002\u6B64\u65F6\u754C\u9762\u8FD8\u672A\u4FEE\u6539</li><li>updated<br> \u6570\u636E\u548C\u754C\u9762\u90FD\u540C\u6B65\u66F4\u65B0\u4E4B\u540E\u5C31\u4F1A\u8C03\u7528 updated <blockquote><p>beforeUpdate \u548C updated \u51FD\u6570\u5728\u7EC4\u5EFA\u521B\u5EFA\u8FC7\u7A0B\u4E2D\u4E0D\u4F1A\u81EA\u52A8\u89E6\u53D1\uFF0C\u53EA\u6709\u5728 DOM \u53D1\u751F\u6539\u53D8\u65F6\u624D\u4F1A\u89E6\u53D1</p></blockquote></li><li>beforeDestroy<br> \u8868\u793A\u5F53\u524D\u7EC4\u4EF6\u5373\u5C06\u88AB\u9500\u6BC1,beforeDestroy \u51FD\u6570\u662F\u6211\u4EEC\u6700\u540E\u80FD\u591F\u8BBF\u95EE\u5230\u7EC4\u4EF6\u6570\u636E\u548C\u65B9\u6CD5\u7684\u51FD\u6570\u3002 <blockquote><p>\u53EA\u8981\u7EC4\u4EF6\u4E0D\u88AB\u9500\u6BC1\uFF0C\u90A3\u4E48 beforeDestroy \u5C31\u4E0D\u4F1A\u8C03\u7528</p><p>beforeDestroy \u9636\u6BB5\u53EF\u4EE5\u89E3\u7ED1\u4E00\u4E9B\u5168\u5C40\u4E8B\u4EF6\uFF0C\u4EE5\u53CA\u79FB\u9664\u5F53\u524D\u7EC4\u4EF6\u5B9A\u65F6\u5668</p></blockquote></li><li>destroyed<br> \u8868\u793A\u5F53\u524D\u7EC4\u4EF6\u5DF2\u7ECF\u88AB\u9500\u6BC1</li></ol><h2 id="_4-vue-\u7EC4\u4EF6\u5982\u4F55\u8FDB\u884C\u4F20\u503C\u7684" tabindex="-1">4. Vue \u7EC4\u4EF6\u5982\u4F55\u8FDB\u884C\u4F20\u503C\u7684 <a class="header-anchor" href="#_4-vue-\u7EC4\u4EF6\u5982\u4F55\u8FDB\u884C\u4F20\u503C\u7684" aria-hidden="true">#</a></h2><ol><li>\u901A\u8FC7\u8DEF\u7531\u5E26\u53C2\u6570\u4F20\u503C</li><li>\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u503C</li><li>\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u503C</li><li>\u7EC4\u4EF6\u4E4B\u95F4\u4F20\u503C</li><li>\u4F7F\u7528 vuex \u72B6\u6001\u7BA1\u7406</li></ol><h2 id="_5-\u7F16\u7A0B\u5F0F\u5BFC\u822A\u4F7F\u7528\u7684\u65B9\u6CD5\u4EE5\u53CA\u5E38\u7528\u7684\u65B9\u6CD5" tabindex="-1">5. \u7F16\u7A0B\u5F0F\u5BFC\u822A\u4F7F\u7528\u7684\u65B9\u6CD5\u4EE5\u53CA\u5E38\u7528\u7684\u65B9\u6CD5 <a class="header-anchor" href="#_5-\u7F16\u7A0B\u5F0F\u5BFC\u822A\u4F7F\u7528\u7684\u65B9\u6CD5\u4EE5\u53CA\u5E38\u7528\u7684\u65B9\u6CD5" aria-hidden="true">#</a></h2><ul><li>\u8DEF\u7531\u8DF3\u8F6C \uFF1A this.$router.push()</li><li>\u200B \u8DEF\u7531\u66FF\u6362 : this.$router.replace()</li><li>\u524D\u8FDB\u540E\u9000\uFF1A this.$router.go()\u200B</li></ul>',12),i=[l];function o(u,h,s,_,n,c){return t(),r("div",null,i)}var f=e(d,[["render",o]]);export{p as __pageData,f as default};
