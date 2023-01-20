const apiKey = 'nxmqYpa7ZuRZu3KTabZJJ69ozWksNfQT';
export const getRandomGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
    const resp = await fetch(url);

    const { data } = await resp.json();

    return {
        id: data.id,
        title: data.title,
        url: data.images.downsized_medium.url
    };
}