import axios from "axios";

const { VITE_APP_API_URL } = import.meta.env;

const http = axios.create({
  baseURL: VITE_APP_API_URL,
});

const getToken = () => {
  try {
    const storege: any = localStorage.getItem("persist:root");
    if (!storege) return false;

    const { auth } = JSON.parse(storege);
    if (!auth) return false;

    const { token } = JSON.parse(auth);
    if (token) {
      return token;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const token = getToken();

if (token) {
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
}

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response !== undefined) {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.replace("/sign-in");
      }
    }
    return Promise.reject(error);
  }
);

export default http;
