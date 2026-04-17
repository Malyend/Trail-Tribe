

self.addEventListener('install', (event) => {
    self.skipwaiting();
    event.waitUntil(
        caches.open('Trail-v1').then((cache) => {
            return cache.addAll([
                './',
                './index.html',
                './Contact.html',
                './Charity.html',
                './Videos.html',
                './serviceWorker.js',
                './Trail.js',
                './tribecss.css'
            ])
        })
    )
})

