// src/services/campaignService.js

const REACT_APP_DASHBOARD_BASE_URL = process.env.REACT_APP_DASHBOARD_BASE_URL;
const REACT_APP_DELETE_CREATED_CAMPAIGN = process.env.REACT_APP_DELETE_CREATED_CAMPAIGN;

export const deleteCampaign = async (campaignId, token) => {
  const url = `${REACT_APP_DASHBOARD_BASE_URL}${REACT_APP_DELETE_CREATED_CAMPAIGN.replace('{id}', campaignId)}`;

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error deleting campaign:', error);
    throw error;
  }
};
