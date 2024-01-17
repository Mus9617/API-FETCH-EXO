export async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
}

export async function fetchTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  return todos;
}


// Este simpelementa tal y como dice el nombre este codigo se dedica a obtener  la "Data" ya que con los links de la API saco los "Users" y "todos" y puede crear mis funcciones./////