<template>
    <div class="homee">
        <div class="homes">
            <div class="ShengBang_smallbox">
                <img src="../assets/shengbang.png" alt style="width: 45%;height: 55%;margin-top:8%" />
            </div>
            <!-- 首页小盒子 -->
            <router-link to="/HomePage" class="HomePage">
                <div class="HOmePage">
                    <span class="Home_smallbox1">首页</span>
                </div>
            </router-link>      
            
            <!-- 盛邦小盒子 -->
            <router-link to="/staff">
                <div class="Staff_smallbox1">

                    <span class="background_staff">员工管理</span>
                </div>
            </router-link>
            <!-- 员工管理小盒子 -->
            <router-link to="/Management" class="Managements_smallbox1">
            <div class="Student_smallbox">
                <span class="Managements_smallbox1">学员管理信息</span>
            </div>
            </router-link>
        <!-- 学生管理信息 -->
        </div>
        <!-- 标题 -->
        <div class="COntent">
            <div class="COntent_dir">
                <span class="COntent_dir_tou">招生管理系统</span>
            </div>

            <!-- 内容目录 -->
            
            <!-- <table class="COntent_catalog"> -->
                <ul style=" display: block;" class="COntent_catalog">
                    <li class="COntent_catalog_name">姓名</li>
                    <li class="COntent_catalog_phone">手机号</li>
                    <li class="COntent_catalog_category">信息类别</li>
                    <li class="COntent_catalog_RpbTeacher">负责老师</li>
                    <li class="COntent_catalog_event">事件</li>
                    <li class="COntent_catalog_time">时间</li>
                </ul>
            <!-- </table> -->
            <!-- 内容管理 -->
            <tbody  class="COntent_repaira">
                <tr class="COntent_repair"  v-for="(item,id) in items" :key="item.student_name">
                    <td style="display:none;"><span>{{item.id}}</span></td>
                    <td class="HomePage_name"><span>{{item.student_name}}</span></td>
                    <td class="HomePage_phone"><span >{{item.phone}}</span></td>
                    <td class="HomePage_category"><span >{{item.category}}</span></td>
                    <td class="HomePage_RpbTeacher"><span>{{item.HomePage_RpbTeacher}}</span></td>
                    <td class="HomePage_event"><span >{{item.remarks_event}}</span></td>
                    <td class="HomePage_time"><span >{{item.remarks_time}}</span></td> 
                    <td class="HomePage_imgs">
                        <img src="../assets/delete.png" alt="" @click.prevent="delete_btn(item.id)">
                    </td>
                    <td class="HomePage_details">
                        <!-- 详情 -->
                        <el-button @click="details_btn(id)" type="primary"  id="details">
                        详情
                        </el-button>
                        <el-drawer  
                        size=" 700px ;
                        height:100%;
                        overflow-y:scroll;
                        "
                        id="drawer"
                        :visible.sync="drawer"
                        :direction="direction">
                        <!-- 修改 -->
                            <h2 style=" position: absolute;top: 17px;left: 35px;">修改</h2>
                        <div style=" height: 1080px;">
                        <form @submit.prevent="insert">
                            <label for="" class="home_name">姓名:</label><br>
                            <input type="text" class="home_input" v-model="home_name"><br>
                            <label for="" class="home_name">手机号:</label><br>
                            <input type="text" class="home_input" v-model="home_phone"><br>
                            <label for="" class="home_name">信息类别:</label><br>
                            <select class="home_select" v-model="category">
                                <option>未选择</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                            </select><br>
                            <label for="" class="home_name">家长姓名:</label><br>
                            <input type="text" class="home_input" v-model="home_parent_name"><br>
                            <label for="" class="home_name">家长电话:</label><br>
                            <input type="text" class="home_input" v-model="home_parent_phone"><br>
                            <label for="" class="home_name">负责老师:</label><br>
                            <input type="text" class="home_input" v-model="home_teacher"><br>
                            <label for="" class="home_name">事件:</label><br>
                            <input type="text" class="home_input"  v-model="home_event"><br>
                            <!-- 备注 -->
                            <h2 style="position:relative; top:20px; left: 35px">备注</h2>
                            <div class="remarks_returnvisit">
                                <span class="returnvisit_span">回访:</span>
                                    <el-date-picker
                                    v-model="value1"
                                    type="datetime"
                                    placeholder="选择日期时间"
                                    id="returnvisit_time">
                                    </el-date-picker>
                            </div>
                            <input type="text" class="returnvisit_input">
                            <div class="remarks_introduction">
                                <span class="introduction_span">入门:</span>
                                <el-date-picker
                                v-model="value2"
                                type="datetime"
                                placeholder="选择日期时间"
                                id="introduction_time1">
                                </el-date-picker>
                            </div>
                            <input type="text" class="introduction_input">
                            <!-- 提醒 -->
                            <h2 class="remind">提醒</h2> 
                            <el-date-picker
                                v-model="value3"
                                type="datetime"
                                placeholder="选择日期时间"
                                id="remind_time1">
                                </el-date-picker>
                            <input type="submit" class="Close" value="关闭" @click="Close">
                            <input type="submit" class="confirm" value="确定">

                        </form>
                        </div>
                        </el-drawer>
                    </td>
                </tr>
            </tbody>
        </div>
    <router-link to="/" class="return_login">退出</router-link>

    </div>
</template>
 
<script>
import axios from "axios";

export default {
    name: "homee",
    data (){
        return {

        home_name:"",
        home_phone:"",
        category:"",
        home_parent_name:"",
        home_parent_phone:"",
        home_teacher:"4",
        home_event:"4",

        item:[],
        items:[

{ id:'',HomePage_name:'',HomePage_phone:'',HomePage_category:'',HomePage_RpbTeacher:'',remarks_event:"",remarks_time:'',}
        
        ],
            

            // 详情
            drawer: false,
            direction: 'rtl',
            // 回访
            pickerOptions: {
            shortcuts: [{
                text: '今天',
                onClick(picker) {
                picker.$emit('pick', new Date());
                }
            }, ]
            },
            value1: '',
            value2: '',
            value3: '',
             dialogVisible: false, //删除
        }
    },
    methods:{


        details_btn(id){
            this.drawer = true;
            this.home_name = this.items[id].student_name;
            this.home_phone = this.items[id].phone;
            this.category= this.items[id].category;
            console.log(this.category)
            this.home_parent_name = this.items[id].parent_name;
            this.home_parent_phone = this.items[id].parent_phone;
            this.home_teacher = this.items[id].student_name;
            this.home_event = this.items[id].student_name;
        },

        // 关闭详情
        Close(){
               this.drawer= false

        },
           delete_btn(id) {
        console.log(id)
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          axios
            .delete("hhttp://127.0.0.1:7001/deletestudents/" + id, {})
            .then(res => {
         (this.dialogVisible = false), 
              console.log(res.data);
              this.list= res.data;

                this.reload()   // 调用app方法  刷新网页

              // location.reload(false)  // 网页刷新

            //   $("#list_box").load(location.href);    /* 利用id为list_box作为局部刷新 */
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    },
  // 查找
  created(){
        axios.get("http://127.0.0.1:7001/getstudentlist", {}).then(res => {
        this.items=res.data;
        console.log(res.data)
      });
    // axios.get("http://127.0.0.1:7001/getremarks", {}).then(res => {
    //   this.items=res.data;
    //   console.log(res.data);
    // });
    // 查  备注时间、类别、事件
  },
}   
</script>

<style scoped>

</style>

