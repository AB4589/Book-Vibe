import { toast } from 'react-toastify';

const getWishList = () => {
    const storedBookSTR = localStorage.getItem("wishList");

    if (storedBookSTR){
        const storedBookSData = JSON.parse(storedBookSTR);
        return storedBookSData;
    }
    else {
        return [];
    }
}
const addToWishList = (id) => {
   const storedBookSData =  getWishList();

   if( storedBookSData.includes(id)){
    toast('Id already exist!');

    // alert("id already exist")
    //  () => toast('id already exist!')
   }
   else{
    storedBookSData.push(id);
    const data = JSON.stringify(storedBookSData);
    localStorage.setItem("wishList", data);
     toast('Added to WishList.')
    console.log((storedBookSData))
   }
}

export {addToWishList, getWishList};