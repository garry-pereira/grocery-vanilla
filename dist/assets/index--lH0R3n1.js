(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m=`
<form class="d-flex justify-content-center gap-2 mt-5 mb-5">
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input id="item-input" type="text" class="form-control" id="inputPassword2" placeholder="Add item">
  </div>
  <div class="col-auto">
    <button type="submit" id="button-addon" class="btn btn-primary mb-3">Add</button>
  </div>
</form>
`,b=r=>`
    <ul class="list-group mt-5" id="grocery-list">
      ${r.length>0?r.map(o=>`<li class="list-group-item" id="item">
      <div class="d-flex justify-content-between">
        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
        <label class="form-check-label stretched-label" for="firstCheckbox">${o.v}</label>
        <button type="button" id="${o.k}" class="btn btn-primary delete-button"
        style="--bs-btn-padding-y: .1rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: 0.75rem; background: none;">
        x
        </button>
      </div>
    </li>`).join(""):""}
    </ul>
  `,f=(r,o,n,s,e)=>{if(r.preventDefault(),!n.value)return;const t=n.value,i=Math.floor(Math.random()*1e5),d=`
    <li class="list-group-item" id="item">
      <div class="d-flex justify-content-between">
        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
        <label class="form-check-label stretched-label" for="firstCheckbox">${t}</label>
        <button type="button" id="${i}" class="btn btn-primary delete-button"
        style="--bs-btn-padding-y: .1rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: 0.75rem; background: none;">
        x
        </button>
      </div>
    </li>
  `,u=document.createRange().createContextualFragment(d);o.appendChild(u),s.push({k:i,v:n.value}),e(s),n.value=""},p=(r,o,n,s)=>{if(r.target.type==="button"){const t=document.getElementById(r.target.id).parentNode.parentNode;o.removeChild(t),n=n.filter(i=>i.k!==Number(r.target.id)),s(n)}},g=r=>{let o=[];return[()=>(o=JSON.parse(localStorage.getItem("garry.grocery.list.items"))||[],o),e=>{localStorage.setItem("garry.grocery.list.items",JSON.stringify(e))}]},[l,a]=g();document.querySelector("#app").innerHTML=`
  <div class="container d-flex justify-content-center">
    <div class="thin">
      ${m}
      ${b(l())}
    </div>
  </div>
`;const c=document.querySelector("#grocery-list"),y=document.querySelector("#item-input"),h=document.querySelector("#button-addon");h.addEventListener("click",r=>f(r,c,y,l(),a));c.addEventListener("click",r=>{p(r,c,l(),a)});
