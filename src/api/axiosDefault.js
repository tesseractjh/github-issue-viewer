import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_SERVER;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`;

axios.interceptors.request.use(
  config => config,
  () => ({ message: 'API 요청에 실패했습니다!' })
);

axios.interceptors.response.use(
  response => ({ response, isSuccess: true }),
  error => error.response
);
