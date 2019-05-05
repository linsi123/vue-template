<script lang="tsx">
import { Vue, Component, Watch, Prop, Model } from 'vue-property-decorator'
import { State, Action, Getter, namespace } from 'vuex-class'
import { TodoState } from '@/store/modules/todo.types'
import { P_TODO_FETCH_DATA, FETCH_DATA } from '@/store/modules/todo.data'

const someModule = namespace('todoData')

@Component
export default class FilterItem extends Vue {
  @Prop(Number) mobile: number

  @Prop({ default: 'default value' }) name: string

  @Prop([String, Boolean]) sex: string | boolean

  @someModule.State('todo') todo: TodoState

  // @Action(FETCH_DATA, { namespace: 'todoData' }) fetchData: any
  @someModule.Action(FETCH_DATA) fetchData: any
  // get name(): string {
  //   const { name } = this.user
  //   return name
  // }
  // @Model('change', { type: String }) name!: string;
  // change(ev){
  //     this.$emit('change', ev.target.name);
  // }

  // @Watch('name')
  // onNaemChanged(val: string, oldVal: string) {
  //   console.log(val);
  //   console.log(oldVal);
  // }

  mounted() {
    this.fetchData()
  }

  render(h, context) {
    const { mobile, sex } = this
    return (
      <div>
        <h2>tsx demo</h2>

        <p>姓名：</p>
        <p>手机：{mobile}</p>
        <p>
          性别：
          {sex ? '男' : '女'}
        </p>
        <button>change</button>
      </div>
    )
  }
}
</script>
