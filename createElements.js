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





// Bien aqui lo que hacemos es crear una funcion que va a crear 2 divs donde dentro tendremos los ul y li. y dentro tenemos las "id","name","username","email","street", "phone".
// esas divs que creamos llama a cada id que necesitamos despues le damos un return debajo exportamos la funcion "createTodoIttem" donde dentro declaremos el "todo" que previemento 
// emos declarado en el index.js despues vamos a declarar con el InnerHTML donde le decimos que nos saquue el "title","completed", y nos añadira la infa de la segundo API.