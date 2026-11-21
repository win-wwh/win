// 介護のことば：場面ごとに 学ぶ ＋ ことばずかん ＋ ことばクイズ
(function(){
const V={
wake:["🌅 おはようの 場面",[["起床","きしょう","အိပ်ရာမှ ထခြင်း"],["声かけ","こえかけ","စကားပြော နှုတ်ဆက်ခြင်း"],["着替え","きがえ","အဝတ်လဲခြင်း"],["洗面","せんめん","မျက်နှာသစ်ခြင်း"],["起き上がり","おきあがり","ထ၍ ထိုင်ခြင်း"],["端座位","たんざい","ကုတင်အစွန်းတွင် ထိုင်ခြင်း"]]],
rest:["🛏 休けいの 場面",[["体調","たいちょう","ကျန်းမာရေး အခြေအနေ"],["休息","きゅうそく","အနားယူခြင်း"],["顔色","かおいろ","မျက်နှာအရောင်"],["横になる","よこになる","လှဲလျောင်းသည်"],["様子を見る","ようすをみる","အခြေအနေကို စောင့်ကြည့်သည်"]]],
toilet:["🚻 トイレの 場面",[["排泄","はいせつ","အညစ်အကြေး စွန့်ခြင်း"],["尿意","にょうい","ဆီးသွားချင်စိတ်"],["便意","べんい","ဝမ်းသွားချင်စိတ်"],["誘導","ゆうどう","လမ်းပြ ခေါ်ဆောင်ခြင်း"],["失禁","しっきん","ဆီး/ဝမ်း မထိန်းနိုင်ခြင်း"],["手すり","てすり","လက်ကိုင်တန်း"],["車いす","くるまいす","ဘီးတပ်ကုလားထိုင်"]]],
meal:["🍚 食事の 場面",[["食事介助","しょくじかいじょ","အစာစားရာတွင် ကူညီခြင်း"],["誤嚥","ごえん","အစာ လေပြွန်ထဲ မှားဝင်ခြင်း"],["嚥下","えんげ","မျိုချခြင်း"],["姿勢","しせい","ကိုယ်ဟန် အနေအထား"],["とろみ","とろみ","ပျစ်အောင် လုပ်ခြင်း"],["口腔ケア","こうくうケア","ပါးစပ် သန့်ရှင်းရေး"],["水分補給","すいぶんほきゅう","ရေဓာတ် ဖြည့်ခြင်း"]]],
report:["🌡 体調チェックの 場面",[["体温","たいおん","ကိုယ်အပူချိန်"],["血圧","けつあつ","သွေးပေါင်"],["脈拍","みゃくはく","သွေးခုန်နှုန်း"],["報告","ほうこく","အစီရင်ခံခြင်း"],["服薬","ふくやく","ဆေးသောက်ခြင်း"],["発熱","はつねつ","ဖျားခြင်း"],["看護師","かんごし","သူနာပြု"]]],
bath:["🛁 お風呂の 場面",[["入浴","にゅうよく","ရေချိုးခြင်း"],["湯温","ゆおん","ရေ၏ အပူချိန်"],["脱衣所","だついじょ","အဝတ်လဲခန်း"],["清拭","せいしき","ကိုယ်ကို သုတ်ပေးခြင်း"],["保湿","ほしつ","အစိုဓာတ် ထိန်းခြင်း"],["湯冷め","ゆざめ","ရေချိုးပြီး အအေးမိခြင်း"]]],
rec:["🎵 レクの 場面",[["体操","たいそう","ကိုယ်လက် လေ့ကျင့်ခန်း"],["参加","さんか","ပါဝင်ခြင်း"],["機能訓練","きのうくんれん","ကိုယ်ခန္ဓာ လုပ်ဆောင်နိုင်စွမ်း လေ့ကျင့်ခြင်း"],["転倒予防","てんとうよぼう","လဲကျခြင်း ကာကွယ်ရေး"],["杖","つえ","တုတ်ကောက်"],["見守り","みまもり","စောင့်ကြည့်ပေးခြင်း"]]],
wallet:["👛 さいふの 場面",[["認知症","にんちしょう","ဒီမင်းရှား (မှတ်ဉာဏ် ချို့ယွင်းခြင်း)"],["物盗られ妄想","ものとられもうそう","ပစ္စည်း ခိုးခံရသည်ဟု ထင်ခြင်း"],["共感","きょうかん","စာနာ နားလည်ခြင်း"],["否定しない","ひていしない","မငြင်းဆိုပါနှင့်"],["一緒に探す","いっしょにさがす","အတူတူ ရှာသည်"]]],
talk:["💬 お話の 場面",[["傾聴","けいちょう","ဂရုတစိုက် နားထောင်ခြင်း"],["帰宅願望","きたくがんぼう","အိမ်ပြန်ချင်စိတ်"],["寄り添う","よりそう","အနားမှာ ရှိပေးသည်"],["安心","あんしん","စိတ်အေးခြင်း"],["面会","めんかい","လာရောက် တွေ့ဆုံခြင်း"],["家族","かぞく","မိသားစု"]]],
fall:["⚠️ 転んだ 場面",[["転倒","てんとう","လဲကျခြင်း"],["意識","いしき","သတိ"],["外傷","がいしょう","ဒဏ်ရာ"],["応援を呼ぶ","おうえんをよぶ","အကူအညီ ခေါ်သည်"],["事故報告書","じこほうこくしょ","မတော်တဆမှု အစီရင်ခံစာ"],["動かさない","うごかさない","မရွှေ့ပါနှင့်"]]],
sleep:["🌙 ねる前の 場面",[["就寝","しゅうしん","အိပ်ရာဝင်ခြင်း"],["体位変換","たいいへんかん","ကိုယ်အနေအထား ပြောင်းပေးခြင်း"],["褥瘡","じょくそう","အိပ်ရာနာ"],["掛け布団","かけぶとん","စောင်"],["安眠","あんみん","ကောင်းကောင်း အိပ်ပျော်ခြင်း"]]],
night:["🔦 夜の 見回りの 場面",[["夜勤","やきん","ညဆိုင်း"],["巡視","じゅんし","လှည့်လည် စစ်ဆေးခြင်း"],["ナースコール","ナースコール","သူနာပြု ခေါ်ခလုတ်"],["不眠","ふみん","အိပ်မပျော်ခြင်း"],["呼吸","こきゅう","အသက်ရှူခြင်း"],["足元","あしもと","ခြေရင်း"]]],
hand:["📋 申し送りの 場面",[["申し送り","もうしおくり","တာဝန်လွှဲ အစီရင်ခံခြင်း"],["記録","きろく","မှတ်တမ်း"],["引き継ぎ","ひきつぎ","တာဝန် လွှဲယူခြင်း"],["情報共有","じょうほうきょうゆう","သတင်း မျှဝေခြင်း"],["様子","ようす","အခြေအနေ"]]],
cup:["🥤 水分の 場面",[["脱水","だっすい","ရေဓာတ် ခန်းခြောက်ခြင်း"],["水分量","すいぶんりょう","ရေ ပမာဏ"],["こまめに","こまめに","မကြာခဏ"],["熱中症","ねっちゅうしょう","အပူလျှပ်ခြင်း"],["尿の色","にょうのいろ","ဆီး၏ အရောင်"]]]
};
const ALL=[];Object.entries(V).forEach(([k,[t,ws]])=>ws.forEach(w=>{if(!ALL.find(a=>a[0]===w[0]))ALL.push([...w,k])}));
const LS=k=>{try{return JSON.parse(localStorage.getItem(k))||{}}catch(e){return{}}};
let LW=LS("carelife-words");const save=()=>{try{localStorage.setItem("carelife-words",JSON.stringify(LW))}catch(e){}};
const mmOn=()=>{try{return JSON.parse(localStorage.getItem("carelife-mm"))!==false}catch(e){return true}};
const css=document.createElement("style");css.textContent=`
.wc{background:#fff;border-radius:18px;padding:12px 14px;margin:8px 0;display:flex;align-items:center;gap:12px;text-align:left;box-shadow:0 2px 8px #0000000f;animation:wcin .4s both}
.wc:nth-child(2){animation-delay:.12s}.wc:nth-child(3){animation-delay:.24s}
@keyframes wcin{from{opacity:0;transform:translateY(14px)}}
.wc .wj{flex:1}.wc ruby{font-size:24px;font-weight:900}.wc rt{font-size:11px;color:#2fb39a;font-weight:800}
.wc .wm{font-size:13px;color:#7a6a5a;margin-top:2px}.wc .new{font-size:10px;background:#ff7aa2;color:#fff;border-radius:8px;padding:1px 6px;margin-left:6px;vertical-align:middle}
.wc button{border:0;background:#e3f6f0;border-radius:50%;width:44px;height:44px;font-size:20px;flex:none}
.wtab{display:flex;gap:6px;overflow-x:auto;padding:4px 0 8px}.wtab button{flex:none;border:0;border-radius:14px;padding:7px 11px;background:#fff;font-weight:800;font-size:12px}
.wtab button.on{background:#2fb39a;color:#fff}.wlist{max-height:52vh;overflow-y:auto;margin:0 -4px;padding:0 4px}
.wc.got{border:2px solid #2fb39a}.wbar{height:10px;background:#eee3d6;border-radius:6px;overflow:hidden;margin:6px 0}.wbar i{display:block;height:100%;background:#2fb39a}`;
document.head.appendChild(css);
const card=(w,i)=>`<div class="wc${LW[w[0]]?" got":""}"><div class="wj"><ruby>${w[0]}<rt>${w[1]}</rt></ruby>${LW[w[0]]?" ✅":`<span class="new">NEW</span>`}${mmOn()?`<div class="wm">${w[2]}</div>`:""}</div><button data-say="${w[1]}">🔊</button></div>`;
const hookSay=()=>document.querySelectorAll("[data-say]").forEach(b=>b.onclick=()=>say(b.dataset.say,true));
function kindOf(ev){const K=window.CL_KIND;const k=K&&K.get(ev);return k&&V[k[0]]?k[0]:null}
// 場面のあとに ことばカード
const _done=window.done;
window.done=function(){try{if(!S||!S.day){_done();return}const ev=S.day[S.i],k=kindOf(ev);
 if(!k||S.wshow===S.i){_done();return}S.wshow=S.i;
 const ws=V[k][1].slice().sort((a,b)=>(LW[a[0]]?1:0)-(LW[b[0]]?1:0)||Math.random()-.5).slice(0,3);
 center(`<div style="font-size:40px">📚</div><h1 style="margin:4px 0">この場面の ことば</h1><p style="margin:0;font-weight:800;color:#8a7f72">${V[k][0]}</p><div>${ws.map(card).join("")}</div>
 <p style="font-size:12px;color:#8a7f72">🔊 を おして 声に 出して 言ってみよう</p><button class="btn" id="wok" style="background:#2fb39a;box-shadow:0 5px 0 #1f8a76">✅ 覚えた！ つぎへ</button>`);
 hookSay();say(ws.map(w=>w[1]).join("、"));
 $("#wok").onclick=()=>{ws.forEach(w=>LW[w[0]]=(LW[w[0]]||0)+1);save();_done()};}catch(e){_done()}};
// ことばずかん
let tab="all";
window.wordBook=function(){const got=ALL.filter(w=>LW[w[0]]).length;
 const list=tab==="all"?ALL:ALL.filter(w=>w[3]===tab);
 center(`<div style="font-size:44px">📚</div><h1 style="margin:2px 0">介護の ことばずかん</h1>
 <p style="margin:0;font-weight:800">覚えた ことば ${got} / ${ALL.length}</p><div class="wbar"><i style="width:${got/ALL.length*100}%"></i></div>
 <div class="wtab"><button data-t="all" class="${tab==="all"?"on":""}">ぜんぶ</button>${Object.entries(V).map(([k,v])=>`<button data-t="${k}" class="${tab===k?"on":""}">${v[0].split(" ")[0]} ${v[0].split(" ")[1].replace("の","")}</button>`).join("")}</div>
 <div class="wlist">${list.map(card).join("")}</div>
 <button class="btn" id="wq" style="background:#ff7aa2;box-shadow:0 5px 0 #d9567f">🎯 ことばクイズ（10問）</button><button class="btn sub" id="wb">🏠 もどる</button>`);
 hookSay();document.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{tab=b.dataset.t;wordBook()});
 $("#wq").onclick=()=>wordQuiz();$("#wb").onclick=()=>titleScr()};
// ことばクイズ
let WQ=null;
window.wordQuiz=function(){const pool=ALL.slice().sort(()=>Math.random()-.5).slice(0,10);WQ={pool,i:0,ok:0};wqShow()};
function wqShow(){const w=WQ.pool[WQ.i],type=WQ.i%3;// 0:ことば→意味 1:音→ことば 2:意味→ことば
 const others=ALL.filter(a=>a[0]!==w[0]).sort(()=>Math.random()-.5).slice(0,3);const ch=[w,...others].sort(()=>Math.random()-.5);
 const q=type===0?`<ruby style="font-size:34px;font-weight:900">${w[0]}<rt style="font-size:13px">${w[1]}</rt></ruby><p>この ことばの 意味は？</p>`
  :type===1?`<button class="btn" id="wqs" style="background:#3b5bdb;box-shadow:0 5px 0 #2a44a8;font-size:22px">🔊 きいて えらぶ</button><p>聞こえた ことばは どれ？</p>`
  :`<div style="font-size:20px;font-weight:900;background:#fff;border-radius:14px;padding:12px">${w[2]}</div><p>日本語で どれ？</p>`;
 center(`<div class="qhud"><span>📚 ${WQ.i+1}/10</span><span>⭕ ${WQ.ok}</span></div>${q}
 <div>${ch.map((c,j)=>`<button class="ch" data-w="${j}"><span class="ab">${j+1}</span><span>${type===0?c[2]:c[0]}</span></button>`).join("")}</div><div id="wqx"></div>`);
 const sp=$("#wqs");if(sp){sp.onclick=()=>say(w[1],true);say(w[1],true)}
 document.querySelectorAll("[data-w]").forEach(b=>b.onclick=()=>{const c=ch[+b.dataset.w],ok=c===w;
  document.querySelectorAll("[data-w]").forEach(x=>{x.disabled=true;if(ch[+x.dataset.w]===w)x.classList.add("ok");else if(x===b)x.classList.add("ng")});
  if(ok){WQ.ok++;LW[w[0]]=(LW[w[0]]||0)+1;save()}say(ok?"せいかい":w[1],true);
  $("#wqx").innerHTML=`${card(w)}<button class="btn" id="wqn" style="background:#2fb39a;box-shadow:0 5px 0 #1f8a76">${WQ.i<9?"つぎへ ▶":"けっか を見る"}</button>`;hookSay();
  $("#wqn").onclick=()=>{WQ.i++;if(WQ.i<10)wqShow();else wqEnd()}})}
function wqEnd(){const s=WQ.ok;say(s>=8?"すごい":"がんばろう",true);
 center(`<div style="font-size:60px">${s>=8?"🏆":s>=5?"🌟":"💪"}</div><h1>${s} / 10 正解</h1><p style="font-weight:800">${s>=8?"すばらしい！ 介護の ことば マスター！":s>=5?"いいね！ もう少し！":"ずかんで 練習しよう！"}</p>
 <button class="btn" id="wr" style="background:#ff7aa2;box-shadow:0 5px 0 #d9567f">もう一回</button><button class="btn sub" id="wbk">📚 ずかんへ</button>`);
 $("#wr").onclick=wordQuiz;$("#wbk").onclick=wordBook}
window.CL_WORDS=ALL;
})();
