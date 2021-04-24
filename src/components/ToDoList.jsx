import React, { useState } from 'react';
import './todolist.css';

const ToDoList = ()=>{
    const[inputList,setInputList] = useState("");
    const[Items, setItems] = useState([]);

    const [number, setNumber] = useState(0);
    let num2 = 0;
    

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const list_item = () => {
        setItems((oldItems) => {
            return [...oldItems,inputList];
        });
        setInputList("");
    };
    const deleteItem = (id) => {
        let tmpItems = Items;
        // console.log(tmpItems.splice(id,1));
        tmpItems.splice(id,1);
        setItems(tmpItems);
    }
    const inc = () =>{
        let tmp = number; 
        tmp++; 
        setNumber(tmp);
    }
    const dec = () =>{
        setNumber(number-1);
    } 
    
    return (<>
    <div className="main_div">
    <div className="center_div">
        <h1> ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add a Item" onChange={itemEvent} value={inputList}/>
        <button onClick={list_item}> + </button>
    
    <ol>
       { Items.map( (itemval,index)=>{
                return (<>
                <div className="todo_style">
                <i className="fas fa-times" aria-hidden="true" /><li  key={index} id={index} >{itemval}</li>\
                <button onClick={() => deleteItem(index)}> delete </button>
                </div>
                </>
                );
        })
       }    
       </ol>
    </div>
    </div>
    <div>
        <center>    
            <h1> {number} </h1> <br/>
            <button onClick={inc}> + </button>
            <button onClick={dec}> - </button>
        </center>
        <center>    
            <h1> {num2} </h1> <br/>
            <button onClick={() => {num2++; console.log(num2)}}> + </button>
            <button onClick={() => {num2--; console.log(num2)}}> - </button>
        </center>
    </div>
    </>);
};
export default ToDoList;