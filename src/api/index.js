import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw, ne) => {
  try {
      const { data: { data } } = await axios.get(URL, {
          params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
          },
          headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '041694744amsh7768011b3772d50p139987jsn7ec7f0ef05c5'
          }
      });
      return data;
  } catch (error) {
      console.log(error)
  }
}