
;(function(g){const N="NeonArcadeTTT";let s=null;
function mount(c){if(!c){console.warn("["+N+"] missing container");return}unmount();
const r=document.createElement("div");
r.innerHTML='<style>.t{font:16px system-ui;color:#e8f0ff}.h{display:flex;justify-content:space-between;align-items:center}.b{display:grid;grid-template-columns:repeat(3,100px);gap:10px;justify-content:center;margin:12px 0}.c{width:100px;height:100px;border:1px solid #7dfcff33;border-radius:12px;background:#182247;color:#7dfcff;font:800 44px/100px system-ui;text-align:center;cursor:pointer}.o{color:#ff9df0}.w{box-shadow:0 0 12px #0ff,0 0 18px #f0f}</style><div class="t"><h2>Tic Tac Toe</h2><div class="h"><div class="st">Player <span class="tr">X</span>\'s turn</div><button class="rs">Reset</button></div><div class="b"></div><div class="sc">X: <span class="sx">0</span> — O: <span class="so">0</span></div></div>';
c.innerHTML="";c.appendChild(r);
const b=r.querySelector(".b"),st=r.querySelector(".st"),tr=r.querySelector(".tr"),rs=r.querySelector(".rs"),sx=r.querySelector(".sx"),so=r.querySelector(".so");
let board=Array(9).fill(""),cells=[],turn="X",over=false,xw=0,ow=0;
const W=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function paint(){b.innerHTML="";cells=[];for(let i=0;i<9;i++){const el=document.createElement("button");el.className="c";el.dataset.i=i;el.textContent=board[i];if(board[i]==="O")el.classList.add("o");el.onclick=onCell;b.appendChild(el);cells[i]=el}}
function win(){for(const [a,b,c] of W){if(board[a]&&board[a]===board[b]&&board[a]===board[c])return[a,b,c]}return null}
function onCell(e){if(over)return;const i=+e.currentTarget.dataset.i;if(board[i])return;board[i]=turn;e.currentTarget.textContent=turn;if(turn==="O")e.currentTarget.classList.add("o");const line=win();if(line){over=true;for(const k of line)cells[k].classList.add("w");if(turn==="X"){xw++;sx.textContent=xw}else{ow++;so.textContent=ow}st.textContent="Player "+turn+" wins!";return}if(board.every(Boolean)){over=true;st.textContent="Draw.";return}turn=turn==="X"?"O":"X";tr.textContent=turn;st.innerHTML='Player <span class="tr">'+turn+"</span>\'s turn"}
function reset(){board=Array(9).fill("");over=false;turn="X";tr.textContent=turn;st.innerHTML='Player <span class="tr">X</span>\'s turn';paint()}
rs.onclick=reset;paint();
const stop=()=>unmount();window.addEventListener("neon-arcade:stop-all",stop);
s={c, r, stop}}
function unmount(){if(!s)return;try{window.removeEventListener("neon-arcade:stop-all",s.stop)}catch(e){}if(s.c&&s.r&&s.r.parentNode===s.c){s.c.removeChild(s.r)}s=null}
g[N]={mount,unmount}})(window);
