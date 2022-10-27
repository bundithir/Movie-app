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
        <div className="container px-5 lg:px-2 grid items-center justify-center mx-auto mt-[8rem]">
            <div className="flex flex-col rounded-xl sm:w-[500px] w-[325px] px-[2.5rem] py-[1rem] shadow-xl  text-[#E4E6EB] bg-[#242526]">
                <h1 className="text-center font-bold text-4xl my-[1rem]">Register</h1>
                <p className="py-[0.5rem]">Username</p>
                <input type="text" placeholder="username" className="p-2 border border-black focus:outline-none text-black" onChange={username}/>
                <p className="py-[0.5rem]">Email</p>
                <input type="text" placeholder="Email" className="p-2 border border-black focus:outline-none text-black" onChange={Email}/>
                <p className="py-[0.5rem]">Password</p>
                <input type="password" placeholder="password" className="p-2 border border-black focus:outline-none text-black" onChange={pass}/>
                <input type="submit" value="Register" className="font-bold mx-auto w-[90%] p-2 bg-blue-400 rounded-lg mt-[1.5rem] cursor-pointer duration-500 transition-all hover:scale-105" onClick={() => props.OnRoute('home')}/>
                <p className="text-center mt-[0.5rem]"> Have already an account click <span className="underline cursor-pointer" onClick={() => props.OnRoute('signin')}>here</span></p>
            </div>
        </div>
    )
}

export default Register;