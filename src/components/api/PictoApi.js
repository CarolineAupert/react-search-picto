// Config for Axios

const baseURL = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

async function getApi(path, errorMessage) {
    const res = await fetch(baseURL + path)
    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error(errorMessage);
    }

    return res.json();
}

export const PictoApi = {
    indexByQuery: async (query) =>
        getApi(`/pictos?query=${query}`, "error"),
    indexByLast: async (pictosNb) =>
        getApi(`/pictos?last=${pictosNb}`, "Une erreur est survenue, veuillez réessayer. Si l'erreur persiste, veuillez contacter l'administrateur du site."),
    getById: async (id) =>
        getApi(`/picto?id=${id}`, "error"),
    //   single: (id) =>
    //     get(`/ users / ${ id }`),
    //   singleByEmail: (email) =>
    //     get(`/ users ? email = ${ email }`),
    //   create: (params) =>
    //     post('/users', params),
    //   update: (id, params) =>
    //     put(`/ users / ${ id }`, params),
    //   remove: (id) =>
    //     destroy(`/ users / ${ id }`)
}