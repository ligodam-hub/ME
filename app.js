const siteConfig = {
  brand: "Ligodam",
  role: "Portfolio & Navigation Hub",
  status: "Portfolio-first launch in progress",
  title: "Build the front door first, then let the knowledge base grow behind it.",
  description:
    "This version focuses on a clean portfolio, a practical navigation hub, and a staged notes area so the site already feels alive before the long-form content arrives.",
  currentFocus:
    "Turn the site into a reliable personal home base: visible projects, clear navigation, and a reserved structure for future notes.",
  contact: {
    email: "your@email.com",
  },
  stats: [
    { label: "Launch mode", value: "v1", hint: "Portfolio + hub first" },
    { label: "Core routes", value: "5", hint: "Home, projects, explore, notes, about" },
    { label: "Deploy target", value: "GitHub", hint: "Static and Pages-friendly" },
  ],
};

const projects = [
  {
    title: "ME",
    category: "Featured",
    year: "2026",
    status: "Building",
    summary:
      "A personal site that acts as a portfolio, launchpad, and eventually a knowledge base without forcing all three jobs into the first release.",
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
      "A visual collection of interaction experiments, UI systems, and polished references worth revisiting when new ideas need shape.",
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
      "A structured index of shipped projects with context, trade-offs, and why each one matters beyond a screenshot.",
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
      "A staged note system that will expand into curated essays, learning trails, and reusable references once the shell of the site stabilizes.",
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
      "A curated layer over raw bookmarks so links are grouped by intent and stay useful under pressure.",
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
      "A content flow that connects projects, notes, and short updates without making the site feel crowded.",
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
      { label: "Featured Spotlight", href: "#/home" },
      { label: "Story & Process", href: "#/about" },
    ],
  },
  {
    title: "Collect",
    description: "Keep useful inputs visible so the future knowledge base has strong raw material.",
    links: [
      { label: "Notes Roadmap", href: "#/notes" },
      { label: "Reserved Topics", href: "#/notes" },
      { label: "Navigation Philosophy", href: "#/about" },
    ],
  },
  {
    title: "Connect",
    description: "Make it easy for collaborators, recruiters, or curious readers to know where to go next.",
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

const els = {
  brandName: document.getElementById("brand-name"),
  brandRole: document.getElementById("brand-role"),
  heroStatus: document.getElementById("hero-status"),
  heroTitle: document.getElementById("hero-title"),
  heroDescription: document.getElementById("hero-description"),
  currentFocus: document.getElementById("current-focus"),
  footerName: document.getElementById("footer-name"),
  footerYear: document.getElementById("footer-year"),
  statsGrid: document.getElementById("stats-grid"),
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
  menuToggle: document.getElementById("menu-toggle"),
  siteNav: document.getElementById("site-nav"),
  copyEmail: document.getElementById("copy-email"),
  shuffleSpotlight: document.getElementById("shuffle-spotlight"),
  routeSections: [...document.querySelectorAll(".route-section")],
  routeLinks: [...document.querySelectorAll("[data-route-link]")],
};

function escapeHtml(value) {
  return value
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

function renderShell() {
  els.brandName.textContent = siteConfig.brand;
  els.brandRole.textContent = siteConfig.role;
  els.heroStatus.textContent = siteConfig.status;
  els.heroTitle.textContent = siteConfig.title;
  els.heroDescription.textContent = siteConfig.description;
  els.currentFocus.textContent = siteConfig.currentFocus;
  els.footerName.textContent = siteConfig.brand;
  els.footerYear.textContent = new Date().getFullYear();

  els.statsGrid.innerHTML = siteConfig.stats
    .map(
      (stat) => `
        <article class="stat-card">
          <strong>${escapeHtml(stat.value)}</strong>
          <span>${escapeHtml(stat.label)}</span>
          <p class="project-meta">${escapeHtml(stat.hint)}</p>
        </article>
      `,
    )
    .join("");
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

function updateRouteUi() {
  els.routeSections.forEach((section) => {
    const isActive = section.dataset.route === state.route;
    section.classList.toggle("route-active", isActive);
  });

  els.routeLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#/${state.route}`;
    link.classList.toggle("active", isActive);
  });

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
}

init();
