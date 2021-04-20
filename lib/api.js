import axios from 'axios';
import { API_ENDPOINT } from './constants'

export const fetchData = async () => {
  try {
    const response = await axios.get(API_ENDPOINT + '/getdata');
    const lastIndex = response.data.Temp.length - 1;
    return [response.data.Temp[lastIndex], response.data.Soil_Moisture[lastIndex]];
  }
  catch (err) {
    console.error(err);
    return [0, 0]
  }
}

export const toggleAlarm = async (id) => {
  try {
    console.log("TOGGLE " + id)
    await axios.get(API_ENDPOINT + `/buzzer/${id}`);
  }
  catch (err) {
    console.error(err);
  }
}
