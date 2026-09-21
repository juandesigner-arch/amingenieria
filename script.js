const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menú'); navigation.classList.remove('is-open'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); navigation.classList.toggle('is-open', open); });
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
matchMedia('(min-width: 761px)').addEventListener('change', event => { if(event.matches) closeMenu(); });
document.querySelectorAll('[data-service]').forEach(link => { link.href = 'https://wa.me/573027363773?text=' + encodeURIComponent('Hola Alison, quisiera información y una cotización sobre: ' + link.dataset.service + '.'); });
document.getElementById('year').textContent = new Date().getFullYear();
