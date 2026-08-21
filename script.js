// --- 1. Coordinate & Dati Card ---
const projectsData = [
  { img: 'assets/images/img1.webp', title: 'Experimental Type',  x: -0.3, y:  1.3, z:  0.2 },
  { img: 'assets/images/img2.webp', title: 'My Black Hole',      x: -2.2, y:  0.8, z:  0.5 },
  { img: 'assets/images/img3.webp', title: 'Leather Matter',     x:  1.8, y:  1.1, z: -0.3 },
  { img: 'assets/images/img4.webp', title: 'Kinetic ASCII',      x: -2.4, y: -0.8, z:  0.3 },
  { img: 'assets/images/img5.webp', title: 'Monocerus',          x:  0.4, y: -0.1, z:  0.4 },
  { img: 'assets/images/img6.webp', title: 'Solid State',        x: -1.2, y: -1.2, z: -0.4 },
  { img: 'assets/images/img1.webp', title: 'Entanglement',       x:  2.5, y: -0.5, z:  0.5 },
  { img: 'assets/images/img2.webp', title: 'Lymphatic Archives', x:  1.1, y: -1.4, z: -0.2 }
];

// --- 2. Setup Three.js ---
const container = document.getElementById('webgl-container');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 7;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

const worldGroup = new THREE.Group();
scene.add(worldGroup);

const textureLoader = new THREE.TextureLoader();
const meshes = [];
const planeGeo = new THREE.PlaneGeometry(1.2, 1.5);

projectsData.forEach((item, index) => {
  const texture = textureLoader.load(item.img);
  const mat = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity: 0, // Iniziano invisibili per l'animazione di entrata
    side: THREE.DoubleSide
  });

  const mesh = new THREE.Mesh(planeGeo, mat);
  mesh.position.set(item.x, item.y, item.z);
  mesh.userData = { 
    id: index, 
    title: item.title,
    origPos: { x: item.x, y: item.y, z: item.z } 
  };

  worldGroup.add(mesh);
  meshes.push(mesh);
});

// --- 3. Animazione di Avvio: Typewriter + Fade-in progressivo Card ---
const textToType = "A collection of fragments in perpetual state of becoming.";
const typewriterEl = document.getElementById('typewriter');
let typeIndex = 0;

function typeWriter() {
  if (typeIndex < textToType.length) {
    typewriterEl.textContent += textToType.charAt(typeIndex);
    typeIndex++;
    setTimeout(typeWriter, 45); // Velocità battitura
  }
}

// Fade in graduale delle immagini 3D
window.addEventListener('load', () => {
  typeWriter();
  meshes.forEach((m, idx) => {
    gsap.to(m.material, {
      opacity: 0.92,
      duration: 1.5,
      delay: 0.2 + (idx * 0.1),
      ease: "power2.out"
    });
  });
});

// --- 4. Parallasse & Rotazione 3D ---
let mouseX = 0;
let mouseY = 0;
let targetRotX = 0;
let targetRotY = 0;
let isZoomed = false;
let activeMesh = null;

window.addEventListener('mousemove', (e) => {
  if (isZoomed) return;
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

  targetRotY = mouseX * 1.6;
  targetRotX = -mouseY * 1.2;
});

// --- 5. Click-to-Zoom ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const projectTitleEl = document.getElementById('project-title-top');
const heroTextEl = document.getElementById('hero-text');

window.addEventListener('click', (e) => {
  if (e.target.closest('.main-header') || e.target.closest('.bottom-toggle') || e.target.closest('#view-about')) return;

  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(meshes);

  if (intersects.length > 0 && !isZoomed) {
    // Zoom In
    const target = intersects[0].object;
    activeMesh = target;
    isZoomed = true;

    projectTitleEl.textContent = target.userData.title;
    projectTitleEl.classList.add('visible');
    heroTextEl.style.opacity = '0';

    gsap.to(worldGroup.rotation, { x: 0, y: 0, z: 0, duration: 0.9, ease: "power3.inOut" });
    gsap.to(target.position, { x: 0, y: 0, z: 3.5, duration: 0.9, ease: "power3.inOut" });
    gsap.to(target.scale, { x: 2.2, y: 2.2, z: 2.2, duration: 0.9, ease: "power3.inOut" });

    meshes.forEach((m) => {
      if (m !== target) gsap.to(m.material, { opacity: 0.08, duration: 0.6 });
    });

  } else if (isZoomed) {
    // Zoom Out
    isZoomed = false;
    projectTitleEl.classList.remove('visible');
    heroTextEl.style.opacity = '1';

    gsap.to(activeMesh.position, {
      x: activeMesh.userData.origPos.x,
      y: activeMesh.userData.origPos.y,
      z: activeMesh.userData.origPos.z,
      duration: 0.8,
      ease: "power3.out"
    });
    gsap.to(activeMesh.scale, { x: 1, y: 1, z: 1, duration: 0.8, ease: "power3.out" });

    meshes.forEach((m) => {
      gsap.to(m.material, { opacity: 0.92, duration: 0.6 });
    });

    activeMesh = null;
  }
});

// --- 6. Navigazione tra le Viste (Drafts / Projects / About) ---
const navButtons = document.querySelectorAll('.nav-btn');
const viewDrafts = document.getElementById('view-drafts');
const viewProjects = document.getElementById('view-projects');
const viewAbout = document.getElementById('view-about');
const btnCatalogue = document.getElementById('btn-catalogue');

function switchSection(target) {
  // Nasconde tutte le sezioni
  viewDrafts.classList.remove('active');
  viewProjects.classList.remove('active');
  viewAbout.classList.remove('active');

  // Rimuove la classe attiva da tutti i tasti
  navButtons.forEach(b => b.classList.remove('active'));

  // Attiva la sezione selezionata e il relativo tasto
  if (target === 'projects') {
    viewProjects.classList.add('active');
    document.querySelector('[data-target="projects"]')?.classList.add('active');
  } else if (target === 'about') {
    viewAbout.classList.add('active');
    document.querySelector('[data-target="about"]')?.classList.add('active');
  } else {
    viewDrafts.classList.add('active');
    document.querySelector('[data-target="drafts"]')?.classList.add('active');
  }
}

// Click sui link in alto
navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    switchSection(target);
  });
});

// Click sul tasto Catalogue in basso
if (btnCatalogue) {
  btnCatalogue.addEventListener('click', () => {
    switchSection('projects');
  });
}

// --- 7. Render Loop ---
function animate() {
  requestAnimationFrame(animate);

  if (!isZoomed) {
    worldGroup.rotation.y += (targetRotY - worldGroup.rotation.y) * 0.05;
    worldGroup.rotation.x += (targetRotX - worldGroup.rotation.x) * 0.05;
  }

  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});