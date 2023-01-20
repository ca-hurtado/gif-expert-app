const apiKey = 'nxmqYpa7ZuRZu3KTabZJJ69ozWksNfQT';
export const getGifs = async (category, limit) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;
    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ))
    return gifs;
}