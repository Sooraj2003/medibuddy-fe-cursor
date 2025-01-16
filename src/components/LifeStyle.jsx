const LifeStyle = ({card}) => {
    const {title,imgSrc} = card;
  return (
    <div className="card bg-base-100 w-72 shadow-xl">
    <figure className="px-10 pt-10">
      <img
       src={"src/" + imgSrc}
        alt="Shoes"
        className="rounded-xl w-32" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
      
    </div>
  </div>
  )
}

export default LifeStyle
