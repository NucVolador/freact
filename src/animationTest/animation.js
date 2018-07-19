import React,{Component,Fragment} from 'react';
import './style.css'

class Animation extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state ={
            state : false
        }
    }
    render(){
        const {state} = this.state;
        return (
            <Fragment>
                <div className={state?'show':'hide'}>Hello</div>
                <button onClick={this.handleClick}>Toggle</button>
            </Fragment>
        );
    }
    handleClick(){
        let {state} = this.state;
        state = !state;
        this.setState(()=>({state}));
    }
}
export default Animation