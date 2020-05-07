<template>
  <div>
    <div class="topbar-account topbar-btn">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link userinfo-inner"><i class="iconfont icon-user"></i> {{sysUserName}}  <i class="iconfont icon-down"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="userinfo">个人信息</el-dropdown-item>
          <el-dropdown-item @click.native="editpwd">修改密码</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: "MenuBar",
    data() {
      return {
        
        sysUserName: '',
        sysUserAvatar: '',
        collapsed: false,
      }
    },
    mounted() {
      var userSession = this.getCookie('session');
      if(userSession) {
        this.sysUserName = userSession || '';
      }
    },
    methods: {
      //退出
      logout() {
        this.$confirm('确认要退出吗？','提示',{}).then(() => {
          this.$fetch('m/logout').then((res) =>{
            if(res.errCode == 200) {
              this.delCookie('session');
              this.delCookie('u_uuid');
              this.$router.push({path: '/', query: {redirect: this.$router.currentRoute.fullPath}});
            } else {
              console.log(res.errMsg);
            }
          });
        }).catch(() => {
        });
      },
      //个人信息
      userinfo() {
        this.$router.push('/userinfo');
      },
      //修改密码
      editpwd() {
        this.$router.push('/editpwd');
      }
    }
  }
</script>
<style scoped>


</style>