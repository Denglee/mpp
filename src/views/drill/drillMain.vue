
<template>
    <div class="container">

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
        name:"drillMain",
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
                }, {
                    name: "第四条",
                    backgroundcolor: "#0F2798"
                }, {
                    name: "第五条",
                    backgroundcolor: "#0A464D"
                }],
                navList: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            dataScroll: function () {
                this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
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
        }
    }
</script>

<style>
    .anchor-nav{
        position:fixed;
        right:30px;
        top:300px;
    }

    .anchor-btn {
        display: block;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #eee;
        margin: 10px 0;
    }
    .section-list {
        min-height:200px;
        width:100%
    }
    .section-li{
        width:100%;
        height:200px;
        font-size:30px;
        text-align:center;
        font-weight:bold;
        color:#fff;
    }
    .current {
        color: #fff;
        background: red!important;
    }
    #buwei{
        height: calc(100vh - 200px);
    }
</style>
