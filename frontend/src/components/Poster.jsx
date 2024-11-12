
import propsTest from '../../public/movie-film.svg'
// just for demo



export default function Poster() {
    return (
        <>
            <div className="poster">
                <img className="poster__image" src={propsTest} alt="Poster" />
                <h1 className="poster__title">Poster</h1>
                <p>OverView : a long time ago...</p>
            </div>
        </>
    )
}