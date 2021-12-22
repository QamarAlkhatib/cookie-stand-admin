import { useState } from "react";
import ReportTable from './ReportTable'

const CreateForm = (props) => {

    return (
        <div className="grid justify-items-center py-12 text-[#232837]  ...">
            <form onSubmit={props.formHandler} className="bg-[#9BF4D0] w-9/12 rounded-lg py-8 px-8 border-[#26D6A5] border-4 ...">

                <div> 
                <label className="text-base font-bold flex ml-96 ...">ADD LOCATION </label>
                <div className='flex justify-between'>
                    <input name='loc' type='text' className="w-8/12 mb-8 ml-3  h-9" placeholder=' Cookie Stand Location' /><br />
                    <div className="rounded-lg">
                        <button className='px-20 py-2 mr-8 bg-[#00c57f] rounded-lg ' >CREATE STAND</button>
                    </div>
                </div>
                </div>

                <div className="flex ml-3 ...">

                    <div className="flex-1 ... mr-3 bg-[#9BF4D0] px-2 h-16 py-2 rounded-lg">
                        <label className='ml-5 text-xs font-semibold' > MINIMUM CUSTOMERS PER HOUR </label>
                        <input type="number" name='min' placeholder=' 0' />
                    </div>

                    <div className="contents">

                        <div className="flex-1 ... mr-3 bg-[#9BF4D0] px-2 h-16 py-2 rounded-lg">
                            <label className='ml-5 text-xs font-semibold'> MAXIMUM CUSTOMERS PER HOUR </label>
                            <input type="number" name='max' placeholder=' 0' />
                        </div>

                        <div className="flex-1 ... mr-3 bg-[#9BF4D0] px-2 h-16 py-2 rounded-lg">
                            <label className='ml-5 text-xs font-semibold'> AVERAGE COOKIES PER SALE </label>
                            <input type="number" name='avg' placeholder=' 0' />
                        </div>
                    </div>


                </div>
            </form>
            {props.data}
        </div>
    )
}
export default CreateForm