// ===== ケアの一日：動くキャラクター＆アクションミニゲーム =====
(function(){
const K="#2b2622";
// ---------- characters (origin = face center, approx -110..165 tall) ----------
function eyes(m){return m==="happy"?`<path d="M-26 -2 q8 -10 16 0 M10 -2 q8 -10 16 0" stroke="${K}" stroke-width="5" fill="none" stroke-linecap="round"/>`
 :m==="sleep"?`<path d="M-26 0 q8 6 16 0 M10 0 q8 6 16 0" stroke="${K}" stroke-width="5" fill="none" stroke-linecap="round"/>`
 :`<g class="blink"><circle cx="-18" cy="-2" r="5" fill="${K}"/><circle cx="18" cy="-2" r="5" fill="${K}"/></g>${m==="sad"?`<path d="M-32 -12 l16 -7 M32 -12 l-16 -7" stroke="${K}" stroke-width="4" stroke-linecap="round"/>`:""}`}
function mouth(m){return m==="happy"?`<path d="M-14 20 q14 18 28 0 z" fill="#c0392b" stroke="${K}" stroke-width="4" stroke-linejoin="round"/>`
 :m==="sad"?`<path d="M-12 28 q12 -12 24 0" stroke="${K}" stroke-width="5" fill="none" stroke-linecap="round"/>`
 :m==="sleep"?`<ellipse cx="0" cy="24" rx="6" ry="4" fill="${K}"/>`
 :`<path class="mo" d="M-10 22 q10 8 20 0" stroke="${K}" stroke-width="5" fill="none" stroke-linecap="round"/>`}
const cheeks=`<ellipse cx="-38" cy="18" rx="10" ry="6" fill="#ff9e9e" opacity=".8"/><ellipse cx="38" cy="18" rx="10" ry="6" fill="#ff9e9e" opacity=".8"/>`;
function elder(m,o){return `<path d="M-70 150 q0 -80 70 -80 q70 0 70 80 z" fill="${o.top}" stroke="${K}" stroke-width="6"/>
 <path d="M-18 74 l18 26 l18 -26" fill="#fff" stroke="${K}" stroke-width="5"/>
 ${o.bun?`<circle cx="0" cy="-74" r="26" fill="${o.hair}" stroke="${K}" stroke-width="6"/>`:""}
 <ellipse cx="0" cy="0" rx="62" ry="58" fill="#ffd9bf" stroke="${K}" stroke-width="6"/>
 ${o.bun?`<path d="M-62 -6 q-4 -56 62 -58 q66 2 62 58 q-16 -34 -62 -36 q-46 2 -62 36z" fill="${o.hair}" stroke="${K}" stroke-width="6" stroke-linejoin="round"/>`
  :`<path d="M-62 4 q-6 -30 8 -40 q6 18 -2 40z M62 4 q6 -30 -8 -40 q-6 18 2 40z" fill="${o.hair}" stroke="${K}" stroke-width="5"/>`}
 <circle cx="-18" cy="-2" r="16" fill="none" stroke="#8a6d3b" stroke-width="4"/><circle cx="18" cy="-2" r="16" fill="none" stroke="#8a6d3b" stroke-width="4"/><path d="M-2 -2 h4" stroke="#8a6d3b" stroke-width="4"/>
 ${eyes(m)}${cheeks}${mouth(m)}${o.must?`<path d="M-22 12 q22 -10 44 0 q-22 8 -44 0z" fill="${o.hair}" stroke="${K}" stroke-width="3"/>`:""}`}
function staff(m,o){const face=m==="wow"?`<g class="blink"><circle cx="-18" cy="-4" r="7" fill="${K}"/><circle cx="18" cy="-4" r="7" fill="${K}"/></g><ellipse cx="0" cy="24" rx="8" ry="10" fill="#c0392b" stroke="${K}" stroke-width="4"/>`
  :m==="sad"?`<g class="blink"><circle cx="-18" cy="-2" r="5" fill="${K}"/><circle cx="18" cy="-2" r="5" fill="${K}"/></g><path d="M-12 26 q12 -10 24 0" stroke="${K}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M50 -30 q8 14 0 20 q-8 -6 0 -20z" fill="#7cc7ff" stroke="${K}" stroke-width="3"/>`
  :`<path d="M-26 -2 q8 -10 16 0 M10 -2 q8 -10 16 0" stroke="${K}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M-14 18 q14 18 28 0 z" fill="#c0392b" stroke="${K}" stroke-width="4" stroke-linejoin="round"/>`;
 return `<path d="M-66 160 q0 -84 66 -84 q66 0 66 84 z" fill="${o.uni}" stroke="${K}" stroke-width="6"/>
 <path d="M-16 78 l16 18 l16 -18" fill="#fff" stroke="${K}" stroke-width="5"/>
 <rect x="18" y="104" width="30" height="20" rx="4" fill="#fff" stroke="${K}" stroke-width="4"/>
 ${o.short?"":`<path d="M-66 10 q-6 -76 66 -78 q72 2 66 78 l-6 40 h-120z" fill="${o.hair}" stroke="${K}" stroke-width="6" stroke-linejoin="round"/>`}
 <ellipse cx="0" cy="4" rx="58" ry="56" fill="#ffe0c7" stroke="${K}" stroke-width="6"/>
 <path d="M-60 -6 q10 -54 60 -56 q50 2 62 56 q-30 -8 -44 -34 q-20 26 -78 34z" fill="${o.hair}" stroke="${K}" stroke-width="6" stroke-linejoin="round"/>
 ${o.short?"":`<path d="M56 -30 q30 6 24 40" fill="none" stroke="${o.hair}" stroke-width="16" stroke-linecap="round"/><circle cx="50" cy="-40" r="9" fill="${o.pin||"#ff7aa2"}" stroke="${K}" stroke-width="4"/>`}
 ${o.cap?`<path d="M-40 -52 q40 -26 80 0 l-6 14 q-34 -14 -68 0z" fill="#fff" stroke="${K}" stroke-width="5"/><path d="M-6 -52 h12 M0 -58 v12" stroke="#e85d4a" stroke-width="4"/>`:""}
 ${face}${cheeks}`}
const LOOK={
 tanaka:m=>elder(m,{top:"#a78bda",hair:"#d9d9de",bun:1}),
 sato:m=>elder(m,{top:"#f3a6c0",hair:"#f1f1f4",bun:1}),
 suzuki:m=>elder(m,{top:"#7fa6d9",hair:"#d9d9de",must:1}),
 nurse:m=>staff(m==="sad"?"plain":m,{uni:"#ff9fbf",hair:"#4a3328",cap:1,pin:"#fff"}),
 lead:m=>staff(m==="sad"?"plain":m,{uni:"#3c5a8a",hair:"#2b2622",short:1}),
 family:m=>staff(m==="sad"?"plain":m,{uni:"#f4a261",hair:"#7a4a2a",pin:"#ffd34d"})
};
const helperSVG=m=>staff(m,{uni:"#2fb39a",hair:"#3a2a22"});
// ---------- styles ----------
const st=document.createElement("style");st.textContent=`
.stage2{position:relative;border-radius:20px;overflow:hidden;height:190px}
.stage2 svg{position:absolute;inset:0;width:100%;height:100%}
.stage2 .floor{position:absolute;left:0;right:0;bottom:0;height:46px;background:#0000000f}
.idle{animation:breathe 2.6s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}
@keyframes breathe{50%{transform:scaleY(1.025) translateY(-1px)}}
.blink{animation:blink 4s infinite;transform-box:fill-box;transform-origin:center}
@keyframes blink{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
.enter{animation:enter .8s cubic-bezier(.2,.8,.3,1.2)}
@keyframes enter{from{transform:translateX(170px)}}
.walkin{animation:hop .2s 4 alternate}
@keyframes hop{to{transform:translateY(-6px)}}
.talk{animation:talk .22s 6 alternate}
@keyframes talk{to{transform:translateY(-4px) rotate(-1deg)}}
.act{transform-box:fill-box;transform-origin:50% 100%}
.wob{animation:wob 1s ease-in-out infinite}
@keyframes wob{25%{transform:rotate(-6deg)}75%{transform:rotate(6deg)}}
.sway{animation:sway 1s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}
@keyframes sway{25%{transform:rotate(-5deg)}75%{transform:rotate(5deg)}}
.joy{animation:joy .45s 3}
@keyframes joy{40%{transform:translateY(-16px)}}
.shk{animation:shk .4s}
@keyframes shk{25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
.fx{animation:fxu 1.6s ease-out forwards}
@keyframes fxu{from{opacity:0;transform:translateY(10px)}20%{opacity:1}to{opacity:0;transform:translateY(-50px)}}
.zz{animation:zz 2.2s infinite}
@keyframes zz{0%{opacity:0;transform:translate(0,0)}30%{opacity:1}100%{opacity:0;transform:translate(14px,-34px)}}
.say2{background:#fff;border-radius:16px;padding:10px 42px 10px 12px;position:relative;box-shadow:0 2px 6px #00000014;margin-top:10px}
.say2:before{content:"";position:absolute;left:60px;top:-10px;border:10px solid transparent;border-bottom-color:#fff;border-top:0}
.say2 .jp{font-size:18px;font-weight:900;line-height:1.45}.say2 .mm{font-size:13px;color:#7a6f64;line-height:1.7}
.say2 .nm{font-size:11px;font-weight:900;color:#8a7f72}
.say2 button{position:absolute;right:8px;top:8px;border:0;background:#f3ece2;border-radius:10px;font-size:15px;padding:5px 8px}
.mg{background:#fff;border-radius:18px;padding:12px;margin-top:10px;box-shadow:0 2px 8px #0000000f;text-align:center}
.mg h3{margin:0 0 6px;font-size:16px}.mg .hint{font-size:12px;color:#8a7f72;margin-bottom:6px}
.mg svg{width:100%;max-width:340px;display:block;margin:0 auto}
.mgb{display:inline-block;border:0;border-radius:14px;padding:11px 14px;margin:4px;font-size:15px;font-weight:900;font-family:inherit;background:#f3ece2;color:${K};box-shadow:0 3px 0 #e1d3bf}
.mgb.go{background:#2fb39a;color:#fff;box-shadow:0 3px 0 #1f8a76}.mgb.done{background:#e3f6f0;color:#1f8a76;box-shadow:none}
.thermo{position:relative;height:28px;border-radius:14px;background:linear-gradient(90deg,#7cc7ff,#9fe3c9 35%,#ffd34d 60%,#ff7a59);margin:8px 6px}
.thermo .zone{position:absolute;top:-4px;bottom:-4px;border:3px solid #2fb39a;border-radius:8px;background:#2fb39a33}
.thermo .nd{position:absolute;top:-8px;width:6px;height:44px;margin-left:-3px;background:${K};border-radius:3px}
.tv{font-size:34px;font-weight:900}
.dark{position:relative;height:220px;border-radius:16px;overflow:hidden;background:#3b4570;touch-action:none}
.dark .cover{position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at var(--x,50%) var(--y,40%),transparent 46px,#05081cf2 92px)}
.dark .tgt{position:absolute;width:64px;height:64px;margin:-32px 0 0 -32px;font-size:44px;line-height:64px;text-align:center}
.dark .bed{position:absolute;font-size:40px;opacity:.9}
`;document.head.appendChild(st);

// ---------- mini-game step insertion ----------
function rep(ev,i,v){if(ev&&ev[8])ev[8][i]=v}
try{
 rep(DAY[0],1,"@dress");rep(DAY[4],0,"@temp");rep(ALT[1],0,"@brake");ALT[9][8].push("@turn");rep(ALT2[2],0,"@spoon");
 [DAY[10],ALT[10],ALT2[10]].forEach(e=>e[8].unshift("@light"));
}catch(e){}

// ---------- scene ----------
let res="plain";
// ---------- 本物の場面（小道具＋正解アニメ） ----------
const KIND=new Map();
try{[["wake"],["toilet"],["meal","🍚"],["report","🌡️"],["bath"],["meal","🍙"],["rec","sing"],["wallet"],["talk","🏠"],["sleep","tea"],["night","call"],["hand","📋"]].forEach((k,i)=>KIND.set(DAY[i],k));
 [["rest"],["toilet","wheel"],["meal","🦷"],["report","💊"],["bath","towel"],["meal","🍵"],["rec","knee"],["talk","🖼️"],["fall"],["sleep","turn"],["night","walk"],["hand","⚠️"]].forEach((k,i)=>KIND.set(ALT[i],k));
 [["talk","📅"],["toilet"],["meal","🥄"],["report","💅"],["bath"],["meal","⚖️"],["rec","cane"],["cup"],["talk","👩🏻"],["sleep","blanket"],["night","snore"],["hand","📝"]].forEach((k,i)=>KIND.set(ALT2[i],k))}catch(e){}
const E=(t,x,y,s=28,id="",st="")=>`<text ${id?`id="${id}"`:""} x="${x}" y="${y}" font-size="${s}" style="${st}">${t}</text>`;
const BED=(blk="#a7c8f0")=>`<rect x="20" y="128" width="210" height="44" rx="8" fill="#c89b6d" stroke="${K}" stroke-width="4"/><rect x="26" y="112" width="198" height="26" rx="8" fill="#fff" stroke="${K}" stroke-width="4"/><rect x="30" y="104" width="54" height="26" rx="10" fill="#fff" stroke="${K}" stroke-width="4"/>`;
const BLANKET=(c="#a7c8f0")=>`<rect id="blk" x="92" y="98" width="134" height="40" rx="10" fill="${c}" stroke="${K}" stroke-width="4" style="transition:transform .9s,fill .9s"/>`;
const LIE=(who,m)=>`<g id="lie" style="transition:opacity .7s"><g transform="translate(66,104) rotate(-80) scale(.36)">${(LOOK[who]||LOOK.tanaka)(m)}</g>${BLANKET()}</g>`;
const WINDOW=`<rect x="150" y="14" width="86" height="64" rx="6" fill="#bfe6ff" stroke="${K}" stroke-width="4"/><circle id="sun" cx="214" cy="34" r="12" fill="#ffd34d" style="opacity:0;transition:opacity 1s"/><rect id="cL" x="150" y="14" width="44" height="64" fill="#f4a261" stroke="${K}" stroke-width="3" style="transition:transform 1s"/><rect id="cR" x="192" y="14" width="44" height="64" fill="#f4a261" stroke="${K}" stroke-width="3" style="transition:transform 1s"/>`;
const TABLE=f=>`<rect x="20" y="140" width="170" height="14" rx="5" fill="#c89b6d" stroke="${K}" stroke-width="4"/><rect x="40" y="152" width="10" height="40" fill="#a57b52"/><rect x="160" y="152" width="10" height="40" fill="#a57b52"/><rect x="56" y="128" width="80" height="14" rx="6" fill="#f3ece2" stroke="${K}" stroke-width="3"/>${E(f,72,132,26,"food")}`;
const TUBF=`<rect x="20" y="132" width="200" height="58" rx="18" fill="#fff" stroke="${K}" stroke-width="5"/><rect x="28" y="124" width="184" height="14" rx="7" fill="#8fd3ff" opacity=".85"/>`;
const DESK=`<rect x="10" y="138" width="180" height="16" rx="5" fill="#c89b6d" stroke="${K}" stroke-width="4"/><rect x="18" y="152" width="164" height="40" fill="#b08a60"/>${E("💻",130,136,26)}`;
const WHEEL=`<g><circle cx="60" cy="166" r="22" fill="none" stroke="${K}" stroke-width="5"/><circle cx="128" cy="166" r="22" fill="none" stroke="${K}" stroke-width="5"/><path d="M50 108 v42 h86" fill="none" stroke="${K}" stroke-width="6"/></g>`;
const DRAWER=`<rect x="130" y="110" width="90" height="80" rx="6" fill="#d9b48a" stroke="${K}" stroke-width="4"/><rect id="drw" x="138" y="122" width="74" height="26" rx="4" fill="#ecd1ad" stroke="${K}" stroke-width="3" style="transition:transform .8s"/><circle cx="175" cy="135" r="3" fill="${K}"/><rect x="138" y="156" width="74" height="26" rx="4" fill="#ecd1ad" stroke="${K}" stroke-width="3"/>`;
const TOILET=E("🚽",170,150,48,"wc");
function setup(ev){const k=KIND.get(ev)||["none"],w=ev[3];let back="",front="",lie=false,res={x:92,y:104},extra="";
 switch(k[0]){
  case"wake":case"rest":back=WINDOW+BED();lie=true;break;
  case"sleep":back=BED();lie=true;if(k[1]==="tea")extra=E("☕",200,150,28,"cup");break;
  case"night":if(k[1]==="walk"){back=`<path id="beam" d="M240 110 L40 60 L40 170 Z" fill="#fff6c9" opacity=".22"/>`}else{back=BED();lie=true}break;
  case"toilet":back=TOILET;if(k[1]==="wheel")front=WHEEL;break;
  case"meal":front=TABLE(k[1]);break;
  case"report":case"hand":front=DESK;break;
  case"bath":back=`<rect x="20" y="96" width="200" height="40" rx="14" fill="#eaf6ff" stroke="${K}" stroke-width="4"/>`+E("🚿",226,60,30);front=TUBF;res={x:262-170,y:104};break;
  case"rec":back=E("🎹",250,70,34)+(k[1]==="cane"?"":E("🎵",170,40,22));break;
  case"wallet":back=DRAWER;res={x:70,y:104};break;
  case"talk":back=E(k[1],160,60,30,"prop","opacity:.0;transition:opacity .8s");break;
  case"fall":back=BED();break;
  case"cup":back=`<rect x="150" y="140" width="70" height="12" rx="4" fill="#c89b6d" stroke="${K}" stroke-width="3"/>`+E("🥛",168,138,30,"cup");break;
 }
 return {k,back,front,lie,res,extra}}
function stageHTML(ev,who,dark){const look=LOOK[ev[3]]||LOOK.tanaka;const sleepy=/すう|グー/.test(ev[5]);res=sleepy?"sleep":/ない|いたい|こわい|さむい|どこ|ねむれない|いらない|はずかしい|来ないの|帰らなきゃ|とられた|にがて|ふらふら/.test(ev[5])?"sad":"plain";
 const L=setup(ev);S.kind=L.k;
 return `<div class="stage2" style="background:${ev[4]}"><div class="floor"></div>
 <svg viewBox="0 0 340 190"><g id="back">${L.back}</g>
 <g id="rP" style="transition:transform 1s ease-in-out;${L.lie?"opacity:0":""}"><g transform="translate(${L.res.x},${L.res.y}) scale(.56)"><g class="act${L.k[0]==="fall"?" wob":""}"><g id="resG" class="idle">${look(res)}</g></g></g></g>
 ${L.lie?LIE(ev[3],res):""}
 <g id="hP" style="transition:transform 1s ease-in-out"><g transform="translate(262,108) scale(.52)"><g class="enter"><g id="hlpG" class="idle">${helperSVG("plain")}</g></g></g></g>
 <g id="front">${L.front}${L.extra}</g>
 <g id="fxG">${sleepy?`<text class="zz" x="${L.lie?60:120}" y="${L.lie?84:50}" font-size="22">💤</text><text class="zz" style="animation-delay:1.1s" x="${L.lie?72:132}" y="${L.lie?74:40}" font-size="16">💤</text>`:""}${dark?`<text x="16" y="30" font-size="22">🌙</text><text x="300" y="26" font-size="14">✨</text>`:""}</g>
 <rect id="dim" x="0" y="0" width="340" height="190" fill="#0b1030" opacity="0" style="transition:opacity 1.5s;pointer-events:none"/></svg></div>
 <div class="say2"><div class="nm">${who[1]}</div><div class="jp">${ev[5]}</div>${showMM&&ev[6]?`<div class="mm">${ev[6]}</div>`:""}<button id="rp">🔊</button></div>`}
const $i=id=>document.getElementById(id);
function T(id,tf,ms=900){const e=$i(id);if(!e)return;e.style.transition=`transform ${ms}ms ease-in-out,opacity ${ms}ms`;e.style.transform=tf}
function O(id,v){const e=$i(id);if(e)e.style.opacity=v}
function seq(a){a.forEach(([t,f])=>setTimeout(()=>{if($i("hP"))f()},t))}
function sitUp(m="happy"){document.querySelectorAll(".zz").forEach(z=>z.remove());O("lie",0);O("rP",1);setRes(m,"joy")}
function play(){const [k,p]=S.kind||["none"];
 const walkBoth=(dx)=>{T("rP",`translate(${dx}px,0)`,1400);T("hP",`translate(${dx-20}px,0)`,1400);[$i("rP"),$i("hP")].forEach(e=>e&&e.firstElementChild.firstElementChild.classList.add("walkin"))};
 switch(k){
  case"wake":seq([[0,()=>{T("cL","translateX(-40px)");T("cR","translateX(40px)");O("sun",1)}],[600,()=>fx("☀️",206,40)],[900,()=>sitUp()],[1400,()=>fx("おはよう！",60,40)]]);break;
  case"rest":seq([[0,()=>T("blk","translateY(-6px)")],[300,()=>fx("👋 また 来ますね",190,40)],[700,()=>T("hP","translateX(40px)",1200)],[900,()=>fx("💤",70,80)]]);break;
  case"sleep":if(p==="tea")seq([[0,()=>T("hP","translateX(-60px)")],[700,()=>fx("☕♨️",200,110)],[1200,()=>sitUp("happy")],[2200,()=>O("dim",.45)],[2400,()=>fx("💤",110,50)]]);
   else if(p==="turn")seq([[0,()=>T("hP","translateX(-50px)")],[700,()=>{const g=$i("lie");if(g){g.style.transition="transform 1s";g.style.transformOrigin="120px 120px";g.style.transform="rotate(-6deg)"}}],[1100,()=>fx("🛏️✨ らくになった",120,60)],[1800,()=>O("dim",.4)],[2000,()=>fx("💤",80,70)]]);
   else seq([[0,()=>T("hP","translateX(-50px)")],[600,()=>{const b=$i("blk");if(b){b.style.fill="#f4a261";b.style.transform="translateY(-6px)"}}],[1000,()=>fx("🧣 ぽかぽか",120,70)],[1800,()=>O("dim",.4)],[2000,()=>fx("💤",80,70)]]);break;
  case"night":if(p==="walk")seq([[0,()=>T("hP","translateX(-70px)")],[800,()=>fx("💡",160,60)],[1000,()=>setRes("happy","joy")],[1300,()=>walkBoth(120)],[1600,()=>fx("そっと お部屋へ",110,40)]]);
   else if(p==="snore")seq([[0,()=>fx("👀",80,70)],[500,()=>fx("📞 看護師さん！",190,40)],[1200,()=>T("hP","translateX(30px)")]]);
   else seq([[0,()=>fx("💡",120,60)],[400,()=>T("hP","translateX(-60px)")],[1200,()=>sitUp()],[1600,()=>walkBoth(110)],[1800,()=>fx("足元 よし",100,40)]]);break;
  case"toilet":if(p==="wheel")seq([[0,()=>fx("カチッ",50,150)],[300,()=>fx("カチッ",120,150)],[800,()=>{T("rP","translate(60px,-6px)",1200)}],[1400,()=>fx("🚽✨",190,80)]]);
   else seq([[0,()=>walkBoth(60)],[1500,()=>fx("🚽✨ すっきり",160,60)]]);break;
  case"meal":seq([[0,()=>fx(p==="🍵"?"とろみ✓":p==="🦷"?"やわらか🍮":p==="⚖️"?"いつもの量":"🥄",70,120)],[500,()=>fx("もぐもぐ",110,60)],[1000,()=>fx("😋",120,40)],[1500,()=>fx("おいしい！",60,30)]]);break;
  case"report":seq([[0,()=>T("hP","translateX(-60px)")],[600,()=>fx("📋",170,80)],[1000,()=>fx("報告します",200,40)],[1600,()=>fx("ありがとう👍",60,30)]]);break;
  case"hand":seq([[0,()=>fx("✏️",120,120)],[400,()=>fx("📒",100,128)],[900,()=>fx("事実を 正確に",150,40)],[1500,()=>fx("👍",60,40)]]);break;
  case"bath":seq([[0,()=>T("rP","translate(0px,26px)",1200)],[700,()=>fx("🫧",60,120)],[900,()=>fx("🫧",140,118)],[p==="towel"?300:1200,()=>fx(p==="towel"?"🧺 タオル":"♨️",p==="towel"?40:100,p==="towel"?90:80)],[1500,()=>fx("いい 気持ち",50,40)]]);break;
  case"rec":if(p==="knee")seq([[0,()=>fx("🪑",70,170)],[400,()=>T("rP","translate(0,14px)")],[900,()=>fx("ふう…",60,40)]]);
   else if(p==="cane")seq([[0,()=>fx("🦯",130,150)],[200,()=>walkBoth(70)],[1500,()=>fx("ゆっくり 一歩ずつ",120,40)]]);
   else {const g=$i("rP");if(g)g.firstElementChild.firstElementChild.classList.add("sway");seq([[0,()=>fx("👏",140,90)],[400,()=>fx("🎵",170,40)],[800,()=>fx("👏",60,90)],[1200,()=>fx("🎶",200,30)],[1600,()=>fx("たのしいね",60,30)]])}break;
  case"wallet":seq([[0,()=>T("drw","translateX(36px)")],[700,()=>fx("👛",190,120)],[1200,()=>fx("あった！",50,40)]]);break;
  case"talk":seq([[0,()=>O("prop",1)],[300,()=>T("hP","translateX(-50px)")],[900,()=>fx("うんうん",200,40)],[1400,()=>fx("💞",150,60)]]);break;
  case"fall":seq([[0,()=>T("hP","translateX(-110px)",400)],[400,()=>{document.querySelectorAll(".wob").forEach(e=>e.classList.remove("wob"))}],[500,()=>fx("✋ ささえる",150,50)],[1000,()=>T("rP","translate(0,10px)")],[1400,()=>fx("大丈夫ですよ",160,30)]]);break;
  case"cup":seq([[0,()=>fx("🦷",150,100)],[500,()=>fx("💧",180,120)],[1000,()=>fx("ピカピカ✨",160,60)]]);break;
 }}
function setRes(m,cls){const g=document.getElementById("resG");if(!g)return;const ev=S.day[S.i];g.innerHTML=(LOOK[ev[3]]||LOOK.tanaka)(m);if(cls){g.parentNode.classList.remove("joy","shk");void g.parentNode.getBBox;g.parentNode.classList.add(cls);setTimeout(()=>g.parentNode.classList.remove(cls),1500)}}
function setHlp(m){const g=document.getElementById("hlpG");if(g)g.innerHTML=helperSVG(m)}
function fx(t,x=92,y=40){const g=document.getElementById("fxG");if(!g)return;const e=document.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("x",x);e.setAttribute("y",y);e.setAttribute("font-size","26");e.setAttribute("class","fx");e.textContent=t;g.appendChild(e);setTimeout(()=>e.remove(),1700)}
function talk(){const g=document.getElementById("resG");if(!g)return;const p=g.parentNode;p.classList.remove("talk");void p.getBBox;p.classList.add("talk");setTimeout(()=>p.classList.remove("talk"),1500)}

window.scene=function(){const ev=S.day[S.i],who=P[ev[3]];S.q=0;S.tries=0;say(ev[5]);
 const dark=["よる","しんや"].includes(ev[1]);
 const draw=()=>{const step=ev[8][S.q];
  $("#sc").innerHTML=stageHTML(ev,who,dark)+(S.q===0?`<div class="sit">📝 ${ev[7]}</div>`:"")+`<div id="body"></div><div id="ex"></div>`;
  $("#rp").onclick=()=>{say(ev[5],true);talk()};setTimeout(talk,250);
  if(typeof step==="string"){MG[step.slice(1)](ev,(first,ok,label,ans,exp)=>result(first,ok,label,ans,exp));return}
  const [q,chs]=step;if(!S.order)S.order=chs.map((c,i)=>i).sort(()=>Math.random()-.5);
  $("#body").innerHTML=`<div class="q">${q}</div>${S.order.map((i,k)=>`<button class="ch" data-c="${i}"><span class="ab">${"ABC"[k]}</span><span>${chs[i][0]}</span></button>`).join("")}`;
  document.querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>{const c=chs[+b.dataset.c];S.tries++;
   if(c[1]){b.classList.add("ok");document.querySelectorAll("[data-c]").forEach(x=>x.disabled=true);hearts(b,S.tries===1?"💖":"💛");
    result(S.tries===1,true,q,chs.find(x=>x[1])[0],c[2])}
   else{b.classList.add("ng");b.disabled=true;setRes("sad","shk");setHlp("sad");fx("💦",120,46);
    $("#ex").innerHTML=`<div class="exp" style="background:#fde8e6"><span class="bi">🤔</span><span><b>うーん…</b><br>${c[2]}<br><small>もう一度 えらんでみよう</small></span></div>`}})};
 const result=(first,ok,label,ans,exp)=>{const key=S.i+"_"+S.q;if(S.res===key)return;S.res=key;document.querySelectorAll(".mg button").forEach(b=>b.disabled=true);const pts=first?2:ok?1:0;S.pts+=pts;S.max+=2;if(first)S.good++;else S.log.push([label,ans]);
  if(ok){const lying=$i("lie")&&+getComputedStyle($i("rP")).opacity===0;if(!lying)setRes("happy","joy");setHlp("plain");play();setTimeout(()=>fx("💖",240,36),200);say(first?"ありがとう":"ありがとうね")}
  $("#ex").innerHTML=`<div class="exp" style="background:${ok?"#e3f6f0":"#fff3d6"}"><span class="bi">${first?"💯":ok?"⭕":"📖"}</span><span><b>${first?"すばらしい！":ok?"できた！":"おぼえよう"}</b><br>${exp}</span></div><button class="btn" id="nx">${S.q<ev[8].length-1?"つぎへ ▶":"おわり ▶"}</button>`;
  $("#nx").onclick=()=>{S.order=null;S.tries=0;if(S.q<ev[8].length-1){S.q++;draw()}else done()};setTimeout(()=>$("#ex").scrollIntoView({behavior:"smooth",block:"nearest"}),100)};
 S.order=null;draw();$("#ov").className="ov";$("#ov").style.display="flex"};

// ---------- mini-games ----------
const MG={};
// 1) お風呂の温度
MG.temp=(ev,cb)=>{let v=40,run=true,tries=0,t0=performance.now(),raf;
 $("#body").innerHTML=`<div class="mg"><h3>🛁 お湯の 温度を ちょうどよく！</h3><div class="hint">緑の ところ（38〜41℃）で ストップ</div>
 <svg viewBox="0 -24 320 134"><rect x="40" y="40" width="240" height="60" rx="26" fill="#fff" stroke="${K}" stroke-width="5"/><rect id="wt" x="48" y="52" width="224" height="40" rx="18" fill="#9fd6ff"/>
 <g class="zz"><text x="90" y="36" font-size="22">♨️</text></g><g class="zz" style="animation-delay:.8s"><text x="200" y="34" font-size="22">♨️</text></g></svg>
 <div class="thermo"><div class="zone" style="left:${(38-30)/20*100}%;width:${3/20*100}%"></div><div class="nd" id="nd"></div></div>
 <div class="tv" id="tv">40℃</div><button class="mgb go" id="stop">✋ ストップ！</button></div>`;
 const loop=t=>{if(!run)return;const sp=1.6+tries*.2;v=30+20*(.5+.5*Math.sin((t-t0)/1000*sp*Math.PI));$("#nd").style.left=(v-30)/20*100+"%";$("#tv").textContent=Math.round(v)+"℃";
  const w=$("#wt");w.setAttribute("fill",v<36?"#9fd6ff":v>42?"#ff9f8a":"#8fe0c4");raf=requestAnimationFrame(loop)};raf=requestAnimationFrame(loop);
 $("#stop").onclick=()=>{const r=Math.round(v);
  if(r>=38&&r<=41){run=false;$("#stop").classList.add("done");$("#stop").textContent=`✅ ${r}℃ ちょうどいい！`;cb(tries===0,true,"お風呂の お湯の 温度","38〜41℃（自分と 本人で 確かめる）","お湯の 目安は 38〜41℃。介護者が 確かめてから、本人にも 確かめてもらいます。")}
  else{tries++;setRes("sad","shk");fx(r>41?"🔥":"🥶",92,36);$("#stop").textContent=r>41?`${r}℃ あつい！もう一回`:`${r}℃ ぬるい！もう一回`;
   if(tries>=3){run=false;cb(false,false,"お風呂の お湯の 温度","38〜41℃","お湯の 目安は 38〜41℃。熱すぎると やけどや 血圧の 変化、ぬるいと 体が 冷えます。")}}}};
// 2) 車いす
MG.brake=(ev,cb)=>{const need={L:0,R:0,F:0};let tries=0;
 $("#body").innerHTML=`<div class="mg"><h3>🦽 便座に 移る 準備を しよう</h3><div class="hint">安全の ために するところを ぜんぶ タッチ → 立ってもらう</div>
 <svg viewBox="0 0 320 170" id="wc"><g id="chair"><circle cx="110" cy="128" r="36" fill="none" stroke="${K}" stroke-width="6"/><circle cx="210" cy="128" r="36" fill="none" stroke="${K}" stroke-width="6"/>
 <path d="M100 40 v60 h120 v-50" fill="none" stroke="${K}" stroke-width="7" stroke-linejoin="round"/><rect x="104" y="84" width="112" height="16" rx="6" fill="#7fa6d9" stroke="${K}" stroke-width="4"/>
 <path d="M216 100 l30 40 h26" fill="none" stroke="${K}" stroke-width="6"/></g>
 <g data-p="L" style="cursor:pointer"><circle cx="62" cy="100" r="30" fill="#ffe27a" stroke="${K}" stroke-width="4"/><text x="62" y="96" text-anchor="middle" font-size="12" font-weight="900">左の</text><text x="62" y="111" text-anchor="middle" font-size="12" font-weight="900">ブレーキ</text></g>
 <g data-p="R" style="cursor:pointer"><circle cx="160" cy="36" r="30" fill="#ffe27a" stroke="${K}" stroke-width="4"/><text x="160" y="32" text-anchor="middle" font-size="12" font-weight="900">右の</text><text x="160" y="47" text-anchor="middle" font-size="12" font-weight="900">ブレーキ</text></g>
 <g data-p="F" style="cursor:pointer"><circle cx="276" cy="120" r="30" fill="#ffe27a" stroke="${K}" stroke-width="4"/><text x="276" y="118" text-anchor="middle" font-size="12" font-weight="900">足を</text><text x="276" y="132" text-anchor="middle" font-size="12" font-weight="900">おろす</text></g></svg>
 <button class="mgb go" id="up">🧍 立ってもらう</button></div>`;
 document.querySelectorAll("[data-p]").forEach(g=>g.onclick=()=>{need[g.dataset.p]=1;g.querySelector("circle").setAttribute("fill","#8fe0c4");fx("カチッ",g.dataset.p==="F"?240:g.dataset.p==="L"?40:130,30);say(g.dataset.p==="F"?"あしを おろします":"ブレーキ よし",true)});
 $("#up").onclick=()=>{if(need.L&&need.R&&need.F){$("#up").classList.add("done");$("#up").textContent="✅ 安全に 立てた！";cb(tries===0,true,"車いすから 移るとき","ブレーキ（左右）を かけて、足を フットサポートから おろす","ブレーキと 足の位置は 移乗の 基本。どれか 1つでも 忘れると 転倒の 原因に なります。")}
  else{tries++;const c=$("#chair");c.style.transition="transform .5s";c.style.transform="translateX(26px)";setTimeout(()=>c.style.transform="",600);fx("あぶない！",160,30);setRes("sad","shk");say("あぶない",true)}}};
// 3) 着がえ
MG.dress=(ev,cb)=>{let step=0,tries=0;
 $("#body").innerHTML=`<div class="mg"><h3>👕 パジャマを 着せよう</h3><div class="hint">田中さんは 右に まひ が あります。どちらの 袖から？</div>
 <svg viewBox="0 0 320 150"><path d="M110 40 q50 -20 100 0 l10 100 h-120z" fill="#fff" stroke="${K}" stroke-width="5"/>
 <rect id="aR" x="62" y="44" width="40" height="96" rx="18" fill="#ffd9bf" stroke="${K}" stroke-width="5"/><rect id="aL" x="218" y="44" width="40" height="96" rx="18" fill="#ffd9bf" stroke="${K}" stroke-width="5"/>
 <text x="82" y="34" text-anchor="middle" font-size="13" font-weight="900" fill="#e85d4a">右（まひ）</text><text x="238" y="34" text-anchor="middle" font-size="13" font-weight="900">左</text>
 <circle cx="160" cy="26" r="20" fill="#ffd9bf" stroke="${K}" stroke-width="5"/></svg>
 <button class="mgb" data-s="R">右の 袖を 通す</button><button class="mgb" data-s="L">左の 袖を 通す</button></div>`;
 document.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{const want=step===0?"R":"L";
  if(b.dataset.s===want){document.getElementById("a"+want).setAttribute("fill","#a78bda");b.classList.add("done");b.disabled=true;step++;fx("✨",want==="R"?70:230,40);
   if(step===2)cb(tries===0,true,"パジャマを 着るとき","右（まひのある方）から 袖を 通す","着るときは まひのある方から（着患）、脱ぐときは よく動く方から（脱健）。")}
  else{tries++;b.classList.add("ng");setTimeout(()=>b.classList.remove("ng"),500);setRes("sad","shk");fx("いたた…",80,40);say("いたた",true)}})};
// 4) 体位変換
MG.turn=(ev,cb)=>{const done={knee:0,arm:0};let tries=0;
 $("#body").innerHTML=`<div class="mg"><h3>🛏️ 体の 向きを かえよう</h3><div class="hint">体を 小さく まとめてから、手前に 向けよう</div>
 <svg viewBox="0 0 320 150"><rect x="20" y="20" width="280" height="110" rx="14" fill="#e3f1ff" stroke="${K}" stroke-width="5"/><rect x="30" y="50" width="60" height="50" rx="12" fill="#fff" stroke="${K}" stroke-width="4"/>
 <g id="body2" style="transition:transform .8s;transform-origin:170px 75px"><circle cx="70" cy="75" r="22" fill="#ffd9bf" stroke="${K}" stroke-width="5"/>
 <rect x="94" y="52" width="110" height="46" rx="20" fill="#a78bda" stroke="${K}" stroke-width="5"/>
 <path id="legs" d="M204 62 h80 M204 88 h80" stroke="${K}" stroke-width="14" stroke-linecap="round"/>
 <path id="arms" d="M110 54 l40 -14 M110 96 l40 14" stroke="#ffd9bf" stroke-width="12" stroke-linecap="round"/>
 <circle cx="160" cy="98" r="7" fill="#ff7a7a" opacity=".85"/></g></svg>
 ${[["knee","① 両ひざを 立てる"],["arm","② 手を 胸の上で 組む"],["turn","③ 手前に 向ける"]].sort(()=>Math.random()-.5).map(a=>`<button class="mgb" data-t="${a[0]}">${a[1]}</button>`).join("")}</div>`;
 document.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{const t=b.dataset.t;
  if(t==="knee"){done.knee=1;$("#legs").setAttribute("d","M204 62 l36 -26 l40 24 M204 88 l36 -26 l40 24");b.classList.add("done");b.disabled=true;fx("✨",230,40)}
  else if(t==="arm"){done.arm=1;$("#arms").setAttribute("d","M110 60 l40 14 M110 90 l40 -14");b.classList.add("done");b.disabled=true;fx("✨",130,40)}
  else if(done.knee&&done.arm){$("#body2").style.transform="rotate(-8deg) scaleY(.7)";b.classList.add("done");b.disabled=true;fx("🛏️✨",150,40);
   cb(tries===0,true,"体の 向きを かえるとき","ひざを立て、手を胸の上で組んで、小さく まとめてから 向ける","体を 小さく まとめると、少ない 力で 楽に 向きを かえられます。2時間ごとが 目安。床ずれ（赤い所）を 防ぎます。")}
  else{tries++;b.classList.add("ng");setTimeout(()=>b.classList.remove("ng"),500);fx("おもい…💦",150,40);setHlp("sad");setTimeout(()=>setHlp("plain"),900)}})};
// 5) 夜の見回り
MG.light=(ev,cb)=>{const x=20+Math.random()*60,y=35+Math.random()*45,t0=Date.now();const who=P[ev[3]];
 $("#body").innerHTML=`<div class="mg"><h3>🔦 暗い へやで ${who[1]}を さがそう</h3><div class="hint">指で なぞって ライトを 動かそう → 見つけたら タッチ</div>
 <div class="dark" id="dk"><span class="bed" style="left:8%;top:20%">🛏️</span><span class="bed" style="left:60%;top:55%">🛏️</span><span class="bed" style="left:70%;top:12%">🪑</span>
 <div class="tgt" id="tg" style="left:${x}%;top:${y}%">${who[0]}</div><div class="cover" id="cv"></div></div></div>`;
 const dk=$("#dk"),mv=e=>{const r=dk.getBoundingClientRect(),p=e.touches?e.touches[0]:e;dk.style.setProperty("--x",(p.clientX-r.left)+"px");dk.style.setProperty("--y",(p.clientY-r.top)+"px")};
 dk.addEventListener("pointermove",mv);dk.addEventListener("pointerdown",mv);dk.addEventListener("touchmove",e=>{e.preventDefault();mv(e)},{passive:false});
 $("#tg").onclick=()=>{$("#cv").style.background="none";$("#tg").style.fontSize="54px";say("みつけた",true);const sec=(Date.now()-t0)/1000;
  cb(sec<12,true,"夜の 見回り","暗い 部屋でも 一人ひとりの 様子を 確かめる","夜は 転倒や 体調の 急変が 起きやすい 時間。足元を 照らして、そっと 様子を 見ます。")}};
// 6) 食事介助（スプーン）
MG.spoon=(ev,cb)=>{let tries=0;
 $("#body").innerHTML=`<div class="mg"><h3>🥄 口の どちらから 入れる？</h3><div class="hint">田中さんは 右に まひ が あります（向かって 左が 田中さんの 右）</div>
 <svg viewBox="0 0 320 170"><ellipse cx="160" cy="90" rx="70" ry="66" fill="#ffd9bf" stroke="${K}" stroke-width="6"/>
 <path d="M90 80 q-4 -60 70 -62 q74 2 70 62 q-18 -36 -70 -38 q-52 2 -70 38z" fill="#d9d9de" stroke="${K}" stroke-width="5"/>
 <circle cx="138" cy="84" r="5" fill="${K}"/><circle cx="182" cy="84" r="5" fill="${K}"/><path d="M140 120 q20 12 40 0" stroke="${K}" stroke-width="5" fill="none" stroke-linecap="round"/>
 <text x="70" y="166" text-anchor="middle" font-size="13" font-weight="900" fill="#e85d4a">田中さんの 右（まひ）</text><text x="250" y="166" text-anchor="middle" font-size="13" font-weight="900">田中さんの 左</text>
 <g id="sp" style="transition:transform .6s"><text x="150" y="40" font-size="30">🥄</text></g></svg>
 <button class="mgb" data-m="R">← この 口の はし</button><button class="mgb" data-m="L">この 口の はし →</button></div>`;
 document.querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>{const L=b.dataset.m==="L";$("#sp").style.transform=`translate(${L?30:-40}px,78px)`;
  if(L){b.classList.add("done");setTimeout(()=>{fx("もぐもぐ😋",150,30);cb(tries===0,true,"片麻痺の 人の 食事介助","よく動く方（健側）の 口から 少しずつ","健側から 入れると、かんで 飲みこみやすく なります。まひ側には 食べ物が 残りやすいので 気をつけます。")},600)}
  else{tries++;setTimeout(()=>{fx("こぼれちゃう…",80,60);setRes("sad","shk");$("#sp").style.transform=""},650)}})};
})();
