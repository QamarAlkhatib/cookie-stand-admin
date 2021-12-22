import CreateForm from './CreateForm'
import ReportTable from './ReportTable'
import { useState } from "react";
import Footer from './Footer'
import Header from './Header'
import axios from 'axios';
import HeadMain from './HeadMain';


const baseUrl = 'http://127.0.0.1:8000/';
const endPoint = baseUrl + 'api/v1/cookie_stands'

export default function CookieStandAdmin(props) {
    const [hours, setHour] = useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']);
    const [response,setResponse] = useState([])
    const [report,setReport] =useState([])
    const [total, setTotals] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    
    const config={
        headers: {"Authorization" : `Bearer ${props.token}`}
    }
    
    axios.get(endPoint, config).then(res =>{
        response = res.data
        // console.log(response.location)
    });
    function formHandler(e){
        e.preventDefault()
        
        let sum_total =0
        let minCustomers =Number(e.target.min.value)
        let maxCustomers= Number(e.target.max.value)
        let avgCookies= Number(e.target.avg.value)
        
        const storeData = {

            location: e.target.loc.value,
            hourly_sales:hours.map(() => Math.ceil(avgCookies * (Math.ceil(Math.random() * (maxCustomers - minCustomers) + minCustomers)))),
        }
        for(let i = 0; i < storeData.hourly_sales.length; i++){
            sum_total += storeData.hourly_sales[i]
        }
        storeData.total = sum_total
        setReport([...report,storeData])

        let total_sum = total.map((val,idx) => {
            if (idx === total.length - 1) {
                return val + storeData.total
            }
            return val + storeData.hourly_sales[idx]
        })

        setTotals(total_sum)
    }
    return (
      <> 
        <HeadMain/>
        <Header />
        <CreateForm formHandler={formHandler} />
        <ReportTable report={report} total = {total} hours={hours} response={response}/>
        <Footer report={report}/>
      </>
    )
}
