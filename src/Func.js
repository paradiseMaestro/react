import React from 'react';
import Axios from 'axios';
class Func extends React.Component{

constructor(){
    super();
    this.state = {
        userId:undefined,
        id:undefined,
        title:undefined,
        completed:undefined,
    };
    
    this.TH = [];

    // create an array with state items
    for(let i in this.state){
        this.TH.push(i);
    }
    // create a th tags
    this.TH = this.TH.map((el,i)=>{
        return <th key ={i} >{el}</th>
    })

    // create a td tags
    this.TD = [];
    // this.TD = this.TD.bind(this);
}


fakeApiCall =  () => {
    Axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => { 
            this.setState({
                userId : res.data.userId.toString(),
                id : res.data.id.toString(),
                title : res.data.title.toString(),
                completed : res.data.completed.toString()
              });
              for (let i in this.state) {
                this.TD.push(this.state[i].toString());
                // console.log(this.TD)
                // console.log("(")
            }
        
                this.TD =  this.TD.map(
                    (el,i) => {
                        // console.log("(  " + `<td key =${i} >${el}</td>`)
                    return <td key ={i} >{el}</td>
                    }
                )
                
        });

}
render() {
        return (
            <>
        <h1 className="table__main-text">1 Задача</h1> 
        <h1 onClick={this.fakeApiCall}  className="table__main-text table__main--down">Загрузить</h1> 
		<table  className="table">
  <thead>
    <tr>
        {this.TH}
    </tr>
  </thead>
  <tbody>
    <tr>
    {<td>{this.state.userId}</td>}
    {<td>{this.state.id}</td>}
    {<td>{this.state.title}</td>}
    {<td>{this.state.completed}</td>}
    </tr>
  </tbody>
</table>
            </>
        )
    
}

}
export default Func ;
