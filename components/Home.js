import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/LoginForm'
import { useState} from 'react'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/';
const tokenUrl = baseUrl +'api/token/';

export default function Home() {

const [token,setToken] = useState('');

const submitHandler = (e,credentials) =>{
    e.preventDefault()
    axios.post(tokenUrl,credentials).then(data=> {
        setToken(data.data.access)
    })
    console.log(credentials)
    console.log(token)
}
    if(!token) return <LoginForm submitHandler={submitHandler}/>
    return  <CookieStandAdmin token={token}/>
       
}
