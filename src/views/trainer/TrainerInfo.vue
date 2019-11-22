<template>
    <div class="main">
        <topBar :title="title"  :routerName="routerName"/>
        <div class="tInfo-header tInfo-item">
            <van-row type="flex">
                <van-col span="6" class="">
                    <img src="../../assets/img/coueseBanner.png" alt="">
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

        </div>

        <!--学员评价-->
        <div class="tInfo-item">

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
            }
        },
        methods: {},
        created() {
            let trainerId=this.$route.params.trainerId || 0;
            console.log(`${trainerId}`);
        },
    }
</script>

<style scoped lang="scss">

</style>