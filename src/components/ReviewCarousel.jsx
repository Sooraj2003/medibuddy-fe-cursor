import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../utils/reviewSlice";
import axios from "axios";

const ReviewCarousel = () => {
  const dispatch = useDispatch();
  const reviewObject = useSelector((store) => store.reviews);
  const reviews = useSelector((store) => store.reviews?.props);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch reviews from API and store them in Redux
  const fetchReview = async () => {
    const res = await axios.get(
      "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config"
    );
    dispatch(addReview(res?.data[0]?.page_config[5]));
  };

  useEffect(() => {
    if(!reviewObject){
      fetchReview();
    }
  }, []);

  // Next and Previous Handlers
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-0.5">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-3 h-3 md:w-3.5 md:h-3.5 ${
              index < rating ? "text-[#FFB800]" : "text-[#E5E7EB]"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Render the carousel
  return (
    <div className="w-full text-center my-8 md:my-16 p-2 md:p-5">
      <h1 className="text-2xl md:text-[32px] font-semibold text-[#2D3648] mb-10 font-sans">
        {reviewObject?.title || "What our customers say"}
      </h1>
      <div className="w-full h-full py-5 flex justify-center items-center">
        {reviews?.length > 0 ? (
          <div className="relative w-full max-w-xl mx-auto">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-none w-full px-5 py-6 md:px-7 md:py-8 text-center bg-[#F7FAFF] shadow-[0_2px_8px_rgba(0,0,0,0.06)] rounded-xl"
                >
                  <div className="max-w-md mx-auto h-full flex flex-col">
                    <div className="flex justify-between items-center text-[#667085] mb-4 md:mb-5">
                      <span className="text-xs md:text-sm font-normal">
                        {review.daysAgo || "2"} Days Ago
                      </span>
                      <StarRating rating={review.rating} />
                      <span className="text-xs md:text-sm font-normal">
                        {review.location || "Bangalore"}
                      </span>
                    </div>

                    <p className="text-[#344054] text-sm md:text-base leading-[22px] md:leading-[26px] mb-6 md:mb-8 font-normal px-2">
                      "{review.content || "Good app and very helpful to customer as customer can book online health check up and book hospitalization as customer ca..."}"
                    </p>

                    <div className="mt-auto flex items-center justify-center gap-2.5 md:gap-3">
                      <div className="w-6 h-6 md:w-7 md:h-7 bg-[#E0EAFF] rounded-full flex items-center justify-center">
                        <span className="text-[#4F46E5] text-xs md:text-sm font-medium">
                          {(review.name || "Vikrant Kishore Suryavanshi").charAt(0)}
                        </span>
                      </div>
                      <h2 className="font-medium text-sm md:text-base text-[#344054]">
                        {review.name || "Vikrant Kishore Suryavanshi"}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 -left-3 md:-left-4 transform -translate-y-1/2 bg-white text-[#344054] rounded-full p-1.5 md:p-2 shadow-md hover:bg-gray-50 transition-all"
              aria-label="Previous slide"
            >
              <svg
                width="12"
                height="12"
                className="md:w-4 md:h-4"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-3 md:-right-4 transform -translate-y-1/2 bg-white text-[#344054] rounded-full p-1.5 md:p-2 shadow-md hover:bg-gray-50 transition-all"
              aria-label="Next slide"
            >
              <svg
                width="12"
                height="12"
                className="md:w-4 md:h-4"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="text-[#667085]">Loading reviews...</div>
        )}
      </div>
    </div>
  );
};

export default ReviewCarousel;
