
<template>
    <div class="gInfo-main">
        <topBar :title="title"  :routerName="routerName"/>

        <img src="../../assets/img/coueseBanner.png" alt="">

        <van-tabs v-model="activeName">
            <van-tab title="标签 1" name="a">内容 1</van-tab>
            <van-tab title="标签 2" name="b">内容 2</van-tab>
            <van-tab title="标签 3" name="c">内容 3</van-tab>
        </van-tabs>

        <div class="gInfo-btnGroup">
            <van-button  :disabled="isDisable" size="small"  type="default" @click="gInfoBtnOrder($event)" :data-userId="1">立即预约</van-button>
            <van-button  :disabled="isDisable" size="small"  type="primary" @click="gInfoBtnJoin($event)" :data-userId="2">加入会员，免费约课</van-button>
        </div>
    </div>
</template>
<script>
    export default {
        name:"groupInfo",
        data(){
            return {
                routerName:'home',  //返回到的页面
                title:'课程详情',
                isDisable:false, //按钮是否禁止点击

                activeName:'a',  //tab显示的页面
            }
        },
        methods: {

            /*立即预约*/
            gInfoBtnOrder(e){
                console.log(e);
                this.isDisable=true;
                setTimeout(()=>{
                    this.isDisable = false   //点击一次时隔两秒后才能再次点击
                },2000);

                let id = e.currentTarget.dataset.userid;
                console.log(`${id}`);
                this.$toast({
                    message: '手机号不能为空',
                    position: 'middle',
                    duration: 1000
                });
                // setTimeout(function() {
                //     clicktag = 0;
                // }, 500);
            },

            /*立即预约*/
            gInfoBtnJoin(e){
                this.isDisable=true;
                setTimeout(()=>{
                    this.isDisable=false   //点击一次时隔两秒后才能再次点击
                },2000);
                let id = e.currentTarget.dataset.userid;
                console.log(`${id}`);
            },
        },

        created() {
            console.log(this.$route.params.id);
        },
    }
</script>


