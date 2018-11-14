import React from 'react';
import $ from 'jquery';

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    studentname:'',
    level:'',
    allStudents:[],
    newlevel:0
  }
    this.addstudent = this.addstudent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.edit = this.edit.bind(this);
   }
  handleChange(e) {
    this.setState({
      [e.target.name] :e.target.value
    })
  }

  addstudent(){
    var that=this
    console.log("addstudent",this.state);
    $.ajax({
      type : 'POST',
      url: '/students/create',
      data: {
        studentname: that.state.studentname,
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

  componentWillMount(){
    var that=this;
    $.ajax({
      type : 'GET',
      url: '/students/find',
      success:function(data){
      that.setState({
        allStudents:data
      })
    },
    error:function(err){
      console.log('failed to add student')
    }
  });
  }

  edit (e){
    console.log(e.target.value)
    var that=this
    console.log("addstudent",this.state);
    $.ajax({
      type : 'PUT',
      url: '/students/edit',
      data: {
        id: e.target.value,
        level: that.state.newlevel
      },
      success:function(data){
      alert("student edited")
    },
    error:function(err){
      console.log('failed to edit student')
    }
  });
  }

    render() {
      console.log('state',this.state)
      var that = this;
      return (
      <div>
      <input type='text'
      name='studentname'
      placeholder='student name'
      onChange={this.handleChange}
      />
      <input type='number'
      name='level'
      placeholder='level'
      max='5'
      min='0'
      onChange={this.handleChange}
      />
      <button onClick={this.addstudent}>send</button>

      <hr />
      <br />
      {

        this.state.allStudents.map(function(student,i){
          return(
            <h3 key={i}>{student.studentname}    {student.level}  <input name='newlevel' type='number' min='0' max='5' onChange={that.handleChange} /><button value={student._id} onClick={that.edit} >edit</button> </h3>
          )
        })

      }
      </div>
    );
  }

}

export default AddStudent;
