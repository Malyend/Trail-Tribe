
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('Trail-v1').then((cache) => {
            return cache.addAll([
                './',

                './index.html',
                './Contact.html',
                './Charity.html',
                './Videos.html',

                './Trail.js',
                './trail-charity.js',
                './trail-Contact.js',
                './trail-merch.js',
                './trail.video.js',

                './tribecss.css',

                './Videos/',
                './Images/',
                './fonts/'
            ])
        })
    )
})

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response ||
            fetch(event.request);
        })
    )
})

