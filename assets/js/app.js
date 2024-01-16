const url = 'https://moviestack.onrender.com/api/movies'
const apiKey = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"

const init = {
    headers: {
        "X-API-KEY": apiKey
    }
}

fetch (url, init)
    .then( response => response.json() )
    .then( moviesData => {
        const saveMovie = moviesData.movies.filter(moviesData => moviesData)
        function card(movie){
            let arrayFavorite = JSON.parse(localStorage.getItem('favoritos')) || []
            const pintadasFavoritos = arrayFavorite.includes(movie.id)
            let fondo = ""
            if(pintadasFavoritos){
                fondo = "bg-red-500"
            }else{
                fondo = "bg-gray-500"
            }
            return `<article class="flex flex-col justify-between border  items-center w-72 h-[470px] rounded-2xl bg-white shadow-lg shadow-[#d2ccff]/50 hover:w-80 hover:h-[500px]">
            <img class="rounded-t-2xl" src="https://moviestack.onrender.com/static/${movie.image}" alt="${movie.title}">
            <h2 class="px-5 font-bold text-xl text-black">${movie.title}</h2>
            <h4 class="px-5 py-2 italic text-black">${movie.tagline}</h4>
            <div class="flex flex-col items-center px-5">
                <div class="">
                    <p class="text-black text-black h-[110px] overflow-y-auto">${movie.overview}</p>
                </div>
                
                <div class="flex gap-2">
                    <a href="./infomovies.html?id=${movie.id}" class="border border-black w-[100px] shadow-lg shadow-black/50 text-center text-black rounded-xl bg-white my-5"> See More </a>
                    <button data-id="${movie.id}" class="w-[100px] font-bold ${fondo} shadow-lg shadow-black/50 text-center text-white rounded-xl my-5"> Favorites </button>
                </div>
                </article>
            </div>
            `
        
        }
        function dataCard(movies){

            const returnContenido = document.getElementById("card")
        
            let returnCartas = ""
            for (const movi of movies) {
                returnCartas += card(movi)
            }
        
            returnContenido.innerHTML = returnCartas
        
        }
        dataCard(saveMovie)
        
        const $btnFavorite = document.getElementById('card')
        let arrayFavorite = JSON.parse(localStorage.getItem('favoritos')) || []
        $btnFavorite.addEventListener('click', (e) =>{
            
            let addFavorite = e.target.dataset.id
            console.log(addFavorite)
            if(addFavorite){
                const index = arrayFavorite.findIndex(element => element === addFavorite)
                if(index != -1){
                    arrayFavorite.splice(index, 1)
                    e.target.classList.remove("bg-red-500")
                    e.target.classList.add("bg-gray-500")
                    localStorage.setItem('favoritos', JSON.stringify(arrayFavorite))
                }else{
                    arrayFavorite.push(addFavorite)
                    e.target.classList.remove("bg-gray-500")
                    e.target.classList.add("bg-red-500")
                    localStorage.setItem('favoritos', JSON.stringify(arrayFavorite))
                }
            console.log(arrayFavorite)  
            }
               
        })
    
        const $selected = document.getElementById('selected')
        const $inputBusqueda = document.getElementById('input-busqueda')
        


        function filterMoviesByGenres (dataMovies, genreData){
        if(genreData == "All"){
            return dataMovies
        }if(genreData){
            let movieFilterByGenres =  dataMovies.filter(movie => movie.genres.includes(genreData))
            return movieFilterByGenres
        }
        }

        function filterMovies(moviesData, title){
            if(title == ""){
                return moviesData
            }if(title){
                let filtradoNombre = moviesData.filter(movi => movi.title.toLowerCase().includes(title.toLowerCase()))
                return filtradoNombre
            }
        }

        $selected.addEventListener('change', (e) => {

            let filtradoNombre = filterMovies(saveMovie, $inputBusqueda.value)
            let filtradoPorGenero = filterMoviesByGenres(filtradoNombre, $selected.value)

            if(filtradoPorGenero.length != 0){
                dataCard(filtradoPorGenero)
            }else{
                const returnContenido = document.getElementById("card")
                returnContenido.innerHTML = "<p>Your movie was not found</p>"
            }
        })



        $inputBusqueda.addEventListener("input", (e) => {

            let filtradoNombre = filterMovies(saveMovie, $inputBusqueda.value)
            let filtradoPorGenero = filterMoviesByGenres(filtradoNombre, $selected.value)

            if(filtradoPorGenero.length != 0){
                dataCard(filtradoPorGenero)
            }else{
                const returnContenido = document.getElementById("card")
                returnContenido.innerHTML = "<p>No se encontro la pelicula</p>"
            }
            
        })
    } )
.catch( err => console.log( err ))








