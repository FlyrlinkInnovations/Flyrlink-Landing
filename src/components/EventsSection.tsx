import React from 'react';
import { MapPin, Calendar, Users, Clock, Dumbbell, Laptop, Palette, DollarSign, UtensilsCrossed, Camera } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      title: 'Wellness & Fitness',
      host: 'Dr. Kavya Narayan',
      location: 'Chennai, India',
      type: 'Online',
      date: 'Jan 15, 2025',
      time: '10:00 AM IST',
      icon: Dumbbell,
      attendees: 45
    },
    {
      title: 'Tech/Next Startup',
      host: 'Ankit Verma',
      location: 'Online',
      type: 'Virtual',
      date: 'Jan 18, 2025',
      time: '3:00 PM IST',
      icon: Laptop,
      attendees: 78
    },
    {
      title: 'Artistry & Design',
      host: 'Maya Chen',
      location: 'Bangalore, India',
      type: 'Hybrid',
      date: 'Jan 20, 2025',
      time: '2:00 PM IST',
      icon: Palette,
      attendees: 32
    },
    {
      title: 'Finance 101',
      host: 'Rohit Mehta',
      location: 'Mumbai, India',
      type: 'In-Person',
      date: 'Jan 22, 2025',
      time: '11:00 AM IST',
      icon: DollarSign,
      attendees: 56
    },
    {
      title: 'Culinary Skills',
      host: 'Neha Rao',
      location: 'Delhi, India',
      type: 'Workshop',
      date: 'Jan 25, 2025',
      time: '4:00 PM IST',
      icon: UtensilsCrossed,
      attendees: 24
    },
    {
      title: 'Photography Basics',
      host: 'Lara Singh',
      location: 'Kolkata, India',
      type: 'Online',
      date: 'Jan 28, 2025',
      time: '6:00 PM IST',
      icon: Camera,
      attendees: 67
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
            Events You Never Want to Miss
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join live sessions, workshops, and networking events with industry experts.
            Learn, connect, and grow your skills.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300"
            >
              {/* Event Image/Icon */}
              <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <event.icon className="w-10 h-10 text-sky-600" />
                </div>

                {/* Event Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-700 shadow-sm">
                    {event.type}
                  </span>
                </div>

                {/* Attendees Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-white rounded-full shadow-sm">
                    <Users className="w-3 h-3 text-gray-600" />
                    <span className="text-xs font-semibold text-gray-700">{event.attendees} joining</span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {event.title}
                </h3>

                {/* Host Info */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 text-xs font-bold">
                    {event.host.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">{event.host}</p>
                  </div>
                </div>

                {/* Event Meta */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                </div>

                {/* Join Button */}
                <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Want to see all upcoming events?
          </p>
          <button className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
            View All Events
          </button>
        </div>

        {/* Host Your Event CTA */}
        <div className="mt-16 bg-white rounded-xl p-12 border border-gray-200 text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-4">
            Want to Host an Event?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Share your expertise with our community. Create workshops, webinars, or networking events
            and connect with people who want to learn from you.
          </p>
          <button className="px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
            Create an Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
