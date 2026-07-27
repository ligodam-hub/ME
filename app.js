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
      href: "#/explore",
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
      href: "#/notes",
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
    href: "#/projects",
    externalLabel: "Current build",
    featured: true,
  },
  {
    title: "Design Archive",
    category: "Frontend",
    year: "2026",
    status: "Concept",
    summary:
      "A visual collection of interaction experiments, layout ideas, and UI references worth resurfacing when a page needs more character.",
    tags: ["ui", "motion", "design-system"],
    href: "#/explore",
    externalLabel: "See exploration hub",
    featured: true,
  },
  {
    title: "Project Atlas",
    category: "Engineering",
    year: "2025",
    status: "Ongoing",
    summary:
      "A clearer index of shipped work that explains what each project is, why it exists, and where to go next.",
    tags: ["case-study", "engineering", "portfolio"],
    href: "#/about",
    externalLabel: "Read process",
    featured: false,
  },
  {
    title: "Knowledge Base Beta",
    category: "Writing",
    year: "2026",
    status: "Queued",
    summary:
      "A staged notes system for essays, learning trails, and reference pages once the shell of the site feels stable.",
    tags: ["notes", "writing", "knowledge-base"],
    href: "#/notes",
    externalLabel: "View roadmap",
    featured: false,
  },
  {
    title: "Useful Links Engine",
    category: "Tools",
    year: "2026",
    status: "Running",
    summary:
      "A curated layer over raw bookmarks so links are grouped by intent and remain useful under pressure.",
    tags: ["resources", "curation", "workflow"],
    href: "#/explore",
    externalLabel: "Browse links",
    featured: true,
  },
  {
    title: "Public Writing Funnel",
    category: "Strategy",
    year: "2026",
    status: "Planning",
    summary:
      "A content flow that ties projects, notes, and small updates together without making the homepage feel crowded.",
    tags: ["content", "strategy", "growth"],
    href: "#/notes",
    externalLabel: "Open notes plan",
    featured: false,
  },
];

const exploreGroups = [
  {
    title: "Ship",
    description: "Launch pages, demos, and the pieces that make the site feel active.",
    links: [
      { label: "Selected Projects", href: "#/projects" },
      { label: "Featured Pick", href: "#/home" },
      { label: "Story & Process", href: "#/about" },
    ],
  },
  {
    title: "Collect",
    description: "Keep useful inputs visible so the future notes archive has strong raw material.",
    links: [
      { label: "Notes Roadmap", href: "#/notes" },
      { label: "Reserved Topics", href: "#/notes" },
      { label: "Navigation Logic", href: "#/about" },
    ],
  },
  {
    title: "Connect",
    description: "Make it easy for curious visitors to know where to go next.",
    links: [
      { label: "Copy Contact Email", href: "#/about", action: "copy-email" },
      { label: "Project Overview", href: "#/projects" },
      { label: "Site Home", href: "#/home" },
    ],
  },
];

const roadmap = [
  {
    step: "Phase 1",
    state: "Now",
    copy: "Use the notes area as a clean placeholder with topic scaffolding and a visible plan.",
  },
  {
    step: "Phase 2",
    state: "Next",
    copy: "Add category pages for essays, learning trails, and project retrospectives.",
  },
  {
    step: "Phase 3",
    state: "Later",
    copy: "Introduce stronger indexing, recommendation logic, and cross-links back to projects.",
  },
];

const noteTopics = [
  "AI & tooling",
  "Frontend systems",
  "Product thinking",
  "Writing process",
  "Experiments",
  "Bookmarks worth keeping",
];

const timeline = [
  {
    date: "July 27, 2026",
    title: "Portfolio-first structure set",
    copy: "The site is intentionally useful before the long-form archive is ready.",
  },
  {
    date: "Next step",
    title: "Swap placeholder content for real case studies",
    copy: "Projects should become richer before the notes area becomes deeper.",
  },
  {
    date: "Future phase",
    title: "Connect knowledge base and portfolio",
    copy: "Projects, essays, and navigation links should reinforce each other instead of living as separate pages.",
  },
];

const state = {
  route: "home",
  category: "All",
  query: "",
  spotlightIndex: 0,
};

const categories = ["All", ...new Set(projects.map((project) => project.category))];
const calendarWeekLabels = [
  "\u4e00",
  "\u4e8c",
  "\u4e09",
  "\u56db",
  "\u4e94",
  "\u516d",
  "\u65e5",
];

const els = {
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
  spotlightPanel: document.getElementById("spotlight-panel"),
  projectFilters: document.getElementById("project-filters"),
  projectSearch: document.getElementById("project-search"),
  projectGrid: document.getElementById("project-grid"),
  projectCount: document.getElementById("project-count"),
  projectEmpty: document.getElementById("project-empty"),
  exploreGroups: document.getElementById("explore-groups"),
  roadmapList: document.getElementById("roadmap-list"),
  noteTopics: document.getElementById("note-topics"),
  timelineList: document.getElementById("timeline-list"),
  profileList: document.getElementById("profile-list"),
  quoteText: document.getElementById("quote-text"),
  menuToggle: document.getElementById("menu-toggle"),
  siteNav: document.getElementById("site-nav"),
  copyEmail: document.getElementById("copy-email"),
  shuffleSpotlight: document.getElementById("shuffle-spotlight"),
  routeSections: [...document.querySelectorAll(".route-section")],
  routeLinks: [...document.querySelectorAll("[data-route-link]")],
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

function getRouteFromHash() {
  const route = window.location.hash.replace(/^#\//, "") || "home";
  const allowedRoutes = ["home", "projects", "explore", "notes", "about"];
  return allowedRoutes.includes(route) ? route : "home";
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

  const latest = siteConfig.latestUpdates[0];
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

function renderSpotlight() {
  const featured = getFeaturedProjects();
  const project = featured[state.spotlightIndex % featured.length];

  els.spotlightPanel.innerHTML = `
    <article class="spotlight-project">
      <div class="project-badge-row">
        <span class="project-badge">${escapeHtml(project.category)}</span>
        <span class="project-badge">${escapeHtml(project.status)}</span>
      </div>
      <div>
        <h3>${escapeHtml(project.title)}</h3>
        <p class="project-summary">${escapeHtml(project.summary)}</p>
      </div>
      <p class="project-meta">${escapeHtml(project.year)} / ${escapeHtml(project.tags.join(" / "))}</p>
      <a class="project-link" href="${escapeHtml(project.href)}">${escapeHtml(project.externalLabel)}</a>
    </article>
  `;
}

function renderFilters() {
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
    const matchesQuery = !query || haystack.includes(query);

    return matchesCategory && matchesQuery;
  });
}

function renderProjects() {
  const visibleProjects = getFilteredProjects();

  els.projectCount.textContent = `${visibleProjects.length} project${
    visibleProjects.length === 1 ? "" : "s"
  } visible`;
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

function renderExplore() {
  els.exploreGroups.innerHTML = exploreGroups
    .map(
      (group) => `
        <article class="panel">
          <div class="panel-heading">
            <div>
              <p class="mini-label">Group</p>
              <h3>${escapeHtml(group.title)}</h3>
            </div>
          </div>
          <p>${escapeHtml(group.description)}</p>
          <div class="group-list">
            ${group.links
              .map(
                (link) => `
                  <a
                    href="${escapeHtml(link.href)}"
                    ${link.action ? `data-action="${escapeHtml(link.action)}"` : ""}
                  >
                    ${escapeHtml(link.label)}
                  </a>
                `,
              )
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderRoadmap() {
  els.roadmapList.innerHTML = roadmap
    .map(
      (item) => `
        <article class="roadmap-item">
          <div class="roadmap-top">
            <span class="roadmap-step">${escapeHtml(item.step)}</span>
            <span class="roadmap-state">${escapeHtml(item.state)}</span>
          </div>
          <p class="roadmap-copy">${escapeHtml(item.copy)}</p>
        </article>
      `,
    )
    .join("");

  els.noteTopics.innerHTML = noteTopics
    .map((topic) => `<div class="topic-pill">${escapeHtml(topic)}</div>`)
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

function refreshLiveTime() {
  const greeting = getGreetingByHour(new Date().getHours());
  const nextTitle = `${escapeHtml(greeting)}<br />I'm <span class="accent-name">${escapeHtml(siteConfig.homeBrand)}</span>, nice to meet you!`;
  const nextDateLine = formatDateLine();

  els.digitalClock.textContent = formatClock();
  els.heroTitle.innerHTML = nextTitle;

  if (els.homeDate.textContent !== nextDateLine) {
    els.homeDate.textContent = nextDateLine;
    renderCalendar();
  }
}

function updateRouteUi() {
  els.routeSections.forEach((section) => {
    const isActive = section.dataset.route === state.route;
    section.classList.toggle("route-active", isActive);
  });

  els.routeLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#/${state.route}`;
    link.classList.toggle("active", isActive);
  });

  document.body.setAttribute("data-route", state.route);
  els.siteNav.classList.remove("open");
  els.menuToggle.setAttribute("aria-expanded", "false");
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(siteConfig.contact.email);
    els.copyEmail.textContent = "Email Copied";
    window.setTimeout(() => {
      els.copyEmail.textContent = "Copy Email";
    }, 1600);
  } catch {
    els.copyEmail.textContent = siteConfig.contact.email;
  }
}

function bindEvents() {
  window.addEventListener("hashchange", () => {
    state.route = getRouteFromHash();
    updateRouteUi();
  });

  els.projectFilters.addEventListener("click", (event) => {
    const target = event.target.closest("[data-filter]");
    if (!target) return;

    state.category = target.dataset.filter;
    renderFilters();
    renderProjects();
  });

  els.projectSearch.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderProjects();
  });

  els.menuToggle.addEventListener("click", () => {
    const expanded = els.siteNav.classList.toggle("open");
    els.menuToggle.setAttribute("aria-expanded", String(expanded));
  });

  els.copyEmail.addEventListener("click", copyEmail);

  els.shuffleSpotlight.addEventListener("click", () => {
    state.spotlightIndex = (state.spotlightIndex + 1) % getFeaturedProjects().length;
    renderSpotlight();
  });

  document.addEventListener("click", (event) => {
    const actionTarget = event.target.closest("[data-action='copy-email']");
    if (!actionTarget) return;

    event.preventDefault();
    copyEmail();
  });
}

function init() {
  state.route = getRouteFromHash();
  state.spotlightIndex = new Date().getDate() % getFeaturedProjects().length;

  renderShell();
  renderSpotlight();
  renderFilters();
  renderProjects();
  renderExplore();
  renderRoadmap();
  renderTimeline();
  updateRouteUi();
  bindEvents();
  window.setInterval(refreshLiveTime, 1000);
}

init();
