import Mock from 'mockjs'

// import navlist from './navlist'
import login from './login'
// import echarts from './echarts'
// import table from './table'
// import groupList from './groupList'
// import getToken from './getToken'

// let data = [].concat(navlist, login, echarts, table, groupList, getToken)
let data = [].concat(login)

data.forEach(function(res){
    // console.log(res);
    Mock.mock(res.path, res.data)
})

export default Mock
