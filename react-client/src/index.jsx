import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home.jsx';
import Home2 from './components/Home2.jsx';
import Pairing from './components/Pairing.jsx';
import History from './components/History.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render () {
    return (
      <Router history={browserHistory}>
      <div className="container-fluid">
      <Route exact path="/" component={Home}/>
      <Route path='/addstudent' component={Home2} />
      <Route path='/paring' component={Pairing} />
      <Route path='/history' component={History} />
      </div>
    </Router>
      )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
