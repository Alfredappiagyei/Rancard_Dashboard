import { jwtDecode } from 'jwt-decode'; // Use named import instead of default import

export function decodeToken(token) {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
}
