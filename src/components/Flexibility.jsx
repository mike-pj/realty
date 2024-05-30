import {} from 'react'
import image007 from '../assets/image007.png'
import image008 from '../assets/image008.png'
import image009 from '../assets/image009.png'
import image0010 from '../assets/image0010.png'


function Flexibility() {
  return (
    <section className='bg-white py-[40px]'>
        <div className='flex justify-center items-center'>
            <div className='w-1/2'>
                <div className='w-full flex justify-center items-center gap-6 relative'>
                    <img className='' src= {image007} alt="user" />
                        <div className='absolute text-white left-[160px] top-0 pt-4'>
                            Flexible Leases
                        </div>
                    <img className='mt-[60px]' src={image008} alt="user" />
                    <div className='absolute text-white right-[115px] top-10 pt-9'>
                            7-Day Happiness Guaranteed
                        </div>
                </div>
                <div className='w-full flex justify-center items-center gap-6 relative'>
                    <img className='mt-[-38px]' src= {image009} alt="user" />
                    <div className='absolute text-white left-[90px] top-5 pt-9'>
                            Monthly House Cleaning
                        </div>
                    <img className='mt-[30px]' src= {image0010} alt="user" />
                    <div className='absolute text-white right-[140px] top-10 pt-4'>
                            Choose Your Own Roommate
                        </div>
                </div>
            </div>

            <div className='w-1/2 px-2 mt-[-20px]'>
                <h1 className='text-4xl font-bold mb-[100px]'>Flexibility and options to suit your lifestyle.</h1>
                <p className='w-[80%] mt-[-70px] mb-5'>
                     You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.
                </p>
                <div>
                    <button className='border-3 h-[50px] rounded-md inline-block bg-red-600 text-white text-lg px-3'>Search Rooms</button>
                </div>
            </div>
        </div>
        
        <div className='w-full flex justify-center items-center my-[40px]'>
            <p>
                Your Property With Us And Be Confident That Your Room Willed Be Filled Out!
            </p>
        </div>
    </section>
    
  )
}

export default Flexibility