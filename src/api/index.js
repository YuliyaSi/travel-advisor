import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {

    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_API_KEY,
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
            params: {
                lon: lng,
                lat: lat,
            },
            headers: {
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_API_KEY,
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}


// export const getPlacesData = (sw, ne) => {
//    return axios.request({
//         method: 'GET',
//         URL,
//         params: {
//             bl_latitude: sw.lat,
//             tr_latitude: ne.lat,
//             bl_longitude: sw.lng,
//             tr_longitude: ne.lng,
//         },
//         headers: {
//             'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//             'x-rapidapi-key': '041694744amsh7768011b3772d50p139987jsn7ec7f0ef05c5'
//         }
//     })
//         .then((response) => response.data)
//         .catch((error) => console.error(error));
// }