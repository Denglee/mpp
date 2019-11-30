<template>
    <div class="main">
        <topBar :title="title"  :routerName="routerName"/>
        <div class="tInfo-header tInfo-item">
            <van-row type="flex">
                <van-col span="10" class="tInfo-header-img">
                    <img :src="banner" :fit="imgFit" alt="" @click="getImg(banner,1)">
                </van-col>
                <van-col span="14" class="">
                    <div class="trainer-name">教练名字</div>
                    <div class="trainer-type">
                        <span>减脂</span>
                        <span>增肌</span>
                    </div>
                    <div class="trainer-valuate">
                        <van-rate
                                v-model="starVal"
                                :size="14"
                                color="#4e71fe"
                                void-icon="star"
                                void-color="#eee"
                        />
                    </div>
                </van-col>
            </van-row>

            <van-row type="flex" justify="space-between" class="tInfo-case-box" gutter="10">
                <van-col span="8" class="tInfo-case">
                    <img src="../../assets/img/coueseBanner.png" alt="">
                    <span>学院案例</span>
                </van-col>
                <van-col span="8" class="tInfo-case">
                    <img src="../../assets/img/coueseBanner.png" alt="">
                    <span>学院案例</span>
                </van-col>
                <van-col span="8" class="tInfo-case">
                    <img src="../../assets/img/coueseBanner.png" alt="">
                    <span>学院案例</span>
                </van-col>
            </van-row>

            <div>自我介绍</div>
        </div>

        <!--所授课程-->
        <div class="tInfo-item tInfo-lesson">
            <van-row type="flex" justify="space-between" gutter="10">
                <!--图片放大预览   课程封面-->
                <van-col span="8">
                    <van-image class="tInfo-lesson-img"
                            :fit="imgFit"
                            src="../../assets/img/coueseBanner.png"
                    />
                </van-col>

                <!--课程信息-->
                <van-col span="11" class="trainer-center" @click="goTrainerOrder($event)" :data-trainerId="1">
                    <div class="trainer-name">课程名字</div>
                    <div class="trainer-right">
                        ￥<span>240</span>/课时起
                    </div>
                </van-col>

                <!--价格-->
                <van-col span="5" @click="goTrainerInfo($event)"  :data-trainerId="1"  class="btn-tInfo-buy">
                    <button type="button">购买</button>
                </van-col>
            </van-row>

        </div>

        <!--学员评价-->
        <div class="tInfo-item">
            <van-row justify="space-between">
                <van-col span="12" class="stu-header">
                    <van-image
                            :fit="imgFit"
                            class="user-header"
                            src="../../assets/img/coueseBanner.png"
                    />
                    <span>匿名用户</span>
                </van-col>
                <van-col span="12" class="stu-time">
                    <div>2019-07-05</div>
                    <div>减速塑性</div>
                </van-col>
            </van-row>
            <div>
                <p>评语评语评语评语评语评语评语</p>

                <van-row type="flex" justify="space-between">
                    <van-col span="7">
                        <van-image
                                :fit="imgFit"
                                src="../../assets/img/coueseBanner.png"
                        />
                    </van-col>
                    <van-col span="7">
                        <van-image
                                :fit="imgFit"
                                src="../../assets/img/coueseBanner.png"
                        />
                    </van-col>
                    <van-col span="7">
                        <van-image
                                :fit="imgFit"
                                src="../../assets/img/coueseBanner.png"
                        />
                    </van-col>
                </van-row>
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
    export default {
        name: "TrainerInfo",
        data() {
            return {
                imgFit:'cover',
                starVal: 3,
                title:'私教详情',
                routerName:'TrainerMain',
                banner:require('../../assets/img/coueseBanner.png'),
            }
        },
        methods: {

            getImg(images,index) {
                ImagePreview({
                    images: images,
                    showIndex: true,
                    loop: false,
                    startPosition: index
                });
            },

            goTrainerInfo(e){
                console.log();
            },
        },
        created() {
            let trainerId=this.$route.params.trainerId || 0;
            console.log(`${trainerId}`);
        },
    }
</script>

<style scoped lang="scss">

</style>