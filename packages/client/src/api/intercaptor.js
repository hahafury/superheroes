import axios from 'axios';
import CONSTANTS from '../constants/index'

const apiInstance = axios.create({
  baseURL: CONSTANTS.BASE_URL,
});

export default apiInstance;