import { useState } from "react";

const Main = () => {
    const [table, setTable] = useState();
    const [data, Setdata] = useState();

    const formHandler = (e) => {
        e.preventDefault()
        let result = {
            location: e.target.loc.value,
            minCustomers: Number(e.target.min.value),
            maxCustomers: Number(e.target.max.value),
            avgCookies: Number(e.target.avg.value),
        };
        setTable("Report table comming soon...")
        Setdata(JSON.stringify(result))

    }
    return (
        <main class="grid justify-items-center py-12 ...">
            <form onSubmit={formHandler} class="bg-[#3af3b4] w-9/12 rounded-lg py-8 px-8 ...">
                <h2 class='text-2xl text-center py-3 ...'>Create Cookies Stand</h2>

                <label> Location </label>
                <input name='loc' type='text' class=" w-10/12 mb-8 ..." placeholder='Add Location' /><br />
                <label class="pl-11"> Minimum Customers per Hour </label>
                <label class="pl-10 ml-10 "> Maximum Customers per Hour </label>
                <label class="pl-8 ml-10"> Average Cookies per Sale </label>
                <div>
                    <input type="number" name='min' class="ml-10 top-10" placeholder='Enter number' />
                    <input type="number" name='max' class="ml-10" placeholder='Enter number' />
                    <input type="number" name='avg' class="ml-10" placeholder='Enter number' />
                    <button class="ml-10 bg-[#00c57f] px-12" >Create</button>
                </div>

            </form>
            <p>{table}</p>
            <p>{data}</p>
        </main>

    )
}
export default Main