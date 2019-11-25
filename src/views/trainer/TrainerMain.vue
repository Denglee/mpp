<template>
    <div class="main">
        <topBar :title="title"  :routerName="routerName"/>

        <img src="../../assets/img/coueseBanner.png" alt="">

        <div class="trainer-list">
            <!--教练列表-->
            <van-row type="flex" justify="space-between">
                <!--图片放大预览   教练头像-->
                <van-col span="5" class="trainer-left">
                    <van-image
                    fit="cover"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                </van-col>

                <!--教练信息-->
                <van-col span="12" class="trainer-center" @click="goTrainerInfo($event)" :data-trainerId="1">
                    <div class="trainer-name">教练名字</div>
                    <div class="trainer-type">
                        <span>减脂</span>
                        <span>增肌</span>
                    </div>
                    <div class="trainer-valuate">好评：96%<span>/</span>  累计上课590节</div>
                </van-col>

                <!--价格-->
                <van-col span="7" class="trainer-right" @click="goTrainerInfo($event)"  :data-trainerId="1">
                    ￥<span>240</span>/课时起
                </van-col>
            </van-row>

        </div>

    </div>
</template>
<script>
    export default {
        name:'trainMain',
        data(){
            return {
                title:'私人教练',
                routerName:'home',
            }
        },
        methods: {
            /*进入教练详情*/
            goTrainerInfo(e){
                let trainerId = e.currentTarget.dataset.trainerid;
                console.log(`${trainerId}`);

                this.$router.push({
                    path: `/trainer/trainerInfo/${trainerId}`,
                })
            },
        },
        watch: {

        },
        mounted() {

        }
    }
</script>
