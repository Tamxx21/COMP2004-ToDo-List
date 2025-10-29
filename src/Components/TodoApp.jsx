import { useState } from "react";
import FormComponent from "./FormComponent";
import TodoCardsContainer from "./TodoCardsContainer";

export default function TodoApp() {
    const [todo, setTodo] = useState({
        title: "",
        checked: false,
    });

    const [todoList, setTodoList] = useState([]);

    const handleAddTodo = (e) => {
         e.preventDefault();
        if (todo.title === "") {
            alert("Please add a title first before adding a todo item!");
        } else {
            setTodoList((prevList) => {
                return [...prevList, todo];
            });
            setTodo({
                title: "",
                checked: false,
            });
        }
    };

    const handleOnChange = (e) => {
        setTodo((prevTodo) => {
            return {
                ...prevTodo,
                [e.target.name]:e.target.value
            }
        });

    };


   const handleOnCheck = (e, index) => {
        setTodoList(
            todoList.map((item, i) => 
                i === index ? {...item, checked: e.target.checked} : item
            )
        );
    };

   const handleOnDelete = (index) => {
    setTodoList((prevList) => {
        return prevList.filter((item, i) => i !== index)
    });
   };

    return <div>
        <h1>Todo List</h1>
        <FormComponent
        handleAddTodo={handleAddTodo}
        handleOnChange={handleOnChange}
        todo={todo}
        />
        <TodoCardsContainer
        handleOnCheck={handleOnCheck}
        handleOnDelete={handleOnDelete}
        todoList={todoList}
        />
    </div>
}