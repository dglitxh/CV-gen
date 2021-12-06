

const Display = (props) => {
    const { entries, name } = props;
    if( entries){
    return(
      <div className="abouted">
        <h1>{name}</h1>
        {entries.map((entry) => {
          console.log(entry)
            return (
            Object.keys(entry).map((item) =>{
              return(
                  <h3 className={item + '-class'}>{[item] +": " + entry[item]}</h3>
              )
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
  