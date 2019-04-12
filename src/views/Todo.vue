<template>
  <div class="home">
    <h2>todo mvc</h2>
    <p>name : {{ name }}</p>
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

@Component({
  name: 'todo'
})
export default class Todo extends Vue {
  mounted() {}
}
</script>
