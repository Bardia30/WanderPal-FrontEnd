import axios from 'axios';



const URLRestaurant = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const URLAttraction = "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary";

const getRestaurantsData = async (sw, ne) => {
    try {
        const {data: {data}} = await axios.get(URLRestaurant, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '39b9283750mshc902153770c4beap1e0ac3jsn2410b639450c',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;
    } catch (err) {
        console.log(err)
    }
}

const getAttractionsData = async (sw, ne) => {
  try {
      const {data: {data}} = await axios.get(URLAttraction, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '39b9283750mshc902153770c4beap1e0ac3jsn2410b639450c',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
      return data;
  } catch (err) {
      console.log(err)
  }
}


export {getRestaurantsData, getAttractionsData};