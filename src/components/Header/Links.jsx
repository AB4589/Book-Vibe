import React from 'react';
import { Link } from 'react-router';

const Links = ({auth}) => {
    return (
        <>
            <li><Link to={'/'} className='hover:text-[#23BE0A] hover:border'>Home</Link></li>
            <li><Link to={'/book-list'} className='hover:text-[#23BE0A] hover:border'>Listed Books</Link></li>
            <li><Link to={'/pages-to-read'} className='hover:text-[#23BE0A] hover:border'>Pages to Read</Link></li>
            {
                auth && 
            <>
            <li><Link to={'/author'} className='hover:text-[#23BE0A] hover:border'>Author</Link></li>
            </>
            }
            <li><Link to={'/contact-us'} className='hover:text-[#23BE0A] hover:border'>Contact Us</Link></li>
        </>
      
    );
};

export default Links;