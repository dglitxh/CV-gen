

const Display = (props) => {
    const { entries } = props;
    if( entries){
    return(
      <div className="abouted">
        {entries.map((entry) => {
          console.log(entry)
            return (
            Object.values(entry).map((items) =>{
              return <p key={Math.random*20}>{items}</p>
            })
            
            )
        })}
      </div>
    )
      }else{
        console.log('not working son')
        return <div></div>
      }
  }
  
  export default Display;
  