#### 首页
###### 接口功能1
> 增

###### 接口描述
> 添加首页的信息

###### HTTP请求方式
> post
###### URL
> ["http://127.0.0.1:7001/posthomepage"]("http://127.0.0.1:7001/posthomepage")

###### 支持格式
> json

###### 接口功能2
> 删除

###### 接口描述
> 删除首页的信息

###### HTTP请求方式
> delete
###### URL
> ["http://127.0.0.1:7001/deletehomepage"]("http://127.0.0.1:7001/deletehomepage")

###### 支持格式
> json

###### 接口功能3
> 修改

###### 接口描述
> 修改详情内的信息

###### HTTP请求方式
> put
###### URL
> ["http://127.0.0.1:7001/puthomepage"]("http://127.0.0.1:7001/puthomepage")

###### 支持格式
> json

###### 接口功能4
> 查找

###### 接口描述
> 查找首页内的信息

###### HTTP请求方式
> get
###### URL
> ["http://127.0.0.1:7001/gethomepage"]("http://127.0.0.1:7001/gethomepage")

###### 支持格式
> json

###### 方法
> post get delete put

###### 请求参数说明

名称  |类型         |必填   |说明
----------------------|----------------------   
page_name  |VARCHAR(20)  | 是 |  姓名
phone|string | 是 | 手机号
category |string  | 是 | 信息类别
teachers|VARCHAR(20)  | 是 | 负责老师
the_evevt |string  | 是 | 事件
time | VARCHAR(20) | 是 | 时间
parents_name | VARCHAR(20) | 是 | 家长姓名
parents_phone | VARCHAR(20) | 是 | 家长电话