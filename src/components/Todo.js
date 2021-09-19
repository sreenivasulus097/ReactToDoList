import React, {useState} from 'react';
import TodoList from './TodoList';
import uuid from 'react-uuid';

const Todo = (props) => {
    //functions and state
    console.log("Todo");
    console.log(props);
    
    const [inputValue, setInputValue] = useState(''); 
    //const todoItemList = props.itemList;
    const addHandler = (e) => {
        e.preventDefault();
        console.log('add event handler');
        props.setTodoItem({id:uuid(),inputText:inputValue, completed:false});
        setInputValue('');
    
    }

    const updateDisplayResults = (event) => {
        console.log("update select dropdown results");
    props.setTodoOption(event.target.value);

    }
  

return(
    <div>

    <div className="row">
    <div className="col-md-12">
        <div className="main-todo-input-wrap">
            <form onSubmit={addHandler}>
            <div className="main-todo-input fl-wrap">
                <div className="main-todo-input-item"> 
                <input type="text" id="todo-list-item" name="todo-list-item" 
                placeholder="What will you do today?"
                onChange={e=>setInputValue(e.target.value)}
                value={inputValue}
                /> 
                </div> 
                <button type="submit" className="add-items main-search-button">ADD</button>
            </div>
            </form>

            <div>
            <select className="form-select selectdropdown" aria-label="Default select example" onChange={updateDisplayResults}>
  <option value="all">All</option>
  <option value="completed">Completed</option>
  <option value="uncompleted">Uncompleted</option>
</select>

            </div>

        </div>
    </div>
</div>
<TodoList todoItemList={props.itemList} updateTodoListStatus={props.updateTodoListStatus} filteredTodos={props.filteredTodos}/>

</div>
   
);
}

export default Todo;