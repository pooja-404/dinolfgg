import { useState, useEffect } from 'react';

function Backtotop() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        isVisible &&
        <div onClick={scrollToTop} className=' overflow-hidden relative z-20'>
                <button className="bg-[#FBA11D] group duration-300 hover:scale-95 hover:bg-black fixed bottom-5 right-3 sm:right-5 rounded-full p-3 shadow-[0_0_14px_9px_#FBA11D]  ">
                    <span><svg className="h-4 w-4 group-hover:h-8 group-hover:w-8 duration-300 group-hover:text-white sm:w-6 sm:h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
            </svg></span></button>
        </div>
    );
}

export default Backtotop;