const Movies = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=73767b2552b171f42316e0608f521656";

const API_KEY = "73767b2552b171f42316e0608f521656";

const https = "https://api.themoviedb.org/3";

const image_Path = "https://image.tmdb.org/t/p/original/";

const search_url = "https://api.themoviedb.org/3/search/movie?api_key=73767b2552b171f42316e0608f521656&query=\""



const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
const cntpg = document.getElementById('cntpg')
const conditions = document.getElementById('terms_conditions')
const watchpg = document.getElementById('watchpg')


//Search feature
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
        <img src= "${image_Path + poster_path}" alt= "${title}">
        <div class= 'movie-info'>
        <h7>${title}</h7>
        <br>
        <span class="${getClassesByRating(vote_average)}"> ${vote_average} </span>
        <div id="overview">
        <br>
        <h7>Description:</h7>
        <br><br>
        ${overview}
        </div>
        </div>
        </div>`
        main.appendChild(moviesElement)

        
    })
    
    

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


//contact us navigation bar button

const contactbtn = document.getElementById('contact')
contactbtn.addEventListener('click', () => {
    search.style.display = "none"
    main.style.display = "none"
    conditions.style.display = "none"
    watchpg.style.display = "none"
    
    cntpg.removeAttribute('hidden');
    cntpg.style.display = 'inline'

})

//Terms and conditions navigation button
const termsbtn = document.getElementById('terms')
termsbtn.addEventListener('click', () => {
    search.style.display = "none"
    main.style.display = "none"
    cntpg.style.display = "none"
    watchpg.style.display = "none"

    
    conditions.removeAttribute('hidden')
    conditions.style.display = "flex"
    

})
  
//watchlist navigation button

const wishlistbtn = document.getElementById('wishlist')
wishlistbtn.addEventListener('click', () => {
    search.style.display = "none"
    main.style.display = "none"
    cntpg.style.display = "none"
    conditions.style.display = "none"

    watchpg.removeAttribute('hidden')
    watchpg.style.display = "inline";

})

//home navigation reload button

const homebtn = document.getElementById('home')
homebtn.addEventListener('click', function(){
    location.reload();
} )

//contact us submit button
let btnsubmit = document.getElementById('submitbtn')
let inputs = document.querySelectorAll('input') 

btnsubmit.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');

})