import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const p={},e=t(`<h1 id="压缩与解压" tabindex="-1"><a class="header-anchor" href="#压缩与解压" aria-hidden="true">#</a> 压缩与解压</h1><h2 id="压缩" tabindex="-1"><a class="header-anchor" href="#压缩" aria-hidden="true">#</a> 压缩</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//压缩文件路径(必须是完整路径)</span>
<span class="token keyword">var</span> filePath <span class="token operator">=</span> <span class="token string">&quot;/sdcard/脚本.7z&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//目录路径(必须是完整路径)</span>
<span class="token keyword">var</span> dirPath <span class="token operator">=</span> <span class="token string">&quot;/sdcard/脚本&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//压缩类型</span>
<span class="token comment">//支持的压缩类型包括:</span>
<span class="token comment">//  zip 7z bz2 bzip2 tbz2 tbz gz gzip tgz tar wim swm xz txz。</span>
<span class="token keyword">var</span> type <span class="token operator">=</span> <span class="token string">&quot;7z&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//压缩密码</span>
<span class="token keyword">var</span> password <span class="token operator">=</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//7z加密压缩(若文件已存在则跳过)</span>
<span class="token comment">//zips.A(type, filePath, dirPath, password)</span>

<span class="token comment">//压缩</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>zips<span class="token punctuation">.</span><span class="token constant">A</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> filePath<span class="token punctuation">,</span> dirPath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
    <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token string">&quot;压缩成功！文件已保存为： &quot;</span> <span class="token operator">+</span> filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
    <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token string">&quot;压缩结束，存在非致命错误（例如某些文件正在被使用，没有被压缩）&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
    <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token string">&quot;致命错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span>
    <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token string">&quot;命令行错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">8</span><span class="token operator">:</span>
    <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token string">&quot;没有足够内存&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">255</span><span class="token operator">:</span>
    <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token string">&quot;用户中止操作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token string">&quot;未知错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压" tabindex="-1"><a class="header-anchor" href="#解压" aria-hidden="true">#</a> 解压</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//压缩文件路径(必须是完整路径)</span>
<span class="token keyword">var</span> filePath <span class="token operator">=</span> files<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&quot;./bonus.rar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//目录路径(必须是完整路径)</span>
<span class="token keyword">var</span> dirPath <span class="token operator">=</span> <span class="token string">&quot;/sdcard/脚本&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//压缩密码</span>
<span class="token keyword">var</span> password <span class="token operator">=</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//支持的解压缩类型包括：</span>
<span class="token comment">// zip、7z、bz2、bzip2、tbz2、tbz、gz、gzip、tgz、tar、</span>
<span class="token comment">// wim、swm、xz、txz以及rar、chm、iso、msi等众多格式。</span>

<span class="token comment">//解压无加密的压缩包(若文件已存在则跳过)</span>
<span class="token comment">//zips.X(filePath, dirPath)</span>

<span class="token comment">//解压加密的压缩包(若文件已存在则跳过)</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>zips<span class="token punctuation">.</span><span class="token constant">X</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> dirPath<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
    <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token string">&quot;解压缩成功！请到 &quot;</span> <span class="token operator">+</span> dirPath <span class="token operator">+</span> <span class="token string">&quot; 目录下查看。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
    <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token string">&quot;压缩结束，存在非致命错误（例如某些文件正在被使用，没有被压缩）&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
    <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token string">&quot;致命错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span>
    <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token string">&quot;命令行错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">8</span><span class="token operator">:</span>
    <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token string">&quot;没有足够内存&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">255</span><span class="token operator">:</span>
    <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token string">&quot;用户中止操作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token string">&quot;未知错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","zips.html.vue"]]);export{r as default};
