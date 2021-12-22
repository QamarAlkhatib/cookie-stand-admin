const ReportTable = (props) => {

    if (props.report.length === 0) {
        return (
            <h2 className="text-center">No Cookie Stands Available</h2>
        )
    } else {
        return (
            <div className="grid justify-items-center py-12 ...">
                <table className="table-auto">
                    <thead className='bg-[#00D29B] border-[#26D6A5] border-2'>

                        <th className='px-3'>Location</th>
                        {props.hours.map((hour) => {
                            return (
                                <th className='px-2 '>{hour}</th>
                            )
                        })}
                        <th>Total</th>

                    </thead>
                    <tbody>
                        {
                            props.response.map((val, idx) => {

                                const element =
                                    <>
                            
                                        <td className='px-2 border border-[#26D6A5]' >{val.location}
                                            <button className='ml-12 '>❌</button>
                                        </td>
                                        {
                                            val.hourly_sales.map(item => {
                                                return (
                                                    <td className='border border-[#26D6A5] text-center text-[#232837] ...'>{item} </td>
                                                )
                                            })
                                        }
                                        <td className='border border-[#26D6A5] text-center text-[#232837]'>{val.total}</td>
                                    </>

                                if (idx % 2 == 0) {
                                    return (
                                        <tr className='bg-[#85E5C1]'>
                                            {element}
                                        </tr>
                                    )
                                } else {
                                    return (
                                        <tr className='bg-[#4FE0B3]'>
                                            {element}
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                    <tfoot>
                        <th className='bg-[#00D29B] border-[#26D6A5] border-2'>Total</th>

                        <td className='border-2 bg-[#00D29B] border-[#26D6A5] text-center text-[#232837] ...'>1s </td>

                    </tfoot>
                </table>

            </div>
        )
    }
}

export default ReportTable