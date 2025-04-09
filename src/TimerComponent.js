import React from "react";

class TimerComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={time:0};
    }

    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState((prevState)=>({time:prevState.time+1}));
        },1000);
        
    }    
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
       return<h1>Time: {this.state.time}</h1>
        
    }
    
}
export default TimerComponent;