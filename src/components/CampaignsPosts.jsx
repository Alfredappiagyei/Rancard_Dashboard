import React, { useEffect, useState } from 'react';
import { CiCalendarDate, CiCirclePlus } from "react-icons/ci";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { FiEdit } from "react-icons/fi";
import campaigImage1 from '../assets/activeusers/campimg1.jpg';
import campaigImage2 from '../assets/activeusers/campimg2.jpg';
import campaigImage3 from '../assets/activeusers/campimg3.jpg';
import campaigImage4 from '../assets/activeusers/campimg4.jpg';
import campaigImage5 from '../assets/activeusers/campimg5.jpg';
import { deleteCampaign } from './campaignService';
import { MdDeleteOutline } from "react-icons/md";

export default function CampaignsPosts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [campaignName, setCampaignName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [bannerUrl, setBannerUrl] = useState('');
  const [status, setStatus] = useState('DRAFT');
  const [campaigns, setCampaigns] = useState([]);
  const [editingCampaign, setEditingCampaign] = useState(null); // New state for the campaign being edited
  const [token] = useState('');

  useEffect(() => {
    handleGetCampaigns();
  }, []);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalOpen = (campaign = null) => {
    if (campaign) {
      setEditingCampaign(campaign);
      setCampaignName(campaign.name);
      setDescription(campaign.description);
      setStartDate(new Date(campaign.start_date));
      setEndDate(new Date(campaign.end_date));
      setBannerUrl(campaign.banner_url);
      setStatus(campaign.status);
    } else {
      setEditingCampaign(null);
      setCampaignName('');
      setDescription('');
      setStartDate(null);
      setEndDate(null);
      setBannerUrl('');
      setStatus('DRAFT');
    }
    handleModalToggle();
  };

  const handleSubmit = async () => {
    const data = {
      name: campaignName,
      description,
      start_date: startDate ? startDate.toISOString() : null,
      end_date: endDate ? endDate.toISOString() : null,
      banner_url: bannerUrl,
      status,
    };

    const token = localStorage.getItem('token');
    const url = editingCampaign
      ? `${process.env.REACT_APP_DASHBOARD_BASE_URL}${process.env.REACT_APP_UPDATE_OR_EDIT_CAMPAIGN.replace('{id}', editingCampaign.id)}`
      : `${process.env.REACT_APP_DASHBOARD_BASE_URL}${process.env.REACT_APP_CREATE_CAMPAIGN}`;

    try {
      const response = await axios({
        method: editingCampaign ? 'put' : 'post',
        url: url,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Campaign saved:', response.data);
      handleModalToggle(); // Close modal on success
      handleGetCampaigns(); // Refresh campaigns list
    } catch (error) {
      console.error('Error saving campaign:', error);
    }
  };

  const handleGetCampaigns = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DASHBOARD_BASE_URL}${process.env.REACT_APP_RETRIEVE_ALL_CREATED_CAMPAIGNS}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Campaigns successfully retrieved:', response.data);
      setCampaigns(response.data.data);
    } catch (error) {
      console.error('Error getting campaigns:', error);
    }
  };

  const handleDelete = async (campaignId) => {
    try {
      await deleteCampaign(campaignId, token);
      setCampaigns(campaigns.filter(campaign => campaign.id !== campaignId)); // Remove the deleted campaign from state
    } catch (error) {
      console.error('Failed to delete campaign:', error);
    }
  };

  return (
    <>
      <div className='bg-white grid grid-cols-3 divide-x'>
        <div className='flex-col'>
          <div className='flex text-center mb-3'>
            <p className='mr-2 '>Draft</p>
            <p className='p-1 bg-[#E1E1E1] text-[#0E0E0E] rounded w-6'>1</p>
          </div>

          <div className='name="Draft"'>
            {campaigns.map((campaign) => (
              <a key={campaign.id} href="#ww" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 h-[248px]">
                <div className='flex w-full justify-between text-center mb-5'>
                  <div className="flex -space-x-4 rtl:space-x-reverse">
                    <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={campaigImage1} alt="" />
                    <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={campaigImage2} alt="" />
                    <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={campaigImage3} alt="" />
                    <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={campaigImage4} alt="" />
                    <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={campaigImage5} alt="" />
                  </div>
                  <div className='flex' onClick={() => handleModalOpen(campaign)}>
                    <FiEdit className='w-[24px] h-[24px] mr-2' />
                    <p className='text-[18px]'>Edit</p>
                  </div>
                </div>

                <div className='mb-8'>
                  <h3 className='text-[20px] font-semibold h-[]'>{campaign.name}</h3>
                  <p className='mb-4'>Status: <p>{campaign.status}</p></p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-[#1BC100] h-3 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>

                <div className='text-gray-500 flex justify-between'>
                  <p>Last Updated: {campaign.updated_at}</p>
                  <MdDeleteOutline onClick={() => handleDelete(campaign.id.deleteCampaign)} className='text-[red] text-[24px]'/>
                </div>
              </a>
            ))}
          </div>

          <div>
            <button
              type="button"
              className="text-black bg-gradient-to-br from-white to-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-2 border-dashed border-[#9F53FFA1] flex w-2/3"
              onClick={() => handleModalOpen()}
            >
              <CiCirclePlus className='text-2xl mr-7' />
              Add Campaign
            </button>
          </div>
        </div>

        <div>
          <div className='inline-flex text-center mb-3'>
            <p className='mr-2'>In Progress</p>
            <p className='p-1 bg-[#E1E1E1] text-[#0E0E0E] rounded w-6'>2</p>
          </div>
          <div className='name="Progress"'>
          {campaigns.map((campaign) => (
              <a key={campaign.id} href="#ww" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 h-[248px]">
                <div className='flex w-full justify-between text-center mb-5'>
                  <div className="flex -space-x-4 rtl:space-x-reverse">
                    <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={campaigImage1} alt="" />
                    <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={campaigImage2} alt="" />
                    <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={campaigImage3} alt="" />
                    <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={campaigImage4} alt="" />
                    <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={campaigImage5} alt="" />
                  </div>
                  <div className='flex' onClick={() => handleModalOpen(campaign)}>
                    <FiEdit className='w-[24px] h-[24px] mr-2' />
                    <p className='text-[18px]'>Edit</p>
                  </div>
                </div>

                <div className='mb-8'>
                  <h3 className='text-[20px] font-semibold h-[]'>{campaign.name}</h3>
                  <p className='mb-4'>Status: <p>{campaign.status}</p></p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-[#1BC100] h-3 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>

                <div className='text-gray-500 flex justify-between'>
                  <p>Last Updated: {campaign.updated_at}</p>
                  <MdDeleteOutline onClick={() => handleDelete(campaign.id.deleteCampaign)} className='text-[red] text-[24px]'/>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className='inline-flex text-center mb-3'>
            <p className='mr-2'>Complete</p>
            <p className='p-1 bg-[#E1E1E1] text-[#0E0E0E] rounded w-6'>1</p>
          </div>
          <div className='name="Complete"'>
          {campaigns.map((campaign) => (
              <a key={campaign.id} href="#ww" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 h-[248px]">
                <div className='flex w-full justify-between text-center mb-5'>
                  <div className="flex -space-x-4 rtl:space-x-reverse">
                    <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={campaigImage1} alt="" />
                    <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={campaigImage2} alt="" />
                    <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={campaigImage3} alt="" />
                    <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={campaigImage4} alt="" />
                    <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={campaigImage5} alt="" />
                  </div>
                  <div className='flex' onClick={() => handleModalOpen(campaign)}>
                    <FiEdit className='w-[24px] h-[24px] mr-2' />
                    <p className='text-[18px]'>Edit</p>
                  </div>
                </div>

                <div className='mb-8'>
                  <h3 className='text-[20px] font-semibold h-[]'>{campaign.name}</h3>
                  <p className='mb-4'>Status: <p>{campaign.status}</p></p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-[#1BC100] h-3 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className='text-gray-500 flex justify-between'>
                  <p>Last Updated: {campaign.updated_at}</p>
                  <MdDeleteOutline onClick={() => handleDelete(campaign.id.deleteCampaign)} className='text-[red] text-[24px]'/>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
  <div id="default-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-16 w-full max-w-2xl max-h-full">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {editingCampaign ? 'Edit Campaign' : 'Create Campaign'}
            </h3>
            <p className="font-normal text-[#4E4E4E] dark:text-white">
              {editingCampaign ? 'Edit the campaign details' : 'Add a new campaign by filling in the necessary details'}
            </p>
          </div>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={handleModalToggle}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="overflow-y-auto max-h-[80vh] p-4 md:p-5"> {/* Scrollable container */}
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder='Campaign Name'
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
              />
            </div>
            <div>
              <textarea
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Description'
              />
            </div>

            <view className='grid grid-cols-2 divide-x'>
            <div className='flex'>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 placeholderText='Enter Start Date'
              />
              <CiCalendarDate className='text-[#000000] text-2xl relative right-0 mt-3  z-10 mr-7' />
            </div>
            <div>
            <CiCalendarDate className='text-[#000000] text-2xl absolute right-0 mt-3 mr-24 z-10' />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholderText='Enter End Date'
              />
            </div>
            </view>
           
            <div>
              <input
                type="text"
                placeholder='Banner URL'
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={bannerUrl}
                onChange={(e) => setBannerUrl(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="DRAFT">Draft</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
              </select>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-[#666666] bg-white border border-[#666666] rounded-3xl hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#666666]"
                onClick={handleModalToggle}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-white bg-[#3F20FF] rounded-3xl hover:bg-[#3F20FF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3F20FF]"
                onClick={handleSubmit}
              >
                Create campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
}
