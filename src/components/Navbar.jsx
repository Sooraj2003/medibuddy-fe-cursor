

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className=""><div className="flex flex-col"><span className="text-lg font-semibold">Bengaluru,Karnataka <img className="inline-block " src="src\assets\gps.png"/></span><span className="text-sm font-medium">Kodipalya</span></div></a>
  </div>
  <div className="flex">
    <img className="w-12 h-8" src="src\assets\wallet.png"/>
    <img className="w-8 h-8" src="src\assets\Cart.png"/>
    
  </div>
</div>
  )
}

export default Navbar
