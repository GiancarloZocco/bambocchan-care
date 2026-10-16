/* === SERVICE WORKER DIDATTICO === */
// Intercetta eventi di base per abilitare i criteri PWA del browser

self.addEventListener('install', function (event) {
    console.log('Service Worker installato con successo!');
    self.skipWaiting();
});

self.addEventListener('activate', function (event) {
    console.log('Service Worker attivato!');
});

self.addEventListener('fetch', function (event) {
    // Gestione standard delle richieste di rete
    event.respondWith(fetch(event.request).catch(function () {
        // Eventuale fallback offline futuro
    }));
});