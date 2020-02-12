import React from 'react';

function Todos({todos, showCompleted}){

  return (
    <div className="Todos">
      {
        todos.map((todo) => {
          // if(todo.completed === showCompleted){
          //   return (
          //     <h3 key={todo.id}>{todo.title}</h3>
          //   );
          // }else {
          //   return null;
          // }
          return todo.completed === showCompleted && <h3 key={todo.id}>{todo.title}</h3>;
        })
      }
    </div>
  );
}

export default Todos;
