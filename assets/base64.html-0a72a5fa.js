import{_ as s,M as e,p as t,q as c,N as o,R as n,t as i,a1 as d}from"./framework-c8e009f3.js";const p={},l=n("h1",{id:"base64-编码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#base64-编码","aria-hidden":"true"},"#"),i(" Base64 编码")],-1),u=d(`<p>提供基本的 Base64 转换函数。</p><h2 id="base64-encode-str-encoding-utf-8" tabindex="-1"><a class="header-anchor" href="#base64-encode-str-encoding-utf-8" aria-hidden="true">#</a> $base64.encode(str[, encoding = &#39;utf-8&#39;])</h2><ul><li><code>str</code> {string} 要编码的字符串</li><li><code>encoding</code> {string} 可选，字符编码</li></ul><p>将字符串使用 Base64 编码并返回编码后的字符串。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">log</span><span class="token punctuation">(</span>$base64<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">&quot;autox.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 日志输出 YXV0b3guanM=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="base64-decode-str-encoding-utf-8" tabindex="-1"><a class="header-anchor" href="#base64-decode-str-encoding-utf-8" aria-hidden="true">#</a> $base64.decode(str[, encoding = &#39;utf-8&#39;])</h2><ul><li><code>str</code> {string} 要解码的字符串</li><li><code>encoding</code> {string} 可选，字符编码</li></ul><p>将字符串使用 Base64 解码并返回解码后的字符串。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">log</span><span class="token punctuation">(</span>$base64<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token string">&quot;YXV0b3guanM=&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 日志输出 autox.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function r(g,b){const a=e("Badge");return t(),c("div",null,[l,o(a,{type:"tip",text:"稳定",vertical:"middle"}),u])}const v=s(p,[["render",r],["__file","base64.html.vue"]]);export{v as default};