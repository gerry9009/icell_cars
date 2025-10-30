import {
  PUBLIC_API_PASSWORD,
  PUBLIC_API_SESSION_ID,
  PUBLIC_API_URL,
  PUBLIC_API_USERNAME,
} from "@env";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: { sessionId: PUBLIC_API_SESSION_ID },
  auth: {
    username: PUBLIC_API_USERNAME,
    password: PUBLIC_API_PASSWORD,
  },
});

export default apiClient;
