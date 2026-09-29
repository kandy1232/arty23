(function(){
var P=window.PROJECTS||[],esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var cur=P.filter(function(p){return p.status!=="hidden"});
document.getElementById("grid").innerHTML=cur.map(function(p,i){return '<a class="card" href="#" data-i="'+i+'"><img src="'+esc(p.image)+'" alt="'+esc(p.title)+' - ARTYHOMES completed wallpaper project" width="300" height="225" loading="lazy"><span>'+esc(p.title)+'<br><small>'+esc(p.location)+'</small></span></a>'}).join('');
document.getElementById("count").textContent=cur.length+' completed projects';
document.getElementById("grid").onclick=function(ev){var a=ev.target.closest(".card");if(!a)return;ev.preventDefault();var p=cur[+a.dataset.i];
document.getElementById("li").src=p.image;document.getElementById("li").alt=p.title;
document.getElementById("lt").innerHTML='<h3>'+esc(p.title)+'</h3><p><b>Location/Type:</b> '+esc(p.location)+' &bull; '+esc(p.category)+'</p><p>'+esc(p.desc)+'</p>';
document.getElementById("lb").hidden=false};
document.getElementById("x").onclick=function(){document.getElementById("lb").hidden=true};
})();