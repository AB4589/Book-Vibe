import React, { Suspense } from 'react';
import Book from './Book';


const Books = ({books}) => {
    console.log(books)
//   const [books, setBooks] = useState([]);
//   useEffect(() => {
//     fetch("Books.json")
//       .then((response) => response.json())
//       .then((data) => setBooks(data.books))
//       .catch((error) => console.error("Error:", error));
//   }, []);

    return (
        <>
          <h2 className='flex justify-center align-center font-bold'>Books</h2>
        <div className='grid grid-cols-3 gap-4'>
            <Suspense fallback={<span>Loading...</span>}>
                 {books?.map((book, index) => (
                <Book book={book} key={index}></Book>
            ))}
            </Suspense>
        </div>
        </>
    );
};

export default Books;