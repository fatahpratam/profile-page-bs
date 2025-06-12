// Nama dari cache-nya
const staticCacheName = 'static-cache'

// Daftar asset yang akan di-cache
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

// Menyimpan daftar asset sebelumnya ke dalam cache saat service worker berhasil terinstall.
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

// Mendengarkan event fetch sehingga dapat melakukan pencegatan jaringan. Jika request cocok dengan cache, maka akan mengembalikan data cache. Namun, jika tidak ada request yang cocok, maka diperbolehkan untuk melakukan fetching tersendiri.
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cacheRes => {
      return cacheRes || fetch(e.request)
    })
  )
})