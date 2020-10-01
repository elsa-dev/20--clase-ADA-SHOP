const filtroNombre = document.getElementById('filtro');
const tarjetas = document.getElementsByClassName("producto");
const botonLimpiar = document.getElementById('button');
const checkboxes = document.querySelectorAll(`.review-filter`);
const filtroRating = document.getElementsByClassName('review-filter');



// filtroNombre.oninput = () => {
//     for(let tarjeta of tarjetas) {
//         const titulo = tarjeta.dataset.nombre
//         const busqueda = filtroNombre.value.toLowerCase()
//         console.log('este es el titulo de la tarjeta', titulo)
//         console.log('esto es lo que busca el usuario', busqueda)
//         if(titulo.includes(busqueda)) {
//             tarjeta.classList.remove('hidden');
//         }
//         else {
//             tarjeta.classList.add('hidden');
//         }
//     }
// };




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
    filtroNombre.value = ""
    for (let checkbox of checkboxes) {
        checkbox.checked = false
    }
}


// OCULTAR Y MOSTRAR MODAL CARRITO CON OVERLAY
// OCULTAR Y MOSTRAR MODAL CARRITO CON OVERLAY

const botonAbrirMenu = document.getElementById("abrir-menu")
const botonCerrarMenu = document.getElementById("cerrar-menu")
const menu = document.getElementById("menu")
const overlay = document.getElementById("overlay")

botonAbrirMenu.onclick = () => {
    overlay.classList.remove("ocultar")
    document.body.classList.add("no-scroll")
    menu.classList.add("mostrar-menu")
}

botonCerrarMenu.onclick = () => {
    overlay.classList.add("ocultar")
    document.body.classList.remove("no-scroll")
    menu.classList.remove("mostrar-menu")

}
// OCULTAR Y MOSTRAR MODAL CARRITO CON OVERLAY
// OCULTAR Y MOSTRAR MODAL CARRITO CON OVERLAY

const botonAbrirCheckout = document.getElementById("abrir-modal-checkout")
const botonCerrarCheckout = document.getElementById("cerrar-checkout")
// const menu = document.getElementById("menu")
const overlayCheckout = document.getElementById("overlay2")

botonAbrirCheckout.onclick = () => {
    overlay2.classList.remove("ocultar")
    // document.body.classList.add("no-scroll") no era necesario
}

botonCerrarCheckout.onclick = () => {
    overlay2.classList.add("ocultar")
}

// GRILLA Y LISTA DE PRODUCTOS

const grilla = document.getElementById("grilla")
console.log(grilla)
const lista = document.getElementById("lista")
console.log(lista)
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
console.log(contenedorTarjetas)


lista.onclick = () => {
    contenedorTarjetas.classList.add("tarjetas-productos-column")
}
grilla.onclick = () => {
    contenedorTarjetas.classList.add("tarjetas-productos")
    contenedorTarjetas.classList.remove("tarjetas-productos-column")
}


const mostrarSubtotal = document.querySelector("#subtotal")
const mostrarDescuento = document.querySelector("#descuento")
const mostrarEnvio = document.querySelector("#envio")
const mostrarRecargo = document.querySelector("#recargo")
const mostrarTotal = document.querySelector("#total")

const radioEfectivo = document.querySelector("#input-efectivo")
const radioCredito = document.querySelector("#input-credito")
const checkboxEnvio = document.querySelector("#input-envio")
const checkboxDescuento = document.querySelector("#input-descuento")

const parrafoDescuento = document.querySelector(".descuento")
const parrafoEnvio = document.querySelector(".envio")
const parrafoRecargo = document.querySelector(".recargo")

const subtotal = 100

mostrarSubtotal.textContent = subtotal
mostrarTotal.textContent = subtotal

const obtenerGastoEnvio = (subtotal) => {
return subtotal +50
}

const obtenerRecargo = (subtotal) => {
    let recargo = subtotal * 0.1
    return  subtotal + recargo
}

const obtenerDescuento = (subtotal) => {
    let descuento = subtotal * 0.1
    return  subtotal - descuento
}


radioEfectivo.oninput = () => {
    mostrarSubtotal.textContent = subtotal
    mostrarTotal.textContent = obtenerTotal(subtotal)
}

checkboxDescuento.oninput = () => {
    parrafoDescuento.classList.toggle("hidden")
    mostrarDescuento.textContent = subtotal - obtenerDescuento(subtotal) 
    mostrarTotal.textContent = obtenerTotal(subtotal)
}

radioCredito.oninput = () => {
    parrafoRecargo.classList.remove("hidden")
    mostrarRecargo.textContent =  obtenerRecargo(subtotal) - subtotal
    mostrarTotal.textContent = obtenerTotal(subtotal)
}

checkboxEnvio.oninput = () => {
    parrafoEnvio.classList.toggle("hidden")
    mostrarEnvio.textContent = 50
    mostrarTotal.textContent = obtenerTotal(subtotal)
}



const obtenerTotal = (subtotal) => {
    let descuento = 0
    let recargo = 0
    let gastosDeEnvio = 0
    if(checkboxDescuento.checked) {
        descuento = obtenerDescuento(subtotal) - subtotal
    }
    if(radioCredito.checked) {
        recargo = obtenerRecargo(subtotal) - subtotal
    }
    else {
        parrafoRecargo.classList.add('hidden')
    }
    if(checkboxEnvio.checked) {
        gastosDeEnvio = obtenerGastoEnvio(subtotal) - subtotal
    }
    return subtotal + descuento + recargo + gastosDeEnvio

}