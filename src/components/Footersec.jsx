import React from "react";
import FooterImg from "../assets/images/FooterImg.webp";
import CartoonImg1 from "../assets/images/CartoonImg1.webp";
import {  FooterDiscord, FooterInstagram, FooterTwitter, } from "./Icon";



const Footer = () => {
    return (
        <>
            <div className="relative xl:pt-[249px] sm:pt-[100px] pt-[40px]">
                <img
                    src={CartoonImg1}
                    alt="CartoonImg1"
                    className=" absolute w-full sm:max-w-[190px] max-w-[120px] right-[6%] bottom-[10px] walking-img z-[1]"
                />
                <img
                    src={FooterImg}
                    alt="FooterImg"
                    className=" absolute bottom-0 w-full lg:h-[341px]"
                />
                <div className="relative z-[1] container xl:max-w-[1038px] mx-auto xl:px-3 px-6">
                    <div className=" flex flex-col justify-center items-center sm:pb-[270px] pb-[175px]">
                        <a href="">
                            <h2 className="text-[#FBA11D] ff-lucky cursor-pointer drop-shadow-[0px_2.745px_0px_#000] leading-[95%] sm:text-[80.366px] text-[60px] font-normal text-center lg:mb-[33px] sm:mb-[20px] mb-[5px] ff_luckydino">
                                D<span className="text-[#23AAAC]">i</span>
                                <span className="text-[#D45B07]">n</span>
                                <span className="text-[#8EC627]">o</span>
                                <span className="text-[#FCCA2B] uppercase">L</span>
                                <span className="text-[#8F78D2] uppercase">F</span>
                                <span className="text-[#8EC627] uppercase">G</span>
                            </h2>
                        </a>
                        <p className="text-white text-center lg:max-w-[376px] sm:pb-[33px] pb-[18px] font-bal text-[14px] font-normal">
                            Sed tempus pretium est, vestibulum dapibus mauris viverra id.
                            Curabitur feugiat porta lorem,{" "}
                        </p>
                        <div className="flex gap-2">
                            <a href="https://www.twitter.com" target="_blank" className="hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#fff] transition-all ease-linear duration-500 rounded-[50px]"><FooterTwitter />
                            </a>
                            <a href="https://discord.com/" target="_blank" className="hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#fff] transition-all ease-linear duration-500 rounded-[50px]"><FooterDiscord />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#fff] transition-all ease-linear duration-500 rounded-[50px]"><FooterInstagram/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
