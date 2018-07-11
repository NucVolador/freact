import React, {Component,Fragment} from 'react';
//Fragment是react16中的占位符（包裹器）

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue : '',
      list : ['学习英语','learning react']
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
              value={this.state.inputValue}
              onChange={this.handleChange.bind(this)}
              />
          <button onClick={this.handleClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return <li
                        key={index}
                        onClick={this.handleDelete.bind(this,index)}
                      >
                        {item}
                      </li>
            })
          }
        </ul>
      </Fragment>
    );
  }
  handleChange(e){
    this.setState({
      inputValue : e.target.value
    });
  }
  handleClick(){
    const list = [...this.state.list,this.state.inputValue]
    this.setState({list,inputValue : ''});
  }
  handleDelete(index){
    const {list} = this.state;
    list.splice(index,1);
    this.setState({list});
  }
}

export default TodoList;