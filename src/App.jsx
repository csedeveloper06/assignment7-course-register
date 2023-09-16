import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';





function App() {
  const [bookmarks,setBookmarks] = useState([]);


  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }


  return (
    <>
     <Header></Header>
     <div className='flex justify-evenly'>
        <Blogs handleAddToBookmark = {handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
