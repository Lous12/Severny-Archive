
(() => {
  const search = document.getElementById('search');
  const filters = [...document.querySelectorAll('.filter')];
  const records = [...document.querySelectorAll('.record')];
  const empty = document.getElementById('empty');
  let activeKind = 'all';

  function apply(){
    const q = (search?.value || '').trim().toLowerCase();
    let visible = 0;
    records.forEach(card => {
      const kind = card.dataset.kind || '';
      const hay = ((card.dataset.search || '') + ' ' + card.textContent).toLowerCase();
      const matchKind = activeKind === 'all' || kind === activeKind;
      const matchText = !q || hay.includes(q);
      const show = matchKind && matchText;
      card.style.display = show ? '' : 'none';
      if(show) visible++;
    });
    if(empty) empty.style.display = visible ? 'none' : 'block';
  }

  filters.forEach(btn => btn.addEventListener('click', () => {
    activeKind = btn.dataset.kind || 'all';
    filters.forEach(b => b.classList.toggle('active', b === btn));
    apply();
  }));

  if(search) search.addEventListener('input', apply);
  apply();
})();
