var REQ='Требования к кандидатам включают возраст от 18 лет, аккуратный внешний вид, наличие актуальных медицинских справок, чистое досье без судимостей, также необходимы водительские права категории B. \nЛично в вас нуждается Росгвардия! Вы можете получить военный билет за службу в Росгвардии! Мы отмечены зелёным самолётом на карте! С уважением, Академия ФСВНГ.';
function stages(k){var K='КПП-'+k;return[
['Начало набора у '+K,'/gnews Уважаемые граждане! На '+K+' открыт набор в Федеральную службу войск национальной гвардии.\nМы предлагаем дружный коллектив и поддержку на каждом этапе, быстрый карьерный рост для амбициозных военнослужащих, а также стабильную и высокую заработную плату.\n'+REQ],
['Середина набора у '+K,'/gnews На '+K+' продолжается рекрутирование в Федеральную службу войск национальной гвардии.\n'+REQ],
['Конец набора у '+K,'/gnews Уважаемые граждане, рекрутирование в Федеральную службу войск национальной гвардии окончено.\nБлагодарим за интерес к службе.']];}
function msg(t){var d=document.createElement('div');d.className='msg';d.dataset.copy=t;d.appendChild(document.createTextNode(t));var b=document.createElement('button');b.className='cp';b.textContent='Копировать';d.appendChild(b);return d;}
function render(k){var box=document.getElementById('scripts');box.innerHTML='';
stages(k).forEach(function(s){var h=document.createElement('div');h.className='stage';h.textContent=s[0];box.appendChild(h);
box.appendChild(msg('/dep Для всех: Занял гос. волну.'));box.appendChild(msg(s[1]));box.appendChild(msg('/dep Для всех: Освободил гос. волну.'));});}
render(1);
document.querySelectorAll('#kpp button').forEach(function(b){b.addEventListener('click',function(){
document.querySelectorAll('#kpp button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});render(b.dataset.k);});});
document.addEventListener('click',function(e){var b=e.target.closest('.cp');if(!b)return;var t=b.parentNode.dataset.copy;
try{navigator.clipboard.writeText(t).then(function(){b.textContent='Готово'},function(){b.textContent='Ошибка'});}catch(x){b.textContent='Ошибка';}
setTimeout(function(){b.textContent='Копировать'},1500);});
document.querySelectorAll('#tabs button').forEach(function(b){b.addEventListener('click',function(){
document.querySelectorAll('#tabs button').forEach(function(x){x.setAttribute('aria-selected',x===b)});
['a','b','c','e','d'].forEach(function(k){document.getElementById('cat-'+k).hidden=b.dataset.t!==k;});});});

(function(){var cur='uk',q=document.getElementById('q');
function apply(){var v=q.value.trim().toLowerCase(),any=false;
['uk','koap','tk'].forEach(function(k){var g=document.getElementById('law-'+k);g.hidden=k!==cur;if(k!==cur)return;
g.querySelectorAll('.part').forEach(function(p){p.hidden=!!v;});
g.querySelectorAll('.chap').forEach(function(c){var m=0;c.querySelectorAll('.art').forEach(function(a){var ok=!v||a.textContent.toLowerCase().indexOf(v)>-1;a.hidden=!ok;if(ok)m++;});
c.hidden=m===0;c.open=!!v&&m>0;if(m)any=true;});});
document.getElementById('nores').hidden=any;}
document.querySelectorAll('#law button').forEach(function(b){b.addEventListener('click',function(){cur=b.dataset.l;document.getElementById('lawinfo').innerHTML='<b>'+b.querySelector('b').textContent+'.</b> Категорий: '+b.dataset.n+'. Оригинал на форуме: <a href="'+b.dataset.u+'" target="_blank" rel="noopener">открыть тему</a>.';
document.querySelectorAll('#law button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});apply();});});
q.addEventListener('input',apply);apply();})();

(function(){
function cat(){var r=null;['a','b','c','e','d'].forEach(function(k){var e=document.getElementById('cat-'+k);if(!e.hidden)r=e;});return r;}
['a','b','c','e'].forEach(function(k){var c=document.getElementById('cat-'+k),box=c.querySelector('.chips'),secs=c.querySelectorAll('.sec');
function mk(t,i){var b=document.createElement('button');b.className='chip';b.type='button';b.textContent=t;b.setAttribute('aria-pressed',i===-1?'true':'false');
b.addEventListener('click',function(){box.querySelectorAll('.chip').forEach(function(x){x.setAttribute('aria-pressed',x===b)});
secs.forEach(function(s,j){s.hidden=i!==-1&&i!==j;});});box.appendChild(b);}
mk('Все',-1);secs.forEach(function(s,i){mk(s.querySelector('h2').textContent.replace(/\s*\(.*\)$/,''),i);});});
var gq=document.getElementById('gq');
gq.addEventListener('input',function(){var d=document.getElementById('cat-d'),v=gq.value.trim().toLowerCase();
if(!d.hidden){var q=document.getElementById('q');q.value=gq.value;q.dispatchEvent(new Event('input'));return;}
var c=cat();if(!c)return;var chips=c.querySelectorAll('.chip');
if(!v){c.querySelectorAll('.sec,.sec .card').forEach(function(e){e.hidden=false;});chips.forEach(function(x,i){x.setAttribute('aria-pressed',i===0);});return;}
chips.forEach(function(x,i){x.setAttribute('aria-pressed',i===0);});
c.querySelectorAll('.sec').forEach(function(s){var cards=s.querySelectorAll('.card'),any=false;
if(cards.length>1){cards.forEach(function(k){var ok=k.textContent.toLowerCase().indexOf(v)>-1;k.hidden=!ok;if(ok)any=true;});}
else{any=s.textContent.toLowerCase().indexOf(v)>-1;cards.forEach(function(k){k.hidden=false;});}
s.hidden=!any;});});
document.querySelectorAll('#tabs button').forEach(function(b){b.addEventListener('click',function(){gq.value='';gq.dispatchEvent(new Event('input'));});});
document.addEventListener('keydown',function(e){if(e.key==='/'&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName)){e.preventDefault();gq.focus();}});
})();

(function(){
var SITE={"version": "2026.10.28", "date": "28.10.2026", "added": ["Вкладка «Лекция по НПА»: субординация, приказы, взыскания, строй, КПП и шпаргалка", "Вкладка «Законодательная база»: УК, КоАП и Трудовой кодекс РО с поиском по статьям", "Вкладки «Тренировки» и «Выезд на стрельбище»", "Поиск в шапке и фильтры по разделам на каждой вкладке", "Это окно с уведомлением об обновлении сайта"], "changed": ["Новое оформление: шапка, разделы-карточки и тёмные карточки внутри", "Все материалы по набору собраны на одной вкладке"], "removed": ["Отдельная строка поиска и плашка «Что здесь есть» на вкладке «Законодательная база»"]},KEY='fsvng_seen_version',m=document.getElementById('upd'),dismissed=null;
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;');}
function list(t,c,a){return a&&a.length?'<h3 class="'+c+'">'+t+'</h3><ul>'+a.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul>':'';}
function seen(){try{localStorage.setItem(KEY,SITE.version);}catch(e){}}
function show(d,fresh){document.getElementById('updt').textContent=fresh?'Доступна новая версия сайта':'Сайт обновлён';
document.getElementById('updv').textContent='Версия '+d.version+' · '+d.date;
document.getElementById('updl').innerHTML=list('Добавлено','add',d.added)+list('Изменено','chg',d.changed)+list('Убрано','rem',d.removed);
var b=document.getElementById('updb'),x=document.getElementById('updx');b.textContent=fresh?'Обновить страницу':'Понятно';x.hidden=!fresh;
b.onclick=function(){if(fresh){location.reload();}else{m.hidden=true;seen();}};
x.onclick=function(){m.hidden=true;dismissed=d.version;};m.hidden=false;b.focus();}
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!m.hidden){document.getElementById(document.getElementById('updx').hidden?'updb':'updx').click();}});
var s=null;try{s=localStorage.getItem(KEY);}catch(e){}
if(s!==SITE.version)show(SITE,false);
function check(){if(!/^https?:/.test(location.protocol))return;
fetch('version.json?t='+Date.now(),{cache:'no-store'}).then(function(r){return r.ok?r.json():null;}).then(function(d){
if(d&&d.version&&d.version!==SITE.version&&d.version!==dismissed&&m.hidden)show(d,true);}).catch(function(){});}
setTimeout(check,3000);setInterval(check,30000);
document.addEventListener('visibilitychange',function(){if(!document.hidden)check();});
})();
