<template>
  <div class="Management">
    <div class="nav">
      <!-- <img class="logo" :src="url" alt /> -->
      <div class="ShengBang_smallbox">
        <img src="../assets/shengbang.png" alt style="width: 45%;height: 55%;margin-top:8%" />
      </div>
      <router-link to="/HomePage" class="HomePage">
        <div class="HOmePage_Btn">
          <span class="home_span">首页</span>
        </div>
      </router-link>
      <!-- 首页 -->
      <router-link to="/staff">
        <!-- <a class="staff" href>{{Staff}}</a> -->
        <span class="staff">员工管理</span>
      </router-link>
      <router-link to="/Management">
        <!-- <a class="student" href>{{Student}}</a> -->
        <span class="student">学员管理信息</span>
      </router-link>
    </div>
    <!-- 左侧边栏  -->
    <div class="content">
      <div class="header">
        <!-- <button class="establish">{{Establish}}</button> -->
        <el-radio-group v-model="direction" style="display:none;">
          <!-- 隐藏左侧打开的按钮 -->
          、
          <el-radio label="rtl">从右往左开</el-radio>
        </el-radio-group>
        <!-- 抽屉左侧打开 -->

        <input
          type="file"
          @change="importFile(this)"
          id="imFile"
          style="display: none"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />

        <a id="downlink"></a>

        <!-- <el-button class="button" @click="uploadFile()">文档导入</el-button>
        第二版本无需
        <el-button class="button" @click="downloadFile(list)">文档导出</el-button>-->

        <el-button
          @click="drawer = true"
          type="primary"
          style="border-radius: 25px;"
          class="establish"
        >新建</el-button>
        <!-- 新建按钮 -->

        <input class="screen" placeholder="筛选" v-model="search" />
        <!-- 筛选 -->
        <!-- 学员 -->
        <button  @click="studentgrouping"  :id="studentgroupinga"  class="studentgrouping" >学员分组</button>
        <button  @click="guanbi" :id="studentgrouping"   class="guanbi" >关闭</button> 
        <router-link to="/Studentgrouping" :id="studentgrouping" class="Confirm"  > 确认 </router-link>

        <el-drawer 
        size="699px;
        height:100%;
        overflow-y:scroll;" 
        :visible.sync="drawer" 
        :direction="direction">
          <h1 class="build" style="position: absolute;top: 17px;left: 35px;">新建</h1>
          <form @submit.prevent="insert()">
            <span class="build_name">姓名</span>
            <br />
            <!-- 新建姓名及文本框 -->
            <input type="text" class="build_name_frame" v-model="item.build_name" maxlength="4"/>
            <br />
            <!-- 新建姓名及文本框 -->
            <span class="build_school">学校</span>
            <br />
            <input type="text" class="build_school_frame" v-model="item.build_school"/>
            <br />
            <!-- 新建学校及文本框 -->
            <span class="build_phone">手机号</span>
            <br />
            <input type="tel" class="build_phone_frame" v-model="item.build_phone" maxlength="11"/>
            <!-- 新建手机号及文本框 -->

            <span class="build_information">信息类别</span>
            <select class="build_information_frame" v-model="item.category">
              <option disabled>未选择</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
            <!-- 新建信息类别及下拉框 -->

            <span class="build_parent_name">家长姓名</span>
            <br />
            <input
              type="text"
              class="build_parent_name_frame"
              v-model="item.build_parent_name"
              maxlength="4"
            />
            <!-- 新建家长姓名及文本框 -->

            <br />
            <span class="build_parent_phone">家长电话</span>
            <br />
            <input
              type="tel"
              class="build_parent_phone_frame"
              v-model="item.build_parent_phone"
              maxlength="11"
            />

            <!-- <h1 class="build_remarks">备注</h1>
              <el-date-picker  type="datetime" placeholder="选择日期时间"></el-date-picker>
            <input class="build_frame_build1" type="text">
            <div class="block2">
              <el-date-picker  type="datetime" placeholder="选择日期时间"></el-date-picker>
            </div>
            <input class="build_frame_build2" type="text">-->

            <input type="submit" class="build_sure" value="确定" @click="close_build" />
          </form>
        </el-drawer>
        <!--  ---以上是新建--- -->

        <el-drawer size="699px;
        height:100%;
        overflow-y:scroll;" :visible.sync="dar" :direction="direction">
          <form @submit.prevent="modify()">
            <h1 class="build" style="position: absolute;top: 17px;left: 35px;">详情</h1>

            <span class="build_name">姓名</span><br />
            <input type="text" class="build_name_frame" v-model="details_name" maxlength="4"/><br />

            <span class="build_school">学校</span><br />
            <input type="text" class="build_school_frame" v-model="details_school"/><br />

            <span class="build_phone">手机号</span><br />
            <input type="text" class="build_phone_frame" v-model="details_phone" maxlength="11"/>

            <span class="build_information">信息类别</span>
            <select class="build_information_frame" v-model="details_category">
              <option disabled>未选择</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
            <span class="build_parent_name">家长姓名</span><br />
            <input type="text" class="build_parent_name_frame" v-model="details_parent_name" maxlength="4"/>
            <br />
            <span class="build_parent_phone">家长电话</span>
            <br />
            <input type="text" class="build_parent_phone_frame" v-model="details_parent_phone" maxlength="11"/>

            <input type="submit" class="build_sure" value="确定"/>
          </form>
        </el-drawer>

        <!--   ---以上是详情---- -->
      </div>
      <div class="type">
        <span class="name">名字</span>
        <!-- 姓名 -->
        <span class="school">学校</span>
        <!--  学校 -->
        <span class="phone">手机号</span>
        <!-- 手机号 -->
        <span class="category">信息类别</span>
        <!-- 信息类别 -->
        <span class="parent_name">家长姓名</span>
        <!-- 家长姓名 -->

        <span class="parent_phone">家长手机号</span>
        <!-- 家长手机号 -->
        <!-- 全选 -->
        <label :id="studentgrouping"  class="Allelection">全选</label>
        <input type="checkbox" :checked="chooseAll"  class="ALLelection" :id="studentgrouping" @click="chooseAllCart"/>
      </div>
      <!-- 内容 type -->
      <div id="list_box">
        <ul class="list_ul" v-for="(item,id) in items" :key="item.id">
          <li><input class="Singleelection" :id="studentgrouping" type="checkbox" :checked="item.choose" @click="chooseOne(id)"/></li>
          <li class="list_id">{{item.id}}</li>
          <!-- id 样式为不显示 -->
          <li class="list_student_name">{{item.student_name}}</li>
          <!-- 姓名 -->
          <li class="list_school">{{item.school}}</li>
          <!-- 学校 -->

          <li class="list_phone">{{item.phone}}</li>
          <!-- 电话 -->
          <span class="block-col-2" prop="selected">{{item.category}}</span>
          <!-- 类别 -->
          <li class="list_parent_name">{{item.parent_name}}</li>
          <!-- 家长姓名 -->
          <li class="list_parent_phone">{{item.parent_phone}}</li>
          <!-- 家长电话 -->

            <img src="../assets/delete.png" alt="" class="del_list" @click.prevent="del(item.id)"  v-bind:id="none" >
          <!-- 删除图标  9.20日晚  删除   就上面这一行 -->

          <button class="list_li_btn" v-bind:id="none" @click="details_btn(id)">详情</button>
          <!-- 详情按钮 -->
          <span class="list_Build_Remarksbtn" v-bind:id="none"  @click="Build_Remarksbtn(id)">
            <img :src="url" @click="showModal=true" />
            <!-- 添加备注 -->
          </span>
          <span class="SmallBell">
          <img src="../assets/SmallBell.png" alt="">
          </span>
          <li class="list_remarksp">
            <div class="mask" v-if="showModal" @click="showModal=false"></div>
            <div class="pop" v-if="showModal">
              <form @submit.prevent="remarksp(id)">
                <span class="Remarks">备注</span>
                <div class="block" style="position: absolute;top: 43px;left: 20px;">
                <span v-for="(itemb,id) in listb"></span>
                <span style="display:none;">{{itemb.remarks_id}}</span>
                  <span class="demonstration">时间:</span>
                  <!-- 时间戳 -->
                  <el-date-picker
                    v-model="itemb.remarks_time"
                    type="datetime"
                    placeholder="选择日期时间"
                  >{{value1}}</el-date-picker>
                  <span class="mation">信息类别:</span>
                  <select
                    style="text-align:center;text-align-last:center;"
                    class="pop_xxlx"
                    v-model="itemb.remarks_category"
                  >
                    <option disabled>未选择</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                  </select>
                  <span class="event">事件:</span>
                  <input type="text" class="event_input" v-model="itemb.remarks_event" />
                  <!-- 事件文本框 -->
                  <input type="submit" value="保存" class="Preservation" />
                  <!-- 事件保存按钮 -->
                </div>
              </form>
              <!-- 时间form -->
              <div class="maska" v-if="deletes" @click="deletes=false"></div>
              <div class="popa" v-if="deletes">
                <button @click="deletes=false" class="btna">取消</button>
                <button @click="deletes=false" class="btnb">确认</button>
              </div>
              <!-- popa -->
            </div>
            <!-- pop -->
          </li>
          <!-- list_li8 -->
        </ul>
        <!-- list_ul -->
      </div>
      <!-- list_box -->

      <el-pagination
        id="pagination"
        before-close="close"
        background
        layout="prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
    <!-- content -->
    <router-link to="/fenye" class="return_login">退出</router-link>
  </div>
</template>

<script>
import axios from "axios";

var XLSX = require("xlsx");

export default {
  data() {
    return {
      // 全选
      none:'',
      studentgroupinga:'',
      Confirm:'',
      llChecked: true,
      allSelectedGoods: [],
      chooseAll:false,

      // 新建
      item: {
        id: this.id,
        build_name: "" /* 新建姓名 */,
        build_school: "" /* 新建学校   */,
        build_phone: "" /* 新建电话号 */,
        build_parent_name: "" /* 新建家长姓名 */,
        build_parent_phone: "" /* 新建家长手机号 */,
        category: "", /* 信息类别 */
        choose:false,       /* 新建密码 */
      },
      list: [],

      itemb: {
         remarks_id: '',
        remarks_time: "" /* 添加备注时间 */,
        remarks_category: "" /* 添加备注类别 */,
        remarks_event: "" /* 添加备注事件 */
      },
      listb: [],

      details_id:'',
      details_name:"",
      details_school: "",
      details_phone: "",
      details_category: "",
      details_parent_name: "",
      details_parent_phone: "",
      

      search: "" /*  筛选 */,

      dialogVisible: false, //删除

      url: require("../assets/Addto.png"),
      details: "详情",
      showModal: false,
      deletes: false,
      close: "关闭",
      drawer: false /* 新建 */,
      dar: false /* 详情 */,
      direction: "rtl",
      showModall: false,

      fullscreenLoading: false, // 加载中

      imFile: "", // 导入文件el

      outFile: "", // 导出文件el

      errorDialog: false, // 错误信息弹窗

      errorMsg: "", // 错误信息内容

      // excelData: [  // 测试数据

      //   {

      //     // name: '李李', school: '山海关', phone: '15733532162', selected: 'B', parent_name: '李明',parent_phone: '186********'

      //   },
      // ]
      //  时间戳
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      value3: ""
    };
  },
    // 查找
  created() {
    axios.get("http://127.0.0.1:7001/getstudentlist", {}).then(res => {
      this.list = res.data;
      console.log(this.list);
    });
    // 查 学员管理信息数据
    axios.get("http://127.0.0.1:7001/getremarks", {}).then(res => {
      this.itemb=res.data;
      console.log(res.data);
    });
    // 查  备注时间、类别、事件
  },
  // mounted() {
  //   this.imFile = document.getElementById("imFile");

  //   this.outFile = document.getElementById("downlink");
  // },
  inject: ["reload"],
  methods: {
          // 关闭学员分组
        guanbi(){
          this.reload()
        },

      // 学员分组

        studentgrouping(){
            this.none = "none"
            this.studentgrouping = "studentgrouping"
            // this.reload();
        },
    chooseAllCart(id) {
      // console.log(this.list[id])
//点击以后，给全选按钮修改状态，布尔值取反
      this.chooseAll = !this.chooseAll;
//给列表中的每一项同步状态
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].choose = this.chooseAll;
        if(this.list[i].choose = this.chooseAll){
          console.log(this.list[i])
        }else{
          console.log("未选中")
        }
      }
  },

                chooseOne(id) {

  
  //给被点击的元素修改状态，布尔值取反即可
      if(!this.list[id].choose){
        console.log(this.list[id])
      }else{
        console.log("未选中")
      }
      this.list[id].choose = !this.list[id].choose;
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].choose == false) {
          this.chooseAll = false;
          break;
        }
      }

      if (i == this.list.length) {
        this.chooseAll = true;
      }
 },

    // 添加
    insert() {
      let obj = {};
      if (this.item.build_name == "") {
        alert("名字不能空");
      } else if (this.item.build_school == "") {
        alert("手机号不能空");
      } else if(this.item.category== ""){
        alert("类别不能为空")
      }else if (this.item.build_phone == "") {
        alert("手机号不能空");
      } else if (this.item.build_parent_name == "") {
        alert("家长姓名不能空");
      } else if (this.item.build_parent_phone == "") {
        alert("家长手机号不能空");
      } else {
        obj.student_name = this.item.build_name; /* 新建名字 */
        obj.school = this.item.build_school; /* 新建学校 */
        obj.phone = this.item.build_phone; /* 新建学员电话 */
        obj.parent_name = this.item.build_parent_name; /* 新建家长姓名 */
        obj.parent_phone = this.item.build_parent_phone; /* 新建家长电话 */
        obj.category = this.item.category; /* 新建信息类别 */
        this.list.push(obj);

        axios
          .post("http://127.0.0.1:7001/poststudents", {
            /* 添加到数据库 */
            student_name: this.item
              .build_name /* 前者:后台方法后者 后者: 前端数据 */,
            school: this.item.build_school,
            phone: this.item.build_phone,
            category : this.item.category,
            parent_name: this.item.build_parent_name,
            parent_phone: this.item.build_parent_phone,
            id: this.item.id
          })
          .then(Datas => {
            // location.reload(false)       /* 全局刷新 */
          });
        this.item.build_name = " ";
        this.item.build_school = " ";
        this.item.build_phone = " ";
        this.item.build_parent_name = " ";
        this.item.build_parent_phone = " ";
        this.item.category = " ";
      }
      // 判断
    },
    remarksp(id) {
      axios.post("http://127.0.0.1:7001/postremarks", {
        remarks_time: this.itemb.remarks_time,
        remarks_category: this.itemb.remarks_category,
        remarks_event: this.itemb.remarks_event
      });
      this.showModal = false;
      //  点击保存关闭 + 增
    },
    // 添加时间类别事件
    Build_Remarksbtn(id){
      this.itemb.remarks_time= this.itemb[id].remarks_time,
        this.itemb.remarks_category=this.itemb[id].remarks_category,
        this.itemb.remarks_event=this.itemb[id].remarks_event
    },
    // 删除
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          axios
            .delete("http://127.0.0.1:7001/deletestudents/" + id, {})
            .then(res => {
              (this.dialogVisible = false), console.log(res.data);
              this.list = res.data;

              this.reload(); // 调用app方法  刷新网页

              // location.reload(false)  // 网页刷新

              // $("#list_box").load(location.href);    /* 利用id为list_box作为局部刷新 */
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 备注事件

    close_build() {
      this.drawer = false;
    },
    // 点击确认事件 关闭drawer
    details_btn(id) {
      this.dar = true;
      this.details_name = this.list[id].student_name;
      this.details_school = this.list[id].school;
      this.details_phone = this.list[id].phone;
      this.details_category = this.list[id].category;
      this.details_parent_name = this.list[id].parent_name;
      this.details_parent_phone = this.list[id].parent_phone;
      // 点击根据id获取数据然后渗入详情
      this.details_id = this.list[id].id
    },
    // 点击打开详情 抽屉
    // 详情按钮关闭drawer
    
    modify() {
      axios
      .put("http://127.0.0.1:7001/putstudentlist/" + this.details_id,{
        student_name : this.details_name,
        school : this.details_school,
        phone : this.details_phone,
        category : this.details_category,
        parent_name : this.details_parent_name,
        parent_phone : this.details_parent_phone
      })
      .then(res => {
        this.dar = false;
        console.log(this.details_id)
         this.reload(); // 调用app方法  刷新网页
        })
      // 点击执行关闭详情抽屉
    },
    //////// 修改


    uploadFile: function() {
      // 点击导入按钮

      this.imFile.click();
    },

    downloadFile: function(rs) {
      // 点击导出按钮

      let data = [{}];

      for (let k in rs[0]) {
        data[0][k] = k;
      }

      data = data.concat(rs);

      this.downloadExl(data, "菜单");
    },

    importFile: function() {
      // 导入excel

      this.fullscreenLoading = true;

      let obj = this.imFile;

      if (!obj.files) {
        this.fullscreenLoading = false;

        return;
      }

      var f = obj.files[0];

      var reader = new FileReader();

      let $t = this;

      reader.onload = function(e) {
        var data = e.target.result;

        if ($t.rABS) {
          $t.wb = XLSX.read(btoa(this.fixdata(data)), {
            // 手动转化

            type: "base64"
          });
        } else {
          $t.wb = XLSX.read(data, {
            type: "binary"
          });
        }

        let json = XLSX.utils.sheet_to_json($t.wb.Sheets[$t.wb.SheetNames[0]]);

        console.log(typeof json);

        $t.dealFile($t.analyzeData(json)); // analyzeData: 解析导入数据
      };

      if (this.rABS) {
        reader.readAsArrayBuffer(f);
      } else {
        reader.readAsBinaryString(f);
      }
    },

    downloadExl: function(json, downName, type) {
      // 导出到excel

      let keyMap = []; // 获取键

      for (let k in json[0]) {
        keyMap.push(k);
      }

      console.info("keyMap", keyMap, json);

      let tmpdata = []; // 用来保存转换好的json

      json
        .map((v, i) =>
          keyMap.map((k, j) =>
            Object.assign(
              {},
              {
                v: v[k],

                position:
                  (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) +
                  (i + 1)
              }
            )
          )
        )
        .reduce((prev, next) => prev.concat(next))
        .forEach(function(v) {
          tmpdata[v.position] = {
            v: v.v
          };
        });

      let outputPos = Object.keys(tmpdata); // 设置区域,比如表格从A1到D10

      let tmpWB = {
        SheetNames: ["mySheet"], // 保存的表标题

        Sheets: {
          mySheet: Object.assign(
            {},

            tmpdata, // 内容

            {
              "!ref": outputPos[0] + ":" + outputPos[outputPos.length - 1] // 设置填充区域
            }
          )
        }
      };

      let tmpDown = new Blob(
        [
          this.s2ab(
            XLSX.write(
              tmpWB,

              {
                bookType: type === undefined ? "xlsx" : type,
                bookSST: false,
                type: "binary"
              } // 这里的数据是用来定义导出的格式类型
            )
          )
        ],
        {
          type: ""
        }
      ); // 创建二进制对象写入转换好的字节流

      var href = URL.createObjectURL(tmpDown); // 创建对象超链接

      this.outFile.download = downName + ".xlsx"; // 下载名称

      this.outFile.href = href; // 绑定a标签

      this.outFile.click(); // 模拟点击实现下载

      setTimeout(function() {
        // 延时释放

        URL.revokeObjectURL(tmpDown); // 用URL.revokeObjectURL()来释放这个object URL
      }, 100);
    },

    analyzeData: function(data) {
      // 此处可以解析导入数据

      return data;
    },

    dealFile: function(data) {
      // 处理导入的数据

      console.log(data);

      this.imFile.value = "";

      this.fullscreenLoading = false;

      if (data.length <= 0) {
        this.errorDialog = true;

        this.errorMsg = "请导入正确信息";
      } else {
        this.list = data;
        // 直接复制给list 然后传值给item
      }
    },

    s2ab: function(s) {
      // 字符串转字符流

      var buf = new ArrayBuffer(s.length);

      var view = new Uint8Array(buf);

      for (var i = 0; i !== s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xff;
      }

      return buf;
    },

    getCharCol: function(n) {
      // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。

      let s = "";

      let m = 0;

      while (n > 0) {
        m = (n % 26) + 1;

        s = String.fromCharCode(m + 64) + s;

        n = (n - m) / 26;
      }

      return s;
    },

    fixdata: function(data) {
      // 文件流转BinaryString

      var o = "";

      var l = 0;

      var w = 10240;

      for (; l < data.byteLength / w; ++l) {
        o += String.fromCharCode.apply(
          null,
          new Uint8Array(data.slice(l * w, l * w + w))
        );
      }

      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));

      return o;
    }
  },
   computed: {
  items: function() {
   var _search = this.search;
   if (_search) {
    var reg = new RegExp(_search, 'ig')
    return this.list.filter(function(product) {
     return Object.keys(product).some(function(key) {
      return String(product[key]).toLowerCase().indexOf(_search) > -1
      return Object.keys(e).some(function(key) {
      return e[key].match(reg);
                    })
     })
    })
   }
 
   return this.list;
  }
 },
  async: false
};
</script>

<style scoped>
</style>