import React from 'react'

class Prop extends React.Component{
    render(){
        return(
            <>
                <h1>name: { this.props.name } age: { this.props.age }</h1>
            </>
        )
    }
}

export default Prop