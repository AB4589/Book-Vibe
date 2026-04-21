import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root';
import ErrorPage from '../pages/ErrorPage';
import App from '../App';
import Home from '../components/Home';
import Books from '../components/Books/Books';
import Book from '../components/Books/Book';
import BookDetails from '../components/Books/BookDetails';
import BookList from '../components/Books/BookList';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            loader: () => fetch('Books.json'),
            Component: Home
        },
         {
            path: "book-list",
            Component: BookList
        },
        {  
        path: "bookDetails/:booksId",
        loader: () => fetch('Books.json'),
        Component: BookDetails 
        }
    ]
  },
]);