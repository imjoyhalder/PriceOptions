import PropTypes from 'prop-types'
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const PriceOption = ({option}) => {
    const {features,price_per_month,name} = option
    return (
        <div>
            <div className='border pt-4 pb-2 rounded-2xl bg-blue-500 shadow-xl flex flex-col '>
                <h1 className='text-center text-4xl font-bold'>{name}</h1>
                <div className='pl-8 pt-2'>
                    <h1 className='text-3xl font-bold text-center'>{price_per_month}$</h1>
                    <div>
                        <h1 className='text-2xl font-bold '>Features</h1>
                        <ol className='text-sm '>
                            {
                                features.map((feature,idx)=> <li className='flex gap-1 items-center text-sm'><IoCheckmarkCircleSharp key={idx} className='text-lg text-green-500'/>{feature}</li>)
                            }
                        </ol>
                        <div className='pt-3'>
                            <button className="btn btn-success rounded-xl p-5 text-lg font-bold">Buy Now</button>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
};

PriceOption.propTypes ={
    option: PropTypes.object
}

export default PriceOption;