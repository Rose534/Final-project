const Movies = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=73767b2552b171f42316e0608f521656";

const API_KEY = "73767b2552b171f42316e0608f521656";

const https = "https://api.themoviedb.org/3";

const image_Path = "https://image.tmdb.org/t/p/original/";

const search_url = "https://api.themoviedb.org/3/search/movie?api_key=73767b2552b171f42316e0608f521656&query=\""

//Search feature

const form = document.getElementById('searchbar')
const search = document.getElementById('Search')
const main = document.getElementById('movies-watchlist')

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
        const{title,poster_path,vote_average,overview}= movie
        const movieElement=document.createElement('div')
        movieElement.classList.add('movie')
        movieElement.innerHTML=`
        <img src= "${image_Path} + ${poster_path}" alt= "${title}"/>
        <div class= 'movie-info'>
        <h3>${title}</h3>
        <span class="${getClassesByRating(vote_average)}"> ${vote_average} </span>
        <div class="overview">
        <h3>Overview</h3>
        ${overview}
        </div>
        </div>`

        main.appendChild(movieElement)
    })
}

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
        Movies(search_url+searchValue)
        searchValue=''

    }
    else{
        window.location.reload()
    }
})