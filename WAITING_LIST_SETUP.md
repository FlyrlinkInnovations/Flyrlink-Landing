# Waiting List Setup Guide

This guide will help you set up the waiting list form to save submissions to Google Sheets using Google Apps Script.

## Prerequisites

1. A Google account
2. A Google Sheet where the data will be stored

This guide will help you set up the waiting list form to save submissions to Google Sheets.

## Prerequisites

1. A Google Cloud Project with the Google Sheets API enabled
2. A Google Sheet where the data will be stored
3. Service account credentials with access to the Google Sheet

## Setup Instructions

### 1. Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Flyrlink Waiting List"
4. The first row will be used as headers (Name, Email, Timestamp)

### 2. Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Delete any code in the editor and paste the following:

```javascript
const SHEET_NAME = "Waiting List";

function doPost(e) {
  try {
    // Parse the incoming data
    const { name, email } = JSON.parse(e.postData.contents);
    
    // Validate input
    if (!name || !email) {
      return createResponse(400, { result: "error", message: "Name and email are required" });
    }
    
    // Get the active spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(["Name", "Email", "Timestamp"]);
    }
    
    // Add the data to the sheet
    const timestamp = new Date();
    sheet.appendRow([name, email, timestamp]);
    
    return createResponse(200, { 
      result: "success", 
      message: "Successfully added to waiting list" 
    });
    
  } catch (error) {
    console.error("Error:", error);
    return createResponse(500, { 
      result: "error", 
      message: "An error occurred while processing your request" 
    });
  }
}

function createResponse(status, data) {
  const response = ContentService.createTextOutput(JSON.stringify(data));
  response.setMimeType(ContentService.MimeType.JSON);
  return response;
}
// Run this function once to set up the script
function setup() {
  const scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty('key', 'value');
}
```

4. Click the floppy disk icon to save the project
5. Name it "Flyrlink Waiting List Handler"

### 3. Deploy the Web App

1. Click on "Deploy" > "New deployment"
2. Click the gear icon ⚙️ and select "Web app"
3. Set the following options:
   - Description: "Flyrlink Waiting List Handler"
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click "Deploy"
5. Copy the web app URL (you'll need this for the next step)

### 4. Update the Configuration

1. Open `src/config.ts` in your project
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with the web app URL you copied
3. Save the file

### 5. Test the Integration

1. Start your development server
2. Fill out the waiting list form on your website
3. Check your Google Sheet - you should see the new entry appear within a few seconds

## Troubleshooting

- **Form not submitting**: Make sure you've replaced `YOUR_GOOGLE_APPS_SCRIPT_URL` in `src/config.ts`
- **403 Forbidden error**: In the Apps Script editor, go to "Deploy" > "Test deployments" and make sure the web app is accessible
- **Data not appearing in sheet**: Check the Apps Script execution logs under "Executions" in the left sidebar

## Security Notes

- The web app is set to run as "Me" and be accessible to "Anyone" - this is the simplest setup
- For production, you might want to restrict access to specific domains or add additional authentication
- The script only allows POST requests and validates input data

## Next Steps

1. Customize the success/error messages in `WaitingListForm.tsx` if needed
2. Add additional fields to the form by updating both the form component and the Apps Script
3. Set up email notifications for new signups using `MailApp` in the Apps Script
