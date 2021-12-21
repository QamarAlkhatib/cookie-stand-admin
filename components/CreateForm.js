import { useState } from "react";
import ReportTable from './ReportTable'

const CreateForm = (props) => {
    
    return (
        <div class="grid justify-items-center py-12 ...">
        <form onSubmit={props.formHandler} class="bg-[#3af3b4] w-9/12 rounded-lg py-8 px-8 ...">
            <h2 class='text-2xl text-center py-3 ...'>Create Cookies Stand</h2>
            
            <div>
                <label class="mr-2"> Location </label>
                <input name='loc' type='text' class=" w-10/12 mb-8 ..." placeholder='  Add Location' /><br />
            </div>

                <div class="flex ml-3 ...">

                <div class="flex-1 ... mr-3 bg-[#9BF4D0] px-2 h-16 py-2 rounded-lg">
                    <label > Minimum Customers per Hour </label>
                    <input type="number" name='min' placeholder='Enter number' />
                </div>

                <div class="contents">

                    <div class="flex-1 ... mr-3 bg-[#9BF4D0] px-2 h-16 py-2 rounded-lg">
                        <label> Maximum Customers per Hour </label>
                        <input type="number" name='max' placeholder='Enter number' />
                    </div>

                    <div class="flex-1 ... mr-3 bg-[#9BF4D0] px-2 h-16 py-2 rounded-lg">
                        <label> Average Cookies per Sale </label>
                        <input type="number" name='avg' placeholder='Enter number' />
                    </div>
                </div>

                <div class="flex-1 ...">
                    <button className='px-14 py-5 mx-2 bg-[#00c57f]' >Create</button>
                </div>

            </div>
        </form>
        {props.data}
        </div>
    )
}
export default CreateForm