// Guardar datos de usuario en formato JSON

document.querySelector('form')
    .addEventListener('submit', e => {
        e.preventDefault()
        const datos = Object.fromEntries(
            new FormData (e.target)
            )
        alert (JSON.stringify(datos))
    })