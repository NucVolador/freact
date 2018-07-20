import React,{Fragment} from 'react';
import { Input,Button,List } from 'antd';

//无状态组件
//主要用于简单的UI页面渲染，不涉及复杂数据操作
//性能高于普通的component组件对象
const TodoListUI = (props) => {
    return (
        <Fragment>
            <div style={{margin:"10px"}}>
                <Input
                    style={{width:'300px',marginRight: '10px'}}
                    placeholder="输入信息"
                    value={props.inputValue}
                    onChange={props.handleChange}
                />
                <Button
                    type="primary"
                    onClick={props.handleClick}
                >提交</Button>
            </div>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (
                    <List.Item
                        onClick={() => {props.handleDelete(index)}}
                    >{item}</List.Item>
                )}
                style={{width:'300px',marginLeft:"10px"}}
            />
        </Fragment>
    );
}

export default TodoListUI;