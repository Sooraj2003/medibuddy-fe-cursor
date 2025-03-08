import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addDetail } from "../utils/detailSlice";
import { useEffect, useRef, useState } from "react";
import ButtonCategories from "./ButtonCategories";
import DetailCard from "./DetailCard";
import { Link } from "react-router-dom";

const Detail = () => {
    const dispatch = useDispatch();
    const detail = useSelector((store)=>store.detail);
    const packages=detail?.props[0]?.packages;
    const containerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(true);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkScroll = () => {
      const container = containerRef.current;
      if (container) {
        setShowLeftArrow(container.scrollLeft >= 0);
        const canScrollRight = container.scrollWidth > container.clientWidth &&
          container.scrollLeft < container.scrollWidth - container.clientWidth;
        setShowRightArrow(canScrollRight);
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
    
    const fetchDetail = async()=>{
      const res = await axios.get("https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config");
      dispatch(addDetail(res?.data[0]?.page_config[2]));
    }

    useEffect(()=>{
      if(!detail){
        fetchDetail();
      }
    },[])
     
    return (
        detail && packages && (
          <div className="w-full min-h-[600px] bg-[#EEF5FF] p-0 md:p-10 rounded-xl">
            <div className="flex justify-between items-center mb-8 px-4 md:px-0">
              <h1 className="text-[#000B1C] text-2xl lg:text-[32px] font-bold leading-tight">
                {detail?.heading}
              </h1>
              <Link 
                to="/viewall" 
                className="text-[#4285F4] text-sm lg:text-base font-medium hover:underline hover:text-[#2b5797] transition-colors"
              >
                View All
              </Link>
            </div>
            
            <div className="mb-8 px-4 md:px-0">
              <ButtonCategories categories={detail?.categories?.["10386"]} />
            </div>
            
            <div className="relative min-h-[400px]">
              {/* Left Arrow */}
              <button 
                onClick={() => scrollContainer('left')}
                className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white shadow-lg rounded-full text-[#4285F4] hover:bg-[#4285F4]/5 transition-all hover:scale-105"
              >
                <span className="text-xl">←</span>
              </button>

              {/* Cards Container */}
              <div className="w-full overflow-x-hidden px-0 md:px-14">
                <div 
                  ref={containerRef}
                  className="flex snap-x snap-mandatory md:snap-none gap-4 md:gap-6 pb-8 pt-2 scroll-smooth overflow-x-auto no-scrollbar"
                >
                  {packages?.map((pack,index)=>{
                     return (
                       <div key={index} className="snap-center w-[calc(100%-2rem)] md:w-auto flex-shrink-0 md:flex-shrink px-4 md:px-0">
                         <DetailCard index={index} pack={pack}/>
                       </div>
                     )
                  })}
                </div>
              </div>

              {/* Right Arrow */}
              {showRightArrow && (
                <button 
                  onClick={() => scrollContainer('right')}
                  className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white shadow-lg rounded-full text-[#4285F4] hover:bg-[#4285F4]/5 transition-all hover:scale-105"
                >
                  <span className="text-xl">→</span>
                </button>
              )}
            </div>
          </div>
        )
      );
};

export default Detail;
