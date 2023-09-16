import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,creditHours}) => {
    return (
        <div>
            { 
                <div className="flex-col p-3 bg-white w-80 h-96 shadow-xl rounded-2xl">
                    <div className="border-b-2">
                        <h1 className="text-lg font-bold text-blue-500 
                            pb-2">Credit Hours Remaining: </h1>
                    </div>
                    <div className="border-b-2">
                        <h2 className="text-xl font-bold p-2">Course Names:</h2>
                        {
                            bookmarks.map(bookmark => <Bookmark 
                                key={bookmark.id}
                                bookmark={bookmark}
                                ></Bookmark>)
                        }
                    </div>
                    <div className="border-b-2">
                        <h2 className="desc text-sm font-medium p-2">Total Credit:  {creditHours}</h2>
                    </div>
                </div> 
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    creditHours:PropTypes.number
}

export default Bookmarks;