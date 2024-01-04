


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
