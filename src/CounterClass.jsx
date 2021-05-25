import React from 'react'

export default class CounterClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    
    increment = () => {
        this.setState({count: this.state.count + 1});
      };
    
    decrement = () => {
        if(this.state.count < 1){
          return;
        }

        this.setState({count: this.state.count - 1});
    };

    componentDidMount() {
        console.log('Counter class component mounted');
    }

    componentWillUnmount() {
        console.log('Counter class component removed')
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) console.log('Counter changed')
    }

    render() {
        return (
            <>
                <h2>{this.state.count}</h2>
                <button onClick={this.increment}>Add + </button>
                <button onClick={this.decrement}>Subtract - </button>
            </>
        )
    }
}