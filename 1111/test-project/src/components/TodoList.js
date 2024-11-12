const TodoList = () => {
  const todos = ["청소하기", "강아지와 산책하기", "심부름 하기", "운동하기"]

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  )
}

export default TodoList