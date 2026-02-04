// Variables globales
let allPokemon = [];
let filteredPokemon = [];
const TOTAL_POKEMON = 151;

// Traductions françaises des types
const typeTranslations = {
    'normal': 'Normal',
    'fire': 'Feu',
    'water': 'Eau',
    'grass': 'Plante',
    'electric': 'Électrik',
    'ice': 'Glace',
    'fighting': 'Combat',
    'poison': 'Poison',
    'ground': 'Sol',
    'flying': 'Vol',
    'psychic': 'Psy',
    'bug': 'Insecte',
    'rock': 'Roche',
    'ghost': 'Spectre',
    'dragon': 'Dragon',
    'dark': 'Ténèbres',
    'steel': 'Acier',
    'fairy': 'Fée'
};

// Traductions des stats
const statTranslations = {
    'hp': 'PV',
    'attack': 'Attaque',
    'defense': 'Défense',
    'special-attack': 'Atq. Spé',
    'special-defense': 'Déf. Spé',
    'speed': 'Vitesse'
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

async function initializeApp() {
    await loadAllPokemon();
    setupEventListeners();
    displayPokemon(allPokemon);
    populateTypeFilter();
}

// Charger tous les Pokémon
async function loadAllPokemon() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex';

    try {
        const promises = [];
        for (let i = 1; i <= TOTAL_POKEMON; i++) {
            promises.push(fetchPokemon(i));
        }

        allPokemon = await Promise.all(promises);
        filteredPokemon = [...allPokemon];
    } catch (error) {
        console.error('Erreur lors du chargement des Pokémon:', error);
        alert('Erreur lors du chargement des Pokémon. Veuillez rafraîchir la page.');
    } finally {
        loadingScreen.style.display = 'none';
    }
}

// Récupérer un Pokémon depuis l'API
async function fetchPokemon(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        // Récupérer les informations d'espèce pour la description et l'évolution
        const speciesResponse = await fetch(data.species.url);
        const speciesData = await speciesResponse.json();

        // Trouver la description en français
        const frenchEntry = speciesData.flavor_text_entries.find(
            entry => entry.language.name === 'fr'
        );

        return {
            id: data.id,
            name: data.name,
            frenchName: getFrenchName(speciesData),
            image: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
            types: data.types.map(t => t.type.name),
            stats: data.stats.map(s => ({
                name: s.stat.name,
                value: s.base_stat
            })),
            height: data.height / 10, // Convertir en mètres
            weight: data.weight / 10, // Convertir en kg
            abilities: data.abilities.map(a => a.ability.name),
            description: frenchEntry ? frenchEntry.flavor_text.replace(/\f|\n/g, ' ') : 'Description non disponible',
            category: getCategory(speciesData),
            evolutionChainUrl: speciesData.evolution_chain.url
        };
    } catch (error) {
        console.error(`Erreur pour le Pokémon ${id}:`, error);
        return null;
    }
}

// Obtenir le nom français
function getFrenchName(speciesData) {
    const frenchName = speciesData.names.find(name => name.language.name === 'fr');
    return frenchName ? frenchName.name : speciesData.name;
}

// Obtenir la catégorie
function getCategory(speciesData) {
    const frenchGenus = speciesData.genera.find(genus => genus.language.name === 'fr');
    return frenchGenus ? frenchGenus.genus : 'Pokémon';
}

// Afficher les Pokémon
function displayPokemon(pokemonList) {
    const grid = document.getElementById('pokemonGrid');
    grid.innerHTML = '';

    pokemonList.forEach(pokemon => {
        if (!pokemon) return;

        const card = createPokemonCard(pokemon);
        grid.appendChild(card);
    });
}

// Créer une carte Pokémon
function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.className = `pokemon-card card-${pokemon.types[0]}`;
    card.onclick = () => openPokemonModal(pokemon);

    const mainStat = pokemon.stats.find(s => s.name === 'hp');
    const heightStat = pokemon.height;

    card.innerHTML = `
        <div class="card-header">
            <span class="pokemon-number">#${String(pokemon.id).padStart(3, '0')}</span>
            <button class="favorite-btn" onclick="toggleFavorite(event, ${pokemon.id})">
                ${isFavorite(pokemon.id) ? '❤️' : '🤍'}
            </button>
        </div>
        <div class="pokemon-image-container">
            <img src="${pokemon.image}" alt="${pokemon.frenchName}" class="pokemon-image">
        </div>
        <div class="pokemon-info">
            <h2 class="pokemon-name">${pokemon.frenchName}</h2>
            <p class="pokemon-category">${pokemon.category}</p>
            <div class="pokemon-types">
                ${pokemon.types.map(type => `
                    <span class="type-badge type-${type}">
                        ${typeTranslations[type] || type}
                    </span>
                `).join('')}
            </div>
            <div class="pokemon-stats-preview">
                <div class="stat-item">
                    <div class="stat-label">Poids</div>
                    <div class="stat-value">${pokemon.weight} kg</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Taille</div>
                    <div class="stat-value">${pokemon.height} m</div>
                </div>
            </div>
        </div>
    `;

    return card;
}

// Ouvrir le modal avec les détails
async function openPokemonModal(pokemon) {
    const modal = document.getElementById('pokemonModal');
    const modalBody = document.getElementById('modalBody');

    // Récupérer la chaîne d'évolution
    const evolutionChain = await fetchEvolutionChain(pokemon.evolutionChainUrl);

    modalBody.innerHTML = `
        <div class="modal-header" style="background: linear-gradient(135deg, ${getTypeColor(pokemon.types[0])} 0%, ${getTypeColor(pokemon.types[0])}dd 100%); padding: 30px; border-radius: 20px 20px 0 0; margin: -40px -40px 20px -40px;">
            <span class="modal-pokemon-number">#${String(pokemon.id).padStart(3, '0')}</span>
            <img src="${pokemon.image}" alt="${pokemon.frenchName}" class="modal-pokemon-image">
            <h2 class="modal-pokemon-name">${pokemon.frenchName}</h2>
            <div class="pokemon-types">
                ${pokemon.types.map(type => `
                    <span class="type-badge type-${type}">
                        ${typeTranslations[type] || type}
                    </span>
                `).join('')}
            </div>
        </div>

        <div class="modal-tabs">
            <button class="tab-btn active" onclick="switchTab(event, 'about')">À propos</button>
            <button class="tab-btn" onclick="switchTab(event, 'stats')">Stats</button>
            <button class="tab-btn" onclick="switchTab(event, 'evolution')">Évolution</button>
        </div>

        <div id="about-tab" class="tab-content active">
            <p style="margin-bottom: 20px; line-height: 1.6;">${pokemon.description}</p>
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Taille</div>
                    <div class="info-value">${pokemon.height} m</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Poids</div>
                    <div class="info-value">${pokemon.weight} kg</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Catégorie</div>
                    <div class="info-value">${pokemon.category}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Capacités</div>
                    <div class="info-value" style="text-transform: capitalize;">
                        ${pokemon.abilities.join(', ')}
                    </div>
                </div>
            </div>
        </div>

        <div id="stats-tab" class="tab-content">
            <div class="stats-grid">
                ${pokemon.stats.map(stat => `
                    <div class="stat-row">
                        <span class="stat-name">${statTranslations[stat.name] || stat.name}</span>
                        <span class="stat-value-text">${stat.value}</span>
                        <div class="stat-bar-container">
                            <div class="stat-bar" style="width: ${(stat.value / 255) * 100}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="info-grid" style="margin-top: 30px;">
                <div class="info-item">
                    <div class="info-label">Total</div>
                    <div class="info-value">${pokemon.stats.reduce((sum, stat) => sum + stat.value, 0)}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Moyenne</div>
                    <div class="info-value">${Math.round(pokemon.stats.reduce((sum, stat) => sum + stat.value, 0) / pokemon.stats.length)}</div>
                </div>
            </div>
        </div>

        <div id="evolution-tab" class="tab-content">
            ${evolutionChain.length > 0 ? `
                <div class="evolution-chain">
                    ${evolutionChain.map((evo, index) => `
                        ${index > 0 ? '<div class="evolution-arrow">→</div>' : ''}
                        <div class="evolution-item" onclick="openPokemonById(${evo.id})">
                            <img src="${evo.image}" alt="${evo.name}" class="evolution-image">
                            <div class="evolution-name">${evo.name}</div>
                        </div>
                    `).join('')}
                </div>
            ` : '<p style="text-align: center; opacity: 0.7;">Aucune évolution disponible</p>'}
        </div>
    `;

    modal.style.display = 'block';
}

// Récupérer la chaîne d'évolution
async function fetchEvolutionChain(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const chain = [];
        let current = data.chain;

        while (current) {
            const pokemonId = parseInt(current.species.url.split('/').slice(-2, -1)[0]);
            const pokemon = allPokemon.find(p => p.id === pokemonId);

            if (pokemon) {
                chain.push({
                    id: pokemon.id,
                    name: pokemon.frenchName,
                    image: pokemon.image
                });
            }

            current = current.evolves_to[0];
        }

        return chain;
    } catch (error) {
        console.error('Erreur lors de la récupération de la chaîne d\'évolution:', error);
        return [];
    }
}

// Obtenir la couleur d'un type
function getTypeColor(type) {
    const colors = {
        water: '#4A90E2',
        fire: '#F08030',
        grass: '#78C850',
        electric: '#F8D030',
        psychic: '#F85888',
        ice: '#98D8D8',
        dragon: '#7038F8',
        dark: '#705848',
        fairy: '#EE99AC',
        normal: '#A8A878',
        fighting: '#C03028',
        flying: '#A890F0',
        poison: '#A040A0',
        ground: '#E0C068',
        rock: '#B8A038',
        bug: '#A8B820',
        ghost: '#705898',
        steel: '#B8B8D0'
    };
    return colors[type] || '#A8A878';
}

// Changer d'onglet dans le modal
function switchTab(event, tabName) {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    event.target.classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

// Ouvrir un Pokémon par ID
function openPokemonById(id) {
    const pokemon = allPokemon.find(p => p.id === id);
    if (pokemon) {
        openPokemonModal(pokemon);
    }
}

// Configuration des écouteurs d'événements
function setupEventListeners() {
    // Recherche
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);

    // Filtre par type
    const typeFilter = document.getElementById('typeFilter');
    typeFilter.addEventListener('change', handleTypeFilter);

    // Fermer le modal
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', closeModal);

    const modal = document.getElementById('pokemonModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Échap pour fermer le modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Recherche
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const typeFilter = document.getElementById('typeFilter').value;

    filteredPokemon = allPokemon.filter(pokemon => {
        const matchesSearch = pokemon.frenchName.toLowerCase().includes(searchTerm) ||
                            pokemon.name.toLowerCase().includes(searchTerm) ||
                            String(pokemon.id).includes(searchTerm);

        const matchesType = !typeFilter || pokemon.types.includes(typeFilter);

        return matchesSearch && matchesType;
    });

    displayPokemon(filteredPokemon);
}

// Filtre par type
function handleTypeFilter(e) {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedType = e.target.value;

    filteredPokemon = allPokemon.filter(pokemon => {
        const matchesSearch = pokemon.frenchName.toLowerCase().includes(searchTerm) ||
                            pokemon.name.toLowerCase().includes(searchTerm) ||
                            String(pokemon.id).includes(searchTerm);

        const matchesType = !selectedType || pokemon.types.includes(selectedType);

        return matchesSearch && matchesType;
    });

    displayPokemon(filteredPokemon);
}

// Peupler le filtre de type
function populateTypeFilter() {
    const typeFilter = document.getElementById('typeFilter');
    const types = new Set();

    allPokemon.forEach(pokemon => {
        pokemon.types.forEach(type => types.add(type));
    });

    Array.from(types).sort().forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = typeTranslations[type] || type;
        typeFilter.appendChild(option);
    });
}

// Fermer le modal
function closeModal() {
    const modal = document.getElementById('pokemonModal');
    modal.style.display = 'none';
}

// Gestion des favoris
function toggleFavorite(event, pokemonId) {
    event.stopPropagation();
    const favorites = getFavorites();
    const index = favorites.indexOf(pokemonId);

    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(pokemonId);
    }

    localStorage.setItem('pokemonFavorites', JSON.stringify(favorites));

    // Mettre à jour l'affichage
    displayPokemon(filteredPokemon);
}

function isFavorite(pokemonId) {
    const favorites = getFavorites();
    return favorites.includes(pokemonId);
}

function getFavorites() {
    const stored = localStorage.getItem('pokemonFavorites');
    return stored ? JSON.parse(stored) : [];
}
