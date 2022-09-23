function EventSelection(){

    const events=["100m","200m","300m","400m","500m","600m","800m","1000m", "1500m", 
                "1600m","1 mile", "3000m","3200m" ,"2 mile", "5000m", "10000m" ];
    
    const eventSelectionFactory=()=>{
        return(events.map(e=>{
            return(<option key={e+"key"} value={e}>{e}</option >)
        }))
    } 
    return(
        eventSelectionFactory()
    )
}
export default EventSelection;