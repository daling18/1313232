import React, { Component } from 'react'
import {connect} from 'react-redux';

import {CSSTransition,TransitionGroup} from 'react-transition-group';
import {enter,exit} from './store/action';

import './App.css';
 class App extends Component {
     constructor(props){
        super(props)
        this.state={
            data:[]
        }
     }
    handerClick=()=>{
        this.props.enter()
    }
    addClick=()=>{
        this.setState({
            
            data:[...this.state.data,"============="]
        })
    }
    removeClick=(index)=>{
        const arr=JSON.parse(JSON.stringify(this.state.data))
        arr.splice(index,1)
        this.setState({
            data:arr
        })
    }
    render() {
        // console.log(this.props)
        
        return (
            <div>
                <CSSTransition
                    in={this.props.mark}
                    timeout={1000}
                    classNames="my"
                    unmountOnExit
                >
                    <div>dadwdadaaaa</div>
                </CSSTransition>
                <ul>
                <TransitionGroup>
                    {
                        
                        this.state.data.map((item,index)=>{
                           
                            return (
                                <CSSTransition
                                key={index}
                                timeout={1000}
                                classNames="my"
                                appear={true}
                                >
                                    <li>
                                        {item}
                                        <button onClick={()=>{this.removeClick(index)}}>删除</button>
                                    </li>
                                </CSSTransition>
                            )
                        })
                        
                    }
                </TransitionGroup>
                    
                    <button onClick={this.addClick}>添加</button>
                </ul>

                <button onClick={this.handerClick}>切换</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        mark:state.get('mark')
    }
}
export default connect(mapStateToProps,{enter,exit})(App)
