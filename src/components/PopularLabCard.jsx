import React from 'react';

const PopularLabCard = ({ test }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-md relative">
      {/* Cashless Tag */}
      <div className="absolute top-0 right-0">
        <div className="bg-[#4CAF50] text-white px-4 py-1.5 rounded-tr-[20px] rounded-bl-[20px] flex items-center gap-1.5">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[14px] font-medium">Cashless</span>
        </div>
      </div>

      <div className="p-6">
        {/* Test Name */}
        <div className="flex items-start gap-3 mb-4">
          <div className="mt-1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z" stroke="#4D5E80" strokeWidth="1.5"/>
              <path d="M10 5V10L13.3333 11.6667" stroke="#4D5E80" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="text-[#000B1C] text-[18px] font-bold leading-tight">
            {test.name}
          </h3>
        </div>

        {/* Report Time */}
        <div className="flex items-center gap-2 mb-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.8333 5.83333L15.8333 10.8333L10.8333 15.8333M4.16667 5.83333L9.16667 10.8333L4.16667 15.8333" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[#4285F4] text-[15px] font-medium">Reports in {test.reportTime}</span>
        </div>

        {/* Location and Type */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M15 15H3V8.25L9 3L15 8.25V15Z" stroke="#4D5E80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#4D5E80] text-[14px]">Home</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7.5 3H10.5V6.75L15 12.75V15H3V12.75L7.5 6.75V3Z" stroke="#4D5E80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#4D5E80] text-[14px]">Lab</span>
          </div>
        </div>

        {/* Price and Add Button */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[#98A2B3] text-[14px] line-through">₹{test.originalPrice}/-</span>
              <span className="text-[#4CAF50] text-[14px] font-medium">{test.discount}% OFF</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#000B1C] text-[20px] font-bold">₹{test.price}/-</span>
              <span className="text-[#98A2B3] text-[14px]">Onwards</span>
            </div>
          </div>
          <button className="bg-[#4285F4] text-white text-[16px] font-medium px-8 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularLabCard; 