import{_ as a,c as e,o as r,N as l}from"./chunks/framework.64b480aa.js";const g=JSON.parse('{"title":"提问的智慧","description":"","frontmatter":{},"headers":[],"relativePath":"the-art-of-asking-questions/前言.md","lastUpdated":null}'),i={name:"the-art-of-asking-questions/前言.md"},o=l('<h1 id="提问的智慧" tabindex="-1">提问的智慧 <a class="header-anchor" href="#提问的智慧" aria-label="Permalink to &quot;提问的智慧&quot;">​</a></h1><p><a href="https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/pulls" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome"></a></p><p><strong>How To Ask Questions The Smart Way</strong></p><p>Copyright © 2001,2006,2014 Eric S. Raymond, Rick Moen</p><p>本指南英文版版权为 Eric S. Raymond, Rick Moen 所有。</p><p>原文网址：<a href="http://www.catb.org/~esr/faqs/smart-questions.html" target="_blank" rel="noreferrer">http://www.catb.org/~esr/faqs/smart-questions.html</a></p><p>Copyleft 2001 by D.H.Grand(nOBODY/Ginux), 2010 by Gasolin, 2015 by Ryan Wu</p><p>本中文指南是基于原文 3.10 版以及 2010 年由 <a href="https://github.com/gasolin" target="_blank" rel="noreferrer">Gasolin</a> 所翻译版本的最新翻译；</p><p>协助指出翻译问题，<strong>请<a href="https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/issues/new" target="_blank" rel="noreferrer">发 issue</a>，或直接<a href="https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/compare" target="_blank" rel="noreferrer">发 pull request</a> 给我。</strong></p><p>本文另有<a href="./README.html">繁體中文版</a>。</p><h2 id="原文版本历史" tabindex="-1"><a href="./history.html">原文版本历史</a> <a class="header-anchor" href="#原文版本历史" aria-label="Permalink to &quot;[原文版本历史](history.md)&quot;">​</a></h2><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="#声明">声明</a></li><li><a href="#简介">简介</a></li><li><a href="#在提问之前">在提问之前</a></li><li><a href="#当你提问时">当你提问时</a><ul><li><a href="#慎选提问的论坛">慎选提问的论坛</a></li><li><a href="#stack-overflow">Stack Overflow</a></li><li><a href="#网站和-irc-论坛">网站和 IRC 论坛</a></li><li><a href="#第二步使用项目邮件列表">第二步，使用项目邮件列表</a></li><li><a href="#使用有意义且描述明确的标题">使用有意义且描述明确的标题</a></li><li><a href="#使问题容易回复">使问题容易回复</a></li><li><a href="#使用清晰、正确、精准且合乎语法的语句">使用清晰、正确、精准且合乎语法的语句</a></li><li><a href="#使用易于读取且标准的文件格式发送问题">使用易于读取且标准的文件格式发送问题</a></li><li><a href="#精确地描述问题并言之有物">精确地描述问题并言之有物</a></li><li><a href="#话不在多而在精">话不在多而在精</a></li><li><a href="#别动辄声称找到-bug">别动辄声称找到 Bug</a></li><li><a href="#低声下气不能代替你的功课">低声下气不能代替你的功课</a></li><li><a href="#描述问题症状而非你的猜测">描述问题症状而非你的猜测</a></li><li><a href="#按发生时间先后列出问题症状">按发生时间先后列出问题症状</a></li><li><a href="#描述目标而不是过程">描述目标而不是过程</a></li><li><a href="#别要求使用私人电邮回复">别要求使用私人电邮回复</a></li><li><a href="#清楚明确的表达你的问题以及需求">清楚明确的表达你的问题以及需求</a></li><li><a href="#询问有关代码的问题时">询问有关代码的问题时</a></li><li><a href="#别把自己家庭作业的问题贴上来">别把自己家庭作业的问题贴上来</a></li><li><a href="#去掉无意义的提问句">去掉无意义的提问句</a></li><li><a href="#即使你很急也不要在标题写紧急">即使你很急也不要在标题写<code>紧急</code></a></li><li><a href="#礼多人不怪而且有时还很有帮助">礼多人不怪，而且有时还很有帮助</a></li><li><a href="#问题解决后加个简短的补充说明">问题解决后，加个简短的补充说明</a></li></ul></li><li><a href="#如何解读答案">如何解读答案</a><ul><li><a href="#rtfm-和-stfw如何知道你已完全搞砸了">RTFM 和 STFW：如何知道你已完全搞砸了</a></li><li><a href="#如果还是搞不懂">如果还是搞不懂</a></li><li><a href="#处理无礼的回应">处理无礼的回应</a></li></ul></li><li><a href="#如何避免扮演失败者">如何避免扮演失败者</a></li><li><a href="#不该问的问题">不该问的问题</a></li><li><a href="#好问题与蠢问题">好问题与蠢问题</a></li><li><a href="#如果得不到回答">如果得不到回答</a></li><li><a href="#如何更好地回答问题">如何更好地回答问题</a></li><li><a href="#相关资源">相关资源</a></li><li><a href="#鸣谢">鸣谢</a></li></ul><h2 id="声明" tabindex="-1">声明 <a class="header-anchor" href="#声明" aria-label="Permalink to &quot;声明&quot;">​</a></h2><p>许多项目在他们网站的帮助文档中链接了本指南。这很好，这正是我们想要的用途。但如果你是该项目管理员并试图创建指向本指南的超链接，请在超链接附近的显著位置注明：</p><p><strong>本指南不提供此项目的实际支持服务！</strong></p><p>我们已经深刻领教到缺少上述声明所带来的痛苦：我们将不停地被那些认为发布这本指南就意味着有责任解决世上所有技术问题的傻瓜苦苦纠缠。</p><p>如果你因寻求某些帮助而阅读本指南，并在离开时还觉得可以从本文作者这里得到直接帮助，那你就是我们之前说的那些傻瓜之一。别问我们问题，我们只会忽略你。我们在这本指南中想教你如何从那些真正懂得你所遇到的软件或硬件问题的人处取得协助，而 99% 的情况下那不会是我们。除非你确定本指南的作者之一刚好是你所遇到的问题领域的专家，否则请不要打扰我们，这样大家都会开心一点。</p><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>在<a href="http://www.catb.org/~esr/faqs/hacker-howto.html" target="_blank" rel="noreferrer">黑客</a>的世界里，当你拋出一个技术问题时，最终是否能得到有用的回答，往往取决于你所提问和追问的方式。本指南将教你如何正确地提问以获得你满意的答案。</p><p>现在开源（Open Source）软件已经相当盛行，您通常可以从其他更有经验的用户那里获得与黑客一样好的答案，这是件<strong>好事</strong>；和黑客相比，用户们往往对那些新手常遇到的问题更宽容一些。尽管如此，以我们在此推荐的方式对待这些有经验的用户通常也是从他们那里获得有用答案的最有效方式。</p><p>首先你应该明白，黑客们喜爱有挑战性的问题，或者能激发他们思维的好问题。如果我们并非如此，那我们也不会成为你想询问的对象。如果你给了我们一个值得反复咀嚼玩味的好问题，我们自会对你感激不尽。好问题是激励，是厚礼。好问题可以提高我们的理解力，而且通常会暴露我们以前从没意识到或者思考过的问题。对黑客而言，“好问题！”是诚挚的大力称赞。</p><p>尽管如此，黑客们有着蔑视或傲慢面对简单问题的坏名声，这有时让我们看起来对新手、无知者似乎较有敌意，但其实不是那样的。</p><p>我们不讳言我们对那些不愿思考、或者在发问前不做他们该做的事的人的蔑视。那些人是时间杀手 —— 他们只想索取，从不付出，消耗我们可用在更有趣的问题或更值得回答的人身上的时间。我们称这样的人为 <code>失败者（撸瑟）</code> （由于历史原因，我们有时把它拼作 <code>lusers</code>）。</p><p>我们意识到许多人只是想使用我们写的软件，他们对学习技术细节没有兴趣。对大多数人而言，电脑只是种工具，是种达到目的的手段而已。他们有自己的生活并且有更要紧的事要做。我们了解这点，也从不指望每个人都对这些让我们着迷的技术问题感兴趣。尽管如此，我们回答问题的风格是指向那些真正对此有兴趣并愿意主动参与解决问题的人，这一点不会变，也不该变。如果连这都变了，我们就是在降低做自己最擅长的事情上的效率。</p><p>我们（在很大程度上）是自愿的，从繁忙的生活中抽出时间来解答疑惑，而且时常被提问淹没。所以我们无情地滤掉一些话题，特别是拋弃那些看起来像失败者的家伙，以便更高效地利用时间来回答<code>赢家（winner）</code>的问题。</p><p>如果你厌恶我们的态度，高高在上，或过于傲慢，不妨也设身处地想想。我们并没有要求你向我们屈服 —— 事实上，我们大多数人非常乐意与你平等地交流，只要你付出小小努力来满足基本要求，我们就会欢迎你加入我们的文化。但让我们帮助那些不愿意帮助自己的人是没有效率的。无知没有关系，但装白痴就是不行。</p><p>所以，你不必在技术上很在行才能吸引我们的注意，但你必须表现出能引导你变得在行的特质 —— 机敏、有想法、善于观察、乐于主动参与解决问题。如果你做不到这些使你与众不同的事情，我们建议你花点钱找家商业公司签个技术支持服务合同，而不是要求黑客个人无偿地帮助你。</p><p>如果你决定向我们求助，当然你也不希望被视为失败者，更不愿成为失败者中的一员。能立刻得到快速并有效答案的最好方法，就是像赢家那样提问 —— 聪明、自信、有解决问题的思路，只是偶尔在特定的问题上需要获得一点帮助。</p><p>（欢迎对本指南提出改进意见。你可以把你的建议发送至 <a href="esr@thyrsus.com">esr@thyrsus.com</a> 或 <a href="respond-auto@linuxmafia.com">respond-auto@linuxmafia.com</a>。然而请注意，本文并非<a href="http://www.ietf.org/rfc/rfc1855.txt" target="_blank" rel="noreferrer">网络礼节</a>的通用指南，而我们通常会拒绝无助于在技术论坛得到有用答案的建议）。</p><h2 id="在提问之前" tabindex="-1">在提问之前 <a class="header-anchor" href="#在提问之前" aria-label="Permalink to &quot;在提问之前&quot;">​</a></h2><p>在你准备要通过电子邮件、新闻群组或者聊天室提出技术问题前，请先做到以下事情：</p><ol><li>尝试在你准备提问的论坛的旧文章中搜索答案。</li><li>尝试上网搜索以找到答案。</li><li>尝试阅读手册以找到答案。</li><li>尝试阅读常见问题文件（FAQ）以找到答案。</li><li>尝试自己检查或试验以找到答案。</li><li>向你身边的强者朋友打听以找到答案。</li><li>如果你是程序开发者，请尝试阅读源代码以找到答案。</li></ol><p>当你提出问题的时候，请先表明你已经做了上述的努力；这将有助于树立你并不是一个不劳而获且浪费别人的时间的提问者。如果你能一并表达在做了上述努力的过程中所<strong>学到</strong>的东西会更好，因为我们更乐于回答那些表现出能从答案中学习的人的问题。</p><p>运用某些策略，比如先用 Google 搜索你所遇到的各种错误信息（搜索 <a href="http://groups.google.com/" target="_blank" rel="noreferrer">Google 论坛</a>和网页），这样很可能直接就找到了能解决问题的文件或邮件列表线索。即使没有结果，在邮件列表或新闻组寻求帮助时加上一句 <code>我在 Google 中搜过下列句子但没有找到什么有用的东西</code> 也是件好事，即使它只是表明了搜索引擎不能提供哪些帮助。这么做（加上搜索过的字串）也让遇到相似问题的其他人能被搜索引擎引导到你的提问来。</p><p>别着急，不要指望几秒钟的 Google 搜索就能解决一个复杂的问题。在向专家求助之前，再阅读一下常见问题文件（FAQ）、放轻松、坐得舒服一些，再花点时间思考一下这个问题。相信我们，他们能从你的提问看出你做了多少阅读与思考，如果你是有备而来，将更有可能得到解答。不要将所有问题一股脑拋出，只因你的第一次搜索没有找到答案（或者找到太多答案）。</p><p>准备好你的问题，再将问题仔细地思考过一遍，因为草率的发问只能得到草率的回答，或者根本得不到任何答案。越是能表现出在寻求帮助前你为解决问题所付出的努力，你越有可能得到实质性的帮助。</p><p>小心别问错了问题。如果你的问题基于错误的假设，某个普通黑客（J. Random Hacker）多半会一边在心里想着<code>蠢问题…</code>，一边用无意义的字面解释来答复你，希望着你会从问题的回答（而非你想得到的答案）中汲取教训。</p><p>绝不要自以为<strong>够格</strong>得到答案，你没有；你并没有。毕竟你没有为这种服务支付任何报酬。你将会是自己去<strong>挣到</strong>一个答案，靠提出有内涵的、有趣的、有思维激励作用的问题 —— 一个有潜力能贡献社区经验的问题，而不仅仅是被动地从他人处索取知识。</p><p>另一方面，表明你愿意在找答案的过程中做点什么是一个非常好的开端。<code>谁能给点提示？</code>、<code>我的这个例子里缺了什么？</code>以及<code>我应该检查什么地方</code>比<code>请把我需要的确切的过程贴出来</code>更容易得到答复。因为你表现出只要有人能指个正确方向，你就有完成它的能力和决心。</p><h2 id="当你提问时" tabindex="-1">当你提问时 <a class="header-anchor" href="#当你提问时" aria-label="Permalink to &quot;当你提问时&quot;">​</a></h2>',41),t=[o];function h(s,n,p,f,c,d){return r(),e("div",null,t)}const m=a(i,[["render",h]]);export{g as __pageData,m as default};
