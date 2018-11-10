import React from 'react';
import ReactDOM from 'react-dom';
import {Form, FormControl,Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        <div>

        <br/>
          <br/>
          <br/>
            <br/>
            <NavLink to = "/addstudent">
                        <button>Add Student</button>
                        </NavLink>
          <br/>
            <br/>
            <NavLink to ="/paring">
                   <Button> Pairing </Button>
                   </NavLink>
          <br/>
            <br/>
            <NavLink to ="/history">
          <Button> History</Button>
          </NavLink>
          <br/>
            <br/>
        </div>
      )
    }

}

export default Home;
