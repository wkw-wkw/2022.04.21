<template>
<div>
  <div class="header">
    <div class="headercontent">
      <div class="contentleft">
        <ul>
          <li><img src="../../assets/img/TB1fbVFfu3tHKVjSZSgXXX4QFXa-230-104.png" alt=""></li>
          <li><drop-down></drop-down></li>
          <li style="color: red">首页</li>
          <li>分类</li>
        </ul>
      </div>
      <div class="contentright">
        <ul>
          <li>
            <input type="text" placeholder="搜索明星、演出、体育赛事"><span>搜索</span>
          </li>
          <li><a href="#"><img src="../../assets/img/TB14UKCGQyWBuNjy0FpXXassXXa-54-54.png" alt=""> 登录</a></li>
          <li><a href="#"><drop-down-right></drop-down-right></a></li>
        </ul>
      </div>
      <div class="contentright"></div>
    </div>
  </div>
</div>
</template>

<script>
import DropDown from './DropDown'
import DropDownRight from './DropDownRight'
export default {
  name: 'Header',
  components: {
    DropDown,
    DropDownRight
  }
}
</script>

<style scoped>
.header{
  width: 100%;
  height: 75px;
  box-shadow:0 1px 5px 5px rgb(248,248,248);
}
.headercontent{
  width: 65%;
  height: 75px;
  margin: 0 auto;
}
.contentleft{
  float: left;
}
.contentleft li{
  display: inline-block;
  height: 75px;
  width: 50px;
  vertical-align: middle;
  line-height: 75px;
  text-align: center;
}
.contentleft li:first-child{
  height: 40px;
  width: 90px;
  padding: 20px 20px 15px 20px;
}
.contentleft li:first-child img{
  width: 100%;
  height: 100%;
}
.contentleft li:nth-child(2){
  text-align: center;
  width: 100px;
}
.contentleft li:nth-child(3){
  margin-right: 5px;
}
.contentright{
  float: right;
  position: relative;
  width: 650px;
}
.contentright li{
  display: inline-block;
}
.contentright li a{
  text-decoration: none;
  color: black;
  display: inline-block;
}
.contentright li:nth-child(2){
  position: absolute;
  height: 75px;
  line-height: 75px;
  width: 75px;
  text-align: center;
  margin-left: 40px;
  top: -2px;
  left: 440px;
}
.contentright li:nth-child(2) img{
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.contentright li:nth-child(3){
  top: -2px;
  left: 580px;
  position: absolute;
  height: 75px;
  width: 75px;
  text-align: center;
  line-height: 75px;
}
.contentright li:first-child{
  padding-top: 15px;
  height: 60px;
  vertical-align: middle;
}

.contentright li:first-child span{
  height: 45px;
  background-color: rgb(255,18,104);
  display: inline-block;
  line-height: 44px;
  width: 85px;
  text-align: center;
  color: white;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
}
.contentright input{
  width: 300px;
  outline: none;
  height: 45px;
  border: none;
  background-color: rgb(247,247,247);
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  padding-left: 50px;
  font-size: 16px;
  background: url('../../assets/img/TB1qv3jxGmWBuNjy1XaXXXCbXXa-34-36.png')no-repeat 15px;
  background-size: 20px 22px;
}
</style>
