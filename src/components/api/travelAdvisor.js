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
              'X-RapidAPI-Key': 'c80fd687f0mshcf2ee2641ee63cfp1ee440jsn8047ff636e22',
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
            'X-RapidAPI-Key': 'c80fd687f0mshcf2ee2641ee63cfp1ee440jsn8047ff636e22',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
      return data;
  } catch (err) {
      console.log(err)
  }
}


export {getRestaurantsData, getAttractionsData};