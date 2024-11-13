import PosterHover from "./PosterHover.jsx";

// import dependencies

export default function MovieList({loading, movies}) {

    const posterComponents = movies.map((movie) => {
        return <PosterHover key={movie.id} movie={movie}/>
    });

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        padding: '10px',
    };

    const centeredPosterComponents =
        <div style={containerStyle}>
            {posterComponents}
        </div>

    return (
        <>
            {loading ? <p>Loading...</p> : centeredPosterComponents}
        </>
    )
}