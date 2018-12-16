<script lang="tsx">
import { Vue, Component, Watch, Prop, Model } from 'vue-property-decorator'

@Component({})
export default class FilterItem extends Vue {
  @Prop(Number) mobile: number

  @Prop({ default: 'default value' }) name: string

  @Prop([String, Boolean]) sex: string | boolean

  // @Model('change', { type: String }) name!: string;
  // change(ev){
  //     this.$emit('change', ev.target.name);
  // }

  // @Watch('name')
  // onNaemChanged(val: string, oldVal: string) {
  //   console.log(val);
  //   console.log(oldVal);
  // }
  render(h, context) {
    const { name, mobile, sex } = this
    return (
      <div>
        <h2>tsx demo</h2>
        <input value={name} />
        <p>姓名：{name}</p>
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
