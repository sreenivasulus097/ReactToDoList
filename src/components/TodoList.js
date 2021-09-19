import React from 'react';
import uuid from 'react-uuid';

const TodoList = (props) => {
    
    console.log("todolist");
    console.log(props);
    const todoItemList = props.todoItemList;
    const filteredTodos = props.filteredTodos;
   
    //functions
    const updateItemStatus = (event,id) => {
        console.log("update handler")
const updatedStatusItemList = todoItemList.map((item)=>{
    if(item.id === id){
        return {...item,completed:!item.completed}
       
    }
    else{
        return item;
    }
})
props.updateTodoListStatus(updatedStatusItemList);
    }

const deleteItemHandler = (id) => {
    console.log('deletehandler');
  const filteredList =  todoItemList.filter((todoItem)=>{return todoItem.id !== id});
    props.updateTodoListStatus(filteredList);
   
   console.log(filteredList);
}


return(
    <div>
        <div className="row">
    <div className="col-md-12">
        <div className="main-todo-input-wrap">
            <div className="main-todo-input fl-wrap todo-listing">
                <ul id="list-items">
                {
                filteredTodos.map((todoItem)=>
                
                <li key={uuid()} className={todoItem.completed?'item-completed':''}>
                <span className='todo-text' >{todoItem.inputText}</span>
                <i className="fas fa-edit trash" onClick={e=>updateItemStatus(e,todoItem.id)}></i>&nbsp;&nbsp;
                <i className='fa fa-trash' onClick={e=>deleteItemHandler(todoItem.id)}></i><hr/></li>
                
                )
                } 
                </ul>
               
            </div>
        </div>
    </div>
</div>

    </div>
);
}

export default TodoList;