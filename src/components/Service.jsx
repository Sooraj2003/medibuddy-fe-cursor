import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addServices } from "../utils/servicesSlice";

const Service = () => {
    const dispatch = useDispatch();
    const services = useSelector((store)=>store.services);
    
    const fetchServices = async()=>{
      const res = await axios.get("https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config");
      dispatch(addServices(res?.data[0]?.page_config[0]?.props));
    }
    
    useEffect(()=>{
      if(!services){
        fetchServices();
      }
    },[])

    

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-x-16 md:gap-y-12 p-2 md:p-4 h-full my-6">
    {services?.map((service, index) => {
      const { iconText, iconUrl } = service;
      return (
        <div key={index} className="flex flex-col items-center w-24 md:w-48 text-center">
          <img src={iconUrl} alt={iconText} className="w-20 h-20 md:w-40 md:h-40" />
          <span className="text-sm md:text-2xl font-medium mt-2">{iconText}</span>
        </div>
      );
    })}
  </div>
  
  )
}

export default Service
