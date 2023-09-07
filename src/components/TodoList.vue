<template>
  <div>
    <h1>Minha Lista de Tarefas</h1>
    <div>
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Adicione uma tarefa" />
      <button @click="addTodo">Adicionar</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.text }}
        <button @click="editTodo(index)">Editar</button>
        <button @click="deleteTodo(index)">Excluir</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() === "") return;
      this.todos.push({ text: this.newTodo });
      this.newTodo = "";
    },
    editTodo(index) {
      const newText = prompt("Editar tarefa:", this.todos[index].text);
      if (newText !== null) {
        this.todos[index].text = newText;
      }
    },
    deleteTodo(index) {
      const confirmDelete = confirm("Tem certeza de que deseja excluir esta tarefa?");
      if (confirmDelete) {
        this.todos.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

input {
  width: 70%;
  padding: 10px;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 5px;
}

li button {
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  margin-left: 5px;
}

li button:hover {
  background-color: #d32f2f;
}
</style>