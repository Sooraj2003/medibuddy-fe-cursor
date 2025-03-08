import { useEffect, useState, useRef } from 'react';

const ButtonCategories = ({ categories }) => {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    const container = containerRef.current;
    if (container) {
      // Check if we can scroll left
      setShowLeftArrow(container.scrollLeft > 0);
      
      // Check if we can scroll right
      const canScrollRight = container.scrollWidth > container.clientWidth &&
        container.scrollLeft < container.scrollWidth - container.clientWidth;
      setShowRightArrow(canScrollRight);
    }
  };

  useEffect(() => {
    checkScroll();
    // Add scroll event listener
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      // Also check on window resize
      window.addEventListener('resize', checkScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      }
    };
  }, []);

  const scrollContainer = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    categories && (
      <div className="relative w-full mb-6">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button 
            onClick={() => scrollContainer('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white shadow-md rounded-full text-[#4285F4] hover:bg-[#4285F4]/5"
          >
            ←
          </button>
        )}

        {/* Categories Container */}
        <div className="w-full overflow-x-hidden px-10">
          <div 
            ref={containerRef}
            className="flex gap-3 pb-2 scroll-smooth overflow-x-auto no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => (
              <button 
                key={index} 
                className="px-4 py-2 bg-white text-[#000B1C] text-[13px] font-medium rounded-full whitespace-nowrap shadow-sm hover:bg-[#4285F4]/5 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button 
            onClick={() => scrollContainer('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white shadow-md rounded-full text-[#4285F4] hover:bg-[#4285F4]/5"
          >
            →
          </button>
        )}
      </div>
    )
  );
};

export default ButtonCategories;
