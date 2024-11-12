import {Flex, Box, Link, Image} from '@chakra-ui/react';
import image from '../../public/movie-camera.svg';

function Navbar() {
    return (
        <Flex as="nav" align="center" justify="space-between" marginBottom = "50px" padding="1.5rem" bg="#51abc6" color="white">
            <Box>
                <Image w = "50px" src={image} alt="logo" />
            </Box>
            <Box>
                <Link href="/about" margin="0 1rem" fontSize = "20px" fontWeight="bold">About</Link>
                <Link href="/services" margin="0 1rem" fontSize = "20px" fontWeight="bold">Services</Link>
                <Link href="/contact" margin="0 1rem" fontSize = "20px" fontWeight="bold">Contact</Link>
            </Box>
        </Flex>
    );
}

export default Navbar;