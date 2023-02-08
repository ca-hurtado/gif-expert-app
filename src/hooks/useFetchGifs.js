import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { getRandomGifs } from "../helpers/getRandomGif";

export const useFetchGifs = (type = "query", category, limit, offset) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = (type == "query") ? await getGifs(category, limit, offset)
            : await getRandomGifs();
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [offset]);

    return {
        images,
        isLoading
    }
}
