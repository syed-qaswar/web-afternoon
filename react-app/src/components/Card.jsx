function Card({img, title, desc, style}){
    return(
        <div className={style}>
            <img src={img} alt="" />
            <div className="p-2">
                <h2 className="font-bold text-2xl">{title}</h2>
                <p>{desc}</p>
                <a href="#">Learn more</a>
            </div>
        </div>
    )
}

export default Card