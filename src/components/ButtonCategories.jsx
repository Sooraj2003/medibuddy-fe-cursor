

const ButtonCategories = ({ categories }) => {
  return (
    categories && (
      <div className="flex gap-1 md:gap-2 w-screen overflow-scroll">
        {categories.map((category, index) => (
          <button key={index} className="btn btn-xs md:btn-md bg-white font-semibold">
            {category}
          </button>
        ))}
      </div>
    )
  );
};



export default ButtonCategories;
