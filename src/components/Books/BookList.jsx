import React, { useEffect, useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { useLoaderData } from 'react-router';
import { getStoredBook } from '../../utility/addToDB';
import Book from './Book';
import { ReadList } from './ReadList';

const BookList = () => {
  const data = useLoaderData();
  const books = data.books;
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState([]);
  useEffect(()=>{
    const storedBookData = getStoredBook();
    console.log(storedBookData)
    const ConvertedStoredBooks = storedBookData.map(book=>parseInt(book));
    console.log(ConvertedStoredBooks)
    const myReadList = books.filter(book=> ConvertedStoredBooks.includes(book.bookId));
    setReadList(myReadList);
    console.log(myReadList)
    console.log(readList);
  },[])
    const handleSort = (type) => {
      setSort(type);
      if(type==='pages'){
        const sortedPage = [...readList].sort((a,b)=> a.totalPages -b.totalPages);
        setReadList(sortedPage);
        console.log(readList)
      }
      else if(type==='rating'){
        const sortedRating = [...readList].sort((a,b)=> a.rating -b.rating);
        setReadList(sortedRating);
        console.log(readList)
      }
    }
    return (
      <>
       <div className='flex justify-center items-center p-8 bg-[#1313130D] rounded-2xl'>
                <h2 className='font-bold text-3xl'>Book List</h2>
            </div>
            <div className='flex justify-center items-center py-8'>
               <div class="dropdown dropdown-start">
  <div tabIndex="0" role="button" class="btn bg-[#23BE0A] text-[#FFFFFF] px-5 py-3 font-semibold text-lg">Sort By: {sort? sort : ""}<FaAngleDown /></div>
  <ul tabIndex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("pages")}>Pages</a></li>
    <li><a onClick={()=>handleSort("rating")}>Ratings</a></li>
  </ul>
</div>
</div>


       
            {/* name of each tab group should be unique */}
        <div className="tabs tabs-border">
          <input type="radio" name="my_tabs_2" className="tab" aria-label="Read List" defaultChecked/>
          <div className="tab-content border-base-300 bg-base-100 p-10 mt-8">
             {
                readList.map(b=><ReadList key={b.bookId} book={b}></ReadList>)
              }
          </div>
          <input type="radio" name="my_tabs_2" className="tab" aria-label="Wish List"  />
          <div className="tab-content border-base-300 bg-base-100 p-10 mt-8">Tab content 2</div>
        </div>
      </>
    );
};

export default BookList;