// Direct API endpoint for waiting list submissions (using HTTPS for security)
export const API_URL = 'https://api.foundershubai.com/api/v2/templates/ingest/cavzfgZsRTKyHnPgkb3uyYYOfCctKebx3KM11pLS/';

// CORS-friendly API URL to use in the application
export const PROXIED_API_URL = 'https://api.foundershubai.com/api/v2/templates/ingest/cavzfgZsRTKyHnPgkb3uyYYOfCctKebx3KM11pLS/';

// Legacy Google Apps Script URL (deprecated)
export const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';

// Google Sheets configuration
export const SHEET_CONFIG = {
  SHEET_NAME: 'Waiting List',
  COLUMNS: ['Full Name', 'Email', 'Role or Interest', 'Timestamp']
};
