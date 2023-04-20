import React from "react";
import ReactDOM from "react-dom";

const App = props => {
    return <Count/>;
}

class Count extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    incrementCounter(){
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrementCounter(){
        this.setState({
            counter:this.state.counter -1
        })
    }
    
    render(){
        return(
            <div>
                <h1>Counter</h1>
                <h3>{this.state.counter}</h3>
                <button onClick={this.decrementCounter.bind(this)}>-</button>
                <button onClick={this.incrementCounter.bind(this)}>+</button>   
            </div>
        )
    }
}








ReactDOM.render(<App/>, document.getElementById("root"));