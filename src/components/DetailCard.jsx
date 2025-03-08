import { useDispatch, useSelector } from "react-redux";
import { decCount, incCount } from "../utils/countSlice";

const DetailCard = ({ pack, index }) => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count);
  if (!pack) return null;

  const handleIncrement = (index) => {
    dispatch(incCount(index));
  }

  const handleDecrement = (index) => {
    dispatch(decCount(index));
  }

  const {
    packageDisplayName,
    reportsTatText,
    testCount,
    subCategories,
    currentVisitType,
    price,
    fastingHoursText,
  } = pack;

  return (
    <div className="min-w-[380px] max-w-[380px] h-[320px] bg-white shadow-sm rounded-[16px] p-5 relative flex flex-col overflow-hidden">
      {/* Sponsored Tag */}
      <div className="absolute -top-0 -right-0">
        <div className="bg-[#FF0000] text-white text-[10px] px-4 py-1 rounded-bl-lg">
          Sponsored
        </div>
      </div>

      <div className="flex-1 flex flex-col pt-4">
        {/* Package Display Name */}
        <h2 className="text-[#000B1C] text-[18px] font-bold leading-tight">
          {packageDisplayName || "No Package Name Available"}
        </h2>

        {/* Reports TAT */}
        {reportsTatText && (
          <div className="flex items-center gap-1 mt-1">
            <span className="text-[#4285F4] text-sm">🕒</span>
            <p className="text-[#4285F4] text-[13px] font-medium">
              {reportsTatText}
            </p>
          </div>
        )}

        {/* Test Details */}
        <div className="flex justify-between mt-4">
          <div className="flex-1">
            <h3 className="text-[#000B1C] text-[15px] font-bold">
              {testCount || 90} Tests
            </h3>
            <ul className="list-none mt-1 space-y-[2px]">
              {subCategories && subCategories.length > 0 ? (
                subCategories.slice(0, 2).map((category, index) => (
                  <li key={index} className="text-[#4A4A4A] text-[13px] flex items-center gap-2">
                    <span className="w-[3px] h-[3px] bg-[#4A4A4A] rounded-full"></span>
                    {category}
                  </li>
                ))
              ) : (
                <>
                  <li className="text-[#4A4A4A] text-[13px] flex items-center gap-2">
                    <span className="w-[3px] h-[3px] bg-[#4A4A4A] rounded-full"></span>
                    Cholesterol - Total
                  </li>
                  <li className="text-[#4A4A4A] text-[13px] flex items-center gap-2">
                    <span className="w-[3px] h-[3px] bg-[#4A4A4A] rounded-full"></span>
                    Vitamin D... + 87 more
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="ml-4">
            <h3 className="text-[#000B1C] text-[15px] font-bold mb-1">
              Includes
            </h3>
            <div className="flex items-center gap-1">
              <span className="text-[#4285F4] text-[13px]">📋</span>
              <p className="text-[#4A4A4A] text-[13px]">Radiology</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="flex justify-between bg-[#F8F9FA] p-3 rounded-lg mt-auto mb-4">
          <div>
            <h3 className="text-[#000B1C] text-[13px] font-bold">
              Fasting
            </h3>
            <p className="text-[#4A4A4A] text-[13px] mt-[2px]">
              {fastingHoursText || "07-08 Hrs"}
            </p>
          </div>
          <div>
            <h3 className="text-[#000B1C] text-[13px] font-bold">
              Available
            </h3>
            <div className="flex items-center gap-1 mt-[2px]">
              <span className="text-[#4285F4] text-[13px]">🏠</span>
              <p className="text-[#4A4A4A] text-[13px]">
                {currentVisitType || "Home"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing and Action */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[#000B1C] text-[18px] font-bold">₹</span>
          <span className="text-[#000B1C] text-[18px] font-bold ml-[2px]">
            {count.index === index ? price * count?.count : price || "0"}
          </span>
        </div>
        <div className="flex items-center border border-[#4285F4] rounded-full overflow-hidden">
          <button 
            className="w-8 h-8 flex items-center justify-center text-[#4285F4] text-lg font-medium hover:bg-[#4285F4]/5"
            onClick={() => handleDecrement(index)}
          >
            -
          </button>
          <span className="w-8 h-8 flex items-center justify-center text-[#000B1C] text-[15px] font-medium">
            {count.index === index ? count.count : "1"}
          </span>
          <button 
            className="w-8 h-8 flex items-center justify-center text-[#4285F4] text-lg font-medium hover:bg-[#4285F4]/5"
            onClick={() => handleIncrement(index)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
