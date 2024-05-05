import axios from 'axios';
import { APP_BASE_URL } from '../configs/constants';

const instance = axios.create({
    baseURL: APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(
    (config) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.token) {
            config.headers["Authorization"] = `Bearer ${user.token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalConfig = error.config;
        if (originalConfig.url !== "/auth/signin" && error.response) {
            if (error.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                try {
                    const user = JSON.parse(localStorage.getItem("user"));
                    const response = await instance.post('/auth/refreshToken', {
                        refreshToken: user.refreshToken
                    });
                    localStorage.setItem("user", JSON.stringify(response.data));
                    return instance(originalConfig);
                } catch (error) {
                    localStorage.removeItem("user");
                    window.location = "/signin";
                }
            }
        }
    }
)

export default instance;