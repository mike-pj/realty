import {} from 'react'
import image001 from '../assets/image001.jpeg'
import image002 from '../assets/image002.jpeg'
import image003 from '../assets/image003.jpeg'
import image004 from '../assets/image004.jpeg'
import image005 from '../assets/image005.jpeg'
import image006 from '../assets/image006.jpeg'
import { GiRotaryPhone } from "react-icons/gi";
import { GiBathtub } from "react-icons/gi";
import { IoIosSunny } from "react-icons/io";

function ListProperties() {
  return (
    <section className='bg-[#f3f2f2] py-9 px-4'>
            <div className='flex justify-between items-center px-[4%]'>
                <div>
                    <h1 className='text-[18px] lg:text-3xl font-bold pt-[2%]'>List of Properties</h1>
                    <div className="rounded border-b-4 w-[35%] border-b-red-600">
                    </div>
                </div>
                <div>
                    <button className='border-3 h-[40px] lg:h-[50px] rounded-md inline-block bg-red-600 text-white text-lg px-3'>View all property</button>
                </div>
            </div>
            <div className='flex flex-wrap justify-between items-center py-9 lg:mx-[5%]'>
                <div className='w-full px-6 md:w-1/2 lg:w-4/12 lg:flex justify-center items-center' data-aos="flip-left">
                    <div className='border-solid border-[#e5e4e4] border-[2px] rounded-[30px] bg-white mb-7'>
                        <img className='w-full h-[300px]' src= {image001} alt="user" />
                        <div className='px-6'>
                            <p className='mt-4 mb-6'>2578 Folsom Street, San Francisco, CA, 94110</p>
                            <p className='text-[#cfcdcd]'>Private Room</p>
                            <p className='text-[red] mb-3'>$1200/Month</p>
                        </div>
                        <div className='flex justify-center items-center w-full border-[#e5e4e4] border-t-[2px] rounded-b-[20px]'>
                            <div className='w-1/3 flex justify-center items-center gap-2'>
                                <i><GiRotaryPhone /></i>
                                <p>4</p>
                            </div>
                            <div className='w-1/3 flex justify-center items-center border-l-[2px] h-14 border-r-[2px] gap-2'>
                                <i><GiBathtub /></i>
                                <p>2</p>
                            </div>
                            <div className='w-1/3 flex justify-center items-center gap-2'>
                                <i><IoIosSunny /></i>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full px-6 md:w-1/2 lg:w-4/12 lg:flex justify-center items-center' data-aos="flip-left">
                    <div className='border-solid border-[#e5e4e4] border-[2px] rounded-[30px] bg-white mb-7'>
                        <img className='w-full h-[300px]' src= {image002} alt="user" />
                        <div className='px-6'>
                            <p className='mt-4 mb-6'>2578 Folsom Street, San Francisco, CA, 94110</p>
                            <p className='text-[#cfcdcd]'>Private Room</p>
                            <p className='text-[red] mb-3'>$1200/Month</p>
                        </div>
                        <div className='flex justify-center items-center w-full border-[#e5e4e4] border-t-[2px] rounded-b-[20px]'>
                            <div className='w-1/3 flex justify-center items-center gap-2'>
                                <i><GiRotaryPhone /></i>
                                <p>4</p>
                            </div>
                            <div className='w-1/3 flex justify-center items-center border-l-[2px] h-14 border-r-[2px] gap-2'>
                                <i><GiBathtub /></i>
                                <p>2</p>
                            </div>
                            <div className='w-1/3 flex justify-center items-center gap-2'>
                                <i><IoIosSunny /></i>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full px-6 md:w-1/2 lg:w-4/12 lg:flex justify-center items-center' data-aos="flip-left">
                    <div className='border-solid border-[#e5e4e4] border-[2px] rounded-[30px] bg-white mb-7'>
                        <img className='w-full h-[300px]' src= {image003} alt="user" />
                        <div className='px-6'>
                            <p className='mt-4 mb-6'>2578 Folsom Street, San Francisco, CA, 94110</p>
                            <p className='text-[#cfcdcd]'>Private Room</p>
                            <p className='text-[red] mb-3'>$1200/Month</p>
                        </div>
                        <div className='flex justify-center items-center w-full border-[#e5e4e4] border-t-[2px] rounded-b-[20px]'>
                            <div className='w-1/3 flex justify-center items-center gap-2'>
                                <i><GiRotaryPhone /></i>
                                <p>4</p>
                            </div>
                            <div className='w-1/3 flex justify-center items-center border-l-[2px] h-14 border-r-[2px] gap-2'>
                                <i><GiBathtub /></i>
                                <p>2</p>
                            </div>
                            <div className='w-1/3 flex justify-center items-center gap-2'>
                                <i><IoIosSunny /></i>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full px-6 md:w-1/2 lg:w-4/12 lg:flex justify-center items-center' data-aos="flip-left">
                    <div className='border-solid border-[#e5e4e4] border-[2px] rounded-[30px] bg-white mb-7'>
                        <img className='w-full h-[300px]' src= {image004} alt="user" />
                        <div className='px-6'>
                            <p className='mt-4 mb-6'>2578 Folsom Street, San Francisco, CA, 94110</p>
                            <p className='text-[#cfcdcd]'>Private Room</p>
                            <p className='text-[red] mb-3'>$1200/Month</p>
                        </div>
                        <div className='flex justify-center items-center w-full border-[#e5e4e4] border-t-[2px] rounded-b-[20px]'>
                            <div className='w-1/3 flex justify-center items-center gap-2'>
                                <i><GiRotaryPhone /></i>
                                <p>4</p>
                            </div>
                            <div className='w-1/3 flex justify-center items-center border-l-[2px] h-14 border-r-[2px] gap-2'>
                                <i><GiBathtub /></i>
                                <p>2</p>
                            </div>
                            <div className='w-1/3 flex justify-center items-center gap-2'>
                                <i><IoIosSunny /></i>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full px-6 md:w-1/2 lg:w-4/12 lg:flex justify-center items-center' data-aos="flip-left">
                    <div className='border-solid border-[#e5e4e4] border-[2px] rounded-[30px] bg-white mb-7'>
                        <img className='w-full h-[300px]' src= {image005} alt="user" />
                        <div className='px-6'>
                            <p className='mt-4 mb-6'>2578 Folsom Street, San Francisco, CA, 94110</p>
                            <p className='text-[#cfcdcd]'>Private Room</p>
                            <p className='text-[red] mb-3'>$1200/Month</p>
                        </div>
                        <div className='flex justify-center items-center w-full border-[#e5e4e4] border-t-[2px] rounded-b-[20px]'>
                            <div className='w-1/3 flex justify-center items-center gap-2'>
                                <i><GiRotaryPhone /></i>
                                <p>4</p>
                            </div>
                            <div className='w-1/3 flex justify-center items-center border-l-[2px] h-14 border-r-[2px] gap-2'>
                                <i><GiBathtub /></i>
                                <p>2</p>
                            </div>
                            <div className='w-1/3 flex justify-center items-center gap-2'>
                                <i><IoIosSunny /></i>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full px-6 md:w-1/2 lg:w-4/12 lg:flex justify-center items-center' data-aos="flip-left">
                    <div className='border-solid border-[#e5e4e4] border-[2px] rounded-[30px] bg-white mb-7'>
                        <img className='w-full h-[300px]' src= {image006} alt="user" />
                        <div className='px-6'>
                            <p className='mt-4 mb-6'>2578 Folsom Street, San Francisco, CA, 94110</p>
                            <p className='text-[#cfcdcd]'>Private Room</p>
                            <p className='text-[red] mb-3'>$1200/Month</p>
                        </div>
                        <div className='flex justify-center items-center w-full border-[#e5e4e4] border-t-[2px] rounded-b-[20px]'>
                            <div className='w-1/3 flex justify-center items-center gap-2'>
                                <i><GiRotaryPhone /></i>
                                <p>4</p>
                            </div>
                            <div className='w-1/3 flex justify-center items-center border-l-[2px] h-14 border-r-[2px] gap-2'>
                                <i><GiBathtub /></i>
                                <p>2</p>
                            </div>
                            <div className='w-1/3 flex justify-center items-center gap-2'>
                                <i><IoIosSunny /></i>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default ListProperties