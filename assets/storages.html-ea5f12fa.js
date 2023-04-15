import{_ as s,M as n,p as t,q as o,R as a,t as r,N as c,a1 as p}from"./framework-c8e009f3.js";const i={},l={id:"storages",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#storages","aria-hidden":"true"},"#",-1),u=p(`<p>storages 模块提供了保存简单数据、用户配置等的支持。保存的数据除非应用被卸载或者被主动删除，否则会一直保留。</p><p>storages 支持<code>number</code>, <code>boolean</code>, <code>string</code>等数据类型以及把<code>Object</code>, <code>Array</code>用<code>JSON.stringify</code>序列化存取。</p><p>storages 保存的数据在脚本之间是共享的，任何脚本只要知道 storage 名称便可以获取到相应的数据，因此它不能用于敏感数据的储存。 storages 无法像 Web 开发中 LocalStorage 一样提供根据域名独立的存储，因为脚本的路径随时可能改变。</p><h2 id="storages-create-name" tabindex="-1"><a class="header-anchor" href="#storages-create-name" aria-hidden="true">#</a> storages.create(name)</h2><ul><li><code>name</code> {string} 本地存储名称</li></ul><p>创建一个本地存储并返回一个<a href="#storage"><code>Storage</code></a>对象。不同名称的本地存储的数据是隔开的，而相同名称的本地存储的数据是共享的。</p><p>例如在一个脚本中，创建名称为 ABC 的存储并存入 a=123:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> storage <span class="token operator">=</span> storages<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;ABC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
storage<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>而在另一个脚本中是可以获取到 ABC 以及 a 的值的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> storage <span class="token operator">=</span> storages<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;ABC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span> <span class="token operator">+</span> storage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，本地存储的名称比较重要，尽量使用含有域名、作者邮箱等唯一信息的名称来避免冲突，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> storage <span class="token operator">=</span> storages<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;2732014414@qq.com:ABC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="storages-remove-name" tabindex="-1"><a class="header-anchor" href="#storages-remove-name" aria-hidden="true">#</a> storages.remove(name)</h2><ul><li><code>name</code> {string} 本地存储名称</li></ul><p>删除一个本地存储以及他的全部数据。如果该存储不存在，返回 false；否则返回 true。</p><h1 id="storage" tabindex="-1"><a class="header-anchor" href="#storage" aria-hidden="true">#</a> Storage</h1><h2 id="storage-get-key-defaultvalue" tabindex="-1"><a class="header-anchor" href="#storage-get-key-defaultvalue" aria-hidden="true">#</a> Storage.get(key[, defaultValue])</h2><ul><li><code>key</code> {string} 键值</li><li><code>defaultValue</code> {any} 可选，默认值</li></ul><p>从本地存储中取出键值为 key 的数据并返回。</p><p>如果该存储中不包含该数据，这时若指定了默认值参数则返回默认值，否则返回 undefined。</p><p>返回的数据可能是任意数据类型，这取决于使用<code>Storage.put</code>保存该键值的数据时的数据类型。</p><h2 id="storage-put-key-value" tabindex="-1"><a class="header-anchor" href="#storage-put-key-value" aria-hidden="true">#</a> Storage.put(key, value)</h2><ul><li><code>key</code> {string} 键值</li><li><code>value</code> {any} 值</li></ul><p>把值 value 保存到本地存储中。value 可以是 undefined 以外的任意数据类型。如果 value 为 undefined 则抛出 TypeError。</p><p>存储的过程实际上是使用 JSON.stringify 把 value 转换为字符串再保存，因此 value 必须是可 JSON 化的才能被接受。</p><h2 id="storage-remove-key" tabindex="-1"><a class="header-anchor" href="#storage-remove-key" aria-hidden="true">#</a> Storage.remove(key)</h2><ul><li><code>key</code> {string} 键值</li></ul><p>移除键值为 key 的数据。不返回任何值。</p><h2 id="storage-contains-key" tabindex="-1"><a class="header-anchor" href="#storage-contains-key" aria-hidden="true">#</a> Storage.contains(key)</h2><ul><li><code>key</code> {string} 键值</li></ul><p>返回该本地存储是否包含键值为 key 的数据。是则返回 true，否则返回 false。</p><h2 id="storage-clear" tabindex="-1"><a class="header-anchor" href="#storage-clear" aria-hidden="true">#</a> Storage.clear()</h2><p>移除该本地存储的所有数据。不返回任何值。</p>`,33);function g(k,h){const e=n("Badge");return t(),o("div",null,[a("h1",l,[d,r(" Storages "),c(e,{type:"tip",text:"稳定",vertical:"middle"})]),u])}const m=s(i,[["render",g],["__file","storages.html.vue"]]);export{m as default};
