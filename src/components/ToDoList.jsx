import React, { useState } from 'react';
import './todolist.css';

const ToDoList = ()=>{
    const[inputList,setInputList] = useState("");
    const[Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const list_item = () => {
        setItems((oldItems) => {
            return [...oldItems,inputList];
        });
        setInputList("");
    };

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
                <i className="fas fa-times" aria-hidden="true" /><li  key={index} id={index} >{itemval}</li>
                </div>
                </>
                );
        })
       }    
       </ol>
    </div>
    </div>
    </>);
};
export default ToDoList;