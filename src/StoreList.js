import React, { Component} from 'react';
import axios from 'axios'



let isDisabled = [];
class StoreList extends Component{

    state = {
        post:[]
    }

    getData = () =>{
        axios.get('http://178.128.196.163:3000/api/records')
        .then(response => { 
            this.setState({
                post : response.data,
              });
        });
    }

    postData = () => {

    }

    deleteItem = () => {
        fetch('http://178.128.196.163:3000/api/records/', {
            method: 'DELETE',
        })
    }




    render(){
        return (
            <>
                <ul onClick={this.getData()} className="store-items">
                    {this.state.post && 
                    this.state.post.map(function(el,i){
                        isDisabled.push(true)
                        return (
                            
                        <li key={el._id} id={"elem"+i} className="store-item">
                            <div className="wrap-items">
                                <input disabled={isDisabled[i]}  placeholder={el.data.login}  id={"login"+i} className="item-input item-input--save" type="text"/>
                                <input disabled={isDisabled[i]} placeholder={el.data.surname} id={"surname"+i} className="item-input item-input--save" type="text"/>
                                <input disabled={isDisabled[i]} placeholder={el.data.email} id={"email"+i} className="item-input item-input--save" type="text"/>
                                <input disabled={isDisabled[i]} placeholder={el.data.name} id={"name"+i} className="item-input item-input--save" type="text"/>
                            </div>
                        <div onClick={
                            ()=>{
                                isDisabled[i] = !isDisabled[i];
                                document.getElementById("login"+i).classList.toggle('item-input--save')
                                document.getElementById("surname"+i).classList.toggle('item-input--save')
                                document.getElementById("email"+i).classList.toggle('item-input--save')
                                document.getElementById("name"+i).classList.toggle('item-input--save')
                                
                            }
                        } className="btn btn--resave btn--save">
                        {isDisabled[i] ? "edit":"save"}
                        
                        </div>
                        <div onClick={()=>{ 
                            fetch('http://178.128.196.163:3000/api/records/'+el._id, {
                                method: 'DELETE',
                            })
                            document.getElementById("elem"+i).style.display = 'none'
                         }} className="btn--delete">
                        &#10006;
                        </div>
                        </li>
                        )
                    })
                        
                    }
                  
                </ul>
            </>
        )
    }

}
export default StoreList