import React from 'react';
import SingleBook from '../../assets/book-product.png'
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const Book = ({book}) => {
    console.log(book)
    const {bookName, category, image,  tags, rating, publisher, bookId} = book;
    return (
<div className="card bg-base-100 border border-[#13131326] w-[374px]">
     <Link to={`/bookDetails/${bookId}`}>
    <div className='flex justify-center items-center p-6'>
        <figure className=" px-10 pt-10 bg-[#F3F3F3] w-[326px] h-[230px] rounded">
        <img
        src={image}
        alt="Shoes"
        className="rounded-xl w-[134px] h-[166px]" />
    </figure>
    </div>
    <div className='flex m-6'>
        {
            tags.map((tags, index)=>  <div className="badge badge-soft bg-[#23BE0A0D] font-medium text-[#23BE0A] mr-3" key={index}>{tags}</div>)
        }
    </div>
    <div className="card-body">
        <h2 className='card-title font-bold'>{bookName}</h2>
        <h3 className="card-title font-medium">By : {publisher}</h3>
        <div className="border-1 border-dashed border-[#13131326]"></div>
        <br className='border-2'/>
        <div className="flex justify-between">
            <div>
                <h2 className='font-medium'>{category}</h2>
            </div>
            <div className='flex items-center'>
                <h2 className='font-medium mr-2'>{rating}</h2><CiStar size={24}/>
            </div>
        </div>
    </div>
    </Link>
</div>



   
    );
};

export default Book;