(() => {
  const search = document.getElementById('search');
  const records = [...document.querySelectorAll('.record')];
  const buttons = [...document.querySelectorAll('.filter')];
  const empty = document.getElementById('empty');
  let filter = 'all';

  function update(){
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    for(const record of records){
      const kindOk = filter === 'all' || record.dataset.kind === filter;
      const searchOk = !q || (record.dataset.search || '').toLowerCase().includes(q) || record.textContent.toLowerCase().includes(q);
      const visible = kindOk && searchOk;
      record.hidden = !visible;
      if(visible) shown++;
    }
    empty.hidden = shown !== 0;
  }

  search.addEventListener('input', update);
  buttons.forEach(btn => btn.addEventListener('click', () => {
    buttons.forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    filter = btn.dataset.filter;
    update();
  }));
})();
