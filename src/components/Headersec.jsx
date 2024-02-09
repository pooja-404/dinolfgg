import React from "react";
import { useState } from "react";
import twitr from '../assets/images/twiter.webp'
import insta from '../assets/images/insta.webp'
import discord from '../assets/images/discord.webp'
import HelicopterImg from "../assets/images/pilotImg.webp";
import CartoonImg1 from "../assets/images/CartoonImg1.webp";
import CartoonImg2 from "../assets/images/CartoonImg2.webp";

const Headersec = () => {
  const [nav, setNav] = useState(true);
  document.body.classList.toggle("max-lg:!overflow-hidden");

  return (
    <>
      <div className="bg-BgHeader lg:bg-BgSize bg-cover bg-center bg-repeat xl:min-h-screen sm:h-[730px] md:h-[874px] lg:h-[930px] h-[600px] relative">
        <img
          src={CartoonImg1}
          alt="CartoonImg1"
          className=" absolute right-[7%] bottom-[10%] lg:max-w-[211px] sm:max-w-[140px] max-w-[80px] z-[1] walking-img w-full"
        />
        <img
          src={CartoonImg2}
          alt="CartoonImg2"
          className=" absolute left-[50%] bottom-[18%] ImgAnimate sm:max-w-[131px] max-w-[40px] w-full"
        />
        <div className="container xl:max-w-[1156px] mx-auto xl:px-3 px-6 pt-[28px]">
          <div className=" flex justify-between items-center md:pt-[4px] py-[10px] md:pb-[5.43px] pl-6 pr-[7.42px] bg-white border-b-[4px] border-solid border-[black] rounded-[61.102px] ">
            <h1 className="ff-lucky font-normal cursor-pointer leading-[94%] drop-shadow-[0px_1.337px_0px_#000] sm:text-[39.125px] text-[24px]">
              <span className="text-[#FBA11D]">D</span>
              <span className="text-[#23AAAC]">i</span>
              <span className="text-[#D45B07]">n</span>
              <span className="text-[#8EC627]">o</span>
              <span className="text-[#FCCA2B]">L</span>
              <span className="text-[#8F78D2]">F</span>
              <span className="text-[#8EC627]">G</span>
            </h1>
            <div className="flex gap-[136px]">
              <ul
                className={`${nav ? "left-[-100%]" : "left-0"}
            max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:z-[7] bg-white max-lg:transition-all max-lg:ease-linear max-lg:duration-300 max-lg:min-h-screen max-lg:flex-col max-lg:justify-center flex gap-[28px] items-center`}
              >
                <li onClick={() => setNav(!nav)}>
                  <a
                    className="hover:after:w-[100%] font-chewy  after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear ff_chewy text-black text-[18px] font-normal leading-normal no-underline"
                    href="#About"
                  >
                    About
                  </a>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <a
                    className="hover:after:w-[100%] font-chewy  after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear ff_chewy text-black text-[18px] font-normal leading-normal no-underline"
                    href="#Tokenomic"
                  >
                    Tokenomic
                  </a>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <a
                    className="hover:after:w-[100%] font-chewy  after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear ff_chewy text-black text-[18px] font-normal leading-normal no-underline"
                    href="#Roadmap"
                  >
                    Roadmap
                  </a>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <a
                    className="hover:after:w-[100%] font-chewy  after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear ff_chewy text-black text-[18px] font-normal leading-normal no-underline"
                    href="#Faq"
                  >
                    FAQ
                  </a>
                </li>
                <li className="gap-2 items-center sm:hidden flex">
                  <a href="https://www.twitter.com" target="_blank">
                    <img src={twitr} alt="twitr" className=' hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#000] transition-all ease-linear duration-500 rounded-[50px] ' />
                  </a>
                  <a href="https://www.discord.com" target="_blank">
                    <img src={discord} alt="discord" className=' hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#000] transition-all ease-linear duration-500 rounded-[50px] ' />
                  </a>
                  <a href="https://www.instagram.com" target="_blank">
                    <img src={insta} alt="insta" className=' hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#000] transition-all ease-linear duration-500 rounded-[50px] ' />
                  </a>
                </li>
                <li className="lg:hidden">
                  <a
                    href=""
                    className="bg-[url(./assets/images/joinbtnbg.webp)] bg-cover bg-no-repeat text-black font-chewy text-[18px] font-normal leading-normal px-9 pt-[10px] pb-[17px]  hover:text-white transition-all duration-500 ease-in-out"
                  >
                    Join Now
                  </a>

                </li>

              </ul>
              <ul className="gap-2 items-center sm:flex hidden">
                <li>
                  <a href="https://www.twitter.com" target="_blank">
                    <img src={twitr} alt="twitr" className=' hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#000] transition-all ease-linear duration-500 rounded-[50px] ' />
                  </a>
                </li>
                <li>
                  <a href="https://www.discord.com" target="_blank">
                    <img src={discord} alt="discord" className=' hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#000] transition-all ease-linear duration-500 rounded-[50px] ' />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank">
                    <img src={insta} alt="insta" className=' hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#000] transition-all ease-linear duration-500 rounded-[50px] ' />
                  </a>
                </li>
                <li className="lg:block">
                  <a
                    href=""
                    className="bg-[url(./assets/images/joinbtnbg.webp)] bg-cover bg-no-repeat text-black font-chewy text-[18px] font-normal leading-normal px-9 pt-[10px] pb-[17px] lg:block hidden hover:text-white transition-all duration-500 ease-in-out"
                  >
                    Join Now
                  </a>
                </li>
              </ul>
            </div>
            <div
              onClick={() => setNav(!nav)}
              className="lg:hidden w-[27px] h-[21px] mr-[17px] relative z-[7] flex justify-between flex-col"
            >
              <span
                className={`${nav ? "" : "rotate-[50deg] translate-y-[15px]"
                  } bg-black h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${nav ? "" : "hidden"
                  } bg-black h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${nav ? "" : "rotate-[-50deg] translate-y-[-50%]"
                  } bg-black h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col-reverse items-center flex-wrap sm:pt-[83px] pt-[32px]">
            <div className="sm:w-5/12 w-full pt-[32px] sm:pt-0 flex items-end justify-center sm:justify-start">
              <img
                src={HelicopterImg}
                alt="HelicopterImg"
                className="w-full sm:max-w-[394.14px] helo-header max-w-[250px]"
                data-aos="fade-right"
              />
            </div>
            <div className="sm:w-7/12 w-full flex justify-center">
              <h1
                className="text-[#FBA11D]  leading-[90%] text-center lg:max-w-[398px] drop-shadow-[0px_6px_0px_#000] ff-lucky font-normal lg:text-[175.636px] md:text-[130px] sm:text-[100px] text-[64px] uppercase"
                data-aos="fade-left"
              >
                <span className="sm:block">
                  D<span className="text-[#23AAAC]">I</span>
                  <span className="text-[#D45B07]">N</span>
                  <span className="text-[#8EC627]">O</span>
                </span>
                <span className="text-[#8EC627]">L</span>
                <span className="text-[#FCCA2B]">F</span>
                <span className="text-[#8F78D2]">G</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headersec;
