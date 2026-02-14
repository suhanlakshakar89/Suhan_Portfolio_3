// Basic interactivity: nav toggle, smooth scroll, year, contact form handler 
document.addEventListener('DOMContentLoaded', ()=>{
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  navToggle.addEventListener('click', ()=> nav.classList.toggle('open'));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click', e=>{
      const target = document.querySelector(link.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        nav.classList.remove('open');
      }
    })
  })

  // Set current year
  document.getElementById('year').textContent = new Date().getFullYear();
});

function contactSubmit(e){
  // Simple UX: will open user's mail client via mailto; keep default behavior otherwise
  // Returning true allows the form to proceed (mailto from action). We show a tiny confirmation.
  alert('Your email client will open to send the message. Alternatively, replace the placeholder email with your real address in `index.html`.');
  return true;
}