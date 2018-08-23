<template>
  <div>
    <div>找回账号</div>
    <div>
      <el-button type="primary" @click="_onSubmit">生成</el-button>
    </div>
    question:
    <div>{{ question }}</div>
    question1:
    <div>{{ question1 }}</div>
    answer:
    <div>{{ answer }}</div>
    key:
    <div>{{ key }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      question1: "",
      answer: "",
      key: ""
    }
  },
  methods: {
    _onSubmit() {
      let city = ["北京","福建","甘肃","广东","贵州","海南","江苏","河北","黑龙江","湖北","江西","辽宁","山东","陕西","上海","四川","天津","云南","浙江","重庆","广州","杭州","深圳","苏州","武汉","西安","厦门","东莞","兰州","中山","珠海","贵阳","海口","保定","哈尔滨","南京","无锡","南昌","大连","沈阳","济南","青岛","成都","昆明","宁波","台州","温州","昌平","朝阳","大兴","滨江","嘉定","普陀","浦东","闵行","南山","工业园","滨海","东湖新技术开发","江夏","高新技术产业开发","湖里","万州"];
      let team = ["市场"];
      let question = "";
      let question1 = "";
      let answer = "";
      let key = "";
      city.map((item) => {
        team.map((item2) => {
          question += item + item2 + "部的职位\n";
          question1 += item + item2 + "\n";
          answer += 'position:{"voice": "' + item + "+" + item2 + '部", "filter": {"team": "全球' + item2 + '部", "city": "' + item + '"}}' + "\n";
          key += item + "," + item2 + "\n";
        })
      })
      this.question = question;
      this.question1 = question1;
      this.answer = answer;
      this.key = key;
    }
  }
}
</script>
