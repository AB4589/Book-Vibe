const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");

    if (storedBookSTR){
        const storedBookSData = JSON.parse(storedBookSTR);
        return storedBookSData;
    }
    else {
        return [];
    }
}
const addToStoredDB = (id) => {
   const storedBookSData =  getStoredBook();

   if( storedBookSData.includes(id)){
    alert("id already exist")
   }
   else{
    storedBookSData.push(id);
    const data = JSON.stringify(storedBookSData);
    localStorage.setItem("readList", data);
    console.log((storedBookSData))

   }
}

export {addToStoredDB, getStoredBook};