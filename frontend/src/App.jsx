//import React components

import Navbar from "./components/Navbar.jsx";
import MovieList from "./components/MovieList.jsx";
import MovieDetails from "./components/MovieDetails.jsx";

// import dependencies
import axios from "axios";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes, useParams} from "react-router-dom";

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

    const MovieDetailsWrapper = () => {
        const { id } = useParams();
        const movie = movies.find((movie) => {
            console.log(movie)
            return movie.id === parseInt(id)
        });

        if (!movie) {
            return <Box color="white">Movie not found.</Box>;
        }

        return (
            <Box bg="#1f2c2d">
                <Navbar />
                <MovieDetails movie={movie} loading={loading} />
            </Box>
        );
    };


    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={rootComponent} />
                    <Route path="/movies/:id" element={<MovieDetailsWrapper />} />
                </Routes>
            </Router>
        </>
    )
}

export default App


// {
//     "id": 5,
//     "tmdb_id": 10515,
//     "title": "天空の城ラピュタ",
//     "catchphrase": "ある日、少女が空から降ってきた…",
//     "synopsis": "鉱山町で、見習い機械工として働く少年パズーは、ある日、空から降ってきた不思議な少女シータと出会う。2人は、シータの身に着けていた不思議な「飛行石」を狙う様々な陰謀に巻き込まれていく。",
//     "poster_url": "/xDse6WI1npXK9XUn3gOHSu4SFp3.jpg",
//     "release_date": "1986-08-01T15:00:00.000Z",
//     "person_id": 1,
//     "person_name": "宮崎 駿",
//     "role_name": "Writer"
// }




