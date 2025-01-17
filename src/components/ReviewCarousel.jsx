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

  // Render the carousel
  return (
    <div className="w-full text-center my-8 md:my-10 p-2 md:p-5">
        <h1 className="text-2xl md:text-5xl font-bold">{reviewObject?.title}</h1>
    <div className="w-full h-full  py-5 md:py-10 flex justify-center items-center">
        
      {reviews?.length > 0 ? (
        <div className="relative w-full max-w-6xl">
          {/* Carousel Content */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-none m-1 md:m-3 w-full px-4 py-11 text-center bg-gray-100 shadow-md rounded-lg"
              >
                {/* Review Content */}
                <div className="p-6">
                  {/* Top Section: Days Ago and Location */}
                  <div className="flex justify-between text-gray-500 mb-4">
                    <span>{review.daysAgo || "2"} days ago</span>
                    {/* Star Rating */}
                  <div className="text-yellow-400 text-md md:text-xl mb-2">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                    <span>{review.location||"Bangalore"}</span>
                  </div>

                  

                  {/* Review Content */}
                  <p className="text-gray-700 mb-2 md:mb-4 text-xs md:text-xl">{review.content}</p>

                  <div className="divider"></div>

                  {/* User Name */}
                  <h2 className="relative font-bold text-md md:text-lg text-gray-800 top-10">
                    {review.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full p-2 shadow hover:bg-gray-300"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full p-2 shadow hover:bg-gray-300"
          >
            &gt;
          </button>
        </div>
      ) : (
        <div className="text-gray-600">Loading reviews...</div>
      )}
    </div>
    </div>
  );
};

export default ReviewCarousel;
