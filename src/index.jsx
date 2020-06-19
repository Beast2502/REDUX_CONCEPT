import React, { Component } from 'react';
import ReactDom from "react-dom";

import Navbar from './component/Navbar';
import {INCREASE,DECREASE,RESET,CHANGENAME} from './component/Action';


//redux stuff
//store => stores data , think of state
import {createStore} from 'redux';
//initial store
const initialStore={
    count:10,
    name:"MEHUL"
}

//dispatch method => send actions to the store
//actions(objects) => must have Type property- what kind of action
//DONT MUTATE THE STATE - REDUX BUILT ON IMMUTABILITY(COPY)


//reducer => function that used to update store
//two arguements = state , action
// state - old state/ state before update
// action - what happened / what update
// return updates or old state


//reducer
const reducer=(state,action)=>{
    
     console.log({state,action});
     if(action.type === DECREASE)
     {
         return {...state,count: state.count -1}  // spread opertaion is used to add all the values.
     }
     if(action.type === INCREASE){
         return {...state,count: state.count +1}
     }
     if(action.type === RESET){
         return {...state,count : 0}
     }

     if(action.type === CHANGENAME){
         return{...state,name:"MEHUL SAXENA"}
     }

     return state;

 }

const store = createStore(reducer,initialStore);




//dispatch 
store.dispatch({type: DECREASE})
console.log(store.getState())
store.dispatch({type: INCREASE});
console.log(store.getState());
store.dispatch({type: RESET})
console.log(store.getState());
store.dispatch({type: CHANGENAME})

//store.getState()
console.log(store.getState())

class Index extends Component {
    render() {
        return (
            <div>
                
                <Navbar cart={store.getState()}/>
                
            </div>
        );
    }
}

ReactDom.render(<Index/>,document.getElementById("root"))