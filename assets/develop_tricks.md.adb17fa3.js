import{_ as s,c as n,o as a,e as l}from"./app.e6ae406b.js";const C=JSON.parse('{"title":"开发技巧","description":"","frontmatter":{},"headers":[{"level":2,"title":"发送复杂消息 (图片、艾特、QQ 表情、语音、短视频等)","slug":"发送复杂消息-图片、艾特、qq-表情、语音、短视频等","link":"#发送复杂消息-图片、艾特、qq-表情、语音、短视频等","children":[]},{"level":2,"title":"请求接口数据","slug":"请求接口数据","link":"#请求接口数据","children":[]},{"level":2,"title":"定时任务","slug":"定时任务","link":"#定时任务","children":[]},{"level":2,"title":"随机数或随机项","slug":"随机数或随机项","link":"#随机数或随机项","children":[]},{"level":2,"title":"支持并处理频道消息","slug":"支持并处理频道消息","link":"#支持并处理频道消息","children":[]}],"relativePath":"develop/tricks.md","lastUpdated":null}'),p={name:"develop/tricks.md"},o=l(`<h1 id="dev-tricks" tabindex="-1">开发技巧 <a class="header-anchor" href="#dev-tricks" aria-hidden="true">#</a></h1><blockquote><p>逐步完善中, 可先参考 <a href="/api/plugin.html"><code>KiviPlugin API</code></a></p></blockquote><h2 id="发送复杂消息-图片、艾特、qq-表情、语音、短视频等" tabindex="-1">发送复杂消息 (图片、艾特、QQ 表情、语音、短视频等) <a class="header-anchor" href="#发送复杂消息-图片、艾特、qq-表情、语音、短视频等" aria-hidden="true">#</a></h2><p>你可以使用 <a href="https://oicqjs.github.io/oicq/modules.html#segment" target="_blank" rel="noreferrer">segment</a> 进行复杂消息的构造。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">segment</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;@kivibot/core&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 艾特消息</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">at</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">segment</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">at</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">114514</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 图片消息</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">img</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">segment</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">image</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;https://beta.kivibot.com/dimo.png&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// QQ 表情消息, 如果不知道表情 id, 可以在 kivi.json 里配置 message_mode 为 detail</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 重开框架后，把表情发给 Bot, 就可以在 log 里看到表情 id</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">face</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">segment</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">face</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">66</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 语音消息</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">record</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">segment</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">record</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;https://xxx.xxx/xxx.mp3&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre></div><p>请参考 <code>ociq</code> 文档的 <a href="https://oicqjs.github.io/oicq/modules.html#segment" target="_blank" rel="noreferrer">segment</a> API 查看所有消息类型和参数。</p><h2 id="请求接口数据" tabindex="-1">请求接口数据 <a class="header-anchor" href="#请求接口数据" aria-hidden="true">#</a></h2><p>可以使用框架内置的 <code>axios</code> 或者简单封装过的 <code>http</code> 发起网络请求。</p><blockquote><p>你可以参考 <a href="/api/utils.html#axios-http">Utils API</a> 了解更多, 也可以前往 <a href="https://github.com/KiviBotLab/KiviBot/blob/main/src/utils/request.ts" target="_blank" rel="noreferrer">GitHub</a> 查看 http 的简单封装源码。当然你可以自己安装其他熟悉的请求库。</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">KiviPlugin</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">http</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;@kivibot/core&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">KiviPlugin</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;一言&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;1.0.0&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onMounted</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">bot</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">admins</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onMessage</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">event</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">raw_message</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">event</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">raw_message</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;一言&#39;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">http</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;https://v1.hitokoto.cn&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">event</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">reply</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">hitokoto</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">plugin</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span></code></pre></div><h2 id="定时任务" tabindex="-1">定时任务 <a class="header-anchor" href="#定时任务" aria-hidden="true">#</a></h2><p>你可以使用 <a href="/api/plugin.html#plugin-cron"><code>plugin.cron()</code></a> 处理定时任务, 内部使用 <a href="https://github.com/node-cron/node-cron" target="_blank" rel="noreferrer">node-cron</a> 实现。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onMounted</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">bot</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">admins</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 每 3 秒钟触发</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">task</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">cron</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;*/3 * * * * *&#39;</span><span style="color:#ABB2BF;">, () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">bot</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">pickFriend</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">mainAdmin</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">sendMsg</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;cron trigger!&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// task.stop()</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre></div><h2 id="随机数或随机项" tabindex="-1">随机数或随机项 <a class="header-anchor" href="#随机数或随机项" aria-hidden="true">#</a></h2><p>可以使用框架内置的 <code>randomInt</code> 和 <code>randomItem</code> 减少重复代码。</p><blockquote><p>你可以参考 <a href="/api/utils.html#randomint">Utils API</a> 了解更多。</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">KiviPlugin</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">segment</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">randomItem</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">randomInt</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;@kivibot/core&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">KiviPlugin</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;骰子&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;1.0.0&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">6</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onMounted</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">bot</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">admins</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onMessage</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">event</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">raw_message</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">event</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">raw_message</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;扔骰子&#39;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 或使用 const n = randomInt(1, 6)</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">n</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">randomItem</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">nums</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">msg</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">segment</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">dice</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">event</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">reply</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">plugin</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span></code></pre></div><h2 id="支持并处理频道消息" tabindex="-1">支持并处理频道消息 <a class="header-anchor" href="#支持并处理频道消息" aria-hidden="true">#</a></h2><p>你可以使用 <a href="https://github.com/takayama-lily/oicq-guild" target="_blank" rel="noreferrer"><code>oicq-guild</code></a> 插件，bind Client 得到频道实例后，进行后续事件监听、消息处理，详情请参考 <code>oicq-guild</code> 说明。</p><p>首先安装 <code>oicq-guild</code>。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">npm </span><span style="color:#98C379;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">oicq-guild</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--save</span></span>
<span class="line"></span></code></pre></div><p>然后在插件层面引入并 bind，根据需求监听处理相关事件。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">KiviPlugin</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;@kivibot/core&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">GuildApp</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;oicq-guild&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onMounted</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">bot</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">admins</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 插件 mount 后，绑定 oicq Client 获取频道实例</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">GuildApp</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">bind</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">bot</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 通过频道实例监听并处理相关事件，详情参考 oicq-guild 说明</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 频道实例初始化完成</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">on</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;ready&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;My guild list:&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">guilds</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 监听处理频道消息</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">on</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;message&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">e</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">raw_message</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;hello&#39;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">reply</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">\`Hello, </span><span style="color:#C678DD;">\${</span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">sender</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">nickname</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">!\`</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">plugin</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span></code></pre></div>`,23),e=[o];function B(t,c,r,y,i,F){return a(),n("div",null,e)}const d=s(p,[["render",B]]);export{C as __pageData,d as default};
