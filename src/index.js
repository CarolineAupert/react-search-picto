import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './components/app/App';
import PictoDetailModal from './components/picto/PictoDetailModal';
import SearchResults from './components/search/SearchResults';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DefaultResults from './components/search/DefaultResults';
import AboutZone from './components/search/AboutZone';
import SearchZone from './components/search/SearchZone';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <SearchZone />,
        children: [
          {
            path: "",
            element: <DefaultResults />,
            children: [
              {
                path: "picto/:pictoId",
                element: <PictoDetailModal />,
              },
            ]
          },
          {
            path: "search/:searchValue",
            element: <SearchResults />,
            children: [
              {
                path: "picto/:pictoId",
                element: <PictoDetailModal />,
              },
            ]
          },
        ]
      },
      {
        path: "about",
        element: <AboutZone />,
      },
    ],
    // TODO
    // errorElement: <ErrorPage />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
