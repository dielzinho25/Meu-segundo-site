setInterval(()=>{
 if(accessToken){
  salvarDrive();
 }
},10000);
self.addEventListener("install", e => {
 self.skipWaiting();
});

self.addEventListener("activate", e => {
 console.log("SW ativo");
});
