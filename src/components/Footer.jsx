import {} from 'react'
import logo02 from '../assets/logo02.png'
import { FaLocationDot, FaYoutube } from 'react-icons/fa6'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaPinterest, FaTwitter, FaWifi } from 'react-icons/fa'
import { AiFillPrinter } from 'react-icons/ai'

function Footer() {
  return (
    <section >
        <div className='flex border-t-4 border-red-600 mx-7 py-9'>
            <div className='w-1/2 flex justify-center items-center'>
                <img className='bg-black' src= {logo02} alt='logo' />
            </div>
            <div className='w-1/2'>
                    <p className='flex justify-center items-center mb-3 gap-2'><i className='text-[red] cursor-pointer'><FaLocationDot /></i>345 Faulconer Drive, Suite 4.Charlottesville, CA, 12345</p>
                
                <div className='flex justify-center items-center gap-[140px] mb-6'>
                    <p className='flex justify-center items-center mb-3 gap-2'><i className='text-[red] cursor-pointer'><FaPhoneAlt /></i>(123)456-7890</p>

                    <p className='flex justify-center items-center mb-3 gap-2'><i className='text-[red] cursor-pointer'><AiFillPrinter /></i>(123)456-7890</p>
                </div>

                <div className='flex justify-center items-center gap-[50px]'>
                    <div className='text-[gray] flex justify-center items-center gap-2'>
                        <p>Social Media</p>
                    </div>
                    <div className='flex justify-center items-center gap-9'>
                        <i className='text-[red] text-2xl cursor-pointer hover:text-red-400'><FaFacebook /></i>
                        <i className='text-[red] text-2xl cursor-pointer hover:text-red-400'><FaTwitter /></i>
                        <i className='text-[red] text-2xl cursor-pointer hover:text-red-400'><FaLinkedinIn /></i>
                        <i className='text-[red] text-2xl cursor-pointer hover:text-red-400'><FaYoutube /></i>
                        <i className='text-[red] text-2xl cursor-pointer hover:text-red-400'><FaInstagram /></i>
                        <i className='text-[red] text-2xl cursor-pointer hover:text-red-400'><FaGoogle /></i>
                        <i className='text-[red] text-2xl cursor-pointer hover:text-red-400'><FaPinterest /></i>
                        <i className='text-[red] text-2xl cursor-pointer hover:text-red-400'><FaWifi /></i>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex border-t-2 border-gray-200 mx-7 py-7'></div>

        <div className='flex justify-center items-center px-2 gap-96 mb-14'>
            <ul className='flex justify-center items-center gap-6'>
                <li className='cursor-pointer'>ABOUT US</li>
                <li className='cursor-pointer'>CONTACT US</li>
                <li className='cursor-pointer'>HELP</li>
                <li className='cursor-pointer'>PRIVACY POLICY</li>
                <li className='cursor-pointer'>DISCLAIMER</li>
            </ul>
            <div className='text-[gray]'>
                <p>Copyright © 2020 Minimumlivingcost. All rights reserved</p>
            </div>
        </div>
       
    </section>
  )
}

export default Footer