<template>
  <div>
  <el-row class="block-col-2">
    <el-col :span="24">
      <el-dropdown>
      <span class="el-dropdown-link" style="font-size: 16px;color: black"><img src="../../assets/img/TB1XHDuxNGYBuNjy0FnXXX5lpXa-28-32.png" alt="">
        北京<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown"  class="showlist">
            <div>
              <p style="margin-top: 10px;">当前城市： 北京</p>
              <p style="margin-top: 10px;margin-bottom: 10px;">热门城市：全国 &nbsp;北京 &nbsp; 上海 &nbsp; 上海 &nbsp; 上海 &nbsp; 上海 &nbsp; 上海 &nbsp; 上海</p>
              <hr/>
              <div class="other">其他城市： </div><div class="otherlist">
                全国  &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全
              国&nbsp;  &nbsp;&nbsp;全国 &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  <br/>
                全国  &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;
              全国  &nbsp;&nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国&nbsp;  &nbsp;&nbsp;全国 &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  <br/>
                全国  &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp;
              &nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国&nbsp;  &nbsp;&nbsp;全国 &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  <br/>
                全国  &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp;
              &nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国&nbsp;  &nbsp;&nbsp;全国 &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  <br/>
                全国  &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp;
              &nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国&nbsp;  &nbsp;&nbsp;全国 &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  <br/>
                全国  &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp;
              &nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国&nbsp;  &nbsp;&nbsp;全国 &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  <br/>
                全国  &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp;
              &nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国&nbsp;  &nbsp;&nbsp;全国 &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  <br/>
                全国  &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp;
              &nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国&nbsp;  &nbsp;&nbsp;全国 &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  <br/>
                全国  &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp;
              &nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国&nbsp;  &nbsp;&nbsp;全国 &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  <br/>
                全国  &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp;
              &nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国&nbsp;  &nbsp;&nbsp;全国 &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  <br/>
                全国  &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp;
              &nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国&nbsp;  &nbsp;&nbsp;全国 &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  <br/>
                全国  &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国&nbsp;
              &nbsp;&nbsp;全国 &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  <br/>
                全国  &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国&nbsp;
              &nbsp;&nbsp;全国 &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  <br/>
                全国  &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国  &nbsp;&nbsp;&nbsp;全国&nbsp;
              &nbsp;&nbsp;全国 &nbsp;&nbsp;&nbsp;全国 &nbsp; &nbsp;&nbsp;全国  <br/>
              </div>

            </div>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'DropDown'
}
</script>

<style scoped>
el-dropdown-menu{

}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-dropdown-link img{
  width: 12px;
  height: 14px;
  vertical-align: middle;
  margin-top: -4px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.other{
  width: 80px;
  height: 300px;
  float: left;
}
.showlist{
  margin-left: 380px;
  width: 670px;
  padding-left: 10px;
}
hr{
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  color: grey;
}
.otherlist{
  float: left;
}

</style>
