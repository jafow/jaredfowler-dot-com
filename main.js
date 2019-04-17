const el = document.getElementById('elephant')
el.addEventListener('click', toggleStroll)

function toggleStroll (evt) {
  el.classList.toggle('stroll')
}
