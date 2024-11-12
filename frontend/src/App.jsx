//import components
import Demo from "./Demo.jsx";

// import dependencies
import axios from "axios";
import {useEffect, useState} from "react";

// import chakra UI components
import {PasswordInput} from "./components/ui/password-input.jsx";
import { Button } from "./components/ui/button.jsx"
import {
    Image,
} from '@chakra-ui/react';

import {
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTrigger,
} from "./components/ui/popover"


// just for demo

function Poster({movie}) {
    // const mononoke_url = "https://image.tmdb.org/t/p/w1280/cDuKyP0SqubYo7hTVMN5wihjjJG.jpg"

    const realUrl  = "https://image.tmdb.org/t/p/w1280/" + movie.poster_url

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="poster">
                <img className="poster__image" src={realUrl} alt="Poster" />



            <PopoverRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
                <PopoverTrigger asChild>
                    <Button size="sm" variant="outline">
                        Click me
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>
                        This is a popover with the same width as the trigger button
                    </PopoverBody>
                </PopoverContent>
            </PopoverRoot>

            </div>


            <Image src={realUrl} alt="Poster" />

        </>

    )
}





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
            {movies.length > 0 ? <Poster movie={movies[0]}/> : <p>loading</p>}


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




