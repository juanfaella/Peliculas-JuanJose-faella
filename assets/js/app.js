
function card(data){
    return `<article class="flex flex-col items-center w-72 rounded-2xl bg-gray-500">
    <img class="rounded-t-2xl" src=${data.image} alt="${data.title}">
    <h2 class="px-5">${data.title}</h2>
    <h4 class="px-5">${data.tagline}</h4>
    <div class="flex flex-col items-center px-5">
        <p>${data.overview}</p>
        <a href="./infomovies.html?id=${data.id}" class="w-[100px] text-center bg-black my-5"> Ver Mas </a>
        </article>
    </div>
    `
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

const $selected = document.getElementById('selected')
const $inputBusqueda = document.getElementById('input-busqueda')

$selected.addEventListener('change', (e) => {
    const selectedValue = $selected.value
    const valueArray = []
    for (const movi of movies) {
        if (movi.genres.includes(selectedValue)){
            valueArray.push(movi)
        }else if (selectedValue == "All"){
            return dataCard(movies)
        }
    }
    console.log(valueArray)
    dataCard(valueArray)
})

function filterMovies(moviesData, title){
    return moviesData.filter(movi => movi.title.toLowerCase().includes(title.toLowerCase()))
}

$inputBusqueda.addEventListener("input", (e) => {
    dataCard(filterMovies(movies, $inputBusqueda.value))
}) 

console.log(dataCard)