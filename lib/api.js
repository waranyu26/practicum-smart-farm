import axios from 'axios';
import { API_ENDPOINT } from './constants'

export const fetchData = async () => {
  try {
    const response = await axios.get(API_ENDPOINT + '/getdata', {
      headers: {
        'Access-Control-Allow-Origin': API_ENDPOINT,
        'Access-Control-Allow-Credentials': 'true'
      },
    });
    const lastIndex0 = response.data.Temp.length - 1;
    const lastIndex1 = response.data.Soil_Moisture.length - 1;
    return [response.data.Temp[lastIndex0], response.data.Soil_Moisture[lastIndex1]];
  }
  catch (err) {
    console.error(err);
    return [0, 0]
  }
}

export const fetchInterval = async () => {
  try {
    const responses = await axios.all([
      axios.get(API_ENDPOINT + '/gettempinterval'),
      axios.get(API_ENDPOINT + '/getsoilinterval')
    ])
    return [responses[0].data.TempInterval, responses[1].data.SoilInterval];
  }
  catch (err) {
    console.error(err);
    return [0, 0]
  }
}

export const toggleAlarm = async (id) => {
  try {
    await axios.get(API_ENDPOINT + `/buzzer/${id}`);
  }
  catch (err) {
    console.error(err);
  }
}
