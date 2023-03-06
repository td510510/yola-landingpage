import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `${process.env.HOST_API}/api/v1`,
  headers: {
    'content-type': 'application/json',
  },
});

axiosClient.interceptors.request.use((config) => {
  // const token = cookie.get('token_rgs_pt');
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  alert('hhh');
  return config;
});

axiosClient.interceptors.response
  .use
  // (response) => {
  //   if (response && response.data) {
  //     return response.data;
  //   }
  //   return response;
  // },
  // (error) => {
  //   throw error;
  // }
  ();

export default axiosClient;
