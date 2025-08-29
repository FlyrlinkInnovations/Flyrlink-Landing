import React, { useState, useEffect, memo } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { calendarService, TimeSlot } from '../../services/calendar';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isBefore, startOfToday, addMonths, subMonths } from 'date-fns';

interface CalendarViewProps {
  onDateSelect: (date: Date) => void;
  selectedDate: Date | null;
  timezone: string;
}

const CalendarView = memo(({ onDateSelect, selectedDate, timezone }: CalendarViewProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [availableDates, setAvailableDates] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const startDayOfWeek = monthStart.getDay();
  const emptyDays = Array(startDayOfWeek).fill(null);

  useEffect(() => {
    fetchMonthAvailability();
  }, [currentMonth, timezone]);

  const fetchMonthAvailability = async () => {
    setLoading(true);
    try {
      const availableDatesSet = new Set<string>();
      
      for (const day of monthDays) {
        if (!isBefore(day, startOfToday())) {
          try {
            const dateStr = format(day, 'yyyy-MM-dd');
            const availability = await calendarService.getAvailability(dateStr, timezone);
            if (availability.slots && availability.slots.some((slot: TimeSlot) => slot.available)) {
              availableDatesSet.add(dateStr);
            }
          } catch (error) {
            console.error(`Error fetching availability for ${format(day, 'yyyy-MM-dd')}:`, error);
          }
        }
      }
      
      setAvailableDates(availableDatesSet);
    } catch (error) {
      console.error('Error fetching month availability:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDateClick = (date: Date) => {
    if (!isBefore(date, startOfToday()) && availableDates.has(format(date, 'yyyy-MM-dd'))) {
      onDateSelect(date);
    }
  };

  const isDateAvailable = (date: Date) => {
    return availableDates.has(format(date, 'yyyy-MM-dd'));
  };

  const isDateDisabled = (date: Date) => {
    return isBefore(date, startOfToday()) || !isDateAvailable(date);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 relative">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-medium text-gray-900">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <div className="flex gap-1">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-gray-50 rounded-xl transition-all"
            disabled={isBefore(subMonths(currentMonth, 1), startOfToday())}
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-gray-50 rounded-xl transition-all"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {loading && (
        <div className="absolute inset-0 bg-white/90 flex items-center justify-center rounded-2xl z-10">
          <div className="flex flex-col items-center gap-2">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-200 border-t-blue-600"></div>
            <span className="text-sm text-gray-500">Loading availability...</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-7 gap-1 mb-3">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
          <div key={i} className="text-center text-xs font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} className="aspect-square" />
        ))}
        
        {monthDays.map((date) => {
          const isDisabled = isDateDisabled(date);
          const isSelected = selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
          const isAvailable = isDateAvailable(date);
          const isTodayDate = isToday(date);

          return (
            <button
              key={date.toISOString()}
              onClick={() => handleDateClick(date)}
              disabled={isDisabled}
              className={`
                aspect-square flex items-center justify-center rounded-xl text-sm
                transition-all duration-200 relative
                ${isDisabled 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'hover:bg-gray-50 cursor-pointer text-gray-700'
                }
                ${isSelected 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 font-medium shadow-sm' 
                  : ''
                }
                ${isAvailable && !isSelected && !isDisabled
                  ? 'text-gray-900 font-medium'
                  : ''
                }
                ${isTodayDate && !isSelected
                  ? 'bg-gray-50 font-semibold'
                  : ''
                }
              `}
            >
              {format(date, 'd')}
              {isAvailable && !isDisabled && !isSelected && (
                <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-500">Today</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
          <span className="text-gray-500">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-600 rounded"></div>
          <span className="text-gray-500">Selected</span>
        </div>
      </div>
    </div>
  );
});

CalendarView.displayName = 'CalendarView';

export default CalendarView;