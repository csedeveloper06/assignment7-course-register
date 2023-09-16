import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';





function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [creditHours,setCreditHours] = useState(0);
  const[remainingHrs,setRemainingHrs] = useState(20);


  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);

   
  }

  const handleAddToCredits = time=>{
    const newCreditHours = creditHours + time;
    setCreditHours (newCreditHours);
    
  }

  const handleAddRemainingHrs = (remain) => {
    const newRemainingHrs = remainingHrs - remain;
    setRemainingHrs (newRemainingHrs);
  }


  return (
    <>
     <Header></Header>
     <div className='flex justify-evenly'>
        <Blogs handleAddToBookmark = {handleAddToBookmark}
              handleAddToCredits = {handleAddToCredits}
              handleAddRemainingHrs = {handleAddRemainingHrs}></Blogs>

        <Bookmarks bookmarks={bookmarks} 
                  creditHours ={creditHours}
                  remainingHrs = {remainingHrs}></Bookmarks>
      </div>
    </>
  )
}

export default App
