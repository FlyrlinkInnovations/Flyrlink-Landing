import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, Clock, Dumbbell, Laptop, Palette, DollarSign, UtensilsCrossed, Camera, ArrowRight } from 'lucide-react';

const EventsSection = () => {
  const events = [
    { title: 'Wellness & Fitness', host: 'Dr. Kavya Narayan', location: 'Chennai, India', type: 'Online', date: 'Jan 15, 2025', time: '10:00 AM IST', icon: Dumbbell, attendees: 45 },
    { title: 'Tech/Next Startup', host: 'Ankit Verma', location: 'Online', type: 'Virtual', date: 'Jan 18, 2025', time: '3:00 PM IST', icon: Laptop, attendees: 78 },
    { title: 'Artistry & Design', host: 'Maya Chen', location: 'Bangalore, India', type: 'Hybrid', date: 'Jan 20, 2025', time: '2:00 PM IST', icon: Palette, attendees: 32 },
    { title: 'Finance 101', host: 'Rohit Mehta', location: 'Mumbai, India', type: 'In-Person', date: 'Jan 22, 2025', time: '11:00 AM IST', icon: DollarSign, attendees: 56 },
    { title: 'Culinary Skills', host: 'Neha Rao', location: 'Delhi, India', type: 'Workshop', date: 'Jan 25, 2025', time: '4:00 PM IST', icon: UtensilsCrossed, attendees: 24 },
    { title: 'Photography Basics', host: 'Lara Singh', location: 'Kolkata, India', type: 'Online', date: 'Jan 28, 2025', time: '6:00 PM IST', icon: Camera, attendees: 67 }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
            Events You Never Want to Miss
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join live sessions, workshops, and networking events with industry experts.
            Learn, connect, and grow your skills.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-sky-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Event Header */}
              <div className="relative h-40 bg-gray-50 flex items-center justify-center">
                <div className="w-16 h-16 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <event.icon className="w-8 h-8" />
                </div>

                {/* Event Type Badge */}
                <span className="absolute top-4 right-4 px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-700 border border-gray-200">
                  {event.type}
                </span>

                {/* Attendees Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 px-3 py-1 bg-white rounded-full border border-gray-200">
                  <Users className="w-3 h-3 text-gray-600" />
                  <span className="text-xs font-semibold text-gray-700">{event.attendees} joining</span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">{event.title}</h3>

                {/* Host Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 text-xs font-bold">
                    {event.host.split(' ').map(n => n[0]).join('')}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{event.host}</p>
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
                <button className="w-full bg-navy-900 hover:bg-sky-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events CTA */}
        <div className="text-center mb-16">
          <Link
            to="/waiting-list"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            View All Events
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Host Your Event CTA */}
        <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-200">
          <h3 className="text-3xl font-bold text-navy-900 mb-4">
            Want to Host an Event?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Share your expertise with our community. Create workshops, webinars, or networking events
            and connect with people who want to learn from you.
          </p>
          <Link
            to="/waiting-list"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-navy-900 hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Create an Event
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
