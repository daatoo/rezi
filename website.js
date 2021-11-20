var button = document.getElementsByClassName('rezi')[0]
var dam = document.getElementsByClassName('dam')[0]

button.addEventListener('click', () => {
    dam.classList.toggle('active')
})