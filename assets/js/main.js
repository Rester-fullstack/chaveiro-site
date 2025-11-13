
// ===== Smooth scroll para links âncora =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


// ===== Geo-restrição (simulação) =====
// Em produção, use Cloudflare ou IPAPI.
const geoModal = document.getElementById("geoModal");
const geoClose = document.getElementById("geoClose");

// Simulação: mostrar o modal após 2 segundos
if (geoModal) {
  setTimeout(() => {
    geoModal.style.display = "flex";
    geoModal.style.opacity = "1";
    geoModal.setAttribute("aria-hidden", "false");
  }, 2000);
}

// Botão fechar do modal
if (geoClose) {
  geoClose.addEventListener("click", () => {
    geoClose.blur(); // Remove foco (evita erro de aria-hidden)
    geoModal.style.opacity = "0";
    setTimeout(() => {
      geoModal.style.display = "none";
      geoModal.setAttribute("aria-hidden", "true");
    }, 250);
  });
}


// ===== Formulário de contato (simulação sem backend) =====
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerText = 'Enviando...';

    // Simulação de envio
    setTimeout(() => {
      showFormAlert('Mensagem enviada! Entraremos em contato em breve.', 'success');
      form.reset();
      btn.disabled = false;
      btn.innerText = 'Enviar';
    }, 1200);
  });

  function showFormAlert(text, type) {
    const el = document.getElementById('formAlert');
    el.style.display = 'block';
    el.className = '';
    el.classList.add('alert');
    el.classList.add('alert-' + (type === 'success' ? 'success' : 'danger'));
    el.innerText = text;
    setTimeout(() => el.style.display = 'none', 6000);
  }
})();


// ===== Destaque do menu conforme a rolagem =====
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section, main');
  const scrollPos = window.scrollY + 120;
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

  sections.forEach(sec => {
    if (!sec.id) return;
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    if (scrollPos >= top && scrollPos < top + height) {
      const nav = document.querySelector('.nav-link[href$="#' + sec.id + '"]');
      if (nav) nav.classList.add('active');
    }
  });
});


// ===== Animação suave de fade-in nos elementos =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-element').forEach(el => observer.observe(el));
