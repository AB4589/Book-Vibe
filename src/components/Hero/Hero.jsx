import React from 'react';
import SingleBook from '../../assets/hero-book.png'

const Hero = () => {
    return (
        <div>
             <div className='flex items-center justify-center lg:mb-24'>
            <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={SingleBook}
      className="max-w-sm shadow-2xl w-[318px] h-[394px]"
    />
    <div>
      <h1 className="text-5xl font-bold w-[526px]">Books to freshen up your bookshelf</h1>
      <button className="btn  bg-[#23BE0A] text-[#ffffff] px-7 py-5 mt-12">View The List</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Hero;