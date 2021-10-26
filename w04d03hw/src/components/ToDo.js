import React from 'react'
import { render } from 'react-dom';

class ToDo extends React.Component{
    constructor(props){
        super(props)
        this.state = { items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    render(){
        return(
            <div>
                <h1>ToDo</h1>

                <h2>What needs to be done</h2>
                <form action="">
                <input type="text" />
                <button onClick="doList">Add</button>
                </form>
            </div>
        );
    }
        
    
}

export default ToDo