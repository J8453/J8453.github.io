<template>
  <div id="app">
    <div>
      <img src="./assets/logo.png">
      <h1>todos prac in Vue.js</h1>
    </div>
    <div class="add">
      <label for="add">enter a NEW todo: </label>
      <input
        id="add"
        type="text"
        placeholder="type in here"
        v-model="newTodo">
      <button
        type="submit"
        v-on:click="handleSubmit">
        submit
      </button>
    </div>
    <div class="todos">
      <ul>
        <template v-if="shows==='all'">
          <Todo
            v-for="todo in todos"
            v-bind:todo="todo"
            v-bind:key="todo.id"
            v-on:done="toggleDone"
            v-on:delete="handleDelete">
          </Todo>
        </template>
        <template v-else-if="shows==='undone'">
          <Todo
            v-for="todo in undoneTodos"
            v-bind:todo="todo"
            v-bind:key="todo.id"
            v-on:done="toggleDone"
            v-on:delete="handleDelete">
          </Todo>
        </template>
        <template v-else-if="shows==='done'">
          <Todo
            v-for="todo in doneTodos"
            v-bind:todo="todo"
            v-bind:key="todo.id"
            v-on:done="toggleDone"
            v-on:delete="handleDelete">
          </Todo>
        </template>
      </ul>
    </div>
    <div class="toggle">
      <button
        v-on:click="shows='all'"
        v-bind:disabled="shows==='all'">all</button>
      <button
        v-on:click="shows='undone'"
        v-bind:disabled="shows==='undone'">undone</button>
      <button
        v-on:click="shows='done'"
        v-bind:disabled="shows==='done'">done</button>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Todo from './components/Todo'
export default {
  name: 'App',
  components: { Todo },
  data () {
    return {
      newTodo: '',
      nextId: 1,
      todos: [],
      shows: 'all'
    }
  },
  computed: {
    undoneTodos: function () {
      return this.todos.filter(todo => todo.isDone === false)
    },
    doneTodos: function () {
      return this.todos.filter(todo => todo.isDone === true)
    }
  },
  methods: {
    handleSubmit: function () {
      // console.log('submit: ' + this.newTodo)
      this.todos.push({
        id: this.nextId,
        content: this.newTodo,
        isDone: false
      })
      localStorage.setItem('todos', JSON.stringify(this.todos))
      this.newTodo = ''
      this.nextId += 1
    },
    toggleDone: function (todoId) {
      // console.log('done', todoId)
      const targetTodo = this.todos.find(todo => todo.id === todoId)
      targetTodo.isDone = !targetTodo.isDone
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    handleDelete: function (todoId) {
      if (confirm('Are you sure?')) {
        // console.log('delete', todoId)
        const newTodos = this.todos.filter(todo => todo.id !== todoId)
        this.todos = newTodos
        localStorage.setItem('todos', JSON.stringify(newTodos))
      }
    }
  },
  mounted: function () {
    const todoFromLS = JSON.parse(localStorage.getItem('todos'))
    if (todoFromLS) {
      this.todos = todoFromLS
      this.nextId = todoFromLS[todoFromLS.length - 1]['id'] + 1
    }
  }
}
</script>

<style>
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /*border: 1px solid black;*/
}

*:focus {
  outline: none;
}

button:hover {
  cursor: pointer;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#app>div {
  flex-basis: 100%;
}

div.add {
  padding: 5px;
  display: flex;
  justify-content: center;
  font-weight: bold;
}

div.add>label {
  align-self: center;
}

div.add>* {
  font-size: 1.1em;
  margin-right: 5px;
}

div.add>input {
  padding: 3px;
  border: 1px solid #00000030;
  border-radius: 4px;
}

div.add>input:focus {
  outline: none;
  border: 1px solid rgb(100,181,135);
  box-shadow: inset 0 0 5px rgb(100,181,135), 0 0 5px rgb(100,181,135);
}

div.add>button {
  color: #fff;
  background-color: rgb(100,181,135);
  border: 1px solid #fff;
  border-radius: 4px;
}

.todos {
  display: flex;
  justify-content: center;
}

.todos>ul {
  min-width: 40%;
}

div.toggle>button {
  font-size: 1.1em;
  color: rgb(100,181,135);
  border: none;
  border-radius: 4px;
}

div.toggle>button:hover {
  color: #fff;
  background-color: rgb(100,181,135);
}

div.toggle>button:disabled {
  cursor: default;
  color: #00000080;
  background-color: transparent;
  border: 2px solid rgb(100,181,135);
}

img {
  width: 100px;
}
</style>
