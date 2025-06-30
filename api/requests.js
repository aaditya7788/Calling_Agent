import axios from "axios";
  // Import environment variables
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  console.log("Base URL:", BASE_URL);




export const scheduleCall = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/call`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error scheduling call:", error);
    throw error;
  }
};

export const fetchCallHistory = async (googleId) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/call/history/${googleId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // Returns the history object
  } catch (error) {
    console.error("Error fetching call history:", error);
    throw error;
  }
};

export const fetchStatistics = async (googleId) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/call/statistics/${googleId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // Returns the statistics object
  } catch (error) {
    console.error("Error fetching statistics:", error);
    throw error;
  }
};