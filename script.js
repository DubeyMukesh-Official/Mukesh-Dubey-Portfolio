/* ==============================================================================
   MUKESH DUBEY — PORTFOLIO CLIENT SCRIPT
   High-performance, modern interactivity
   ============================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. MOBILE NAVIGATION DRAWER ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      mobileToggle.textContent = mobileDrawer.classList.contains('open') ? '✕' : '☰';
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.textContent = '☰';
      });
    });
  }

  // --- 2. PROJECT FILTERING BAR ---
  const filterPills = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.dataset.filter;

      projectCards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = card.classList.contains('featured-card') ? 'grid' : 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
        } else {
          const categories = card.dataset.category || '';
          if (categories.includes(filterValue)) {
            card.style.display = card.classList.contains('featured-card') ? 'grid' : 'flex';
            setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => { card.style.display = 'none'; }, 200);
          }
        }
      });
    });
  });

  // --- 3. CERTIFICATE MODAL VIEWER ---
  const certModal = document.getElementById('cert-modal');
  const modalClose = document.getElementById('cert-modal-close');
  const modalTitle = document.getElementById('cert-modal-title');
  const modalImg = document.getElementById('cert-modal-img');
  const modalPlaceholder = document.getElementById('cert-modal-placeholder');
  const modalPdfLink = document.getElementById('cert-modal-pdf-link');

  document.querySelectorAll('.cert-card-interactive').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.dataset.title;
      const image = card.dataset.image;
      const pdf = card.dataset.pdf;

      if (modalTitle) modalTitle.textContent = title;

      if (image) {
        if (modalImg) {
          modalImg.src = image;
          modalImg.alt = `${title} Certificate`;
          modalImg.style.display = 'block';
        }
        if (modalPlaceholder) modalPlaceholder.style.display = 'none';
        if (modalPdfLink) modalPdfLink.style.display = 'none';
      } else if (pdf) {
        if (modalImg) modalImg.style.display = 'none';
        if (modalPlaceholder) modalPlaceholder.style.display = 'block';
        if (modalPdfLink) {
          modalPdfLink.href = pdf;
          modalPdfLink.style.display = 'inline-flex';
        }
      }

      if (certModal && typeof certModal.showModal === 'function') {
        certModal.showModal();
      }
    });
  });

  if (modalClose && certModal) {
    modalClose.addEventListener('click', () => {
      certModal.close();
    });

    certModal.addEventListener('click', (e) => {
      const rect = certModal.getBoundingClientRect();
      const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        certModal.close();
      }
    });
  }

  // --- 4. ONE-CLICK EMAIL COPY WITH FEEDBACK ---
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.dataset.email || 'mukeshdubey975@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = '<span>✓ Email Copied!</span>';
        copyEmailBtn.style.background = '#10b981';
        copyEmailBtn.style.color = '#fff';

        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
          copyEmailBtn.style.background = '';
          copyEmailBtn.style.color = '';
        }, 2200);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  }

  // --- 5. SMOOTH SCROLL OFFSET FOR FIXED NAVBAR ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
