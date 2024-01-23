import axios from 'axios';
import addAuthorization from './interceptors/addAuthorization';
import normalizeResponse from './interceptors/normalizeResponse';
const http = axios.create({
  baseURL: '',
  timeout: 6000,
  headers: { 'X-Custom-Header': 'foobar' },
});

addAuthorization(http);
normalizeResponse(http);
export default http;
