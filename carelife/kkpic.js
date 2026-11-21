// 国家試験クエスト：問題ごとの 漫画シーン
(function(){
const LN="#4a3328";
const css=document.createElement("style");css.textContent=`
.kkpic{border-radius:16px;overflow:hidden;margin:-4px -4px 10px;border:3px solid ${LN};background:#fff}
.kkpic svg{display:block;width:100%;height:auto}
.kkpic .pp{transform-box:fill-box;transform-origin:50% 100%}
.kkpic .bub{animation:bub .5s cubic-bezier(.2,.8,.3,1.4)}
@keyframes bub{from{transform:scale(0);opacity:0}}
.kkpic .flt{animation:flt 2.4s ease-in-out infinite}
@keyframes flt{50%{transform:translateY(-5px)}}
.kkpic .pop{animation:kpop 1.4s ease-out forwards}
@keyframes kpop{0%{opacity:0;transform:translateY(10px) scale(.6)}25%{opacity:1;transform:scale(1.2)}100%{opacity:0;transform:translateY(-40px)}}`;
document.head.appendChild(css);
// シーン定義：bg, elder(誰), elderMood, prop, 吹き出し
const SC={
 meal:{bg:"#fff3d6",fl:"#f0dcb0",who:"tanaka",m:"happy",prop:`<rect x="40" y="150" width="190" height="12" rx="4" fill="#c8915a" stroke="${LN}" stroke-width="3"/><rect x="55" y="162" width="10" height="40" fill="#b07a48"/><rect x="205" y="162" width="10" height="40" fill="#b07a48"/><text x="105" y="150" font-size="30">🍚</text><text x="145" y="150" font-size="26">🍵</text>`,b:"🍽"},
 bath:{bg:"#dff1ff",fl:"#c7e3f7",who:"suzuki",m:"happy",prop:`<rect x="30" y="140" width="200" height="62" rx="20" fill="#fff" stroke="${LN}" stroke-width="3"/><path d="M36 150 H224" stroke="#7cc4f5" stroke-width="10"/><text x="230" y="70" font-size="26" class="flt">🚿</text>`,b:"♨️",front:1},
 toilet:{bg:"#e8f4f2",fl:"#d0e6e2",who:"suzuki",m:"plain",prop:`<text x="20" y="190" font-size="48">🚽</text>`,b:"🚻"},
 wheel:{bg:"#eef5e6",fl:"#d6e6c6",who:"sato",m:"plain",prop:`<circle cx="125" cy="178" r="24" fill="none" stroke="#555" stroke-width="5"/><circle cx="125" cy="178" r="4" fill="#555"/><path d="M88 150 H150 V178 M88 120 V150" stroke="#555" stroke-width="5" fill="none"/><circle cx="160" cy="196" r="6" fill="#555"/>`,b:"🦽",front:1},
 bed:{bg:"#fde9dc",fl:"#f0d2bd",who:"tanaka",m:"sleep",lie:1,prop:`<rect x="20" y="150" width="210" height="34" rx="8" fill="#c8915a" stroke="${LN}" stroke-width="3"/><rect x="24" y="138" width="60" height="22" rx="10" fill="#fff" stroke="${LN}" stroke-width="2.5"/><rect x="90" y="132" width="140" height="28" rx="12" fill="#a8c8f0" stroke="${LN}" stroke-width="3"/>`,b:"🛏"},
 talk:{bg:"#fff0f3",fl:"#f5d8de",who:"sato",m:"happy",prop:"",b:"💬"},
 dem:{bg:"#f1ecff",fl:"#dcd3f5",who:"tanaka",m:"wow",prop:`<text x="40" y="60" font-size="28" class="flt">❓</text><text x="170" y="50" font-size="22" class="flt">🏠</text>`,b:"💭"},
 med:{bg:"#ffeef4",fl:"#f5d5e0",who:"suzuki",m:"plain",staff:"nurse",prop:`<rect x="20" y="40" width="10" height="120" fill="#bbb"/><rect x="8" y="40" width="34" height="44" rx="6" fill="#e9f6ff" stroke="${LN}" stroke-width="2.5"/><path d="M25 84 Q60 120 90 130" stroke="#9bd" stroke-width="3" fill="none"/>`,b:"💉"},
 body:{bg:"#ffefe9",fl:"#f5d8cf",who:"sato",m:"plain",staff:"nurse",prop:`<text x="20" y="70" font-size="34" class="flt">🫀</text><text x="190" y="60" font-size="26" class="flt">🦴</text>`,b:"🩺"},
 old:{bg:"#f7f1e3",fl:"#e8dcc0",who:"suzuki",m:"plain",prop:`<path d="M190 100 V200 M190 100 q-14 0 -14 -12" stroke="#7a5230" stroke-width="7" fill="none" stroke-linecap="round"/><text x="20" y="60" font-size="26" class="flt">🌸</text>`,b:"👴"},
 plan:{bg:"#eef2ff",fl:"#d6ddf5",who:null,staff:"lead",prop:`<rect x="70" y="60" width="90" height="110" rx="8" fill="#fff" stroke="${LN}" stroke-width="3"/><rect x="98" y="52" width="34" height="14" rx="4" fill="#c8915a" stroke="${LN}" stroke-width="2"/><path d="M84 84 h60 M84 102 h60 M84 120 h44 M84 138 h52" stroke="#9aa6c8" stroke-width="4"/><text x="128" y="160" font-size="20">✅</text>`,b:"📝"},
 law:{bg:"#eef0f5",fl:"#d8dce6",who:null,staff:"family",prop:`<path d="M40 100 L110 60 L180 100Z" fill="#cfd6e6" stroke="${LN}" stroke-width="3"/><rect x="52" y="100" width="116" height="80" fill="#fff" stroke="${LN}" stroke-width="3"/><path d="M70 110 v60 M95 110 v60 M120 110 v60 M145 110 v60" stroke="#cfd6e6" stroke-width="8"/><text x="96" y="92" font-size="18">🏛</text>`,b:"📜"},
 dig:{bg:"#eafaf3",fl:"#cfeee0",who:"sato",m:"happy",prop:`<text x="30" y="70" font-size="30" class="flt">🤝</text><text x="50" y="110" font-size="22" class="flt">💗</text>`,b:"🤝"},
 dis:{bg:"#eef5ff",fl:"#d3e3f7",who:"suzuki",m:"plain",prop:`<circle cx="125" cy="178" r="24" fill="none" stroke="#555" stroke-width="5"/><path d="M88 150 H150 V178 M88 120 V150" stroke="#555" stroke-width="5" fill="none"/><text x="20" y="60" font-size="24" class="flt">♿</text>`,b:"♿",front:1},
 boss:{bg:"#2e2a4a",fl:"#3d3760",who:"tanaka",m:"wow",prop:`<text x="20" y="60" font-size="34" class="flt">👹</text><text x="190" y="44" font-size="20" class="flt">⚡</text>`,b:"🎯"}
};
const KW=[[/食事|嚥下|誤嚥|口腔|栄養|脱水|水分|食べ/,"meal"],[/入浴|清潔|洗髪|手浴|足浴|浴/,"bath"],[/排泄|排便|便秘|尿|おむつ|トイレ/,"toilet"],[/車いす|移乗|移動|歩行|杖|片麻痺|麻痺/,"wheel"],[/睡眠|体位|褥瘡|ベッド|臥位|寝/,"bed"],[/認知症|BPSD|徘徊|せん妄|もの忘れ|記憶/,"dem"],[/吸引|経管|胃ろう|喀痰|医療|服薬|薬/,"med"],[/聴覚|視覚|障害|ALS|パーキンソン|脊髄/,"dis"],[/傾聴|コミュニケーション|共感|受容|話/,"talk"],[/法|制度|保険|年金|生活保護|サービス/,"law"]];
const GD={1:"dig",2:"talk",3:"law",4:"wheel",5:"plan",6:"body",7:"old",8:"dem",9:"dis",10:"med",11:"boss"};
let cur=null;
function pick(x){if(x.g===11&&window.QZ_BOSS)return"boss";for(const[r,k]of KW)if(r.test(x.q))return k;return GD[x.g]||"talk"}
function person(svg,x,y,s,cls){return`<g transform="translate(${x} ${y}) scale(${s})"><g class="pp ${cls||"idle"}">${svg}</g></g>`}
function draw(k,hm,em,react){const c=SC[k],L=window.CL_LOOK,H=window.CL_HELPER;if(!L||!H)return"";
 const staff=c.staff?L[c.staff](hm==="sad"&&c.staff!=="nurse"?"sad":hm):H(hm);
 let el="";if(c.who){el=c.lie?`<g transform="translate(70 130) rotate(-90) scale(.42)">${L[c.who](em)}</g>`:person(L[c.who](em),c.prop&&c.front?115:110,108,.52,react==="ok"?"joy":react==="ng"?"shk":"idle")}
 const sx=c.who?262:250;
 const back=c.front?"":c.prop, front=c.front?c.prop:"";
 return`<svg viewBox="0 0 360 210"><rect width="360" height="210" fill="${c.bg}"/><rect y="168" width="360" height="42" fill="${c.fl}"/>
 ${k==="boss"?"":`<rect x="300" y="60" width="44" height="60" rx="5" fill="#ffffffaa" stroke="${LN}" stroke-width="2.5"/><path d="M322 60 v60 M300 90 h44" stroke="${LN}" stroke-width="2"/>`}
 ${back}${el}${front}${person(staff,sx,104,.52,react==="ok"?"joy":react==="ng"?"shk":"idle")}
 <g class="bub" style="transform-origin:${sx-50}px 40px"><path d="M${sx-80} 14 h56 a12 12 0 0 1 12 12 v16 a12 12 0 0 1 -12 12 h-16 l-10 10 l0 -10 h-30 a12 12 0 0 1 -12 -12 v-16 a12 12 0 0 1 12 -12z" fill="#fff" stroke="${LN}" stroke-width="2.5"/><text x="${sx-54}" y="44" font-size="22" text-anchor="middle">${react==="ok"?"⭐":react==="ng"?"💦":c.b}</text></g>
 ${react==="ok"?`<text x="170" y="100" font-size="40" class="pop" text-anchor="middle">⭕</text>`:react==="ng"?`<text x="170" y="100" font-size="40" class="pop" text-anchor="middle">❌</text>`:""}</svg>`}
window.kkPic=function(x){cur=pick(x);const c=SC[cur];return`<div class="kkpic" id="kkpic">${draw(cur,"plain",c.m||"plain")}</div>`};
window.kkReact=function(ok){const el=document.getElementById("kkpic");if(!el||!cur)return;el.innerHTML=draw(cur,ok?"happy":"sad",ok?"happy":"wow",ok?"ok":"ng")};
})();
