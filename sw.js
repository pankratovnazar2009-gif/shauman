const C='shauman-v9';
self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET'||new URL(q.url).origin!==location.origin)return;
  e.respondWith(fetch(q).then(r=>{if(r&&r.status===200){const cp=r.clone();caches.open(C).then(c=>c.put(q,cp));}return r;}).catch(()=>caches.match(q).then(h=>h||caches.match('./index.html'))));});
