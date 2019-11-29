<template>
    <div class="main">
        <topBar :title="title"  :routerName="routerName"/>
        <div class="tInfo-header tInfo-item">
            <van-row type="flex">
                <van-col span="6" class="">
                    <img :src="banner" alt="" @click="getImg(banner,1)">
                </van-col>
                <van-col span="18" class="">
                    <div class="trainer-name">教练名字</div>
                    <div class="trainer-type">
                        <span>减脂</span>
                        <span>增肌</span>
                    </div>
                    <div class="trainer-valuate">好评：96%<span>/</span>  累计上课590节</div>
                </van-col>
            </van-row>
            <van-row type="flex" justify="space-between">
                <van-col span="7" class="">
                    <img src="../../assets/img/coueseBanner.png" alt="">
                    <span>学院案例</span>
                </van-col>
                <van-col span="7" class="">
                    <img src="../../assets/img/coueseBanner.png" alt="">
                    <span>学院案例</span>
                </van-col>
                <van-col span="7" class="">
                    <img src="../../assets/img/coueseBanner.png" alt="">
                    <span>学院案例</span>
                </van-col>
            </van-row>
            <div>自我介绍</div>
        </div>

        <!--所授课程-->
        <div class="tInfo-item">
            <van-row type="flex" justify="space-between">
                <!--图片放大预览   课程封面-->
                <van-col span="7" class="trainer-left">
                    <van-image
                            fit="cover"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                </van-col>

                <!--课程信息-->
                <van-col span="10" class="trainer-center" @click="goTrainerOrder($event)" :data-trainerId="1">
                    <div class="trainer-name">课程名字</div>
                    <div class="trainer-right">
                        ￥<span>240</span>/课时起
                    </div>
                </van-col>

                <!--价格-->
                <van-col span="7" class="trainer-right" @click="goTrainerInfo($event)"  :data-trainerId="1">
                    <button type="button">购买</button>
                </van-col>
            </van-row>

        </div>

        <!--学员评价-->
        <div class="tInfo-item">
            
            <van-row justify="space-between">
                <van-col span="12">
                    <img src="" alt="">
                    <span>匿名用户</span>
                </van-col>
                <van-col span="12">
                    <div>2019-07-05</div>
                    <div>减速塑性</div>
                </van-col>
            </van-row>
            <div>
                <p>评语评语评语评语评语评语评语</p>
                <div>
                    <img src="../../assets/img/coueseBanner.png" alt="">
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
                title:'私教详情',
                routerName:'TrainerMain',
                banner:require('../../assets/img/coueseBanner.png'),
            }
        },
        methods: {
<<<<<<< HEAD
            getImg(images,index) {
                ImagePreview({
                    images: images,
                    showIndex: true,
                    loop: false,
                    startPosition: index
                });
=======
            goTrainerInfo(e){
                console.log();
>>>>>>> 7f824b7558b303fb50662862f0490452995b1164
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