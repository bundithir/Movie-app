function Nav (){
    return(
        <div className="bg-[#242526] py-[1rem] shadow-xl text-[#E4E6EB]">
            <div className="container px-5 lg:px-2 flex justify-between items-center mx-auto py-[1rem]">
                <h1 className="text-5xl">MO<span className="font-bold">VIE</span></h1>
                <div className="flex gap-[2rem]">
                    <h2 className="cursor-pointer">Sign in</h2>
                    <h2 className="cursor-pointer">Register</h2>
                </div>
            </div>
        </div>
    )
}
export default Nav;