<template>
    <div class="home">

        <header class="header-box">
            <nav class="header-nav">
                <div class="header-top">首页</div>
            </nav>
        </header>

        <div class='main'>

            <!--轮播图-->
            <van-swipe :autoplay="6000" class="home-swiper">
                <van-swipe-item v-for="(image, index) in bannerArr" :key="index">
                    <van-image
                            :src="image"
                            fit="cover"/>
                </van-swipe-item>
            </van-swipe>

            <!-- 四大导航 -->
            <div class="home-nav">
                <router-link :to="item.url" class="home-nav-item" v-for="(item,index) in routers" :key="index">
                    <div class="home-nav-icon">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="home-nav-content">{{item.name}}</div>
                </router-link>
            </div>

            <!--广告图片 -->
            <div class='home-ad animated fadeIn'>
                <router-link to="cardMain">
                    <img src='../assets/img/index_ad.png'>
                    <van-button size="small" class='btn-goVip'>开通会员</van-button>
                </router-link>
            </div>

            <!-- 日期 -->
            <div class='date-box'>
                <div class="date-item" :class="dateIndex == index  ? 'date-active' : '' " @click='dateActive($event)'
                     v-for="(dataItem, index) in dateArr" :key="index"
                     :data-dateWeek="dataItem.d" :data-dateIndex="index">
                    <div class='date-week'>{{dataItem.rq}}</div>
                    <div class='date-num'>{{dataItem.week}}</div>
                </div>
            </div>

            <!-- 推荐课程 -->
            <div class='suggest-lesson'>
                <div class='layout-surround'>
                    <div>推荐课程</div>
                    <van-button class="btn-small" size="small" @click="goGroupCourses">更多课程</van-button>
                </div>
                <div class='suggest-main'>

                    <div v-if="lessonArr == '' "  class="noData animated fadeInLeft">暂无推荐</div>

                    <!--跳转详情页方式一：  点击事件  $router.push-->
                    <div v-else class='suggest-item animated fadeIn' @click='goGroupInfo($event)'
                         v-for="(lessonItem,index) in lessonArr"
                         :key="index"
                         :data-courseId="lessonItem.course_id"
                    >
                        <img :src="lessonItem.courseimage">
                        <div class='lesson-name ellipsis'>{{lessonItem.course_name}}</div>
                    </div>

                    <!--跳转详情页方式一： router-link +params/qpuery 跳转 -->
                    <!--  query 后的键值被放在url中，形式类似以get,明文可以。
                      params 的键值对在请求头header中可以查看到，不放在url中。
                      path 和 params 不能同时使用。如果要用 params，请使用 name-->
                    <!--<router-link :to="{name: 'groupInfo', params: { id: lessonItem.course_id }}"
                                 v-else class='suggest-item animated fadeIn'
                                 v-for="(lessonItem,index) in lessonArr"
                                 :key="index">
                        {{lessonItem.course_name}}
                    </router-link>-->
                </div>
            </div>

            <!--底部导航-->
            <bottomBar/>

        </div>
    </div>
</template>

<script>
    import {homeApi} from "@/assets/js/api"  //引入首页接口
    export default {
        name: "home",
        data() {
            return {
                visible:true,
                imgContain: 'contain',

                /*轮播图*/
                bannerArr: [],

                /*四大导航*/
                routers: [
                    {
                        name: '培训',
                        url: {name: 'drillMain',},
                        img: require('../assets/icon/index_course.png'),
                        icon: 'icon-hetong',
                        code: '1'
                    },
                    {
                        name: '私教',
                        url: {name: 'TrainerMain',},
                        img: require('../assets/icon/index_coach.png'),
                        icon: 'icon-shangcheng3',
                        code: '2'
                    },
                    {
                        name: '训练营',
                        img: require('../assets/icon/index_training.png'),
                        url: {name: 'campMain'},
                        icon: 'icon-shangcheng3',
                        code: '2'
                    },
                    {
                        name: '动感单车',
                        url: {name: 'bikeMain'},
                        img: require('../assets/icon/index_bicycle.png'),
                        icon: 'icon-shangcheng3',
                        code: '3'
                    },
                ],

                /*日期*/
                dateIndex: '',  //选中的index
                nowChooseDate: '',   //选中的日期
                dateArr: [],

                /*课程*/
                lessonArr: [],
            }
        },
        methods: {

            /*日期切换、选中 获取当前选中的日期 和index*/
            dateActive(e) {
                let chooseTime = e.currentTarget.dataset.dateweek,  //获取自定义的 日期
                    chooseIndex = e.currentTarget.dataset.dateindex; //获取自定义的index
                console.log(chooseTime, chooseIndex);
                this.nowChooseDate = chooseTime;
                this.dateIndex = chooseIndex;
                this.getHomeLesson(chooseTime);
            },

            /*跳转到课程详情*/
            goGroupCourses(e) {

            },

            /*进入课程详情 获取要传的参数: 天数和 课程id*/
            goGroupInfo(e) {
                let courseId = e.currentTarget.dataset.courseid;  //获取自定义的 课程id
                // chooseIndex = e.currentTarget.dataset.dateindex; //获取自定义的index
                console.log(courseId);
                this.$router.push({
                    path: `/groupInfo/${courseId}`,
                });
            },

            /*获取课程数据*/
            getHomeLesson(day){
                let cityId=this.GLOBAL.cityId;
                homeApi({
                    day: day,
                    city_id: cityId,
                }).then((res) => {
                    console.log(res.data);
                    this.lessonArr = res.data;
                })
            },

            /*获取首页数据*/
            homeInfo() {
                let cityId=this.GLOBAL.cityId;
                let getToday=this.GLOBAL.getToday;
                console.log(cityId,getToday);
                homeApi({
                    day: getToday,
                    city_id: cityId,
                }).then((res) => {
                    console.log(res);
                    this.dateArr = res.week;  //获取日期
                    this.bannerArr = res.image;
                })
            },
        },

        created() {
            this.homeInfo();
        }

    };
</script>
<style lang="scss">

</style>


<!--/*dateArr: [-->
<!--{-->
<!--d: "2019-11-11",-->
<!--rq: "11-11",-->
<!--type: 0,-->
<!--week: "周一",-->
<!--},-->
<!--{-->
<!--d: "2019-11-12",-->
<!--rq: "11-12",-->
<!--type: 0,-->
<!--week: "周二",-->
<!--},-->
<!--{-->
<!--d: "2019-11-13",-->
<!--rq: "11-13",-->
<!--type: 1,-->
<!--week: "周三",-->
<!--},-->
<!--{-->
<!--d: "2019-11-14",-->
<!--rq: "11-14",-->
<!--type: 0,-->
<!--week: "周四",-->
<!--},-->
<!--{-->
<!--d: "2019-11-15",-->
<!--rq: "11-15",-->
<!--type: 0,-->
<!--week: "周五",-->
<!--},-->
<!--{-->
<!--d: "2019-11-16",-->
<!--rq: "11-16",-->
<!--type: 0,-->
<!--week: "周六",-->
<!--},-->
<!--{-->
<!--d: "2019-11-17",-->
<!--rq: "11-17",-->
<!--type: 0,-->
<!--week: "周日",-->
<!--},-->
<!--],*/-->
<!--/*lessonArr: [-->
<!--{-->
<!--"pid": "2468",-->
<!--"course_id": "622",-->
<!--"course_name": "动感单车",-->
<!--"coach_id": "6781",-->
<!--"order_number": "2",-->
<!--"up_limit": "10",-->
<!--"price": "0.00",-->
<!--"price_member": "0.00",-->
<!--"st_time": "1562821200",-->
<!--"end_time": "1562827200",-->
<!--"del": "0",-->
<!--"city_id": "17",-->
<!--"suspend": "1",-->
<!--"userids": "0",-->
<!--"week": "4",-->
<!--"ts": "0",-->
<!--"ts_time": "0",-->
<!--"seat_num": "20",-->
<!--"seat_list": "4",-->
<!--"courseimage": "https://spt.zmtek.net/statics/Wx/images/shouye/zanwu.jpg"-->
<!--},-->
<!--{-->
<!--"pid": "2469",-->
<!--"course_id": "623",-->
<!--"course_name": "动感单车11",-->
<!--"coach_id": "6782",-->
<!--"order_number": "2",-->
<!--"up_limit": "10",-->
<!--"price": "0.00",-->
<!--"price_member": "0.00",-->
<!--"st_time": "1562821200",-->
<!--"end_time": "1562827200",-->
<!--"del": "0",-->
<!--"city_id": "17",-->
<!--"suspend": "1",-->
<!--"userids": "0",-->
<!--"week": "4",-->
<!--"ts": "0",-->
<!--"ts_time": "0",-->
<!--"seat_num": "20",-->
<!--"seat_list": "4",-->
<!--"courseimage": "https://spt.zmtek.net/statics/Wx/images/shouye/zanwu.jpg"-->
<!--}-->
<!--],*/-->