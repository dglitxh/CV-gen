import React from 'react'

const Preview = React.forwardRef((props, ref) => {

  return(
    <>
      <div>{props.about}</div>
      <div>{props.experience}</div>
      <div>{props.education}</div>
    </>
  )
}
)

export default Preview
