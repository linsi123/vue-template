<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/img/logo.png" />
    <!-- decorator例子 -->

    <HelloWorld
      v-model="msg"
      @add-to-count="OnAddToCount"
      @promise="OnPromise"
    />
    <p>点了：{{ total }}次</p>
    <!-- decorator tsx例子 -->
    <!-- <RC name="tsx" :mobile="110" :sex="true" v-model="name" /> -->
    <p>name : {{ name }}</p>

    <TodoList />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
// import RC from '@/components/RenderComponent.vue'
import TodoList from '@/components/todo/list/TodoList.vue'

@Component({
  components: {
    HelloWorld,
    // RC,
    TodoList
  }
})
export default class Home extends Vue {
  name: string = 'tsx1'

  checked: boolean = true

  msg: string = 'model'

  total: number = 0

  @Provide() foo = 'foo'

  OnChange(value) {
    console.log(value)
  }

  OnAddToCount(value) {
    this.total = value
  }

  OnPromise(value) {
    this.total = value
  }
}
</script>
<style lang="less">
@import '../assets/styles/index.less';
</style>
