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

const allowedRoutes = new Set(["home", "articles", "write", "projects", "about", "share", "blogs"]);
const categories = ["All", ...new Set(projects.map((project) => project.category))];
const shareFilters = ["全部", ...new Set(shareResources.flatMap((resource) => resource.tags))];
const blogFilters = ["全部", ...new Set(blogLinks.map((link) => link.kind))];
const calendarWeekLabels = ["一", "二", "三", "四", "五", "六", "日"];
const SETTINGS_STORAGE_KEY = "me-home-ui-settings-v1";
const ARTICLE_STORAGE_KEY = "me-custom-articles-v1";
const WRITER_DRAFT_STORAGE_KEY = "me-writer-draft-v1";
const writerCategories = ["Uncategorized", "Tech", "Agent", "Tools", "Update", "Study", "Design", "Share", "Notes"];
const settingsThemeFields = [
  { key: "accent", label: "主题色" },
  { key: "accentStrong", label: "强调深色" },
  { key: "text", label: "正文颜色" },
  { key: "muted", label: "次级文字" },
  { key: "surface", label: "卡片底色" },
  { key: "pageStart", label: "背景起点" },
  { key: "pageMid", label: "背景中段" },
  { key: "pageEnd", label: "背景终点" },
  { key: "glowLeft", label: "左侧光晕" },
  { key: "glowRight", label: "右侧光晕" },
  { key: "warm", label: "暖色点缀" },
];
const settingsThemePresets = [
  {
    id: "mist",
    label: "晨雾",
    description: "保留当前这版柔和、轻透的玻璃感。",
    swatches: ["#35c8bb", "#2b7f85", "#f7f7f2", "#eef6f3"],
    theme: {
      accent: "#35c8bb",
      accentStrong: "#2b7f85",
      text: "#172126",
      muted: "#57656d",
      surface: "#f2f9f7",
      pageStart: "#f7f7f2",
      pageMid: "#eef6f3",
      pageEnd: "#edf4f0",
      glowLeft: "#e9e76d",
      glowRight: "#69e1d5",
      warm: "#f0d882",
    },
  },
  {
    id: "spring",
    label: "春暖",
    description: "绿色和奶油黄更明显，页面更轻快。",
    swatches: ["#45c7b8", "#7ad08f", "#f4df62", "#9de3d4"],
    theme: {
      accent: "#45c7b8",
      accentStrong: "#2e8d82",
      text: "#20313a",
      muted: "#60737b",
      surface: "#f0faf6",
      pageStart: "#fbfaef",
      pageMid: "#eef8ef",
      pageEnd: "#e9f6f0",
      glowLeft: "#f3df59",
      glowRight: "#93e2d0",
      warm: "#f3d96d",
    },
  },
  {
    id: "autumn",
    label: "秋实",
    description: "偏暖、对比更高，适合做内容展示版。",
    swatches: ["#ef7a57", "#c84a36", "#fff1d6", "#ffd278"],
    theme: {
      accent: "#ef7a57",
      accentStrong: "#c84a36",
      text: "#2d221d",
      muted: "#7e665d",
      surface: "#fff7ef",
      pageStart: "#fff3dc",
      pageMid: "#f8eee4",
      pageEnd: "#f3ebe6",
      glowLeft: "#ffd36d",
      glowRight: "#ffc398",
      warm: "#ffbf57",
    },
  },
  {
    id: "night",
    label: "深夜",
    description: "压暗背景和卡片，保留一层青蓝高光。",
    swatches: ["#4e7bff", "#212c87", "#111829", "#4fcfdf"],
    theme: {
      accent: "#4fcfdf",
      accentStrong: "#3462d5",
      text: "#ecf5ff",
      muted: "#a6bfd2",
      surface: "#182234",
      pageStart: "#101727",
      pageMid: "#132133",
      pageEnd: "#17293c",
      glowLeft: "#3858d8",
      glowRight: "#2dd4f3",
      warm: "#78a4ff",
    },
  },
];
const homeLayoutItems = [
  { id: "nav", label: "导航卡片" },
  { id: "latest", label: "最新文章" },
  { id: "collage", label: "首图拼贴" },
  { id: "greeting", label: "中心欢迎" },
  { id: "socials", label: "社交入口" },
  { id: "clock", label: "时钟" },
  { id: "calendar", label: "日历" },
  { id: "music", label: "音乐模块" },
];
const defaultUiSettings = {
  site: {
    brand: siteConfig.brand,
    homeBrand: siteConfig.homeBrand,
    role: siteConfig.role,
    status: siteConfig.status,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    avatarEmoji: "🐱",
  },
  theme: { ...settingsThemePresets[0].theme },
  layout: {
    grid: {
      leftWidth: 280,
      centerWidth: 420,
      rightWidth: 320,
      gap: 20,
    },
    items: {
      nav: { column: "left", order: 1, width: 280, height: 432, offsetX: 0, offsetY: 0, enabled: true },
      latest: { column: "left", order: 2, width: 280, height: 160, offsetX: 0, offsetY: 0, enabled: true },
      collage: { column: "center", order: 1, width: 420, height: 208, offsetX: 0, offsetY: 0, enabled: true },
      greeting: { column: "center", order: 2, width: 420, height: 288, offsetX: 0, offsetY: 0, enabled: true },
      socials: { column: "center", order: 3, width: 420, height: 76, offsetX: 0, offsetY: 0, enabled: true },
      clock: { column: "right", order: 1, width: 320, height: 125, offsetX: 0, offsetY: 0, enabled: true },
      calendar: { column: "right", order: 2, width: 320, height: 288, offsetX: 0, offsetY: 0, enabled: true },
      music: { column: "right", order: 3, width: 320, height: 112, offsetX: 0, offsetY: 0, enabled: true },
    },
  },
};

const state = {
  route: "home",
  category: "All",
  query: "",
  shareFilter: "全部",
  shareQuery: "",
  blogFilter: "全部",
  blogQuery: "",
  writerPreview: false,
  isTransitioning: false,
  pendingRoute: "",
};

const els = {
  main: document.querySelector("main"),
  pageRoot: document.documentElement,
  metaDescription: document.querySelector("meta[name='description']"),
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
  articleManageBar: document.getElementById("article-manage-bar"),
  articleManageHint: document.getElementById("article-manage-hint"),
  articleManageToggle: document.getElementById("article-manage-toggle"),
  articleSelectAll: document.getElementById("article-select-all"),
  articleManageCancel: document.getElementById("article-manage-cancel"),
  articleDeleteSelected: document.getElementById("article-delete-selected"),
  writerStatus: document.getElementById("writer-status"),
  writerImportMd: document.getElementById("writer-import-md"),
  writerPreviewToggle: document.getElementById("writer-preview-toggle"),
  writerPublish: document.getElementById("writer-publish"),
  writerFileInput: document.getElementById("writer-file-input"),
  writerTitle: document.getElementById("writer-title"),
  writerSlug: document.getElementById("writer-slug"),
  writerContent: document.getElementById("writer-content"),
  writerPreview: document.getElementById("writer-preview"),
  writerPreviewCover: document.getElementById("writer-preview-cover"),
  writerPreviewMeta: document.getElementById("writer-preview-meta"),
  writerPreviewTitle: document.getElementById("writer-preview-title"),
  writerPreviewSummary: document.getElementById("writer-preview-summary"),
  writerPreviewContent: document.getElementById("writer-preview-content"),
  writerCoverPreview: document.getElementById("writer-cover-preview"),
  writerCover: document.getElementById("writer-cover"),
  writerSummary: document.getElementById("writer-summary"),
  writerTags: document.getElementById("writer-tags"),
  writerCategory: document.getElementById("writer-category"),
  writerDate: document.getElementById("writer-date"),
  writerHidden: document.getElementById("writer-hidden"),
  writerImages: document.getElementById("writer-images"),
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
  homeSnapshot: document.querySelector(".home-snapshot"),
  homeColumns: {
    left: document.querySelector("[data-home-column='left']"),
    center: document.querySelector("[data-home-column='center']"),
    right: document.querySelector("[data-home-column='right']"),
  },
  homeLayoutItems: Object.fromEntries(
    [...document.querySelectorAll("[data-layout-item]")].map((element) => [element.dataset.layoutItem, element]),
  ),
  settingsToggle: document.getElementById("settings-toggle"),
  settingsPanel: document.getElementById("settings-panel"),
  settingsTabs: document.getElementById("settings-tabs"),
  settingsTabButtons: [...document.querySelectorAll("[data-settings-tab]")],
  settingsViews: [...document.querySelectorAll("[data-settings-view]")],
  settingsPreview: document.getElementById("settings-preview"),
  settingsCancel: document.getElementById("settings-cancel"),
  settingsSave: document.getElementById("settings-save"),
  settingsRandomizeTheme: document.getElementById("settings-randomize-theme"),
  settingsResetLayout: document.getElementById("settings-reset-layout"),
  settingsEnterDrag: document.getElementById("settings-enter-drag"),
  settingsThemeFields: document.getElementById("settings-theme-fields"),
  settingsPresetList: document.getElementById("settings-preset-list"),
  settingsLayoutList: document.getElementById("settings-layout-list"),
  routeSections: [...document.querySelectorAll(".route-section")],
  routeLinks: [...document.querySelectorAll("[data-route-nav]")],
};

let navCardPreviewLink = null;
let navCardIndicatorFrame = 0;
let savedUiSettings = null;
let draftUiSettings = null;
let activeSettingsTab = "site";
let isLayoutDragMode = false;
let layoutDragSession = null;
let customArticles = [];
let writerDraft = null;
let articleManageMode = false;
let selectedArticleIds = new Set();

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function mergeDeep(base, override) {
  if (Array.isArray(base)) return Array.isArray(override) ? override.slice() : base.slice();
  if (base && typeof base === "object") {
    const output = { ...base };
    if (!override || typeof override !== "object") return output;
    Object.keys(override).forEach((key) => {
      output[key] =
        base[key] && typeof base[key] === "object" && !Array.isArray(base[key])
          ? mergeDeep(base[key], override[key])
          : override[key];
    });
    return output;
  }
  return override ?? base;
}

function clampNumber(value, fallback, min, max) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, Math.round(parsed)));
}

function normalizeHex(value, fallback) {
  const source = String(value || "").trim();
  if (/^#[0-9a-f]{6}$/i.test(source)) return source.toLowerCase();
  if (/^[0-9a-f]{6}$/i.test(source)) return `#${source.toLowerCase()}`;
  return fallback;
}

function hexToRgba(hex, alpha) {
  const normalized = normalizeHex(hex, "#000000").slice(1);
  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function getValueByPath(source, path) {
  return path.split(".").reduce((current, key) => current?.[key], source);
}

function setValueByPath(source, path, value) {
  const keys = path.split(".");
  const lastKey = keys.pop();
  let current = source;

  keys.forEach((key) => {
    if (!current[key] || typeof current[key] !== "object") {
      current[key] = {};
    }
    current = current[key];
  });

  current[lastKey] = value;
}

function normalizeUiSettings(candidate) {
  const merged = mergeDeep(defaultUiSettings, candidate);
  const normalized = cloneData(merged);

  normalized.site.brand = String(normalized.site.brand || defaultUiSettings.site.brand).trim() || defaultUiSettings.site.brand;
  normalized.site.homeBrand =
    String(normalized.site.homeBrand || defaultUiSettings.site.homeBrand).trim() || defaultUiSettings.site.homeBrand;
  normalized.site.role = String(normalized.site.role || defaultUiSettings.site.role).trim() || defaultUiSettings.site.role;
  normalized.site.status =
    String(normalized.site.status || defaultUiSettings.site.status).trim() || defaultUiSettings.site.status;
  normalized.site.description =
    String(normalized.site.description || defaultUiSettings.site.description).trim() || defaultUiSettings.site.description;
  normalized.site.email = String(normalized.site.email || defaultUiSettings.site.email).trim() || defaultUiSettings.site.email;
  normalized.site.avatarEmoji =
    Array.from(String(normalized.site.avatarEmoji || defaultUiSettings.site.avatarEmoji).trim())[0] ||
    defaultUiSettings.site.avatarEmoji;

  settingsThemeFields.forEach(({ key }) => {
    normalized.theme[key] = normalizeHex(normalized.theme[key], defaultUiSettings.theme[key]);
  });

  normalized.layout.grid.leftWidth = clampNumber(
    normalized.layout.grid.leftWidth,
    defaultUiSettings.layout.grid.leftWidth,
    200,
    520,
  );
  normalized.layout.grid.centerWidth = clampNumber(
    normalized.layout.grid.centerWidth,
    defaultUiSettings.layout.grid.centerWidth,
    260,
    620,
  );
  normalized.layout.grid.rightWidth = clampNumber(
    normalized.layout.grid.rightWidth,
    defaultUiSettings.layout.grid.rightWidth,
    220,
    520,
  );
  normalized.layout.grid.gap = clampNumber(normalized.layout.grid.gap, defaultUiSettings.layout.grid.gap, 8, 48);

  homeLayoutItems.forEach(({ id }) => {
    const fallback = defaultUiSettings.layout.items[id];
    const item = normalized.layout.items[id] || fallback;
    item.column = ["left", "center", "right"].includes(item.column) ? item.column : fallback.column;
    item.order = clampNumber(item.order, fallback.order, 1, 12);
    item.width = clampNumber(item.width, fallback.width, 140, 620);
    item.height = clampNumber(item.height, fallback.height, 60, 720);
    item.offsetX = clampNumber(item.offsetX, fallback.offsetX, -180, 180);
    item.offsetY = clampNumber(item.offsetY, fallback.offsetY, -180, 180);
    item.enabled = Boolean(item.enabled);
    normalized.layout.items[id] = item;
  });

  return normalized;
}

function loadSavedUiSettings() {
  try {
    const stored = window.localStorage.getItem(SETTINGS_STORAGE_KEY);
    return stored ? normalizeUiSettings(JSON.parse(stored)) : cloneData(defaultUiSettings);
  } catch {
    return cloneData(defaultUiSettings);
  }
}

function persistUiSettings(settings) {
  window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
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

function parseDateValue(value, fallback = new Date()) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date(fallback) : parsed;
}

function formatDateTimeLocalValue(value = new Date()) {
  const date = parseDateValue(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function formatSlashDate(value) {
  const date = parseDateValue(value);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

function formatArchiveDate(value) {
  const date = parseDateValue(value);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}-${day}`;
}

function slugify(value) {
  const normalized = String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized.slice(0, 48);
}

function stripMarkdown(value) {
  return String(value || "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_~`>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function renderMarkdownInline(text) {
  return escapeHtml(text)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function markdownToHtml(markdown) {
  const lines = String(markdown || "").replace(/\r/g, "").split("\n");
  const html = [];
  let inList = false;

  const closeList = () => {
    if (!inList) return;
    html.push("</ul>");
    inList = false;
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      closeList();
      return;
    }

    if (/^###\s+/.test(trimmed)) {
      closeList();
      html.push(`<h4>${renderMarkdownInline(trimmed.replace(/^###\s+/, ""))}</h4>`);
      return;
    }

    if (/^##\s+/.test(trimmed)) {
      closeList();
      html.push(`<h3>${renderMarkdownInline(trimmed.replace(/^##\s+/, ""))}</h3>`);
      return;
    }

    if (/^#\s+/.test(trimmed)) {
      closeList();
      html.push(`<h2>${renderMarkdownInline(trimmed.replace(/^#\s+/, ""))}</h2>`);
      return;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${renderMarkdownInline(trimmed.replace(/^[-*]\s+/, ""))}</li>`);
      return;
    }

    if (/^>\s+/.test(trimmed)) {
      closeList();
      html.push(`<blockquote>${renderMarkdownInline(trimmed.replace(/^>\s+/, ""))}</blockquote>`);
      return;
    }

    closeList();
    html.push(`<p>${renderMarkdownInline(trimmed)}</p>`);
  });

  closeList();
  return html.join("");
}

function createExcerpt(value, maxLength = 72) {
  const text = stripMarkdown(value);
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

function parseTagList(value) {
  return String(value || "")
    .split(/[\n,]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 8);
}

function parseImageList(value) {
  return String(value || "")
    .split(/\n+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 12);
}

function normalizeWriterDraft(candidate = {}) {
  return {
    id: String(candidate.id || "").trim(),
    title: String(candidate.title || "").trim(),
    slug: String(candidate.slug || "").trim().toLowerCase(),
    content: String(candidate.content || ""),
    summary: String(candidate.summary || "").trim(),
    cover: String(candidate.cover || "").trim(),
    tags: parseTagList(Array.isArray(candidate.tags) ? candidate.tags.join(",") : candidate.tags),
    category: writerCategories.includes(candidate.category) ? candidate.category : writerCategories[0],
    date: formatDateTimeLocalValue(candidate.date || new Date()),
    hidden: Boolean(candidate.hidden),
    images: parseImageList(Array.isArray(candidate.images) ? candidate.images.join("\n") : candidate.images),
  };
}

function createEmptyWriterDraft() {
  return normalizeWriterDraft({ date: formatDateTimeLocalValue(new Date()) });
}

function normalizeCustomArticle(candidate = {}) {
  const normalized = normalizeWriterDraft(candidate);
  return {
    ...normalized,
    id: normalized.id || `article-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    slug: normalized.slug || slugify(normalized.title) || `post-${Date.now().toString(36)}`,
    summary: normalized.summary || createExcerpt(normalized.content, 88),
  };
}

function loadCustomArticles() {
  try {
    const stored = window.localStorage.getItem(ARTICLE_STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored)
      .map((article) => normalizeCustomArticle(article))
      .sort((left, right) => parseDateValue(right.date) - parseDateValue(left.date));
  } catch {
    return [];
  }
}

function persistCustomArticles(articles) {
  window.localStorage.setItem(ARTICLE_STORAGE_KEY, JSON.stringify(articles));
}

function loadWriterDraft() {
  try {
    const stored = window.localStorage.getItem(WRITER_DRAFT_STORAGE_KEY);
    return stored ? normalizeWriterDraft(JSON.parse(stored)) : createEmptyWriterDraft();
  } catch {
    return createEmptyWriterDraft();
  }
}

function persistWriterDraft(draft) {
  window.localStorage.setItem(WRITER_DRAFT_STORAGE_KEY, JSON.stringify(draft));
}

function getPublishedCustomArticles() {
  return customArticles
    .filter((article) => !article.hidden)
    .slice()
    .sort((left, right) => parseDateValue(right.date) - parseDateValue(left.date));
}

function getPublishedCustomArticleIds() {
  return getPublishedCustomArticles().map((article) => article.id);
}

function buildArticleArchiveData() {
  const entries = [];

  articleArchive.forEach((yearBlock) => {
    yearBlock.entries.forEach((entry) => {
      entries.push({
        date: entry.date,
        title: entry.title,
        tag: entry.tag,
        year: String(yearBlock.year),
        timestamp: parseDateValue(`${yearBlock.year}-${entry.date}T00:00`).getTime(),
        articleId: "",
        isCustom: false,
      });
    });
  });

  getPublishedCustomArticles().forEach((article) => {
    const date = parseDateValue(article.date);
    entries.push({
      date: formatArchiveDate(date),
      title: article.title,
      tag: article.category || article.tags[0] || "Recent",
      year: String(date.getFullYear()),
      timestamp: date.getTime(),
      articleId: article.id,
      isCustom: true,
    });
  });

  const grouped = entries
    .sort((left, right) => right.timestamp - left.timestamp)
    .reduce((map, entry) => {
      if (!map.has(entry.year)) {
        map.set(entry.year, []);
      }
      map.get(entry.year).push(entry);
      return map;
    }, new Map());

  return [...grouped.entries()]
    .sort((left, right) => Number(right[0]) - Number(left[0]))
    .map(([year, yearEntries]) => ({
      year,
      count: yearEntries.length,
      entries: yearEntries,
    }));
}

function getLatestArticleCardData() {
  const latestCustomArticle = getPublishedCustomArticles()[0];
  if (!latestCustomArticle) {
    return siteConfig.latestUpdates[0];
  }

  return {
    title: latestCustomArticle.title,
    excerpt: latestCustomArticle.summary || createExcerpt(latestCustomArticle.content, 54),
    date: formatSlashDate(latestCustomArticle.date),
    href: "#/articles",
    thumb: (latestCustomArticle.slug || "NEW").replace(/-/g, "").slice(0, 4).toUpperCase() || "NEW",
  };
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
  const latest = getLatestArticleCardData();

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

function applySiteSettings(site) {
  siteConfig.brand = site.brand;
  siteConfig.homeBrand = site.homeBrand;
  siteConfig.role = site.role;
  siteConfig.status = site.status;
  siteConfig.description = site.description;
  siteConfig.contact.email = site.email;

  document.title = `${site.brand} | 作品集与导航站`;
  els.metaDescription?.setAttribute("content", site.description);
  els.pageRoot.style.setProperty("--avatar-emoji", JSON.stringify(site.avatarEmoji));

  renderShell();
}

function applyThemeSettings(theme) {
  els.pageRoot.style.setProperty("--accent", theme.accent);
  els.pageRoot.style.setProperty("--accent-soft", hexToRgba(theme.accent, 0.12));
  els.pageRoot.style.setProperty("--accent-strong", theme.accentStrong);
  els.pageRoot.style.setProperty("--text", theme.text);
  els.pageRoot.style.setProperty("--muted", theme.muted);
  els.pageRoot.style.setProperty("--line", hexToRgba(theme.text, 0.1));
  els.pageRoot.style.setProperty("--bg-elevated", hexToRgba(theme.surface, 0.76));
  els.pageRoot.style.setProperty("--bg-strong", hexToRgba(theme.surface, 0.94));
  els.pageRoot.style.setProperty("--warm", theme.warm);
  els.pageRoot.style.setProperty("--page-grad-start", theme.pageStart);
  els.pageRoot.style.setProperty("--page-grad-mid", theme.pageMid);
  els.pageRoot.style.setProperty("--page-grad-end", theme.pageEnd);
  els.pageRoot.style.setProperty("--glow-left", hexToRgba(theme.glowLeft, 0.3));
  els.pageRoot.style.setProperty("--glow-right", hexToRgba(theme.glowRight, 0.24));
  els.pageRoot.style.setProperty("--home-card-surface", hexToRgba(theme.surface, 0.56));
}

function applyHomeLayoutSettings(layout) {
  if (!els.homeSnapshot) return;

  els.homeSnapshot.style.setProperty("--home-col-left", `${layout.grid.leftWidth}px`);
  els.homeSnapshot.style.setProperty("--home-col-center", `${layout.grid.centerWidth}px`);
  els.homeSnapshot.style.setProperty("--home-col-right", `${layout.grid.rightWidth}px`);
  els.homeSnapshot.style.setProperty("--home-gap", `${layout.grid.gap}px`);

  const grouped = { left: [], center: [], right: [] };

  homeLayoutItems.forEach(({ id }) => {
    const element = els.homeLayoutItems[id];
    const config = layout.items[id];
    if (!element || !config) return;

    element.hidden = !config.enabled;
    element.style.width = `${config.width}px`;
    element.style.maxWidth = "100%";
    element.style.minHeight = `${config.height}px`;
    element.style.transform = `translate(${config.offsetX}px, ${config.offsetY}px)`;
    element.style.order = String(config.order);

    grouped[config.column].push({ element, order: config.order });
  });

  Object.entries(grouped).forEach(([column, items]) => {
    const container = els.homeColumns[column];
    if (!container) return;

    items
      .sort((left, right) => left.order - right.order)
      .forEach(({ element }) => {
        container.appendChild(element);
      });
  });

  queueNavCardIndicatorUpdate();
}

function applyUiSettings(settings, { persist = false } = {}) {
  const normalized = normalizeUiSettings(settings);
  applySiteSettings(normalized.site);
  applyThemeSettings(normalized.theme);
  applyHomeLayoutSettings(normalized.layout);

  if (persist) {
    savedUiSettings = cloneData(normalized);
    persistUiSettings(savedUiSettings);
  }

  return normalized;
}

function setActiveSettingsTab(tab) {
  activeSettingsTab = tab;
  els.settingsTabButtons.forEach((button) => {
    const active = button.dataset.settingsTab === tab;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  els.settingsViews.forEach((view) => {
    view.classList.toggle("active", view.dataset.settingsView === tab);
  });
}

function syncStaticSettingsInputs() {
  if (!draftUiSettings || !els.settingsPanel) return;

  els.settingsPanel.querySelectorAll("[data-settings-field]").forEach((input) => {
    if (!(input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement || input instanceof HTMLSelectElement)) {
      return;
    }

    if (input.closest("#settings-theme-fields") || input.closest("#settings-layout-list")) {
      return;
    }

    const value = getValueByPath(draftUiSettings, input.dataset.settingsField);
    if (input.type === "checkbox") {
      input.checked = Boolean(value);
    } else {
      input.value = value ?? "";
    }
  });
}

function renderThemeFields() {
  if (!draftUiSettings || !els.settingsThemeFields) return;

  els.settingsThemeFields.innerHTML = settingsThemeFields
    .map(({ key, label }) => {
      const value = draftUiSettings.theme[key];
      return `
        <label class="settings-color-card">
          <div class="settings-color-card__top">
            <div>
              <strong>${escapeHtml(label)}</strong>
              <code>${escapeHtml(value)}</code>
            </div>
            <span class="settings-color-card__swatch" style="background:${escapeHtml(value)}"></span>
          </div>
          <input class="settings-color-input" data-settings-field="theme.${escapeHtml(key)}" type="color" value="${escapeHtml(value)}" />
        </label>
      `;
    })
    .join("");
}

function renderThemePresets() {
  if (!els.settingsPresetList) return;

  els.settingsPresetList.innerHTML = settingsThemePresets
    .map(
      (preset) => `
        <button class="settings-preset" data-theme-preset="${escapeHtml(preset.id)}" type="button">
          <span class="settings-preset__swatches">
            ${preset.swatches.map((swatch) => `<span style="background:${escapeHtml(swatch)}"></span>`).join("")}
          </span>
          <span class="settings-preset__meta">
            <strong>${escapeHtml(preset.label)}</strong>
            <small>${escapeHtml(preset.description)}</small>
          </span>
        </button>
      `,
    )
    .join("");
}

function renderLayoutEditor() {
  if (!draftUiSettings || !els.settingsLayoutList) return;

  els.settingsLayoutList.innerHTML = homeLayoutItems
    .map(({ id, label }) => {
      const item = draftUiSettings.layout.items[id];
      return `
        <div class="layout-row">
          <span class="layout-row__title">${escapeHtml(label)}</span>
          <select class="layout-select" data-settings-field="layout.items.${escapeHtml(id)}.column">
            <option value="left" ${item.column === "left" ? "selected" : ""}>左列</option>
            <option value="center" ${item.column === "center" ? "selected" : ""}>中列</option>
            <option value="right" ${item.column === "right" ? "selected" : ""}>右列</option>
          </select>
          <input class="layout-input" data-settings-field="layout.items.${escapeHtml(id)}.order" type="number" min="1" max="12" value="${escapeHtml(String(item.order))}" />
          <input class="layout-input" data-settings-field="layout.items.${escapeHtml(id)}.width" type="number" min="140" max="620" value="${escapeHtml(String(item.width))}" />
          <input class="layout-input" data-settings-field="layout.items.${escapeHtml(id)}.height" type="number" min="60" max="720" value="${escapeHtml(String(item.height))}" />
          <input class="layout-input" data-settings-field="layout.items.${escapeHtml(id)}.offsetX" type="number" min="-180" max="180" value="${escapeHtml(String(item.offsetX))}" />
          <input class="layout-input" data-settings-field="layout.items.${escapeHtml(id)}.offsetY" type="number" min="-180" max="180" value="${escapeHtml(String(item.offsetY))}" />
          <label class="layout-toggle">
            <input data-settings-field="layout.items.${escapeHtml(id)}.enabled" type="checkbox" ${item.enabled ? "checked" : ""} />
          </label>
        </div>
      `;
    })
    .join("");
}

function finishLayoutDrag() {
  if (!layoutDragSession) return;

  const { element } = layoutDragSession;
  element.classList.remove("is-layout-dragging");
  layoutDragSession = null;
}

function beginLayoutDrag(event) {
  if (!isLayoutDragMode || state.route !== "home" || !draftUiSettings) return;
  if (event.button !== 0) return;
  if (!(event.target instanceof Element)) return;

  const target = event.target.closest("[data-layout-item]");
  if (!(target instanceof HTMLElement) || !els.homeSnapshot?.contains(target) || target.hidden) return;

  const itemId = target.dataset.layoutItem;
  const item = draftUiSettings.layout.items[itemId];
  if (!item || !item.enabled) return;

  finishLayoutDrag();
  layoutDragSession = {
    itemId,
    element: target,
    startX: event.clientX,
    startY: event.clientY,
    originX: item.offsetX,
    originY: item.offsetY,
  };

  target.classList.add("is-layout-dragging");
  event.preventDefault();
}

function handleLayoutDragMove(event) {
  if (!layoutDragSession || !draftUiSettings) return;

  const deltaX = Math.round(event.clientX - layoutDragSession.startX);
  const deltaY = Math.round(event.clientY - layoutDragSession.startY);
  const item = draftUiSettings.layout.items[layoutDragSession.itemId];
  if (!item) return;

  const nextX = Math.max(-180, Math.min(180, layoutDragSession.originX + deltaX));
  const nextY = Math.max(-180, Math.min(180, layoutDragSession.originY + deltaY));

  item.offsetX = nextX;
  item.offsetY = nextY;
  layoutDragSession.element.style.transform = `translate(${nextX}px, ${nextY}px)`;
}

function resetLayoutOffsets() {
  if (!draftUiSettings) return;

  homeLayoutItems.forEach(({ id }) => {
    draftUiSettings.layout.items[id].offsetX = 0;
    draftUiSettings.layout.items[id].offsetY = 0;
  });

  draftUiSettings = applyUiSettings(draftUiSettings);
  if (!els.settingsPanel?.hidden) {
    renderLayoutEditor();
  }
}

function openSettingsPanel({ reuseDraft = false, tab = "site" } = {}) {
  if (!reuseDraft || !draftUiSettings) {
    draftUiSettings = cloneData(savedUiSettings);
  }
  activeSettingsTab = tab;
  renderSettingsPanel();
  els.settingsPanel.hidden = false;
  document.body.classList.add("settings-open");
  syncSettingsToggleState();
}

function enterLayoutDragMode() {
  if (!draftUiSettings) {
    draftUiSettings = cloneData(savedUiSettings);
  }

  draftUiSettings = applyUiSettings(draftUiSettings);
  finishLayoutDrag();
  clearNavCardPreview();
  closeSettingsPanel({ restoreSaved: false });
  isLayoutDragMode = true;
  document.body.classList.add("drag-layout-mode");
  syncSettingsToggleState();
}

function exitLayoutDragMode({ reopenSettings = false, restoreSaved = false } = {}) {
  finishLayoutDrag();
  isLayoutDragMode = false;
  document.body.classList.remove("drag-layout-mode");

  if (restoreSaved && savedUiSettings) {
    draftUiSettings = cloneData(savedUiSettings);
    applyUiSettings(savedUiSettings);
  } else if (draftUiSettings) {
    draftUiSettings = applyUiSettings(draftUiSettings);
  }

  if (reopenSettings) {
    openSettingsPanel({ reuseDraft: true, tab: "layout" });
    return;
  }

  syncSettingsToggleState();
}

function renderSettingsPanel() {
  syncStaticSettingsInputs();
  renderThemeFields();
  renderThemePresets();
  renderLayoutEditor();
  setActiveSettingsTab(activeSettingsTab);
}

function closeSettingsPanel({ restoreSaved = true } = {}) {
  if (restoreSaved && savedUiSettings) {
    applyUiSettings(savedUiSettings);
  }

  if (els.settingsPanel) {
    els.settingsPanel.hidden = true;
  }
  document.body.classList.remove("settings-open");
  syncSettingsToggleState();
}

function syncSettingsToggleState() {
  if (!els.settingsToggle) return;

  const isPanelOpen = Boolean(els.settingsPanel && !els.settingsPanel.hidden);
  const isDragExit = isLayoutDragMode;
  const label = isDragExit ? "结束拖拽并返回布局设置" : "打开网站设置";
  const title = isDragExit ? "结束拖拽" : "网站设置";

  els.settingsToggle.setAttribute("aria-expanded", isPanelOpen ? "true" : "false");
  els.settingsToggle.setAttribute("aria-label", label);
  els.settingsToggle.setAttribute("title", title);
  els.settingsToggle.dataset.mode = isDragExit ? "drag-exit" : "settings";
}

function updateDraftSetting(field, rawValue, inputType = "text") {
  if (!draftUiSettings) return;

  let value = rawValue;
  if (inputType === "number") {
    value = Number(rawValue);
  } else if (inputType === "checkbox") {
    value = Boolean(rawValue);
  }

  setValueByPath(draftUiSettings, field, value);
  draftUiSettings = normalizeUiSettings(draftUiSettings);
}

function updateWriterStatus(message = "", tone = "success") {
  if (!els.writerStatus) return;

  if (!message) {
    els.writerStatus.hidden = true;
    els.writerStatus.textContent = "";
    els.writerStatus.removeAttribute("data-tone");
    return;
  }

  els.writerStatus.hidden = false;
  els.writerStatus.dataset.tone = tone;
  els.writerStatus.textContent = message;
}

function renderWriterComposer({ syncFields = true } = {}) {
  if (!writerDraft) return;

  if (syncFields) {
    if (els.writerTitle) els.writerTitle.value = writerDraft.title;
    if (els.writerSlug) els.writerSlug.value = writerDraft.slug;
    if (els.writerContent) els.writerContent.value = writerDraft.content;
    if (els.writerSummary) els.writerSummary.value = writerDraft.summary;
    if (els.writerTags) els.writerTags.value = writerDraft.tags.join(", ");
    if (els.writerCategory) els.writerCategory.value = writerDraft.category;
    if (els.writerDate) els.writerDate.value = writerDraft.date;
    if (els.writerHidden) els.writerHidden.checked = writerDraft.hidden;
    if (els.writerCover) els.writerCover.value = writerDraft.cover;
    if (els.writerImages) els.writerImages.value = writerDraft.images.join("\n");
  }

  if (els.writerCoverPreview) {
    const hasCover = Boolean(writerDraft.cover);
    els.writerCoverPreview.classList.toggle("has-image", hasCover);
    els.writerCoverPreview.style.backgroundImage = hasCover ? `url("${writerDraft.cover}")` : "none";
    els.writerCoverPreview.innerHTML = hasCover ? "" : "<span>+</span>";
  }

  if (els.writerContent) {
    els.writerContent.hidden = state.writerPreview;
  }

  if (els.writerPreview) {
    els.writerPreview.hidden = !state.writerPreview;
  }

  if (els.writerPreviewToggle) {
    els.writerPreviewToggle.textContent = state.writerPreview ? "返回编辑" : "预览";
  }

  if (els.writerPreviewTitle) {
    els.writerPreviewTitle.textContent = writerDraft.title || "未命名文章";
  }

  if (els.writerPreviewMeta) {
    const metaParts = [formatSlashDate(writerDraft.date), writerDraft.category];
    if (writerDraft.tags.length) {
      metaParts.push(writerDraft.tags.join(" · "));
    }
    els.writerPreviewMeta.textContent = metaParts.join(" / ");
  }

  if (els.writerPreviewSummary) {
    els.writerPreviewSummary.textContent =
      writerDraft.summary || createExcerpt(writerDraft.content, 120) || "这篇文章还没有摘要。";
  }

  if (els.writerPreviewCover) {
    const hasPreviewCover = Boolean(writerDraft.cover);
    els.writerPreviewCover.hidden = !hasPreviewCover;
    els.writerPreviewCover.style.backgroundImage = hasPreviewCover ? `url("${writerDraft.cover}")` : "none";
  }

  if (els.writerPreviewContent) {
    const gallery =
      writerDraft.images.length > 0
        ? `
          <div class="writer-preview-gallery">
            ${writerDraft.images
              .map(
                (image) => `
                  <div class="writer-preview-gallery__item">
                    <img src="${escapeHtml(image)}" alt="" loading="lazy" />
                  </div>
                `,
              )
              .join("")}
          </div>
        `
        : "";

    els.writerPreviewContent.innerHTML =
      gallery +
      markdownToHtml(writerDraft.content || "还没有正文内容，先在左侧写点东西吧。");
  }
}

function updateWriterDraftField(field, rawValue, inputType = "text") {
  if (!writerDraft) return;

  const shouldSyncSlug = field === "title" && !String(writerDraft.slug || "").trim();
  const value = inputType === "checkbox" ? Boolean(rawValue) : rawValue;

  writerDraft = normalizeWriterDraft({
    ...writerDraft,
    [field]: value,
    ...(shouldSyncSlug ? { slug: slugify(String(rawValue || "")) } : {}),
  });

  persistWriterDraft(writerDraft);
  updateWriterStatus("");
  renderWriterComposer({ syncFields: false });

  if (shouldSyncSlug && els.writerSlug) {
    els.writerSlug.value = writerDraft.slug;
  }
}

function importMarkdownIntoWriter(markdownText) {
  const content = String(markdownText || "");
  const headingMatch = content.match(/^#\s+(.+)$/m);
  const importedTitle = headingMatch?.[1]?.trim() || "";

  writerDraft = normalizeWriterDraft({
    ...writerDraft,
    title: writerDraft.title || importedTitle,
    slug: writerDraft.slug || slugify(importedTitle),
    content,
    summary: writerDraft.summary || createExcerpt(content, 120),
  });

  persistWriterDraft(writerDraft);
  renderWriterComposer();
  updateWriterStatus("Markdown 已导入，可以继续整理后再发布。", "success");
}

async function handleWriterFileImport(file) {
  if (!file) return;

  const content = await file.text();
  importMarkdownIntoWriter(content);
}

function publishWriterArticle() {
  if (!writerDraft?.title.trim()) {
    updateWriterStatus("先写一个标题，再发布到近期文章。", "error");
    return;
  }

  if (!writerDraft.content.trim()) {
    updateWriterStatus("正文还是空的，先补一点内容吧。", "error");
    return;
  }

  const article = normalizeCustomArticle({
    ...writerDraft,
    slug: writerDraft.slug || slugify(writerDraft.title),
  });

  customArticles = customArticles.filter((item) => item.id !== article.id);
  customArticles.unshift(article);
  customArticles.sort((left, right) => parseDateValue(right.date) - parseDateValue(left.date));
  persistCustomArticles(customArticles);

  renderShell();
  renderArticles();

  state.writerPreview = false;
  writerDraft = createEmptyWriterDraft();
  persistWriterDraft(writerDraft);
  renderWriterComposer();

  updateWriterStatus(
    article.hidden ? "文章已保存为隐藏稿件，暂时不会出现在近期文章里。" : "文章已发布到近期文章，首页和文章归档都已刷新。",
    "success",
  );
}

function renderArticles() {
  els.articleArchive.innerHTML = buildArticleArchiveData()
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

function syncArticleManageState() {
  const validIds = new Set(getPublishedCustomArticleIds());
  selectedArticleIds = new Set([...selectedArticleIds].filter((articleId) => validIds.has(articleId)));

  if (!validIds.size) {
    articleManageMode = false;
  }
}

function renderArticleManageBar() {
  syncArticleManageState();
  if (els.articleManageBar) {
    els.articleManageBar.hidden = true;
  }
  updateTopActionButton();
}

function updateTopActionButton() {
  if (!els.copyEmail) return;

  const isArticleRoute = state.route === "articles";
  const totalCustomArticles = getPublishedCustomArticleIds().length;
  const selectedCount = selectedArticleIds.size;
  const isManageDanger = isArticleRoute && articleManageMode && selectedCount > 0;
  const isManageActive = isArticleRoute && articleManageMode && selectedCount === 0;

  els.copyEmail.classList.toggle("is-manage-active", isManageActive);
  els.copyEmail.classList.toggle("is-manage-danger", isManageDanger);
  els.copyEmail.disabled = false;

  if (!isArticleRoute) {
    els.copyEmail.textContent = "复制邮箱";
    els.copyEmail.setAttribute("aria-label", "复制邮箱");
    els.copyEmail.setAttribute("title", "复制邮箱");
    return;
  }

  if (!totalCustomArticles) {
    els.copyEmail.textContent = "文章管理";
    els.copyEmail.disabled = true;
    els.copyEmail.setAttribute("aria-label", "暂无可管理文章");
    els.copyEmail.setAttribute("title", "暂无可管理文章");
    return;
  }

  if (isManageDanger) {
    els.copyEmail.textContent = `删除选中 (${selectedCount})`;
    els.copyEmail.setAttribute("aria-label", `删除选中的 ${selectedCount} 篇文章`);
    els.copyEmail.setAttribute("title", `删除选中的 ${selectedCount} 篇文章`);
    return;
  }

  if (isManageActive) {
    els.copyEmail.textContent = "完成管理";
    els.copyEmail.setAttribute("aria-label", "退出文章管理");
    els.copyEmail.setAttribute("title", "退出文章管理");
    return;
  }

  els.copyEmail.textContent = "文章管理";
  els.copyEmail.setAttribute("aria-label", "进入文章管理");
  els.copyEmail.setAttribute("title", "进入文章管理");
}

function handleTopActionButtonClick() {
  if (state.route !== "articles") {
    copyEmail();
    return;
  }

  if (!getPublishedCustomArticleIds().length) return;

  if (articleManageMode && selectedArticleIds.size > 0) {
    deleteCustomArticles([...selectedArticleIds]);
    return;
  }

  if (articleManageMode) {
    exitArticleManageMode();
    return;
  }

  enterArticleManageMode();
}

function enterArticleManageMode() {
  if (!getPublishedCustomArticleIds().length) return;
  articleManageMode = true;
  renderArticles();
}

function exitArticleManageMode() {
  articleManageMode = false;
  selectedArticleIds = new Set();
  renderArticles();
}

function toggleAllArticleSelections() {
  const ids = getPublishedCustomArticleIds();
  if (!ids.length) return;

  const shouldClear = ids.every((articleId) => selectedArticleIds.has(articleId));
  selectedArticleIds = shouldClear ? new Set() : new Set(ids);
  renderArticles();
}

function toggleArticleSelection(articleId, isSelected) {
  const validIds = new Set(getPublishedCustomArticleIds());
  if (!validIds.has(articleId)) return;

  if (isSelected) {
    selectedArticleIds.add(articleId);
  } else {
    selectedArticleIds.delete(articleId);
  }

  renderArticleManageBar();
}

function deleteCustomArticles(articleIds) {
  const publishedIds = new Set(getPublishedCustomArticleIds());
  const idsToDelete = [...new Set(articleIds)].filter((articleId) => publishedIds.has(articleId));
  if (!idsToDelete.length) return;

  const message =
    idsToDelete.length === 1
      ? "删除这篇近期文章后将无法恢复，继续吗？"
      : `确定删除选中的 ${idsToDelete.length} 篇近期文章吗？此操作无法恢复。`;

  if (!window.confirm(message)) return;

  const idSet = new Set(idsToDelete);
  customArticles = customArticles.filter((article) => !idSet.has(article.id));
  persistCustomArticles(customArticles);

  selectedArticleIds = new Set([...selectedArticleIds].filter((articleId) => !idSet.has(articleId)));
  if (!getPublishedCustomArticleIds().length) {
    articleManageMode = false;
  }

  renderShell();
  renderArticles();
}

function renderArticles() {
  syncArticleManageState();
  renderArticleManageBar();

  els.articleArchive.innerHTML = buildArticleArchiveData()
    .map(
      (yearBlock) => `
        <article class="panel archive-year-card">
          <div class="archive-year-card__header">
            <h3>${escapeHtml(yearBlock.year)}年</h3>
            <p>${escapeHtml(String(yearBlock.count))} 篇文章</p>
          </div>
          <div class="archive-entry-list">
            ${yearBlock.entries
              .map((entry) => {
                const isSelected = entry.isCustom && selectedArticleIds.has(entry.articleId);
                const selectControl = articleManageMode
                  ? entry.isCustom
                    ? `
                        <label class="archive-entry__select">
                          <input
                            class="archive-entry__checkbox"
                            type="checkbox"
                            data-article-select="${escapeHtml(entry.articleId)}"
                            aria-label="选择文章 ${escapeHtml(entry.title)}"
                            ${isSelected ? "checked" : ""}
                          />
                        </label>
                      `
                    : `<span class="archive-entry__select-spacer" aria-hidden="true"></span>`
                  : "";
                const deleteButton =
                  articleManageMode && entry.isCustom
                    ? `<button class="archive-entry__delete" type="button" data-article-delete="${escapeHtml(entry.articleId)}">删除</button>`
                    : "";

                return `
                  <article class="archive-entry${articleManageMode ? " archive-entry--manage" : ""}">
                    ${selectControl}
                    <span class="archive-entry__date">${escapeHtml(entry.date)}</span>
                    <span class="archive-entry__dot" aria-hidden="true"></span>
                    <span class="archive-entry__title">${escapeHtml(entry.title)}</span>
                    <span class="archive-entry__tag">#${escapeHtml(entry.tag)}</span>
                    ${deleteButton}
                  </article>
                `;
              })
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
  if (navCardIndicatorFrame) {
    window.cancelAnimationFrame(navCardIndicatorFrame);
  }

  navCardIndicatorFrame = window.requestAnimationFrame(() => {
    navCardIndicatorFrame = 0;
    updateNavCardIndicator();
  });
}

function syncNavCardPreviewState() {
  if (!els.navCardLinks) return;

  els.navCardLinks.classList.toggle("is-previewing", Boolean(navCardPreviewLink));
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
  if (state.route === "articles") {
    renderArticleManageBar();
  } else {
    const shouldResetArticleManage = articleManageMode || selectedArticleIds.size > 0;
    articleManageMode = false;
    selectedArticleIds = new Set();
    if (shouldResetArticleManage) {
      renderArticles();
    } else {
      updateTopActionButton();
    }
  }
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

  if (isLayoutDragMode && nextRoute !== "home") {
    exitLayoutDragMode({ reopenSettings: false });
  }

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
  const preserveNavCardIndicator = state.route === "home" && nextRoute !== "home";
  if (!preserveNavCardIndicator) {
    clearNavCardPreview();
  }

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

  if (preserveNavCardIndicator) {
    clearNavCardPreview();
  }

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

  els.copyEmail.addEventListener("click", handleTopActionButtonClick);
  els.articleManageToggle?.addEventListener("click", () => {
    enterArticleManageMode();
  });
  els.articleSelectAll?.addEventListener("click", () => {
    toggleAllArticleSelections();
  });
  els.articleManageCancel?.addEventListener("click", () => {
    exitArticleManageMode();
  });
  els.articleDeleteSelected?.addEventListener("click", () => {
    deleteCustomArticles([...selectedArticleIds]);
  });
  els.articleArchive?.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    const articleId = target.dataset.articleSelect;
    if (!articleId) return;

    toggleArticleSelection(articleId, target.checked);
  });
  els.articleArchive?.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    const deleteTarget = event.target.closest("[data-article-delete]");
    if (!deleteTarget) return;

    deleteCustomArticles([deleteTarget.dataset.articleDelete]);
  });
  els.writerImportMd?.addEventListener("click", () => {
    els.writerFileInput?.click();
  });
  els.writerPreviewToggle?.addEventListener("click", () => {
    state.writerPreview = !state.writerPreview;
    renderWriterComposer();
  });
  els.writerPublish?.addEventListener("click", () => {
    publishWriterArticle();
  });
  els.writerFileInput?.addEventListener("change", async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    const file = target.files?.[0];
    if (!file) return;

    await handleWriterFileImport(file);
    target.value = "";
  });
  els.writerTitle?.addEventListener("input", (event) => {
    updateWriterDraftField("title", event.target.value);
  });
  els.writerSlug?.addEventListener("input", (event) => {
    updateWriterDraftField("slug", event.target.value);
  });
  els.writerContent?.addEventListener("input", (event) => {
    updateWriterDraftField("content", event.target.value);
  });
  els.writerSummary?.addEventListener("input", (event) => {
    updateWriterDraftField("summary", event.target.value);
  });
  els.writerTags?.addEventListener("input", (event) => {
    updateWriterDraftField("tags", event.target.value);
  });
  els.writerCategory?.addEventListener("change", (event) => {
    updateWriterDraftField("category", event.target.value);
  });
  els.writerDate?.addEventListener("change", (event) => {
    updateWriterDraftField("date", event.target.value);
  });
  els.writerHidden?.addEventListener("change", (event) => {
    updateWriterDraftField("hidden", event.target.checked, "checkbox");
  });
  els.writerCover?.addEventListener("input", (event) => {
    updateWriterDraftField("cover", event.target.value);
  });
  els.writerImages?.addEventListener("input", (event) => {
    updateWriterDraftField("images", event.target.value);
  });
  els.settingsToggle?.addEventListener("click", () => {
    if (isLayoutDragMode) {
      exitLayoutDragMode({ reopenSettings: true });
      return;
    }
    if (els.settingsPanel?.hidden) {
      openSettingsPanel();
      return;
    }
    closeSettingsPanel();
  });
  els.settingsTabs?.addEventListener("click", (event) => {
    const target = event.target.closest("[data-settings-tab]");
    if (!target) return;
    setActiveSettingsTab(target.dataset.settingsTab);
  });
  els.settingsPreview?.addEventListener("click", () => {
    draftUiSettings = normalizeUiSettings(draftUiSettings);
    applyUiSettings(draftUiSettings);
  });
  els.settingsCancel?.addEventListener("click", () => {
    closeSettingsPanel();
  });
  els.settingsSave?.addEventListener("click", () => {
    draftUiSettings = applyUiSettings(draftUiSettings, { persist: true });
    closeSettingsPanel({ restoreSaved: false });
  });
  els.settingsRandomizeTheme?.addEventListener("click", () => {
    const preset =
      settingsThemePresets[Math.floor(Math.random() * settingsThemePresets.length)] ?? settingsThemePresets[0];
    draftUiSettings.theme = cloneData(preset.theme);
    renderThemeFields();
  });
  els.settingsResetLayout?.addEventListener("click", () => {
    draftUiSettings.layout = cloneData(defaultUiSettings.layout);
    syncStaticSettingsInputs();
    renderLayoutEditor();
  });
  els.settingsEnterDrag?.addEventListener("click", () => {
    enterLayoutDragMode();
  });

  els.settingsPanel?.addEventListener("click", (event) => {
    const dismissTarget = event.target.closest("[data-settings-dismiss]");
    if (dismissTarget) {
      closeSettingsPanel();
      return;
    }

    const presetTarget = event.target.closest("[data-theme-preset]");
    if (!presetTarget) return;

    const preset = settingsThemePresets.find((item) => item.id === presetTarget.dataset.themePreset);
    if (!preset) return;

    draftUiSettings.theme = cloneData(preset.theme);
    renderThemeFields();
  });

  const handleSettingsFieldEvent = (event, shouldRefresh) => {
    const target = event.target;
    if (
      !(target instanceof HTMLInputElement) &&
      !(target instanceof HTMLTextAreaElement) &&
      !(target instanceof HTMLSelectElement)
    ) {
      return;
    }

    const field = target.dataset.settingsField;
    if (!field) return;

    const rawValue = target.type === "checkbox" ? target.checked : target.value;
    updateDraftSetting(field, rawValue, target.type);

    if (!shouldRefresh) return;
    if (field.startsWith("theme.")) {
      renderThemeFields();
      return;
    }
    if (field.startsWith("layout.")) {
      syncStaticSettingsInputs();
      renderLayoutEditor();
    }
  };

  els.settingsPanel?.addEventListener("input", (event) => handleSettingsFieldEvent(event, false));
  els.settingsPanel?.addEventListener("change", (event) => handleSettingsFieldEvent(event, true));
  els.homeSnapshot?.addEventListener("pointerdown", beginLayoutDrag);
  window.addEventListener("pointermove", handleLayoutDragMove);
  window.addEventListener("pointerup", finishLayoutDrag);
  window.addEventListener("pointercancel", finishLayoutDrag);
  window.addEventListener("blur", finishLayoutDrag);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isLayoutDragMode) {
      event.preventDefault();
      exitLayoutDragMode({ reopenSettings: true });
      return;
    }
    if (event.key === "Escape" && !els.settingsPanel?.hidden) {
      closeSettingsPanel();
    }
  });
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
    if (isLayoutDragMode && route !== "home") {
      exitLayoutDragMode({ reopenSettings: false });
    }
    if (els.navCardLinks?.contains(routeTarget)) {
      setNavCardPreview(routeTarget);
    }
    transitionToRoute(route, { syncLocation: true });
  });
}

function init() {
  if (!window.location.hash) {
    syncHistory("home", true);
  }

  state.route = getRouteFromHash();
  savedUiSettings = loadSavedUiSettings();
  draftUiSettings = cloneData(savedUiSettings);
  customArticles = loadCustomArticles();
  writerDraft = loadWriterDraft();

  applyUiSettings(savedUiSettings);
  renderArticles();
  renderProjectFilters();
  renderProjects();
  renderShareFilters();
  renderShareResources();
  renderBlogFilters();
  renderBlogLinks();
  renderTimeline();
  renderWriterComposer();
  updateRouteUi();
  renderSettingsPanel();
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
