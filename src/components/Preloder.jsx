import React, { useEffect, useState } from "react";
import preloder2 from '../assets/images/preloader.webp'

const Preloder = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 4000);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <div className="overflow-x-clip">
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-[#0a4740] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center">
                    <div className="bg-[#0a4740] ">
                        <div className="animate-bounce-slow  flex  justify-center items-center">
                            <img src={preloder2} alt="AboutLayor" className="w-[50%] h-[50%]"/>
                            
                        </div>
                        <h1 className="ff-lucky font-normal flex justify-center items-center cursor-pointer leading-[94%] drop-shadow-[0px_1.337px_0px_#000] sm:text-[39.125px] text-[24px]">
                            <span className="text-[#FBA11D]">D</span>
                            <span className="text-[#23AAAC]">i</span>
                            <span className="text-[#D45B07]">n</span>
                            <span className="text-[#8EC627]">o</span>
                            <span className="text-[#FCCA2B]">L</span>
                            <span className="text-[#8F78D2]">F</span>
                            <span className="text-[#8EC627]">G</span>
                        </h1>
                    </div>;
                </section>
            ) : (
                ""
            )}
        </div>
    )
}

export default Preloder