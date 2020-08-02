import React, { Component } from 'react';
import './App.css';
import StoreList from './StoreList'
// import Func from "./Func.js";


// async function n(){
//     // fetch('http://178.128.196.163:3000/api/records/5f26c0d6ae66af078a50fbe8')
//     // fetch('http://178.128.196.163:3000/api/records/5f260594ae66af078a50fbe3')
//     fetch('http://178.128.196.163:3000/api/records')


//   .then(response => response.json())
//   .then(json => console.log(json))
// }

// async function i(){
// fetch('http://178.128.196.163:3000/api/records/5f260594ae66af078a50fbe3', {
//     method: 'DELETE',
//   })
// }
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
let isDisabled=false;
class App extends Component {


    // onClick={u}

  render() {
      return (
          <>
              {/* <Func/> 1 task */}
            <div className="store-table">
                <h1 className="store-table__logo-text">Cоздать запись</h1>
                <div className="store-table__create-store">
                    <div className="block-wrap">
                        <div className="inputs-wrap">
                            <input required placeholder="Login:"  id="login" className="inputs-create" type="text"/>
                            <input required placeholder="Surname:" id="surname" className="inputs-create" type="text"/>
                            <input required placeholder="Email:" id="email" className="inputs-create" type="text"/>
                            <input required placeholder="Name:" id="name" className="inputs-create" type="text"/>

                        </div>
                        <div onClick={u} className="store-table--add">
                            Добавить запись.
                        </div>
                    </div>
                    <StoreList/>   
                </div>
            </div>
            
          </>
      );
  }
}

export default App;
