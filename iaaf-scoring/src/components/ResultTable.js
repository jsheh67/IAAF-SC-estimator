function ResultTable({resultList}){

    const resultFactory=()=>{
        return(resultList.map(r=>{
            return(
                <tr>
                    <td></td>
                    <td>{r.event}</td>
                    <td>{r.time}</td>
                    <td>points</td>
                    
                </tr>
            )
        }))
        
    }

    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Event</th>
                    <th scope="col">Time</th>
                    <th scope="col">Points</th>
                </tr>
            </thead>
            <tbody>
                {resultFactory()}
            </tbody>

        </table>
    )


}
export default ResultTable;