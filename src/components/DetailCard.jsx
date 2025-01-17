import { useDispatch, useSelector } from "react-redux";
import { decCount, incCount } from "../utils/countSlice";


const DetailCard = ({ pack,index }) => {
  const dispatch = useDispatch();
  const count = useSelector((store)=>store.count);
  if (!pack) return <h1>ddad</h1>; // Safeguard against undefined or null props

 

  const handleIncrement = (index)=>{
    dispatch(incCount(index));
  }

  const handleDecrement = (index)=>{
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
    <div className="card min-w-60 md:min-w-96 bg-white shadow-md my-4 md:my-5 py-2 md:py-5 rounded-2xl ">
      <div className="card-body">
        {/* Package Display Name */}
        <h2 className="card-title text-sm md:text-2xl font-semibold">
          {packageDisplayName || "No Package Name Available"}
        </h2>

        {/* Reports TAT */}
        {reportsTatText && <p className="text-blue-500 text-xs md:text-lg">{reportsTatText}</p>}

        {/* Test Details */}
        <div className="flex justify-between items-start  md:mt-4">
          <div>
            <h1 className="text-sm md:text-lg font-semibold">{testCount || 0} Tests</h1>
            <ul className="list-disc ml-8 text-xs md:text-sm">
              {subCategories && subCategories.length > 0 ? (
                subCategories.slice(0, 3).map((category, index) => (
                  <li key={index}>{category}</li>
                ))
              ) : (
                <li>No subcategories available</li>
              )}
            </ul>
          </div>
          <div>
            <h1 className="text-sm md:text-lg font-semibold">Includes</h1>
            <p className="text-xs md:text-sm">Radiology</p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="flex justify-between items-center bg-gray-300 p-3 rounded-md mt-4">
          <div>
            <h1 className="text-sm md:text-lg font-semibold">Fasting</h1>
            <p className="text-xs md:text-sm">{fastingHoursText || "Not Required"}</p>
          </div>
          <div>
            <h1 className="text-sm md:text-lg font-semibold">Available</h1>
            <p className="text-xs md:text-sm">{currentVisitType || "Not Specified"}</p>
          </div>
        </div>

        {/* Pricing and Action */}
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-md md:text-xl font-bold">Rs {count.index==index ? price*count?.count : price || "N/A"}</h1>
          <button className="btn btn-outline px-2 md:px-9 btn-success flex items-center">
            <span className="px-1 md:px-2" onClick={()=>handleIncrement(index)}>+</span>
            <span className="px-2 md:px-4">{count.index==index ? count.count : "1"}</span>
            <span className="px-1 md:px-2" onClick={()=>handleDecrement(index)}>-</span>
          </button>
        </div>
      </div>
    </div>
  );
};




export default DetailCard;
