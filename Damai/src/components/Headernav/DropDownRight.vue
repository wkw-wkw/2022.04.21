<template>
  <div>
    <el-row class="block-col-2">
      <el-col :span="24">
        <el-dropdown>
      <span class="el-dropdown-link" style="font-size: 16px;color: black">
        <img src="../../assets/img/TB1A9eIGKuSBuNjy1XcXXcYjFXa-54-54.png">&nbsp;下载
      </span>
          <el-dropdown-menu slot="dropdown"  class="showlist">
            <div>

              <img src="../../assets/img/TB1TBEJSkvoK1RjSZFNXXcxMVXa-280-280.jpg" alt="">
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
.el-icon-arrow-down {
  font-size: 12px;
}
img{
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.showlist{
  width: 85px;
  height: 85px;
  padding: 5px;
  margin-left: 15px;
}
.showlist img{
  width: 100%;
  height: 100%;
}
</style>
