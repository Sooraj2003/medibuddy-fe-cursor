import gpsLogo from "../assets/gps.svg"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <div className="flex justify-between items-center gap-2">
      <div className="w-8 md:w-12">
        <img className="w-full"src="src\assets\arrow-left.svg" />
      </div>
    <div className="flex flex-col"><span className="text-sm md:text-2xl font-semibold">Bengaluru,Karnataka <img className="inline-block w-4 md:w-8 " src={gpsLogo}/></span><span className="text-xs md:text-lg font-medium">Kodipalya</span></div>
    </div>
    
  </div>
  <div className="flex gap-4">
    <img className="w-8 md:w-10 " src="src/assets/Wallet.svg"/>
    <img className="w-8 md:w-10" src="src/assets/Cart.svg"/>
    
  </div>
</div>
  )
}

export default Navbar
