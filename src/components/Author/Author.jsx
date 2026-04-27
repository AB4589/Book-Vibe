import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AuthorInfo from './AuthorInfo';

const Author = () => {
    const authors = useLoaderData();

    return (
        <div>
            <div>
                <h2 className='flex justify-center p-8 font-bold text-4xl'>Author Lists</h2>
            </div>
           <div className='grid grid-cols-4 gap-4'>
            {
                authors.books?.map(author=><AuthorInfo author={author}></AuthorInfo>)
            }            
           </div>
        </div>
    );
};

export default Author;
