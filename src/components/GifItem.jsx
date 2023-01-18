import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifItem = ({ type }) => {

    const { images, isLoading } = useFetchGifs(type);
    return (
        <>
            {
                isLoading && (<p>Now loading...</p>)
            }
            <img src={images.url} alt={images.title} className="rounded"></img>
        </>
    )
}
