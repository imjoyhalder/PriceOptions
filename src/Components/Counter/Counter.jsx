import React, { useState } from 'react';

const Counter = () => {
    
    const [count, setCount] = useState(0)
    
    const handleCount = ()=>{
        setCount(count+1)
    }

    const handleMinus = () =>{
        if(count===0){
            alert('Here minimum number is 0')
            return
        }
        else{
            setCount(count-1)
        }
        
    }
    
    return (
        <div className='w-5/12 mx-auto'>
            <div className='flex flex-col'>
                <h1 className='mb-4 text-4xl font-bold text-center'>{count}</h1>
                <button onClick={handleCount} className='bg-red-600 btn'>Add</button>
                <button onClick={handleMinus} className='bg-red-600 btn'>Minus</button>
            </div>
        </div>
    );
};

export default Counter;