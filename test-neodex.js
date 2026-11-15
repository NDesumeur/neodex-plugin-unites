// lancé par le test « local » de NeoDex : 5 km donnent 5 000 m, le tableau de toutes les unités est lisible, rien ne déborde
module.exports = async ({ pj, sleep }) => {
  await sleep(700);
  const r = await pj(`(async () => {
    const cat = [...document.querySelectorAll('#ucCats button, #ucCats .tab')].find(b => /longueur/i.test(b.textContent)); if (cat) cat.click();
    await new Promise(r => setTimeout(r, 100));
    const f = document.getElementById('ucFrom'), t = document.getElementById('ucTo');
    for (let k = 0; k < 100 && !f.options.length; k++) await new Promise(r => setTimeout(r, 100));
    f.value = 'kilomètre (km)'; t.value = 'mètre (m)'; if (f.value !== 'kilomètre (km)' || t.value !== 'mètre (m)') return { err: 'unités absentes', a: [...f.options].map(o => o.value).slice(0, 8) };
    const v = document.getElementById('ucVal'); v.value = '5'; v.dispatchEvent(new Event('input')); await new Promise(r => setTimeout(r, 100));
    const row = document.querySelector('.ucRow');
    return { res: document.getElementById('ucResult').textContent, rows: document.querySelectorAll('.ucRow').length, font: row && parseFloat(getComputedStyle(row).fontSize) };
  })()`);
  if (r.err) throw new Error(r.err + ' ' + JSON.stringify(r.a));
  if (!/5[\s  .]?000/.test(r.res)) throw new Error('5 km → ' + r.res);
  if (r.rows < 3 || r.font < 16) throw new Error('tableau : ' + JSON.stringify(r));
  const over = await pj(`[...document.querySelectorAll('.appWrap *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).length`);
  if (over) throw new Error(over + ' élément(s) débordent à droite');
  return '5 km = ' + r.res + ', ' + r.rows + ' lignes en ' + r.font + ' px';
};
