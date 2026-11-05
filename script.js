const body = document.body;
const modeButton = document.querySelector('.mode-toggle');
const savedTheme = localStorage.getItem('roebin-theme-v3');
if (savedTheme === 'light') body.classList.add('light');
modeButton.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('roebin-theme-v3', body.classList.contains('light') ? 'light' : 'dark');
});

const tabs = [...document.querySelectorAll('.tab')];
const panels = [...document.querySelectorAll('.tab-panel')];
function activateTab(tab, moveFocus = false) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  panels.forEach(panel => {
    const selected = panel.id === tab.dataset.tab;
    panel.classList.toggle('active', selected);
    panel.hidden = !selected;
  });
  if (moveFocus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    let nextIndex;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = tabs.length - 1;
    else return;
    event.preventDefault();
    activateTab(tabs[nextIndex], true);
  });
});
activateTab(tabs.find(tab => tab.classList.contains('active')) || tabs[0]);
