import { React } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SearchResults from '../../components/search/SearchResults';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PictoApi } from './PictoApi';
import apiClient from '../config/axiosConfig';

describe('PictoApi', () => {
    it("should call get function", () => {
        const apiMock = jest.spyOn(apiClient, 'get');

        PictoApi.indexByTag("perso");

        expect(apiMock).toHaveBeenCalledTimes(1);
        expect(apiMock).toBeCalledWith("/pictos?tag=perso");

        // await waitFor(() => expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent("Pictos trouvés pour le terme : perso"));

    }
    )
});