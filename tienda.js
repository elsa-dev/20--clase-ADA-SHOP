const inputNombre = document.querySelector('.filtro')
console.log(inputNombre)
const botonLimpiar = document.getElementById(`button`)
console.log(botonLimpiar)
const checkboxes = document.querySelectorAll(`.review-filter`)
console.log(checkboxes)
const filtroRating = document.getElementsByClassName(`review-filter`)
console.log(filtroRating)
const tarjetas = document.getElementsByClassName(`producto`)
console.log(tarjetas)



for (let checkbox of filtroRating) {
    checkbox.onclick = () => {
        filtrarTarjetas();
    };
}

const haycheckboxSeleccionado = () => {
    for (let checkbox of filtroRating) {
        if (checkbox.checked) {
            return true
        }
    }
};

const coincidenCheckboxYtarjeta = (tarjeta) => {
    const rating= tarjeta.dataset.rating;
    for(let checkbox of filtroRating){
        if(checkbox.value === rating && checkbox.checked){
            return true;
        }
    }
};

const filtrarTarjetas = () => {
    for(let tarjeta of tarjetas){
        tarjeta.classList.add(`hidden`);
        if(haycheckboxSeleccionado()) {
            if(coincidenCheckboxYtarjeta(tarjeta)) {
                tarjeta.classList.remove(`hidden`);
            }
        }
        else{ tarjeta.classList.remove(`hidden`)}
    }
};


// BOTON DE LIMPIAR INPUT Y CHECKBOXXES 

botonLimpiar.onclick = () => {
    limpiarSeleccionesUsuario()
}

limpiarSeleccionesUsuario = () => {
    inputNombre.value = ""
    for (let checkbox of checkboxes) {
        checkbox.checked = false
    }
}


// OCULTAR Y MOSTRAR MODAL CARRITO CON OVERLAY

const botonAbrirMenu = document.getElementById("abrir-menu")
const botonCerrarMenu = document.getElementById("cerrar-menu")
const menu = document.getElementById("menu")
const overlay = document.getElementById("overlay")

botonAbrirMenu.onclick = () => {
    overlay.classList.remove("ocultar")
}

botonCerrarMenu.onclick = () => {
    overlay.classList.add("ocultar")
}