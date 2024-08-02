import axios from 'axios';

const baseUrl = process.env.REACT_APP_DASHBOARD_BASE_URL;
const signInEndpoint = process.env.REACT_APP_SIGN_IN;
const createAccountEndpoint = process.env.REACT_APP_CREATE_ACCOUNT;

export async function login(email, password) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const data = { email, password };
    try {
      const response = await axios.post(`${baseUrl}${signInEndpoint}`, data, config);
      if (response.data.data.access_token) {
        localStorage.setItem('token', response.data.data.access_token); // Store token
      }
      return response.data;
    } catch (error) {
      console.error(`Login failed: ${error.response.data.status}`);
      return error.response.data;
    }
  }
  
export async function createAccount(email, password) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const data = { email, password };
  try {
    const response = await axios.post(`${baseUrl}${createAccountEndpoint}`, data, config);
    return response.data;
  } catch (error) {
    console.error(`Account creation failed: ${error.response.data.status}`);
    return error.response.data;
  }
}
