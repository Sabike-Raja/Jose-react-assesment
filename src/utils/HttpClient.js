import axios from "axios";
import { API_BASE_URL } from '../constant'

// axios interceptor to handle success and error response
axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

class HttpClient {
  async get(url) {
    try {
      return await axios.get(`${API_BASE_URL}${url}`);
    } catch (err) {
      return err;
    }
  }

  async delete(url) {
    try {
      return await axios.delete(`${API_BASE_URL}${url}`);
    } catch (err) {
      return err;
    }
  }

  async post(url, body) {
    try {
     
      return await axios.post(
        `${API_BASE_URL}${url}`,
        body,
      );
    } catch (err) {
      return err;
    }
  }

  async put(url, body) {
    try {
      return await axios.put(
        `${API_BASE_URL}${url}`,
        body
      );
    } catch (err) {
      return err;
    }
  }
}
const ExportedClient = new HttpClient()
export default ExportedClient;
