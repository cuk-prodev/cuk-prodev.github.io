import axios, { AxiosInstance } from "axios";

export function setupAxios(axiosInstance: AxiosInstance) {
  // contoh: set base URL API kamu
  axiosInstance.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

  // contoh: kirim token auth kalau ada
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // contoh interceptor response
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        console.error("Unauthorized, please login again.");
      }
      return Promise.reject(error);
    }
  );
}
