var Counter = React.createClass({
    getDefaultProps: function() {
        return {
            default: 0
        }
    },
    getInitialState: function() {
        return {
            counter: this.props.default,
        };
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        });
    },
    increment: function() {
        this.setState({
            counter: this.state.counter +1
        });
    },
    componentWillMount: function() {
        console.log('Loading...');
    },
    componentWillReceiveProps: function() {
        console.log('Counter update');
    },
    componentWillUpdate: function() {
        console.log('Component optimized');
    },
    render: function() {
        return React.createElement('div', {className: 'counters'},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('br', {}),
            React.createElement('br', {}),
            React.createElement('button',{onClick: this.increment}, ' +1 '), 
            React.createElement('button',{onClick: this.decrement}, ' -1 ')               
        );
    },
    
    componentDidMount: function() {
        console.log('Component displayed in a DOM tree');
    },
    componentWillUnmount: function() {
        console.log('Component unmounted');
    }
});

var element =
    React.createElement('div', {},
        React.createElement(Counter),
        React.createElement(Counter)                
    );

ReactDOM.render(element, document.getElementById('app'));