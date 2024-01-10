
function card(data){
    return `<article class="flex flex-col w-72 rounded-2xl bg-gray-500">
    <img class="rounded-t-2xl" src=${data.image} alt="${data.title}">
    <h2>${data.title}</h2>
    <h4>${data.tagline}</h4>
    <p>${data.overview}</p>
    </article>`
}
function dataCard(movies){
    const returnContenido = document.getElementById("card")
    if (returnContenido){
    let returnCartas = ""
    for (const movi of movies) {
        returnCartas += card(movi)
    }
    returnContenido.innerHTML = returnCartas
    }
}

dataCard(movies)

const $lista = document.getElementById('lista-movi')
const $inputbusqueda = document.getElementById('input-busqueda')
const $selectedBoxes = document.getElementsById('selected')
function verLista(listaMovies, elemto){
    elemto.innerHTML = ""

    const fragment = document.createDocumentFragment()
    for (let movi of listaMovies){
        const liMovi = crearLi(movi)
        fragment.appendChild(liMovi)
    }
    elemento.appendChild(fragment)
}

function crearLi(movies){
    const li = document.createElement('li')
    li.innerHTML = `<a href="./movies.html?id=${movi.name}&modulo=${movi.tagline}"> ${movi.name} </a>`
    return li
}

const modulos = obtenerModulos (movies)

verLista(movies, $lista)

$inputbusqueda.addEventListener("input", () => {
    const moviesFiltradas = filtrarMoviesPorName(movies, $inputbusqueda.value)
    const moviesFiltradasPorGeneres = filtrarMoviesPorGeneres(moviesFiltradas)
    verLista(moviesFiltradasPorGeneres, $lista)
})

$selectedBoxes.addEventListener('change', () => {
    const moviesFiltradas = filtrarMoviesPorName(movies, $selectedBoxes.value)
    const moviesFiltradasPorGenres = filtrarMoviesPorGeneres(moviesFiltradas)
    verLista(moviesFiltradasPorGenres, $lista)
})

function filtrarMoviesPorName (listaMovies, nombreIngresado){
    return listaMovies.filter(movi => moveBy.name.toLowerCase().includes(nombreIngresado.toLowerCase()))

}
function filtrarMoviesPorGeneres(listaMovies){
    const seleccionados = Array.from(document.querySelectorAll('input[type="checkbox"]:cheked'))
        .map(input => input.value)
    if (seleccionados.length == 0){
        return listaMovies
    }
    const moviesFiltradas = listaMovies.filter(mentor => seleccionados.includes(movi.genres))
    return moviesFiltradas
}

function obtenerModulos(listaMovies){
    const genres = listaMovies
    .map(movies => mentor.modulo)
    .filter((genres, indice, array) => array.indexOF(genres) == indice)

}

function crearCheckbox(genres){
    return ` <label> ${genres}
    <input type="checkbox" value="${genres}" name="modulo" >
</label>`
}