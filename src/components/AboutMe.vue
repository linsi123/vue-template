<template>
  <div>
    <h2>vue-class-component</h2>
    <p>prop: {{ helloMsg }}</p>
    <p>computed msg: {{ computedMsg }}</p>
    <div><button @click="greet">Greet by mixins</button></div>
    <div><button @click="increase">add by post methods</button></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'
import TestMixins from '@/mixins/test-mixins'
import { NoCache } from '@/common/decorators'
import api from '@/services/todo'
@Component({
  props: {
    propMessage: String
  }
})
export default class Test extends mixins(TestMixins) {
  // initial data
  msg: number = 0

  // define undefined
  data() {
    return {
      foo: undefined
    }
  }

  // use prop values for initial data
  helloMsg = `Hello, ${(this as any).propMessage}`

  // lifecycle hook
  async mounted() {
    const res = await api.getTodo({})
    this.msg = res.result.number
  }

  // computed
  @NoCache
  get computedMsg() {
    return `computed ${this.msg}`
  }

  // method
  greet() {
    alert(`greeting: ${this.mixinValue}`)
  }

  async increase() {
    const res = await api.postTodo({})
    this.msg = res.result.number
  }
}
</script>
