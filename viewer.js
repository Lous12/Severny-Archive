(() => {
  const pages = [...document.querySelectorAll('.newspaper-page')];
  const pageNo = document.getElementById('pageNo');
  const stage = document.querySelector('.scan-stage');
  const zoom = document.getElementById('zoom');
  let index = 0;

  function show(i){
    index = Math.max(0, Math.min(pages.length - 1, i));
    pages.forEach((p,n) => p.classList.toggle('active', n === index));
    pageNo.textContent = index + 1;
    document.getElementById('prev').disabled = index === 0;
    document.getElementById('next').disabled = index === pages.length - 1;
    stage.scrollTo({top:0,left:0,behavior:'auto'});
  }

  function setZoom(value){
    const n = Number(value);
    if(!Number.isFinite(n)) return;
    stage.style.setProperty('--scan-scale', String(n));
  }

  document.getElementById('prev').addEventListener('click', () => show(index - 1));
  document.getElementById('next').addEventListener('click', () => show(index + 1));

  if(zoom){
    zoom.addEventListener('change', () => setZoom(zoom.value));
    setZoom(zoom.value);
  }

  document.addEventListener('keydown', e => {
    if(e.key === 'ArrowLeft') show(index - 1);
    if(e.key === 'ArrowRight') show(index + 1);
  });

  show(0);
})();
