
function SelectEvent(){

    let events=["100 m","200m","300m","400m","600m","800m","1000m", "1500m",
                "1 mile", "2000m", "3000m" ]

    const eventSelectionFactory=()=>{
        return(events.map(e=>{
            return(<option value={e.substring(0,-1)}>{e}</option >)
        }))
    }            
    return(
        <>
        <h6>Select Event</h6>
        <select className="form-select">
            {eventSelectionFactory()}
        </select>
        </>
    )



}
export default SelectEvent;