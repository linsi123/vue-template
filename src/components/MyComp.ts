import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class MyComp extends Vue {
  // The class component now treats beforeRouteEnter
  // and beforeRouteLeave as Vue Router hooks
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter')
    next() // needs to be called to confirm the navigation
  }

  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')
    next() // needs to be called to confirm the navigation
  }
}
