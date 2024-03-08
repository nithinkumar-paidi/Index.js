import React, { useState } from 'react';

const Clickevent = () => {
    const [number, setNumber] = useState(0);
    
    const Increment = () => {
        setNumber(number + 1);
    };
    const Decrement = () => {
        if(number>1)
        setNumber(number - 1);
    };
    return (
        <div>
            <div>
                <h2>{number}</h2>
            </div>
            <div>
              <div><img src="pics folder/download.jpg" alt=""/></div>
                <button onClick={Increment}>Increment</button>
                <button onClick={Decrement}>Decrement</button>
            </div>
        </div>
    );
};

export default Clickevent;
