import React from 'react';
import boyImage from '../../../assect/boy.png'
import BoyBg from '../../../assect/BoyBg.png'
import "@fontsource/nunito";
import { FaUsers, FaThumbsUp } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { SiGitbook } from "react-icons/si";
import { MdCloudDone } from "react-icons/md";

const Home = () => {
    return (
        <div className='relative w-[100vw] lg:h-[90vh] md:px-10 px-2 my-10'>
            <div style={{ fontFamily: 'Nunito' }} className=' lg:flex  items-center justify-between h-full overflow-hidden'>
                <div className=' lg:w-[50%] w-full pl-10 pr-16'>
                    <h1 className='xl:text-7xl md:text-6xl text-4xl font-extrabold mb-10'>Learning made<br /> easy and Fun</h1>
                    <p className=' text-lg text-justify'>It's time to start your kids learning together with fun. share your gratitude and exprience by sending. It's time to start your kids learning together with fun. share your gratitude and exprience by sendingIt's time to start your kids learning together with fun. share your gratitude and exprience by sending</p>
                    <button className=' shadow-lg lg:shadow-none mt-10 bg-[#E8FAD7] text-black px-8 pt-[10px] pb-[8px] rounded text-lg font-bold flex items-center'>Get Start <BiRightArrowAlt className=' animate-pulse  text-2xl ml-4' /></button>
                </div>
                <div className='lg:w-[50%] lg:mt-0 mt-28  w-full flex items-center '>
                    <img className=' absolute z-[-1] top-0 right-0' src={BoyBg} alt="Boy Bg" />
                    <img className=' z-30 xl:px-28' src={boyImage} alt="Boy Image" />

                    <div className=' hidden  absolute md:bottom-[30%] lg:right-[35%]  z-40 bg-white shadow-xl  p-4 rounded md:flex items-center '>
                        <FaUsers className='  bg-[#E8FAD7] text-lime-600 h-10 w-10 p-2 rounded-full' />
                        <div className='ml-5'>
                            <h1 className=' text-2xl font-bold text-lime-900 text-left'>1205+</h1>
                            <p className=' text-gray-500'>Active Students</p>
                        </div>
                    </div>

                    <div className='hidden absolute lg:top-[30%] md:top-[43%] top-[55%] right-[5%]  bg-white shadow-xl xl:z-0 lg:z-40  p-4 rounded md:flex items-center '>
                        <SiGitbook className='  bg-[#E8FAD7] text-lime-600 h-10 w-10 p-2 rounded-full' />
                        <div className='ml-5'>
                            <h1 className=' text-2xl font-bold text-lime-900 text-left'>60+</h1>
                            <p className=' text-gray-500'>Interactive Class</p>
                        </div>
                    </div>

                    <div className='hidden absolute lg:top-[15%] md:top-[40%] top-[52%] lg:right-[25%] right-[50%]  bg-white shadow-xl  p-4 rounded md:flex items-center '>
                        <MdCloudDone className='  bg-[#E8FAD7] text-lime-600 h-10 w-10 p-2 rounded-full' />
                        <div className='ml-5'>
                            <p className=' text-gray-500 text-left'>Largest Collections</p>
                            <p className=' text-gray-500 text-left'>Expert Teachers</p>
                        </div>
                    </div>

                    <div className='hidden absolute lg:bottom-[20%] md:bottom-[15%] bottom-[5%] right-[10%] z-40 bg-white shadow-xl  p-4 rounded md:flex items-center '>
                        <FaThumbsUp className='  bg-[#E8FAD7] text-lime-600 h-10 w-10 p-2 rounded-full' />
                        <div className='ml-5'>
                            <p className=' text-left text-gray-500'>Unlimited Quiz</p>
                            <p className=' text-gray-500 text-left'>New Update</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;