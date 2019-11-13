<template>
  <div class="grouping">
    <div class="grouping_index">
      <img
        src="../assets/shengbang.png"
        alt
        style="width: 80%;height: 3.12%;margin-top:18%;margin-left:9%;"
      />
      <!-- logo -->
      <router-link to="/staff">
        <!-- <a class="staff" href>{{Staff}}</a> -->
        <span class="grouping_staff" style="border-top:1px solid white;">员工管理</span>
      </router-link>
      <!-- 员工管理 -->
      <router-link to="/grouping">
        <span class="grouping_span" style="background-color: #007eff;">分组管理</span>
      </router-link>
      <!-- 分组管理 -->
      <router-link to="/Management">
        <!-- <a class="student" href>{{Student}}</a> -->
        <span class="grouping_student">学员管理信息</span>
      </router-link>
      <!-- 学员信息管理 -->
    </div>
    <div class="Content_div">
      <div class="Content_title">
        <span style="font-size: 25px;color:#323234; line-height:105px;">招生管理系统</span>
      </div>
      <!-- 学员分组管理标题 -->
      <table class="Content_table">
          <thead @click="button" style id="Content_left">
            <button class="Content_btn" v-for="item in list">
              <th class="th_staff">{{item.staff_Name}}</th>
              <th class="th_number">{{item.staff_Number}}</th>
            </button>
            <!-- 每条列表按钮 -->
          </thead>
          <!-- 学员分组左边盒子内容 -->
        <!-- 滚动条  -->
        <tbody class="Content_right">
          <tr class="Content_Title"> 
            <th class="title_name">姓名</th>
            <th class="title_phone">手机号</th>
            <th class="title_category">信息类别</th>
            <button class="title_btn">操作</button>
          </tr>
          <div class="ScrollBar">
             <tr class="Content_student" v-for="student in list">
            <td class="form_name">杨磊</td>
            <td class="form_phone">15541490131</td>
            <td class="form_category"></td>
            <img class="form_smallbell" src="../assets/SmallBell.png" alt />
            <img class="form_build" src="../assets/添加.png" alt />
            <!-- <el-radio-group v-model="direction">
            </el-radio-group>
            <el-button id="form_details" @click="drawer = true" type="primary">详情</el-button>
<el-drawer
              title="我是标题"
              :visible.sync="drawer"
              :direction="direction"
              :before-close="handleClose"
            >
              <span>我来啦!</span>
          
            </el-drawer> -->
            <button class="form_btn">详情</button>
          </tr>
          <!-- Content_student  tr盒子   -->
          </div>
          <!-- 滚动条盒子 -->
        </tbody>
        <!-- 学员分组右边盒子内容 -->
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "grouping",
  data() {
    return {
      drawer: false,
      direction: "rtl",
      list: [
        { staff_Name: "杨磊", staff_Number: "人数" },
        { staff_Name: "杨磊", staff_Number: "人数" },
        { staff_Name: "杨磊", staff_Number: "人数" },
        { staff_Name: "杨磊", staff_Number: "人数" },
        { staff_Name: "杨磊", staff_Number: "人数" },
        { staff_Name: "杨磊", staff_Number: "人数" },
        { staff_Name: "杨磊", staff_Number: "人数" },
        { staff_Name: "杨磊", staff_Number: "人数" },
        { staff_Name: "杨磊", staff_Number: "人数" },
        { staff_Name: "杨磊", staff_Number: "人数" },
        { staff_Name: "杨磊", staff_Number: "人数" },
        { staff_Name: "杨磊", staff_Number: "人数" },
        { staff_Name: "杨磊", staff_Number: "人数" },
        { staff_Name: "杨磊", staff_Number: "人数" },
        { staff_Name: "杨磊", staff_Number: "人数" },
        { staff_Name: "杨磊", staff_Number: "人数" }
      ]
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>
