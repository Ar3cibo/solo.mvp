import axios from "axios";
import Poster from './components/Poster'
import {useEffect, useState} from "react";



function App() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const res = axios.get("http://localhost:3000/api/movies");
            setMovies(res.data);
        }
        fetchMovies();
    })
    console.log(movies)

    return <Poster />
}

export default App
