import React from 'react'
import { FaUsers } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from 'react-router';


export const ReadList = ({book}) => {
const {bookName, category, image,  tags, rating, publisher, bookId, totalPages, yearOfPublishing} = book;
  return (
    <div className='flex items-center border-1 border-[#13131326] my-6'>
        <div className='w-1/8 m-6 border rounded-2xl'>
            <img src={image} className='px-[28px] py-[50px] bg-[#1313130D]'/>
        </div>
        <div className='space-y-4 space-x-2'>
                <h2 className='font-bold text-2xl'>{bookName}</h2>
                <h3 className="font-medium text-base">By : {publisher}</h3>
                <div className='flex items-center'> 
                    <strong>tags</strong>
                {
                    tags.map((tags, index)=>  <div className="badge badge-soft bg-[#23BE0A0D] font-medium text-[#23BE0A] mx-3" key={index}>{tags}</div>)
                }
                <IoLocationOutline /> Year of Publishing: {yearOfPublishing}
                </div>
                <div className='flex items-center space-x-2'>
                    <div className='flex items-center'>
                        <FaUsers className='mr-2'/><h2>Publisher: {publisher}</h2>
                    </div>
                    <div className='flex items-center'>
                        <MdOutlineContactPage className='mr-2'/> <h2>Page {totalPages}</h2>
                    </div>
                </div>
                <div className='border-1 border-[#13131326]'></div>
                <div>
                <button className='btn bg-[#328EFF26] text-[#328EFF] rounded-[30px] mx-3'>Category: {category}</button>
                <button className='btn bg-[#FFAC3326] text-[#FFAC33] rounded-[30px] mx-3'>Rating: {rating}</button>
                <Link to={`/bookDetails/${bookId}`} className='btn bg-[#23BE0A] text-[#FFFFFF] rounded-[30px] mx-3'>View Details</Link>
                </div>
        </div>
    </div>
  )
}
