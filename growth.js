'use strict';
/* Growth hooks: "Can you win this argument?" challenge links, share card, local best results, pay CTA. */
(function(){
Viral.init({slug:'argue-with-ai',name:'Argue With AI',url:'https://mxhoaib.github.io/argue-with-ai/',emoji:'⚔️',c1:'#ff9f0a',c2:'#ff453a'});
Viral.heroPay(document.querySelector('.hero'),{item:'pack',cta:'📚 Personal argument pack',price:19,note:'For a real debate, interview or pitch'});
const bar=Viral.payBar({item:'pack',label:'Got a real debate coming up?',cta:'Argument pack',price:19});
const res=document.createElement('div');res.id='result';res.hidden=true;$('#arena').appendChild(res);
const best=Viral.board('debates',res,e=>`${e.w?'🏆 Won':'Lost'} ${e.y}–${e.b} · ${e.side==='for'?'For':'Against'}: ${e.topic}`);
const ch=Viral.readChallenge();
const chal=ch&&Number.isInteger(ch.t)&&ch.t>=0&&ch.t<T.length&&(ch.s==='for'||ch.s==='against')&&Number.isInteger(ch.y)&&Number.isInteger(ch.b)&&ch.y>=0&&ch.y<=3&&ch.b>=0&&ch.b<=3?ch:null;
const who=chal?(Viral.clean(chal.n,24)||'A friend'):'';
const won=()=>st.y>st.b;
const panel=Viral.sharePanel(res,name=>st?{kicker:won()?'I beat the bot':'The bot won this time',big:`${st.y}–${st.b}`,line:`Arguing ${st.side==='for'?'FOR':'AGAINST'}: “${st.t}”`,sub:'3 rounds. Every argument scored for reasons, examples and evidence.',cta:'Can you win this argument?',
 text:`${name||'I'} ${won()?'beat':'lost to'} the bot ${st.y}–${st.b} arguing ${st.side} “${st.t}” ⚔️ Can you win this argument?`,url:Viral.challengeUrl({t:T.indexOf(st.t),s:st.side,y:st.y,b:st.b,n:name})}:{},{title:'Challenge a friend to the same argument'});
let shown=false;
new MutationObserver(()=>{const done=!$('#copy').hidden&&st&&st.done;if(done&&!shown){shown=true;res.hidden=false;
 const vs=chal&&T[chal.t]===st.t&&chal.s===st.side?(st.y-st.b>chal.y-chal.b?`You did better than ${who} (${chal.y}–${chal.b}) 🏆`:st.y-st.b===chal.y-chal.b?`Same result as ${who} (${chal.y}–${chal.b}).`:`${who} did better (${chal.y}–${chal.b}). Rematch?`):'';
 if(vs){let p=$('#vs');if(!p){p=document.createElement('p');p.id='vs';p.style.fontWeight='700';res.prepend(p)}p.textContent=vs}
 best.add({s:(won()?10:0)+st.y-st.b,w:won(),y:st.y,b:st.b,side:st.side,topic:st.t});panel.update();bar.show();Viral.count('debate-finished','Finished debate')}
 if(!done){shown=false;res.hidden=true}}).observe($('#copy'),{attributes:true,attributeFilter:['hidden']});
if(chal){const t=T[chal.t],w=chal.y>chal.b;
 Viral.banner(`⚔️ ${who} ${w?'beat':'lost to'} the bot ${chal.y}–${chal.b} arguing ${chal.s==='for'?'FOR':'AGAINST'} “${t}”. Can you win this argument?`,'Take the same side',()=>{$('#topic').value=chal.t;$('#side').value=chal.s;$('#start').click()},$('.hero'));
 $('#topic').value=chal.t;$('#side').value=chal.s}
})();
