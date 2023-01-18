import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { getRandomGifs } from "../helpers/getRandomGif";

export const useFetchGifs = (type, category, limit) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = (type == "query") ? await getGifs(category, limit)
            : await getRandomGifs();
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
