export const workoutOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_X_RAPIDAPI_HOST
    }
}

export const videoOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_YOUTUBEAPI_HOST
    }
}


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}