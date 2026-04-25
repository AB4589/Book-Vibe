import React from 'react';
import { Link } from 'react-router';

const Links = () => {
    return (
        <>
            <li><Link to={'/'} className='hover:text-[#23BE0A] hover:border'>Home</Link></li>
            <li><Link to={'/book-list'} className='hover:text-[#23BE0A] hover:border'>Listed Books</Link></li>
            <li><Link to={'/pages-to-read'} className='hover:text-[#23BE0A] hover:border'>Pages to Read</Link></li>
        </>
      
    );
};

export default Links;