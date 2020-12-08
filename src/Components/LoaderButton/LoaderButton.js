import React from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './LoaderButton.css'


const LoaderButton = () =>{


    return(
        <div className="loaderContainer">
           <Loader
                type="ThreeDots"
                color="#32e0c4"
                height={80}
                width={80}
                // timeout={3000} //3 secs
            />
        </div>
    )
}
export default LoaderButton;