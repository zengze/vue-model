<script>
import Select from './Select'
import Input from './Input'

export default {
  data () {
    return {
      json: [
        {
          "module": "form",
          "show": [
            {
              "element": "name",
              "type": "text",
              "title": '请输入您的姓名',
            },
            {
              "element": "city",
              "type": "select",
              "title": '请选择城市',
              "options": ["北京", "天津"],
            },
            {
              "element": "web",
              "type": "select",
              "title": '请选择网站',
              "options": ["zz", "qq"],
            },
            {
              "element": "password",
              "type": "text",
              "inputType": "password",
              "title": '请输入您的密码',
            },
            {
              "element": "rePassword",
              "type": "text",
              "inputType": "password",
              "title": '确认密码',
            },
          ]
        },
      ]
    }
  },
  render (h) {
    return (
      <div>
        {
          this.json.map(item => {
            if(item.module == "form") {
              return item.show.map(item2 => {
                switch(item2.type) {
                  case "select":
                    return <Select title={item2.title} options={item2.options} />;
                  case "text":
                    return <Input type={item2.inputType} title={item2.title} />;
                  default:
                    break;
                }
              })
            }
          })
        }
      </div>
    )
  }
}
</script>
