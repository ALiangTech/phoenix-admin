import axios from 'axios';
import addAuthorization from './interceptors/addAuthorization';
import normalizeResponse from './interceptors/normalizeResponse';
import normalizeError from './interceptors/error';
const http = axios.create({
  baseURL: import.meta.env.VITE_HTTP_URL,
  timeout: 6000,
});
addAuthorization(http);
normalizeError(http);
normalizeResponse(http);
export default http;
