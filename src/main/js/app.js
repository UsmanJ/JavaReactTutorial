const React = require('react');
const ReactDOM = require('react-dom');
import {
    browserHistory as history,
    Router,
    Route
} from 'react-router';
const Home = require('./home');
const Extra = require('./extra');

class App extends React.Component {

    render() {
        return (
            <Router history={history}r>
                <Route path='/' component={Home} />
                <Route path='/extra-page' component={Extra} />
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
);