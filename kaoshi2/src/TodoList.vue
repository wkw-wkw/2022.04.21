<template>
<div id="box">
  <div class="head">
    <h2>todos</h2>
    <p>表单</p>
    <div class="input">
      <span>内容</span><input type="text" placeholder="输入需要添加的事件" id="content" v-model="inputdata" >
      <span id="add" @click="addList">确认</span>
    </div>
  </div>
  <ul class="list">
    <li v-if="todolist.length===0">暂无数据</li>
    <li :key={index} v-for="(item,index) in todolist">
      <span class="xh">{{ index+1 }}</span>
      <span>{{ item }}</span>
      <span class="qc" @click="remove(index)">清除</span>
    </li>
    <li>
      <b>总数{{todolist.length}}</b>
      <b @click="removeAll">清除</b>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'TodoList',
  data: function () {
    return {
      inputdata: '',
      todolist: []
    }
  },
  methods: {
    addList: function () {
      this.todolist.push(this.inputdata)
      this.inputdata = ''
    },
    remove: function (index) {
      // splilce：删除数组内的某一个值或几个值
      // splice（）括号内有两个值，第一个是index，第二个是删除的长度
      // 这里面的意思是删除todolist里面某个下标的值，长度为1
      this.todolist.splice(index, 1)
    },
    removeAll: function () {
      this.todolist = ''
    }
  }
}
</script>

<style scoped>

</style>
