import axios from 'axios';

const CALENDAR_API_BASE = 'https://api.foundershub.ai/api/v2/calendars';

export interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

export interface AvailabilityResponse {
  date: string;
  slots: TimeSlot[];
  timezone: string;
}

export interface BookingData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  date: string;
  time: string;
  timezone: string;
}

export const calendarService = {
  async getAvailability(date: string, timezone: string = 'America/Chicago'): Promise<AvailabilityResponse> {
    try {
      const response = await axios.get(
        `${CALENDAR_API_BASE}/public/flyrlink/availability/`,
        {
          params: {
            date,
            timezone: encodeURIComponent(timezone)
          },
          headers: {
            'Accept': '*/*',
            'Origin': window.location.origin,
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching availability:', error);
      throw error;
    }
  },

  async bookAppointment(bookingData: BookingData): Promise<any> {
    try {
      const response = await axios.post(
        `${CALENDAR_API_BASE}/public/flyrlink/book/`,
        bookingData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error booking appointment:', error);
      throw error;
    }
  }
};