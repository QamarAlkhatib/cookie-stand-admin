import React from 'react'
import {useState} from 'react'

export default function LoginForm({submitHandler}) {

    const [credentials,setCredentials] = useState({username:'', password:''});

    const usernameChangeHandler = (e) => {
        setCredentials({username:e.target.value})
    }
    const passwordChangeHandler = (e) => {
        setCredentials({...credentials,password:e.target.value})
    }

    return (
        <div>
            
            <form className="flex flex-col w-1/2 gap-4 p-8 mx-auto my-4 text-center bg-[#9BF4D0] border-2 border-[#00D39C] rounded-lg text-md" onSubmit={e=>submitHandler(e,credentials)} method='post'>
                <div className="flex flex-col ">
                    <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="username">User Name</label>
                    <input className="px-3 py-2 border text-grey-darkest" type="text" name="username" id="username" placeholder="User Name" onChange={usernameChangeHandler} />
                </div>

                <div className="flex flex-col ">
                    <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="password">Password</label>
                    <input className="px-3 py-2 border text-grey-darkest" type="password" name="password" id="password" placeholder="password" onChange={passwordChangeHandler} />
                </div>

                <button className="px-3 py-4 mt-8 uppercase bg-[#00B783] rounded text-green  text-black" type="submit">Sign In</button>

            </form>
        </div>
    )
}
