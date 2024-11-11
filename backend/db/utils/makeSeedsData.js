const axios = require('axios');
require('dotenv').config({ path: '.env.development' });

const BEARER_TOKEN = process.env.TMDB_BEARER_TOKEN;
const PERSON_ID = 608;

if (!BEARER_TOKEN) {
    console.error('No Bearer token found.');
    process.exit(1);
}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${BEARER_TOKEN}`,
    },
};

// fetch person data
// https://developer.themoviedb.org/reference/person-details
// https://developer.themoviedb.org/reference/person-movie-credits
async function personIdToCoreMovieIDs(id) {
    const urlPerson = 'https://api.themoviedb.org/3/person/' + id + '/movie_credits?language=ja-Ja';
    const response = await axios.get(urlPerson, options);
    const data = response.data;
    const allMoviesAsCrew = data.crew;
    // const allMoviesAsCast = data.cast
    const directedOrWrittenMovies = allMoviesAsCrew.filter(
        (movie) => movie.job === 'Director' || movie.job === 'Writer',
    );
    const idArr = directedOrWrittenMovies.map((movie) => movie.id);

    return [...Array.from(new Set(idArr))]; // eliminating duplication
}

// fetch movie data
// https://developer.themoviedb.org/reference/movie-details
async function getMoviesDetails(idArray) {
    const movieDetails = await Promise.all(
        idArray.map((movieId) => {
            const urlMovie = 'https://api.themoviedb.org/3/movie/' + movieId + '?language=ja-JA';
            return axios.get(urlMovie, options);
        }),
    );
    return movieDetails.map((movieDetail) => movieDetail.data);
}

function moviesInfoExtraction(detailsArr) {
    return detailsArr.map((movie) => {
        return {
            tmdb_id: movie.id,
            title: movie.original_title,
            catchphrase: movie.tagline,
            synopsis: movie.overview,
            poster_url: movie.poster_path,
            release_date: movie.release_date,
        };
    });
}

async function getMoviesDetailsByPersonId(id) {
    const movieIdArr = await personIdToCoreMovieIDs(id);
    const moviesDetails = await getMoviesDetails(movieIdArr);
    return moviesInfoExtraction(moviesDetails);
}

async function makeSeedsData() {
    return getMoviesDetailsByPersonId(PERSON_ID);
}

// for module.export

async function movies() {
    const seedsData = await makeSeedsData();
    return seedsData.map((movie) => {
        return { tmdb_id: movie.tmdb_id };
    });
}

async function persons() {
    return [{ name: '宮崎 駿' }];
}

async function roles() {
    return [{ role: 'Writer' }, { role: 'Director' }];
}

async function details() {
    const seedsData = await makeSeedsData();
    return seedsData.map((movie, index) => {
        return {
            movie_id: index + 1, // index starts from 0 but database starts 1
            title: movie.title,
            catchphrase: movie.catchphrase,
            synopsis: movie.synopsis,
            poster_url: movie.poster_url,
            release_date: movie.release_date,
        };
    });
}

async function movie_person_roles() {
    function getRandomOneOrTwo() {
        return Math.random() < 0.5 ? 1 : 2;
    }
    const seedsData = await makeSeedsData();
    return seedsData.map((_, index) => {
        return {
            movie_id: index + 1, // index starts from 0 but database starts 1
            person_id: 1,
            role_id: getRandomOneOrTwo(),
        };
    });
}

async function test() {
    console.log('test', await details());
}

test();

module.exports = { movies, persons, roles, details, movie_person_roles };
