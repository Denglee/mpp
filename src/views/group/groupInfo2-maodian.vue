
<template>
    <div class="container">
        <img src="../../assets/img/coueseBanner.png" alt="">
        <!--导航-->
        <nav class="anchor-nav">
            <a class="anchor-btn" v-for="(item, index) in navList" :key="index" @click="jump(index)" :class="index==0?'current':''">{{item}}</a>
        </nav>

        <!--滚动分类-->
        <div class="wrapper">
            <div class="section-list" v-for="(item, index) in list" :key="index"
            >
                <div class="section-li" :style="{'background':item.backgroundcolor}">{{item.name}}</div>
            </div>
        </div>
        <div id="buwei"></div>
    </div>
</template>
<script>
    export default {
        name:"groupInfo",
        data(){
            return {
                scroll: '',
                list: [{
                    name: "第一条",
                    backgroundcolor: "#90B2A3"
                }, {
                    name: "第二条",
                    backgroundcolor: "#A593B2"
                }, {
                    name: "第三条",
                    backgroundcolor: "#A7B293"
                }],
                navList: ['课程介绍', '约课规则','课后评价']
            }
        },
        methods: {
            dataScroll: function () {
                let scrollTOP=document.documentElement.scrollTop || document.body.scrollTop;
                console.log(scrollTOP);
                this.scroll =scrollTOP;
            },
            jump(index) {
                // console.log(index);
                let sectionList = document.getElementsByClassName('section-list');
                // 获取需要滚动的距离
                let totalTop = sectionList[index].offsetTop;
                // Chrome
                document.body.scrollTop = totalTop;
                // Firefox
                document.documentElement.scrollTop = totalTop;
                // Safari
                window.pageYOffset = totalTop;

            },

            // 滚动位置
            loadSroll: function () {
                let that = this;
                let btnAnchor = $(".anchor-btn");
                let sectionList = document.getElementsByClassName('section-list');
                for (let i = sectionList.length-1; i >= 0; i--) {
                    if (that.scroll >= (sectionList[i].offsetTop )) {
                        btnAnchor.eq(i).addClass("current").siblings().removeClass("current");
                        break;
                    }
                }
            }
        },
        watch: {
            scroll: function () {
                this.loadSroll()
            }
        },
        mounted() {
            window.addEventListener('scroll', this.dataScroll);
        },
        created() {
            console.log(this.$route.params.id);
        },
    }
</script>

<style>
    .anchor-nav{
        position:relative;
        left:0;
        top:1rem;
        border: solid 1px red;
        box-sizing: border-box;
        display: flex;
        align-content: space-between;
    }

    .anchor-btn {
        display: block;
        width: 33.33%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #eee;
        margin: 10px 0;
    }
    .section-list {
        min-height:3rem;
        width:100%
    }
    .section-li{
        width:100%;
        height:3rem;
    }
    .current {
        color: #fff;
        background: red!important;
    }
    #buwei{
        height: calc(100vh - 200px);
    }
</style>

