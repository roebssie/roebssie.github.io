const body=document.body;
const modeButton=document.querySelector('.mode-toggle');
const savedTheme=localStorage.getItem('roebin-theme-v2');
if(savedTheme==='light') body.classList.add('light');
modeButton.addEventListener('click',()=>{body.classList.toggle('light');localStorage.setItem('roebin-theme-v2',body.classList.contains('light')?'light':'dark')});
const tabs=document.querySelectorAll('.tab');
const panels=document.querySelectorAll('.tab-panel');
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(item=>item.classList.remove('active'));panels.forEach(panel=>panel.classList.remove('active'));tab.classList.add('active');document.getElementById(tab.dataset.tab).classList.add('active')}));
