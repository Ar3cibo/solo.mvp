// Navbar.js
import '@fontsource/raleway/500.css'; // Raleway Regular 500のインポート
import { Flex, Box, Link, Image, Text } from '@chakra-ui/react';
import image from '../../public/movie-camera.svg';

function Navbar() {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            marginBottom="50px"
            padding="1rem"
            bg="#51abc6"
            color="white"
            fontFamily="Raleway, sans-serif" // フォントファミリーを設定
        >
            {/* ロゴとサイト名 */}
            <Box display="flex" alignItems="center">
                <Image w="50px" src={image} alt="logo" />
                <Link href="/">
                    <Text ml="2" fontWeight="700" fontSize="40px">
                        Absolute-Cinema
                    </Text>
                </Link>
            </Box>

            {/* ナビゲーションリンク */}
            <Box>
                <Link href="/about" margin="0 1rem" fontSize="20px" fontWeight="600">
                    About
                </Link>
                <Link href="/services" margin="0 1rem" fontSize="20px" fontWeight="600">
                    Services
                </Link>
                <Link href="/contact" margin="0 1rem" fontSize="20px" fontWeight="600">
                    Contact
                </Link>
            </Box>
        </Flex>
    );
}

export default Navbar;
