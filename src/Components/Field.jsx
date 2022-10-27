function Field (props){
    return(
        <div className="border-b bg-[#3A3B3C] border-[#e3e3e3] py-[1rem] hover:bg-[#4e4f50]">
            <div className="container lg:px-2 px-5 mx-auto flex gap-4 items-center bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[20px] h-[20px] text-[#E4E6EB]" viewBox="0 0 512 512"><title>Search</title><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
                <input type="text" onChange={props.OnSearch} placeholder='Search for a movie'className="focus:outline-none w-full text-[#E4E6EB] bg-transparent " />
            </div>
        </div>
    )
}

export default Field;