import axios from 'axios';



const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const getPlacesData = (bounds) => {
    return axios.get(URL, {
        params: {
            bl_latitude: bounds.sw.lat,
            tr_latitude: bounds.ne.lat,
            bl_longitude: bounds.sw.lng,
            tr_longitude: bounds.ne.lng,
        },
        headers: {
            'X-RapidAPI-Key': '06ee4c1ea4msh5c190e53082e6eep16149cjsn15082cf550d2',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    })
        .then(res => {
            return res.data.data;
        })
        .catch((err) => console.log(err.message));
}

export default getPlacesData;