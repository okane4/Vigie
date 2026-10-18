const CACHE='vigie-shell-v2';
const ASSETS=['./','./index.html','./manifest.json','./icon.svg','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const u=new URL(e.request.url);
 const store=resp=>{const c=resp.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return resp};
 if(u.origin===location.origin){e.respondWith(fetch(e.request).then(store).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))}
 else if(u.hostname==='unpkg.com'){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(store)))}
});
