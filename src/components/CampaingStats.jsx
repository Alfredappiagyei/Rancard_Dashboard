import React from 'react'
import { TbArrowCurveRight } from "react-icons/tb";
import { FaArrowTrendDown } from "react-icons/fa6";

export default function CampaingStats() {
    return (
        <div className='bg-white grid grid-cols-3 divide-x mt-11'>
            <div>
                <a href="#www" class="h-[192px] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p class="font-normal text-gray-700 dark:text-gray-400">New Subscriptions</p>
                    <div className='inline-flex mt-14'>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mr-3">875</h5>

                        <div className='inline-flex items-center pr-2 pl-2 bg-[#82FF804D] rounded'>
                         <TbArrowCurveRight className="text-[#04B200]"/>
                         <p className="text-[#04B200]">24%</p>
                        </div>
                    </div>


                    <p className="font-normal text-gray-700 dark:text-gray-400">Compared to last week</p>
                </a>
            </div>
            <div>
            <a href="#www" className="h-[192px] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="font-normal text-gray-700 dark:text-gray-400">New Orders</p>
                    <div className='inline-flex mt-14'>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mr-3">500</h5>

                        <div className='inline-flex items-center pr-2 pl-2 bg-[#FF80804D] rounded'>
                         <FaArrowTrendDown   className="text-[#B20000]"/>
                         <p className="text-[#B20000]">17%</p>
                        </div>
                    </div>


                    <p className="font-normal text-gray-700 dark:text-gray-400">Compared to last week</p>
                </a>
            </div>
            <div>
            <a href="#www" className="h-[192px] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="font-normal text-gray-700 dark:text-gray-400">Average Revenue</p>
                    <div className='inline-flex mt-14'>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mr-3">GHC8,673</h5>

                        <div className='inline-flex items-center pr-2 pl-2 bg-[#82FF804D] rounded'>
                         <TbArrowCurveRight className="text-[#04B200]"/>
                         <p className="text-[#04B200]">24%</p>
                        </div>
                    </div>


                    <p className="font-normal text-gray-700 dark:text-gray-400">Compared to last week</p>
                </a>
            </div>
        </div>
    )
}
