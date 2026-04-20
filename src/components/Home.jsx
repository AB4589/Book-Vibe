import React from 'react';
import Hero from './Hero/Hero';
import Books from './Books/Books';
import { useLoaderData } from 'react-router';
const Home = () => {
    const books = useLoaderData();
    return (
        <>
        <div className='px-[135px]'>
             <Hero></Hero>
            <Books books={books.books}></Books>
        </div>
       
        </>
    );
};

export default Home;