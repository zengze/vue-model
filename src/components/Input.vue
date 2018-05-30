<script>
export default {
  props: ["title", "type"],
  data () {
    return {
      inputValue: '',
      onChange: (e) => {
        this.inputValue = e.target.value
      }
    }
  },
  render (h) {
    return (
      <div class="input-outer input-bgimgs to">
        <span class="icons i-name i-phone"></span>
        <div class="input-inner">
          <input class="input-enter" type={this.type ? this.type : "text"} placeholder={this.title} value={this.inputValue} onChange={this.onChange}/>
        </div>
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
