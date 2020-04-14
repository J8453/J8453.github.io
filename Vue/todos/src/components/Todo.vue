<template>
  <li
    class="todos__todo"
    v-bind:class="classObj">
    <div class="todos__todo--content">
      {{ todo.content }}
      <span v-if="todo.isDone">
        --completed !
      </span>
    </div>
    <div class="todos__todo--buttons">
      <button
        v-on:click="$emit('done', todo.id)">
        {{ todo.isDone ? 'undone' : 'done!' }}
      </button>
      <button
        v-on:click="$emit('delete', todo.id)">
        delete
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo'],
  computed: {
    classObj: function () {
      return {
        isDone: this.todo.isDone
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todos__todo {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 5px;
}

.todos__todo.isDone {
  color: #00000070;
  background-color: #00000010;
}

.todos__todo.isDone>.todos__todo--buttons {
  opacity: 0.7;
}

.todos__todo--buttons {
  margin-left: 5px;
}

.todos__todo--buttons>button {
  padding: 5px;
  border-radius: 4px;
}

span {
  font-size: 0.8em;
}
</style>
