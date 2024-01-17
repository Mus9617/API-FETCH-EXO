import { fetchUsers, fetchTodos } from "./fetchData.js";
import { createUserCard, createTodoItem } from "./createElements.js";

async function getUsers() {
  const users = await fetchUsers();
  const todos = await fetchTodos();
  const lista = document.querySelector(".lista");

  users.forEach((user) => {
    const userCard = createUserCard(user);
    const userTodos = todos.filter((todo) => todo.userId === user.id);
    const todosList = document.createElement("ul");

    userTodos.forEach((todo) => {
      const todoItem = createTodoItem(todo);
      todosList.appendChild(todoItem);
    });

    userCard.appendChild(todosList);
    lista.appendChild(userCard);
  });
}

getUsers();
