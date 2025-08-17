const sceneEl = document.getElementById('scene');
const navButtons = document.querySelectorAll('nav button');
const scenes = {
  ttt: '<div class="placeholder-card"><h2>Tic Tac Toe Placeholder</h2></div>',
  snake: '<div class="placeholder-card"><h2>Snake Placeholder</h2></div>',
  breakout: '<div class="placeholder-card"><h2>Breakout Placeholder</h2></div>',
};

function showScene(key) {
  sceneEl.innerHTML = scenes[key] || '';
}

navButons.forEach(btn => {  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showScene(btn.dataset.scene);
  });
