import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Handle errors globally
// Displays error message with custom styling in browser console
http.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(
      `%c API Error: ${error.message}`,
      'background: #ef4444; color: #ffffff'
    );
    return Promise.reject(error);
  }
);

const api = {
  getList(items = 10): Promise<ListItem[]> {
    return http
      .get(`/exchanges?per_page=${items}`)
      .then((response) => response.data);
  },
  getDetails(slug: string): Promise<Details> {
    return http.get(`/exchanges/${slug}`).then((response) => response.data);
  }
};

export default api;
