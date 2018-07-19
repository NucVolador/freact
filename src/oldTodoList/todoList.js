import React, {Component, Fragment} from 'react';
import Axios from 'axios';
import TodoItem from './todoItem';

//Fragment是react16中的占位符（包裹器）

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        //两种ref的定义方式
        //使用this.inputRef.current操作实体dom
        // this.inputRef = React.createRef();
        //使用this.el操作实体dom
        // this.inputRef = el => this.el = el;
    }
    componentDidMount(){
        Axios.get('/api')
            .then((res) => {
                this.setState(()=>{
                   return { list : [...res.data] }
                });
            })
            .catch((error)=>{
                alert(error);
            })
    }

    render() {
        const {inputValue,list}= this.state;
        return (
            <Fragment>
                <div>
                    <input
                        value={inputValue}
                        onChange={this.handleChange}
                        /*ref={this.inputRef}*/
                    />
                    <button onClick={this.handleClick}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <TodoItem
                                    key={index}
                                    inputValue={item}
                                    index={index}
                                    handleDelete={this.handleDelete}
                                >
                                </TodoItem>
                            )
                        })
                    }
                </ul>
            </Fragment>
        );
    }

    handleChange(e) {
        const inputValue = e.target.value;
        //react16中，setState方法的参数可以是一个函数
        //函数中有一个参数，为上一次的状态
        this.setState(() => (
            {inputValue}
        ),()=>{
            //    测试ref的使用
            // console.log(this.inputRef.current.value);
            // console.log(this.el.value);
        });
    }

    handleClick() {
        this.setState((prevState)=>{
            const list = [...prevState.list, prevState.inputValue];
            return {list,inputValue:''}
        });
    }

    handleDelete(index) {
        this.setState((prevState)=>{
            const {list} = prevState;
            list.splice(index, 1);
            return {list}
        });
    }
}

export default TodoList;