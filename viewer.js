(() => {
  const pages = [...document.querySelectorAll('.newspaper-page')];
  const pageNo = document.getElementById('pageNo');
  let index = 0;
  function show(i){
    index = Math.max(0, Math.min(pages.length - 1, i));
    pages.forEach((p,n) => p.classList.toggle('active', n === index));
    pageNo.textContent = index + 1;
    document.getElementById('prev').disabled = index === 0;
    document.getElementById('next').disabled = index === pages.length - 1;
  }
  document.getElementById('prev').addEventListener('click', () => show(index - 1));
  document.getElementById('next').addEventListener('click', () => show(index + 1));
  document.addEventListener('keydown', e => {
    if(e.key === 'ArrowLeft') show(index - 1);
    if(e.key === 'ArrowRight') show(index + 1);
  });
  show(0);
})();
