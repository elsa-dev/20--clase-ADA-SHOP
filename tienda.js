const filtroBusqueda = document.getElementById('filtro-busqueda');
const cards = document.getElementsByClassName("producto");
const botonLimpiar = document.getElementById('button');
const checkboxes = document.querySelectorAll(`.limpiar`);
const filtroRating = document.getElementsByClassName('review-filter');
const filtroCategoria = document.getElementsByClassName("categoria")

const c = console.log


// FILTROS FILTROS FILTROS 
// FILTROS FILTROS FILTROS 

const compararInputConTarjeta = (card) => {
    if (card.dataset.nombre.includes(filtroBusqueda.value.toLowerCase())) {
        return true
    }
    else {
        return false
    }
}

const compararcheckboxCategoriaConTarjeta = (card) => {
    for (let checkbox of filtroCategoria) {
        if (checkbox.checked) {
            if (checkbox.value === card.dataset.categoria) {
                return true
            }
        }
    }
    return false
}

const compararcheckboxRatingConTarjeta = (card) => {
    for (let checkbox of filtroRating) {
        if (checkbox.checked) {
            if (checkbox.value === card.dataset.rating) {
                return true
            }
        }
    }
    return false
}

const hayAlgoEscritoEnElInput = () => {
    if (filtroBusqueda.value) {
        return true
    }
    else {
        return false
    }
}

const hayAlgunCheckboxCategoriaChequeado = () => {
    for (let checkbox of filtroCategoria) {
        if (checkbox.checked) {
            return true
        }
    }
    return false
}

const hayAlgunCheckboxRatingChequeado = () => {
    for (let checkbox of filtroRating) {
        if (checkbox.checked) {
            return true
        }
    }
    return false
}

const validarInput = (card) => {
    if (hayAlgoEscritoEnElInput()) {
        if (compararInputConTarjeta(card)) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return true
    }
}

const validarCheckboxesCategoria = (card) => {
    if (hayAlgunCheckboxCategoriaChequeado()) {
        if (compararcheckboxCategoriaConTarjeta(card)) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return true
    }
}

const validarCheckboxesRating = (card) => {
    if (hayAlgunCheckboxRatingChequeado()) {
        if (compararcheckboxRatingConTarjeta(card)) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return true
    }
}

const pasaFiltros = (card) => {
    if (validarInput(card) && validarCheckboxesCategoria(card) && validarCheckboxesRating(card)) {
        return true
    } else {
        return false
    }
}

const ocultarTarjeta = (card) => {
    return card.classList.add("hidden")
}

const mostrarTarjeta = (card) => {
    return card.classList.remove("hidden")
}

const filtrarTarjetas = () => {
    for (let card of cards) {
        if (pasaFiltros(card)) {
            mostrarTarjeta(card)
        }
        else {
            ocultarTarjeta(card)
        }
    }
}

filtroBusqueda.oninput = () => {
    filtrarTarjetas()
}

for (let checkbox of filtroRating) {
    checkbox.oninput = () => {
        filtrarTarjetas()
    }
}

for (let checkbox of filtroCategoria) {
    checkbox.oninput = () => {
        filtrarTarjetas()
    }
}


// BOTON DE LIMPIAR INPUT Y CHECKBOXXES 
// BOTON DE LIMPIAR INPUT Y CHECKBOXXES 

botonLimpiar.onclick = () => {
    limpiarSeleccionesUsuario()
}

limpiarSeleccionesUsuario = () => {
    filtroBusqueda.value = ""
    for (let checkbox of checkboxes) {
        checkbox.checked = false
    }
    for( card of cards) {
        mostrarTarjeta(card)
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
// GRILLA Y LISTA DE PRODUCTOS

const grilla = document.getElementById("grilla")
const lista = document.getElementById("lista")
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
// SELECCIONAR ESPECIFICACIONES DE TARJETAS ya esta cards
const descripciones = document.getElementsByClassName('especificaciones')
const descripcionProducto = document.getElementById('descripcion-producto')
const textos = document.getElementsByClassName('descripcion-producto')

c(textos)

lista.onclick = () => {
    contenedorTarjetas.classList.add("tarjetas-productos-column")
    // cada card horizontal
    for(card of cards) {
       card.classList.add('foto-izq') 
    }
    for(let descripcion of descripciones) {
      descripcion.classList.add("producto-horizontal")  
    }
    for(let texto of textos) {
        texto.classList.remove('hidden')
    }
    
    
    
}
grilla.onclick = () => {
    contenedorTarjetas.classList.add("tarjetas-productos")
    contenedorTarjetas.classList.remove("tarjetas-productos-column")
    for(card of cards) {
        card.classList.remove('foto-izq') 
     }
    for(let descripcion of descripciones) {
       descripcion.classList.remove("producto-horizontal") 
    }
    for(let texto of textos) {
        texto.classList.add('hidden')
    }
    
}

// CHECKOUT CHECKOUT CHECKOUT 
// CHECKOUT CHECKOUT CHECKOUT 

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

const subtotal = 5596

mostrarSubtotal.textContent = subtotal
mostrarTotal.textContent = subtotal

const obtenerGastoEnvio = (subtotal) => {
    return subtotal + 50
}

const obtenerRecargo = (subtotal) => {
    let recargo = subtotal * 0.1
    return subtotal + recargo
}

const obtenerDescuento = (subtotal) => {
    let descuento = subtotal * 0.1
    return subtotal - descuento
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
    mostrarRecargo.textContent = obtenerRecargo(subtotal) - subtotal
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
    if (checkboxDescuento.checked) {
        descuento = obtenerDescuento(subtotal) - subtotal
    }
    if (radioCredito.checked) {
        recargo = obtenerRecargo(subtotal) - subtotal
    }
    else {
        parrafoRecargo.classList.add('hidden')
    }
    if (checkboxEnvio.checked) {
        gastosDeEnvio = obtenerGastoEnvio(subtotal) - subtotal
    }
    return subtotal + descuento + recargo + gastosDeEnvio
}