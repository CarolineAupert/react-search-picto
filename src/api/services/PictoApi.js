// import { get } from '../config/axiosConfig';
import apiClient from '../config/axiosConfig';

// Basic CRUD:
// index  <- GET all items
// single <- GET single item by id
// create <- POST an item
// update <- PUT data to an item
// remove <- DELETE an item
// Specific:
// singleByEmail
// removeAll

export const PictoApi = {
    indexByTag: (tag) =>
        apiClient.get(`/pictos?tag=${tag}`),

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