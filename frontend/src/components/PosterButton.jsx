
// import dependencies
import {useState} from "react";

// import chakra UI components
import { Button } from "./components/ui/button.jsx"
import {
    Image,
} from '@chakra-ui/react';

import {
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot, PopoverTitle,
    PopoverTrigger,
} from "./components/ui/popover"

import {Text} from "@chakra-ui/react"


function PosterButton({ movie }) {

    const realUrl  = "https://image.tmdb.org/t/p/w1280/" + movie.poster_url

    const [open, setOpen] = useState(false)

    return (

        <>
            <div className="poster">
                <Image width = "200px" src={realUrl} alt="Poster" />
                <br/>
                <PopoverRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
                    <PopoverTrigger asChild>
                        <Button size="sm" variant="outline">
                            Detail
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverBody>
                            <PopoverTitle fontSize = "xl" fontWeight="bold"> {movie.title} </PopoverTitle>
                            <br/>
                            <Text fontSize = "lg" fontWeight="bold">{movie.catchphrase}</Text>
                            <br/>
                            <Text fontSize = "sm" >{movie.synopsis}</Text>

                        </PopoverBody>
                    </PopoverContent>
                </PopoverRoot>
            </div>
        </>

    )
}

export default PosterButton