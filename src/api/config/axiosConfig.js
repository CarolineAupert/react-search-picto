import axios from "axios";

// Config for Axios
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// Defining a custom error handler for all APIs
const errorHandler = (error) => {

    console.log(error);

    // const statusCode = error.response?.status
    // Todo Check why 401
    // TODO handle more errors
    // logging only errors that are not 401
    // if (statusCode && statusCode !== 401) {
    //     console.error(error)
    // }
    return Promise.reject(error)
}

apiClient.interceptors.request.use(
    (config) => {
        return ({
            ...config,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    },
    (error) => {
        return errorHandler(error);
    }
);

apiClient.interceptors.response.use((response) =>
    response,
    async (error) => {
        return errorHandler(error);
    },
);

export default apiClient;