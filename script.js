// --- 1. Database Completo Progetti ---
const projectsDatabase = {
  "matrix": {
    title: "Matrix: The subway scene",
    cat: "Computer Animation",
    year: "2026",
    credits: "<p><strong>RUOLO</strong><br>Regia, fotografia, montaggio, animazione, modellazione, shading</p><p style='margin-top:12px;'><strong>COLLABORATORI</strong><br>Bicego Sveva</p><p style='margin-top:12px;'><a href='https://youtu.be/ibzqmCOviws' target='_blank' rel='noopener noreferrer'>https://youtu.be/ibzqmCOviws</a></p>",
    desc: "Sviluppato durante il corso di Computer Animation al Politecnico di Milano, questo progetto di modellazione e animazione 3D studia una scena iconica del film “The Matrix”. Il lavoro ha coperto l’intero workflow produttivo, dalla ricostruzione dell’ambiente e dei materiali fino allo studio dell’illuminazione e del rendering finale. L’obiettivo principale è stato quello di tradurre l’atmosfera cinematografica originale in una sequenza animata, sperimentando con il timing e i movimenti di camera per bilanciare rigore tecnico e narrazione. Il progetto indaga come il movimento e la gestione dello spazio 3D possano diventare strumenti chiave per una comunicazione visiva efficace e coinvolgente.",
    images: ["assets/videos/Matrix_Subway.mp4", "assets/images/Matrix_storyboard1.jpg", "assets/images/matrix1.jpg", "assets/images/Matrix_luci.jpg", "assets/images/Matrix_Neo.jpg", "assets/images/matrix2.jpg", "assets/images/Matrix_Smith.jpg", "assets/images/matrix3.jpg", "assets/images/Matrix_render_sfondo.jpg", "assets/images/matrix4.jpg"]
  },
  "ava": {
    title: "AVA",
    cat: "Corporate Identity",
    year: "2025",
    credits: "<p><strong>RUOLO</strong><br>Art direction, progettazione editoriale, logo design, produzione video</p><p style='margin-top:12px;'><strong>COLLABORATORI</strong><br>Ambrosi Arianna, Bicego Sveva, Manera Gaia, Redaelli Chiara</p><p style='margin-top:12px;'><a href='https://youtu.be/2N40f6AjNOkI' target='_blank' rel='noopener noreferrer'>https://youtu.be/2N40f6AjNOkI</a></p>",
    desc: "Nato durante il corso di Corporate Identity al Politecnico di Milano, AVA (Accademia del Vuoto Artistico) è un progetto concettuale che dà forma a un’istituzione immaginaria dedicata all’arte del creare dal nulla. Il cuore del progetto risiede nell’esplorazione del silenzio e dello spazio negativo, intesi non come semplici mancanze, ma come potenti generatori di significato. Questa filosofia si traduce in un’identità visiva rigorosa ed essenziale, dove l’uso strategico del bianco, la tipografia verticale e le griglie modulari trasformano l’idea del “vuoto” in un linguaggio di design concreto, coerente e declinabile con estrema chiarezza su ogni supporto, dal formato fisico al digitale.",
    images: ["assets/gif/logo_animation2.gif", "assets/videos/AVA_brandreel.mp4", "assets/images/AVA1.jpg", "assets/images/AVA_render.jpg", "assets/images/AVA3.jpg", "assets/images/AVA4.jpg", "assets/gif/storie.gif", "assets/gif/storie2.gif", "assets/images/AVA7.jpg", "assets/images/AVA9.jpg", "assets/images/AVA_totebag.jpg"]
  },
  "unec": {
    title: "UNEC",
    cat: "Speculative Design",
    year: "2026",
    credits: "<p><strong>RUOLO</strong><br>UX Designer, UI Designer, animazione</p><p style='margin-top:12px;'><strong>COLLABORATORI</strong><br>Ambrosi Arianna, Bicego Sveva, Manera Gaia, Mazzoleni Marta<p style='margin-top:12px;'><a href='https://www.antidisciplinarylab.it/undeclared/' target='_blank' rel='noopener noreferrer'>https://www.antidisciplinarylab.it/undeclared/</a></p>",
    desc: "UNEC (United Nations for Endangered Cultures) è un progetto di design speculativo sviluppato durante il laboratorio di sintesi finale al Politecnico di Milano, ambientato nel 2075, in uno scenario di conflitti globali e culture a rischio estinzione. Di fronte al fallimento politico, il progetto si interroga: “E se l’unico modo per preservare una cultura fosse congelarla?”. A questo scopo nasce UNEC, un’organizzazione non governativa dell’ONU che mira a tutelare le culture attraverso la crioconservazione dei loro rappresentanti. Per finanziare e legittimare l’operazione nasce Cryocare, un dispositivo domestico che trasforma il donatore in “Caretaker” tramite un’esperienza gamificata di cura quotidiana. Così, mentre i portatori originari sono crioconservati, la loro cultura continua a vivere attraverso le azioni dei Caretaker che, interagendo col dispositivo, imparano a conoscerla.",
    images: ["assets/videos/UNEC_teaser.mp4", "assets/images/UNEC_poster2.jpg", "assets/images/UNEC5.png", "assets/images/UNEC_fascicoli.png", "assets/images/UNEC1.png", "assets/images/UNEC2.jpg", "assets/gif/icone_UNEC.mov", "assets/images/UNEC3.jpg", "assets/images/UNEC4.jpg", "assets/images/UNEC6.jpg"]
  },
  "principe-granchio": {
    title: "Il Principe Granchio",
    cat: "Game Design",
    year: "2025",
    credits: "<p><strong>RUOLO</strong><br>Programmazione, coding, illustrazione, animazione, art direction</p><p style='margin-top:12px;'><strong>COLLABORATORI</strong><br>Bonzi Chiara, Caenazzo Leonardo, De Sensi Aurora, Trionfante Elia, Pisati Noemi, Vergani Arianna</p><p style='margin-top:12px;'><a href='https://chiarabonzi.github.io/principe_granchio/' target='_blank' rel='noopener noreferrer'>https://chiarabonzi.github.io/principe_granchio/</a></p>",
    desc: "Sviluppato durante il laboratorio di Game Design al Politecnico di Milano, questo progetto ha visto lo sviluppo di una piattaforma educativa che affronta il tema dell’inquinamento da plastica degli oceani attraverso uno storytelling immersivo. Nei panni di una biologa marina, il giocatore deve navigare in un mare soffocato dai rifiuti, dove il fulcro dell’esperienza risiede in un sistema di scelte morali: decidere se rallentare per raccogliere la plastica e risanare l’ambiente o procedere rapidamente ignorando il danno ecologico. Grazie a una narrazione ramificata che conduce a finali differenti, il gioco mette in luce l’impatto cumulativo delle azioni individuali, trasformando le meccaniche di gioco in una riflessione sulla responsabilità ambientale e sul valore del singolo gesto per il cambiamento collettivo.",
    images: ["assets/images/granchio1.png", "assets/videos/Granchio3.mp4", "assets/images/granchio2.png", "assets/images/granchio3.png", "assets/images/granchio4.png", "assets/videos/Granchio2.mp4", "assets/images/granchio5.png", "assets/videos/Granchio1.mp4", "assets/images/granchio6.png"]
  },
  "poldi-pezzoli": {
    title: "Poldi Pezzoli",
    cat: "Motion Graphics",
    year: "2026",
    credits: "<p><strong>RUOLO</strong><br>Animazione, illustrazione, art director</p><p style='margin-top:12px;'><strong>COLLABORATORI</strong><br>Ambrosi Arianna, Bicego Sveva, Piccinelli Sofia</p><p style='margin-top:12px;'><a href='https://youtu.be/05cYP7zKzh0' target='_blank' rel='noopener noreferrer'>https://youtu.be/05cYP7zKzh0</a></p>",
    desc: "Questo video animato, realizzato per il Museo Poldi Pezzoli di Milano, racconta in chiave divulgativa la figura del fondatore Gian Giacomo Poldi Pezzoli. Per favorire massima chiarezza e accessibilità, il racconto si affida al contrasto tra una voce narrante femminile e il vissuto del protagonista, inseriti in un impianto sonoro vivace dal ritmo contemporaneo. L’adozione della tecnica mixed-media crea una sinergia ideale tra analogico e digitale, restituendo una visione attuale della casa-museo. La scelta di combinare materiali differenti riflette visivamente la straordinaria varietà della collezione permanente, celebrando la natura sfaccettata del personaggio milanese.",
    images: ["assets/videos/Poldi_pezzoli_video.mp4", "assets/images/Poldi1.png", "assets/images/Poldi2.png", "assets/images/Poldi3.png", "assets/images/Poldi4.png"]
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
    images: ["assets/images/DIANE1.jpg", "assets/images/DIANE2.jpg", "assets/images/DIANE3.jpg", "assets/images/DIANE4.jpg", "assets/images/DIANE5.jpg", "assets/images/DIANE6.jpg", "assets/images/DIANE7.jpg", "assets/images/DIANE8.jpg", "assets/images/DIANE9.jpg", "assets/images/DIANE10.jpg", "assets/images/DIANE11.jpg", "assets/images/DIANE12.jpg", "assets/images/DIANE13.jpg"]
  }
};

const slugsList = Object.keys(projectsDatabase);
let currentSlugIndex = 0;

// --- 2. Selezione Immagini per la Pagina Gallery (Associate allo Slug del Progetto) ---
const galleryImages = [
  // Matrix
  { slug: "matrix", src: "assets/images/matrix1.jpg" },
  { slug: "matrix", src: "assets/images/Matrix_storyboard1.jpg" },
  { slug: "matrix", src: "assets/images/Matrix_render_sfondo.jpg" },

  // AVA
  { slug: "ava", src: "assets/gif/logo_animation2.gif" },
  { slug: "ava", src: "assets/gif/storie.gif" },
  { slug: "ava", src: "assets/images/AVA1.jpg" },

  // UNEC
  { slug: "unec", src: "assets/images/UNEC1.png" },
  { slug: "unec", src: "assets/gif/icone_UNEC.mov" },
  { slug: "unec", src: "assets/images/UNEC5.png" },

  // Principe Granchio
  { slug: "principe-granchio", src: "assets/images/granchio1.png" },
  { slug: "principe-granchio", src: "assets/images/granchio2.png" },
  { slug: "principe-granchio", src: "assets/images/granchio3.png" },

  // Poldi Pezzoli
  { slug: "poldi-pezzoli", src: "assets/images/Poldi1.png" },
  { slug: "poldi-pezzoli", src: "assets/images/Poldi2.png" },
  { slug: "poldi-pezzoli", src: "assets/images/Poldi3.png" },

  // Palazzo Filoni
  { slug: "palazzo-filoni", src: "assets/images/FILONI1.png" },
  { slug: "palazzo-filoni", src: "assets/images/FILONI2.png" },
  { slug: "palazzo-filoni", src: "assets/images/FILONI3.png" },

  // Diane Arbus
  { slug: "diane-arbus", src: "assets/images/DIANE1.jpg" },
  { slug: "diane-arbus", src: "assets/images/DIANE2.jpg" },
  { slug: "diane-arbus", src: "assets/images/DIANE3.jpg" }
];

// --- 3. Generazione Dinamica Gallery con Apertura Scheda Progetto ---
function initPhotoGallery() {
  const grid = document.getElementById('photo-gallery-grid');
  if (!grid) return;

  grid.innerHTML = '';

  galleryImages.forEach((itemData) => {
    const item = document.createElement('div');
    item.className = 'photo-gallery-item';
    item.setAttribute('data-slug', itemData.slug);

    const lower = itemData.src.toLowerCase();
    const isVideo = lower.endsWith('.mp4') || lower.endsWith('.mov') || lower.endsWith('.webm');

    if (isVideo) {
      const vid = document.createElement('video');
      vid.src = itemData.src;
      vid.autoplay = true;
      vid.loop = true;
      vid.muted = true;
      vid.playsInline = true;
      item.appendChild(vid);
    } else {
      const img = document.createElement('img');
      img.src = itemData.src;
      img.alt = itemData.slug;
      img.loading = 'lazy';
      item.appendChild(img);
    }

    // Click su qualsiasi elemento: apre la scheda del progetto corrispondente
    item.addEventListener('click', () => {
      openProjectPage(itemData.slug);
    });

    grid.appendChild(item);
  });
}

// --- 4. Gestione Switch Schede (Home, Gallery, Projects, About, Detail) ---
function switchSection(target) {
  const viewHome = document.getElementById('view-home');
  const viewGallery = document.getElementById('view-gallery');
  const viewProjects = document.getElementById('view-projects');
  const viewAbout = document.getElementById('view-about');
  const viewDetail = document.getElementById('view-project-detail');
  const projectTitleEl = document.getElementById('project-title-top');

  // Resetta tutte le viste
  viewHome?.classList.remove('active');
  viewGallery?.classList.remove('active');
  viewProjects?.classList.remove('active');
  viewAbout?.classList.remove('active');
  viewDetail?.classList.remove('active');

  // Pausa video dettaglio
  const activeVideos = viewDetail?.querySelectorAll('video');
  activeVideos?.forEach(v => v.pause());

  // Resetta navigazione
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.body.classList.remove('in-home');
  document.body.classList.remove('in-detail');

  if (target === 'home') {
    document.body.classList.add('in-home');
    viewHome?.classList.add('active');
    document.body.style.overflowY = 'hidden';
    if (projectTitleEl) projectTitleEl.classList.remove('visible');
    
  } else {
    if (target === 'projects') {
      viewProjects?.classList.add('active');
      document.querySelectorAll('[data-target="projects"]').forEach(b => b.classList.add('active'));
      document.body.style.overflowY = 'hidden';
      
      // Animazione a cascata dei testi
      gsap.killTweensOf('.project-cell');
      gsap.fromTo('.project-cell', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.05, ease: "power3.out" }
      );

    } else if (target === 'gallery') {
      viewGallery?.classList.add('active');
      document.querySelectorAll('[data-target="gallery"]').forEach(b => b.classList.add('active'));
      document.body.style.overflowY = 'hidden';
      viewGallery?.scrollTo({ top: 0 });

      // Animazione a comparsa della galleria fotografica
      gsap.fromTo('.photo-gallery-item',
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.025, ease: "power2.out" }
      );

    } else if (target === 'about') {
      viewAbout?.classList.add('active');
      document.querySelectorAll('[data-target="about"]').forEach(b => b.classList.add('active'));
      document.body.style.overflowY = 'hidden';
    }
  }
}

// Click listener delegato per la navigazione
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

// --- 5. Gestione Schede Tecniche (Autoplay, Loop, Formati GIF/Video & Volume Decrescente) ---
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
      const lower = src.toLowerCase();
      const isVideo = lower.endsWith('.mp4') || lower.endsWith('.mov') || lower.endsWith('.webm');
      
      if (isVideo) {
        const video = document.createElement('video');
        video.src = src;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.volume = 1;
        
        video.play().catch(() => {});

        video.addEventListener('click', () => {
          video.muted = !video.muted;
        });

        gallery.appendChild(video);
      } else {
        const img = document.createElement('img');
        img.src = src;
        img.alt = data.title;
        img.loading = "lazy";
        gallery.appendChild(img);
      }
    });
  }
}

function openProjectPage(slug) {
  populateProjectDetail(slug);

  const projectTitleEl = document.getElementById('project-title-top');
  if (projectTitleEl) projectTitleEl.classList.remove('visible');

  document.body.classList.add('in-detail');

  document.getElementById('view-home')?.classList.remove('active');
  document.getElementById('view-gallery')?.classList.remove('active');
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

// Fade volume video durante lo scroll del Case Study
const viewDetailContainer = document.getElementById('view-project-detail');
viewDetailContainer?.addEventListener('scroll', () => {
  const videos = viewDetailContainer.querySelectorAll('.detail-gallery video');
  const windowCenter = window.innerHeight / 2;

  videos.forEach((vid) => {
    const rect = vid.getBoundingClientRect();
    const vidCenter = rect.top + rect.height / 2;
    
    const distFromCenter = Math.abs(windowCenter - vidCenter);
    const maxDist = window.innerHeight * 0.75;

    let calculatedVol = 1 - (distFromCenter / maxDist);
    calculatedVol = Math.max(0, Math.min(1, calculatedVol));

    if (!vid.muted) {
      vid.volume = calculatedVol;
    }
  });
});

// --- 6. Movimento Sfondo Morbido (Home) ---
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

// --- 7. Lightbox Overlay Fullscreen Toggle (Immagini & Video) ---
const lightbox = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxVideo = document.getElementById('lightbox-video');
const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

function openLightboxMedia(element) {
  if (!lightbox) return;

  if (element.tagName.toLowerCase() === 'video') {
    if (lightboxImg) lightboxImg.style.display = 'none';
    if (lightboxVideo) {
      lightboxVideo.src = element.src;
      lightboxVideo.currentTime = element.currentTime;
      lightboxVideo.muted = element.muted;
      lightboxVideo.volume = element.volume;
      lightboxVideo.style.display = 'block';
      lightboxVideo.play();
    }
  } else {
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.style.display = 'none';
    }
    if (lightboxImg) {
      lightboxImg.src = element.src;
      lightboxImg.style.display = 'block';
    }
  }

  lightbox.classList.add('active');
}

function closeLightboxMedia() {
  if (!lightbox) return;
  lightbox.classList.remove('active');

  if (lightboxVideo) {
    lightboxVideo.pause();
    lightboxVideo.src = '';
  }
  if (lightboxImg) {
    lightboxImg.src = '';
  }
}

document.addEventListener('click', (e) => {
  const targetMedia = e.target.closest('.detail-gallery img, .detail-gallery video');
  if (targetMedia) {
    openLightboxMedia(targetMedia);
  }
});

lightbox?.addEventListener('click', closeLightboxMedia);
lightboxCloseBtn?.addEventListener('click', closeLightboxMedia);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox?.classList.contains('active')) {
    closeLightboxMedia();
  }
});

// Inizializzazione della gallery fotografica e avvio Home
initPhotoGallery();
switchSection('home');