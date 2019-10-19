<template>
    <div class="home">
<!--        <topBar :title="title"/>-->

        <div class='main'>
            <!-- 四大导航 -->
<!--            <div class="weui-grids">-->
<!--                <div class="weui-grid animated fadeIn" v-for="{{routers}}" :key="index">-->
<!--                    <router-link url="{{item.url}}">-->
<!--                        <div class="weui-grid-icon">-->
<!--                            <image src="{{item.icon}}" mode="scaleToFill" />-->
<!--                        </div>-->
<!--                        <text class="weui-grid-label">{{item.name}}</text>-->
<!--                    </router-link>-->
<!--                </div>-->
<!--            </div>-->


            <!-- 广告图片 -->
<!--            <div class='index-ad animated fadeIn' bindtap="goBuyCar">-->
<!--                <image src='/images/img/index_ad.png'></image>-->
<!--                <button class='btn-goVip'>开通会员</button>-->
<!--            </div>-->


            <!-- 日期 -->
            <div class='date-box'>
                    <div v-for="(item,index) in dateArr" :key="index"  @click='dateActive'>
                        <div class='date-week'>{{item.week}}</div>
                        <div class='date-num'>{{item.rq}}</div>
                    </div>
<!--                <div class="date-item  {{ dateNum == index  ? 'date-active' : '' }}"   v-for="{{dateArr}}"-->
<!--                      :key="index" data-dateId='{{index}}' data-date='{{item.d}}' catchtap='dateActive'>-->
<!--                    <div class='date-week'>{{item.week}}</div>-->
<!--                    <div class='date-num'>{{item.rq}}</div>-->
<!--                </div>-->
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
    import { home } from "@/assets/js/api"
    export default {
        name: "home",
        data() {
            return {
                title: "首页",
                dateArr:[],
            }
        },
        methods:{
          homeInfo(){
              home().then(res=>{
                  console.log(res);
                  // console.log(res.week);
                  // this.dateArr = res.week;

              });
          },
            dateActive(e){
              console.log('s');
            },
        },
        created() {
            this.homeInfo();
        }
    };
</script>
