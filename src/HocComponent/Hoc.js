import React from 'react'

const Hoc = (Component) => {
  return (
    class extends React.Component{
         state={
             auth:true
         }
        render(){
            return(
                <>
                       {this.state.auth ? <Component name='john' /> 
                       :    null}
                </>
            )
        }
    }
  )
}

export default Hoc