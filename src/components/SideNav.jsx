import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHome } from "react-icons/hi";
import { MdCampaign } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiShoppingBagOpen } from "react-icons/pi";

export default function SideNav() {
  return (
    <div className="w-64 h-full bg-white text-white p-4 border-r-2">
      <h3 className="text-3xl font-bold text-[#02208D] mb-9">Orbut</h3>
      <ul>
        <li className="mb-4 flex items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'bg-[#D8D8D8] text-[#3A3A3A] p-2 pr-24 rounded flex items-center' : 'hover:text-gray-400 text-[#3A3A3A] flex items-center'
            }
          >
              <HiOutlineHome className="mr-2 text-black" />
            Dashboard
          </NavLink>
        </li>
        <li className="mb-4 flex items-center">
          <NavLink
            to="/campaigns"
            className={({ isActive }) =>
              isActive ? 'bg-[#D8D8D8] text-[#3A3A3A] p-2 pr-24 rounded flex items-center' : 'hover:text-gray-400 text-[#3A3A3A] flex items-center'
            }
          >
               <MdCampaign className="mr-2 text-black"/>
            Campaigns
          </NavLink>
        </li>
        <li className="mb-4 flex items-center">
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive ? 'bg-[#D8D8D8] text-[#3A3A3A] p-2 pr-24 rounded flex items-center' : 'hover:text-gray-400 text-[#3A3A3A] flex items-center'
            }
          >
             <BsChat className="mr-2 text-black"/>
            Chat
          </NavLink>
        </li>
        <li className="mb-4 flex items-center">
         
          <NavLink
            to="/supportCenter"
            className={({ isActive }) =>
              isActive ? 'bg-[#D8D8D8] text-[#3A3A3A] p-2 pr-16 rounded flex items-center' : 'hover:text-gray-400 text-[#3A3A3A] flex items-center'
            }
          >
             <HiOutlineSupport className="mr-2 text-black"/>
            Support Center
          </NavLink>
        </li>
        <li className="mb-4 flex items-center">
         
          <NavLink
            to="/leads"
            className={({ isActive }) =>
              isActive ? 'bg-[#D8D8D8] text-[#3A3A3A] p-2 pr-24 rounded flex items-center' : 'hover:text-gray-400 text-[#3A3A3A] flex items-center'
            }
          >
             <RiMoneyDollarCircleLine   className="mr-2 text-black"/>
            Leads
            
          </NavLink>
        </li>
        <li className="mb-4 flex items-center">
          <NavLink
            to="/archive"
            className={({ isActive }) =>
              isActive ? 'bg-[#D8D8D8] text-[#3A3A3A] p-2 pr-24 rounded mb-4 flex items-center' : 'hover:text-gray-400 text-[#3A3A3A] mb-4 flex items-center'
            }
          >
             <PiShoppingBagOpen className="mr-2 text-black"/>
            Archive
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
