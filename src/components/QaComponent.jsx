import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFaqs } from "../utils/faqSlice";
import axios from "axios";

const QaComponent = () => {
    const dispatch = useDispatch();
    const faqs = useSelector((store)=>store.faqs);
   
    const defaultAnswer = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    
    const fetchFaqs = async()=>{
      const res = await axios.get("https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config");
      dispatch(addFaqs(res?.data[0]?.page_config[6]?.props));
    }
    useEffect(()=>{
        fetchFaqs();
    },[])
  return faqs && (
<div className="w-full text-left my-11">
    <h1 className="text-2xl md:text-5xl font-bold">Frequently Asked Questions</h1>
    {faqs?.map((faq)=>{
        return <>
        <div className="collapse collapse-plus bg-base-200 my-3 md:my-6">
  <input type="radio" name="my-accordion-3"  />
  <div className="collapse-title text-sm md:text-xl font-medium">{faq?.question}</div>
  <div className="collapse-content">
    <p className="text-xs md:text-lg text-slate-500">  {faq?.answer || defaultAnswer}</p>
</div>
</div>
        </>
    })}


    </div>
  )
}

export default QaComponent
