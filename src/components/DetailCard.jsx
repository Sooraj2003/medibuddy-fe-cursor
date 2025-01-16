

const DetailCard = ({ pack }) => {
  if (!pack) return <h1>ddad</h1>; // Safeguard against undefined or null props

  console.log(pack);
  

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
    <div className="card min-w-96 bg-base-200 shadow-md my-5 py-5 rounded-2xl ">
      <div className="card-body">
        {/* Package Display Name */}
        <h2 className="card-title text-2xl font-semibold">
          {packageDisplayName || "No Package Name Available"}
        </h2>

        {/* Reports TAT */}
        {reportsTatText && <p className="text-blue-500">{reportsTatText}</p>}

        {/* Test Details */}
        <div className="flex justify-between items-start mt-4">
          <div>
            <h1 className="text-lg font-semibold">{testCount || 0} Tests</h1>
            <ul className="list-disc ml-8">
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
            <h1 className="text-lg font-semibold">Includes</h1>
            <p>Radiology</p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="flex justify-between items-center bg-gray-300 p-3 rounded-md mt-4">
          <div>
            <h1 className="text-lg font-semibold">Fasting</h1>
            <p>{fastingHoursText || "Not Required"}</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Available</h1>
            <p>{currentVisitType || "Not Specified"}</p>
          </div>
        </div>

        {/* Pricing and Action */}
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-xl font-bold">Rs {price || "N/A"}</h1>
          <button className="btn btn-outline px-9 btn-success flex items-center">
            <span className="px-2">+</span>
            <span className="px-4">1</span>
            <span className="px-2">-</span>
          </button>
        </div>
      </div>
    </div>
  );
};




export default DetailCard;
