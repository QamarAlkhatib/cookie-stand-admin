import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import { useState } from "react";
import Footer from '../components/Footer'

export default function Main(props) {
    const [hours, setHour] = useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']);
    const [report,setReport] =useState([])
    const [total, setTotals] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
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
        <CreateForm formHandler={formHandler} />
        <ReportTable report={report} total = {total} hours={hours}/>
        <Footer report={report}/>
      </>
    )
}
