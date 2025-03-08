import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonCategories from './ButtonCategories';
import PopularLabCard from './PopularLabCard';
import { addLabTests, setLoading } from '../utils/labTestsSlice';
import { mockLabTests } from '../utils/mockData';

const PopularLabTest = () => {
  const dispatch = useDispatch();
  const { items: labTests, isLoading, error } = useSelector((store) => store.labTests);

  useEffect(() => {
    if (labTests.length === 0) {
      dispatch(setLoading());
      dispatch(addLabTests(mockLabTests));
    }
  }, [dispatch, labTests.length]);

  if (isLoading) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading lab tests...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white px-4 md:px-10 py-6 md:py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[#000B1C] text-[24px] font-bold leading-tight">
          Book Popular Lab Tests
        </h1>
        <a 
          href="#viewmore"
          className="text-[#4285F4] text-[16px] font-medium hover:underline"
        >
          View More
        </a>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <ButtonCategories categories={[
          "For Amazon Employees",
          "Center Visit",
          "Full Body Checkup",
          "Health Screening",
          "Diabetes"
        ]} />
      </div>

      {/* Lab Tests Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {labTests.map((test) => (
          <PopularLabCard key={test.id} test={test} />
        ))}
      </div>
    </div>
  );
};

export default PopularLabTest; 