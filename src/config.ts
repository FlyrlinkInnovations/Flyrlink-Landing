// Original API endpoint for waiting list submissions
export const ORIGINAL_API_URL = 'https://api.foundershubai.com/api/v2/templates/ingest/cavzfgZsRTKyHnPgkb3uyYYOfCctKebx3KM11pLS/';

// Local proxy URL to avoid CORS issues during development
export const PROXIED_API_URL = '/api/foundershubai/api/v2/templates/ingest/cavzfgZsRTKyHnPgkb3uyYYOfCctKebx3KM11pLS/';

// Legacy Google Apps Script URL (deprecated)
export const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';

// Google Sheets configuration
export const SHEET_CONFIG = {
  SHEET_NAME: 'Waiting List',
  COLUMNS: ['Full Name', 'Email', 'Role or Interest', 'Timestamp']
};
