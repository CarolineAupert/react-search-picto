import axios from "axios";

// Config for Axios
// TODO config errors etc
const apiClient = axios.create({
    // withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL, // <- TODO ENV variable
});

// Defining a custom error handler for all APIs
const errorHandler = (error) => {
    const statusCode = error.response?.status

    // Todo Check why 401
    // TODO handle more errors
    // logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
        console.error(error)
    }
    return Promise.reject(error)
}

apiClient.interceptors.request.use(
    (config) => {
        return ({
            ...config,
            // headers: {
            //   ...
            // },
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

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };