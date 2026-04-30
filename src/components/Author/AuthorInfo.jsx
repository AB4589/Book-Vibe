import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router';

const AuthorInfo = ({author}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure >
                <img
                src={author.authorImage}
                alt="Shoes" className='w-32 aspect-square rounded-full object-cover'/>
            </figure>
            <div className="card-body">
               <div>
                 <h2 className="card-title justify-center">Author Name</h2>
                 <h2 className='flex font-medium justify-center text-3xl'>{author.author}</h2>
                <h3 className='card-title justify-center font-base text-sm my-2.5'>Type: {author.category}</h3>
               </div>
                <div className="card-actions justify-between">
                
                
                <Link to={author.authorLinkedin}>
                <CiLinkedin size={30}/>
                </Link>
                <Link to={author.authorX}>
                 <FaSquareXTwitter size={30}/>
                </Link>
                <Link to={author.authorInstagram}>
                <FaInstagram size={30}/>
                </Link>
                <Link to={author.authorFacebook}>
                 <FaFacebookSquare size={30}/>
                </Link>
                
                </div>
            </div>
        </div>
    );
};

export default AuthorInfo;