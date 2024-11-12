import { Box, Link, Strong } from "@chakra-ui/react"
import {
    HoverCardArrow,
    HoverCardContent,
    HoverCardRoot,
    HoverCardTrigger,
} from "./components/ui/hover-card"
import { useState } from "react"

const Demo = () => {
    const [open, setOpen] = useState(false)
    return (
        <HoverCardRoot size="sm" openDelay={200} closeDelay={100} open={open} onOpenChange={(e) => setOpen(e.open)}>
            <HoverCardTrigger asChild>
                <Link href="#">@chakra_ui</Link>
            </HoverCardTrigger>
            <HoverCardContent maxWidth="240px">
                <HoverCardArrow />
                <Box>
                    <Strong>Chakra</Strong> is a Sanskrit word that means disk or wheel,
                    referring to energy centers in the body
                </Box>
            </HoverCardContent>
        </HoverCardRoot>
    )
}

export default Demo;


