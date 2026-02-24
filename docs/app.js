const pokedex = [
  {
    id: "001",
    name: "Juracron",
    image: "./assets/imgs/JURACRON.png",
    accent: "#b6dde0",
    gradient:
      "linear-gradient(152deg, #d8eff0 0%, #b4dce0 44%, #d4ecf0 100%)",
    types: ["Grass", "Water", "Rock"],
    rarity: "Legendaire",
    weight: "450 kg",
    height: "3.0 m",
    category: "Esprit Montagne",
    habitat: "Souffle des Cascades",
    summary:
      "Gardien des lacs, forets et montagnes du Jura. Il equilibre l'eau et la roche.",
    talents: ["Souffle des Cascades", "Colere des Montagnes", "Eternite du Jura"],
  },
  {
    id: "090",
    name: "Belforion",
    image: "./assets/imgs/Belforion.png",
    accent: "#f1c58e",
    gradient:
      "linear-gradient(152deg, #f8d7a8 0%, #f3c381 43%, #f7dcba 100%)",
    types: ["Fire", "Rock"],
    rarity: "Mythique",
    weight: "310 kg",
    height: "2.0 m",
    category: "Lion Bastion",
    habitat: "Bastion de Belfort",
    summary:
      "Protecteur des remparts et symbole de courage. Son rugissement embrase la pierre.",
    talents: ["Rugissement Triomphal", "Bastion de Belfort", "Garde Flamboyante"],
  },
  {
    id: "165",
    name: "Vogsral",
    image: "./assets/imgs/Vogsral.png",
    accent: "#b8d9b2",
    gradient:
      "linear-gradient(152deg, #d5e9d2 0%, #badab5 43%, #dff0dd 100%)",
    types: ["Grass", "Psychic"],
    rarity: "Rare",
    weight: "310 kg",
    height: "1.6 m",
    category: "Cerf des Brumes",
    habitat: "Brume Ailee",
    summary:
      "Esprit des Vosges. Il veille sur les forets et guide les voyageurs perdus dans la brume.",
    talents: ["Brume Envoutante", "Souffle des Vosges", "Regard Sylvestre"],
  },
];

const state = {
  query: "",
  type: "All",
  view: "explore",
  favorites: new Set(["001"]),
  team: new Set(["001", "090"]),
  menuOpen: false,
};

const refs = {
  root: document.documentElement,
  iphone: document.querySelector("#iphone16"),
  searchInput: document.querySelector("#searchInput"),
  quickRandom: document.querySelector("#quickRandom"),
  typeFilters: document.querySelector("#typeFilters"),
  deck: document.querySelector("#deck"),
  emptyState: document.querySelector("#emptyState"),
  viewTitle: document.querySelector("#viewTitle"),
  resultCount: document.querySelector("#resultCount"),
  cardTemplate: document.querySelector("#cardTemplate"),
  navButtons: Array.from(document.querySelectorAll(".nav-btn")),
  menuToggle: document.querySelector("#menuToggle"),
  radialMenu: document.querySelector("#radialMenu"),
  detailOverlay: document.querySelector("#detailOverlay"),
  detailSheet: document.querySelector("#detailSheet"),
  detailContent: document.querySelector("#detailContent"),
  closeDetail: document.querySelector("#closeDetail"),
};

const uniqueTypes = ["All", ...new Set(pokedex.flatMap((item) => item.types))];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getDisplayList() {
  const query = state.query.trim().toLowerCase();
  const scoped = pokedex.filter((item) => {
    if (state.view === "favorites" && !state.favorites.has(item.id)) {
      return false;
    }

    if (state.view === "team" && !state.team.has(item.id)) {
      return false;
    }

    return true;
  });

  return scoped.filter((item) => {
    const passesType = state.type === "All" || item.types.includes(state.type);
    if (!passesType) {
      return false;
    }

    if (!query) {
      return true;
    }

    return (
      item.name.toLowerCase().includes(query) ||
      item.types.some((type) => type.toLowerCase().includes(query)) ||
      item.category.toLowerCase().includes(query)
    );
  });
}

function updateHeader(listLength) {
  const title =
    state.view === "favorites"
      ? "Favoris"
      : state.view === "team"
      ? "Team Builder"
      : "Explorer";
  refs.viewTitle.textContent = title;
  refs.resultCount.textContent = `${listLength} ${listLength > 1 ? "entrees" : "entree"}`;
}

function applyAccent(item) {
  refs.root.style.setProperty("--accent", item.accent);
  refs.root.style.setProperty("--accent-strong", darken(item.accent, 18));
  refs.root.style.setProperty("--phone-bg", item.gradient);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function darken(hex, amount) {
  const raw = hex.replace("#", "");
  const normal = raw.length === 3 ? raw.split("").map((c) => c + c).join("") : raw;
  const int = Number.parseInt(normal, 16);
  const r = clamp(((int >> 16) & 0xff) - amount, 0, 255);
  const g = clamp(((int >> 8) & 0xff) - amount, 0, 255);
  const b = clamp((int & 0xff) - amount, 0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function renderTypeFilters() {
  refs.typeFilters.innerHTML = "";
  const fragment = document.createDocumentFragment();
  for (const type of uniqueTypes) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `type-chip${state.type === type ? " active" : ""}`;
    btn.textContent = type;
    btn.addEventListener("click", () => {
      state.type = type;
      render();
    });
    fragment.append(btn);
  }
  refs.typeFilters.append(fragment);
}

function isInTeam(id) {
  return state.team.has(id);
}

function toggleTeam(id) {
  if (state.team.has(id)) {
    state.team.delete(id);
    return;
  }

  if (state.team.size >= 3) {
    const [first] = state.team;
    state.team.delete(first);
  }
  state.team.add(id);
}

function renderCards(items) {
  refs.deck.innerHTML = "";

  const fragment = document.createDocumentFragment();
  items.forEach((item, index) => {
    const node = refs.cardTemplate.content.firstElementChild.cloneNode(true);
    node.style.background = item.gradient;
    node.style.animationDelay = `${index * 45}ms`;

    const image = node.querySelector(".poke-image");
    image.src = item.image;
    image.alt = item.name;

    node.querySelector(".id-badge").textContent = `#${item.id}`;
    node.querySelector(".poke-name").textContent = item.name;
    node.querySelector(".poke-subtitle").textContent = `${item.rarity} | ${item.habitat}`;
    node.querySelector(".weight").textContent = item.weight;
    node.querySelector(".height").textContent = item.height;
    node.querySelector(".category").textContent = item.category;

    const chipRow = node.querySelector(".chip-row");
    item.types.forEach((type) => {
      const chip = document.createElement("span");
      chip.className = "tag-chip";
      chip.textContent = type;
      chipRow.append(chip);
    });

    const favoriteBtn = node.querySelector(".favorite-btn");
    if (state.favorites.has(item.id)) {
      favoriteBtn.classList.add("active");
      favoriteBtn.textContent = "Fav";
      favoriteBtn.setAttribute("aria-label", "Retirer des favoris");
    }
    favoriteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      if (state.favorites.has(item.id)) {
        state.favorites.delete(item.id);
      } else {
        state.favorites.add(item.id);
      }
      render();
    });

    const teamBtn = node.querySelector(".team-btn");
    teamBtn.textContent = isInTeam(item.id) ? "Retirer Team" : "+ Team";
    teamBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleTeam(item.id);
      render();
    });

    const openDetails = () => {
      applyAccent(item);
      openDetail(item);
    };

    node.addEventListener("click", openDetails);
    node.querySelector(".details-btn").addEventListener("click", (event) => {
      event.stopPropagation();
      openDetails();
    });

    fragment.append(node);
  });

  refs.deck.append(fragment);
}

function render() {
  renderTypeFilters();
  const items = getDisplayList();
  updateHeader(items.length);

  if (items.length === 0) {
    refs.emptyState.classList.remove("hidden");
    refs.deck.classList.add("hidden");
  } else {
    refs.emptyState.classList.add("hidden");
    refs.deck.classList.remove("hidden");
    renderCards(items);
    applyAccent(items[0]);
  }
}

function renderDetail(item) {
  refs.detailContent.innerHTML = `
    <h3>${escapeHtml(item.name)} <small>#${escapeHtml(item.id)}</small></h3>
    <p>${escapeHtml(item.summary)}</p>
    <dl class="stat-grid">
      <div>
        <dt>Poids</dt>
        <dd>${escapeHtml(item.weight)}</dd>
      </div>
      <div>
        <dt>Taille</dt>
        <dd>${escapeHtml(item.height)}</dd>
      </div>
      <div>
        <dt>Rarete</dt>
        <dd>${escapeHtml(item.rarity)}</dd>
      </div>
    </dl>
    <ul class="detail-list">
      ${item.talents.map((talent) => `<li>${escapeHtml(talent)}</li>`).join("")}
    </ul>
  `;
}

function openDetail(item) {
  renderDetail(item);
  refs.detailOverlay.classList.remove("hidden");
  refs.detailOverlay.classList.add("open");
  refs.detailSheet.classList.add("open");
  refs.detailSheet.setAttribute("aria-hidden", "false");
}

function closeDetail() {
  refs.detailOverlay.classList.remove("open");
  refs.detailSheet.classList.remove("open");
  refs.detailSheet.setAttribute("aria-hidden", "true");
  window.setTimeout(() => {
    refs.detailOverlay.classList.add("hidden");
  }, 220);
}

function switchView(nextView) {
  state.view = nextView;
  refs.navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === nextView);
  });
  render();
}

function pickRandom() {
  const index = Math.floor(Math.random() * pokedex.length);
  const item = pokedex[index];
  applyAccent(item);
  openDetail(item);
}

function autoBuildTeam() {
  const pool = [...pokedex];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  state.team = new Set(pool.slice(0, 3).map((item) => item.id));
  switchView("team");
}

function resetFilters() {
  state.query = "";
  state.type = "All";
  refs.searchInput.value = "";
  render();
}

function toggleMenu(forceState) {
  if (typeof forceState === "boolean") {
    state.menuOpen = forceState;
  } else {
    state.menuOpen = !state.menuOpen;
  }
  refs.radialMenu.classList.toggle("open", state.menuOpen);
}

function setupEvents() {
  refs.searchInput.addEventListener("input", (event) => {
    state.query = event.currentTarget.value;
    render();
  });

  refs.quickRandom.addEventListener("click", pickRandom);

  refs.navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchView(button.dataset.view);
    });
  });

  refs.menuToggle.addEventListener("click", () => {
    toggleMenu();
  });

  refs.radialMenu.addEventListener("click", (event) => {
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (!action) {
      return;
    }

    if (action === "random") {
      pickRandom();
    } else if (action === "autoteam") {
      autoBuildTeam();
    } else if (action === "reset") {
      resetFilters();
    }

    toggleMenu(false);
  });

  refs.detailOverlay.addEventListener("click", closeDetail);
  refs.closeDetail.addEventListener("click", closeDetail);

  refs.iphone.addEventListener("click", (event) => {
    if (!state.menuOpen) {
      return;
    }

    const isInsideMenu = event.target.closest("#radialMenu, #menuToggle");
    if (!isInsideMenu) {
      toggleMenu(false);
    }
  });
}

setupEvents();
render();
