import { Image } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import {Theme} from "@chakra-ui/react";

import {HoverCardArrow, HoverCardContent, HoverCardRoot, HoverCardTrigger} from "./ui/hover-card.jsx";

import {useState} from "react";



function PosterHover ({ movie }) {

    const realUrl  = "https://image.tmdb.org/t/p/w1280/" + movie.poster_url

    const [open, setOpen] = useState(false)

    // マウスがコンポーネントに入った時に open を true にする
    const handleMouseEnter = () => setOpen(true);

    // マウスがコンポーネントから出た時に open を false にする
    const handleMouseLeave = () => setOpen(false);

    return (

        <>

                <Box
                    bg ="#1f2c2d"
                    w="200px"
                    p="2"
                    borderRadius="md"
                    borderWidth="2px"
                    borderColor="transparent"
                    display = "inline-block"
                    _hover={{
                        borderColor: "#ee2f30",
                        boxShadow: "0 0 15px #ee2f30", // green growing effect
                    }}
                >
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <HoverCardRoot size="sm" openDelay={500} closeDelay={100} positioning={{ placement: "bottom" }} open={open} onOpenChange={(e) => setOpen(e.open)}>
                            <HoverCardTrigger asChild>
                                <Image width = "200px" src={realUrl} alt="Poster" />
                            </HoverCardTrigger>
                            <HoverCardContent maxWidth="400px">
                                <HoverCardArrow />
                                <Box>
                                    <Text fontSize = "xl" fontWeight="bold"> {movie.title} </Text>
                                    <br/>
                                    <Text fontSize="lg" fontWeight="bold">{movie.catchphrase}</Text>
                                    <br/>
                                    <Text fontSize="sm">{movie.synopsis}</Text>
                                </Box>
                            </HoverCardContent>
                        </HoverCardRoot>
                    </div>
                </Box>

        </>
    )
}

export default PosterHover