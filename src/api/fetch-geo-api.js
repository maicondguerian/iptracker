import axios from 'axios';

const API_KEY = 'at_HxuqOPO7gUG3tpOxf2waCigCDSWk3';
const BASE_URL = `${API_KEY}&`;

const callApi = async () => {
  try {
    const response = await axios.get('https://api.ipify.org/?format=json');
    const USER_IP = response.data.ip

    const END_POINT = `${BASE_URL}ipAddress=${USER_IP}`;
    
    const apiResponse = await axios.get(END_POINT);

    return apiResponse.data;
  } catch (error) {
    console.error('Erro ao chamar a API:', error.message);
    return null;
  }
};

export default callApi;
