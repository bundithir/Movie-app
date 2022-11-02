

function Nav (props){
    return(
        <div className="bg-[#242526] py-[1rem] shadow-xl text-[#E4E6EB]">
            <div className="container px-5 lg:px-2 flex justify-between items-center mx-auto py-[1rem]">
                <h1 className="text-5xl">MO<span className="font-bold">VIE</span></h1>
                
                    {props.Route==='home'?
                    <ul className="flex gap-[2rem]">
                        <li className="">{props.user.name}#{props.user.id}</li>
                        <li className="cursor-pointer"onClick={() => props.OnRoute('signin')}>Sign out</li>
                    </ul>
                    :
                    <ul className="flex gap-[2rem]">
                        <li className="cursor-pointer"onClick={() => props.OnRoute('signin')}>Sign in</li>
                        <li className="cursor-pointer"onClick={() => props.OnRoute('register')}>Register</li>
                    </ul>
                    }
            </div>
        </div>
    )
}
export default Nav;