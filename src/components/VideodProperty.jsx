import { } from 'react'
import face01 from '../assets/face01.png'

function VideodProperty() {
    return (
        <section className='py-[30px]'>
            <div className='flex flex-col md:flex-row md:my-16 max-w-full overflow-x-hidden mb-[75px]'>
                <div className='w-full md:w-[50%] min-h-[330px] md:h-[630px] md:pl-3 px-9 bg-[#fef3f0] flex justify-center items-center'>
                    <div data-aos='slide-right'>
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
                <div className='w-full md:w-[50%]'>
                    <div className='aspect-w-16 aspect-h-14'>
                        <iframe
                            width="720" height="630" src="https://www.youtube.com/embed/ARz0Nz2d-sg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="myFrame" allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideodProperty