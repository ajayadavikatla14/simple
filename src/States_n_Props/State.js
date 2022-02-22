import React from "react"

class State extends React.Component{
    state={
        name: 'wood',
        age:30,
    }
    render(){
        return(
            <>
                <h2>name : { this.state.name } and age : {this.state.age }</h2>
            </>
        )
    }
}

export default State