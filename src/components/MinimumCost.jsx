import { } from "react";
import pool from "../assets/pool.png";
import { CiDollar } from "react-icons/ci";
import { TbBuildingCommunity } from "react-icons/tb";
import { RiStackLine } from "react-icons/ri";
import { GiFlowerPot } from "react-icons/gi";
import { RiShieldStarFill } from "react-icons/ri";
import { FaDotCircle } from "react-icons/fa";

function MinimumCost() {
    return (
        <section>
            <div className="px-[5%]">
                <h1 className="md:text-3xl lg:text-3xl text-[16px] font-bold sm:-mt-20 md:-mt-20 lg:-mt-20">Minimum Living Cost Takes Care Of Everything
                </h1>
                <div className="rounded border-b-4 w-[22%] border-b-red-600">
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center font-medium lg:font-bold text-sm lg:text-lg pb-[5%]">
                    <img className="w-[700px] h-[400px] mt-9" src={pool} alt="pool" />
                    <div className="flex flex-wrap justify-center text-base ">
                        <div className="w-1/3">
                            <div>
                                <i className="border h-12 w-12 lg:h-14 lg:w-14 rounded-md flex justify-center items-center text-[40px] text-red-600 font-extrabold top-1/2 my-3">
                                    <CiDollar />
                                </i>
                                <p className="mb-5 sm:w-[100px]">Pay As Little As Possible!</p>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div>
                                <i className="border h-12 w-12 lg:h-14 lg:w-14 rounded-md flex justify-center items-center text-[40px] text-red-600 font-extrabold my-3">
                                    <TbBuildingCommunity />
                                </i>
                                <p className="mb-5">Enjoy Wisdom Of Community!</p>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div>
                                <i className="border h-12 w-12 lg:h-14 lg:w-14 rounded-md flex justify-center items-center text-[40px] text-red-600 font-extrabold my-3">
                                    <RiStackLine />
                                </i>
                                <p className="mb-5">Let's Somebody Else Take Care Of Land Lord!</p>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div>
                                <i className="border h-12 w-12 lg:h-14  lg:w-14 rounded-md flex justify-center items-center text-[40px] text-red-600 font-extrabold my-3">
                                    <GiFlowerPot />
                                </i>
                                <p >Enjoy Peaceful Environment</p>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div>
                                <i className="border h-12 w-12 lg:h-14  lg:w-14 rounded-md flex justify-center items-center text-[40px] text-red-600 font-extrabold my-3">
                                    <RiShieldStarFill />
                                </i>
                                <p className="w-[95px] lg:w-[100%]">Stay Safe! Save Money!</p>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div>
                                <i className="border h-12 w-12 lg:h-14  lg:w-14 rounded-md flex justify-center items-center text-[40px] text-red-600 font-extrabold my-3">
                                    <FaDotCircle />
                                </i>
                                <p >Pay For What You Use!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MinimumCost;
