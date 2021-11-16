import React from "react";




const App = (props) => {
  const { about_list } = props;

  return(
    <div>
      {about_list.map((about) => {
        return <p key={Date.now()}>{about.name_}</p>
      })}
    </div>
  )

}

export default App;
