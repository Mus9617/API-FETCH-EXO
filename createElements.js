export function createUserCard(user) {
  const userCard = document.createElement("div");
  userCard.className = "papi";
  userCard.innerHTML = `<ul>
      <li>ID: ${user.id}</li>
      <li>Name: ${user.name}</li>
      <li>Username: ${user.username}</li>
      <li>Email: ${user.email}</li>
      <li>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}</li>
      <li>Phone: ${user.phone}</li>
      </ul>`;
  return userCard;
}

export function createTodoItem(todo) {
  const todoItem = document.createElement("li");
  todoItem.innerHTML = `Title: ${todo.title},<br>Completed: ${todo.completed}`;
  return todoItem;
}
