import Card from "./Card";

function Cardlist (props){
    const CardComponents = props.Movies.map((movie,i) =>
        <Card 
        key={i}
        title={movie.original_title}
        detail={movie.overview}
        poster={movie.poster_path}
        />
    ) 
    return(
        <div className="container px-5 lg:px-2 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-auto justify-center gap-[3rem] lg:gap-[5rem] text-white mt-[4rem] pb-[4rem]">
            {CardComponents}
        </div>
    )
}

export default Cardlist;