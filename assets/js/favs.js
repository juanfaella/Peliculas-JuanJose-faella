const $containerFavorites = document.getElementById("fav-movi")
const url = 'https://moviestack.onrender.com/api/movies'
const apiKey = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"

const init = {
    headers: {
        "X-API-KEY": apiKey
    }
}
fetch(url, init)
  .then(response => response.json())
  .then(moviesData => {
    let moviesFavoritesPaint = moviesData.movies
    function card(movie){
        let arrayFavorite = JSON.parse(localStorage.getItem('favoritos')) || []
        const pintadasFavoritos = arrayFavorite.includes(movie.id)
        let fondo = ""
        if(pintadasFavoritos){
            fondo = "bg-red-500"
        }else{
            fondo = "bg-gray-500"
        }
        if(pintadasFavoritos){
            return `<article class="flex flex-col justify-between items-center w-72 h-[470px] rounded-2xl bg-white shadow-lg shadow-[#d2ccff]/50">
            <img class="rounded-t-2xl" src="https://moviestack.onrender.com/static/${movie.image}" alt="${movie.title}">
            <h2 class="px-5 font-bold text-xl text-black">${movie.title}</h2>
            <h4 class="px-5 py-2 italic text-black">${movie.tagline}</h4>
            <div class="flex flex-col items-center px-5">
                <div class="">
                    <p class="text-black text-black h-[110px] overflow-y-auto">${movie.overview}</p>
                </div>
                
                <div class="flex gap-2">
                    <a href="./infomovies.html?id=${movie.id}" class="w-[100px] shadow-lg shadow-black/50 text-center text-black rounded-xl bg-white my-5"> See More </a>
                    <button data-id="${movie.id}" class="w-[100px] font-bold ${fondo} shadow-lg shadow-black/50 text-center text-white rounded-xl my-5"> Favorites </button>
                </div>
                </article>
            </div>
            `
        }else{
            return ""
        }
        
    }
    function dataCard(movies){
        let returnCartas = ""
        for (const movi of movies) {
            returnCartas += card(movi)
        }
        $containerFavorites.innerHTML = returnCartas
    }
    dataCard(moviesFavoritesPaint)
})
.catch(err => console.log(err))




