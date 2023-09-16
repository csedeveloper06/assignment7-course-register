import PropTypes from 'prop-types'

const Bookmark = ({bookmark,creditHours}) => {
    const {title} = bookmark;
    return (
        <div>
            {creditHours}
            <ol>
                <li>
                    <h1 className='desc text-sm leading-8'>{title}</h1>
                </li>
            </ol>
        </div>
    );
};

Bookmark .propTypes = {
    bookmark: PropTypes.object,
    creditHours:PropTypes.object
}

export default Bookmark;