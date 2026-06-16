/* =========== Portfolio Data =========== */
var portfolioData = [
  {
    icon: '◇', tag: 'Mobile App', title: '悦读 — 电子阅读 App 重设计',
    desc: '为千万级用户的阅读产品进行全面的体验升级与视觉焕新。',
    slug: 'yuedu-app',
    color: '#7BB8D4',
    full: '本项目中，我主导了"悦读"App 从 3.0 到 4.0 的全链路重设计。从用户调研入手，梳理核心阅读场景的痛点——字体切换繁琐、夜间模式过渡生硬、书架管理混乱。通过建立新的设计语言系统，统一了 200+ 个组件的视觉规范，重新定义了阅读器的排版引擎参数，并设计了一套可自适应环境光的动态主题方案。上线后次日留存提升 12%，用户满意度评分从 3.8 升至 4.5。',
    details: { '角色': '主设计师', '周期': '14 周', '工具': 'Figma / Principle', '平台': 'iOS / Android' },
    media: [
      { type: 'image', src: '', placeholder: 'App 首页 & 阅读器界面设计稿', desc: '悦读 4.0 核心页面设计' },
      { type: 'image', src: '', placeholder: '设计语言系统 — 色彩 & 字体', desc: 'Design Token 体系' },
      { type: 'image', src: '', placeholder: '交互动效演示 — 夜间模式切换', desc: '动态主题方案' }
    ]
  },
  {
    icon: '◎', tag: 'Web Design', title: '云策 — SaaS 数据平台控制台',
    desc: '面向企业用户的 B 端数据看板，兼顾复杂功能与清爽体验。',
    slug: 'yunce-saas',
    color: '#6B7280',
    full: '"云策"是一款面向金融机构的智能投研 SaaS 平台，核心挑战在于将海量复杂数据以直观、可操作的方式呈现。我设计了模块化的仪表盘系统，支持用户自由拖拽组合数据卡片；采用渐进式信息披露策略，将高频操作置于一级页面，低频配置收入侧边栏。同时建立了完整的 Design Token 体系，确保 4 个主题（浅色/深色/高对比度/品牌定制）一键切换时的视觉一致性。',
    details: { '角色': '设计负责人', '周期': '20 周', '工具': 'Figma / Protopie', '平台': 'Web / PWA' },
    media: [
      { type: 'image', src: '', placeholder: '仪表盘首页 — 数据看板总览', desc: '模块化仪表盘系统' },
      { type: 'image', src: '', placeholder: '4 种主题切换效果对比', desc: 'Design Token 多主题' },
      { type: 'video', src: '', placeholder: '拖拽组合数据卡片操作演示', desc: '交互原型演示' }
    ]
  },
  {
    icon: '△', tag: 'Branding', title: '花间集 — 新消费品牌全案设计',
    desc: '从 0 到 1 的品牌视觉体系搭建，涵盖 Logo、包装、官网与小程序。',
    slug: 'huajianji-brand',
    color: '#E8A0BF',
    full: '"花间集"是一个定位中高端鲜花订阅的新消费品牌。作为品牌初创期的唯一设计师，我完成了从品牌策略到视觉落地的全部设计工作。Logo 以手绘水彩花卉为灵感，搭配定制的中文字标；包装系统采用可降解环保材质并融入撕拉式开箱体验；小程序商城以"花语故事"为主线串联选购流程，将鲜花订阅转化为情感消费。品牌上线首月即获 2 万+ 种子用户。',
    details: { '角色': '品牌设计师', '周期': '12 周', '工具': 'Figma / Illustrator', '平台': '全渠道' },
    media: [
      { type: 'image', src: '', placeholder: '品牌 Logo & 中文字标方案', desc: '品牌视觉识别系统' },
      { type: 'image', src: '', placeholder: '包装设计 — 环保材质撕拉盒', desc: '包装系统设计' },
      { type: 'image', src: '', placeholder: '小程序商城核心页面', desc: '线上触点设计' }
    ]
  },
  {
    icon: '□', tag: 'Design System', title: 'Prism — 企业级设计系统',
    desc: '为百人产品团队构建的跨平台组件库与设计规范。',
    slug: 'prism-ds',
    color: '#7C3AED',
    full: 'Prism 是一套服务于 3 条产品线、覆盖 Web/iOS/Android 三端的企业级设计系统。我从原子化 Design Token 做起，定义了 500+ 个语义化变量（颜色、间距、圆角、阴影、动效曲线），向上构建了 60+ 个基础组件和 20+ 个复合业务组件。配合 Storybook 文档站点和 Figma 插件，实现设计稿到代码的零沟通成本交付。设计系统上线后，团队平均迭代周期从 2 周缩短至 4 天。',
    details: { '角色': 'DS 负责人', '周期': '持续迭代', '工具': 'Figma / Storybook', '平台': 'Web / Mobile' },
    media: [
      { type: 'image', src: '', placeholder: 'Design Token 体系概览', desc: '原子化设计变量' },
      { type: 'image', src: '', placeholder: '组件库全景 — 60+ 组件', desc: '组件库总览' },
      { type: 'image', src: '', placeholder: 'Storybook 文档站点截图', desc: '文档与协作' }
    ]
  },
  {
    icon: '◈', tag: 'Mini Program', title: '食光 — 餐饮数字菜单小程序',
    desc: '为连锁餐饮品牌打造的轻量化数字菜单与会员系统。',
    slug: 'shiguang-mp',
    color: '#F59E0B',
    full: '"食光"小程序为某连锁茶饮品牌解决了线下排队点单效率低、会员召回难的核心问题。我在设计中采用了大卡片布局突出产品视觉吸引力，配合流畅的横向滑动交互模拟"翻阅菜单"的实体体验；会员中心以进度环和成就徽章激励复购；下单流程精简至 3 步完成，平均操作时长从 45 秒降至 18 秒。上线后月活稳定在 50 万+。',
    details: { '角色': '产品设计师', '周期': '8 周', '工具': 'Figma / 微信开发者工具', '平台': '微信小程序' },
    media: [
      { type: 'image', src: '', placeholder: '小程序首页 — 大卡片菜单', desc: '菜单浏览体验' },
      { type: 'image', src: '', placeholder: '会员中心 — 进度环&成就', desc: '会员激励体系' },
      { type: 'image', src: '', placeholder: '精简下单流程 3 步完成', desc: '下单流程设计' }
    ]
  },
  {
    icon: '○', tag: 'Interaction', title: 'Flow — 交互原型合集',
    desc: '探索前沿交互范式的实验性项目，微交互与手势设计研究。',
    slug: 'flow-prototypes',
    color: '#10B981',
    full: 'Flow 是我个人的交互实验项目，收录了 30+ 个独立的微交互原型，涵盖手势操作、页面转场、加载动画、反馈动效等类别。每个原型都附带详细的实现思路和技术参数（缓动曲线、时长、触发条件），可作为日常设计工作中的动效参考库。项目在 Dribbble 上获得 15 万+ 浏览量，多个动效被 Figma 社区收录为推荐资源。',
    details: { '角色': '独立项目', '周期': '持续更新', '工具': 'Protopie / After Effects', '平台': '跨平台' },
    media: [
      { type: 'video', src: '', placeholder: '手势操作 — 滑动/捏合/长按', desc: '手势交互实验' },
      { type: 'video', src: '', placeholder: '页面转场动画合集', desc: '转场动效集' },
      { type: 'video', src: '', placeholder: '加载动画 & 反馈动效', desc: '微交互动效库' }
    ]
  }
];

/* =========== Render Portfolio Cards =========== */
var grid = document.getElementById('portfolioGrid');
portfolioData.forEach(function(p) {
  var card = document.createElement('a');
  card.className = 'portfolio-card';
  card.href = 'project.html?id=' + p.slug;
  card.setAttribute('aria-label', p.title);
  card.innerHTML =
    '<div class="portfolio-card-img">' +
      '<span class="portfolio-card-img-icon" aria-hidden="true">' + p.icon + '</span>' +
    '</div>' +
    '<div class="portfolio-card-body">' +
      '<span class="tag">' + p.tag + '</span>' +
      '<h3>' + p.title + '</h3>' +
      '<p>' + p.desc + '</p>' +
    '</div>';
  /* 点击时判断：桌面端新标签页打开，移动端当前页跳转 */
  card.addEventListener('click', function() {
    if (window.innerWidth > 768) {
      card.target = '_blank';
      card.rel = 'noopener';
    }
  });
  grid.appendChild(card);
});

/* =========== Mobile Nav =========== */
var hamburger = document.getElementById('hamburger');
var mobileNav = document.getElementById('mobileNav');

function toggleMobileNav() {
  var isOpen = mobileNav.classList.contains('open');
  mobileNav.classList.toggle('open');
  hamburger.classList.toggle('open');
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

hamburger.addEventListener('click', toggleMobileNav);
mobileNav.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* =========== Nav: scroll style + active highlight =========== */
var navbar    = document.getElementById('navbar');
var navLinks  = document.querySelectorAll('.nav-links a');
var mMavLinks = document.querySelectorAll('.mobile-nav a');
var sections  = document.querySelectorAll('.section');

function updateNav() {
  var scrollY = window.scrollY;
  navbar.classList.toggle('scrolled', scrollY > window.innerHeight - 100);
  var currentId = '';
  sections.forEach(function(sec) {
    if (sec.offsetTop - 120 <= scrollY) {
      currentId = sec.getAttribute('id');
    }
  });
  navLinks.forEach(function(a) {
    a.classList.toggle('active', a.getAttribute('data-section') === currentId);
  });
  mMavLinks.forEach(function(a) {
    a.classList.toggle('active', a.getAttribute('data-section') === currentId);
  });
}

/* =========== Intersection Observer: fade-in =========== */
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

sections.forEach(function(s) { observer.observe(s); });

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* =========== Close mobile nav on resize =========== */
window.addEventListener('resize', function() {
  if (window.innerWidth > 768 && mobileNav.classList.contains('open')) {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }
});

/* =========== Parallax: decorative glow drift on scroll =========== */
var glowTL = document.querySelector('.deco-glow--tl');
var glowBR = document.querySelector('.deco-glow--br');

window.addEventListener('scroll', function() {
  var scrollY = window.scrollY;
  if (glowTL) glowTL.style.transform = 'translateY(' + (scrollY * 0.025) + 'px) translateX(' + (scrollY * 0.015) + 'px)';
  if (glowBR) glowBR.style.transform = 'translateY(' + (scrollY * -0.02) + 'px) translateX(' + (scrollY * -0.01) + 'px)';
}, { passive: true });
