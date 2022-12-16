const popularMovies = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=73767b2552b171f42316e0608f521656";

const API_KEY = "73767b2552b171f42316e0608f521656";

const https = "https://api.themoviedb.org/3";

const image = "https://image.tmdb.org/t/p/original/"

//Search feature

const input = document.querySelector(".searchbar")
const btn = document.querySelector(".search")
const maingridtitle = document.querySelector(".Watchlist h5")
const maingrid = document.querySelector(".Watchlist .movie-grid")


async function searchmovie(searchTerm) {
   const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`)
   const respData = await resp.json()
   
   return respData.results
}

btn.addEventListener('click', searched_movies)

async function searched_movies () {
    const data = await searchmovie (input) 
    console.log(data);    
    }
