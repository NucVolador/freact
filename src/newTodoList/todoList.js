import React,{Component,Fragment} from 'react';
import { Input,Button,List } from 'antd';
import store from '../reduxLower/store';
import {
    getInputChangeAction,
    getListAction,
    getListDeleteAction
} from '../reduxLower/store/createActions'

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
        return (
            <Fragment>
                <div style={{margin:"10px"}}>
                    <Input
                        style={{width:'300px',marginRight: '10px'}}
                        placeholder="输入信息"
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                    <Button
                        type="primary"
                        onClick={this.handleClick}
                    >提交</Button>
                </div>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (
                        <List.Item
                            onClick={this.handleDelete.bind(this,index)}
                        >{item}</List.Item>
                    )}
                    style={{width:'300px',marginLeft:"10px"}}
                />
            </Fragment>
        );
    }
    handleChange = (e) => {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleClick = () => {
        const action = getListAction();
        store.dispatch(action);
    }
    handleDelete(index){
        const action = getListDeleteAction(index);
        store.dispatch(action);
    }
}
export default TodoList;