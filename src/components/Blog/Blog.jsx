import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/bs';
import { PiCurrencyDollarLight } from 'react-icons/pi';


const Blog = ({blog,handleAddToBookmark}) => {
    const{img,title,details,credit,price} = blog;

    return (
        
        <div className='bg-white p-3 rounded-xl w-72 shadow-2xl'>
            <div className="card-img p-2">
                <img className='w-64 h-40' src={img} alt="" />
            </div>
            <div className="card-body flex flex-col justify-center">
                <h3 className='text-sm font-semibold text-center'>
                    {title}
                </h3>
                <p className='desc text-xs leading-6'>
                    { details }
                </p>
                <div className='flex gap-3 text-xs'>
                    <span className='text-xl'><PiCurrencyDollarLight></PiCurrencyDollarLight></span>
                    <h4 className='desc text-sm'>
                        Price: {price} 
                    </h4>
                    
                    <button className='text-xl'><BsBook></BsBook></button>
                    <h4 className='desc text-sm'>
                        Credit: {credit}hr
                    </h4>
                    </div>
                    <button 
                        onClick={() => handleAddToBookmark(blog)} 
                        className='bg-blue-500 text-white rounded-lg h-10 m-3'>Select</button>
            </div>
        </div>
     );
};

Blog.propTypes = {
         blog: PropTypes.object.isRequired,
         handleAddToBookmark: PropTypes.func
     }

export default Blog;