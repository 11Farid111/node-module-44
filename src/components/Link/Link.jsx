import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className='mr-12 items-center' >
            <a href={route.path}> {route.name}</a>
        </li>
    );
};
 Link.propTypes = {
    route:PropTypes.object
 }
export default Link;