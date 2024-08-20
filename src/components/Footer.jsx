import { } from 'react'
import logo02 from '../assets/logo02.png'
import { FaLocationDot, FaYoutube } from 'react-icons/fa6'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaPinterest, FaTwitter, FaWifi } from 'react-icons/fa'
import { AiFillPrinter } from 'react-icons/ai'

function Footer() {
    return (
        <section>
            <div className='border-t-4 border-red-600 mx-7'>
                <div className='md:flex md:items-center px-1 md:px-16 mt-14'>
                    <div className='hidden md:block'>
                        <img className='bg-black ' src={logo02} alt='logo' />
                    </div>
                    <div className='md:ml-auto md:w-8/12 lg:w-6/12'>
                        <div className='w-fit'>
                            <div className='flex mb-5'>
                                <i className='text-[red] cursor-pointer pr-2 text-xl'><FaLocationDot /></i>
                                <span>345 Faulconer Drive, Suite 4.Charlottesville, CA, 12345</span>
                            </div>
                            <div className='flex'>
                                <div className='flex items-center'>
                                    <i className='text-[red] mr-3 text-xl ml-3 cursor-pointer'><FaPhoneAlt /></i>
                                    <span>(123)456-7890</span>
                                </div>
                                <div className='flex items-center ml-auto'>
                                    <i className='text-[red] mr-3 text-xl ml-3 cursor-pointer'><AiFillPrinter /></i>
                                    <span>(123)456-7890</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-7'>
                            <div className='text-[gray]'>
                                <p>Social Media</p>
                            </div>
                            <div className='flex items-center text-red-500 ml-auto w-2/3 sm:w-3/4 justify-between'>
                                <i className='text-xl cursor-pointer hover:text-red-400'><FaFacebook /></i>
                                <i className='text-xl cursor-pointer hover:text-red-400'><FaTwitter /></i>
                                <i className='text-xl cursor-pointer hover:text-red-400'><FaLinkedinIn /></i>
                                <i className='text-xl cursor-pointer hover:text-red-400'><FaYoutube /></i>
                                <i className='text-xl cursor-pointer hover:text-red-400'><FaInstagram /></i>
                                <i className='text-xl cursor-pointer hover:text-red-400'><FaGoogle /></i>
                                <i className='text-xl cursor-pointer hover:text-red-400'><FaPinterest /></i>
                                <i className='text-xl cursor-pointer hover:text-red-400'><FaWifi /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-gray-200 mt-12 pt-12 flex flex-col lg:flex-row mx-7 mb-9'>
                <div className='flex flex-col md:flex-row h-48 md:h-fit justify-between w-full lg:w-1/2'>
                    <div className='cursor-pointer'>ABOUT US</div>
                    <div className='cursor-pointer'>CONTACT US</div>
                    <div className='cursor-pointer'>HELP</div>
                    <div className='cursor-pointer'>PRIVACY POLICY</div>
                    <div className='cursor-pointer'>DISCLAIMER</div>
                </div>
                <div className='text-[gray] mt-8 text-center lg:text-left lg:mt-auto lg:ml-auto'>
                    <p>Copyright © 2020 Minimumlivingcost. All rights reserved</p>
                </div>
            </div>
        </section>
    )
}

export default Footer