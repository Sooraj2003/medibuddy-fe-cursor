const Navbar = () => {
  return (
    <div className="navbar bg-[#FFFFFF] px-1.5 md:px-10 py-1.5 md:py-4 shadow-sm fixed top-0 w-full z-50">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-1 md:gap-4 max-w-[75%]">
          {/* Back Arrow */}
          <button className="w-5 md:w-10 h-5 md:h-10 flex-shrink-0 flex items-center justify-center hover:bg-[#F7FAFF] rounded-full transition-colors">
            <img className="w-3 md:w-6" src="/assets/arrow-left.svg" alt="Back" />
          </button>

          {/* Location Info */}
          <div className="flex flex-col overflow-hidden">
            <div className="flex items-center gap-1 md:gap-1.5">
              <span className="text-[11px] md:text-[20px] font-semibold text-[#000B1C] truncate max-w-[80px] md:max-w-none whitespace-nowrap">
                Bengaluru, Karnataka
              </span>
              <img 
                className="w-2.5 md:w-5 h-2.5 md:h-5 flex-shrink-0" 
                src="/assets/gps.svg" 
                alt="GPS" 
              />
            </div>
            <span className="text-[9px] md:text-[16px] text-[#4D5E80] truncate max-w-[80px] md:max-w-none whitespace-nowrap">
              Kodipalya
            </span>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-1 md:gap-6 flex-shrink-0">
          <button className="w-5 md:w-11 h-5 md:h-11 flex-shrink-0 flex items-center justify-center hover:bg-[#F7FAFF] rounded-full transition-colors">
            <img 
              className="w-3 md:w-7" 
              src="/assets/Wallet.svg" 
              alt="Wallet" 
            />
          </button>
          <button className="w-5 md:w-11 h-5 md:h-11 flex-shrink-0 flex items-center justify-center hover:bg-[#F7FAFF] rounded-full transition-colors">
            <img 
              className="w-3 md:w-7" 
              src="/assets/Cart.svg" 
              alt="Cart" 
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
