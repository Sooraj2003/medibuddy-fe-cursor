const LifeStyle = ({card}) => {

    const {title,imgSrc} = card;

  return (
    <div className="card bg-base-100 w-36 md:w-60 shadow-xl">
    <figure className="px-5 md:px-8 pt-5 md:pt-8">
      <img
       src={"/" + imgSrc}
       alt="lifestyle"
       className="rounded-xl w-14 md:w-24" />
    </figure>
    <div className="card-body items-center text-center p-4">
      <h2 className="card-title text-xs md:text-base">{title}</h2>
    </div>
  </div>
  )
}

export default LifeStyle
