import { PictoApi } from './PictoApi';
import apiClient from '../config/axiosConfig';

describe('PictoApi', () => {
    it("should call get function", () => {
        const apiMock = jest.spyOn(apiClient, 'get');

        PictoApi.indexByQuery("perso");

        expect(apiMock).toHaveBeenCalledTimes(1);
        expect(apiMock).toBeCalledWith("/pictos?query=perso");
    }
    )

    it("should call get new pictos function", () => {
        const apiMock = jest.spyOn(apiClient, 'get');

        PictoApi.indexByLast("5");

        expect(apiMock).toHaveBeenCalledTimes(1);
        expect(apiMock).toBeCalledWith("/pictos?last=5");
    }
    )
});