import React,{Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    shouldComponentUpdate(nextProps,nextState){
        //优化render过程，避免无谓的性能浪费
        if(nextProps.inputValue === this.props.inputValue){
            return false;
        }else{
            return true;
        }
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
TodoItem.propTypes = {
    test : PropTypes.number.isRequired,
    inputValue : PropTypes.string,
    handleDelete : PropTypes.func
}

TodoItem.defaultProps = {
    test : 1
}
export default TodoItem;