import React from 'react';
import { FaAngleDown } from "react-icons/fa6";

const BookList = () => {
    return (
        <div>
            <div className='flex justify-center items-center p-8 bg-[#1313130D] rounded-2xl'>
                <h2 className='font-bold text-3xl'>Book List</h2>
            </div>
            <div className='flex justify-center items-center py-8'>
            <button className='btn bg-[#23BE0A] text-[#FFFFFF] px-5 py-3 font-semibold text-lg'>Sort By<FaAngleDown /></button>
            </div>

            {/* name of each tab group should be unique */}
<div className="tabs tabs-lift">
  <label className="tab">
    <input type="radio" name="my_tabs_4" />
    Read Books
  </label>
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <label className="tab">
    <input type="radio" name="my_tabs_4" defaultChecked />
    Wishlist Books
  </label>
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>
</div>
        </div>
    );
};

export default BookList;