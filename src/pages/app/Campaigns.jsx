import React from 'react';
import { FaRegBell } from "react-icons/fa";
import Profile from "../../assets/campaignProfileimg.jpg";
import { CiFilter } from "react-icons/ci";
import CampaingStats from '../../components/CampaingStats';
import { RiArrowRightUpLine } from "react-icons/ri";
import CampaignsPosts from '../../components/CampaignsPosts';



export default function Campaigns() {
  return (
    <div className="p-5 bg-white h-[100vh]">
      <div className='w-full h-12 flex justify-between text-cente mb-10'>
        <p className='text-[24px] font-normal mt-3.5'>Campaigns</p>

        <div className='flex'>
          <FaRegBell className=" text-black text-[40px] mr-5 mt-1 rounded-full border border-[#818181] p-[11px]" />

          <div className='flex align-middle'>
            <img className="h-[45px] w-[45px] object-cover rounded-full mr-2" src={Profile} alt="loginimg" />
            <p className='font-medium text-[16px] mt-3'>Alfred Appiagyei</p>
          </div>
        </div>
      </div>



      <div className='w-full '>
        <p className='text-4xl text-[#2D2D2D] font-bold mb-5'>Your total revanue</p>



        <div className='w-full inline-flex items-center bg-white justify-between '>
          <p className="text-4xl font-bold" style={{ background: 'linear-gradient(to right, #DF1EFF, #FFC93E)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            GHC6,609,234.00
          </p>


          <div>
            <button type="button" class="text-[#000000] hover:text-[#000000] border border-[#AEAEAE] hover:bg-white focus:ring-4 focus:outline-none focus:ring-[#AEAEAE] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#AEAEAE] dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 inline-flex items-center">
              <CiFilter className="mr-2 text-black text-[19px]" />
              Select Dates
            </button>
            <button type="button" class="text-[#000000] hover:text-[#000000] border border-[#AEAEAE] hover:bg-white focus:ring-4 focus:outline-none focus:ring-[#AEAEAE] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#AEAEAE] dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 inline-flex items-center">
              <CiFilter className="mr-2 text-black text-[19px]" />
              Filter
            </button>
          </div>
        </div>
      </div>


      <div>
        <CampaingStats />
      </div>

      <div className='w-full inline-flex justify-between mt-10 mb-10'>
        <p className='text-2xl font-medium'>Recent Campaigns</p>

        <div className='inline-flex text-center border-b-2'>
          <p>View All</p>
          <RiArrowRightUpLine />
        </div>
      </div>

      <div>
        <CampaignsPosts />
      </div>


    </div>
  );
}
