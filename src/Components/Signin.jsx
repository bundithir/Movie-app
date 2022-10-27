import { useState } from "react";

function Signin(props) {
    const [SignUser,SetSignUser] = useState('')
    const [SignPass,SetSignPass] = useState('')

    const username =(e)=>{
        SetSignUser(e.target.value)
    }
    const pass =(e)=>{
        SetSignPass(e.target.value)
    }
    return(
        <div className="container px-5 lg:px-2 grid items-center justify-center mx-auto">
            <div className="flex flex-col rounded-xl bg-white w-[500px] h-[300px] px-[2.5rem] py-[1rem] shadow-xl">
                <h1 className="text-center font-bold text-4xl">Sign in</h1>
                <p>Username</p>
                <input type="text" placeholder="Enter you username" className="p-1 border border-black focus:outline-none" onChange={username}/>
                <p>Password</p>
                <input type="password" placeholder="Enter you username" className="p-1 border border-black focus:outline-none" onChange={pass}/>
                <input type="submit" value="Sign in" className="font-bold mx-auto w-[90%] p-1 bg-blue-400 rounded-lg text-white cursor-pointer duration-500 transition-all hover:scale-105" onClick={() => props.OnRoute('home')}/>
                <p className="text-center">Don't have an account create <span className="underline cursor-pointer"  onClick={() => props.OnRoute('register')}>here</span></p>
            </div>
        </div>
    )
}

export default Signin;