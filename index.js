const Movies = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=73767b2552b171f42316e0608f521656";

const API_KEY = "73767b2552b171f42316e0608f521656";

const https = "https://api.themoviedb.org/3";

const image_Path = "https://image.tmdb.org/t/p/original/";

const search_url = "https://api.themoviedb.org/3/search/movie?api_key=73767b2552b171f42316e0608f521656&query=\""

//Search feature

const form = document.getElementById('searchbar')
const search = document.getElementById('Search')
const main = document.getElementById('movie-grid')

async function getMovies(url){
const res = await fetch(url)
const data = res.json()
console.log(data.results);
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const searchValue = search.value 
    if(searchValue && searchValue !=='') {
        Movies(search_url+searchValue)
    }
})