import React, { useState } from 'react'

export default function Form() {
    const [formDetails, setformDetails] = useState({
        name: "",
        address: "",
        unit_number: "",
        city: "",
        state: "",
        room_type: "",
        price: "",
        description: "",
        images: ""
    })

    function updateForm (e){
        const {name, value} = e.target

        setformDetails(prev => {
            return {...prev, [name]: value}
        })
    }
    return (
        <section className='bg-white mb-[5%]'>
            <div className='w-[80%] mx-auto flex justify-center items-center border shadow-2xl'>
                <form action="" className='w-[90%] mx-auto py-[5%]'>
                    <h1 className='text-[red] text-4xl text-center mb-10'>Add A New Property</h1>
                    <div className='w-full flex flex-wrap justify-center items-center ml-4'>
                        <div className='w-1/3 mb-8'>
                            <label className='font-bold' htmlFor="">Name<span className='text-[red]'>*</span></label>
                            <input
                                type="text"
                                name="name"
                                id=""
                                required
                                placeholder="Enter Name"
                                value={formDetails.name}
                                className='p-2 border-2 bg-[#d2d1d1] border-red-600 rounded-[10px] block w-[96%] h-10 mt-2'
                                onChange= {updateForm}
                            /> 
                            <p className='text-[10px] text-red-600'>name should contain at least three letters</p>
                        </div>
                        <div className='w-1/3 mb-8'>
                            <label className='font-bold' htmlFor="">Address<span className='text-[red]'>*</span></label>
                            <input
                                type="text"
                                name="address"
                                id=""
                                placeholder="Enter Address"
                                value={formDetails.address}
                                className='p-2 border-2 border-[red] bg-[#d2d1d1] rounded-[10px] block w-[96%] h-10 mt-2'
                                onChange= {updateForm}
                            />
                            <p className='text-[10px] text-red-600'>address should contain at least 3 characters</p>
                        </div>
                        <div className='w-1/3 mb-8'>
                            <label className='font-bold' htmlFor="">Unit Number<span className='text-[red]'>*</span></label>
                            <input
                                type="text"
                                name="unit_number"
                                id=""
                                placeholder="Enter Unit"
                                value={formDetails.unit_number}
                                className='p-2 border-2 border-[red] bg-[#d2d1d1] rounded-[10px] block w-[96%] h-10 mt-2'
                                onChange= {updateForm}
                            />
                            <p className='text-[10px] text-red-600'>Input valid unit number</p>
                        </div>
                        <div className='w-1/3 mb-8'>
                            <h1 className='font-bold'>City<span className='text-[red]'>*</span></h1>
                                <select className='p-2 border-2 border-[red] bg-[#d2d1d1] rounded-[10px] block w-[96%] h-10 mt-2' name="city" id="">
                                    <option value={formDetails.city}>Select City</option>
                                    <option value={formDetails.city}>Lagos Mainland</option>
                                    <option value={formDetails.city}>Aba</option>
                                </select>
                                <p className='text-[10px] text-red-600'>Select Option</p>
                        </div>
                        <div className='w-1/3 mb-8'>
                            <h1 className='font-bold'>State<span className='text-[red]'>*</span></h1>
                                <select className='p-2 border-2 border-[red] bg-[#d2d1d1] rounded-[10px] block w-[96%] h-10 mt-2' name="city" id="">
                                    <option value={formDetails.state}>Select State</option>
                                    <option value={formDetails.state}>Lagos</option>
                                    <option value={formDetails.state}>Abia</option>
                                </select>
                                <p className='text-[10px] text-red-600'>Select Option</p>
                        </div>
                        <div className='w-1/3 mb-8'>
                            <h1 className='font-bold'>Room Type<span className='text-[red]'>*</span></h1>
                                <select className='p-2 border-2 border-[red] bg-[#d2d1d1] rounded-[10px] block w-[96%] h-10 mt-2' name="city" id="">
                                    <option value={formDetails.room_type}>Select Room Type</option>
                                    <option value={formDetails.room_type}>3-Bedroom</option>
                                    <option value={formDetails.room_type}>4-Bedroom</option>
                                </select>
                                <p className='text-[10px] text-red-600'>Select Option</p>
                        </div>
                    </div>
                    <div className='w-1/3 ml-3 mb-8'>
                            <label className='font-bold' htmlFor="">Price<span className='text-[red]'>*</span></label>
                            <input
                                type="text"
                                name="price"
                                id=""
                                placeholder="Enter Price"
                                value={formDetails.price}
                                className='p-2 border-2 border-[red] bg-[#d2d1d1] rounded-[10px] block w-[96%] h-10 mt-2'
                                onChange= {updateForm}
                            />
                            <p className='text-[10px] text-red-600'>Input price</p>
                    </div>
                    <div className='ml-3 mb-8'>
                            <label className='font-bold' htmlFor="">Description<span className='text-[red]'>*</span></label>
                            <input
                                type="text"
                                name="description"
                                id=""
                                placeholder="Enter Description"
                                value={formDetails.description}
                                className='p-2 border-2 border-[red] bg-[#d2d1d1] rounded-[10px] w-full h-[90px] block mt-2'
                                onChange= {updateForm}
                            />
                            <p className='text-[10px] text-red-600'>description should contain at least 3 letters but not more than 50 letters</p>
                    </div>
                    <div className='ml-3 mb-8'>
                            <label className='font-bold' htmlFor="">Upload Photos</label>
                            <input
                                type="text"
                                name="images"
                                id=""
                                value={formDetails.images}
                                className='p-2 border-2 border-[red] rounded-lg block w-full h-[80px] border-dotted mt-2'
                                onChange= {updateForm}
                            />
                    </div>
                    <div className='flex justify-center items-center'>
                         <button className='border-3 h-[50px] w-full mx-[15%] rounded-md inline-block bg-red-600 text-white text-lg px-3 mt-8'>Add New Property</button>
                    </div>
                </form>
            </div>
        </section>

    )
}

