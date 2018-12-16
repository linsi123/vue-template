<template>
  <div>
    我是todolist
    <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'
import TodoItem from '../item/TodoItem.vue'
@Component({
  components: {
    TodoItem
  }
})
export default class Test extends Vue {
  todos = [{ id: '1', name: 'linsi' }, { id: '3', name: 'linsi2' }]
}
</script>
