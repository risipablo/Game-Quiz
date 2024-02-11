
const btnOscuro = document.querySelectorAll("#oscuro");
const modoLocalStorageKey = "modoOscuro";

function cambiarModo(){
    document.body.classList.toggle('dark');
    btnOscuro.forEach(btn => {
        btn.classList.toggle('active');
    })

    const modoActual = document.body.classList.contains('dark') ? 'oscuro' : 'claro';
    localStorage.setItem(modoLocalStorageKey, modoActual);
}

const Guardado = localStorage.getItem(modoLocalStorageKey);
    if (Guardado === 'oscuro') {
        document.body.classList.add('dark')
        btnOscuro.forEach(btn => {
            btn.classList.add ('active')
        })
    }

    btnOscuro.forEach(btn => {
        btn.addEventListener('click',cambiarModo);
    })