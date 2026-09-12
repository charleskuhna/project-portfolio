// ===== RENDER YEAR =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== RENDER PROJECT CARDS =====
const grid = document.getElementById('projects-grid');

PROJECTS.forEach(project => {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `View project: ${project.title}`);

  const thumb = project.cover
    ? `<div class="card-thumb"><img src="${project.cover}" alt="${project.title}" loading="lazy" /></div>`
    : `<div class="card-thumb placeholder">${project.emoji || '⚙️'}</div>`;

  const tags = project.tags.map(t => `<span class="tag">${t}</span>`).join('');

  card.innerHTML = `
    ${thumb}
    <div class="card-body">
      <div class="card-tags">${tags}</div>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
    </div>
    <div class="card-footer">
      <span>${project.date}</span>
      <span class="view-more">View details &rarr;</span>
    </div>
  `;

  card.addEventListener('click', () => openModal(project));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(project); });

  grid.appendChild(card);
});

// ===== MODAL =====
const overlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('modal-close');

function openModal(project) {
  const tags = project.tags.map(t => `<span class="tag">${t}</span>`).join('');

  const heroImg = project.cover
    ? `<img class="modal-hero-img" src="${project.cover}" alt="${project.title}" />`
    : `<div class="modal-hero-placeholder">${project.emoji || '⚙️'}</div>`;

  const steps = project.steps && project.steps.length
    ? `<p class="modal-section-title">How I Built It</p>
       <p>${project.howIBuiltIt}</p>
       <p class="modal-section-title">Key Steps</p>
       <ul>${project.steps.map(s => `<li>${s}</li>`).join('')}</ul>`
    : project.howIBuiltIt
      ? `<p class="modal-section-title">How I Built It</p><p>${project.howIBuiltIt}</p>`
      : '';

  const tools = project.tools && project.tools.length
    ? `<p class="modal-section-title">Tools &amp; Components</p>
       <ul>${project.tools.map(t => `<li>${t}</li>`).join('')}</ul>`
    : '';

  const photos = project.photos && project.photos.length
    ? `<p class="modal-section-title">Photos</p>
       <div class="modal-photo-grid">
         ${project.photos.map(p => `<img src="${p}" alt="Project photo" loading="lazy" />`).join('')}
       </div>`
    : '';

  const links = project.links && project.links.length
    ? `<p class="modal-section-title">Links</p>
       <div style="display:flex;gap:.75rem;flex-wrap:wrap;">
         ${project.links.map(l => `<a href="${l.url}" target="_blank" class="contact-btn" rel="noopener noreferrer">${l.label}</a>`).join('')}
       </div>`
    : '';

  modalContent.innerHTML = `
    ${heroImg}
    <div class="modal-body">
      <div class="modal-tags">${tags}</div>
      <h2>${project.title}</h2>
      <p class="modal-meta">${project.date}</p>
      <p class="modal-section-title">Overview</p>
      <p>${project.overview}</p>
      ${steps}
      ${tools}
      ${photos}
      ${links}
    </div>
  `;

  // Attach lightbox to photos
  modalContent.querySelectorAll('.modal-photo-grid img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
  });

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeLightbox(); } });

// ===== LIGHTBOX =====
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `<button class="lightbox-close" aria-label="Close">&times;</button><img src="" alt="Full size photo" />`;
document.body.appendChild(lightbox);

const lbImg = lightbox.querySelector('img');
const lbClose = lightbox.querySelector('.lightbox-close');

function openLightbox(src) {
  lbImg.src = src;
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lbImg.src = '';
}

lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
