const siteConfig = {
  brand: "lvy-neko",
  homeBrand: "lvy",
  role: "作品集 / 导航站 / 知识库预留",
  status: "开发中",
  description: "一个先放作品、再慢慢长成知识库的小站。",
  contact: {
    email: "your@email.com",
  },
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/ligodam-hub/ME",
      external: true,
      tone: "github",
      badge: "GH",
    },
    {
      label: "Bilibili",
      href: "#/projects",
      external: false,
      tone: "bilibili",
      badge: "B",
    },
    {
      label: "小红书",
      href: "#/share",
      external: false,
      tone: "xiaohongshu",
      badge: "小",
    },
    {
      label: "Mail",
      href: "#/about",
      external: false,
      action: "copy-email",
      tone: "mail",
      badge: "@",
    },
  ],
  latestUpdates: [
    {
      title: "500h播客纪念&分享",
      excerpt: "可以听到许多有趣的视角。",
      date: "2026/4/22",
      href: "#/articles",
      thumb: "500h",
    },
  ],
  aboutBullets: [
    "先把作品集和导航站做好，知识库后续再接进来。",
    "页面先追求有个人气质，再逐步补齐真实内容。",
    "偏好清晰、柔和、但不无聊的界面表达。",
    "这一版重点是结构、路由和交互先跑通，再继续细化内容。",
  ],
  quote: "先把前门搭好，再让内容慢慢住进来。",
};

const projects = [
  {
    title: "ME",
    category: "Featured",
    year: "2026",
    status: "Building",
    summary:
      "A personal website that works as portfolio, navigation hub, and future knowledge base without forcing every layer into the first release.",
    tags: ["portfolio", "navigation", "static-site"],
    href: "#/about",
    externalLabel: "Current build",
  },
  {
    title: "X-Plore",
    category: "Frontend",
    year: "2026",
    status: "Sharing",
    summary:
      "A screenshot-inspired personal site experiment focused on calm glassmorphism, soft motion, and stronger information routing.",
    tags: ["ui", "motion", "static-site"],
    href: "#/share",
    externalLabel: "See inspiration",
  },
  {
    title: "Project Atlas",
    category: "Engineering",
    year: "2025",
    status: "Ongoing",
    summary:
      "A clearer index of shipped work that explains what each project is, why it exists, and where to go next.",
    tags: ["case-study", "engineering", "portfolio"],
    href: "#/projects",
    externalLabel: "Read process",
  },
  {
    title: "Knowledge Base Beta",
    category: "Writing",
    year: "2026",
    status: "Queued",
    summary:
      "A staged notes system for essays, learning trails, and reference pages once the shell of the site feels stable.",
    tags: ["notes", "writing", "knowledge-base"],
    href: "#/articles",
    externalLabel: "Open archive",
  },
  {
    title: "Useful Links Engine",
    category: "Tools",
    year: "2026",
    status: "Running",
    summary:
      "A curated layer over raw bookmarks so links are grouped by intent and remain useful under pressure.",
    tags: ["resources", "curation", "workflow"],
    href: "#/blogs",
    externalLabel: "Browse links",
  },
  {
    title: "Public Writing Funnel",
    category: "Strategy",
    year: "2026",
    status: "Planning",
    summary:
      "A content flow that ties projects, notes, and small updates together without making the homepage feel crowded.",
    tags: ["content", "strategy", "growth"],
    href: "#/articles",
    externalLabel: "Open notes plan",
  },
];

const articleArchive = [
  {
    year: "2026",
    count: 7,
    entries: [
      { date: "04-22", title: "500h播客纪念&分享", tag: "Tech" },
      { date: "04-19", title: "我的262个github仓库整理", tag: "idx" },
      { date: "04-15", title: "48h 黑客松初体验 | 白嫖体todo", tag: "Agent" },
      { date: "03-27", title: "Harness | autoresearch | Rust & Python", tag: "Agent" },
      { date: "03-16", title: "关于openclaw", tag: "Tools" },
      { date: "03-04", title: "公告", tag: "Update" },
      { date: "02-04", title: "计算机学习分享", tag: "Study" },
    ],
  },
  {
    year: "2025",
    count: 4,
    entries: [
      { date: "12-02", title: "算法学习分享", tag: "Algo" },
      { date: "07-18", title: "我的一千多篇文章整合", tag: "sum" },
      { date: "05-17", title: "System design", tag: "Design" },
      { date: "02-14", title: "DeepSeek-从基座模型到推理能力", tag: "LLM" },
    ],
  },
];

const shareResources = [
  {
    title: "Linux os+net",
    url: "https://blog.csdn.net/2301_8017",
    subtitle: "https://blog.csdn.net/2301_8017...",
    tags: ["My Column", "OS"],
    summary: "Linux、网络与系统方向的学习整理。",
    stats: "Views: 141,040  Marks: 2,721",
    rating: 5,
    badge: "🐧",
  },
  {
    title: "LLM | SLM | vLLM",
    url: "https://blog.csdn.net/2301_8017",
    subtitle: "https://blog.csdn.net/2301_8017...",
    tags: ["My Column", "LLM"],
    summary: "模型推理、部署和笔记串起来的专题入口。",
    stats: "Views: 59,257  Marks: 1,061",
    rating: 5,
    badge: "🤖",
  },
  {
    title: "Problem Solving",
    url: "https://blog.csdn.net/2301_8017",
    subtitle: "https://blog.csdn.net/2301_8017...",
    tags: ["My Column", "Tools/Methods"],
    summary: "熟悉配置各种平台的运行环境，快速总结解决冲突和报错。",
    stats: "Views: 34,182  Marks: 234",
    rating: 5,
    badge: "🧩",
  },
  {
    title: "CMU 15-445 & 大数据",
    url: "https://blog.csdn.net/2301_8017",
    subtitle: "https://blog.csdn.net/2301_8017...",
    tags: ["My Column", "DB"],
    summary: "一些lab、架构、文档笔记，踩坑也会留下来。",
    stats: "Views: 18,367  Marks: 320",
    rating: 5,
    badge: "🗄️",
  },
  {
    title: "AIoT",
    url: "https://blog.csdn.net/2301_8017",
    subtitle: "https://blog.csdn.net/2301_8017...",
    tags: ["My Column", "IoT/Embedded"],
    summary: "AI 与嵌入式落地的学习实践记录。",
    stats: "Views: 36,505  Marks: 690",
    rating: 4,
    badge: "📡",
  },
  {
    title: "Redis文档学习",
    url: "https://blog.csdn.net/2301_8017",
    subtitle: "https://blog.csdn.net/2301_8017...",
    tags: ["My Column", "DB", "Backend"],
    summary: "从缓存到数据结构，快&并发友好的基础笔记。",
    stats: "Views: 34,380  Marks: 480",
    rating: 5,
    badge: "🟥",
  },
];

const blogLinks = [
  {
    title: "lvyneko",
    url: "https://lvyovo-wiki.tech",
    note: "莫西莫西，欢迎 issue/email me 添加友链 (=^.^=)",
    kind: "博客",
    rating: 5,
    badge: "🐱",
  },
  {
    title: "Anthony Fu",
    url: "https://antfu.me/",
    note: "vue core team，神做事就像喝水一样轻松",
    kind: "博客",
    rating: 5,
    badge: "🧪",
  },
  {
    title: "Innei 静かな森",
    url: "https://innei.in/",
    note: "支持声产博主喵",
    kind: "博客",
    rating: 5,
    badge: "🌲",
  },
  {
    title: "Cassie Evans's Blog",
    url: "https://www.cassie.codes/",
    note: "GSAP 和 SVG 动画的厉害姐姐",
    kind: "博客",
    rating: 5,
    badge: "🌈",
  },
  {
    title: "猫鱼周刊",
    url: "https://ameow.xyz/",
    note: "猫鱼周刊，快乐划水 (。･∀･)ﾉ",
    kind: "博客",
    rating: 5,
    badge: "🦦",
  },
  {
    title: "十玖八柒",
    url: "https://blog.ahzoo.cn/",
    note: "后端 | 次次元 ovo",
    kind: "博客",
    rating: 5,
    badge: "🎐",
  },
  {
    title: "Kuro",
    url: "https://www.elainafan.one/",
    note: "好想像 kuro 一样会算法啊",
    kind: "友链",
    rating: 5,
    badge: "🖤",
  },
  {
    title: "loveapple",
    url: "https://loveapple.icu/",
    note: "RF Engineering | 一条喜欢苹果的水煮鱼",
    kind: "友链",
    rating: 5,
    badge: "🍎",
  },
  {
    title: "Jerry Yang",
    url: "https://efjerryyang.github.io/",
    note: "Rust | All in",
    kind: "友链",
    rating: 5,
    badge: "🩵",
  },
];

const timeline = [
  {
    date: "July 27, 2026",
    title: "Portfolio-first structure set",
    copy: "The site is intentionally useful before the long-form archive is ready.",
  },
  {
    date: "Next step",
    title: "Wire route logic to visible views",
    copy: "Navigation should feel like a guided browse, not a sudden context switch.",
  },
  {
    date: "Future phase",
    title: "Swap placeholders for real writing and long-term curation",
    copy: "Articles, blogs, and resources can deepen without changing the shell again.",
  },
];

const allowedRoutes = new Set(["home", "articles", "projects", "about", "share", "blogs"]);
const categories = ["All", ...new Set(projects.map((project) => project.category))];
const shareFilters = ["全部", ...new Set(shareResources.flatMap((resource) => resource.tags))];
const blogFilters = ["全部", ...new Set(blogLinks.map((link) => link.kind))];
const calendarWeekLabels = ["一", "二", "三", "四", "五", "六", "日"];

const state = {
  route: "home",
  category: "All",
  query: "",
  shareFilter: "全部",
  shareQuery: "",
  blogFilter: "全部",
  blogQuery: "",
  isTransitioning: false,
  pendingRoute: "",
};

const els = {
  main: document.querySelector("main"),
  brandName: document.getElementById("brand-name"),
  brandNameHome: document.getElementById("brand-name-home"),
  brandRole: document.getElementById("brand-role"),
  heroStatus: document.getElementById("hero-status"),
  heroTitle: document.getElementById("hero-title"),
  heroDescription: document.getElementById("hero-description"),
  footerName: document.getElementById("footer-name"),
  footerYear: document.getElementById("footer-year"),
  homeDate: document.getElementById("home-date"),
  digitalClock: document.getElementById("digital-clock"),
  calendarMonth: document.getElementById("calendar-month"),
  calendarWeek: document.getElementById("calendar-week"),
  calendarDays: document.getElementById("calendar-days"),
  socialRow: document.getElementById("social-row"),
  latestCard: document.getElementById("latest-card"),
  articleArchive: document.getElementById("article-archive"),
  projectFilters: document.getElementById("project-filters"),
  projectSearch: document.getElementById("project-search"),
  projectGrid: document.getElementById("project-grid"),
  projectCount: document.getElementById("project-count"),
  projectEmpty: document.getElementById("project-empty"),
  shareFilters: document.getElementById("share-filters"),
  shareSearch: document.getElementById("share-search"),
  shareGrid: document.getElementById("share-grid"),
  shareEmpty: document.getElementById("share-empty"),
  blogFilters: document.getElementById("blog-filters"),
  blogSearch: document.getElementById("blog-search"),
  blogGrid: document.getElementById("blog-grid"),
  blogEmpty: document.getElementById("blog-empty"),
  timelineList: document.getElementById("timeline-list"),
  profileList: document.getElementById("profile-list"),
  quoteText: document.getElementById("quote-text"),
  menuToggle: document.getElementById("menu-toggle"),
  siteNav: document.getElementById("site-nav"),
  navCardLinks: document.querySelector(".nav-card__links"),
  navCardIndicator: document.getElementById("nav-card-indicator"),
  copyEmail: document.getElementById("copy-email"),
  routeSections: [...document.querySelectorAll(".route-section")],
  routeLinks: [...document.querySelectorAll("[data-route-nav]")],
};

let navCardPreviewLink = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getRouteFromHash() {
  const route = window.location.hash.replace(/^#\//, "") || "home";
  return allowedRoutes.has(route) ? route : "home";
}

function getRouteFromHref(href) {
  if (!href) return null;

  const match = href.match(/^#\/([a-z0-9-]+)/i);
  if (!match) return null;

  const route = match[1].toLowerCase();
  return allowedRoutes.has(route) ? route : null;
}

function getNavActiveRoute() {
  return state.route === "home" ? "articles" : state.route;
}

function getGreetingByHour(hour) {
  if (hour < 5) return "Good Night";
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

function formatDateLine() {
  const now = new Date();
  const weekday = new Intl.DateTimeFormat("zh-CN", { weekday: "short" }).format(now);
  return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${weekday}`;
}

function formatClock() {
  const now = new Date();
  return now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function renderStars(count) {
  return `
    <div class="rating-row" aria-label="${count} out of 5 stars">
      ${Array.from(
        { length: 5 },
        (_, index) =>
          `<span class="rating-star${index < count ? " is-active" : ""}" aria-hidden="true">★</span>`,
      ).join("")}
    </div>
  `;
}

function renderSocialLink(link) {
  const target = link.external ? ' target="_blank" rel="noreferrer"' : "";
  const actionAttr = link.action ? ` data-action="${escapeHtml(link.action)}"` : "";
  const toneClass =
    link.tone && /^[a-z0-9-]+$/i.test(link.tone) ? ` social-link--${link.tone}` : "";
  const badge = link.badge
    ? `<span class="social-link__badge" aria-hidden="true">${escapeHtml(link.badge)}</span>`
    : "";

  return `<a class="social-link${toneClass}" href="${escapeHtml(link.href)}"${target}${actionAttr}>${badge}<span>${escapeHtml(link.label)}</span></a>`;
}

function renderCalendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();
  const weekday = new Intl.DateTimeFormat("zh-CN", { weekday: "short" }).format(now);
  const monthLabel = `${year}/${month + 1}/${today} ${weekday}`;
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const mondayIndex = (firstDay.getDay() + 6) % 7;
  const totalCells = Math.ceil((mondayIndex + lastDay.getDate()) / 7) * 7;

  els.calendarMonth.textContent = monthLabel;
  els.calendarWeek.innerHTML = calendarWeekLabels
    .map((label) => `<span>${escapeHtml(label)}</span>`)
    .join("");

  els.calendarDays.innerHTML = Array.from({ length: totalCells }, (_, index) => {
    const dateNumber = index - mondayIndex + 1;
    if (dateNumber < 1 || dateNumber > lastDay.getDate()) {
      return '<span class="calendar-day is-empty"></span>';
    }

    const activeClass = dateNumber === today ? " is-today" : "";
    return `<span class="calendar-day${activeClass}">${dateNumber}</span>`;
  }).join("");
}

function renderShell() {
  const greeting = getGreetingByHour(new Date().getHours());
  const heroTitle = `${escapeHtml(greeting)}<br />I'm <span class="accent-name">${escapeHtml(siteConfig.homeBrand)}</span>, nice to meet you!`;
  const latest = siteConfig.latestUpdates[0];

  els.brandName.textContent = siteConfig.homeBrand;
  els.brandRole.textContent = siteConfig.role;
  els.brandNameHome.textContent = siteConfig.brand;
  els.heroStatus.textContent = siteConfig.status;
  els.heroTitle.innerHTML = heroTitle;
  els.heroDescription.textContent = siteConfig.description;
  els.footerName.textContent = siteConfig.homeBrand;
  els.footerYear.textContent = new Date().getFullYear();
  els.homeDate.textContent = formatDateLine();
  els.digitalClock.textContent = formatClock();
  els.socialRow.innerHTML = siteConfig.socials.map(renderSocialLink).join("");
  els.latestCard.innerHTML = `
    <p class="mini-label">最新文章</p>
    <div class="latest-card__entry">
      <div class="latest-card__thumb">${escapeHtml(latest.thumb || "NEW")}</div>
      <div class="latest-card__body">
        <h3>${escapeHtml(latest.title)}</h3>
        <p>${escapeHtml(latest.excerpt)}</p>
        <span class="project-meta">${escapeHtml(latest.date)}</span>
      </div>
    </div>
  `;
  els.profileList.innerHTML = siteConfig.aboutBullets
    .map((bullet) => `<li>${escapeHtml(bullet)}</li>`)
    .join("");
  els.quoteText.textContent = siteConfig.quote;

  renderCalendar();
}

function renderArticles() {
  els.articleArchive.innerHTML = articleArchive
    .map(
      (yearBlock) => `
        <article class="panel archive-year-card">
          <div class="archive-year-card__header">
            <h3>${escapeHtml(yearBlock.year)}年</h3>
            <p>${escapeHtml(String(yearBlock.count))} 篇文章</p>
          </div>
          <div class="archive-entry-list">
            ${yearBlock.entries
              .map(
                (entry) => `
                  <article class="archive-entry">
                    <span class="archive-entry__date">${escapeHtml(entry.date)}</span>
                    <span class="archive-entry__dot" aria-hidden="true"></span>
                    <span class="archive-entry__title">${escapeHtml(entry.title)}</span>
                    <span class="archive-entry__tag">#${escapeHtml(entry.tag)}</span>
                  </article>
                `,
              )
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderProjectFilters() {
  els.projectFilters.innerHTML = categories
    .map(
      (category) => `
        <button
          class="filter-chip ${state.category === category ? "active" : ""}"
          type="button"
          data-filter="${escapeHtml(category)}"
        >
          ${escapeHtml(category)}
        </button>
      `,
    )
    .join("");
}

function getFilteredProjects() {
  const query = state.query.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      state.category === "All" || project.category === state.category;
    const haystack = [
      project.title,
      project.summary,
      project.category,
      project.tags.join(" "),
      project.status,
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && (!query || haystack.includes(query));
  });
}

function renderProjects() {
  const visibleProjects = getFilteredProjects();

  els.projectCount.textContent = `${visibleProjects.length} 个项目`;
  els.projectEmpty.classList.toggle("hidden", visibleProjects.length > 0);
  els.projectGrid.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-badge-row">
            <span class="project-badge">${escapeHtml(project.category)}</span>
            <span class="project-badge">${escapeHtml(project.status)}</span>
          </div>
          <div>
            <h3>${escapeHtml(project.title)}</h3>
            <p class="project-meta">${escapeHtml(project.year)} / ${escapeHtml(project.tags.join(" / "))}</p>
          </div>
          <p class="project-summary">${escapeHtml(project.summary)}</p>
          <div class="project-actions">
            <a class="chip-link" href="${escapeHtml(project.href)}">${escapeHtml(project.externalLabel)}</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderShareFilters() {
  els.shareFilters.innerHTML = shareFilters
    .map(
      (filter) => `
        <button
          class="filter-chip ${state.shareFilter === filter ? "active" : ""}"
          type="button"
          data-share-filter="${escapeHtml(filter)}"
        >
          ${escapeHtml(filter)}
        </button>
      `,
    )
    .join("");
}

function getFilteredShareResources() {
  const query = state.shareQuery.trim().toLowerCase();

  return shareResources.filter((resource) => {
    const matchesFilter =
      state.shareFilter === "全部" || resource.tags.includes(state.shareFilter);
    const haystack = [resource.title, resource.subtitle, resource.summary, resource.tags.join(" ")]
      .join(" ")
      .toLowerCase();

    return matchesFilter && (!query || haystack.includes(query));
  });
}

function renderShareResources() {
  const visibleResources = getFilteredShareResources();

  els.shareEmpty.classList.toggle("hidden", visibleResources.length > 0);
  els.shareGrid.innerHTML = visibleResources
    .map(
      (resource) => `
        <article class="panel resource-card">
          <div class="resource-card__top">
            <div class="resource-card__badge">${escapeHtml(resource.badge)}</div>
            <div>
              <h3>${escapeHtml(resource.title)}</h3>
              <p class="project-meta">${escapeHtml(resource.subtitle)}</p>
            </div>
          </div>
          ${renderStars(resource.rating)}
          <div class="chip-row resource-card__tags">
            ${resource.tags.map((tag) => `<span class="topic-pill">${escapeHtml(tag)}</span>`).join("")}
          </div>
          <p class="project-summary">${escapeHtml(resource.summary)}</p>
          <p class="project-meta">${escapeHtml(resource.stats)}</p>
          <div class="project-actions">
            <a class="chip-link" href="${escapeHtml(resource.url)}" target="_blank" rel="noreferrer">打开资源</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderBlogFilters() {
  els.blogFilters.innerHTML = blogFilters
    .map(
      (filter) => `
        <button
          class="filter-chip ${state.blogFilter === filter ? "active" : ""}"
          type="button"
          data-blog-filter="${escapeHtml(filter)}"
        >
          ${escapeHtml(filter)}
        </button>
      `,
    )
    .join("");
}

function getFilteredBlogLinks() {
  const query = state.blogQuery.trim().toLowerCase();

  return blogLinks.filter((link) => {
    const matchesFilter = state.blogFilter === "全部" || link.kind === state.blogFilter;
    const haystack = [link.title, link.url, link.note, link.kind].join(" ").toLowerCase();
    return matchesFilter && (!query || haystack.includes(query));
  });
}

function renderBlogLinks() {
  const visibleLinks = getFilteredBlogLinks();

  els.blogEmpty.classList.toggle("hidden", visibleLinks.length > 0);
  els.blogGrid.innerHTML = visibleLinks
    .map(
      (link) => `
        <article class="panel blog-card">
          <div class="blog-card__top">
            <div class="blog-card__badge">${escapeHtml(link.badge)}</div>
            <div>
              <h3>${escapeHtml(link.title)}</h3>
              <p class="project-meta">${escapeHtml(link.url)}</p>
            </div>
          </div>
          ${renderStars(link.rating)}
          <p class="project-summary">${escapeHtml(link.note)}</p>
          <div class="project-actions">
            <span class="topic-pill">${escapeHtml(link.kind)}</span>
            <a class="chip-link" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">访问</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderTimeline() {
  els.timelineList.innerHTML = timeline
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-top">
            <span class="timeline-date">${escapeHtml(item.date)}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.copy)}</p>
        </article>
      `,
    )
    .join("");
}

function getActiveNavCardLink() {
  if (!els.navCardLinks) return null;
  return els.navCardLinks.querySelector("a.active") ?? els.navCardLinks.querySelector("a");
}

function getNavCardIndicatorTarget() {
  if (navCardPreviewLink && els.navCardLinks?.contains(navCardPreviewLink)) {
    return navCardPreviewLink;
  }

  return getActiveNavCardLink();
}

function moveNavCardIndicatorTo(link) {
  if (!els.navCardLinks || !els.navCardIndicator) return;
  if (els.navCardLinks.offsetParent === null) return;

  if (!link) {
    els.navCardIndicator.style.opacity = "0";
    return;
  }

  els.navCardIndicator.style.width = `${link.offsetWidth}px`;
  els.navCardIndicator.style.height = `${link.offsetHeight}px`;
  els.navCardIndicator.style.transform = `translate3d(${link.offsetLeft}px, ${link.offsetTop}px, 0)`;
  els.navCardIndicator.style.opacity = "1";
}

function updateNavCardIndicator() {
  moveNavCardIndicatorTo(getNavCardIndicatorTarget());
}

function queueNavCardIndicatorUpdate() {
  window.requestAnimationFrame(updateNavCardIndicator);
}

function syncNavCardPreviewState() {
  if (!els.navCardLinks) return;

  els.navCardLinks.querySelectorAll("a").forEach((link) => {
    link.classList.toggle("is-preview", link === navCardPreviewLink);
  });
}

function setNavCardPreview(link) {
  if (!els.navCardLinks?.contains(link)) return;
  if (navCardPreviewLink === link) return;

  navCardPreviewLink = link;
  syncNavCardPreviewState();
  queueNavCardIndicatorUpdate();
}

function clearNavCardPreview() {
  if (!navCardPreviewLink) return;

  navCardPreviewLink = null;
  syncNavCardPreviewState();
  queueNavCardIndicatorUpdate();
}

function getRouteSection(route) {
  return els.routeSections.find((section) => section.dataset.route === route) ?? null;
}

function updateRouteUi() {
  const activeRoute = getNavActiveRoute();

  els.routeSections.forEach((section) => {
    const isActive = section.dataset.route === state.route;
    section.classList.toggle("route-active", isActive);
  });

  els.routeLinks.forEach((link) => {
    const linkRoute = getRouteFromHref(link.getAttribute("href"));
    link.classList.toggle("active", linkRoute === activeRoute);
  });

  document.body.setAttribute("data-route", state.route);
  els.siteNav.classList.remove("open");
  els.menuToggle.setAttribute("aria-expanded", "false");
  queueNavCardIndicatorUpdate();
}

function animateElement(element, keyframes, options) {
  if (prefersReducedMotion()) return Promise.resolve();

  const animation = element.animate(keyframes, options);
  return new Promise((resolve) => {
    animation.addEventListener("finish", resolve, { once: true });
    animation.addEventListener("cancel", resolve, { once: true });
  });
}

function syncHistory(route, replace = false) {
  const nextHash = `#/${route}`;
  if (window.location.hash === nextHash) return;

  if (replace) {
    window.history.replaceState(null, "", nextHash);
    return;
  }

  window.history.pushState(null, "", nextHash);
}

async function transitionToRoute(nextRoute, { replace = false, syncLocation = false } = {}) {
  if (!allowedRoutes.has(nextRoute)) return;

  if (syncLocation) {
    syncHistory(nextRoute, replace);
  }

  if (state.isTransitioning) {
    state.pendingRoute = nextRoute;
    return;
  }

  if (nextRoute === state.route) {
    updateRouteUi();
    return;
  }

  const currentSection = getRouteSection(state.route);
  const nextSection = getRouteSection(nextRoute);
  if (!nextSection) return;

  if (!currentSection || prefersReducedMotion()) {
    state.route = nextRoute;
    updateRouteUi();
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  state.isTransitioning = true;
  clearNavCardPreview();

  const currentHeight = els.main?.offsetHeight ?? 0;
  if (els.main && currentHeight > 0) {
    els.main.style.minHeight = `${currentHeight}px`;
  }

  await animateElement(
    currentSection,
    [
      { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)", filter: "blur(0px)" },
      { opacity: 0, transform: "translate3d(0, 16px, 0) scale(0.985)", filter: "blur(5px)" },
    ],
    {
      duration: 220,
      easing: "cubic-bezier(0.4, 0, 1, 1)",
      fill: "forwards",
    },
  );

  state.route = nextRoute;
  updateRouteUi();

  const nextHeight = nextSection.offsetHeight;
  if (els.main && currentHeight > 0) {
    els.main.style.minHeight = `${Math.max(currentHeight, nextHeight)}px`;
  }

  await animateElement(
    nextSection,
    [
      { opacity: 0, transform: "translate3d(0, 24px, 0) scale(0.985)", filter: "blur(6px)" },
      { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)", filter: "blur(0px)" },
    ],
    {
      duration: 360,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "both",
    },
  );

  if (els.main) {
    els.main.style.removeProperty("min-height");
  }

  state.isTransitioning = false;

  if (state.pendingRoute && state.pendingRoute !== state.route) {
    const queuedRoute = state.pendingRoute;
    state.pendingRoute = "";
    transitionToRoute(queuedRoute);
    return;
  }

  state.pendingRoute = "";
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(siteConfig.contact.email);
    els.copyEmail.textContent = "邮箱已复制";
    window.setTimeout(() => {
      els.copyEmail.textContent = "复制邮箱";
    }, 1600);
  } catch {
    els.copyEmail.textContent = siteConfig.contact.email;
  }
}

function handleLocationChange() {
  const route = getRouteFromHash();
  if (route === state.route) return;

  transitionToRoute(route);
}

function bindEvents() {
  window.addEventListener("hashchange", handleLocationChange);
  window.addEventListener("popstate", handleLocationChange);

  if (els.navCardLinks) {
    els.navCardLinks.addEventListener("pointerover", (event) => {
      if (!(event.target instanceof Element)) return;

      const target = event.target.closest("a");
      if (!target || !els.navCardLinks.contains(target)) return;

      setNavCardPreview(target);
    });

    els.navCardLinks.addEventListener("pointerleave", clearNavCardPreview);

    els.navCardLinks.addEventListener("focusin", (event) => {
      if (!(event.target instanceof Element)) return;

      const target = event.target.closest("a");
      if (!target || !els.navCardLinks.contains(target)) return;

      setNavCardPreview(target);
    });

    els.navCardLinks.addEventListener("focusout", (event) => {
      if (event.relatedTarget instanceof Element && els.navCardLinks.contains(event.relatedTarget)) {
        return;
      }

      clearNavCardPreview();
    });
  }

  els.projectFilters.addEventListener("click", (event) => {
    const target = event.target.closest("[data-filter]");
    if (!target) return;

    state.category = target.dataset.filter;
    renderProjectFilters();
    renderProjects();
  });

  els.projectSearch.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderProjects();
  });

  els.shareFilters.addEventListener("click", (event) => {
    const target = event.target.closest("[data-share-filter]");
    if (!target) return;

    state.shareFilter = target.dataset.shareFilter;
    renderShareFilters();
    renderShareResources();
  });

  els.shareSearch.addEventListener("input", (event) => {
    state.shareQuery = event.target.value;
    renderShareResources();
  });

  els.blogFilters.addEventListener("click", (event) => {
    const target = event.target.closest("[data-blog-filter]");
    if (!target) return;

    state.blogFilter = target.dataset.blogFilter;
    renderBlogFilters();
    renderBlogLinks();
  });

  els.blogSearch.addEventListener("input", (event) => {
    state.blogQuery = event.target.value;
    renderBlogLinks();
  });

  els.menuToggle.addEventListener("click", () => {
    const expanded = els.siteNav.classList.toggle("open");
    els.menuToggle.setAttribute("aria-expanded", String(expanded));
  });

  els.copyEmail.addEventListener("click", copyEmail);
  window.addEventListener("resize", queueNavCardIndicatorUpdate);

  if (document.fonts?.ready) {
    document.fonts.ready.then(queueNavCardIndicatorUpdate);
  }

  document.addEventListener("click", (event) => {
    const actionTarget = event.target.closest("[data-action='copy-email']");
    if (actionTarget) {
      event.preventDefault();
      copyEmail();
      return;
    }

    const routeTarget = event.target.closest("a[href^='#/']");
    if (!(routeTarget instanceof HTMLAnchorElement)) return;

    const route = getRouteFromHref(routeTarget.getAttribute("href"));
    if (!route) return;

    event.preventDefault();
    transitionToRoute(route, { syncLocation: true });
  });
}

function init() {
  if (!window.location.hash) {
    syncHistory("home", true);
  }

  state.route = getRouteFromHash();

  renderShell();
  renderArticles();
  renderProjectFilters();
  renderProjects();
  renderShareFilters();
  renderShareResources();
  renderBlogFilters();
  renderBlogLinks();
  renderTimeline();
  updateRouteUi();
  bindEvents();
  queueNavCardIndicatorUpdate();
  window.setInterval(() => {
    const greeting = getGreetingByHour(new Date().getHours());
    const nextTitle = `${escapeHtml(greeting)}<br />I'm <span class="accent-name">${escapeHtml(siteConfig.homeBrand)}</span>, nice to meet you!`;
    const nextDateLine = formatDateLine();

    els.digitalClock.textContent = formatClock();
    els.heroTitle.innerHTML = nextTitle;

    if (els.homeDate.textContent !== nextDateLine) {
      els.homeDate.textContent = nextDateLine;
      renderCalendar();
    }
  }, 1000);
}

init();
