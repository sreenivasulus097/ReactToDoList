import './App.css';
import React, {useEffect, useState} from 'react';
import Todo from './components/Todo';

function App() {
  //State and functions here
 // const [todoInputField, setTodoInputField] = useState("");
  const [todoItemList, setTodoItemList] = useState([]);
  const [todoOption, setTodoOption] = useState('all');
  const [filteredTodos, setFilteredTodos]= useState([]);

  const addTodoItem = (todoItem) => {
    console.log('App js');
    console.log(todoItem);
    setTodoItemList([...todoItemList,todoItem]);
  }

  useEffect(()=>{
    console.log("todoItemList use effect app js");
       switch(todoOption){
           case 'completed' : const completedResult = todoItemList.filter(item=>{return item.completed === true});
           setFilteredTodos(completedResult);
           break;
           case 'uncompleted':const uncompletedResult = todoItemList.filter(item=>{return item.completed !== true})
           setFilteredTodos(uncompletedResult);
           break;
           default:
            setFilteredTodos(todoItemList);
       } 

  },[todoOption,todoItemList])
  return (
    <div className="App">
      <h1 className="main-title">TODO</h1>
      
      <Todo setTodoItem={addTodoItem} 
      itemList={todoItemList} 
      updateTodoListStatus={setTodoItemList} 
      todoOption={todoOption} 
      setTodoOption={setTodoOption}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
