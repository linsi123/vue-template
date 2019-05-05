<template>
  <div class="home">
    <h2>todo mvc</h2>
    <RC />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import RC from '@/components/RenderComponent.vue'

@Component({
  name: 'todo',
  components: {
    RC
  }
})
export default class Todo extends Vue {
  mounted() {}
}
</script>
