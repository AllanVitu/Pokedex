const allPokemon = [
  {
    id: "001",
    name: "Juracron",
    image: "./assets/imgs/Juracron_card.webp",
    accent: "#b6dde0",
    types: ["Nature", "Water", "Rock"],
    rarity: "Legendary",
    weight: "450 kg",
    height: "3.0 m",
    category: "Mountain Spirit",
    habitat: "Jura",
    summary:
      "Guardian of the lakes, forests, and mountains. It seamlessly balances the elements of water and rock across the region.",
    talents: ["Cascades Breath", "Mountain's Wrath", "Jura's Eternity"],
  },
  {
    id: "090",
    name: "Belforion",
    image: "./assets/imgs/Belforion_card.webp",
    accent: "#f1c58e",
    types: ["Fire", "Rock"],
    rarity: "Mythical",
    weight: "310 kg",
    height: "2.0 m",
    category: "Bastion Lion",
    habitat: "Belfort",
    summary:
      "Protector of the ancient ramparts and a symbol of courage. Its roar alone can set the very stones ablaze.",
    talents: ["Triumphant Roar", "Bastion's Aegis", "Flaming Guard"],
  },
  {
    id: "165",
    name: "Vogsrâl",
    image: "./assets/imgs/Vogsrâl_card.webp",
    accent: "#b8d9b2",
    types: ["Nature", "Mystic"],
    rarity: "Rare",
    weight: "310 kg",
    height: "1.6 m",
    category: "Mist Stag",
    habitat: "Vosges",
    summary:
      "The spirit of the Vosges. It watches over the deep forests and guides lost travelers through the dense morning mist.",
    talents: ["Enchanting Mist", "Vosges' Breath", "Sylvan Gaze"],
  },
  {
    id: "067",
    name: "Alsace",
    image: "./assets/imgs/Alsace_card.webp",
    accent: "#f4a261",
    types: ["Heritage", "Gastronomy"],
    rarity: "Epic",
    weight: "Unknown",
    height: "Vast",
    category: "Historical Realm",
    habitat: "Eastern Border",
    summary:
      "A region characterized by its picturesque villages and rich culinary heritage. It breathes history and tradition.",
    talents: ["Stork's Blessing", "Pretzel Shield", "Vineyard Aura"],
  },
  {
    id: "029",
    name: "Bretagne",
    image: "./assets/imgs/Bretagne_card.webp",
    accent: "#457b9d",
    types: ["Ocean", "Legend"],
    rarity: "Epic",
    weight: "Oceanic",
    height: "Coastal",
    category: "Maritime Land",
    habitat: "Western Peninsula",
    summary:
      "A land forged by the sea and ancient Celtic legends. Its stormy coasts hide secrets of times long past.",
    talents: ["Ocean's Roar", "Granite Will", "Celtic Magic"],
  },
  {
    id: "034",
    name: "Espagne",
    image: "./assets/imgs/Espagne_card.webp",
    accent: "#e9c46a",
    types: ["Sun", "Passion"],
    rarity: "Legendary",
    weight: "Continental",
    height: "Vast",
    category: "Southern Kingdom",
    habitat: "Iberian Peninsula",
    summary:
      "A sun-drenched land of passion, history, and vibrant cultures. It radiates a warm, unyielding energy.",
    talents: ["Solar Flare", "Flamenco Rhythm", "Tapas Feast"],
  },
  {
    id: "075",
    name: "Île-de-France",
    image: "./assets/imgs/Ile_de_France_card.webp",
    accent: "#1d3557",
    types: ["Urban", "Culture"],
    rarity: "Epic",
    weight: "Dense",
    height: "Monumental",
    category: "Metropolitan Core",
    habitat: "Central Basin",
    summary:
      "The bustling heart of the country, radiating culture, power, and architectural wonders. It never sleeps.",
    talents: ["City Lights", "Metro Network", "Architect's Vision"],
  },
  {
    id: "039",
    name: "Italie",
    image: "./assets/imgs/Italie_card.webp",
    accent: "#2a9d8f",
    types: ["Art", "History"],
    rarity: "Legendary",
    weight: "Peninsular",
    height: "Alpine to Coastal",
    category: "Ancient Empire",
    habitat: "Mediterranean",
    summary:
      "A majestic long land bridging Europe and the sea, overflowing with timeless art, history, and romance.",
    talents: ["Renaissance Masterpiece", "Colosseum Echo", "Dolce Vita"],
  },
  {
    id: "064",
    name: "Pays Basque",
    image: "./assets/imgs/Pays_Basque_card.webp",
    accent: "#e76f51",
    types: ["Tradition", "Ocean"],
    rarity: "Rare",
    weight: "Rugged",
    height: "Mountainous",
    category: "Proud Domain",
    habitat: "Pyrenees & Coast",
    summary:
      "A proud and ancient region nestled between the mountains and the ocean, preserving an enigmatic culture.",
    talents: ["Oceanic Surf", "Mountain Echo", "Espelette Spice"],
  },
  {
    id: "035",
    name: "Portugal",
    image: "./assets/imgs/Portugal_card.webp",
    accent: "#8ecae6",
    types: ["Ocean", "Discovery"],
    rarity: "Legendary",
    weight: "Continental",
    height: "Coastal",
    category: "Explorer's Land",
    habitat: "Western Edge",
    summary:
      "A coastal nation of explorers and beautiful tiled streets, forever gazing out into the vast Atlantic.",
    talents: ["Atlantic Breeze", "Explorer's Compass", "Golden Tile"],
  }
];

const DEFAULT_ACCENT = "#B8D9B2";
const STORAGE_KEY = "pokedex_studio_v2";
const TOAST_DURATION = 2500;

let pokedex = [];

const state = {
  query: "",
  type: "All",
  view: "explore",
  favorites: new Set(["001"]),
  team: new Set(["001", "090"]),
};

const refs = {
  root: document.documentElement,
  searchInput: document.querySelector("#searchInput"),
  quickRandom: document.querySelector("#quickRandom"),
  typeFilters: document.querySelector("#typeFilters"),
  deck: document.querySelector("#deck"),
  emptyState: document.querySelector("#emptyState"),
  resetBtn: document.querySelector("#resetBtn"),
  viewTitle: document.querySelector("#viewTitle"),
  resultCount: document.querySelector("#resultCount"),
  cardTemplate: document.querySelector("#cardTemplate"),
  detailTemplate: document.querySelector("#detailTemplate"),
  navButtons: Array.from(document.querySelectorAll(".nav-btn")),
  detailSheet: document.querySelector("#detailSheet"),
  detailOverlay: document.querySelector("#detailOverlay"),
  detailContent: document.querySelector("#detailContent"),
  closeDetail: document.querySelector("#closeDetail"),
  toastHost: document.querySelector("#toastHost"),
};

function persistState() {
  try {
    const payload = {
      query: state.query,
      type: state.type,
      view: state.view,
      favorites: [...state.favorites],
      team: [...state.team],
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch { }
}

function hydrateStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (typeof parsed.query === "string") state.query = parsed.query;
    if (typeof parsed.type === "string") state.type = parsed.type;
    if (["explore", "favorites", "team"].includes(parsed.view)) state.view = parsed.view;
    if (Array.isArray(parsed.favorites)) state.favorites = new Set(parsed.favorites.map(String));
    if (Array.isArray(parsed.team)) state.team = new Set(parsed.team.map(String));
  } catch { }
}

function showToast(message) {
  if (!refs.toastHost) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  refs.toastHost.append(toast);
  window.setTimeout(() => {
    toast.classList.add("out");
    window.setTimeout(() => toast.remove(), 250);
  }, TOAST_DURATION);
}

function getUniqueTypes() {
  return ["All", ...new Set(pokedex.flatMap((item) => item.types))];
}

function getViewLabel() {
  if (state.view === "favorites") return "Favorites";
  if (state.view === "team") return "Dream Team";
  return "Explore";
}

function applyAccent(item) {
  const accent = item?.accent ?? DEFAULT_ACCENT;
  refs.root.style.setProperty("--accent", accent);
}

function getDisplayList() {
  const query = state.query.trim().toLowerCase();
  const scoped = pokedex.filter((item) => {
    if (state.view === "favorites" && !state.favorites.has(item.id)) return false;
    if (state.view === "team" && !state.team.has(item.id)) return false;
    return true;
  });

  return scoped.filter((item) => {
    const passesType = state.type === "All" || item.types.includes(state.type);
    if (!passesType) return false;
    if (!query) return true;
    return (
      item.name.toLowerCase().includes(query) ||
      item.types.some((type) => type.toLowerCase().includes(query)) ||
      item.category.toLowerCase().includes(query)
    );
  });
}

function updateHeader(listLength) {
  refs.viewTitle.textContent = getViewLabel();
  refs.resultCount.textContent = `${listLength} ${listLength === 1 ? "entry" : "entries"}`;
}

function syncNavButtons() {
  refs.navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });
}

function renderTypeFilters(types) {
  refs.typeFilters.innerHTML = "";
  const fragment = document.createDocumentFragment();
  for (const type of types) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `type-chip${state.type === type ? " active" : ""}`;
    button.textContent = type;
    button.addEventListener("click", () => {
      state.type = type;
      persistState();
      render();
    });
    fragment.append(button);
  }
  refs.typeFilters.append(fragment);
}

function toggleTeam(id) {
  if (state.team.has(id)) {
    state.team.delete(id);
    return "removed";
  }
  if (state.team.size >= 6) {
    showToast("Dream Team is full (Max 6)");
    return "full";
  }
  state.team.add(id);
  return "added";
}

function createImageFallback(container, item) {
  if (container.querySelector(".image-fallback")) return;
  const fallback = document.createElement("div");
  fallback.className = "image-fallback";
  fallback.textContent = item.name.slice(0, 2).toUpperCase();
  container.append(fallback);
}

function bindImage(container, imgElement, item) {
  imgElement.style.display = "block";
  if (!item.image) {
    imgElement.style.display = "none";
    createImageFallback(container, item);
    return;
  }
  imgElement.src = item.image;
  imgElement.alt = item.name;
  imgElement.addEventListener("error", () => {
    imgElement.style.display = "none";
    createImageFallback(container, item);
  }, { once: true });
}

function renderCards(items) {
  refs.deck.innerHTML = "";
  const fragment = document.createDocumentFragment();

  items.forEach((item, index) => {
    const node = refs.cardTemplate.content.firstElementChild.cloneNode(true);
    node.style.animationDelay = `${index * 40}ms`;

    // Apply specific accent color to the card glow
    const glow = node.querySelector(".card-bg-glow");
    if (glow && item.accent) {
      glow.style.background = item.accent;
    }

    bindImage(node.querySelector(".card-image-container"), node.querySelector(".poke-image"), item);

    node.querySelector(".id-badge").textContent = `#${item.id}`;
    node.querySelector(".poke-name").textContent = item.name;
    node.querySelector(".poke-subtitle").textContent = `${item.rarity} \u2014 ${item.category}`;

    const chipRow = node.querySelector(".chip-row");
    item.types.forEach((type) => {
      const chip = document.createElement("span");
      chip.className = "tag-chip";
      chip.textContent = type;
      chipRow.append(chip);
    });

    const favoriteBtn = node.querySelector(".favorite-btn");
    const isFavorite = state.favorites.has(item.id);
    favoriteBtn.classList.toggle("active", isFavorite);
    favoriteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      if (state.favorites.has(item.id)) {
        state.favorites.delete(item.id);
        favoriteBtn.classList.remove("active");
        showToast(`${item.name} removed from favorites`);
      } else {
        state.favorites.add(item.id);
        favoriteBtn.classList.add("active");
        showToast(`${item.name} added to favorites`);
      }
      persistState();
      // Only re-render if we are in the favorites view to avoid full re-paints
      if (state.view === "favorites") render();
    });

    node.addEventListener("click", () => {
      applyAccent(item);
      openDetail(item);
    });

    fragment.append(node);
  });

  refs.deck.append(fragment);
}

function renderEmptyState(itemsLength) {
  if (itemsLength > 0) {
    refs.emptyState.classList.add("hidden");
    refs.deck.classList.remove("hidden");
  } else {
    refs.emptyState.classList.remove("hidden");
    refs.deck.classList.add("hidden");
  }
}

function render() {
  if (refs.searchInput.value !== state.query) {
    refs.searchInput.value = state.query;
  }
  syncNavButtons();

  const types = getUniqueTypes();
  if (!types.includes(state.type)) {
    state.type = "All";
    persistState();
  }
  renderTypeFilters(types);

  const items = getDisplayList();
  updateHeader(items.length);
  renderEmptyState(items.length);

  if (items.length > 0) {
    renderCards(items);
  }
}

function openDetail(item) {
  refs.detailContent.innerHTML = "";
  const node = refs.detailTemplate.content.cloneNode(true);

  if (item.accent) {
    node.querySelector(".detail-hero-glow").style.background = item.accent;
  }

  bindImage(node.querySelector(".detail-hero"), node.querySelector(".detail-image"), item);

  node.querySelector(".detail-rarity").textContent = item.rarity;
  node.querySelector(".detail-habitat").textContent = item.habitat;
  node.querySelector(".detail-name").textContent = item.name;
  node.querySelector(".detail-id").textContent = `#${item.id}`;
  node.querySelector(".detail-summary").textContent = item.summary;
  node.querySelector(".val-weight").textContent = item.weight;
  node.querySelector(".val-height").textContent = item.height;
  node.querySelector(".val-category").textContent = item.category;

  const chips = node.querySelector(".detail-chips");
  item.types.forEach((type) => {
    const chip = document.createElement("span");
    chip.className = "tag-chip";
    chip.textContent = type;
    chips.append(chip);
  });

  const talentsList = node.querySelector(".detail-talents");
  item.talents.forEach((talent) => {
    const li = document.createElement("li");
    li.textContent = talent;
    talentsList.append(li);
  });

  const teamBtn = node.querySelector(".team-btn");
  const inTeam = state.team.has(item.id);
  teamBtn.textContent = inTeam ? "Remove from Dream Team" : "Add to Dream Team";
  if (inTeam) teamBtn.classList.add("active");

  teamBtn.addEventListener("click", () => {
    const res = toggleTeam(item.id);
    if (res === "added") {
      teamBtn.textContent = "Remove from Dream Team";
      teamBtn.classList.add("active");
      showToast(`${item.name} joined the Dream Team!`);
    } else if (res === "removed") {
      teamBtn.textContent = "Add to Dream Team";
      teamBtn.classList.remove("active");
      showToast(`${item.name} left the Dream Team.`);
    }
    persistState();
    if (state.view === "team") render();
  });

  refs.detailContent.append(node);

  refs.detailSheet.classList.add("open");
  refs.detailSheet.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeDetail() {
  refs.detailSheet.classList.remove("open");
  refs.detailSheet.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function switchView(nextView) {
  state.view = nextView;
  syncNavButtons();
  persistState();
  render();
}

function pickRandom() {
  if (pokedex.length === 0) return;
  const index = Math.floor(Math.random() * pokedex.length);
  const item = pokedex[index];
  applyAccent(item);
  openDetail(item);
}

function resetFilters() {
  state.query = "";
  state.type = "All";
  refs.searchInput.value = "";
  persistState();
  render();
  showToast("Filters reset");
}

function setupEvents() {
  refs.searchInput.addEventListener("input", (e) => {
    state.query = e.target.value;
    persistState();
    render();
  });

  refs.quickRandom.addEventListener("click", pickRandom);
  refs.resetBtn.addEventListener("click", resetFilters);

  refs.navButtons.forEach((btn) => {
    btn.addEventListener("click", () => switchView(btn.dataset.view));
  });

  refs.closeDetail.addEventListener("click", closeDetail);
  refs.detailOverlay.addEventListener("click", closeDetail);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDetail();
  });
}

function probeImage(src) {
  return new Promise((resolve) => {
    if (!src) return resolve(false);
    const image = new Image();
    const timer = setTimeout(() => {
      image.onload = null; image.onerror = null; resolve(false);
    }, 2000);
    image.onload = () => { clearTimeout(timer); resolve(true); };
    image.onerror = () => { clearTimeout(timer); resolve(false); };
    image.src = src;
  });
}

async function buildPokedexFromAssets() {
  const checks = await Promise.all(
    allPokemon.map(async (item) => {
      const available = await probeImage(item.image);
      return { item, available };
    })
  );
  const available = checks.filter(c => c.available).map(c => c.item);
  return available.length > 0 ? available : allPokemon.map(i => ({ ...i, image: "" }));
}

async function initApp() {
  applyAccent();
  pokedex = await buildPokedexFromAssets();
  hydrateStateFromStorage();

  // Clean invalid favorites/team due to pokedex changes
  const validIds = new Set(pokedex.map(i => i.id));
  state.favorites = new Set([...state.favorites].filter(id => validIds.has(id)));
  state.team = new Set([...state.team].filter(id => validIds.has(id)));

  persistState();
  render();
}

setupEvents();
initApp();
