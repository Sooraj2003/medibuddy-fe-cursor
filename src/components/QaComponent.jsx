import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFaqs } from "../utils/faqSlice";
import axios from "axios";

const QaComponent = () => {
    const dispatch = useDispatch();
    const faqs = useSelector((store) => store.faqs);
    const [openIndex, setOpenIndex] = useState(null);
   
    const defaultAnswer = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    
    const fetchFaqs = async() => {
      const res = await axios.get("https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config");
      dispatch(addFaqs(res?.data[0]?.page_config[6]?.props));
    }

    useEffect(() => {
      if(!faqs){
        fetchFaqs();
      }
    }, [])

    const handleAccordionClick = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    const renderContent = (faq, faqIndex) => {
      return (
        <div className="space-y-4">
          {faq?.answer && (
            <p className="text-[14px] md:text-[15px] text-[#344054] font-normal font-sans">
              {faq.answer}
            </p>
          )}
          {faq?.points && faq.points.length > 0 && (
            <ul className="space-y-3 pl-4">
              {faq.points.map((point, pointIndex) => (
                <li 
                  key={`faq-${faqIndex}-point-${point.idx || pointIndex}`} 
                  className="text-[14px] md:text-[15px] text-[#344054] flex items-start gap-3 font-sans"
                >
                  {point.img ? (
                    <img 
                      src={point.img} 
                      alt="" 
                      className="w-5 h-5 object-contain mt-0.5"
                    />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#344054] mt-2"></div>
                  )}
                  <span>{point.pnt}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    };

    return faqs && (
      <div className="w-full max-w-2xl mx-auto py-8 md:py-16 px-4 md:px-0">
        <h1 className="text-2xl md:text-[28px] font-semibold text-[#2D3648] mb-10 font-sans text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div 
              key={`faq-${index}`}
              className="border border-[#E4E7EC] rounded-xl overflow-hidden bg-[#FFFFFF]"
            >
              <button
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-[#F7FAFF] transition-colors"
                onClick={() => handleAccordionClick(index)}
              >
                <span className="text-[15px] md:text-[16px] font-medium text-[#344054] pr-8 font-sans">
                  {faq?.question}
                </span>
                <div className={`w-6 h-6 rounded-full border border-[#344054] flex items-center justify-center flex-shrink-0`}>
                  {openIndex === index ? (
                    <svg 
                      className="w-4 h-4 text-[#344054]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
                    <svg 
                      className="w-4 h-4 text-[#344054]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <div className="p-4 md:p-5 pt-0">
                  {renderContent(faq, index)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default QaComponent;
