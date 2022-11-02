import { useState } from "react";

function Register(props) {
    const [RegUser,SetRegUser] = useState('')
    const [RegEmail,SetRegEmail] = useState('')
    const [RegPass,SetRegPass] = useState('')
    const [wrong,Setwrong] = useState(false)


    const username =(e)=>{
        SetRegUser(e.target.value)
    }
    const Email =(e)=>{
        SetRegEmail(e.target.value)
    }
    const pass =(e)=>{
        SetRegPass(e.target.value)
    }

    const Submit = ()=>{
        fetch('https://movie-app-api.adaptable.app/register/',{
            method : 'post',
            headers : {'Content-type':'application/json'},
            body: JSON.stringify({
                name : RegUser,
                email : RegEmail,
                pass : RegPass
            })
        })
        .then(res => res.json())
        .then(user => {
            if(user !== 'error'){
                Setwrong(false)
                props.Load(user)
                props.OnRoute('home') 
            }else{
                Setwrong(true)

            }
            
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="container px-5 lg:px-2 grid items-center justify-center mx-auto mt-[8rem]">
            <div className="flex flex-col rounded-xl sm:w-[500px] w-[325px] px-[2.5rem] py-[1rem] shadow-xl  text-[#E4E6EB] bg-[#242526]">
                <h1 className="text-center font-bold text-4xl my-[1rem]">Register</h1>
                {wrong?
                    <div className="flex gap-2  bg-red-800 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[20px] h-[20px]" viewBox="0 0 512 512"><title>Warning</title><path d="M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z" fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z"/></svg>
                        <p className="py-[0.5rem] text-red-200 font-bold">Something Wrong?!?!</p>
                    </div>
                    :
                    null
                }
                <p className="py-[0.5rem]">Username</p>
                <input type="text" placeholder="username" className="p-2 border border-black focus:outline-none text-black" onChange={username}/>
                <p className="py-[0.5rem]">Email</p>
                <input type="email" placeholder="Email" className="p-2 border border-black focus:outline-none text-black" onChange={Email}/>
                <p className="py-[0.5rem]">Password</p>
                <input type="password" placeholder="password" className="p-2 border border-black focus:outline-none text-black" onChange={pass}/>
                <input type="submit" value="Register" className="font-bold mx-auto w-[90%] p-2 bg-blue-400 rounded-lg mt-[1.5rem] cursor-pointer duration-500 transition-all hover:scale-105" onClick={Submit}/>
                <p className="text-center mt-[0.5rem]"> Have already an account click <span className="underline cursor-pointer" onClick={() => props.OnRoute('signin')}>here</span></p>
            </div>
        </div>
    )
}

export default Register;