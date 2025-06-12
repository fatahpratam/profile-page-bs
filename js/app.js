if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => {
      console.log('Service worker berhasil terdaftar.')
    })
    .catch(() => {
      console.log('Service worker gagal terdaftar.')
    })
}

checkConnection()
function checkConnection() {
  fetch('/README.md')
    .catch(err => {
      const noticeElement = document.createElement('div');
      noticeElement.className = 'text-center mb-3'
      noticeElement.innerHTML = 'Sepertinya, Anda tidak memiliki koneksi internet. Coba <span class="text-decoration-underline text-primary cursor" id = "reload" > buka ulang</span > halaman ini.'

      const showcaseElement = document.querySelector('#showcase')
      showcaseElement.prepend(noticeElement)

      document.querySelector('#reload').addEventListener('click', () => {
        location.reload()
      })
    })
}