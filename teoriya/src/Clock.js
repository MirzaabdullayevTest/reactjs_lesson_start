import { Component } from "react/cjs/react.production.min";

class Clock extends Component {
    constructor(props) {
        console.log('constructor');
        super(props)

        this.state = {
            time: props.date
        }
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    componentDidMount() {
        console.log('componentDidMount');

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerID);
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>Привет, мир!</h1>
                <h2>Сейчас {this.state.time.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock