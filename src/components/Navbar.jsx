const Navbar = () => {
  return (
    <div className="navbar bg-[#FFFFFF] px-2 md:px-10 py-2 md:py-4 shadow-sm fixed top-0 w-full z-50 overflow-hidden">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Back Arrow */}
          <button className="w-8 md:w-10 h-8 md:h-10 flex-shrink-0 flex items-center justify-center hover:bg-[#F7FAFF] rounded-full transition-colors">
            <img className="w-4 md:w-6" src="/assets/arrow-left.svg" alt="Back" />
          </button>

          {/* Location Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1 md:gap-1.5">
              <span className="text-[14px] md:text-[20px] font-semibold text-[#000B1C] truncate">
                Bengaluru, Karnataka
              </span>
              <img 
                className="w-3.5 md:w-5 h-3.5 md:h-5 flex-shrink-0" 
                src="/assets/gps.svg" 
                alt="GPS" 
              />
            </div>
            <span className="text-[12px] md:text-[16px] text-[#4D5E80]">
              Kodipalya
            </span>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2 md:gap-6 flex-shrink-0">
          <button className="w-8 md:w-11 h-8 md:h-11 flex-shrink-0 flex items-center justify-center hover:bg-[#F7FAFF] rounded-full transition-colors">
            <img 
              className="w-4 md:w-7" 
              src="/assets/Wallet.svg" 
              alt="Wallet" 
            />
          </button>
          <button className="w-8 md:w-11 h-8 md:h-11 flex-shrink-0 flex items-center justify-center hover:bg-[#F7FAFF] rounded-full transition-colors">
            <img 
              className="w-4 md:w-7" 
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
