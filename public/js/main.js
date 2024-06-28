
console.log("hola perro");

const boton = document.createElement('button')
boton.textContent = "mi boton"
document.body.append(boton)
boton.addEventListener('click', () => {
  fetch('/user')
    .then(response => response.json())
    .then(user => console.log(user))
})

