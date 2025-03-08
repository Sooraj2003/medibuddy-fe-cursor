const Navbar = () => {
  return (
    <div className="navbar bg-white px-4 md:px-10 py-3 md:py-4 shadow-sm fixed top-0 w-full z-50">
      <div className="flex-1">
        <div className="flex items-center gap-3 md:gap-4">
          {/* Back Arrow */}
          <button className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center hover:bg-gray-50 rounded-full transition-colors">
            <img className="w-5 md:w-6" src="/assets/arrow-left.svg" alt="Back" />
          </button>

          {/* Location Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-[16px] md:text-[20px] font-semibold text-[#000B1C]">
                Bengaluru, Karnataka
              </span>
              <img 
                className="w-4 md:w-5 h-4 md:h-5" 
                src="/assets/gps.svg" 
                alt="GPS" 
              />
            </div>
            <span className="text-[14px] md:text-[16px] text-[#4D5E80]">
              Kodipalya
            </span>
          </div>
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-5 md:gap-6">
        <button className="w-10 md:w-11 h-10 md:h-11 flex items-center justify-center hover:bg-gray-50 rounded-full transition-colors">
          <img 
            className="w-6 md:w-7" 
            src="/assets/Wallet.svg" 
            alt="Wallet" 
          />
        </button>
        <button className="w-10 md:w-11 h-10 md:h-11 flex items-center justify-center hover:bg-gray-50 rounded-full transition-colors">
          <img 
            className="w-6 md:w-7" 
            src="/assets/Cart.svg" 
            alt="Cart" 
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
