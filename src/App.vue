<template>
  <div>
    <div>
        选择的网站是: {{selected}}
    </div>
    <select v-model="selected" name="fruit">
      <option value="">选择一个网站</option>
      <option value="www.runoob.com">Runoob</option>
      <option value="www.google.com">Google</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      selected: ''
    }
  }
}
</script>
