function Card (props){
    return(
            <div className="rounded-xl shadow-lg bg-[#242526] h-[525px] max-w-[325px] sm:max-w-auto">
                <img src={`https://image.tmdb.org/t/p/w500/${props.poster}`} className="w-full h-[275px] rounded-t-xl" alt="" />
                <div className="p-[1rem] flex justify-between flex-col">
                    <div>
                        <h1 className="text-[#E4E6EB] font-bold text-2xl mb-[1rem] h-[65px] line-clamp-2">{props.title}</h1>
                        <p className="line-clamp-3 text-[#B0B3B8] mb-[1rem] h-[75px]">{props.detail}</p>

                    </div>
                    <button className="font-bold mx-auto w-full py-2 bg-blue-400 rounded-lg text-white self-center">Detail</button>
                </div>
                
            </div>

    )
}

export default Card;