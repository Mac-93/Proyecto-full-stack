document.querySelector('form')
    .addEventListener('submit', a => {
        a.preventDefault()
        const datos = Object.fromEntries(
            new FormData (a.target)
            )
        // alert (JSON.stringify(datos))
    })