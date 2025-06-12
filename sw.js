const staticCacheName = 'static-cache'
const assets = [
  './',
  './index.html',
  './html5.png',
  './css/style.css',
  './js/app.js',
  './img/profile-picture.png',
  './img/wallpaper.jpg',
  './img/icons/facebook-icon.png',
  './img/icons/pinterest-icon.png',
  './img/icons/twitter-icon.png',
  './img/photos/beach.jpg',
  './img/photos/countryside.jpg',
  './img/photos/forest.jpg',
  './img/photos/mountain.jpg',
  './img/photos/ocean.jpg',
  './img/photos/river.jpg',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js'
]

self.addEventListener('install', e => {
  console.log('Service worker telah terinstall.')
  e.waitUntil(
    caches.open(staticCacheName)
      .then(cache => {
        console.log('Caching shell assets.')
        cache.addAll(assets)
      })
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cacheRes => {
      return cacheRes || fetch(e.request)
    })
  )
})