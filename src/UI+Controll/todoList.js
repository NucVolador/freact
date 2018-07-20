import React,{Component} from 'react';
import TodoListUI from './todoListUI';
import store from '../reduxLower/store';
import {
    getInputValueChange,
    getListChange,
    getListItemDelete,
    getInitList
} from '../reduxLower/store/createActions';

import 'antd/dist/antd.css';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState);
        });
    }
    render(){
        const {inputValue,list} = this.state;
        return (
            <TodoListUI
                inputValue={inputValue}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                list={list}
                handleDelete={this.handleDelete}
            />
        );
    }

    componentDidMount(){
        const action = getInitList()
        store.dispatch(action);
    }

    handleChange = (e) => {
        const action = getInputValueChange(e.target.value);
        store.dispatch(action);
    }
    handleClick = () => {
        const action = getListChange();
        store.dispatch(action);
    }
    handleDelete = (index) => {
        const action = getListItemDelete(index);
        store.dispatch(action);
    }
}
export default TodoList;