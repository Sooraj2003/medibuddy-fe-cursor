import { Link } from "react-router-dom"
import LabsVisited from "./LabsVisited"
import { useRef } from "react"

const Labs = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const isMobile = window.innerWidth < 768;
            const scrollAmount = direction === 'left' 
                ? (isMobile ? -(window.innerWidth - 64) : -340)
                : (isMobile ? (window.innerWidth - 64) : 340);
            
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // dummy data : as data was not present in the api
    const dummyData = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
            name: "Apollo Diagnostics",
            location: "Kengeri, Bengaluru",
            rating: "4.5",
            totalRatings: 120
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
            name: "Pharma Diagnostics",
            location: "Jayanagar, Bengaluru",
            rating: "4.7",
            totalRatings: 89
        },
        {
            id: 3,
            url: "https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
            name: "Medibuddy Diagnostics",
            location: "Vasanth Nagar, Bengaluru",
            rating: "4.8",
            totalRatings: 156
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1502740479091-635887520276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
            name: "MediPharma Diagnostics",
            location: "Hennur, Bengaluru",
            rating: "4.6",
            totalRatings: 95
        },
        {
            id: 5,
            url: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMGxhYnxlbnwwfHwwfHx8MA%3D%3D",
            name: "HealthCare Diagnostics Center",
            location: "Whitefield, Bengaluru",
            rating: "4.9",
            totalRatings: 203
        },
        {
            id: 6,
            url: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbCUyMGxhYnxlbnwwfHwwfHx8MA%3D%3D",
            name: "City Scan & Diagnostics",
            location: "Koramangala, Bengaluru",
            rating: "4.4",
            totalRatings: 167
        },
        {
            id: 7,
            url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGljYWwlMjBsYWJ8ZW58MHx8MHx8fDA%3D",
            name: "Thyrocare Diagnostics",
            location: "HSR Layout, Bengaluru",
            rating: "4.3",
            totalRatings: 142
        },
        {
            id: 8,
            url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZGljYWwlMjBsYWJ8ZW58MHx8MHx8fDA%3D",
            name: "Max Lab Diagnostics",
            location: "Electronic City, Bengaluru",
            rating: "4.7",
            totalRatings: 178
        }
    ]

    return (
        <section className="max-w-[1440px] mx-auto overflow-hidden">
            <div className="px-4 lg:px-8 py-8 md:py-12">
                <div className="flex justify-between items-center mb-6 md:mb-10">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Labs Visited</h1>
                    <Link 
                        to="/viewmore" 
                        className="text-sm md:text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        View more
                    </Link>
                </div>
                
                <div className="relative">
                    <button 
                        onClick={() => scroll('left')}
                        className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                        aria-label="Scroll left"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <div 
                        ref={scrollContainerRef}
                        className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide scroll-smooth"
                        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                    >
                        {dummyData?.map((data, index) => (
                            <div key={index} className="flex-none w-[calc(100vw-80px)] md:w-[320px] snap-center">
                                <LabsVisited data={data} />
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={() => scroll('right')}
                        className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                        aria-label="Scroll right"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Labs
