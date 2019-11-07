<template>
    <div class="home">
        <!--        <topBar :title="title"/>-->

        <div class='main'>

            <!--轮播图-->
            <mt-swipe @change="handleChange"  style="height: 100px;" >
                <mt-swipe-item>
                    <img :src="bannerArrs[0].banner" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img :src="bannerArrs[1].banner" alt="">
                </mt-swipe-item>
            </mt-swipe>


            <!-- 四大导航 -->
            <div class="home-nav">
                <div class="home-nav-item" v-for="(item,index) in routers" :key="index">
                    <div class="home-nav-icon">
                        <img :src="item.img" alt="">
                    </div>
                    <p class="home-nav-content">{{item.name}}</p>
                </div>
            </div>


             <!--广告图片 -->
            <div class='index-ad animated fadeIn'>
                <router-link to="cardMain">
                    <img src='../assets/img/index_ad.png'>
                    <button class='btn-goVip'>开通会员</button>
                </router-link>
            </div>

            <!-- 日期 -->
            <div class='date-box'>

                <div class="date-item" :class=" dateNum == index  ? 'date-active' : '' "   v-for="(item,index) in dateArr"
                     :key="index" :data-dateId='index' :data-date='item.d' @click='dateActive'>
                    <div class='date-week'>{{item.week}}</div>
                    <div class='date-num'>{{item.rq}}</div>
                </div>
            </div>

            <!-- 推荐课程 -->
            <!-- <div class='suggest-lesson'>
                 <div class='suggest-header'>
                     <div class='suggest-header-right'>推荐课程</div>
                     <div class='suggest-header-left'>
                         <button size='mini' bindtap="goGroupCourses">更多课程</button>
                     </div>
                 </div>
                 <div class='suggest-main'>
                     <div v-if='{{lessonArr == ""}}' class="no-data animated fadeInLeft">暂无推荐</div>
                     <block v-else>
                         <div  v-for="{{lessonArr}}" :key="index" class='suggest-item animated fadeIn'  bindtap='goCourseDetails' data-courseId='{{item.pid}}'>
                             <image src='{{item.courseimage}}' lazy-load="true" mode="{{imgMode}}"></image>
                             <div class='lesson-name ellipsis'>{{item.course_name}}</div>
                             &lt;!&ndash; <div class='lesson-classify ellipsis'>{{item.week}}</div> &ndash;&gt;
                         </div>
                     </block>
                 </div>
             </div>-->

            <!--底部导航-->
            <!--            <bottomBar/>-->

        </div>
    </div>
</template>

<script>
    import {home,mockIndex} from "@/assets/js/api"


    export default {
        name: "home",
        data() {
            return {
                title: "首页",
                bannerArrs:[
                    {
                        banner:require('../assets/icon/index_course.png'),
                        id:'1',
                        name:'mpp',
                    },
                    {
                        banner:require('../assets/icon/index_course.png'),
                        id:'2',
                        name:'zouderenyuoshao',
                    },
                ],

                // 日期
                dateNum: '',
                dataDate: '',   //选中的日期
                dateArr: [
                    {
                        d: "2019-11-07",
                        rq: "11-07",
                        type: 1,
                        week: "周四",
                    },
                ],
                // 四大导航
                routers: [
                    {
                        name: '培训',
                        url: '',
                        img: require('../assets/icon/index_course.png'),
                        icon: 'icon-hetong',
                        code: '1'
                    },
                    {
                        name: '私教',
                        url: '',
                        img: require('../assets/icon/index_coach.png'),
                        icon: 'icon-shangcheng3',
                        code: '2'
                    },
                    {
                        name: '训练营',
                        img: require('../assets/icon/index_training.png'),
                        url: '',
                        icon: 'icon-shangcheng3',
                        code: '2'
                    },
                    {
                        name: '动感单车',
                        url: '',
                        img: require('../assets/icon/index_bicycle.png'),
                        icon: 'icon-shangcheng3',
                        code: '3'
                    },
                ]
            }
        },
        methods: {
            homeInfo() {
                home().then(res => {
                    console.log(res);
                    // console.log(res.week);
                    // this.dateArr = res.week;
                });
                mockIndex().then(res => {
                    console.log(res.dateArr);
                    // console.log(res.week);
                    // this.dateArr = res.week;
                })
            },
            dateActive(e) {
                console.log('s');
            },

            handleChange(e){

            },
        },
        created() {
            this.homeInfo();
        }
    };
</script>
<style lang="scss">
    .home {

    }
    /*banner*/
    .mint-swipe {
        height: 200px;
    }
    .mt-swipe-item:nth-child(1){
        background-color:red;
    }
    .mt-swipe-item:nth-child(2){
        background-color:blue;
    }
    .mt-swipe-item:nth-child(3){
        background-color:lightblue;
    }

    /*四大导航 */
    .home-nav {
        display: flex;
    }

    .home-nav-item {
        flex: 1;
        box-sizing: border-box;
        padding: .3rem 0;
    }

    .home-nav-icon {
        flex: 1;
        box-sizing: border-box;
        padding: .2rem 0;
        width: .8rem;
        height: .8rem;
        margin: 0 auto;
    }

    .home-nav-icon:active {
        background-color: #ECECEC;
    }

    .home-nav-content {
        flex: 10;
    }
</style>