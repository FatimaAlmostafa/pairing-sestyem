import React from 'react';
import $ from 'jquery';
class History extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      history:[]
    }
  }
componentWillMount(){
  var that=this;
    $.ajax({
      type : 'GET',
      url: '/history/retrive',
      success:function(data){
      that.setState({
        history:data
      })
    },
    error:function(err){
      console.log('failed to add student')
    }
  });
}


    render() {
      console.log(this.state)
      return (
        <div>
          <h1> hello from History</h1>

        </div>
      )
    }

}

export default History ;
