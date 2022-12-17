const Movies = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=73767b2552b171f42316e0608f521656";

const API_KEY = "73767b2552b171f42316e0608f521656";

const https = "https://api.themoviedb.org/3";

const image_Path = "https://image.tmdb.org/t/p/original/";

const search_url = "https://api.themoviedb.org/3/search/movie?api_key=73767b2552b171f42316e0608f521656&query=\""

//Search feature

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

function add_click_effect_to_card (cards) {
    cards.forEach(card => {
        card.addEventListener('click', () => show_popup(card))
    })
}
//creating popup
function show_popup(card) {
    console.log('popup is shown' + card);
}

//fetching popular movies from API
getMovies(Movies)
async function getMovies(url){
const res = await fetch(url)
const data = await res.json()
displayMovies(data.results)
console.log(data.results);
}

function displayMovies(movies){
    main.innerHTML = ' '
    movies.forEach((movie)=>{
        const {title,poster_path,vote_average,overview}= movie
        const moviesElement=document.createElement('div')
        moviesElement.classList.add('movie')
        moviesElement.innerHTML = `
        <div class="card">
        <img id = "btn" src= "${image_Path + poster_path}" alt= "${title}">
        <div class= 'movie-info'>
        <h3>${title}</h3>
        <span class="${getClassesByRating(vote_average)}"> ${vote_average} </span>
        <div id="overview">
        <h3>Overview</h3>
        ${overview}
        </div>
        </div>
        </div>`
        main.appendChild(moviesElement)

        
    })
    
    
    //popup to appear when we click the film.
    const cards = document.querySelectorAll('.card')
    add_click_effect_to_card(cards)

}

async function get_movie_by_id (title) {
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    const respData = await resp.json()
    return respData
}


//change color with different ratings.
function getClassesByRating(rating) {
    if(rating>=8){
        return 'green'
    }
    else if (rating>=5){
        return 'orange'
    }
    else {
    return 'red'
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const searchValue = search.value 
    if(searchValue && searchValue !=='') {
        getMovies(search_url+searchValue)
        searchValue = ''

    }
    else{
        window.location.reload()
    }

    
})


