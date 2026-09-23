const words=[
['不太','bú tài','我最近不太累。','委婉地否定程度，不等於「完全不累」。'],
['沒那麼','méi nà me','現在沒有那麼焦慮。','和先前或另一個情況比較，程度降低了。'],
['很','hěn','這裡很安靜。','常用來描述性質；不一定特別強調程度很高。'],
['真','zhēn','今天真忙！','帶有說話者的感受與感嘆。'],
['蠻','mán','這蠻好吃的。','常見於口語，表示程度不低。'],
['相當','xiāng dāng','第一個月過得相當忙碌。','表示程度頗高；不宜當作固定強度的刻度。'],
['非常','fēi cháng','公車上的人非常多。','強調程度高。'],
['十分','shí fēn','她的房間十分安靜。','強調程度高，也常見於書面語。'],
['太……了','tài … le','這樣的生活太辛苦了！','「太＋形容詞＋了」表示強烈感受，也可表示超出需要。'],
['最','zuì','她最喜歡到市場買水果。','在相關的比較範圍中，程度最高。'],
['完全','wán quán','新的生活跟以前完全不一樣。','強調全部、徹底；不是單純的「非常」。']];
const wordButtons=document.querySelector('#word-buttons');words.forEach((w,i)=>{const b=document.createElement('button');b.textContent=w[0];b.setAttribute('aria-pressed',i===0?'true':'false');b.addEventListener('click',()=>showWord(i));wordButtons.append(b)});
function showWord(i){const w=words[i];[...wordButtons.children].forEach((b,j)=>b.setAttribute('aria-pressed',i===j?'true':'false'));document.querySelector('#word-pinyin').textContent=w[1];document.querySelector('#example').textContent=w[2];document.querySelector('#word-note').textContent=w[3]}showWord(0);
const pattern=/沒有那麼|沒那麼|不太|非常|十分|相當|完全|特別|比較|真的|很|真|蠻|太|最|更/g;
document.querySelectorAll('.story p').forEach(p=>{const t=p.textContent;const f=document.createDocumentFragment();let last=0;for(const m of t.matchAll(pattern)){f.append(t.slice(last,m.index));const mark=document.createElement('mark');mark.textContent=m[0];f.append(mark);last=m.index+m[0].length}f.append(t.slice(last));p.replaceChildren(f)});
document.querySelector('#highlight').addEventListener('click',e=>{const hide=document.querySelector('.story').classList.toggle('no-highlight');e.currentTarget.setAttribute('aria-pressed',String(!hide));e.currentTarget.textContent=hide?'顯示副詞標示':'隱藏副詞標示'});
document.querySelector('#projector').addEventListener('click',e=>{const large=document.body.classList.toggle('large');e.currentTarget.setAttribute('aria-pressed',String(large));e.currentTarget.textContent=large?'一般文字':'放大文字'});
const reading=[
['梅玲搬家以後，生活中有哪些改變？','她住得離學校更遠，早上需要搭公車，也開始在咖啡店打工，生活變得更忙碌。'],
['為什麼梅玲每天早上常常很匆忙？','她需要早起搭公車去學校，新住處離學校比較遠，因此常常只喝一杯豆漿就出門。'],
['梅玲曾經為什麼想搬回學校附近？','尖峰時間公車人多，她有時要站四十分鐘，腳很酸，覺得這樣的生活太辛苦。'],
['新住處有哪些優點？請說出兩個。','房間十分安靜，適合看書；附近市場的蔬果比較便宜。也可以提到市場老闆親切、常給她折扣。'],
['梅玲剛開始在咖啡店工作時，遇到了哪些困難？','店長說話很快，客人有不同的點餐要求；她常常聽不清楚，感到著急，也曾做錯飲料。'],
['「完全不一樣」和「不太習慣」的程度與語氣有什麼不同？','「完全不一樣」強調徹底不同，語氣較強；「不太習慣」表示還沒有很習慣，是較委婉的否定。'],
['梅玲現在的生活感覺如何？','她仍然很忙、很累，但沒有那麼焦慮，工作漸漸上手，也慢慢有了融入這裡的感覺。']];
const rq=document.querySelector('#reading-questions');reading.forEach(([q,a],i)=>{const div=document.createElement('div');div.className='reading-item';const label=document.createElement('label');label.htmlFor='reading-'+i;label.textContent=(i+1)+'. '+q;const ta=document.createElement('textarea');ta.id=label.htmlFor;ta.rows=2;ta.placeholder='先用自己的話回答……';const d=document.createElement('details');const s=document.createElement('summary');s.textContent='參考答案';const p=document.createElement('p');p.textContent=a;d.append(s,p);div.append(label,ta,d);rq.append(div)});
const questions=[
{q:'我昨天只睡三個小時，今天＿＿累。（選出最明確強調「程度很高」的詞。）',options:['很','非常','不太'],answer:1,why:'「非常」明確強調程度高。「很累」在日常對話中也自然，但本題指定要強調高程度。'},
{q:'剛搬家時我每天都睡不著，現在＿＿習慣了，但偶爾還是睡不好。',options:['完全','比較','十分'],answer:1,why:'「比較」表示與以前相比有所改善；後句說偶爾仍睡不好，並不是「完全」適應。'},
{q:'這間咖啡店的音樂＿＿吵＿＿，我無法看書。',options:['太……了','不太……（不加字）','最……（不加字）'],answer:0,why:'「太吵了」表示吵的程度超出可以接受的範圍。完整句子：這間咖啡店的音樂太吵了，我無法看書。'},
{q:'我以前很害怕上臺，現在沒有＿＿緊張。',options:['那麼','完全','相當'],answer:0,why:'「沒有那麼緊張」表示和以前相比，緊張的程度降低了。'},
{q:'今天的天氣＿＿熱＿＿，我們晚一點再出去吧。（表達熱得難以接受。）',options:['比較……（不加字）','太……了','最……（不加字）'],answer:1,why:'「太熱了」表達熱的程度超出期望，所以建議晚一點出門。'}];
const quiz=document.querySelector('#quiz');questions.forEach((q,i)=>{const f=document.createElement('fieldset');const l=document.createElement('legend');l.textContent=(i+1)+'. '+q.q;f.append(l);q.options.forEach((o,j)=>{const label=document.createElement('label');const input=document.createElement('input');input.type='radio';input.name='q'+i;input.value=j;label.append(input,document.createTextNode(o));f.append(label)});const feedback=document.createElement('p');feedback.className='explanation';feedback.hidden=true;f.append(feedback);quiz.append(f)});
document.querySelector('#check').addEventListener('click',()=>{let correct=0,answered=0;questions.forEach((q,i)=>{const v=quiz.querySelector('input[name=q'+i+']:checked');const p=quiz.children[i].querySelector('.explanation');p.hidden=false;const good=v&&Number(v.value)===q.answer;if(v)answered++;if(good)correct++;p.classList.toggle('wrong',!good);p.textContent=(good?'✓ 正確。':v?'再想一想。':'尚未作答。')+' '+q.why});document.querySelector('#score').textContent='答對 '+correct+' / '+questions.length+' 題'+(answered<questions.length?'（還有 '+(questions.length-answered)+' 題未作答）':'')});
document.querySelector('#retry').addEventListener('click',()=>{quiz.reset();quiz.querySelectorAll('.explanation').forEach(p=>p.hidden=true);document.querySelector('#score').textContent='已清除選擇，請再試一次。'});
const composition=document.querySelector('#composition');function updateWriting(){const t=composition.value;const count=[...t.replace(/[\p{P}\p{S}\s]/gu,'')].length;let rest=t;const found=[];for(const term of ['沒有那麼','沒那麼','不太','非常','十分','相當','完全','特別','比較','蠻','很','真','最','更']){if(rest.includes(term)){const key=term==='沒有那麼'?'沒那麼':term;if(!found.includes(key))found.push(key);rest=rest.split(term).join('')}}if(/太[^。！？\n]*了/.test(t))found.push('太……了');const contrast=/以前[\s\S]+現在/.test(t);const box=document.querySelector('#writing-feedback');box.replaceChildren();for(const [text,done] of [[count+' 字（目標 80–100）',count>=80&&count<=100],[found.length+' 種副詞（至少 6 種）',found.length>=6],['以前……現在……：'+(contrast?'已出現':'尚未出現'),contrast]]){const s=document.createElement('span');s.textContent=text;if(done)s.className='done';box.append(s)}if(found.length){const s=document.createElement('span');s.textContent='偵測到：'+found.join('、');box.append(s)}}composition.addEventListener('input',updateWriting);updateWriting();
const links=[...document.querySelectorAll('nav a')];const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))}}},{rootMargin:'-10% 0px -65% 0px'});document.querySelectorAll('main section').forEach(s=>observer.observe(s));
