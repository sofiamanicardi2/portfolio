// --- 1. Database Completo Progetti ---
const projectsDatabase = {
  "matrix": {
    title: "Matrix: The subway scene",
    cat: "Computer Animation",
    year: "2026",
    credits: "<p><strong>RUOLO</strong><br>Regia, fotografia, montaggio, animazione, modellazione, shading</p><p style='margin-top:12px;'><strong>COLLABORATORI</strong><br>Bicego Sveva</p><p style='margin-top:12px;'><a href='https://youtu.be/ibzqmCOviws' target='_blank' rel='noopener noreferrer'>https://youtu.be/ibzqmCOviws</a></p>",
    desc: "Sviluppato durante il corso di Computer Animation al Politecnico di Milano, questo progetto di modellazione e animazione 3D studia una scena iconica del film “The Matrix”. Il lavoro ha coperto l’intero workflow produttivo, dalla ricostruzione dell’ambiente e dei materiali fino allo studio dell’illuminazione e del rendering finale. L’obiettivo principale è stato quello di tradurre l’atmosfera cinematografica originale in una sequenza animata, sperimentando con il timing e i movimenti di camera per bilanciare rigore tecnico e narrazione. Il progetto indaga come il movimento e la gestione dello spazio 3D possano diventare strumenti chiave per una comunicazione visiva efficace e coinvolgente.",
    images: ["assets/videos/Matrix_Subway.mp4", "assets/images/matrix1.jpg", "assets/images/matrix2.jpg", "assets/images/matrix3.jpg", "assets/images/matrix4.jpg"]
  },
  "ava": {
    title: "AVA",
    cat: "Corporate Identity",
    year: "2025",
    credits: "<p><strong>RUOLO</strong><br>Art direction, progettazione editoriale, logo design, produzione video</p><p style='margin-top:12px;'><strong>COLLABORATORI</strong><br>Ambrosi Arianna, Bicego Sveva, Manera Gaia, Redaelli Chiara</p><p style='margin-top:12px;'><a href='https://youtu.be/2N40f6AjNOkI' target='_blank' rel='noopener noreferrer'>https://youtu.be/2N40f6AjNOkI</a></p>",
    desc: "Nato durante il corso di Corporate Identity al Politecnico di Milano, AVA (Accademia del Vuoto Artistico) è un progetto concettuale che dà forma a un’istituzione immaginaria dedicata all’arte del creare dal nulla. Il cuore del progetto risiede nell’esplorazione del silenzio e dello spazio negativo, intesi non come semplici mancanze, ma come potenti generatori di significato. Questa filosofia si traduce in un’identità visiva rigorosa ed essenziale, dove l’uso strategico del bianco, la tipografia verticale e le griglie modulari trasformano l’idea del “vuoto” in un linguaggio di design concreto, coerente e declinabile con estrema chiarezza su ogni supporto, dal formato fisico al digitale.",
    images: ["assets/videos/AVA_brandreel.mp4", "assets/images/AVA1.jpg", "assets/images/AVA2.jpg", "assets/images/AVA3.jpg", "assets/images/AVA4.jpg", "assets/images/AVA5.jpg", "assets/images/AVA7.jpg", "assets/images/AVA8.jpg", "assets/images/AVA9.jpg"]
  },
  "unec": {
    title: "UNEC",
    cat: "Speculative Design",
    year: "2026",
    credits: "<p><strong>RUOLO</strong><br>UX Designer, UI Designer, animazione</p><p style='margin-top:12px;'><strong>COLLABORATORI</strong><br>Ambrosi Arianna, Bicego Sveva, Manera Gaia, Mazzoleni Marta<p style='margin-top:12px;'><a href='https://www.antidisciplinarylab.it/undeclared/' target='_blank' rel='noopener noreferrer'>https://www.antidisciplinarylab.it/undeclared/</a></p>",
    desc: "UNEC (United Nations for Endangered Cultures) è un progetto di design speculativo sviluppato durante il laboratorio di sintesi finale al Politecnico di Milano, ambientato nel 2075, in uno scenario di conflitti globali e culture a rischio estinzione. Di fronte al fallimento politico, il progetto si interroga: “E se l’unico modo per preservare una cultura fosse congelarla?”. A questo scopo nasce UNEC, un’organizzazione non governativa dell’ONU che mira a tutelare le culture attraverso la crioconservazione dei loro rappresentanti. Per finanziare e legittimare l’operazione nasce Cryocare, un dispositivo domestico che trasforma il donatore in “Caretaker” tramite un’esperienza gamificata di cura quotidiana. Così, mentre i portatori originari sono crioconservati, la loro cultura continua a vivere attraverso le azioni dei Caretaker che, interagendo col dispositivo, imparano a conoscerla.",
    images: ["assets/videos/UNEC_teaser.mp4", "assets/images/UNEC1.png", "assets/images/UNEC2.jpg", "assets/images/UNEC3.jpg", "assets/images/UNEC4.jpg", "assets/images/UNEC5.png", "assets/images/UNEC6.jpg"]
  },
  "principe-granchio": {
    title: "Il Principe Granchio",
    cat: "Game Design",
    year: "2025",
    credits: "<p><strong>RUOLO</strong><br>Programmazione, coding, illustrazione, animazione, art direction</p><p style='margin-top:12px;'><strong>COLLABORATORI</strong><br>Bonzi Chiara, Caenazzo Leonardo, De Sensi Aurora, Trionfante Elia, Pisati Noemi, Vergani Arianna</p><p style='margin-top:12px;'><a href='https://chiarabonzi.github.io/principe_granchio/' target='_blank' rel='noopener noreferrer'>https://chiarabonzi.github.io/principe_granchio/</a></p>",
    desc: "Sviluppato durante il laboratorio di Game Design al Politecnico di Milano, questo progetto ha visto lo sviluppo di una piattaforma educativa che affronta il tema dell’inquinamento da plastica degli oceani attraverso uno storytelling immersivo. Nei panni di una biologa marina, il giocatore deve navigare in un mare soffocato dai rifiuti, dove il fulcro dell’esperienza risiede in un sistema di scelte morali: decidere se rallentare per raccogliere la plastica e risanare l’ambiente o procedere rapidamente ignorando il danno ecologico. Grazie a una narrazione ramificata che conduce a finali differenti, il gioco mette in luce l’impatto cumulativo delle azioni individuali, trasformando le meccaniche di gioco in una riflessione sulla responsabilità ambientale e sul valore del singolo gesto per il cambiamento collettivo.",
    images: ["assets/images/granchio1.png", "assets/images/granchio2.png", "assets/images/granchio3.png", "assets/images/granchio4.png", "assets/images/granchio5.png", "assets/images/granchio6.png"]
  },
  "poldi-pezzoli": {
    title: "Poldi Pezzoli",
    cat: "Motion Graphics",
    year: "2026",
    credits: "<p><strong>RUOLO</strong><br>Animazione, illustrazione, art director</p><p style='margin-top:12px;'><strong>COLLABORATORI</strong><br>Ambrosi Arianna, Bicego Sveva, Piccinelli Sofia</p><p style='margin-top:12px;'><a href='https://youtu.be/05cYP7zKzh0' target='_blank' rel='noopener noreferrer'>https://youtu.be/05cYP7zKzh0</a></p>",
    desc: "Questo video animato, realizzato per il Museo Poldi Pezzoli di Milano, racconta in chiave divulgativa la figura del fondatore Gian Giacomo Poldi Pezzoli. Per favorire massima chiarezza e accessibilità, il racconto si affida al contrasto tra una voce narrante femminile e il vissuto del protagonista, inseriti in un impianto sonoro vivace dal ritmo contemporaneo. L’adozione della tecnica mixed-media crea una sinergia ideale tra analogico e digitale, restituendo una visione attuale della casa-museo. La scelta di combinare materiali differenti riflette visivamente la straordinaria varietà della collezione permanente, celebrando la natura sfaccettata del personaggio milanese.",
    images: ["assets/videos/Poldi_Pezzoli.mp4","assets/images/img1.webp", "assets/images/img2.webp", "assets/images/img3.webp"]
  },
  "palazzo-filoni": {
    title: "Palazzo Filoni",
    cat: "UX/UI Interaction Design",
    year: "2026",
    credits: "<p><strong>RUOLO</strong><br>UX Designer, UI Designer, illustrazione, animazione, art director</p>",
    desc: "Il progetto è stato realizzato durante il corso di Licensing e Brand Extension al Politecnico di Milano, in collaborazione con la società Eurobuilding S.p.a., e successivamente esposto a Milano durante l’edizione 2026 del Fuorisalone. Questo progetto trasforma il patrimonio neoclassico di Palazzo Filoni in un ecosistema digitale per la produttività. Superando il concetto di archivio statico, l’identità del brand invita l’utente ad “abitare” la bellezza storica attraverso una Virtual Gallery progettata per il Deep Work. Sfruttando la neuroestetica, il progetto ha visto la virtualizzazione delle stanze del palazzo, combinando colori e suoni. Attraverso una Virtual Gallery, l’utente accede a stanze mappate su specifiche sinestesie cromatico-acustiche: dalla Biblioteca per il problem solving, fino alla Fama Alata per la scrittura creativa, ogni stanza è mirata al raggiungimento dello stato di flow ottimale.",
    images: ["assets/images/FILONI1.png", "assets/images/FILONI2.png", "assets/images/FILONI3.png", "assets/images/FILONI4.png"]
  },
  "diane-arbus": {
    title: "Diane Arbus",
    cat: "Editorial Design",
    year: "2026",
    credits: "<p><strong>RUOLO</strong><br>Editorial design</p>",
    desc: "Questo progetto è un saggio editoriale sulla figura della fotografa documentarista Diane Arbus. Superando il concetto di oggettività documentaria, l’identità visiva del saggio dimostra come ogni scatto di Diane Arbus sia un “filtraggio” profondo, guidato da una radicata urgenza interiore. Attraverso un layout crudo e impattante, in cui le fotografie sono al centro, il progetto esplora la “fuga dalla perfezione” della fotografa americana, che abbandona l’universo borghese per abitare la complessità dei freaks, della disabilità e della marginalità. Sfruttando la forza indagatrice del flash e un approccio basato sulla fiducia, l’opera evolve da semplice documento sociale a drammatico strumento di ricerca di salvezza esistenziale.",
    images: ["assets/images/DIANE11.jpg", "assets/images/DIANE2.jpg", "assets/images/DIANE3.jpg", "assets/images/DIANE4.jpg", "assets/images/DIANE5.jpg", "assets/images/DIANE6.jpg", "assets/images/DIANE7.jpg", "assets/images/DIANE8.jpg", "assets/images/DIANE9.jpg", "assets/images/DIANE10.jpg", "assets/images/DIANE12.jpg", "assets/images/DIANE13.jpg"]
  }
};

const slugsList = Object.keys(projectsDatabase);
let currentSlugIndex = 0;

// --- 2. Setup Three.js per Drafts (Materiali Leggeri & Piani Paralleli) ---
const container = document.getElementById('webgl-container');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 7.5);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // 1.5 per evitare crash di memoria su Safari
container.appendChild(renderer.domElement);

const worldGroup = new THREE.Group();
scene.add(worldGroup);

const textureLoader = new THREE.TextureLoader();
const meshes = [];

// Mappatura delle posizioni finali
const draftsLayout = [
  // Centro
  { img: 'assets/images/DIANE2.jpg', title: 'Diane Arbus',              x:  0.0,  y: -0.65, z:  0.50, w: 1.60, h: 0.65 },
  { img: 'assets/images/AVA1.jpg', title: 'AVA',                        x: -0.3,  y:  0.15, z:  0.25, w: 1.35, h: 0.85 },
  { img: 'assets/images/UNEC1.png', title: 'UNEC',                      x:  0.75, y: -0.20, z:  0.15, w: 1.10, h: 1.90 },
  { img: 'assets/images/granchio1.png', title: 'Principe Granchio',     x: -0.05, y:  0.60, z: -0.10, w: 0.95, h: 0.95 },
  { img: 'assets/images/FILONI1.png', title: 'Palazzo Filoni',          x: -0.35, y: -1.05, z: -0.05, w: 1.15, h: 1.15 },

  // Ala Sinistra
  { img: 'assets/images/matrix1.jpg', title: 'Matrix: The subway scene', x: -1.80, y:  0.10, z:  0.30, w: 1.25, h: 0.70 },
  { img: 'assets/images/UNEC2.jpg', title: 'UNEC',                      x: -3.50, y: -0.25, z:  0.10, w: 1.40, h: 0.85 },
  { img: 'assets/images/img5.webp', title: 'Gaze Focus',                x: -2.90, y: -1.15, z:  0.40, w: 1.20, h: 1.00 },
  { img: 'assets/images/UNEC3.jpg', title: 'UNEC',                      x: -2.10, y: -1.95, z:  0.20, w: 1.40, h: 0.85 },
  { img: 'assets/images/img6.webp', title: 'Monolith Study',            x: -3.00, y:  1.30, z: -0.20, w: 1.00, h: 1.25 },

  // Fascia Superiore
  { img: 'assets/images/img1.webp', title: 'Embroidered Type',          x: -0.65, y:  1.75, z: -0.15, w: 1.15, h: 0.90 },
  { img: 'assets/images/img3.webp', title: 'Leather Tote',              x:  1.35, y:  1.20, z: -0.30, w: 1.15, h: 1.25 },
  { img: 'assets/images/matrix2.jpg', title: 'Matrix: The subway scene', x:  2.30, y:  1.55, z: -0.25, w: 1.10, h: 0.65 },

  // Ala Destra
  { img: 'assets/images/matrix4.jpg', title: 'Matrix: The subway scene', x:  1.85, y: -0.80, z:  0.35, w: 1.30, h: 0.90 },
  { img: 'assets/images/AVA2.jpg', title: 'AVA',                        x:  3.10, y:  0.15, z: -0.15, w: 1.15, h: 1.45 },
  { img: 'assets/images/granchio2.png', title: 'Principe Granchio',     x:  3.20, y: -0.50, z:  0.10, w: 1.25, h: 0.70 }
];

draftsLayout.forEach((item, index) => {
  const geo = new THREE.PlaneGeometry(item.w || 1.15, item.h || 1.45);
  
  const mat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0, // Partono completamente invisibili
    side: THREE.DoubleSide,
    depthTest: true
  });

  textureLoader.load(
    item.img,
    (tex) => { 
      mat.map = tex; 
      mat.needsUpdate = true; 
    },
    undefined,
    () => { mat.color.setHex(0x111111); }
  );

  const mesh = new THREE.Mesh(geo, mat);
  // Posizione finale salvata
  mesh.position.set(item.x, item.y, item.z);
  mesh.rotation.set(0, 0, 0);
  mesh.visible = false; // Nascoste all'avvio

  mesh.userData = { 
    id: index, 
    title: item.title, 
    origPos: { x: item.x, y: item.y, z: item.z } 
  };

  worldGroup.add(mesh);
  meshes.push(mesh);
});

// --- 3. Macchina da Scrivere su Schermo Nero + Piazzamento Card a Mano Invisibile ---
const textToType = "A collection of fragments in perpetual state of becoming.";
const typewriterEl = document.getElementById('typewriter');
let typeIndex = 0;
let isDraftsAnimated = false;
let typeInterval = null;

function startDraftsExperience() {
  if (isDraftsAnimated) return;
  isDraftsAnimated = true;

  // 1. Reset: tutto nero e invisibile
  meshes.forEach(m => {
    m.visible = false;
    m.material.opacity = 0;
  });

  if (typewriterEl) {
    typewriterEl.textContent = "";
    typeIndex = 0;
  }
  clearInterval(typeInterval);

  // 2. Battitura testo al centro su schermo nero
  typeInterval = setInterval(() => {
    if (typewriterEl && typeIndex < textToType.length) {
      typewriterEl.textContent += textToType.charAt(typeIndex);
      typeIndex++;
    } else {
      clearInterval(typeInterval);
    }
  }, 36);

  // 3. Comparsa sequenziale a caso: una dopo l'altra come posizionate nello spazio
  // Ordine casuale per non farle uscire tutte insieme
  const shuffledIndices = meshes.map((_, i) => i).sort(() => Math.random() - 0.5);

  shuffledIndices.forEach((meshIdx, step) => {
    const mesh = meshes[meshIdx];
    const orig = mesh.userData.origPos;

    // Delay progressivo: compare una card ogni ~180ms a partire da dopo che la prima riga è scritta
    const delayTime = 0.8 + (step * 0.22);

    // Offset di arrivo: arriva da una posizione leggermente sfasata (effetto piazzamento)
    const offsetX = (Math.random() - 0.5) * 0.8;
    const offsetY = (Math.random() - 0.5) * 0.8;
    const offsetZ = 1.2 + Math.random() * 0.8;

    gsap.delayedCall(delayTime, () => {
      mesh.visible = true;
      // Posizione provvisoria leggermente staccata
      mesh.position.set(orig.x + offsetX, orig.y + offsetY, orig.z + offsetZ);
      mesh.material.opacity = 0;

      // Movimento fluido verso la posizione finale
      gsap.to(mesh.position, {
        x: orig.x,
        y: orig.y,
        z: orig.z,
        duration: 0.85,
        ease: "power2.out"
      });

      // Comparsa opaca decisa
      gsap.to(mesh.material, {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out"
      });
    });
  });
}

// --- 4. Rotazione Reattiva & Ampia in Spazio 3D ---
let mouseX = 0, mouseY = 0;
let targetRotX = 0, targetRotY = 0;
let isZoomed = false, activeMesh = null;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const projectTitleEl = document.getElementById('project-title-top');

window.addEventListener('mousemove', (e) => {
  if (isZoomed) return;
  
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

  // Moltiplicatori ampi per permettere la vista orizzontale/verticale delle lastre
  targetRotY = mouseX * 1.9;  // Inclinazione laterale accentuata
  targetRotX = -mouseY * 1.5; // Inclinazione verticale accentuata

  // Hover detection per i titoli
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(meshes);

  if (intersects.length > 0) {
    const hovered = intersects[0].object;
    if (projectTitleEl) {
      projectTitleEl.textContent = hovered.userData.title;
      projectTitleEl.classList.add('visible');
    }
  } else if (!isZoomed) {
    if (projectTitleEl) projectTitleEl.classList.remove('visible');
  }
});

// --- 5. Zoom-In / Zoom-Out fluido al Click ---
window.addEventListener('click', (e) => {
  if (
    e.target.closest('.main-header') || 
    e.target.closest('.bottom-toggle') || 
    e.target.closest('#view-home') ||
    e.target.closest('#view-about') || 
    e.target.closest('#view-projects') || 
    e.target.closest('#view-project-detail')
  ) return;

  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(meshes);

  if (intersects.length > 0 && !isZoomed) {
    const target = intersects[0].object;
    activeMesh = target;
    isZoomed = true;

    if (projectTitleEl) {
      projectTitleEl.textContent = target.userData.title;
      projectTitleEl.classList.add('visible');
    }
    if (heroTextEl) heroTextEl.style.opacity = '0';

    gsap.to(worldGroup.rotation, { x: 0, y: 0, z: 0, duration: 0.8, ease: "power3.inOut" });
    gsap.to(target.position, { x: 0, y: 0, z: 4.8, duration: 0.8, ease: "power3.inOut" });
    gsap.to(target.scale, { x: 2.3, y: 2.3, z: 2.3, duration: 0.8, ease: "power3.inOut" });

    meshes.forEach((m) => {
      if (m !== target) gsap.to(m.material, { opacity: 0.05, duration: 0.5 });
    });

  } else if (isZoomed) {
    isZoomed = false;
    if (projectTitleEl) projectTitleEl.classList.remove('visible');
    if (heroTextEl) heroTextEl.style.opacity = '1';

    gsap.to(activeMesh.position, {
      x: activeMesh.userData.origPos.x,
      y: activeMesh.userData.origPos.y,
      z: activeMesh.userData.origPos.z,
      duration: 0.7,
      ease: "power3.out"
    });
    gsap.to(activeMesh.scale, { x: 1, y: 1, z: 1, duration: 0.7, ease: "power3.out" });

    meshes.forEach((m) => gsap.to(m.material, { opacity: 0.94, duration: 0.5 }));
    activeMesh = null;
  }
});

// --- 6. Gestione Switch Schede (Home, Drafts, Projects, About, Detail) ---
function switchSection(target) {
  const viewHome = document.getElementById('view-home');
  const viewDrafts = document.getElementById('view-drafts');
  const viewProjects = document.getElementById('view-projects');
  const viewAbout = document.getElementById('view-about');
  const viewDetail = document.getElementById('view-project-detail');

  // Rimuove 'active' da tutte le schermate
  viewHome?.classList.remove('active');
  viewDrafts?.classList.remove('active');
  viewProjects?.classList.remove('active');
  viewAbout?.classList.remove('active');
  viewDetail?.classList.remove('active');

  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  if (target === 'home') {
    document.body.classList.add('in-home');
    viewHome?.classList.add('active');
    document.body.style.overflowY = 'hidden';
    if (projectTitleEl) projectTitleEl.classList.remove('visible');
  } else {
    document.body.classList.remove('in-home');

    if (target === 'projects') {
      viewProjects?.classList.add('active');
      document.querySelectorAll('[data-target="projects"]').forEach(b => b.classList.add('active'));
      document.body.style.overflowY = 'hidden';
    } else if (target === 'about') {
      viewAbout?.classList.add('active');
      document.querySelectorAll('[data-target="about"]').forEach(b => b.classList.add('active'));
      document.body.style.overflowY = 'hidden';
    } else if (target === 'drafts') {
      viewDrafts?.classList.add('active');
      document.querySelectorAll('[data-target="drafts"]').forEach(b => b.classList.add('active'));
      document.body.style.overflowY = 'hidden';
      startDraftsExperience();
    }
  }
}

// Click listener delegato per qualsiasi bottone di navigazione
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.nav-btn');
  if (btn) {
    const target = btn.getAttribute('data-target');
    if (target) {
      e.preventDefault();
      switchSection(target);
    }
  }
});

const btnCatalogue = document.getElementById('btn-catalogue');
if (btnCatalogue) {
  btnCatalogue.addEventListener('click', () => switchSection('projects'));
}

// --- 7. Gestione Schede Tecniche (Case Studies) ---
function populateProjectDetail(slug) {
  const data = projectsDatabase[slug];
  if (!data) return;

  currentSlugIndex = slugsList.indexOf(slug);

  const dTitle = document.getElementById('d-title');
  const dCat = document.getElementById('d-cat');
  const dYear = document.getElementById('d-year');
  const dCredits = document.getElementById('d-credits');
  const dDesc = document.getElementById('d-desc');
  const gallery = document.getElementById('d-gallery');

  if (dTitle) dTitle.textContent = data.title;
  if (dCat) dCat.textContent = data.cat;
  if (dYear) dYear.textContent = data.year;
  if (dCredits) dCredits.innerHTML = data.credits;
  if (dDesc) dDesc.textContent = data.desc;

  if (gallery) {
    gallery.innerHTML = '';
    data.images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = data.title;
      gallery.appendChild(img);
    });
  }
}

function openProjectPage(slug) {
  populateProjectDetail(slug);

  document.getElementById('view-home')?.classList.remove('active');
  document.getElementById('view-drafts')?.classList.remove('active');
  document.getElementById('view-projects')?.classList.remove('active');
  document.getElementById('view-about')?.classList.remove('active');
  
  const viewDetail = document.getElementById('view-project-detail');
  viewDetail?.classList.add('active');
  viewDetail?.scrollTo({ top: 0 });
}

document.addEventListener('click', (e) => {
  const cell = e.target.closest('.project-cell');
  if (cell) {
    const slug = cell.getAttribute('data-slug');
    if (slug) openProjectPage(slug);
  }
});

document.getElementById('detail-close-btn')?.addEventListener('click', () => {
  switchSection('projects');
});

document.getElementById('detail-next-btn')?.addEventListener('click', () => {
  currentSlugIndex = (currentSlugIndex + 1) % slugsList.length;
  const nextSlug = slugsList[currentSlugIndex];
  populateProjectDetail(nextSlug);
  document.getElementById('view-project-detail')?.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- 8. Render Loop Fluido e Veloce ---
function animate() {
  requestAnimationFrame(animate);

  if (!isZoomed) {
    // Reattività rapida (0.08 invece di 0.04)
    worldGroup.rotation.y += (targetRotY - worldGroup.rotation.y) * 0.08;
    worldGroup.rotation.x += (targetRotX - worldGroup.rotation.x) * 0.08;
  }

  renderer.render(scene, camera);
}
animate();


// Tracciamento fluido dell'unico blob che segue il cursore in tutta la Home
let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;
let currentX = targetX;
let currentY = targetY;

window.addEventListener('mousemove', (e) => {
  if (!document.body.classList.contains('in-home')) return;
  targetX = e.clientX;
  targetY = e.clientY;
});

function animateHomeBackground() {
  if (document.body.classList.contains('in-home')) {
    // Inerzia fluida
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;

    const cursorBlob = document.getElementById('blob-cursor');
    if (cursorBlob) {
      cursorBlob.style.left = `${currentX}px`;
      cursorBlob.style.top = `${currentY}px`;
    }
  }
  requestAnimationFrame(animateHomeBackground);
}
animateHomeBackground();



// --- Gestione Lightbox Fullscreen con Toggle al Click ---
const lightbox = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

function openLightbox(src) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightbox.classList.add('active');
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('active');
  lightboxImg.src = '';
}

// 1. Click sull'immagine della galleria: va a schermo intero
document.addEventListener('click', (e) => {
  const targetImg = e.target.closest('.detail-gallery img');
  if (targetImg) {
    openLightbox(targetImg.src);
  }
});

// 2. Secondo click (sull'immagine o sullo sfondo): torna alla pagina precedente
lightbox?.addEventListener('click', closeLightbox);
lightboxCloseBtn?.addEventListener('click', closeLightbox);

// 3. Chiusura rapida con tasto Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox?.classList.contains('active')) {
    closeLightbox();
  }
});



// Avvio in Home di default
switchSection('home');