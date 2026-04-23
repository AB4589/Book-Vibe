import React, { useEffect, useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { useLoaderData } from 'react-router';
import { getStoredBook } from '../../utility/addToDB';
import Book from './Book';

const BookList = () => {
  const data = useLoaderData();
  const books = data.books;
  const [readList, setReadList] = useState([]);
  useEffect(()=>{
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map(book=>parseInt(storedBookData));
    const myReadList = books.filter(book=> ConvertedStoredBooks.includes(book.bookId));
    setReadList(myReadList);
    console.log(readList);
  },[])
    return (
      <>
            {/* name of each tab group should be unique */}
        <div className="tabs tabs-border">
          <input type="radio" name="my_tabs_2" className="tab" aria-label="Read List" defaultChecked/>
          <div className="tab-content border-base-300 bg-base-100 p-10">
             {
                readList.map(b=><Book key={b.bookId} book={b}></Book>)
              }
          </div>
          <input type="radio" name="my_tabs_2" className="tab" aria-label="Wish List"  />
          <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 2</div>
        </div>
      </>
    );
};

export default BookList;