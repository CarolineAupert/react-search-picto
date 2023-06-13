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
    indexByQuery: (query) =>
        apiClient.get(`/pictos?query=${query}`),
    indexByLast:(pictosNb) =>
        apiClient.get(`/pictos?last=${pictosNb}`),
        
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