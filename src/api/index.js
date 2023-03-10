import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw, ne) => {
    try{
        const { data: { data } } = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
        
          },
          headers: {
            'X-RapidAPI-Key': '9092f147c0mshdfc0e555bcd8629p115359jsnac75da5b2776',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        console.log(data);
        return data;
    }
    catch (error){
        console.log(error);
    }
}