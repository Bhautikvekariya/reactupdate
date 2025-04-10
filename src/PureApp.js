import React,{PureComponent} from "react";

class ExpensiveComponent extends PureComponent {
    render(){
        console.log("Rendering ExpensiveComponent...");
        return <h1>Count: {this.props.count}</h1>

    }
}

class PureApp extends React.Component{
    state={
        count:0,
        show:true
    };
render(){
    return(
        <div>
            <button onClick={()=>this.setState({count: this.state.count +1})}>
                Increment Count
            </button>
            <button onClick={()=>this.setState({show: !this.state.show})}>

            Toggle Component
            </button>
            {this.state.show && <ExpensiveComponent count={this.state.count}/>}
        </div>
    );
}
}
export default PureApp;