import { useDispatch, useSelector } from "react-redux";
import Carousel from "./Carousel";
import axios from "axios";
import { addBanners } from "../utils/bannersSlice";
import { useEffect } from "react";

const Banner = () => {
    
    const dispatch = useDispatch();
    const banners = useSelector((store)=>store.banners);
    
    const fetchBanners = async()=>{
      const res = await axios.get("https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config");
     
      dispatch(addBanners(res?.data[0]?.page_config[1]?.props));
    }
    useEffect(()=>{
      fetchBanners();
    },[])
  return (
    <div className="flex justify-center items-center my-28 ">
        {banners && <Carousel banners={banners} />}
    </div>
  )
}

export default Banner
