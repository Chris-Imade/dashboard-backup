import React, { useState } from "react";
import styles from "./Home.module.css";
// import Rising from "../../assets/rising.png";
import DropdownIcon from "../../assets/dropdownIcon.png";
import Next from "../../assets/Next.png";
import Bit from "../../assets/bit.png"; 
// import PointDown from "../../assets/pointDown.png";
import Chart from "../Chart/Chart";

const Home = () => {

    const [activeOne, setActiveOne] = useState(true);
    const [activeTwo, setActiveTwo] = useState(false);

    // if(activeTwo) {
    //     setActiveOne(false);
    // } else if (activeOne) {
    //     setActiveTwo(false);
    // } else {
    //     setActiveOne(true);
    // }

    const chartData = [
        {}
    ];

    return (
        <div className={`${styles.home} flex flex-col m-6 bg-white h-[97vh]`}>
            {/* Header */}
            <div className={`${styles.header} flex justify-between bg-[#FBFBFBE5] p-8`}>
                <h3 className="font-bold text-2xl text-gray-800">Home</h3>
                <div className={`${styles.dropDownBorder} border-[0.5px] rounded-lg py-1 px-4 flex items-center justify-around hover:cursor-pointer`}>
                    <span><img src={Bit} alt="Bit" /></span>
                    <p className="mx-2">Bamboofy</p>
                    <span><img src={DropdownIcon} alt="DropdownIcon" /></span>
                </div>
            </div>
           <div className={`${""} flex `}>
            <div className={`${styles.left}`}>
                    <div className={`${styles.leftTop}`}>
                        <div className="flex justify-between items-center py-9 px-4">
                            <h3 className="text-gray-500 font-bold text-2xl">Overview</h3>
                            {/* Dropdown */}
                            <div className={`${styles.dropDownBorder} border-[0.5px] border-gray-300 rounded-lg py-1 px-4 shadow-sm hover:cursor-pointer`}>Last 7 days</div>
                        </div>
                        <div className="flex justify-around border-b-[1px] border-gray-200 pb-9">
                            <div className="lg:pr-4 lg:border-r-2 lg:border-gray-200">
                                <h5 className="text-sm font-bold text-gray-500">Total API calls</h5>
                                <h2 className="text-[2.7rem] font-bold my-6">{"235"}</h2>
                                <div className="flex">
                                    {/* <img src={Rising} alt="rising" height={5} className="mr-1" /> */} <span className="text-[#00E595] text-2xl">&uarr;</span>
                                    <p className=" text-gray-400 font-bold"><span className="text-[#00E595]">{"2.2%"}</span> Last 7 days</p>
                                </div>
                            </div>

                            <div className="lg:pr-4 lg:border-r-2 lg:border-gray-200">
                                <h5 className="text-sm font-bold text-gray-500">Total customers</h5>
                                <h2 className="text-[2.7rem] font-bold my-6">{"89"}</h2>
                                <div className="flex">
                                    {/* <img src={Rising} alt="rising" height={5} className="mr-1" /> */}
                                    <p className=" text-gray-400 font-bold"><span className="text-[#00E595]">{"2.5%"}</span> Last 7 days</p>
                                </div>
                            </div>

                            <div className="lg:pr-4 lg:border-r-2 lg:border-gray-200">
                                <h5 className="text-sm font-bold text-gray-500">Total accounts</h5>
                                <h2 className="text-[2.7rem] font-bold my-6">{"174"}</h2>
                                <div className="flex">
                                    {/* <img src={Dropping} alt="rising" height={5} className="mr-1" /> */}
                                    <p className=" text-gray-400 font-bold"><span className="text-[#FF3820]">{"0.5%"}</span> Last 7 days</p>
                                </div>
                            </div>

                            <div className="lg:pr-4">
                                <h5 className="text-sm font-bold text-gray-500">Drop off </h5>
                                <h2 className="text-[2.7rem] font-bold my-6">{"10"}</h2>
                                <div className="flex">
                                    {/* <img src={Dropping} alt="rising" height={5} className="mr-1" /> */}
                                    <p className=" text-gray-400 font-bold"><span className="text-[#FF3820]">{"2.2%"}</span> Last 7 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.leftBottom}`}>
                        <div className="flex justify-between items-center py-9 px-4">
                            <h3 className="text-gray-500 font-bold text-2xl">Statements</h3>
                            {/* Dropdown */}
                            <div className="flex">
                                <div className={`${styles.dropDownBorder} border-[0.5px] border-gray-300 rounded-lg py-1 px-4 shadow-sm hover:cursor-pointer flex items-center justify-center mr-4`}>
                                    <p className="mx-2 font-bold text-[#182CD1]">Statement Pages</p>
                                    <span><img src={DropdownIcon} alt="DropdownIcon" /></span>
                                </div>
                                <div className={`${styles.dropDownBorder} border-[0.5px] border-gray-300 rounded-lg py-1 px-4 shadow-sm hover:cursor-pointer`}>Last 7 days</div>
                            </div>
                        </div>
                        {/* BarChart */}
                        <div>
                            <Chart />
                        </div>
                    </div>
            </div>
            <div className={`${styles.right}`}>
                <div className={`${styles.rightTop} px-4 border-b-[1px] border-gray-200 pb-6 border-l-[1px]`}>
                    <div className="flex justify-between items-center py-9">
                        <h3 className="text-gray-500 font-bold text-xl">Mono wallet</h3>
                        <span className={`${styles.dropDownBorder} border-[0.5px] border-gray-300 rounded-lg py-1 px-4 shadow-sm font-bold hover:cursor-pointer`}>+ Fund</span>
                    </div>
                    <div className="relative bg-[#182CD1] flex flex-col justify-center items-center rounded-lg h-44">
                        <p className="text-gray-500">NGN Balance</p>
                        <p className="text-white font-bold text-4xl my-2">{"N500.00"}</p>
                        <span className="bg-[#FFFFFF1A] text-gray-200 rounded-[2rem] py-1 px-4"><span className="text-[#ffffffca]">{"99"}</span> Free calls left</span>
                        {/* Controls */}
                        <div className="absolute p-2 rounded-full">
                            <img src={Next} alt="Next" />
                        </div>
                        <div className="flex absolute">
                            <span onClick={() => setActiveOne(true)} className={`${activeOne ? "bg-white" : "bg-gray-400 mr-2"} w-1 h-1 rounded-full`}></span>
                            <span onClick={() => setActiveTwo(true)} className={`${activeTwo ? "bg-white" : "bg-gray-400"} w-1 h-1 rounded-full`}></span>
                        </div>
                    </div>
                </div>
                <div className={`${styles.rightBottom} border-l-[1px] border-gray-300`}>
                    <div><h4 className="text-gray-500 font-bold text-2xl py-8 pl-4 ">Account Linking</h4></div>
                    {/* Pie chart */}
                    <div></div>
                    {/* chart-infos */}
                    <div></div>
                </div>
            </div>
           </div>
        </div>
    )
}
export default Home;

// where I stopped yerstaday. I need to make the Mono wallet change depending on which slide is active...
// also there has to be a previous that appears on the left when on next slide.

// Next up the dropdowns and then the charts