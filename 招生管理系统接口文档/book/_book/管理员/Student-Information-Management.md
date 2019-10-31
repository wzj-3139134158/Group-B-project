##### 1. 学员信息管理
###### 接口功能1
> 新增信息

###### 接口描述
> 实现学员信息新增

###### HTTP请求方式
> post
###### URL
> ["http://127.0.0.1:7001/poststudents"]("http://127.0.0.1:7001/poststudents")

###### 支持格式
> json


###### 接口功能2
> 删除

###### 接口描述
> 可以删除学员信息

###### HTTP请求方式
> delect
###### URL
> ['http://127.0.0.1:7001/deletestudents'+id]('http://127.0.0.1:7001/deletestudents+id)

###### 接口功能3
> 查找

###### 接口描述
> 可以查找和筛选学员信息
###### HTTP请求方式
> get
###### URL
> ["http://127.0.0.1:7001/getstudentlist"]("http://127.0.0.1:7001/getstudentlist")

###### 接口功能3
> 修改

###### 接口描述
> 可以修改学员信息
###### HTTP请求方式
> put
###### URL
> ["http://127.0.0.1:7001/putstudentlist"]("http://127.0.0.1:7001/putstudentlist")


###### 方法
> post get delete put
###### 请求参数说明

名称  |类型         |必填   |说明
----------------------|----------------------   
student_name  |VARCHAR(20)  | 是 |  姓名
school|VARCHAR(20)  | 是 | 学校
phone|string | 是 | 手机号
category |string  | 是 | 信息类别
parent_phone|VARCHAR(20)  | 是 | 家长姓名
parent_name |string  | 是 | 家长电话