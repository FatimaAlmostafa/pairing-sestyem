import React from 'react';
import $ from 'jquery'
class Pairing extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      allStudents:[],
      pairs:[],
      show:false,
      pairsToSend:[]
    }
    this.pair=this.pair.bind(this);
    this.save=this.save.bind(this);

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

  save(){
    console.log('this.state.pairs ',this.state.pairsToSend);
    var that=this
    $.ajax({
      type : 'POST',
      url: '/history/create',
      data:{pairsToSend:that.state.pairsToSend},
      success:function(data){
      alert("history added")
    },
    error:function(err){
      console.log('failed to add history')
    }
  });
  }

  pair(){
    console.log('pair')
    var l = this.state.allStudents.length;
    var arr=[];
    var i =0;
    while(i !== l){
      var n = Math.floor(Math.random() * l) + 0;
      if(!arr.includes(n)){
        arr.push(n);
        i++;
      }
    }
    console.log('aaa ',arr)
     var pairs = [];
     var pairsToSend=[];
     for(var i = 0;i<arr.length;i++){
      pairsToSend.push(this.state.allStudents[arr[i]].studentname)
     }
     for(var i=0;i<arr.length;i=i+2){

      if(i===arr.length-1){
        pairs.push({f:this.state.allStudents[arr[i]].studentname,s:'-----'})

      }else{
      pairs.push({f:this.state.allStudents[arr[i]].studentname,s:this.state.allStudents[arr[i+1]].studentname})
     }
    }

     console.log(pairs);
     this.setState({
       pairs:pairs,
       show:true,
       pairsToSend:pairsToSend
     })



  }

    render() {
      console.log(this.state)
      return (
        <div>
          <button onClick={this.pair}>Pair</button>
          <button onClick={this.save}>save</button>
          <hr />
          {
            this.state.show&&<div>
            {
              this.state.pairs.map(function(pair,i){
                return <h3 key={i}> {pair.f} ++++++  {pair.s}</h3>
              })
            }



            </div>

          }
        </div>
      )
    }

}

export default Pairing ;
