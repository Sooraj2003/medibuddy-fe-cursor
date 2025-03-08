import React from 'react';

const BookingCard = ({ booking }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-sm w-full relative p-6">
      {/* Header with Profile and Status */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                src={booking.profileImage || "https://via.placeholder.com/48"} 
                alt={booking.patientName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-[#4CAF50] rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-[#000B1C] text-[22px] font-bold leading-tight">
              {booking.patientName}
            </h3>
            <div className="flex items-center">
              <div className="text-[#4CAF50] font-medium text-[15px]">
                Appointment Confirmed
              </div>
            </div>
          </div>
        </div>
        <div className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M9 18l6-6-6-6" 
              stroke="#4285F4" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="bg-[#F8FAFC] rounded-2xl p-5">
        <div className="grid grid-cols-[1.2fr,1.5fr,0.8fr] gap-4">
          <div>
            <h4 className="text-[#000B1C] text-[24px] font-bold mb-1 leading-none">{booking.date}</h4>
            <p className="text-[#4D5E80] text-[15px] leading-tight">{booking.day}</p>
          </div>
          <div>
            <h4 className="text-[#000B1C] text-[24px] font-bold mb-1 leading-none">{booking.time}</h4>
            <p className="text-[#4D5E80] text-[15px] leading-tight">{booking.serviceType}</p>
          </div>
          <div className="text-right">
            <h4 className="text-[#000B1C] text-[24px] font-bold mb-1 leading-none">{booking.testCount}</h4>
            <p className="text-[#4D5E80] text-[15px] leading-tight">Lab Tests</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard; 