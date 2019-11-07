// import Mock from 'mockjs'
//
// // import navlist from './navlist'
// // import login from './login'
// import home from './home'
// // import echarts from './echarts'
// // import table from './table'
// // import groupList from './groupList'
// // import getToken from './getToken'
//
// // let data = [].concat(navlist, login, echarts, table, groupList, getToken)
// // let data = [].concat(home)
// //
// // data.forEach(function(res){
// //     Mock.mock(res.path, res.data)
// // })
//
//
// export default Mock

// 将所有的mock文件引入
require('@/mock/home')
// require('@/mock/wxmock')

// 在这里可以做一些通用的配置
const Mock = require("mockjs")

// 设置所有ajax请求的超时时间，模拟网络传输耗时
Mock.setup({
    timeout: 0-300
})
// ————————————————
// 版权声明：本文为CSDN博主「dadiyang」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/dadiyang/article/details/79686637


