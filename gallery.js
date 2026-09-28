(function(){
var C=document.body.dataset.category,D=(window.DESIGNS||{})[C]||[],PG=24,n=PG,cur=[],ix=0,K=['room','material','format'],
Q=new URLSearchParams(location.search),F={room:Q.get('room')||'',material:Q.get('material')||'',format:Q.get('format')||'',s:''},
$=function(i){return document.getElementById(i)},
esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
K.forEach(function(k){var el=$(k);el.value=F[k];el.onchange=function(){F[k]=el.value;n=PG;draw()}});
$('s').oninput=function(){F.s=this.value.toLowerCase();n=PG;draw()};
$('clr').onclick=function(){F={room:'',material:'',format:'',s:''};K.forEach(function(k){$(k).value=''});$('s').value='';n=PG;draw()};
$('more').onclick=function(){n+=PG;draw()};
function draw(){
cur=D.filter(function(d){return d.status!=='hidden'&&(!F.room||d.rooms.indexOf(F.room)>-1)&&(!F.material||d.material.indexOf(F.material)>-1)&&(!F.format||d.format===F.format)&&(!F.s||(d.title+' '+d.desc).toLowerCase().indexOf(F.s)>-1)});
$('count').textContent=cur.length+' designs';
$('grid').innerHTML=cur.slice(0,n).map(function(d,i){return'<a class="card" href="#" data-i="'+i+'"><img src="'+esc(d.thumb)+'" alt="'+esc(d.title)+' wallpaper Sri Lanka" width="300" height="225" loading="lazy"><span>'+esc(d.title)+'</span></a>'}).join('');
$('more').style.display=cur.length>n?'inline-block':'none';
try{var p=new URLSearchParams();K.forEach(function(k){if(F[k])p.set(k,F[k])});history.replaceState(null,'',p.toString()?'?'+p:location.pathname)}catch(x){}}
$('grid').onclick=function(ev){var a=ev.target.closest('.card');if(a){ev.preventDefault();show(+a.dataset.i)}};
function show(i){ix=(i+cur.length)%cur.length;var d=cur[ix];$('li').src=d.full;$('li').alt=d.title;
var w='https://wa.me/'+(window.SETTINGS||{}).wa+'?text='+encodeURIComponent('Hello ARTYHOMES, I am interested in "'+d.title+'" ('+location.href.split('?')[0]+')');
$('lt').innerHTML='<h3>'+esc(d.title)+'</h3><p>'+esc(d.desc)+'</p><p><b>Rooms:</b> '+esc(d.rooms.join(', '))+' | <b>Material:</b> '+esc(d.material.join(', '))+' | <b>Format:</b> '+esc(d.format)+' | <b>Sizes:</b> '+esc(d.sizes)+'</p><p class="pr">'+(d.price?esc(d.price):'Request a Quote')+'</p><a class="btn" href="'+w+'" target="_blank" rel="noopener">Order on WhatsApp</a> <a class="btn o" href="custom-wallpaper-sri-lanka.html">Request a Quote</a>';
$('lb').hidden=false}
$('x').onclick=function(){$('lb').hidden=true};$('pv').onclick=function(){show(ix-1)};$('nx').onclick=function(){show(ix+1)};
document.onkeydown=function(ev){if($('lb').hidden)return;if(ev.key==='Escape')$('lb').hidden=true;if(ev.key==='ArrowLeft')show(ix-1);if(ev.key==='ArrowRight')show(ix+1)};
draw()})();