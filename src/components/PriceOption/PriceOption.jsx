import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {price, name ,features} = option;
    return (
        <div className='bg-blue-500 rounded-lg p-4 flex flex-col text-white '>
            <h2 className='text-center'>
                <span className='text-4xl font-extrabold'>{price}</span>
                <span className='text-2xl'> /mon</span>
            </h2>
            <h4 className='text-4xl font-bold text-center my-4'>{name}</h4>
            {
                features.map((feature,index) => <Feature key={index} feature ={feature}></Feature>)
            }
            <button className='mt-12 bg-green-500 w-full py-2 rounded-lg font-bold hover:bg-green-900'>Buy Now</button>
        </div>
    )
}
PriceOption .propTypes ={
    option:PropTypes.object
}
export default PriceOption;