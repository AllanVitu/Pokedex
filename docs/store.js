const STORAGE_KEY = "pokedex_studio_v3"; // Bumped version for new features
export const DEFAULT_ACCENT = "#5c62fa";

// Global reactive state
export const state = {
    query: "",
    type: "All",
    view: "explore", // explore | favorites | team
    favorites: new Set(["001"]),
    team: new Set(["001", "090"]),
    pokedex: [],
    listeners: [],
};

export function subscribe(callback) {
    state.listeners.push(callback);
}

export function notify() {
    state.listeners.forEach((cb) => cb());
}

export function persistState() {
    try {
        const payload = {
            query: state.query,
            type: state.type,
            favorites: [...state.favorites],
            team: [...state.team],
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (error) {
        console.error("Failed to save state", error);
    }
}

export function hydrateStateFromStorage() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (typeof parsed.query === "string") state.query = parsed.query;
        if (typeof parsed.type === "string") state.type = parsed.type;
        if (Array.isArray(parsed.favorites)) state.favorites = new Set(parsed.favorites.map(String));
        if (Array.isArray(parsed.team)) state.team = new Set(parsed.team.map(String));
    } catch (error) {
        console.error("Failed to hydrate state", error);
    }
}

export function syncViewWithHash() {
    const hash = window.location.hash.replace("#", "") || "explore";
    if (["explore", "favorites", "team"].includes(hash)) {
        state.view = hash;
    } else {
        state.view = "explore";
        window.location.hash = "explore";
    }
    notify();
}

export function navigateTo(view) {
    window.location.hash = view;
    // hashchange event will trigger syncViewWithHash automatically
}

// Data Getters Let logic
export function getUniqueTypes() {
    return ["All", ...new Set(state.pokedex.flatMap((item) => item.types))];
}

export function getDisplayList() {
    const query = state.query.trim().toLowerCase();

    const scoped = state.pokedex.filter((item) => {
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
