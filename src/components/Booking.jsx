import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookingCard from './BookingCard';
import { addBookings } from '../utils/bookingSlice';
import { mockBookings } from '../utils/mockData';

const Booking = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((store) => store.bookings);
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(true);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    const container = containerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft >= 0);
      const canScrollRight = container.scrollWidth > container.clientWidth &&
        container.scrollLeft < container.scrollWidth - container.clientWidth;
      setShowRightArrow(canScrollRight);
      
      // Update active index based on scroll position
      const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth);
      const newIndex = Math.round(scrollPercentage * (bookings.length - 1));
      setActiveIndex(newIndex);
    }
  };

  const scrollContainer = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkScroll();
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (bookings.length === 0) {
      dispatch(addBookings(mockBookings));
    }
  }, [dispatch, bookings.length]);

  if (bookings.length === 0) {
    return <div className="w-full h-[300px] flex items-center justify-center">
      <div className="text-[#4D5E80]">Loading bookings...</div>
    </div>;
  }

  return (
    <div className="w-full bg-[#FFFFFF] px-4 md:px-10 py-6 md:py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[24px] md:text-[32px] font-bold leading-tight text-[#000B1C]">
          Your Active Bookings
        </h1>
        <a 
          href="#viewall"
          className="text-[#4285F4] text-[14px] md:text-[18px] font-medium hover:underline"
        >
          View All
        </a>
      </div>

      <div className="relative">
        {/* Cards Container */}
        <div className="w-full overflow-x-hidden">
          <div 
            ref={containerRef}
            className="flex snap-x snap-mandatory md:snap-none gap-4 md:gap-6 scroll-smooth overflow-x-auto no-scrollbar"
          >
            {bookings.map((booking) => (
              <div 
                key={booking.id} 
                className="w-[calc(100%-2rem)] md:w-[calc(33.333%-1rem)] flex-shrink-0 first:ml-0"
              >
                <BookingCard booking={booking} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Desktop Only */}
        <button 
          onClick={() => scrollContainer('left')}
          className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] rounded-full"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {showRightArrow && (
          <button 
            onClick={() => scrollContainer('right')}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] rounded-full"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>

      {/* Dots Indicator - Mobile Only */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {bookings.map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? 'bg-[#4285F4]' : 'bg-[#E5E7EB]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Booking;
