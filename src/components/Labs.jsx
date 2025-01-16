import LabsVisited from "./LabsVisited"

const Labs = () => {


       const dummyData = [
        {
        id:1,
        url:"https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
        name:"Apollo Diagnostics",
        location:"Kengeri,Bengaluru"
        },
        {
            id:2,
            url:"https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
            name:"Pharma Diagnostics",
            location:"Jayanagar,Bengaluru"
        },
        {
            id:3,
            url:"https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
            name:"Medibuddy Diagnostics",
            location:"Vasanth Nagar,Bengaluru"
        },
        {
            id:1,
            url:"https://images.unsplash.com/photo-1502740479091-635887520276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
            name:"MediPharma Diagnostics",
            location:"Hennur,Bengaluru"
        }
        
       ]
    

  return (
    <div className="w-full my-14 md:my-24">
        <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-5xl font-bold my-6 md:my-14">Labs Visited</h1>
        <span className="text-lg md:text-2xl font-semibold text-blue-500 cursor-pointer">View more</span>
        </div>
        
        <div className=" w-screen flex my-0  gap-x-10 overflow-scroll">
        {dummyData?.map((data,index)=>{
            return <LabsVisited key={index}data={data}/>
        })}
        </div>
      
    </div>
  )
}

export default Labs
