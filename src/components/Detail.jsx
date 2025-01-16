import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addDetail } from "../utils/detailSlice";
import { useEffect } from "react";
import ButtonCategories from "./ButtonCategories";
import DetailCard from "./DetailCard";

const Detail = () => {
    const dispatch = useDispatch();
    const detail = useSelector((store)=>store.detail);
    const packages=detail?.props[0]?.packages;

    
    const fetchDetail = async()=>{
      const res = await axios.get("https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config");
      dispatch(addDetail(res?.data[0]?.page_config[2]));
    }
    useEffect(()=>{
      fetchDetail();
    },[])
     
    
    return (
        detail && packages && (
          <div className="w-full bg-blue-100 p-10 rounded-md">
            <div className="flex justify-between items-center">
            <h1 className="text-xs md:text-5xl font-bold my-3 md:my-10">{detail?.heading}</h1>
            <span className="text-blue-600 text-xs md:text-3xl cursor-pointer">View All</span>
            </div>
            
            <ButtonCategories categories={detail?.categories?.["10386"]} />
            <div className="w-screen flex gap-11 overflow-scroll">
            {packages?.map((pack,index)=>{
               return <DetailCard key={index} pack={pack}/>
            })}
            </div>
          </div>
        )
      );
      
}

export default Detail;
