<template>
    <div>
        <!-- 底部栏 -->
        <footer class="footer-box">
            <ul class="footer-nav">
                <li v-for='(tabbar,index) in tabbars' :key='tabbars.id'  class="footer-item">
                    <router-link :to='tabbar.routerName' @click.native="changeHash(index)">
                        <div class="iconfont" :class="tabbar.tabImgSrc"></div>
                        <div class="text">{{tabbar.title}}</div>

                    </router-link>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
    // 底部栏图标显示
    let tabbars=[
        {id:1, tabImgSrc:'icon-shouye1',  title:"首页",routerName:{name:'home',}},
        {id:2, tabImgSrc:'icon-huiyuan2',  title:"团课",routerName:{name:'groupMain',}},
        {id:3, tabImgSrc:'icon-huiyuan3',  title:"买卡",routerName:{name:'cardMain',}},
        {id:4, tabImgSrc:'icon-gerenzhongxin3',  title:"个人中心",routerName:{name:'userMain',}},
    ];

    export default {
        name: "bottomBar",
        data(){
            return{
                //底部栏数据
                selected:"",
                tabbars:tabbars,  //底部栏数据
                tabCurrentIndex:0,
                index1:0,
            }
        },
        created(){
            // let index=sessionStorage.getItem('tabCurrentIndex');
            // console.log('created'+index);

            // this.tabCurrentIndex=index;
        },

        methods:{
            // 底部导航栏选中切换
            changeHash(index){
                this.tabCurrentIndex=index;
            },
        },

        watch:{
            // 监听tabbar选中
            selected:function(newV,oldV){
                console.log("当前的："+newV,"上一个："+oldV);
                console.log("selected："+this.selected);
                this.$router.push({name:this.selected});
            }
        }
    }
</script>

<style scoped lang="scss">


</style>