//import React components

import Navbar from "./components/Navbar.jsx";
import MovieList from "./components/MovieList.jsx";
import MovieDetails from "./components/MovieDetails.jsx";

// import dependencies
import axios from "axios";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {Box} from "@chakra-ui/react";


function App() {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/movies");
                setMovies(res.data);
                setLoading(false);

            }catch(error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies()
    },[]);

    const rootComponent =
        <Box bg ="#1f2c2d">
                <Navbar />
                <MovieList movies={movies} loading={loading}></MovieList>
        </Box>

    return (
        <>
            <Box bg ="#1f2c2d">
                <Navbar />
                <MovieList movies={movies} loading={loading}></MovieList>
            </Box>
            <Router>
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/movies:id" element={<></>} />
                </Routes>
            </Router>
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




