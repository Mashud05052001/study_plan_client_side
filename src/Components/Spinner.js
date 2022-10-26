import React from 'react';
import { ScaleLoader } from 'react-spinners';


const Spinner = () => {
    return (
        <div className="sweet-loading">
            <ScaleLoader
                color="#1b689c"
                height={35}
                loading
                margin={3}
                speedMultiplier={0.6}
                width={10}
            />
        </div>
    );
};

export default Spinner;