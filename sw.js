const CACHE="win-v41";
const FILES=["./", "index.html", "og.png", "icon-180.png", "icon-512.png", "kaigo/", "kaigo/index.html", "kaigo/icon-180.png", "kaigo/icon-512.png", "kaigo/manifest.json", "baby/", "baby/index.html", "baby/icon-180.png", "baby/icon-512.png", "baby/manifest.json", "story/", "story/index.html", "story/icon-180.png", "story/icon-512.png", "story/manifest.json", "drop/", "drop/index.html", "drop/icon-180.png", "drop/icon-512.png", "drop/manifest.json", "puzzle/", "puzzle/index.html", "puzzle/icon-180.png", "puzzle/icon-512.png", "puzzle/manifest.json", "exam/", "exam/index.html", "exam/icon-180.png", "exam/icon-512.png", "exam/manifest.json", "work/", "work/index.html", "work/icon-180.png", "work/icon-512.png", "work/manifest.json", "jobs/", "jobs/index.html", "jobs/icon-180.png", "jobs/icon-512.png", "jobs/manifest.json", "photo/", "photo/index.html", "photo/icon-180.png", "photo/icon-512.png", "photo/manifest.json", "run/", "run/index.html", "run/icon-180.png", "run/icon-512.png", "run/manifest.json", "mm/", "mm/index.html", "mm/icon-180.png", "mm/icon-512.png", "mm/manifest.json", "mm/words1.js", "mm/words2.js", "mm/words3.js", "mm/words4.js", "mm/en.js", "shift/", "shift/index.html", "shift/icon-180.png", "shift/icon-512.png", "shift/manifest.json", "day/", "day/index.html", "day/icon-180.png", "day/icon-512.png", "day/manifest.json", "album/", "album/index.html", "album/icon-180.png", "album/icon-512.png", "album/manifest.json", "memo/", "memo/index.html", "memo/icon-180.png", "memo/icon-512.png", "memo/manifest.json", "myshift/", "myshift/index.html", "myshift/icon-180.png", "myshift/icon-512.png", "myshift/manifest.json"].map(f=>"/win/"+f.replace(/^\.\//,""));
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(caches.open(CACHE).then(async c=>{
    const hit=await c.match(e.request);
    const net=fetch(e.request).then(r=>{if(r&&(r.ok||r.type==="opaque"))c.put(e.request,r.clone());return r}).catch(()=>hit);
    return hit||net;
  }));
});
