import React, { useState } from 'react'

export default function Form() {
    const [formDetails, setformDetails] = useState({
        username: "",
        address: "",
        unit_number: "",
        city: "",
        state: "",
        room_type: "",
        price: "",
        description: "",
        images: ""
    })

    const [errors, setErrors] = useState({})

    function updateForm(e) {
        const { name, value } = e.target

        setformDetails(prev => {
            return { ...prev, [name]: value }
        })

    }

    function handleSubmit(e) {
        e.preventDefault()

        const validationErrors = {}
        if (!formDetails.username.trim()) {
            validationErrors.username = "name is required"
        } else if (formDetails.username.length < 3) {
            validationErrors.username = "name should at least contain three letters"
        }

        if (!formDetails.address.trim()) {
            validationErrors.address = "address is required"
        } else if (formDetails.address.length < 3) {
            validationErrors.address = "address should contain at least 3 characters"
        }

        if (!formDetails.unit_number.trim()) {
            validationErrors.unit_number = "unit number is required"
        } 

        if (!formDetails.price.trim()) {
            validationErrors.price = "price is required"
        } 

        if (!formDetails.option) {
            validationErrors.option = "select option"
        } 

        if (!formDetails.description.trim()) {
            validationErrors.description = "description is required"
        } else if (formDetails.description.length < 3) {
            validationErrors.description = "description should contain at least 3 letters but not more than 50 letters"
        }

        // if(!formDetails.password.trim()) {
        //     validationErrors.password = "description is required"
        // } else if (formDetails.password.length < 3 ) {
        //     validationErrors.password = "description should contain at least 3 letters but not more than 50 letters"
        // }

        // if(!formDetails.email.trim()) {
        //     validationErrors.email = "email is required"
        // } else if (!/\s+@\s\.\s+/.test(formDetails.email)) {
        //     validationErrors.email = ""
        // }

        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            alert("Form Submitted successfully")
        }

    }
    console.log(formDetails)
    return (
        <section className=''>
            <div className='text-center mb-7'>
                <p>
                    Your Property With Us And Be Confident That Your Room Willed Be Filled Out!
                </p>
            </div>
            <div className='w-[80%] mx-auto border shadow-2xl'>
                <form onSubmit={handleSubmit} action="" className='w-[90%] mx-auto py-[5%]'>
                    <h1 className='text-[red] text-4xl text-center mb-10'>Add A New Property</h1>
                    <div className='w-full mx-2 flex flex-col lg:flex-row lg:flex-wrap '>
                        <div className='w-full lg:w-1/3 mb-8'>
                            <label className='font-bold' htmlFor="">Name<span className='text-[red]'>*</span></label>
                            <input
                                type="text"
                                name="username"
                                id="name"
                                placeholder="Enter Name"
                                value={formDetails.name}
                                className='p-2 border-2 bg-[#d2d1d1] border-red-600 rounded-[10px] block w-[96%] h-10 mt-2'
                                onChange={updateForm}
                            />
                            {errors.username && <span className="text-[10px] text-red-600">{errors.username}</span>}
                        </div>
                        <div className='w-full lg:w-1/3 mb-8'>
                            <label className='font-bold' htmlFor="">Address<span className='text-[red]'>*</span></label>
                            <input
                                type="text"
                                name="address"
                                id=""
                                placeholder="Enter Address"
                                value={formDetails.address}
                                className='p-2 border-2 border-[red] bg-[#d2d1d1] rounded-[10px] block w-[96%] h-10 mt-2'
                                onChange={updateForm}
                            />
                            {errors.address && <span className="text-[10px] text-red-600">{errors.address}</span>}
                        </div>
                        <div className='w-full lg:w-1/3 mb-8'>
                            <label className='font-bold' htmlFor="">Unit Number<span className='text-[red]'>*</span></label>
                            <input
                                type="text"
                                name="unit_number"
                                id=""
                                placeholder="Enter Unit"
                                value={formDetails.unit_number}
                                className='p-2 border-2 border-[red] bg-[#d2d1d1] rounded-[10px] block w-[96%] h-10 mt-2'
                                onChange={updateForm}
                            />
                             {errors.unit_number && <span className="text-[10px] text-red-600">{errors.unit_number}</span>}
                        </div>
                        <div className='w-full lg:w-1/3 mb-8'>
                            <h1 className='font-bold'>City<span className='text-[red]'>*</span></h1>
                            <select className='p-2 border-2 border-[red] bg-[#d2d1d1] rounded-[10px] block w-[96%] h-10 mt-2' name="city" id="">
                                <option onChange={updateForm} name="city" value={formDetails.city}>Select City</option>
                                <option onChange={updateForm} name="city" value={formDetails.city}>Lagos Mainland</option>
                                <option onChange={updateForm} name="city" value={formDetails.city}>Aba</option>
                            </select>
                            {errors.option && <span className="text-[10px] text-red-600">{errors.option}</span>}
                        </div>
                        <div className='w-full lg:w-1/3 mb-8'>
                            <h1 className='font-bold'>State<span className='text-[red]'>*</span></h1>
                            <select className='p-2 border-2 border-[red] bg-[#d2d1d1] rounded-[10px] block w-[96%] h-10 mt-2' name="state" id="">
                                <option value={formDetails.state}>Select State</option>
                                <option value={formDetails.state}>Lagos</option>
                                <option value={formDetails.state}>Abia</option>
                            </select>
                            {errors.option && <span className="text-[10px] text-red-600">{errors.option}</span>}
                        </div>
                        <div className='w-full lg:w-1/3 mb-8'>
                            <h1 className='font-bold'>Room Type<span className='text-[red]'>*</span></h1>
                            <select className='p-2 border-2 border-[red] bg-[#d2d1d1] rounded-[10px] block w-[96%] h-10 mt-2' name="room_type" id="">
                                <option value={formDetails.room_type}>Select Room Type</option>
                                <option value={formDetails.room_type}>3-Bedroom</option>
                                <option value={formDetails.room_type}>4-Bedroom</option>
                            </select>
                            {errors.option && <span className="text-[10px] text-red-600">{errors.option}</span>}
                        </div>
                    </div>
                    <div className='w-full ml-2 lg:w-1/3 md:ml-3 lg:ml-2 mb-8'>
                        <label className='font-bold' htmlFor="">Price<span className='text-[red]'>*</span></label>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            placeholder="Enter Price"
                            value={formDetails.price}
                            className='p-2 border-2 border-[red] bg-[#d2d1d1] rounded-[10px] block w-[96%] h-10 mt-2'
                            onChange={updateForm}
                        />
                          {errors.price && <span className="text-[10px] text-red-600">{errors.price}</span>}
                    </div>
                    <div className='w-full px-2 md:px-0 lg:ml-3 mb-8'>
                        <label className='font-bold' htmlFor="">Description<span className='text-[red]'>*</span></label>
                        <input
                            type="text"
                            name="description"
                            id=""
                            placeholder="Enter Description"
                            value={formDetails.description}
                            className='p-2 border-2 border-[red] bg-[#d2d1d1] rounded-[10px] w-full h-[90px] block mt-2'
                            onChange={updateForm}
                        />
                          {errors.description && <span className="text-[10px] text-red-600">{errors.description}</span>}
                    </div>
                    <div className='ml-3 mb-8'>
                        <label className='font-bold' htmlFor="">Upload Photos</label>
                        <input
                            type="text"
                            name="images"
                            id=""
                            value={formDetails.images}
                            className='p-2 border-2 border-[red] rounded-lg block w-full h-[80px] border-dotted mt-2'
                            onChange={updateForm}
                        />
                    </div>
                    <div className='flex justify-center items-center'>
                        <button type="submit" className='border-3 h-[50px] w-full mx-[15%] rounded-md inline-block bg-red-600 text-white text-lg px-3 mt-8'>Add New Property</button>
                    </div>
                </form>
            </div>
        </section>

    )
}

