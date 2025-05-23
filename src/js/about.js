const btnAbout = document.querySelector('.desc-add')
const fullText = document.querySelector('.full-text')

btnAbout.addEventListener('click', () => {
  btnAbout.classList.toggle('visible')
  fullText.classList.toggle('visible')
})
