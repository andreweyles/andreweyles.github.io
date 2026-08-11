// Abstract accordion
document.querySelectorAll('.abstract-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    const isOpen = panel.classList.contains('open');

    // close all
    document.querySelectorAll('.abstract-panel.open').forEach(p => {
      p.style.maxHeight = null;
      p.classList.remove('open');
    });
    document.querySelectorAll('.abstract-toggle.open').forEach(b => {
      b.classList.remove('open');
      b.textContent = 'Abstract';
    });

    if (!isOpen) {
      panel.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
      btn.classList.add('open');
      btn.textContent = 'Hide abstract';
    }
  });
});

// Lightbox
const overlay = document.createElement('div');
overlay.className = 'lightbox-overlay';
overlay.innerHTML = '<img class="lightbox-img">';
document.body.appendChild(overlay);

const lightboxImg = overlay.querySelector('.lightbox-img');

document.querySelectorAll('.lightbox').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

overlay.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

function closeLightbox() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}
