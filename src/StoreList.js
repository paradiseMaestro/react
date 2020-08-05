import React, { Component} from 'react';
import axios from 'axios'

async function u(){
    fetch('http://178.128.196.163:3000/api/records', {
      method: 'PUT',
      body: JSON.stringify({
          data: {
              email: document.getElementById('email').value.toString(),
              surname: document.getElementById('surname').value.toString(),
              login: document.getElementById('login').value.toString(),
              name: document.getElementById('name').value.toString(),
          },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
}

let isDisabled = [];
class StoreList extends Component{

    constructor(){
        super()
        this.state = {
            post:[],
            active: false,
        }
        this.getData = this.getData.bind(this)
        // this.handleClick = this.handleClick.bind(this);
        // this.addActiveClass= this.addActiveClass.bind(this);
    }
    // toggleClass() {
    //     const currentState = this.state.active;
    //     this.setState({ active: !currentState });
    // };
    lol = () => {
        alert("fgh")
    }
    

    getData = () =>{
        axios.get('http://178.128.196.163:3000/api/records')
        .then(response => { 
            this.setState({
                post : response.data,
                btnState:true
              });
        });
    }

    handleClick() {
        return false;
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
                                <input disabled={isDisabled[i]}  placeholder={el.data.surname} id={"surname"+i} className="item-input item-input--save" type="text"/>
                                <input disabled={isDisabled[i]}  placeholder={el.data.email} id={"email"+i} className="item-input item-input--save" type="text"/>
                                <input disabled={isDisabled[i]}  placeholder={el.data.name} id={"name"+i} className="item-input item-input--save" type="text"/>
                            </div>
                        <div onClick={
                            ()=>{
                                isDisabled[i] = !isDisabled[i];
                                document.getElementById("login"+i).classList.toggle('item-input--save')
                                document.getElementById("surname"+i).classList.toggle('item-input--save')
                                document.getElementById("email"+i).classList.toggle('item-input--save')
                                document.getElementById("name"+i).classList.toggle('item-input--save')
                                // this.setState({active: !this.state.active})
                                // StoreList.getData()
                                if(isDisabled[i]){
                                    

                                    fetch('http://178.128.196.163:3000/api/records/'+el._id, {
                                        method: 'POST',
                                        body: JSON.stringify({
                                        data: {
                                        email: document.getElementById("login"+i).value.toString(),
                                        surname: document.getElementById("surname"+i).value.toString(),
                                        login: document.getElementById("email"+i).value.toString(),
                                        name: document.getElementById("name"+i).value.toString(),
                                    },
                                    }),

                                    headers: {
                                    "Content-type": "application/json; charset=UTF-8"
                                    }

                                    })







                                }
                            }
                            // () => 
                            // this.lol
                        } className="btn-trig btn--resave btn--save">
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
                        <div className="lol">lol</div>
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