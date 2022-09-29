export const getSearchImages = async() => {
    try {
        const api_fetch = await fetch(`https://api.pexels.com/v1/search?query=mountain`, {
            headers: {
                Authorization: '563492ad6f91700001000001c517c6cb99a449d3960f2608a31cf795',
            },
        });
        const {photos} = await api_fetch.json();
        console.log(photos);
        return photos;    

    } catch (error) {
        console.log(error)
    }
};