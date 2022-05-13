import React, { useState } from "react";
import DropdownIcon from "../../assets/dropdownIcon.png";
import RocketIcon from "../../assets/rocketIcon.png";
import ComplianceIcon from "../../assets/compliance.png";
import Dash from "../../assets/dash.png";
import AppsIcon from "../../assets/apps.png";
import PointDown from "../../assets/pointDown.png";
import Customer from "../../assets/customers.png";
import Payments from "../../assets/payments.png";
import Monopay from "../../assets/monopay.png";
import Statement from "../../assets/statement.png";
import AddProductsIcon from "../../assets/add-products.png";

const Aside = () => {

    const [collapsed, setCollapse] = useState(false);
    const [connectCollapsed, setConnectCollapse] = useState(false);
    
    interface User {
        userName: string;
        imgUrl: undefined | string;
        fullName: string;
    }

   const user: User = {
       userName: "Neon",
       imgUrl: undefined,
       fullName: "Gothan Nenialt"
   }

    return (
        <div className="my-6 mx-8 flex flex-col justify-between h-[100vh]">
            <div>
                <div onClick={() => setCollapse(!collapsed)}  className="transition-all ease-in-out duration-500 group flex justify-between items-center bg-[#8fb0f121] rounded-lg p-2 hover:shadow-md hover:cursor-pointer">
                    <div className="flex">
                        <div className="">
                            {user.imgUrl !== undefined ? (
                                <img src="" alt="" />
                            ) : (
                                <div className="text-white text-2xl  bg-[#00B4FF] rounded-full w-12 h-12 flex justify-center items-center">{user.userName.charAt(0)}</div>
                            )}
                        </div>
                        <div className="flex flex-col ml-4">
                            <h3 className="text-gray-900">{user.userName}</h3>
                            <p className="text-gray-700">{user.fullName}</p>
                        </div>
                    </div>
                    <span className="mx-4"><img className={`${collapsed && "rotate-180"} group-hover:rotate-180`}  src={DropdownIcon} alt="DropdownIcon" /></span>
                </div>
                <div className="mt-8">
                    {!collapsed && (
                        <ul>
                            <li className="flex pl-4 cursor-pointer hover:bg-[#8fb0f121] rounded-md py-4"><span className="mr-4"><img width={25}  src={RocketIcon} alt="RocketIcon" /></span><p>Get Started</p></li>
                            <li className="flex pl-4 cursor-pointer hover:bg-[#8fb0f121] rounded-md py-4"><span className="mr-4"><img width={25}  src={ComplianceIcon} alt="ComplianceIcon" /></span><p>Compliance</p></li>
                            <li className="flex pl-4 cursor-pointer hover:bg-[#8fb0f121] rounded-md py-4"><span className="mr-4"><img width={25}  src={Dash} alt="Dash" /></span><p>Dash</p></li>
                            <li className="flex pl-4 cursor-pointer hover:bg-[#8fb0f121] rounded-md py-4"><span className="mr-4"><img width={25}  src={AppsIcon} alt="AppsIcon" /></span><p>Apps</p></li>
                        </ul>
                    )}
                    
                </div>
                <div className="">
                    <h4 onClick={() => setConnectCollapse(!connectCollapsed)}  className="font-bold text-gray-400 flex justify-start items-center hover:cursor-pointer group shadow-sm py-1">CONNECT <span className="ml-2"><img className={`${connectCollapsed && "rotate-180"} group-hover:rotate-180`} src={PointDown} alt="PointDown" /></span></h4>
                    {!connectCollapsed && (
                        <ul>
                            <li className="flex pl-4 cursor-pointer hover:bg-[#8fb0f121] rounded-md py-4"><span className="mr-4"><img width={25}  src={Customer} alt="RocketIcon" /></span><p>Customers</p></li>
                            <li className="flex pl-4 cursor-pointer hover:bg-[#8fb0f121] rounded-md py-4"><span className="mr-4"><img width={25}  src={Payments} alt="ComplianceIcon" /></span><p>Payments</p></li>
                            <li className="flex pl-4 cursor-pointer hover:bg-[#8fb0f121] rounded-md py-4"><span className="mr-4"><img width={25}  src={Monopay} alt="Dash" /></span><p>MonoPay</p></li>
                            <li className="flex pl-4 cursor-pointer hover:bg-[#8fb0f121] rounded-md py-4"><span className="mr-4"><img width={25}  src={Statement} alt="AppsIcon" /></span><p>Statement</p></li>
                        </ul>
                    )}
                    
                </div>
            </div>
           <div>
            <hr />
                <div className="flex pl-4 cursor-pointer hover:bg-[#8fb0f121] pb-4 pt-6  rounded-md mb-[3rem]">
                    <img className="mr-4"  src={AddProductsIcon} alt="AddProductsIcon" />
                    <h4>Add Products</h4>
                </div>
           </div>
        </div>
    )
}
export default Aside;