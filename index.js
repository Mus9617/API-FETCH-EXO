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

///////////////////////////////////////////////////////////////////////////////////////////////////Mus96//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// linea 1  Se importan las funciones fetchUsers y fetchTodos del módulo fetchData.js, así como las funciones createUserCard y createTodoItem del módulo createElements.js.                                                                                                        //
// Funcion "get User=> Se define una función asincrónica getUsers. La palabra clave async se utiliza porque dentro de la función se realizan operaciones asíncronas como las solicitudes de datos."                                                                                //
// El Whait =>  Se utilizan las funciones fetchUsers y fetchTodos para obtener datos de usuarios y tareas de alguna fuente externa. La palabra clave await se utiliza para esperar a que las promesas se resuelvan antes de continuar con la ejecución del código.                 //
// El Hml => Se selecciona un elemento HTML con la clase lista. Presumiblemente, este elemento será el contenedor en el que se mostrarán las tarjetas de usuario y sus tareas.                                                                                                     //   
// Iteracion => Se itera sobre la lista de usuarios obtenida.                                                                                                                                                                                                                      //
// Creacion Usuario =>  Se utiliza la función createUserCard para crear una tarjeta de usuario a partir de los datos del usuario.                                                                                                                                                  //
// Filter => Se filtran las tareas (todos) para obtener solo las que corresponden al usuario actual.                                                                                                                                                                               //     
// Iteracion tareas us=>  Se itera sobre las tareas del usuario y se utiliza la función createTodoItem para crear elementos de lista (li) que representan cada tarea. Estos elementos se agregan a la lista de tareas (todosList).                                                 //              
                                                                                                                                                                                                                                                                                   //
// Añadir la lista de tareas a la tarjeta de usuario =>  La lista de tareas se agrega como hijo a la tarjeta de usuario.                                                                                                                                                           //
// Añadir usurario contenedor => La tarjeta de usuario, con su lista de tareas, se agrega como hijo al contenedor principal con la clase lista.                                                                                                                                    //
// GetUsers => getUsers();                                                                                                                                                                                                                                                         //
//```                                                                                                                                                                                                                                                                               //
//Finalmente, se llama a la función getUsers para iniciar el proceso de obtención de datos y construcción de elementos en la página.                                                                                                                                                //
//                                                                                                                                                                                                                                                                                  //
//Este código, en resumen, obtiene datos de usuarios y tareas, crea elementos HTML dinámicamente para representar a los usuarios y sus tareas, y luego los muestra en la página web.                                                                                                //
//   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////MUS96//////////                                                                                                                                                                                                                                                                               //
