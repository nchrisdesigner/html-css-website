
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar__mobile-menu-toggle')
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items')
  const modal = document.querySelector('#modal')
  const videoBtn = document.querySelector('.preview__video-button')
  const closeBtn = document.querySelector('.modal__close-button')

  const videoPlayer = document.querySelector('#videoplayer')

  toggleButton.addEventListener('click',
    function () {
      mobileMenu.classList.toggle('active')
    }
  )


  videoBtn.addEventListener('click', function () {
    // Show Modal
    modal.style.display = 'block';
    // Video Url
    videoPlayer.src = 'https://www.youtube.com/embed/LQy3shcGL9s'

  })

  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    videoPlayer.src = ''
  })

  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      videoPlayer.src = ''
    }
  })

})
// Navigation background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar')
  if (this.window.scrollY > 100) {
    navbar.classList.add('navbar--scroll')
  }
  else {
    navbar.classList.remove('navbar--scroll')
  }
})