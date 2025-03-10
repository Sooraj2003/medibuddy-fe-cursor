import { useDispatch, useSelector } from "react-redux";
import { addLifeStyle } from "../utils/lifestyleSlice";
import { useEffect } from "react";
import axios from "axios";
import LifeStyle from "./LifeStyle";

const LifeStyleComponent = () => {
    const dispatch = useDispatch();
    const lifeStyle = useSelector((store)=>store.lifeStyle);
   
    
    
    const fetchLifeStyle = async()=>{
      const res = await axios.get("https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config");
      dispatch(addLifeStyle(res?.data[0]?.page_config[3]));
    }

    // fetch the lifestyle data on the initial render
    useEffect(()=>{
      if(!lifeStyle){
        fetchLifeStyle();
      }
    },[])
     
  return (
    <div className="w-full mx-auto text-center my-6 md:my-14">
      <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-7">{lifeStyle?.title}</h1>
      <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
     {lifeStyle?.props?.map((card,index)=>{
        return <LifeStyle key={index} card={card}/>
     })}
     </div>
      
    </div>
  )
}

export default LifeStyleComponent
