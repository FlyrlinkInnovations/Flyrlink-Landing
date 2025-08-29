import React, { useState, useEffect, memo } from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import { calendarService, TimeSlot } from '../../services/calendar';
import { format, parse } from 'date-fns';

interface TimeSlotPickerProps {
  selectedDate: Date;
  onTimeSelect: (time: string) => void;
  selectedTime: string | null;
  timezone: string;
}

const TimeSlotPicker = memo(({ selectedDate, onTimeSelect, selectedTime, timezone }: TimeSlotPickerProps) => {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedDate) {
      fetchTimeSlots();
    }
  }, [selectedDate, timezone]);

  const fetchTimeSlots = async () => {
    setLoading(true);
    setError(null);
    try {
      const dateStr = format(selectedDate, 'yyyy-MM-dd');
      const availability = await calendarService.getAvailability(dateStr, timezone);
      
      if (availability.slots) {
        const availableSlots = availability.slots.filter(slot => slot.available);
        setTimeSlots(availableSlots);
      } else {
        setTimeSlots([]);
      }
    } catch (error) {
      console.error('Error fetching time slots:', error);
      setError('Unable to load available times');
      setTimeSlots([]);
    } finally {
      setLoading(false);
    }
  };

  const formatTimeSlot = (timeStr: string) => {
    try {
      const time = parse(timeStr, 'HH:mm:ss', new Date());
      return format(time, 'h:mm a');
    } catch {
      return timeStr;
    }
  };

  const groupSlotsByPeriod = () => {
    const morning: TimeSlot[] = [];
    const afternoon: TimeSlot[] = [];
    const evening: TimeSlot[] = [];

    timeSlots.forEach(slot => {
      const hour = parseInt(slot.start.split(':')[0]);
      if (hour < 12) {
        morning.push(slot);
      } else if (hour < 17) {
        afternoon.push(slot);
      } else {
        evening.push(slot);
      }
    });

    return { morning, afternoon, evening };
  };

  const { morning, afternoon, evening } = groupSlotsByPeriod();

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex items-center justify-center py-12">
          <div className="flex flex-col items-center gap-2">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-200 border-t-blue-600"></div>
            <span className="text-sm text-gray-500">Loading time slots...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="text-center py-8">
          <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-3" />
          <p className="text-gray-900 font-medium mb-2">{error}</p>
          <button
            onClick={fetchTimeSlots}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-xl hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (timeSlots.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="text-center py-8">
          <Clock className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-900 font-medium">No time slots available</p>
          <p className="text-sm text-gray-500 mt-1">Please select another date</p>
        </div>
      </div>
    );
  }

  const renderTimeSlotSection = (title: string, slots: TimeSlot[], icon: string) => {
    if (slots.length === 0) return null;

    return (
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{icon}</span>
          <h4 className="text-sm font-medium text-gray-700">{title}</h4>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {slots.map((slot) => {
            const isSelected = selectedTime === slot.start;
            return (
              <button
                key={slot.start}
                onClick={() => onTimeSelect(slot.start)}
                className={`
                  px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                  ${isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }
                `}
              >
                {formatTimeSlot(slot.start)}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-4 h-4 text-gray-600" />
        <h3 className="text-lg font-medium text-gray-900">
          {format(selectedDate, 'EEEE, MMMM d')}
        </h3>
      </div>

      <div className="space-y-1">
        {renderTimeSlotSection('Morning', morning, '🌅')}
        {renderTimeSlotSection('Afternoon', afternoon, '☀️')}
        {renderTimeSlotSection('Evening', evening, '🌙')}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <Clock className="w-3 h-3" />
          Times shown in {timezone.split('/').pop()?.replace('_', ' ')} timezone
        </p>
      </div>
    </div>
  );
});

TimeSlotPicker.displayName = 'TimeSlotPicker';

export default TimeSlotPicker;