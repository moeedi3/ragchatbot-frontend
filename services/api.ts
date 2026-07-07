import axios from "axios";

const api = axios.create({
    baseURL: "https://miggwp-ragchatbot.hf.space",
});

export default api;