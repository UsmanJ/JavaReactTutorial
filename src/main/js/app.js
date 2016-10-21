const React = require('react');
const ReactDOM = require('react-dom');
const Home = require('./home');

class App extends React.Component {

    render() {
        return (
            <Home />
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
);