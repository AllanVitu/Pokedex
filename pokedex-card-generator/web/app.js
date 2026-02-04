const TYPE_COLORS = {
  Fire: ["#ffb15a","#ff6b2d","#3a1208"],
  Water:["#7cd8ff","#2f7cff","#071525"],
  Grass:["#7cffb4","#2edb7c","#061a10"],
  Electric:["#ffe27a","#ffb700","#241b05"],
  Poison:["#c48cff","#7a3cff","#190a22"],
  Psychic:["#ff8ad8","#ff3ca6","#220615"],
  Ice:["#b7f4ff","#6bdcff","#061a20"],
  Dragon:["#9ea8ff","#5a63ff","#090a25"],
  Fairy:["#ffd0f0","#ff70c4","#1f0715"],
  Fighting:["#ff8a7a","#ff3c2d","#220706"],
  Ground:["#ffd59a","#e39b3b","#1f1206"],
  Rock:["#e9d2a5","#b8924b","#1b1207"],
  Bug:["#c9ff7a","#78d92e","#0f1a06"],
  Ghost:["#b8a8ff","#7a63ff","#0f0a25"],
  Steel:["#cfe2f1","#7ca3c7","#06101a"],
  Normal:["#f1f1f1","#b6bcc7","#0c1017"],
  Flying:["#b8e2ff","#6aa9ff","#071224"],
  Unknown:["#c7c7c7","#8a8a8a","#0b0b0b"],
};

function gradientFor(types){
  const t = types?.[0] ?? "Unknown";
  const [a,b,c] = TYPE_COLORS[t] ?? TYPE_COLORS.Unknown;
  return { a,b,c };
}

window.__setPokemon = (p) => {
  document.getElementById("num").textContent = p.num ?? `#${String(p.id).padStart(3,"0")}`;
  document.getElementById("name").textContent = p.name ?? "Pokémon";
  document.getElementById("category").textContent = p.category ?? "Pokémon";
  document.getElementById("desc").textContent = p.description ?? "";
  document.getElementById("height").textContent = p.height ? String(p.height) : "—";
  document.getElementById("weight").textContent = p.weight ? String(p.weight) : "—";
  document.getElementById("monogram").textContent = (p.name?.[0] ?? "P").toUpperCase();

  // Chips
  const chips = document.getElementById("chips");
  chips.innerHTML = "";
  (p.types ?? ["Unknown"]).forEach(t => {
    const el = document.createElement("div");
    el.className = "chip";
    el.innerHTML = `<span class="dot"></span><span>${t}</span>`;
    chips.appendChild(el);
  });

  // Background glow based on type
  const {a,b,c} = gradientFor(p.types);
  const glow = document.getElementById("glow");
  glow.style.background = `radial-gradient(circle at 30% 25%, ${a}55, transparent 55%),
                          radial-gradient(circle at 55% 55%, ${b}44, transparent 60%),
                          radial-gradient(circle at 40% 70%, ${c}55, transparent 68%)`;

  // Optional image (local path or URL)
  const img = document.getElementById("pokeImg");
  if (p.image) {
    img.src = p.image;
    img.style.display = "block";
    document.getElementById("monogram").style.display = "none";
  } else {
    img.removeAttribute("src");
    img.style.display = "none";
    document.getElementById("monogram").style.display = "grid";
  }
};
