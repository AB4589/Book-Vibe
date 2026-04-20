import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { booksId } = useParams();
    
    const books = useLoaderData();
    books.books?.map(b=>console.log(typeof b.id))
    const SingleBook = books.books?.find(book=> book.id === Number(booksId));


    console.log(SingleBook)
    console.log(typeof booksId)

    return (
        <div className='flex'>
            <div>

            </div>
            <div>
                
            </div>
        </div>
    );
};

export default BookDetails;