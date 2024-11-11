const axios = require('axios');
const fs = require('fs');
require('dotenv').config({ path: '.env.development' });

const BEARER_TOKEN = process.env.TMDB_BEARER_TOKEN;
const PERSON_ID = process.env.TMDB_PERSON_ID;

if (!BEARER_TOKEN) {
    console.error('No Bearer token found.');
    process.exit(1);
}



const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${BEARER_TOKEN}`,
    }
};

// fetch person data
// https://developer.themoviedb.org/reference/person-details
async function personIdToCoreMovieIDs(id){
    const urlPerson = "https://api.themoviedb.org/3/person/" + id +  "/movie_credits?language=ja-Ja";
    const response = await axios.get(urlPerson, options);
    const data = response.data;
    const allMoviesAsCrew = data.crew
    const allMoviesAsCast = data.cast
    const directedOrWrittenMovies = allMoviesAsCrew.filter(movie =>
        (movie.department === "Directing" || movie.department === "Writing"))
    const idArr = directedOrWrittenMovies.map(movie => movie.id)
    const idArrPure = [...Array.from(new Set(idArr))]
    return idArrPure;
}

// fetch movie data
// https://developer.themoviedb.org/reference/movie-details
async function getMoviesDetails(idArray) {
    const movieDetails = await Promise.all(idArray.map(movieId => {
        const urlMovie = 'https://api.themoviedb.org/3/movie/'+ movieId +'?language=ja-JA';
        return axios.get(urlMovie, options);
    }))
    return movieDetails.map(movieDetail => movieDetail.data)
}

function moviesInfoExtraction(detailsArr) {
    return detailsArr.map(movie => {
        return {
            tmbdId: movie.id,
            title: movie.original_title,
            catchphrase: movie.tagline,
            synopsis: movie.overview, // スペル修正
            posterUrl: movie.poster_path,
            releaseDate: movie.release_date,
        };
    });
}


async function getMoviesDetailsByPersonId(id) {
    const movieIdArr = await personIdToCoreMovieIDs(id)
    const moviesDetails = await getMoviesDetails(movieIdArr);
    return moviesInfoExtraction(moviesDetails);
}

async function makeSeedsData(){
    return getMoviesDetailsByPersonId(PERSON_ID)

}
module.exports = { makeSeedsData }




