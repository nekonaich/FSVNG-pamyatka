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
['a','b','c','d'].forEach(function(k){document.getElementById('cat-'+k).hidden=b.dataset.t!==k;});});});

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
