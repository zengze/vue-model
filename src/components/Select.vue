<script>
export default {
  props: ["title", "options"],
  data () {
    return {
      selected: '',
      onChange: (e) => {
        this.selected = e.target.value
      }
    }
  },
  render (h) {
    return (
      <div class="input-outer">
        <span class="i-select">{this.selected ? this.selected : this.title}</span>
        <select class="ipt-select" onChange={this.onChange}>
          <option value="">{this.title}</option>
          {
            this.options.map((item) => {
              return <option value={item}>{item}</option>
            })
          }
        </select>
      </div>
    )
  }
}
</script>

<style scoped>
.input-outer{
  position:relative;
  background:transparent;
  border-radius:0;
  padding-top:1vw;
  padding-bottom:1vw;
}
.i-select{
	font-size:3.75vw;
	color: #666;
}
.ipt-select{
  position:absolute;
  opacity:0;
  z-index:2;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
</style>
