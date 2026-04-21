import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import HeroBook from '../../assets/hero-book.png';
const BookDetails = () => {
    const { booksId } = useParams();
    
    const books = useLoaderData();
    // books.books?.map(b=>console.log(typeof b.id))
    const SingleBook = books.books?.find(book=> Number(book.bookId) === Number(booksId));
    console.log(SingleBook);
    const {bookName, publisher, image, category, tags, review} = SingleBook;
  
    const handleMarkAsRead = id = {
        
    }
    return (
        <div className='flex'>
            <div className='flex bg-[#1313130D] flex-1 justify-center items-center'>
                <img src={image} className='m-[74px] w-[75%]'/>
            </div>
            <div className='pl-12 flex-2'>
                <h2 className='font-bold font-playfair text-4xl'>{bookName}</h2>
                <h3 className='text-xl font-medium lg:mt-4'>By : {publisher}</h3>
                <div className='border-1 border-[#13131326] my-6'></div>
                 <h4 className='font-medium  text-xl'>{category}</h4>
                <div className='border-1 border-[#13131326] my-6'></div>
                
                <p className='my-6'>
                    <strong>Review :</strong> {review}
                </p>
                <div className='flex items-center'>
                    <h3 className='font-bold text-lg mr-4'>Tag</h3>
                    {
                        tags.map((tag, index)=> <h3 key={index} className='bg-[#23BE0A0D] text-[#23BE0A] rounded-3xl py-2 px-4'>#{tag}</h3>)
                    }
                    
                </div>
                <div className='border-1 border-[#13131326] my-6'></div>
                <div className='flex'>
                   <div className='mr-14'>
                    <p>Number of Pages:</p>
                    <p> Publisher:</p>
                   <p> Year of Publishing:</p>
                    <p>Rating:</p>
                    </div>
                   <div>
                    <p>281</p>
                    <p>J.B Lippincott & Co.</p>
                    <p>1960</p>
                    <p>4.8</p>
                   </div>
                </div>
                <div className='mt-8'>
                    <a className="btn px-4 text-[#131313] text-xl py-5 mr-4" onClick={handleMarkAsRead}>Read</a>
                    <a className="btn px-4 bg-[#59C6D2] text-[#ffffff] text-xl py-5">Wishlist</a>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;