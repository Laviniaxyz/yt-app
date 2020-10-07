import axios from "axios";

const KEY = "AIzaSyCxvnnM7unUW-Zr-y2jMlZCvZOk3iQL6ls";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
