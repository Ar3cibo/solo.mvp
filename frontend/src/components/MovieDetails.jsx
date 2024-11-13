// import chakra components
import {
    Box,
    Flex,
    Image,
    Text,
    Heading,
    Spinner,
    Stack,
} from "@chakra-ui/react";

export default function MovieDetails({ movie, loading }) {
    if (loading) {
        return (
            <Flex justify="center" align="center" height="100vh">
                <Spinner size="xl" />
            </Flex>
        );
    }

    if (!movie) {
        return (
            <Box p={5}>
                <Text color="#51abc6">映画の情報が見つかりません。</Text>
            </Box>
        );
    }

    // 経由URLの構築
    const realUrl = `https://image.tmdb.org/t/p/w500${movie.poster_url}`; // 必要に応じてサイズを調整

    // 発表年の抽出
    const releaseYear = new Date(movie.release_date).getFullYear();

    // 関係者の情報を配列として扱う（複数の関係者がいる場合に対応）
    const personnel = [
        {
            id: movie.person_id,
            name: movie.person_name,
            role: movie.role_name,
        },
        // 追加の関係者があればここに追加
    ];

    return (
        <Box maxW="1200px" mx="auto" p={5}>
            {/* ポスターとテキストコンテンツを左右に配置 */}
            <Flex
                direction={{ base: "column", md: "row" }}
                align="flex-start"
                justify="space-between"
            >
                {/* ポスター画像を左側に配置 */}
                <Box flexShrink={0} mr={{ md: 5 }}>
                    <Image
                        width={{ base: "100%", md: "400px" }}
                        src={realUrl}
                        alt={`${movie.title} ポスター`}
                        objectFit="cover"
                        borderRadius="md"
                        boxShadow="lg"
                    />
                </Box>

                {/* テキストコンテンツ */}
                <Box flex="1" mt={{ base: 5, md: 0 }}>
                    {/* タイトル */}
                    <Heading as="h1" size="3xl" mb={4} color="white">
                        {movie.title}{" "}
                        <Text as="span" fontSize="lg" color="#51abc6">
                            ({releaseYear})
                        </Text>
                    </Heading>

                    {/* キャッチコピー */}
                    <Box pl={4} mb={6}>
                        <Text fontSize="2xl" fontWeight="bold" color="#ee2f30">
                            {movie.catchphrase}
                        </Text>
                    </Box>

                    {/* あらすじセクション */}
                    <Box pl={4} mb={6}>
                        <Heading as="h2" size="lg" mb={2} color="#51abc6">
                            あらすじ
                        </Heading>
                        <Box pl={4}>
                            <Text fontSize="md" color="white">
                                {movie.synopsis}
                            </Text>
                        </Box>
                    </Box>

                    {/* 関係者欄セクション */}
                    <Box pl={4}>
                        <Heading as="h2" size="lg" mb={4} color="#51abc6">
                            関係者
                        </Heading>
                        <Stack spacing={3}>
                            {personnel.map((person) => (
                                <Flex key={person.id} align="center">
                                    <Box pl={4}> {/* さらにインデント */}
                                        <Text fontSize="md" fontWeight="bold" color="white">
                                            {person.name}
                                        </Text>
                                        <Text fontSize="sm" color="#51abc6">
                                            {person.role}
                                        </Text>
                                    </Box>
                                </Flex>
                            ))}
                        </Stack>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}
