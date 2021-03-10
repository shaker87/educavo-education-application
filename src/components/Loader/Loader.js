import React from 'react';
import preLogo from '../../images/pre-logo1.png';

const Loader = () => {
    return (
        <>
            <div id="loader" class="loader orange-color">
                <div class="loader-container">
                    <div class='loader-icon'>
                        <img src={preLogo} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loader;