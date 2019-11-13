<template>
  <div class="index">
    <!-- <form action="" method="get" @submit.prevent="getMgtdata"> -->
    <div class="staffs">
      <div class="ShengBang_smallbox">
        <img src="../assets/shengbang.png" alt style="width: 45%;height: 55%;margin-top:8%" />
      </div>
      <!-- 盛邦小盒子 -->
      <router-link to="/HomePage">
        <div class="HOmePage_btn">
          <span class="Home_Span">首页</span>
        </div>
      </router-link>
      <!-- 首页 -->
      <div class="Staff_smallbox">
        <span class="background_staff">员工管理</span>
      </div>
      <!-- 员工管理小盒子 -->
      <router-link to="/Management" class="Managements">
        <div class="Student_smallbox">
          <span class="Managements">学员管理信息</span>
        </div>
      </router-link>
      <!-- 学生管理信息 -->
    </div>
    <!-- 标题加伪类选择器 -->
    <div class="Content">
      <div class="content_dir">
        <span style="font-size: 24px;color:#666666">招生管理系统</span>
        
      </div>
      <!-- 内容目录 -->
      <table class="content_manager">
        <thead>
          <th style=" float: left; margin-left:44px;font-size: 19px;color:#666666">姓名</th>
          <th style=" float: left; margin-left:128px;font-size: 19px;color:#666666">手机号</th>
          <th style=" float: left; margin-left:128px;font-size: 19px;color:#666666">账号</th>
          <th style=" float: left; margin-left:128px;font-size: 19px;color:#666666;">密码</th>
          <!-- 以下是el -->
          <el-button @click="drawer = true" type="primary" id="content_btn">新建</el-button>

          <el-drawer
             size="699px;
            height:100%;
            overflow-y:scroll;" 
            :close-on-press-escape="false"
            :visible.sync="drawer"
            :direction="direction"
          >
            <!--  :show-close="false"  -->
            <h1 style="margin-left:35px;margin-bottom:35px">新建</h1>
            <form @submit.prevent="getMgtdata">
              <label for style="font-size:16px; margin-left:35px">姓名:</label>
              <br />

              <input type="text" class="new_input" v-model="item.new_name" maxlength="4" />
              <br />

              <label for class="new_name">手机号:</label>
              <br />

              <input type="tel" name id class="new_input" v-model="item.new_phone" maxlength="11" />
              <br />

              <label for class="new_name">账号:</label>
              <br />

              <input type="tel" name id class="new_input" v-model="item.new_nub" maxlength="6" />
              <br />

              <label for class="new_name">密码:</label>
              <br />
              <el-input id="input_pas" v-model="item.new_pas" maxlength="6" show-password></el-input>
              <br />

              <input type="submit" value="确认" id="new_btn" @click="close_btn" />
            </form>
          </el-drawer>
        </thead>
      </table>
      <!-- 内容管理 -->
      <tbody v-for="(item,id) in list" class="content_repair">
        <tr>
          <td class="Staff_id">{{item.id}}</td>
          <td class="Staff_name">{{item.staff_name}}</td>
          <!-- 小明 -->
          <td class="Staff_phone">{{item.staff_phone}}</td>
          <!-- 手机号 -->
          <td class="Staff_school">{{item.staff_nub}}</td>
          <!-- 账号 -->
          <td class="Staff_pas" style="display:none">{{item.staff_pas}}</td>
          <!-- 密码 -->
          <el-button @click="details_btn(id)" type="primary" id="content_check">详情</el-button>
        </tr>
        <el-drawer
          size="699px;
        height:100%;
        overflow-y:scroll;" 
          :close-on-press-escape="false"
          :visible.sync="dra"
          :direction="direction"
        >
          <!-- :show-close="false"  -->
          <h1 style="margin-left:35px;margin-bottom:35px">详情</h1>
          <label for style="font-size:16px; margin-left:35px">姓名:</label>
          <br />
          <input type="text" class="new_input" v-model="details_name" />
          <br />
          <!-- <input type="text" class="new_input"><br> -->
          <label for class="new_name">手机号:</label>
          <br />
          <input type="number" class="new_input" v-model="details_phone" />
          <br />
          <label for class="new_name">账号:</label>
          <br />
          <input type="number" class="new_input" v-model="details_nub" />
          <br />
          <label for class="new_name">密码:</label>
          <br />
          <input type="password" class="new_input" v-model="details_pas" />
          <br />
          <el-button id="new_btnn" type="primary" round @click="close_details">确认</el-button>
        </el-drawer>
      </tbody>
      <el-pagination
        id="pagination"
        before-close="close"
        background
        layout="prev, pager, next"
        :total="100"
      ></el-pagination>
    </div>
    <!-- </form> -->
    <!-- 右边内容 -->
    <router-link to="/" class="return_login">退出</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "index",
  data() {
    return {
      drawer: false,
      direction: "rtl" /* 新建+详情 */,
      dra: false /* 详情 */,

      item: {
        id: this.id,
        new_name: "" /* 新建姓名 */,
        new_phone: "" /* 新建电话号 */,
        new_nub: "" /* 新建账号 */,
        new_pas: "" /* 新建密码 */
      },
      list: [],
      details_name: "",
      details_phone: "",
      details_nub: "",
      details_pas: ""
    };
  },

  methods: {
    getMgtdata() {
      let obj = {};
      if (this.item.new_name == "") {
        alert("名字不能空");
      } else if (this.item.new_phone == "") {
        alert("手机号不能空");
      } else if (this.item.new_nub == "") {
        alert("账号不能空");
      } else if (this.item.new_pas == "") {
        alert("密码不能空");
      } else {
        obj.staff_name = this.item.new_name; /* 新建名字 */
        obj.staff_phone = this.item.new_phone; /* 新建电话 */
        obj.staff_nub = this.item.new_nub; /* 新建账号 */
        obj.staff_pas = this.item.new_pas; /* 新建密码 */
        console.log(obj);
        this.list.push(obj);

        axios.post("http://127.0.0.1:7001/postemployees", {
          new_name: this.item.new_name /* 姓名 */,
          new_phone: this.item.new_phone /* 电话 */,
          new_nub: this.item.new_nub /* 账号 */,
          new_pas: this.item.new_pas /* 密码 */
        });

        this.item.new_pas = "";
        this.item.new_name = "";
        this.item.new_phone = "";
        this.item.new_nub = "";
      }
      // 否执行
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    close_btn() {
      this.drawer = false;
    },
    // 新建按钮关闭drawer
    close_details() {
      this.dra = false;
    },
    // 点击详情确认关闭
    details_btn(id) {
      this.dra = true;
      this.details_name = this.list[id].staff_name;
      this.details_phone = this.list[id].staff_phone;
      this.details_nub = this.list[id].staff_nub;
      this.details_pas = this.list[id].staff_pas;
    },
    // 点击详情打开抽屉
    handleSizeChange: function(size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    }
    // 分页
  }, 
  // 查找
  created() {
    axios.get("http://127.0.0.1:7001/getemployees", {}).then(res => {
      this.list = res.data;
      console.log(this.list);
    });
  }
};
</script>
<style scoped>
</style>
