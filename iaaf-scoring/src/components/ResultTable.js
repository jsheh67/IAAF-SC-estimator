import Result from "./Result"
import "../App.css"

function ResultTable({resultList, setResultList}){

    const resultFactory=()=>{
       

        return(resultList.map(r=>{
            let idIterator=0;
            return(
                <Result 
                    key={r.id=idIterator++}
                    r={r}
                    resultList={resultList}
                    setResultList={setResultList}/>
            )
           
        }))  
    }

    const clear=()=>{
        setResultList([]);
    }

    return(
        <div className= "mt-5 p-3 pb-5 rounded shadow border">
        <div className="row">
            <h4 className="col">Results</h4>
            <button id="clearButton"className="btn btn-sm col" onClick={clear}>Clear results?</button>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Event</th>
                    <th scope="col">Time</th>
                    <th scope="col">Points</th>
                    <th></th>       
                </tr>
            </thead>
            <tbody>
                {resultFactory()}
            </tbody>
        </table>
       
        </div>
    )


}
export default ResultTable;