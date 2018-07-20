import React,{Component} from 'react';
import {connect} from 'react-redux';
import TodoListUI from './todoListUI';
import {
    getInputValueChange,
    getListChange,
    getListItemDelete,
    getInitList
} from './store/createActions';

class TodoList extends Component {
    render(){
        const {inputValue,list,handleChange,handleClick,handleDelete} = this.props;
        return (
            <TodoListUI
                list={list}
                inputValue={inputValue}
                handleChange={handleChange}
                handleClick={handleClick}
                handleDelete={handleDelete}
            />
        );
    }
    componentDidMount(){
        this.props.initList();
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue : state.inputValue ,
        list : state.list
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange(e){
            const action = getInputValueChange(e.target.value);
            dispatch(action);
        },
        handleClick(){
            const action = getListChange();
            dispatch(action);
        },
        handleDelete(index){
            const action = getListItemDelete(index);
            dispatch(action);
        },
        initList(){
            const action = getInitList();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);