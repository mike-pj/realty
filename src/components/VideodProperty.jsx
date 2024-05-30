import { } from 'react'
import face01 from '../assets/face01.png'

function VideodProperty() {
    return (
        <section className='py-[30px]'>
            <div className='w-full flex mb-[75px]'>
                <div className='w-[50%] h-[630px] px-9 bg-[#fef3f0] flex justify-center items-center'>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
                        </p>
                        <div className='flex gap-5 mt-6'>
                            <div>
                                <img src={face01} alt="face" />
                            </div>
                            <div className='mt-2'>
                                <p className='text-[red]'>Harry Wilson</p>
                                <p>Property Owner</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] bg-emerald-200'>
                <iframe 
                    width="720" height="630" src="https://www.youtube.com/embed/ARz0Nz2d-sg" title="OUR NEW EMPTY HOUSE TOUR!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
                </div>
            </div>
        </section>
    )
}

export default VideodProperty