

const ButtonCategories = ({ categories }) => {
  return (
    categories && (
      <div className="flex gap-2 w-screen overflow-hidden">
        {categories.map((category, index) => (
          <button key={index} className="btn btn-sm">
            {category}
          </button>
        ))}
      </div>
    )
  );
};



export default ButtonCategories;
