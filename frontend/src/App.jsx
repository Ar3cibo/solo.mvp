//import components
import PosterHover from "./components/PosterHover.jsx";

// import dependencies
import axios from "axios";
import {useEffect, useState} from "react";



function App() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await axios.get("http://localhost:3000/api/movies");
            console.log("Fetched movies:", res.data[0].poster_url);
            setMovies(res.data);
        }
        fetchMovies()
    },[])

    return (
        <>
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}
            {movies.length > 0 ? <PosterHover movie={movies[0]}/> : <p>loading</p>}

        </>
    )
}

export default App

// {
//     "tmdb_id": 128,
//     "title": "もののけ姫",
//     "catchphrase": "生きろ。",
//     "synopsis": "山里に住む若者アシタカは、怒りと憎しみにより“タタリ神”と化した猪神から呪いを...",
//     "poster_url": "/cDuKyP0SqubYo7hTVMN5wihjjJG.jpg",
//     "release_date": "1997-07-11T15:00:00.000Z"
// }
//
//     const moviesArr = movies.map((movie) => {movie.poster_url = "https://image.tmdb.org/t/p/w1280/" + movie.poster_url})
//     const proMan = movies[0].poster_url;




