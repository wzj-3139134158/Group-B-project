<template>
  <form action method="get" @submit.prevent="loginData">
    <div class="login">
      <img class="background" src="@/assets/Backgroundimage.png" alt/>
      <div class="box">
        <span class="zh">账号:</span>
        <input class="zhbox" type="text"  v-model="text"/>
        <span class="mm">密码:</span>
        <input
          class="mmbox"
          type="password"
          name
          id
          v-model="password"
        />
        <!-- <el-button class="btn" plain @click="open1">
          <span class="font">登录</span>
        </el-button>-->

        <img class="people" src="../assets/people.png" alt />
        <img class="Slogan" src="../assets/ShengBangShengHua.png" alt />
        <img class="slogans" src="../assets/slogan.png" alt />
        <input type="submit" value="登录" class="font"/>   <!-- style：鼠标到达按钮变成小手 -->
        <a href="http://www.html580.com/oauth/qq.html" style="font-size:12px">qq</a>
      </div>
    </div>
  </form>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      text: "",
      password: ""
    };
  },
  methods: {
    loginData() {
      // 账号
      axios
        .post("http://127.0.0.1:7001/login", {
          name: this.text,
          password: this.password
        })
        .then(res => {
          console.log(res.data);
          console.log(res.data);
          if (res.data == "登陆成功") {
            this.$router.push("/HomePage");
            console.log("123");
          } else {
            alert(res.data);
          }
        });
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.login {
  width: 100%;
  height: 100%;
}
.login .background {
  width: 100%;
  height: 100%;
}
.font {
  width: 85px;
  height: 35px;
  color: white;
  outline: none;
  border: none;
  border-radius: 25px;
  cursor:pointer;    /* 鼠标到达标称小手 */
  background-color: #409eff;
  position: absolute;
  top: 64%;
    left: 4%;
}
/* 登录按钮 */
.login .box {
  width: 42.2%;
  height: 47.6%;
  height:auto;       /*  高度自适应 */
  /* border:1px solid black; */
  position: absolute;
  top: 26.3%;
  left: 29%;
  background-color: white;
}

.zh {
  margin-left: 4.2%;
  margin-top: 10.1%;
  position: absolute;
  font-size: 1vw;
}
.zhbox {
  margin-left: 4.2%;
  position: absolute;
  margin-top: 14%;
  /* border: 1px solid white; */
  width: 32.9%;
  height: 8.93%;
  border: none;
  border-bottom: 1px solid #b3b3b3;
  outline: none;
  font-size: 112.5%;
}
.mm {
  margin-left: 4.1%;
  position: absolute;
  margin-top: 23.4%;
  font-size: 1vw;
}
.mmbox {
  margin-left: 4.2%;
  position: absolute;
  margin-top: 26.93%;
  /* border: 1px solid white; */
  width: 32.9%;
  height: 8.93%;
  border: none;
  border-bottom: 1px solid #b3b3b3;
  outline: none;
  font-size: 112.5%;
}
.btn {
  position: absolute;
  left: 4.2%;
  top: 66.785%;
  font-size: 100%;
  width: 10.7%;
  height: 8%;
  background-color: #f97a5a;
  color: white;
  border-radius: 25px;
  outline: none;
  border-color: transparent;
  box-shadow: none;
}
.btn .font {
  font-size: 16px;
  float: left;
  margin-left: 7px;
  margin-top: -3px;
}
.people {
  float: right;
  width: 58.167%;
  height: 93.066%;
  /* margin-right: -17.91%; */
}
.Slogan {
  float: right;
  position: absolute;
  right: 3.6%;
  top: 3.9%;
  width: 17.975%;
  height: 3.445%;
}
.slogans {
  margin-left: 39.195%;
  /* margin-top:53px; */
  float: left;
  width: 19.723%;
  height: 3.053%;
}
</style>