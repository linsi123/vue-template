<template>
  <div class="hello">
    <h1>hello {{ name }}</h1>
    <p>inject value: {{ foo }}</p>
    <input type="input" :value="name" @change="change" />
    <button @click="addToCount(1)">加1</button>
    <button @click="promise">promise</button>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Model,
  Watch,
  Emit,
  Inject
} from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  count = 0

  @Prop() private msg!: string

  @Model('change') name!: string

  change(ev) {
    this.$emit('change', ev.target.value)
  }

  @Inject() foo!: string

  @Watch('name')
  OnNameChange(val: string, oldVal: string) {
    console.log(val)
  }

  @Emit()
  addToCount(n: number) {
    this.count += n

    return this.count
  }

  @Emit()
  promise() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(20)
      }, 0)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
