import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';





function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [creditHours,setCreditHours] = useState(0);


  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);

   
  }

  const handleAddToCredits = time =>{
    const newCreditHours = creditHours + time;
    setCreditHours (newCreditHours);
  }


  return (
    <>
     <Header></Header>
     <div className='flex justify-evenly'>
        <Blogs handleAddToBookmark = {handleAddToBookmark}
              handleAddToCredits = {handleAddToCredits}></Blogs>
        <Bookmarks bookmarks={bookmarks} creditHours ={creditHours}></Bookmarks>
      </div>
    </>
  )
}

export default App
