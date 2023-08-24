import React, {useState, useEffect} from "react";
import { FaAngleDoubleUp } from 'react-icons/fa';    // requires npm install react-icons --save  

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    // once scroll downwards (y-axis) surpasses 300px, set the button to appear
    useEffect( () => {
        window.addEventListener('scroll', () => {
            if(window.screenY > 300) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        })
    }, []); 

    // scroll back to the top smoothly
    const scrollTop = () => {
        window.scrollTo({
            top: 0, 
            left: 0,
            behavior: "smooth", 
        });
    }

    return (
        <div> {showScrollTopButton && <FaAngleDoubleUp className="scroll-top-pos" onClick={scrollTop}/>} </div>
    );
}

export default ScrollToTop; 