import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Todos from "./components/Todos";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/reseter.css/1.0.8/reseter.min.css"
  integrity="sha512-w7sMEM5yzmuVP9ic9zpCLk/+whwrrhkH5g83x0wi5DEPo1y+/JniMmCVfbtjw5JipFpcCb4gyF2xLES6tc+TxA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDetail, setTodoDetail] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [doneTodo, setDoneTodo] = useState([]);

  // onChange 투두
  const onChangeTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  // onChange 디테일
  const onChangeDetail = (e) => {
    setTodoDetail(e.target.value);
  };

  // 새로운 투두 추가하기
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newTodos = {
      id: crypto.randomUUID(),
      title: todoTitle,
      detail: todoDetail,
      status: isDone,
    };

    setTodoList([...todoList, newTodos]);
    setTodoTitle("");
    setTodoDetail("");
    // setIsDone(isDone);
  };

  // 투두 완료 버튼 클릭
  const doneToggleHandler = (dTodo) => {
    const newDoneTodo = {
      id: dTodo.id,
      title: dTodo.title,
      detail: dTodo.detail,
      status: !isDone,
    };

    // setIsDone(!isDone);
    setDoneTodo([...doneTodo, newDoneTodo]);
    setTodoList(todoList.filter((todo) => todo.id !== dTodo.id));
  };

  // 투두 완료 취소 버튼 클릭
  const cancelHandler = (cTodo) => {
    const cancelDone = {
      id: cTodo.id,
      title: cTodo.title,
      detail: cTodo.detail,
      status: isDone,
    };

    setTodoList([...todoList, cancelDone]);
    setDoneTodo(doneTodo.filter((item) => item.id !== cancelDone.id));
  };

  // 투두 삭제 버튼 클릭
  const deleteHandler = (id) => {
    const deletedTodo = todoList.filter((todo) => todo.id !== id);
    const deletedFromComplete = doneTodo.filter((todo) => todo.id !== id);

    setTodoList(deletedTodo);
    setDoneTodo(deletedFromComplete);
  };

  return (
    <div className="App">
      <Header></Header>
      <Input
        onTitle={onChangeTitle}
        todoTitle={todoTitle}
        onDetail={onChangeDetail}
        todoDetail={todoDetail}
        onSubmit={onSubmitHandler}
      />

      <Todos
        todos={todoList}
        clickDone={doneToggleHandler}
        clickDelete={deleteHandler}>
        Working
      </Todos>

      <Todos
        todos={doneTodo}
        clickDone={cancelHandler}
        clickDelete={deleteHandler}>
        Done
      </Todos>
    </div>
  );
}

export default App;
