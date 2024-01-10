const $containerMovi = document.getElementById("info-movi")
const $bannerContainer = document.getElementById("banner")

const queryParams = new URLSearchParams( location.search )
const id = queryParams.get('id')

const moviesFind = movies.find( movi => movi.id == id)

const imgdata = document.getElementById('banner')

$bannerContainer.innerHTML = `<img src="${moviesFind.image}" class="w-[100vw] h-[100vh]" alt="" />`

$containerMovi.innerHTML = `
<div class="w-[70em] py-5 flex justify-center gap-8">
    <img class=""src="${moviesFind.image}">
    <div>
        <h1 class="py-5" >${moviesFind.title}</h1>
        <p class="py-5">${moviesFind.tagline}</p>
        <p class="py-5">${moviesFind.genres}</p>
        <p class="py-5">${moviesFind.overview}</p>
    </div>
</div>
<div class="flex justify-around">
    <table class="my-8">
        <tbody class="border border-white">
        <tr class="border border-white p-3 text-start">
        <th class="border border-white p-3 text-start">original Lenguage</th>
        <th class="border border-white p-3 text-start">${moviesFind.original_language}</th>
        </tr">
        <tr class="border border-white p-3 text-start">
        <th class="border border-white p-3 text-start">realse date</th>
        <th class="border border-white p-3 text-start">${moviesFind.release_date}</th>
        </tr><tr>
        <th class="border border-white p-3 text-start">runtime</th>
        <th class="border border-white p-3 text-start">${moviesFind.runtime}</th>
        </tr><tr>
        <th class="border border-white p-3 text-start">status</th>
        <th class="border border-white p-3 text-start">${moviesFind.status}</th>
        </tr>
        </tbody>
    </table>
    <table class="my-8">
        <tbody class="border border-white">
        <tr class="border border-white p-3 text-start">
        <th class="border border-white p-3 text-start">vote average</th>
        <th class="border border-white p-3 text-start">${moviesFind.vote_average}%</th>
        </tr">
        <tr class="border border-white p-3 text-start">
        <th class="border border-white p-3 text-start">budget</th>
        <th class="border border-white p-3 text-start">USD ${moviesFind.budget.toLocaleString()}</th>
        </tr><tr>
        <th class="border border-white p-3 text-start">revenue</th>
        <th class="border border-white p-3 text-start">${moviesFind.revenue}</th>
        </tr>
    </tbody>
</table>
</div>
`