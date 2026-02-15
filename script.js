
document.addEventListener('DOMContentLoaded', ()=>{

  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click', e=>{
      const target = document.querySelector(link.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    })
  });

  const year = document.getElementById('year');
  if(year){
    year.textContent = new Date().getFullYear();
  }
});
