(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))y(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&y(i)}).observe(document,{childList:!0,subtree:!0});function v(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function y(e){if(e.ep)return;e.ep=!0;const t=v(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
    <main>
      <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Player 1</h2>
        <p class="score" id="score--0">43</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--0">3</p>
        </div>
      </section>
      <section class="player player--1">
        <h2 class="name" id="name--1">Player 2</h2>
        <p class="score" id="score--1">24</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--1">5</p>
        </div>
      </section>

      <img src="dice-5.png" alt="Playing dice" class="dice" />
      <button class="btn btn--new">🔄 New game</button>
      <button class="btn btn--roll">🎲 Roll dice</button>
      <button class="btn btn--hold">📥 Hold</button>
    </main>
`;const a=document.querySelector(".player--0"),u=document.querySelector(".player--1"),m=document.querySelector("#score--0"),f=document.querySelector("#score--1"),d=document.querySelector("#current--0"),p=document.querySelector("#current--1"),L=document.querySelector(".btn--new"),g=document.querySelector(".btn--hold"),S=document.querySelector(".btn--roll"),s=document.querySelector(".dice");let o,c,r;const b=()=>{o=[0,0],c=0,r=0,s.classList.add("hidden"),m.textContent=0,f.textContent=0,d.textContent=0,p.textContent=0,a.classList.remove("player--winner"),u.classList.remove("player--winner"),a.classList.add("player--active"),u.classList.remove("player--active")};b();S.addEventListener("click",C);function C(){const n=Math.trunc(Math.random()*6+1);s.classList.remove("hidden"),s.src=`dice-${n}.png`,n!==1?q(n):h()}function q(n){c+=n,r===0?d.textContent=c:p.textContent=c}function h(){P(),a.classList.toggle("player--active"),u.classList.toggle("player--active"),r=r===0?1:0}function P(){c=0,r===0?d.textContent=c:p.textContent=c}g.addEventListener("click",()=>{o[r]+=c,r===0?m.textContent=o[0]:f.textContent=o[1],o[r]>=100?(document.querySelector(`.player--${r}`).classList.add("player--winner"),s.classList.add("hidden")):h()});L.addEventListener("click",b);
