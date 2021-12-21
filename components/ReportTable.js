const ReportTable = (props) => {

    if (props.report.length === 0) {
        return (
            <h2 className="text-center">No Cookie Stands Available</h2>
        )
    } else {
        return (
            <div class="grid justify-items-center py-12 ...">
                <table class="table-auto">
                    <thead className='bg-green-500 border border-green-300'>

                        <th class='px-3'>Location</th>
                        {props.hours.map((hour) => {
                            return (
                                <th class='px-2'>{hour}</th>
                            )
                        })}
                        <th>Total</th>

                    </thead>
                    <tbody>
                        {
                            props.report.map((val, idx) => {

                                const element =
                                    <>
                                        <td className='px-2 border border-black' >{val.location}</td>
                                        {
                                            val.hourly_sales.map(item => {
                                                return (
                                                    <td className='border border-black'> {item} </td>
                                                )
                                            })
                                        }
                                        <td className='border border-black'>{val.total}</td>
                                    </>

                                if (idx % 2 == 0) {
                                    return (
                                        <tr className='bg-green-400'>
                                            {element}
                                        </tr>
                                    )
                                } else {
                                    return (
                                        <tr className='bg-green-300'>
                                            {element}
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default ReportTable