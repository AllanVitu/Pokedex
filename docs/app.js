import { buildPokedexFromAssets } from "./data.js";
import {
  state,
  subscribe,
  persistState,
  hydrateStateFromStorage,
  syncViewWithHash,
  navigateTo,
  getUniqueTypes,
  getDisplayList,
  DEFAULT_ACCENT,
} from "./store.js";

const TOAST_DURATION = 2500;

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

function getViewLabel() {
  if (state.view === "favorites") return "Favorites";
  if (state.view === "team") return "Dream Team";
  return "Explore";
}

function applyAccent(item) {
  const accent = item?.accent ?? DEFAULT_ACCENT;
  refs.root.style.setProperty("--accent", accent);
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
      // Re-render only if we are in favorites view to remove it immediately safely
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

function pickRandom() {
  if (state.pokedex.length === 0) return;
  const index = Math.floor(Math.random() * state.pokedex.length);
  const item = state.pokedex[index];
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
    btn.addEventListener("click", () => {
      navigateTo(btn.dataset.view); // Updates hash which triggers syncViewWithHash
    });
  });

  refs.closeDetail.addEventListener("click", closeDetail);
  refs.detailOverlay.addEventListener("click", closeDetail);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDetail();
  });

  window.addEventListener("hashchange", () => {
    syncViewWithHash();
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

async function initApp() {
  applyAccent();
  state.pokedex = await buildPokedexFromAssets(probeImage);

  hydrateStateFromStorage();
  syncViewWithHash();

  subscribe(render);

  // Clean invalid favorites/team due to pokedex changes
  const validIds = new Set(state.pokedex.map(i => i.id));
  state.favorites = new Set([...state.favorites].filter(id => validIds.has(id)));
  state.team = new Set([...state.team].filter(id => validIds.has(id)));

  persistState();
  render();
}

setupEvents();
initApp();
