import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex gap-4 items-center'><FaCheckCircle className='bg-green-500 rounded-full'></FaCheckCircle>{feature}
            </p>
        </div>
    );
};
Feature.propTypes ={
    feature:PropTypes.string
}
export default Feature;