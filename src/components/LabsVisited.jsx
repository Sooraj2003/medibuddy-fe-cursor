const LabsVisited = ({data}) => {
    const {name, location, url, rating, totalRatings} = data;

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow h-[320px] flex flex-col overflow-hidden">
            <div className="relative">
                <figure className="relative w-full h-[160px] flex-shrink-0">
                    <img
                        src={url}
                        alt="labs"
                        className="w-full h-full object-cover rounded-t-lg"
                    />
                </figure>
                <div className="absolute -bottom-4 right-0 flex items-center bg-yellow-100 pl-3 pr-4 py-1.5 rounded-l-full shadow-md border border-r-0 border-yellow-200">
                    <span className="text-sm font-medium text-yellow-500">★</span>
                    <span className="text-sm font-medium text-black ml-0.5">{rating}</span>
                    <span className="text-xs text-black ml-1">({totalRatings} ratings)</span>
                </div>
            </div>
            <div className="p-4 pt-6 flex flex-col justify-between flex-grow">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-1.5">{name}</h2>
                    <div className="flex items-center mb-1.5">
                        <img 
                            src="/assets/gps.svg" 
                            alt="location" 
                            className="w-4 h-4 mr-2 flex-shrink-0"
                        />
                        <p className="text-sm text-gray-600 line-clamp-1">{location}</p>
                    </div>
                </div>
                <p className="text-sm text-gray-500">Next Slot - 07:30 AM, Tomorrow</p>
            </div>
        </div>
    );
}

export default LabsVisited
