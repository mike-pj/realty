import { } from 'react'
import logo from '../assets/logo.png'
import bgimage from '../assets/bgimage.jpeg'
import map from '../assets/map.png'
import { FaSearch } from 'react-icons/fa'

function Header() {
  return (
    <section className='relative'>
        <div className='mx-[7%] border-b-2'>
            <img className='py-5' src= {logo} alt='logo' />
        </div>
        <img className='absolute top-0 w-full z-[-1] brightness-50 h-[700px]' src= {bgimage} alt='bgimage' />

        <div className="flex flex-col md:flex-row justify-between items-center mx-[7%] my-[7%]">
            <div className='text-white w-full sm:text-[18px] md:text-[30px] lg:text-[30px] lg:w-6/12'>
                <h1 className='w-[100%] text-center lg:text-start lg:text-4xl mb-16 md:w-[80%] -mt-4 md:mt-[-90px] lg:w-[499px] font-sans font-bold'>
                    The Most Affordable Place To 
                    Stay In The San Francisco Bay Area
                </h1>
            </div>
            <div className='md:mt-9 lg:w-6/12 flex justify-end'>
                <div className='mb-24'>
                    <img src= {map} alt="" className='w-[500px] sm:w-[800px] h-[300px] -mt-8 lg:-mt-16 md:w-[700px] md:h-[300px] lg:w-[400px]'/>         
                    <div className='rounded-md bg-white lg:h-[90px] h-[70px] md:h-[80px] flex justify-center items-center mt-10 sm:mb-[40px] md:mb-[60px] px-4'>
                        <select className='w-[45%]' name="" id="">
                            <option value="">All Type</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>

                        <select className='w-[45%]' name="" id="">
                            <option value="">Neighbourhood</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>

                        <button className='bg-[blue] rounded-md w-[11%] ml-5 h-[30px] flex items-center justify-center text-white'><FaSearch /></button>
                    </div>
                </div>  
            </div>
        </div>
    </section>
    
  )
}

export default Header
