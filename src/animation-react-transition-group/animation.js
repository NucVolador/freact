import React,{Component,Fragment} from 'react';
import { CSSTransition ,TransitionGroup} from 'react-transition-group';
import './style.css'

class Animation extends Component{
    constructor(props){
        super(props);
        this.state = {
            list : ['first','second','third'] ,
            show : true
            // show变为true时，会执行enter入场动画
        }
    }
    render(){
        const {list,show} = this.state;
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        list.map((item,index)=>{
                            return(
                                <CSSTransition
                                    timeout={1000}
                                    classNames="fade"
                                    unmountOnExit
                                    appear={true}
                                    key={index}
                                >
                                    <div>{item}</div>
                                </CSSTransition>
                            );
                        })
                    }
                </TransitionGroup>
                <button onClick={this.handleClick}>toggle</button>
            </Fragment>


        );
    }
    handleClick = () => {
        this.setState((prevState)=>({show : !prevState.show}));
    }
}
export default Animation;