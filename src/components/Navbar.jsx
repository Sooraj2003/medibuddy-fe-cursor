const Navbar = () => {
  return (
    <div className="navbar bg-[#FFFFFF] px-2 md:px-10 py-2 md:py-4 shadow-sm fixed top-0 w-full z-50">
      <div className="flex-1 min-w-0 overflow-hidden">
        <div className="flex items-center gap-1.5 md:gap-4 w-full">
          {/* Back Arrow */}
          <button className="w-6 md:w-10 h-6 md:h-10 flex-shrink-0 flex items-center justify-center hover:bg-[#F7FAFF] rounded-full transition-colors">
            <img className="w-3.5 md:w-6" src="/assets/arrow-left.svg" alt="Back" />
          </button>

          {/* Location Info */}
          <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
            <div className="flex items-center gap-1 md:gap-1.5 w-full">
              <span className="text-[12px] md:text-[20px] font-semibold text-[#000B1C] truncate max-w-[100px] md:max-w-none">
                Bengaluru, Karnataka
              </span>
              <img 
                className="w-3 md:w-5 h-3 md:h-5 flex-shrink-0" 
                src="/assets/gps.svg" 
                alt="GPS" 
              />
            </div>
            <span className="text-[10px] md:text-[16px] text-[#4D5E80] truncate max-w-[100px] md:max-w-none">
              Kodipalya
            </span>
          </div>
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-1.5 md:gap-6 ml-1.5 md:ml-0 flex-shrink-0">
        <button className="w-6 md:w-11 h-6 md:h-11 flex-shrink-0 flex items-center justify-center hover:bg-[#F7FAFF] rounded-full transition-colors">
          <img 
            className="w-3.5 md:w-7" 
            src="/assets/Wallet.svg" 
            alt="Wallet" 
          />
        </button>
        <button className="w-6 md:w-11 h-6 md:h-11 flex-shrink-0 flex items-center justify-center hover:bg-[#F7FAFF] rounded-full transition-colors">
          <img 
            className="w-3.5 md:w-7" 
            src="/assets/Cart.svg" 
            alt="Cart" 
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
