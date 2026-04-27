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
import PagesToRead from '../components/Books/PagesToRead';
import Author from '../components/Author/Author';
import ContactUs from '../components/Contact/ContactUs';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            loader: () => fetch('Books.json'),
            Component: Home
        },
         {
            path: "book-list",
            loader: () => fetch('Books.json'),
            Component: BookList
        },
        {  
        path: "bookDetails/:booksId",
        loader: () => fetch('Books.json'),
        Component: BookDetails 
        },
        {
          path: "/pages-to-read",
          loader: () => fetch('Books.json'),
          Component: PagesToRead
        },
        {
          path: "/author",
          loader: ()=> fetch('Books.json'),
          Component: Author
        },
        {
          path: "/contact-us",
          Component: ContactUs
        },
        {

          errorElement: <ErrorPage></ErrorPage>,
        }
    ]
  },
]);