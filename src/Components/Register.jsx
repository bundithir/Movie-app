import { useState } from "react";

function Register(props) {
    const [RegUser,SetRegUser] = useState('')
    const [RegEmail,SetRegEmail] = useState('')
    const [RegPass,SetRegPass] = useState('')

    const username =(e)=>{
        SetRegUser(e.target.value)
    }
    const Email =(e)=>{
        SetRegEmail(e.target.value)
    }
    const pass =(e)=>{
        SetRegPass(e.target.value)
    }
    return(
        <div className="container px-5 lg:px-2 grid items-center justify-center mx-auto">
            <div className="flex flex-col rounded-xl bg-white w-[500px] h-[300px] px-[2.5rem] py-[1rem] shadow-xl">
                <h1 className="text-center font-bold text-4xl">Register</h1>
                <p>Username</p>
                <input type="text" placeholder="username" className="p-1 border border-black focus:outline-none" onChange={username}/>
                <p>Email</p>
                <input type="text" placeholder="Email" className="p-1 border border-black focus:outline-none" onChange={Email}/>
                <p>Password</p>
                <input type="password" placeholder="password" className="p-1 border border-black focus:outline-none" onChange={pass}/>
                <input type="submit" value="Sign in" className="font-bold mx-auto w-[90%] p-1 bg-blue-400 rounded-lg text-white cursor-pointer duration-500 transition-all hover:scale-105" onClick={() => props.OnRoute('home')}/>
                <p className="text-center"> Have already an account click <span className="underline cursor-pointer" onClick={() => props.OnRoute('signin')}>here</span></p>
            </div>
        </div>
    )
}

export default Register;