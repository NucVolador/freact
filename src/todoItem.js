import React,{Component} from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    render(){
        const {inputValue} = this.props;
        return (
            <li
                onClick={this.handleDelete}
            >
                {inputValue}
            </li>
        );
    }
    handleDelete(){
        const {handleDelete,index} = this.props;
        handleDelete(index);
    }
}
export default TodoItem