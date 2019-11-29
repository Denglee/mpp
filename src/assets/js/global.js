/** 字体 */
fnResize();
 window.onresize = function () {
   fnResize()
 };
 function fnResize() {
   let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
   if (deviceWidth >= 750) {
     deviceWidth = 750;
   }
   if (deviceWidth <= 320) {
     deviceWidth = 320
   }
   document.documentElement.style.fontSize = (deviceWidth / 7.5*2) + 'px';
   console.log( document.documentElement.style.fontSize);
 }


// 获取今天的日期
function getToday() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    // 如果需要时分秒
    // var h = now.getHours();
    // var m = now.getMinutes();
    // var s = now.getSeconds();
    let formatDate = year + '-' + month + '-' + day;
    return formatDate;
}

const cityId = '2';

export default {
    cityId,
    getToday:getToday(),
}

/** session 存储*/
/*/storage 存储
sessionStorage.setItem('currentIndex', 0)
// 获取
index=sessionStorage.getItem('currentIndex');
// 删除一个
sessionStorage.removeItem("currentIndex");
// 删除全部
sessionStorage.clear();*/

