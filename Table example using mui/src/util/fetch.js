import axios from "axios";

export async function fetch() {
  try {
    const response = await axios.get("http://localhost:8080/activities/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching applications:", error);
    return error; 
  }
}
