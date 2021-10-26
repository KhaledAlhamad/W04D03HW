import React from 'react'
import ToDoList from './ToDoList';

class ToDo extends React.Component{
    constructor(props){
        super(props)
        this.state = { items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
          return;
        }
        const newItem = {
          text: this.state.text,
          id: Date.now()
        };
        this.setState(state => ({
          items: state.items.concat(newItem),
          text: ''
        }));
      }
    

    render(){
        return(
            <div>
                <h1>ToDo</h1>

                
                <ToDoList items={this.state.items} />
                <h2>What needs to be done</h2>
                    <form onSubmit={this.handleSubmit}>
                    
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                    </form>
            </div>
        );
    }
        
    
}

export default ToDo