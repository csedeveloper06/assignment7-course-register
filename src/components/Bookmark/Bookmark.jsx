import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <ol>
                <li>
                    {title}
                </li>
            </ol>
        </div>
    );
};

Bookmark .propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;