(() => {
  const search = document.querySelector('#project-search');
  const chips = [...document.querySelectorAll('.filter-chip')];
  const cards = [...document.querySelectorAll('.project-card')];
  const emptyState = document.querySelector('.empty-state');
  let activeFilter = 'all';

  function updateProjects() {
    if (!cards.length) return;
    const query = (search?.value || '').trim().toLowerCase();
    let visibleCount = 0;
    cards.forEach((card) => {
      const matchesCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
      const matchesText = !query || card.textContent.toLowerCase().includes(query);
      const visible = matchesCategory && matchesText;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    if (emptyState) emptyState.hidden = visibleCount > 0;
  }

  chips.forEach((chip) => chip.addEventListener('click', () => {
    activeFilter = chip.dataset.filter;
    chips.forEach((item) => {
      const selected = item === chip;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    updateProjects();
  }));
  search?.addEventListener('input', updateProjects);

  const checks = [...document.querySelectorAll('[data-progress]')];
  if (checks.length) {
    const storageKey = 'curious-club-rainbow-progress';
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch { saved = {}; }
    const message = document.querySelector('.progress-message');
    checks.forEach((check) => {
      check.checked = Boolean(saved[check.dataset.progress]);
      check.addEventListener('change', () => {
        saved[check.dataset.progress] = check.checked;
        try { localStorage.setItem(storageKey, JSON.stringify(saved)); } catch { /* Progress still works until the page closes. */ }
        const complete = checks.filter((item) => item.checked).length;
        if (message) message.textContent = complete === checks.length ? 'Amazing work, scientist! You did it! 🎉' : `${complete} of ${checks.length} mini missions complete.`;
      });
    });
    const complete = checks.filter((item) => item.checked).length;
    if (message && complete) message.textContent = complete === checks.length ? 'Amazing work, scientist! You did it! 🎉' : `${complete} of ${checks.length} mini missions complete.`;
  }
})();
