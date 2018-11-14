import React from 'react';
import $ from 'jquery';

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    students:[],
    name:'',
    level:'',
    id:''
  }
    this.addstudent = this.addstudent.bind(this);
     this.fetchData = this.fetchData.bind(this);
   }
  handleChange(e) {
    this.setState({
      name :e.target.value,
      level:e.target.value
    })
  }

  addstudent(){
    var that=this
    console.log("addstudent");

    $.ajax({
      type : 'POST',
      url: '/addstudent',
      data: {
      name: that.state.name,
        level: that.state.level
      },
      success:function(data){
      alert("student added")
    },
    error:function(err){
      console.log('failed to add student')
    }
  });
  }
  componentDidMount() {
  this.fetchData();
}

  fetchData(){
  var that=this;
  $.ajax({
  type:'GET',
    url: '/students',
    success:function(data){
      that.setState({
        students:data
      })
    }
  });
}


    render() {
      return (
      <div>
      <h1>gfjgkhjkl</h1>
      </div>
    );
  }

}

export default AddStudent;
