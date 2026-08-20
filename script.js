const projects = {
  blog: {
    number: '01', type: 'CONTENT EXPERIENCE', overline: 'React.js · REST API · React Router', title: 'Blog Application',
    description: 'A responsive blog application that renders REST API content through reusable React components and gives readers a clear, simple way to explore posts.',
    tags: ['React.js', 'REST API', 'Responsive UI'], link: 'https://blog-lyart-alpha-17.vercel.app/', visual: 'blog-visual'
  },
  shoe: {
    number: '02', type: 'FRONTEND EXPERIENCE', overline: 'React.js · Responsive UI · Product cards', title: 'Shoe Mart',
    description: 'A responsive shoe-shopping interface with reusable product cards and adaptable layouts designed for easy browsing on desktop and mobile screens.',
    tags: ['React.js', 'Responsive design', 'Component UI'], link: 'https://shoe-mart-q6gvl1xda-dubeymukesh-officials-projects.vercel.app/', visual: 'shoe-visual'
  },
  hotel: {
    number: '03', type: 'JAVA CONSOLE APPLICATION', overline: 'Core Java · JDBC · MySQL', title: 'Hotel Booking System',
    description: 'A console-based hotel reservation system with customer management, room availability, booking workflows, and CRUD operations using OOP principles.',
    tags: ['Core Java', 'JDBC', 'MySQL'], link: 'https://github.com/DubeyMukesh-Official', visual: 'hotel-visual', sourceOnly: true
  },
  ridex: {
    number: '04', type: 'FULL STACK APPLICATION', overline: 'Spring Boot · React.js · MySQL · Razorpay', title: 'RideX',
    description: 'A bike showroom management application with separate user and admin modules, product inventory, cart, wishlist, coupons, REST APIs, JWT authentication, and Razorpay payments.',
    tags: ['Spring Boot', 'JWT', 'MySQL', 'Razorpay'], link: 'https://ride-x-rouge.vercel.app/', visual: 'ridex-visual'
  },
  safety: {
    number: '05', type: 'COLLEGE PROJECT', overline: 'Python · Django · HTML · CSS', title: 'Women Safety & Emergency Rescue',
    description: 'A college academic project designed around emergency assistance. Users can trigger an emergency alert so selected friends or relatives can receive notifications through email or WhatsApp.',
    tags: ['Python', 'Django', 'HTML/CSS', 'Emergency alerts'], link: 'https://github.com/DubeyMukesh-Official', visual: 'safety-visual', sourceOnly: true
  }
};

const tabButtons = document.querySelectorAll('.project-tab');
const display = document.querySelector('.project-display');
const projectCopy = display.querySelector('.project-copy');
const projectVisual = display.querySelector('.project-visual');
const projectType = display.querySelector('.display-type');
const projectCode = display.querySelector('.display-code');
const projectCounter = display.querySelector('[data-current-project]');
const liveLink = display.querySelector('[data-live-link]');

function projectArt(type, title) {
  if (type === 'blog-visual') return '<b>READ</b><i></i><i></i><i></i>';
  if (type === 'hotel-visual') return '<b>CHECK-IN</b><i></i><i></i><i></i><i></i>';
  if (type === 'ridex-visual') return '<b>RX</b><i></i><i></i><i></i>';
  if (type === 'safety-visual') return '<b>EMERGENCY</b><i></i><i></i><i></i>';
  return '<i></i><i></i><i></i><b>SM</b>';
}

function setProject(key) {
  const project = projects[key];
  tabButtons.forEach((button) => {
    const active = button.dataset.project === key;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
  display.classList.add('is-changing');
  window.setTimeout(() => {
    projectCode.textContent = `CASE / ${project.number}`;
    projectType.textContent = project.type;
    projectVisual.className = `project-visual ${project.visual}`;
    projectVisual.innerHTML = projectArt(project.visual, project.title);
    projectCopy.innerHTML = `
      <p class="project-overline">${project.overline}</p>
      <h3>${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <ul class="project-tags">${project.tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>
      <div class="project-actions">
        <a class="live-link" data-live-link href="${project.link}" target="_blank" rel="noopener">${project.sourceOnly ? 'View on GitHub' : 'Open live project'} <span>↗</span></a>
        <a class="source-link" href="https://github.com/DubeyMukesh-Official" target="_blank" rel="noopener">GitHub profile</a>
      </div>`;
    projectCounter.textContent = project.number;
    display.classList.remove('is-changing');
  }, 120);
}

tabButtons.forEach((button) => button.addEventListener('click', () => setProject(button.dataset.project)));

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false');
}));

const modal = document.querySelector('.certificate-modal');
const modalTitle = document.querySelector('#certificate-title');
const modalImage = document.querySelector('.modal-image');
const modalPlaceholder = document.querySelector('.modal-placeholder');
const modalPdf = document.querySelector('.modal-pdf');
const closeModal = document.querySelector('.modal-close');

function openCredential(button) {
  modalTitle.textContent = button.dataset.title;
  const image = button.dataset.image;
  const pdf = button.dataset.pdf;
  modalImage.style.display = image ? 'block' : 'none';
  modalPlaceholder.style.display = image ? 'none' : 'flex';
  if (image) { modalImage.src = image; modalImage.alt = `${button.dataset.title} certificate preview`; }
  if (pdf) { modalPdf.href = pdf; modalPdf.style.display = 'inline-block'; }
  else { modalPdf.removeAttribute('href'); modalPdf.style.display = 'none'; }
  modal.showModal();
}

document.querySelectorAll('.credential-card, .credential-open').forEach((button) => button.addEventListener('click', () => openCredential(button)));
closeModal.addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });

const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); reveal.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => reveal.observe(element));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; });
window.addEventListener('load', () => window.setTimeout(() => document.querySelector('.loading-screen').classList.add('is-loaded'), 300));

const scrollMeter = document.querySelector('.scroll-meter i');
window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  scrollMeter.style.transform = `scaleX(${progress / 100})`;
}, { passive: true });
