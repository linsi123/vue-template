<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ClassDemo propMessage="youmi" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import ClassDemo from '@/components/AboutMe.vue'

@Component({
  components: {
    HelloWorld,
    ClassDemo
  }
})
export default class About extends Vue {}
</script>
